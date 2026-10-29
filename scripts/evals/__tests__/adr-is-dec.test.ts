/**
 * The dry check of the eval case `lifecycle/adr-is-dec`, with no model run. It builds the
 * case's scaffold, plays a correct run and faulty runs with the real `brain new-doc`, and
 * applies the case's own grader files to each, as `claude plugin eval` 2.1.312 reads them.
 * No grader can run `brain check`, so the test also proves that the content graders pass
 * exactly when the DEC schema passes the file as an architecture decision.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkDoc, readFrontmatter } from "../../workspace/schema";

// A played run starts bash and bun processes, which take seconds on a loaded machine
// (parallel builds run several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const caseDir = `${import.meta.dir}/../../../evals/lifecycle/adr-is-dec`;
const cli = `${import.meta.dir}/../../brain.ts`;
const slug = "orders-event-sourcing";
const record = `docs/decisions/DEC-001-${slug}.md`;
let work: string;

type Grader = Record<string, unknown> & { name: string; type: string };

/** What a run leaves: its workspace, the files it created, and the Bash commands it ran. */
type Run = { root: string; created: string[]; commands: string[] };

/** The frontmatter of a case file, or an empty map when it has none. */
function front(text: string): Record<string, unknown> {
  const parsed = readFrontmatter(text);
  return parsed !== null && "data" in parsed ? parsed.data : {};
}

async function readGraders(): Promise<Grader[]> {
  const names = await readdir(`${caseDir}/graders`);
  return Promise.all(
    names
      .filter((file) => file.endsWith(".md"))
      .toSorted()
      .map(async (file) => {
        const data = front(await Bun.file(`${caseDir}/graders/${file}`).text());
        return { ...data, name: file.replace(/\.md$/u, ""), type: String(data.type) };
      }),
  );
}

async function grader(name: string): Promise<Grader> {
  const all = await readGraders();
  const found = all.find((each) => each.name === name);
  if (found === undefined) {
    throw new Error(`no grader ${name}`);
  }
  return found;
}

function isFileTarget(target: unknown): target is { source: "file"; path: string } {
  return (
    typeof target === "object" &&
    target !== null &&
    (target as { source?: unknown }).source === "file" &&
    typeof (target as { path?: unknown }).path === "string"
  );
}

/** The text a regex grader reads; null when its file does not exist, which fails the grader. */
async function targetText(target: unknown, run: Run): Promise<string | null> {
  if (target === "files") {
    return run.created.join("\n");
  }
  if (isFileTarget(target)) {
    const file = Bun.file(`${run.root}/${target.path}`);
    return (await file.exists()) ? await file.text() : null;
  }
  throw new Error(`the dry check does not read the target ${JSON.stringify(target)}`);
}

/** Apply one grader to a run, with the pass rules of `claude plugin eval` 2.1.312. */
async function passes(each: Grader, run: Run): Promise<boolean> {
  if (each.type === "file_exists") {
    const path = String(each.path);
    if (/[*?]/u.test(path)) {
      throw new Error(`${each.name}: the dry check reads a literal path only`);
    }
    return run.created.includes(path) === (each.exists ?? true);
  }
  if (each.type === "tool_used" && each.tool === "Bash") {
    // The runner tests input_match against the call's JSON input, with no flags. A pattern
    // that compiles with `u` matches ASCII text the same way, so `u` only adds strictness.
    const match = new RegExp(String(each.input_match ?? ""), "u");
    const count = run.commands.filter((command) => match.test(JSON.stringify({ command }))).length;
    return count >= Number(each.min ?? 1) && count <= Number(each.max ?? Infinity);
  }
  if (each.type === "regex") {
    const text = await targetText(each.target ?? "last_message", run);
    if (text === null) {
      return false;
    }
    const found = new RegExp(String(each.pattern), String(each.flags ?? "")).test(text);
    const match = each.match ?? "contains";
    if (match === "contains" || match === "not_contains") {
      return found === (match === "contains");
    }
  }
  throw new Error(`${each.name}: the dry check does not model this ${each.type} grader`);
}

/** The name of each grader that fails the run. */
async function failing(run: Run): Promise<string[]> {
  const failed: string[] = [];
  for (const each of await readGraders()) {
    if (!(await passes(each, run))) {
      failed.push(each.name);
    }
  }
  return failed;
}

/** Every file in a folder outside `.git`, relative to it. */
async function filesIn(root: string): Promise<string[]> {
  const found: string[] = [];
  for await (const path of new Bun.Glob("**/*").scan({ cwd: root })) {
    found.push(path);
  }
  return found.toSorted();
}

/** Build the case's scaffold in a new folder, with the environment the runner gives it. */
async function scaffold(name: string): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root);
  const res = Bun.spawnSync(["bash", `${caseDir}/scaffold.sh`], {
    cwd: root,
    env: { PATH: process.env.PATH ?? "", HOME: `${work}/home`, TMPDIR: tmpdir(), TERM: "dumb" },
  });
  expect(res.stderr.toString()).toBe("");
  expect(res.exitCode).toBe(0);
  return root;
}

/** Run `brain new-doc DEC <name>` in a scaffold, and return the command as the skill spells it. */
function newDoc(root: string, name: string): string {
  const res = Bun.spawnSync(["bun", cli, "new-doc", "DEC", name], {
    cwd: root,
    env: { ...process.env, GIT_CEILING_DIRECTORIES: work },
  });
  expect(res.stderr.toString()).toBe("");
  expect(res.exitCode).toBe(0);
  // Claude Code puts the plugin's path in place of ${CLAUDE_PLUGIN_ROOT} when the skill loads.
  return `bun "/plugins/brain/scripts/brain.ts" new-doc DEC ${name}`;
}

/** Fill a new decision record the way an agent does for the case's decision: an ADR. */
function fillAsArchitecture(text: string): string {
  return text
    .replace("<decision or architecture>", "architecture")
    .replace("hard-to-reverse: <true or false>", "hard-to-reverse: true")
    .replace("surprising: <true or false>", "surprising: true")
    .replace("real-trade-off: <true or false>", "real-trade-off: true")
    .replace("<IDEA-NNN#NN>", "user")
    .replace("<name>", "Sam")
    .replace("<title>", "Event-source the orders write model")
    .replace(
      /<1-3 sentences:[^>\n]*>/u,
      "Finance needs a full audit trail of every order change, so the orders write model is event-sourced and the read side is projected into Postgres. Plain CRUD tables lose that trail, and a hosted event store is out because ops runs only Postgres.",
    );
}

/** Play a run: scaffold, then `act` in the workspace, which returns the Bash commands it ran. */
async function play(name: string, act: (root: string) => Promise<string[]>): Promise<Run> {
  const root = await scaffold(name);
  const before = new Set(await filesIn(root));
  const commands = await act(root);
  const after = await filesIn(root);
  const created = after.filter((path) => !before.has(path));
  return { root, created, commands };
}

/** A run that makes the record with new-doc and then edits it with `fill`. */
function viaNewDoc(name: string, fill: (text: string) => string): Promise<Run> {
  return play(name, async (root) => {
    const command = newDoc(root, slug);
    const file = `${root}/${record}`;
    await Bun.write(file, fill(await Bun.file(file).text()));
    return [command];
  });
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-adr-is-dec-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("lifecycle/adr-is-dec, the case files", () => {
  test("the prompt asks for an ADR, names the slug the graders read, and stays within three runs per arm", async () => {
    const text = await Bun.file(`${caseDir}/prompt.md`).text();
    // The keys the case loader of 2.1.312 accepts; any other key fails the case.
    const allowed = new Set([
      "schema_version",
      "name",
      "description",
      "tags",
      "plugins",
      "runs",
      "expected_outcome",
      "model",
      "max_turns",
      "timeout_seconds",
      "allowed_tools",
      "disallowed_tools",
      "artifact_publish",
      "growthbook_overrides",
      "append_system_prompt",
      "env",
    ]);
    const data = front(text);
    expect(Object.keys(data).filter((key) => !allowed.has(key))).toEqual([]);
    expect(Number(data.runs ?? 3)).toBeLessThanOrEqual(3);
    expect(data.allowed_tools).toEqual(["Read", "Glob", "Grep", "Skill", "Bash", "Write", "Edit"]);
    expect(text).toContain("Write an ADR for");
    expect(text).toContain(`\`${slug}\``);
  });

  test("the scaffold is a fresh brain repo: setup-brain's workspace.md, and no decision record", async () => {
    const root = await scaffold("fresh");
    const template = await Bun.file(
      `${import.meta.dir}/../../../skills/setup-brain/workspace.md`,
    ).text();
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(template);
    const files = await filesIn(root);
    expect(files.filter((path) => path.startsWith("docs/decisions/"))).toEqual([]);
    expect(Bun.spawnSync(["git", "rev-parse", "--git-dir"], { cwd: root }).exitCode).toBe(0);
  });

  test("every placeholder in the DEC template is one the filled grader catches", async () => {
    const template = await Bun.file(`${import.meta.dir}/../../workspace/templates/DEC.md`).text();
    const filled = await grader("filled");
    const pattern = new RegExp(String(filled.pattern), String(filled.flags ?? ""));
    const placeholders = template.match(/<[^>\n]+>/gu) ?? [];
    expect(placeholders.length).toBeGreaterThan(0);
    expect(placeholders.filter((placeholder) => !pattern.test(placeholder))).toEqual([]);
  });
});

describe("lifecycle/adr-is-dec, the graders on played runs", () => {
  test("a record made by new-doc and filled as an ADR passes every grader and the DEC schema", async () => {
    const run = await viaNewDoc("good", fillAsArchitecture);
    expect(await failing(run)).toEqual([]);
    expect(checkDoc("DEC", await Bun.file(`${run.root}/${record}`).text(), "DEC-001")).toEqual([]);
  });

  test("a record new-doc made but the agent never filled fails on its content", async () => {
    const run = await viaNewDoc("unfilled", (text) => text);
    expect(await failing(run)).toEqual(["filled", "kind-architecture", "passes-check"]);
  });

  test("a record the agent wrote by hand fails only the new-doc grader", async () => {
    const source = await viaNewDoc("source", fillAsArchitecture);
    const good = await Bun.file(`${source.root}/${record}`).text();
    const run = await play("by-hand", async (root) => {
      await Bun.write(`${root}/${record}`, good);
      return [];
    });
    expect(await failing(run)).toEqual(["new-doc-ran"]);
  });

  test("an ADR in the old format, with no decision record, fails every grader", async () => {
    const run = await play("old-format", async (root) => {
      await Bun.write(
        `${root}/docs/decisions/ADR-001-${slug}.md`,
        "# ADR-001: Event-source the orders write model\n\n## Status\nAccepted\n",
      );
      return [];
    });
    expect(await failing(run)).toEqual([
      "dec-file",
      "filled",
      "kind-architecture",
      "new-doc-ran",
      "passes-check",
      "single-record",
    ]);
  });

  test("a second record for the same decision fails the single-record grader", async () => {
    const run = await play("twice", async (root) => {
      const first = newDoc(root, slug);
      const file = `${root}/${record}`;
      await Bun.write(file, fillAsArchitecture(await Bun.file(file).text()));
      return [first, newDoc(root, `${slug}-again`)];
    });
    expect(await failing(run)).toEqual(["single-record"]);
  });

  test("a plain decision, with one ADR test false, fails only the kind grader", async () => {
    const run = await viaNewDoc("plain", (text) =>
      fillAsArchitecture(text)
        .replace("kind: architecture", "kind: decision")
        .replace("surprising: true", "surprising: false"),
    );
    expect(checkDoc("DEC", await Bun.file(`${run.root}/${record}`).text(), "DEC-001")).toEqual([]);
    expect(await failing(run)).toEqual(["kind-architecture"]);
  });
});

describe("lifecycle/adr-is-dec, the content graders agree with the DEC schema", () => {
  const variants: [string, (text: string) => string][] = [
    ["as filled", (text) => text],
    ["from a map row", (text) => text.replace("from: user", "from: IDEA-004#03")],
    ["with evidence", (text) => text.replace("evidence: []", "evidence: [RES-004, RES-007]")],
    ["with no evidence line", (text) => text.replace(/^evidence: .*\n/mu, "")],
    ["with no comments", (text) => text.replaceAll(/ +#.*$/gmu, "")],
    ["superseded", (text) => text.replace("status: accepted", "status: superseded by DEC-007")],
    ["from a placeholder", (text) => text.replace("from: user", "from: <IDEA-NNN#NN>")],
    ["decided by a placeholder", (text) => text.replace("by Sam", "by <name>")],
    ["decided with no date", (text) => text.replace(/decided: .*/u, "decided: yesterday")],
    ["with another ID", (text) => text.replace("id: DEC-001", "id: DEC-1")],
    ["with an unknown status", (text) => text.replace("status: accepted", "status: done")],
    ["with an unknown kind", (text) => text.replace("kind: architecture", "kind: adr")],
    ["with an extra field", (text) => text.replace("id: DEC-001\n", "id: DEC-001\ntitle: x\n")],
    ["with one test false", (text) => text.replace("surprising: true", "surprising: false")],
    ["with another H1 ID", (text) => text.replace("# DEC-001: ", "# DEC-002: ")],
    ["with no H1 ID", (text) => text.replace("# DEC-001: ", "# ")],
  ];

  // One played run; each variant rewrites its record, so a variant spawns no process.
  let base: Run;
  let filled: string;

  beforeAll(async () => {
    base = await viaNewDoc("agree", fillAsArchitecture);
    filled = await Bun.file(`${base.root}/${record}`).text();
  });

  test.each(variants)("%s", async (name, change) => {
    const text = change(filled);
    // A change that finds nothing to replace would test nothing.
    expect(text === filled).toBe(name === "as filled");
    await Bun.write(`${base.root}/${record}`, text);
    const graded =
      (await passes(await grader("passes-check"), base)) &&
      (await passes(await grader("kind-architecture"), base));
    const checked =
      checkDoc("DEC", text, "DEC-001").length === 0 && /^kind: architecture/mu.test(text);
    expect(graded).toBe(checked);
  });
});
