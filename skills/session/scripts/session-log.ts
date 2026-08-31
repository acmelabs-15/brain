/**
 * The session log as a model — everything the CLI (`session.ts`) needs that is not the
 * CLI itself: where the log lives, a session file's header and template, which session a run
 * acts on, what the gate counts, the entry skeleton, and every document `init` writes.
 * Pure where it can be (tested in `__tests__/session-log.test.ts`); the only I/O here is
 * asking git for the repo root.
 *
 * A session is a bounded stream of work toward one Goal. Its status is `in progress` from
 * `new` until `close` writes `done` — the same words a plan and a plan part carry (ADR-001).
 * A conversation names the session it logs into; one that changes nothing needs none. A file
 * without a Status line, or with the older words `open` / `closed`, is read as
 * `in progress` / `done`.
 */
import { join } from "node:path";

// ---------------------------------------------------------------------------------------
// Where things are. The tool runs from wherever the plugin is installed, against the docs of
// whatever repo the conversation is in: the docs hang off the user's project root, which is
// `CLAUDE_PROJECT_DIR` inside a Claude Code session, the git toplevel outside one, and the
// working directory as the last resort.
// ---------------------------------------------------------------------------------------

function fromEnv(name: string, fallback: () => string): string {
  const value = process.env[name];
  return value && value.length > 0 ? value : fallback();
}

function gitToplevel(): string | undefined {
  const r = Bun.spawnSync(["git", "rev-parse", "--show-toplevel"]);
  if (r.exitCode !== 0) return undefined;
  const dir = r.stdout.toString().trim();
  return dir.length > 0 ? dir : undefined;
}

/** The user's repo — never the plugin's. */
export function projectDir(): string {
  return fromEnv("CLAUDE_PROJECT_DIR", () => gitToplevel() ?? process.cwd());
}

export function sessionsDir(root = projectDir()): string {
  return join(root, "docs", "sessions");
}

/**
 * Archived logs: the session files of a repository whose history was merged into this one
 * (ADR-003). Read for the commits they account for; never listed, selected or written.
 */
export function archiveDir(root = projectDir()): string {
  return join(sessionsDir(root), "archive");
}

export function planDir(root = projectDir()): string {
  return join(root, "docs", "plan");
}

export function contextFile(root = projectDir()): string {
  return join(root, "CONTEXT.md");
}

// ---------------------------------------------------------------------------------------
// A session file: its header, its status words, its template.
// ---------------------------------------------------------------------------------------

export const FILL = "_(fill in)_";
export const STATUSES = ["in progress", "done"] as const;
export type Status = (typeof STATUSES)[number];
/** The words sessions carried before ADR-001; read, never written. */
const LEGACY_STATUS: Record<string, Status> = { open: "in progress", closed: "done" };

export interface SessionHeader {
  seq: number;
  started: string;
  title: string;
  goal: string;
  status: Status;
  /** The plan (and part) this session serves, or "" when unplanned. */
  plan: string;
}

export interface Session extends SessionHeader {
  file: string;
  name: string;
  text: string;
}

export function id(seq: number): string {
  return `SES-${String(seq).padStart(3, "0")}`;
}

export function slugify(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function parseHeader(name: string, text: string): SessionHeader {
  const num = name.match(/^SES-(\d{3})-.+\.md$/);
  if (!num) throw new Error(`${name}: not a session file name (SES-NNN-<slug>.md)`);
  const h1 = text.match(/^# (\d{4}-\d{2}-\d{2} \d{2}:\d{2}) · (.+)$/m);
  if (!h1) throw new Error(`${name}: first heading must be "# YYYY-MM-DD HH:MM · Title"`);
  const goal = text.match(/^- Goal: (.+)$/m)?.[1] ?? "";
  const rawStatus = text.match(/^- Status: (.+?)\s*$/m)?.[1];
  const status: Status | undefined =
    rawStatus === undefined
      ? undefined
      : STATUSES.includes(rawStatus as Status)
        ? (rawStatus as Status)
        : LEGACY_STATUS[rawStatus];
  if (rawStatus !== undefined && status === undefined) {
    throw new Error(`${name}: Status must be one of ${STATUSES.join(" | ")}, got "${rawStatus}"`);
  }
  const plan = (text.match(/^- Plan: (.+)$/m)?.[1] ?? "").trim();
  return {
    seq: Number(num[1]),
    started: h1[1] ?? "",
    title: h1[2] ?? "",
    goal,
    status: status ?? "in progress",
    plan: plan === "—" || plan === "-" || plan === "none" ? "" : plan,
  };
}

/** The file `new` writes. */
export function template(started: string, title: string, plan: string): string {
  return `# ${started} · ${title}

- Goal: ${FILL}
- Status: in progress
- Plan: ${plan || "—"}
- Outcome: ${FILL}

## Narrative

${FILL} — what was asked, decided, tried and abandoned, verified (and how); cite entries by sha.

## Changes (one entry per commit, in order)
`;
}

/**
 * Placeholder lines the gate counts: entry lines, the Goal and the Narrative
 * placeholder. `Outcome` is the closing line — a session in progress has none
 * yet — so only `close` (`closing: true`) counts it.
 */
export function placeholderCount(text: string, closing = false): number {
  return text.split("\n").filter((l) => {
    if (!l.includes(FILL)) return false;
    if (!closing && /^- Outcome: /.test(l)) return false;
    return /^\s*- |^_\(fill in\)_/.test(l);
  }).length;
}

/** Rewrite the Status line, inserting one after Goal when the file predates it. */
export function withStatus(text: string, status: Status): string {
  if (/^- Status: .+$/m.test(text)) return text.replace(/^- Status: .+$/m, `- Status: ${status}`);
  if (!/^- Goal: .+$/m.test(text)) throw new Error("no Goal line to insert Status after");
  return text.replace(/^(- Goal: .+)$/m, `$1\n- Status: ${status}`);
}

/**
 * Whether a session's `Plan:` line serves the named plan — `PLAN-003 · part 2`
 * serves `PLAN-003` and `plan-003`; `PLAN-0031` does not.
 */
export function servesPlan(plan: string, wanted: string): boolean {
  const p = plan.trim().toLowerCase();
  const w = wanted.trim().toLowerCase();
  return w.length > 0 && p.startsWith(w) && !/[0-9]/.test(p.charAt(w.length));
}

export function indexRow(s: Session): string {
  const plan = s.plan ? ` · ${s.plan}` : "";
  return `- [${id(s.seq)} · ${s.started} · ${s.title}](${s.name}) — ${s.status}${plan} — ${s.goal}`;
}

/**
 * Which session a run acts on. Named (`--session SES-004`, `4`, or the file
 * name) wins; otherwise the one session in progress. None or several in
 * progress are errors that say what to do, because guessing wrong writes into
 * another conversation's file.
 */
export function selectSession(all: readonly Session[], arg: string | undefined): Session {
  if (arg !== undefined) {
    const want = arg.replace(/\.md$/, "");
    const found = all.find(
      (s) => s.name.replace(/\.md$/, "") === want || String(s.seq) === want || id(s.seq) === want,
    );
    if (!found) throw new Error(`no session file matches --session ${arg}`);
    return found;
  }
  const active = all.filter((s) => s.status === "in progress");
  if (active.length === 1 && active[0]) return active[0];
  if (active.length === 0) {
    throw new Error(
      "no session in progress — name one with `--session SES-NNN` or start one with `new <slug>`",
    );
  }
  const list = active.map((s) => `${id(s.seq)} (${s.title})`).join(", ");
  throw new Error(`${active.length} sessions in progress — say which with --session: ${list}`);
}

// ---------------------------------------------------------------------------------------
// What a session accounts for, and the entry skeleton `append` writes (ADR-021).
// ---------------------------------------------------------------------------------------

/**
 * The shas a session accounts for: every entry heading, plus every sha a parent
 * entry names on an `- Also:` line — a fix-up commit whose value belongs to that
 * parent gets no entry of its own, so the parent vouches for it.
 */
export function knownShas(text: string): string[] {
  const heads = [...text.matchAll(/^### .* · ([0-9a-f]{7,40})$/gm)].map((m) => m[1] ?? "");
  const also = [...text.matchAll(/^\s*- Also: ([0-9a-f]{7,40})\b/gm)].map((m) => m[1] ?? "");
  return [...heads, ...also].filter((s) => s.length > 0);
}

/**
 * A commit that says, in its own message, that the session log has nothing to gain
 * from it: the trailer `Session-entry: none`. The tool skips it like it skips
 * `docs(session)` commits. Only the commit's author can make that call, and
 * only at commit time — which is the point: the session log holds value, and the
 * decision that a commit has none is recorded where it cannot be forgotten.
 */
export function declinesEntry(body: string): boolean {
  return /^Session-entry:\s*none\s*$/im.test(body);
}

export interface Touched {
  path: string;
  added: number | null;
  deleted: number | null;
}

export interface Commit {
  sha: string;
  date: string;
  subject: string;
  body: string;
  files: Touched[];
}

// A skeleton lists every touched file; past 80 a commit is a mass move or a generated tree, and one
// "… +N more" line plus `git show --stat` serves a reader better than a page of identical phrases.
export const MAX_FILES = 80;

function stat(f: Touched): string {
  return f.added === null || f.deleted === null ? "binary" : `+${f.added}/−${f.deleted}`;
}

/** The entry skeleton for one commit — the shape SKILL.md's entry template shows filled. */
export function render(c: Commit, tag: string | undefined): string {
  const short = c.sha.slice(0, 7);
  const subject = c.subject.replace(/_/g, "\\_");
  const lines = [
    `### ${c.date} · ${subject} · ${short}`,
    "",
    `- Summary: ${FILL}`,
    `- Why: ${FILL}`,
    "- Files:",
  ];
  for (const f of c.files.slice(0, MAX_FILES)) {
    lines.push(`  - \`${f.path}\` (${stat(f)}) — ${FILL}`);
  }
  if (c.files.length > MAX_FILES) {
    lines.push(`  - … +${c.files.length - MAX_FILES} more (\`git show --stat ${short}\`)`);
  }
  if (c.files.length === 0) lines.push("  - _(no files)_");
  lines.push("");
  if (tag) lines.push(`> **Released ${tag}** — tag on this commit.`, "");
  return lines.join("\n");
}

// ---------------------------------------------------------------------------------------
// Every document `init` writes into a repo, as code — one source for what `init` scaffolds
// and what `session template <name>` prints. A template that lived as a markdown file beside
// a prose copy of itself drifted; here the tool is the copy.
// ---------------------------------------------------------------------------------------

export const SESSIONS_INDEX_START = "<!-- sessions:start -->";
export const SESSIONS_INDEX_END = "<!-- sessions:end -->";

/** The session file `new` writes, shown with placeholder prose instead of `_(fill in)_`. */
export function sessionFileTemplate(): string {
  return `# [YYYY-MM-DD HH:MM] · [Title of the session]

- Goal: [what this session set out to do]
- Status: in progress
- Plan: [PLAN-NNN · part N, or —]
- Outcome: [what it actually delivered — releases, merged PRs; written when it closes]

## Narrative

[What was asked, decided, tried and abandoned, verified and how; cite entries by sha]

## Changes (one entry per commit, in order)

### [YYYY-MM-DD] · [type(scope): subject] · [sha]

- Summary: [what this change does as a whole, one or two lines]
- Why: [the problem or request that caused it, naming who asked]
- Also: [sha] — [what that fix-up fixed]                (only when a fix-up is vouched for)
- Files:
  - \`[path/to/file]\` (+[a]/−[d]) — [what changed in this file]
- Notes: [verified how; unverified what; follow-ups; a decision made on the spot]

> **Released [vX.Y.Z]** — tag on this commit.          (only under a release commit's entry)
`;
}

/** `docs/sessions/README.md`: purpose, the index the tool regenerates, the file template. */
export function sessionsReadme(): string {
  return `# Sessions — what has been done, session by session

One file per **session** — a bounded stream of work toward one Goal, \`in progress\` until \`done\`, which
may span any number of conversations. A session usually serves one **part** of a plan in
\`../plan/\`, and that part's status line names the session, so a plan is enough to find the story
of its work. Together these files are the append-only record of every change that reached \`main\`
— for each commit a Summary, the Why, and a note per touched file — **plus** the narrative a
commit log cannot hold: what was asked, tried, abandoned, verified. A new conversation reads them
to pick up exactly where the last one stopped: the plan says what is next, the entries say what
was verified and what was not.

The procedure that writes them is the \`session\` skill (the \`brain\` plugin), three acts:
\`start\` creates a session from a description when a stream of work begins, \`log\` records a
commit right after it lands, \`close\` finishes a session whose Goal is done. Where a plan stands
and what comes next is \`/plan PLAN-NNN\`'s to say. The rules — what an entry holds, which commits
get none, what is never rewritten — are the skill's, so they live with it rather than being copied
here; the tool behind it regenerates the index below.

## Index (newest first — regenerated by the session tool)

${SESSIONS_INDEX_START}
${SESSIONS_INDEX_END}

## Session file template

\`\`\`markdown
${sessionFileTemplate().trimEnd()}
\`\`\`
`;
}

export const CONTEXT_SECTION_HEADING = "## The session log (the docs system)";

/** The glossary section `init` appends to (or creates) `CONTEXT.md`. */
export function contextSection(): string {
  return `${CONTEXT_SECTION_HEADING}

**Session log**:
The \`docs/sessions/\` files together: the append-only record of every change that reached \`main\`
and the narrative around it — what a conversation reads to rehydrate.
_Avoid_: ledger, history, changelog (that is the generated one)

**Session**:
A bounded stream of work toward one Goal, recorded in one \`docs/sessions/SES-NNN\` file;
\`in progress\` from \`start\` until \`close\` writes \`done\` with its Outcome. It may span any
number of conversations and may serve a plan part (its \`Plan:\` line).
_Avoid_: conversation (for this), sitting, chat, the newest file (as the definition of current)

**Conversation**:
One agent context or one human sitting. A participant in a session: it names the session in
progress it logs into, or starts one, before its first commit; a conversation that changes nothing
needs none.
_Avoid_: session (for this)

**Status** (one vocabulary for session, plan and plan part):
A session is \`in progress\` from \`session new\` until \`session close\` writes \`done\` — the Outcome says
whether the Goal was met or abandoned; nothing is appended to a done session. A plan part is
\`planned\`, \`in progress (session SES-NNN)\` or \`done (session SES-NNN, sha)\`; a plan is \`planned\`,
\`in progress\` or \`done\`. Tickets and ADRs carry their own words (triage roles; Accepted / Superseded).
_Avoid_: open, closed (the pre-ADR-024 session words, still read), active, current, finished, complete (as a status)

**Start** / **Log** / **Close** (the three acts of the session skill):
Start — a new session from a description: its Goal, its \`Plan:\` line, its plan part marked in
progress. Log — a commit's entry into a session in progress, with everything the change made
stale. Close — the Goal is done: Outcome written, status \`done\`, the plan part done. The act is
inferred from the arguments; close is always named. A conversation that stops does nothing.
_Avoid_: join, open, leave, end, add, record, entry (as the act name)

**Plan part**:
One \`### Part N\` of a plan in \`docs/plan/\`, with its own status line — \`planned\`, \`in progress
(session SES-NNN)\` or \`done (session SES-NNN, sha)\` — the pointer a new conversation follows from
the plan to the session that holds its story. One session per part.
_Avoid_: phase (as the heading word), step, milestone, ticket

**Gate**:
\`session check\`: exit 0 only when every commit on the branch is accounted for and your session has
no placeholder the gate counts. Its exit status is the verdict; nothing is piped after it.
_Avoid_: check (as the noun), lint, validation

**Entry**:
The block a change worth reading about gets in a session file — Summary, Why, one line per
touched file, Notes — written by the \`log\` act right after the commit. The session log holds
value only: a fix-up commit gets no entry and is vouched for by its parent's \`Also:\` line; a commit
with nothing to record says so itself (\`Session-entry: none\`) and gets none.
_Avoid_: log entry, note, update, record (as the noun), commit (as the unit — a commit is git's)

**Record** (verb):
To write the entry and update everything the commit made stale, in the same step; the practice
the docs system depends on.
_Avoid_: update, log, document (as the verb for this)
`;
}

export const TEMPLATES = {
  session: sessionFileTemplate,
  "sessions-readme": sessionsReadme,
  context: contextSection,
} as const;
export type TemplateName = keyof typeof TEMPLATES;
