/**
 * The session log tool — the CLI over `core.ts` (the model: paths, the session file,
 * the gate's counting, the entry skeleton, every document `init` writes). One file per
 * session under <repo>/docs/sessions/ — a bounded stream of work toward one Goal,
 * `in progress` until `close` writes `done`; a conversation names the session it logs into.
 * `session help` prints USAGE below.
 *
 * Which session a run acts on: the one named with --session, else the single
 * session in progress. None, or more than one, is an error that says what to
 * do — never a guess into another conversation's file.
 *
 * Append-only: every commit on the current branch (merges excluded) that no
 * session accounts for -- no entry heading, no parent entry's `- Also: <sha>`
 * line, no `Session-entry: none` trailer in its message -- gets an entry skeleton — Summary / Why placeholders and
 * one line per touched file (any file: code, docs, config, CI, scripts, assets)
 * with its +/− line counts and a placeholder for what changed in it. A release
 * marker is inserted after each tagged commit. Existing text is never
 * rewritten. `docs(session): …` commits (the log updates themselves) are
 * skipped so the entry-writing commit never chases its own sha. The index
 * block in docs/sessions/README.md is regenerated on every run.
 */
import { existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";
import {
  archiveDir,
  type Commit,
  CONTEXT_SECTION_HEADING,
  contextFile,
  contextSection,
  declinesEntry,
  FILL,
  id,
  indexRow,
  knownShas,
  parseHeader,
  placeholderCount,
  projectDir,
  render,
  selectSession,
  servesPlan,
  type Session,
  sessionsDir,
  sessionsReadme,
  slugify,
  template,
  TEMPLATES,
  type TemplateName,
  type Touched,
  withStatus,
} from "./core";

const ROOT = projectDir();
const DIR = sessionsDir(ROOT);
const ARCHIVE = archiveDir(ROOT);
const INDEX = join(DIR, "README.md");
// Subjects that are the log updates themselves and never get an entry. `docs(ledger)` is the
// pre-2026-08-30 name of the session log; repos that predate the rename carry commits with it.
const SKIP_PREFIXES = ["docs(session)", "docs(ledger)"];
const COMMANDS = ["help", "init", "template", "list", "new", "append", "check", "close", "current"] as const;

const USAGE = `session — the session log tool (bun <plugin>/skills/session/scripts/cli.ts <command>)

  help                                    this text
  init                                    scaffold docs/sessions/README.md and the CONTEXT.md glossary
                                          section in this repo; existing files are kept. docs/plan/ is the
                                          plan skill's to create — a plan's shape has one home, and it is not here
  template <session | sessions-readme | context>
                                          print one of the documents init writes (the session file's shape,
                                          the sessions README, the glossary section)
  list [--plan PLAN-NNN] [--brief]        every session: id, status, title · plan, its Goal; then "in progress: …"
                                          --plan narrows to the sessions serving that plan; --brief drops the
                                          Goal lines, adds "unrecorded: <sha> <subject>" per commit no session
                                          accounts for, and reports a missing log on stdout, exit 0
  new <slug> [--plan "PLAN-NNN · part N"] start SES-<next>-<slug>.md (Status: in progress) and regenerate the index
  append [--session SES-NNN]              entry skeletons for commits no session accounts for ("up to date" when none)
  current [--session SES-NNN]             the session's file, status, Goal, and every placeholder by line number
  check [--session SES-NNN]               the gate: exit 0 "session: complete", exit 1 with missing:/unfilled: lines
  close [--session SES-NNN]               the gate (now counting Outcome), then Status: done

Which session a run acts on: --session (SES-NNN, the number, or the file name), else the single session
in progress; none or several in progress is a refusal that says what to do. A session is "in progress"
or "done" — the words a plan and a plan part use; the older "open" / "closed" are still read. The repo is CLAUDE_PROJECT_DIR, else
the git toplevel, else the working directory. Accounted for: an entry heading with the sha, a parent
entry's "- Also: <sha>" line, the trailer "Session-entry: none" in the commit message, or a
docs(session)/docs(ledger) subject — in a session here or in an archived log under
docs/sessions/archive/ (a merged-in repository's sessions, which keep their numbers and are never
listed or written). Every refusal is one "session: …" line on stderr and exit 1.`;
type Command = (typeof COMMANDS)[number];

function git(...args: string[]): string {
  const r = Bun.spawnSync(["git", ...args], { cwd: ROOT });
  if (r.exitCode !== 0) throw new Error(`git ${args[0]} failed: ${r.stderr.toString()}`);
  return r.stdout.toString();
}

function tagsByCommit(): Map<string, string> {
  const out = git(
    "for-each-ref",
    "--format=%(objectname)%09%(*objectname)%09%(refname:short)",
    "refs/tags",
  );
  const map = new Map<string, string>();
  for (const line of out.split("\n")) {
    if (!line) continue;
    const [obj, peeled, tag] = line.split("\t");
    if (obj && tag) map.set(peeled || obj, tag);
  }
  return map;
}

function commits(): Commit[] {
  const out = git(
    "log",
    "--reverse",
    "--no-merges",
    "--no-renames", // a rename is a delete + an add: plain paths, greppable
    "--date=short",
    "--format=%x01%H%x09%ad%x09%s%x02%b%x02",
    "--numstat",
  );
  const result: Commit[] = [];
  for (const block of out.split("\x01")) {
    if (!block.trim()) continue;
    const [head, body, tail] = block.split("\x02");
    const [sha = "", date = "", subject = ""] = (head ?? "").split("\t");
    const files: Touched[] = [];
    for (const line of (tail ?? "").split("\n")) {
      const [a, d, path] = line.split("\t");
      if (!path) continue;
      files.push({
        path,
        added: a === "-" ? null : Number(a),
        deleted: d === "-" ? null : Number(d),
      });
    }
    result.push({ sha, date, subject, body: body ?? "", files });
  }
  return result;
}

async function sessions(): Promise<Session[]> {
  const list: Session[] = [];
  if (!existsSync(INDEX)) {
    throw new Error(
      `no session log at ${DIR} — run \`session init\` in this repo first (it scaffolds docs/sessions and the CONTEXT.md section)`,
    );
  }
  for (const name of readdirSync(DIR)) {
    if (!/^SES-\d{3}-.+\.md$/.test(name)) continue;
    const file = join(DIR, name);
    const text = await Bun.file(file).text();
    list.push({ ...parseHeader(name, text), file, name, text });
  }
  return list.sort((a, b) => a.seq - b.seq);
}

async function writeIndex(all: Session[]): Promise<void> {
  const rows = [...all].reverse().map(indexRow).join("\n");
  const text = await Bun.file(INDEX).text();
  const START = "<!-- sessions:start -->";
  const END = "<!-- sessions:end -->";
  const a = text.indexOf(START);
  const b = text.indexOf(END);
  if (a === -1 || b === -1) throw new Error("README.md is missing the sessions:start/end markers");
  const next = `${text.slice(0, a + START.length)}\n${rows}\n${text.slice(b)}`;
  if (next !== text) await Bun.write(INDEX, next);
}

/** A bare flag: present or not, removed from argv. */
function flag(argv: string[], name: string): boolean {
  const at = argv.indexOf(name);
  if (at < 0) return false;
  argv.splice(at, 1);
  return true;
}

function option(argv: string[], name: string): string | undefined {
  const at = argv.indexOf(name);
  if (at < 0) return undefined;
  const value = argv[at + 1];
  argv.splice(at, 2);
  return value;
}

/** The subcommand: a bare word; `--word` (the older spelling) still works. */
function command(argv: string[]): Command {
  const word = (argv[0] ?? "append").replace(/^--/, "").replace(/^-h$/, "help");
  if (!COMMANDS.includes(word as Command)) {
    throw new Error(`unknown command "${argv[0]}" — one of: ${COMMANDS.join(", ")}`);
  }
  if (argv.length > 0) argv.shift();
  return word as Command;
}

/** A refusal is a one-line `session: …` message and exit 1, never a stack trace. */
function refuse(error: unknown): never {
  console.error(`session: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}

const argv = process.argv.slice(2);
if (argv[0] === "--") argv.shift();
const sessionArg = option(argv, "--session");
const planArg = option(argv, "--plan");
const brief = flag(argv, "--brief");
let cmd: Command;
try {
  cmd = command(argv);
} catch (error) {
  refuse(error);
}

/**
 * Scaffold the docs system a repo needs before the first session: the sessions
 * index (which the tool regenerates), the plan directory's README (the PRD and
 * plan templates, with the per-part status lines that point at sessions), and
 * the session-log section of CONTEXT.md. A file that already exists is left
 * exactly as it is — this is the first-run step, never a reset.
 */
async function init(): Promise<void> {
  // docs/plan/ is deliberately not scaffolded: the PRD and plan shapes belong to the plan skills
  // (planning-and-task-breakdown, spec-driven-development); this tool reads a plan's part status
  // lines and writes nothing else about plans (Peter, 2026-08-31).
  const writes: [string, string][] = [[INDEX, sessionsReadme()]];
  for (const [to, text] of writes) {
    if (existsSync(to)) {
      console.log(`kept: ${to}`);
      continue;
    }
    mkdirSync(join(to, ".."), { recursive: true });
    await Bun.write(to, text);
    console.log(`wrote: ${to}`);
  }
  const ctx = contextFile(ROOT);
  const section = contextSection();
  const heading = CONTEXT_SECTION_HEADING;
  if (existsSync(ctx)) {
    const text = await Bun.file(ctx).text();
    if (text.includes(heading)) {
      console.log(`kept: ${ctx} (already has "${heading}")`);
    } else {
      await Bun.write(ctx, `${text.replace(/\n+$/, "")}\n\n${section}`);
      console.log(`appended: ${ctx} ← "${heading}"`);
    }
  } else {
    await Bun.write(
      ctx,
      `# Ubiquitous language\n\nThe words this repo uses, one definition each; an _Avoid_ line names the synonyms not to use.\n\n${section}`,
    );
    console.log(`wrote: ${ctx}`);
  }
  console.log("session: initialised — open the first session with `session new <slug>`");
}

if (cmd === "help") {
  console.log(USAGE);
  process.exit(0);
}
if (cmd === "template") {
  const name = argv[0] as TemplateName | undefined;
  if (!name || !(name in TEMPLATES)) refuse(new Error(`usage: session template <${Object.keys(TEMPLATES).join(" | ")}>`));
  process.stdout.write(TEMPLATES[name]());
  process.exit(0);
}
if (cmd === "init") {
  await init().catch(refuse);
  process.exit(0);
}
// `list --brief` is what the skill injects at load time, where a non-zero exit
// or a stderr line would abort the invocation: a missing log is a fact for the
// model to act on, printed on stdout, exit 0.
const all = await sessions().catch((error: unknown) => {
  if (cmd === "list" && brief) {
    console.log(`session: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(0);
  }
  refuse(error);
});

/**
 * The shas an archived log accounts for. `docs/sessions/archive/**` holds the session
 * files of a repository whose history was merged into this one (ADR-003): they keep
 * their own numbers, so they are never listed, selected or appended to — but every
 * commit they record is on this branch, and the gate must not report it missing.
 */
async function archivedShas(): Promise<string[]> {
  if (!existsSync(ARCHIVE)) return [];
  const shas: string[] = [];
  for (const rel of readdirSync(ARCHIVE, { recursive: true }) as string[]) {
    if (!/(^|\/)SES-\d{3}-.+\.md$/.test(rel)) continue;
    shas.push(...knownShas(await Bun.file(join(ARCHIVE, rel)).text()));
  }
  return shas;
}
const archived = await archivedShas().catch(refuse);

/**
 * Commits on this branch that no session accounts for. Excluded: the log updates
 * themselves, commits whose message carries `Session-entry: none`, commits a
 * parent entry vouches for on an `- Also:` line, and commits an archived log records.
 */
function missingCommits(): Commit[] {
  const known = [...all.flatMap((s) => knownShas(s.text)), ...archived];
  return commits().filter(
    (c) =>
      !SKIP_PREFIXES.some((p) => c.subject.startsWith(p)) &&
      !declinesEntry(c.body) &&
      !known.some((k) => c.sha.startsWith(k)),
  );
}

/**
 * The gate: the target session filled, and every commit having an entry.
 * Placeholders left in ANOTHER session belong to another conversation (a
 * concurrent checkout, or a session that ended abruptly): they are reported as
 * warnings so this one never has to edit someone else's file to go green, and
 * never silently rewrites history to do it. `closing` also counts the target's
 * Outcome line.
 */
function gate(target: Session, missing: Commit[], closing = false): boolean {
  let unfilled = 0;
  for (const s of all) {
    const n = placeholderCount(s.text, closing && s === target);
    if (n === 0) continue;
    if (s === target) {
      console.log(`unfilled: ${s.name} has ${n} placeholder line(s)`);
      unfilled += n;
    } else {
      console.log(
        `warning: ${s.name} has ${n} placeholder line(s) — not the gated session; leave it to its own conversation (pass --session to gate a different file)`,
      );
    }
  }
  for (const c of missing) console.log(`missing: ${c.sha.slice(0, 7)} ${c.subject}`);
  return missing.length === 0 && unfilled === 0;
}

const inProgressIds = () => all.filter((s) => s.status === "in progress").map((s) => id(s.seq));

async function list(): Promise<void> {
  // --plan PLAN-NNN narrows to the sessions serving that plan (any part).
  const shown = planArg ? all.filter((s) => servesPlan(s.plan, planArg)) : all;
  for (const s of shown) {
    console.log(`${id(s.seq)}  ${s.status.padEnd(11)}  ${s.title}${s.plan ? ` · ${s.plan}` : ""}`);
    if (!brief) console.log(`            ${s.goal || "(no Goal)"}`);
  }
  if (planArg && shown.length === 0) console.log(`no session serves ${planArg}`);
  const active = inProgressIds();
  console.log(active.length ? `in progress: ${active.join(", ")}` : "in progress: none");
  // The injected state is the one place a conversation is told, before it acts, that a
  // commit on this branch has no entry -- the brief's Findings line comes from here.
  if (brief) {
    for (const c of missingCommits()) console.log(`unrecorded: ${c.sha.slice(0, 7)} ${c.subject}`);
  }
}

async function open(): Promise<void> {
  const slug = slugify(argv[0] ?? "");
  if (!slug) throw new Error('usage: session new <slug> [--plan "PLAN-NNN · part"]');
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const started = `${date} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  const seq = (all.at(-1)?.seq ?? 0) + 1;
  const name = `${id(seq)}-${slug}.md`;
  const file = join(DIR, name);
  if (await Bun.file(file).exists()) throw new Error(`${name} already exists`);
  const title = slug.replace(/-/g, " ");
  const text = template(started, title, planArg ?? "");
  const others = inProgressIds();
  await Bun.write(file, text);
  await writeIndex([...all, { ...parseHeader(name, text), file, name, text }]);
  console.log(
    `session: started ${name} — set the Goal line and the title; pass \`--session ${id(seq)}\` to later runs.`,
  );
  if (others.length) console.log(`note: also in progress — ${others.join(", ")}`);
}

async function current(): Promise<void> {
  // What to fill, where: the selected session, its Goal, and each placeholder
  // line by number — so a caller edits by line instead of hunting.
  const s = selectSession(all, sessionArg);
  console.log(`session: ${s.name}`);
  console.log(`started: ${s.started} · ${s.title}`);
  console.log(`status: ${s.status}${s.plan ? ` · plan: ${s.plan}` : ""}`);
  console.log(`goal: ${s.goal || "(unset)"}`);
  let count = 0;
  s.text.split("\n").forEach((l, i) => {
    if (l.includes(FILL)) {
      count++;
      console.log(`  ${String(i + 1).padStart(4)}: ${l.trim().slice(0, 110)}`);
    }
  });
  console.log(count === 0 ? "placeholders: none" : `placeholders: ${count}`);
}

async function check(): Promise<void> {
  const target = selectSession(all, sessionArg);
  if (!gate(target, missingCommits())) {
    console.log(
      `session: NOT ready — run \`session append --session ${id(target.seq)}\` and fill in the placeholders (\`current --session ${id(target.seq)}\` lists them).`,
    );
    process.exit(1);
  }
  await writeIndex(all);
  console.log(`session: complete (${id(target.seq)}, ${target.status})`);
}

async function close(): Promise<void> {
  // Closing is the gate plus the Outcome: a session closes complete or not at all.
  const target = selectSession(all, sessionArg);
  if (target.status === "done") {
    console.log(`session: ${id(target.seq)} is already done`);
    return;
  }
  if (!gate(target, missingCommits(), true)) {
    console.log(`session: NOT closed — ${id(target.seq)} is not complete.`);
    process.exit(1);
  }
  target.text = withStatus(target.text, "done");
  target.status = "done";
  await Bun.write(target.file, target.text);
  await writeIndex(all);
  const active = inProgressIds();
  console.log(
    `session: closed ${id(target.seq)} — done${active.length ? `; still in progress: ${active.join(", ")}` : ""}`,
  );
}

async function append(): Promise<void> {
  await writeIndex(all);
  const missing = missingCommits();
  if (missing.length === 0) {
    console.log("session: up to date");
    return;
  }
  const target = selectSession(all, sessionArg);
  if (target.status === "done") {
    throw new Error(
      `${id(target.seq)} is done — reopen it (edit its Status line to in progress) or start a new session with \`new <slug>\``,
    );
  }
  const tags = tagsByCommit();
  const body = missing.map((c) => render(c, tags.get(c.sha))).join("\n");
  await Bun.write(target.file, `${target.text.replace(/\n+$/, "")}\n\n${body}`);
  for (const c of missing) console.log(`+ ${c.sha.slice(0, 7)} ${c.subject}`);
  console.log(
    `session: appended ${missing.length} to ${target.name} — fill in every ${FILL} (then \`session check --session ${id(target.seq)}\`).`,
  );
}

const run: Record<Command, () => Promise<void>> = {
  help: async () => console.log(USAGE),
  template: async () => undefined,
  init,
  list,
  new: open,
  append,
  check,
  close,
  current,
};
await run[cmd]().catch(refuse);
