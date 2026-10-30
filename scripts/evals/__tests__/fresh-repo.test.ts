/**
 * The dry check of the eval case `setup/fresh-repo`, with no model run. It builds the case's
 * scaffold, plays a correct setup run and faulty ones with the real setup writer, and applies
 * the case's graders to each, as `claude plugin eval` 2.1.312 reads them. Every grader of this
 * case is computed, so the dry check models them all.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { readFrontmatter } from "../../workspace/schema";

// A played run starts bash and bun processes, which take seconds on a loaded machine
// (parallel builds run several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const repo = `${import.meta.dir}/../../..`;
const caseDir = `${repo}/evals/setup/fresh-repo`;
const writer = `${repo}/scripts/setup/write.ts`;
let work: string;

type Grader = Record<string, unknown> & { name: string; type: string };

/** One tool call of a run: the tool's name and its input. */
type Call = { tool: string; input: Record<string, unknown> };

/** What a run leaves: its workspace, the files it created and its tool calls. */
type Run = { root: string; created: string[]; calls: Call[] };

/** A tool call a grader names: a tool, and a pattern on its JSON input. */
type CallMatch = { tool?: unknown; input_match?: unknown };

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

/** The index of the first call that `match` names, or -1. */
function firstCall(run: Run, match: CallMatch): number {
  // The runner tests input_match against the call's JSON input, with no flags.
  const pattern = new RegExp(String(match.input_match ?? ""), "u");
  return run.calls.findIndex(
    (call) => call.tool === match.tool && pattern.test(JSON.stringify(call.input)),
  );
}

/** Apply one grader to a run, with the pass rules of `claude plugin eval` 2.1.312. */
async function passes(each: Grader, run: Run): Promise<boolean> {
  if (each.type === "tool_used") {
    const pattern = new RegExp(String(each.input_match ?? ""), "u");
    const count = run.calls.filter(
      (call) => call.tool === each.tool && pattern.test(JSON.stringify(call.input)),
    ).length;
    return count >= Number(each.min ?? 1) && count <= Number(each.max ?? Infinity);
  }
  if (each.type === "tool_order") {
    const before = firstCall(run, each.before as CallMatch);
    const after = firstCall(run, each.after as CallMatch);
    return before !== -1 && after !== -1 && before < after;
  }
  if (each.type === "file_exists") {
    // Only files created during the run count.
    const glob = new Bun.Glob(String(each.path));
    return run.created.some((path) => glob.match(path)) === (each.exists ?? true);
  }
  if (each.type === "regex") {
    const target = each.target as { source?: unknown; path?: unknown };
    if (target?.source !== "file") {
      throw new Error(`${each.name}: the dry check reads only file targets in this case`);
    }
    const text = await Bun.file(`${run.root}/${String(target.path)}`).text();
    const found = new RegExp(String(each.pattern), String(each.flags ?? "")).test(text);
    return found === ((each.match ?? "contains") === "contains");
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

/** The bun check, as the skill's step 1 spells it. */
const bunCheck: Call = { tool: "Bash", input: { command: "bun --version" } };

/** Run the real setup writer in `root` with `flags`; return the Bash call as the skill spells it. */
function setup(root: string, ...flags: string[]): Call {
  const res = Bun.spawnSync(["bun", writer, "--root", root, "--layout", "single", ...flags]);
  expect(res.stderr.toString()).toBe("");
  expect(res.exitCode).toBe(0);
  // Claude Code puts the plugin's path in place of ${CLAUDE_PLUGIN_ROOT} when the skill loads.
  const command = `bun "/plugins/brain/scripts/setup/write.ts" --root . --layout single ${flags.join(" ")}`;
  return { tool: "Bash", input: { command: command.trim() } };
}

/** Play a run: scaffold, then `act` in the workspace, which returns the calls it made. */
async function play(name: string, act: (root: string) => Promise<Call[]>): Promise<Run> {
  const root = await scaffold(name);
  const before = new Set(await filesIn(root));
  const calls = await act(root);
  const after = await filesIn(root);
  return { root, created: after.filter((path) => !before.has(path)), calls };
}

/** A correct run: the bun check, the dry run, then the run, with no Codex home on the machine. */
function correct(root: string): Promise<Call[]> {
  const dry = setup(root, "--no-codex", "--dry-run");
  return Promise.resolve([bunCheck, dry, setup(root, "--no-codex")]);
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-fresh-repo-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("setup/fresh-repo, the case files", () => {
  test("every grader is computed, so a run is graded the same way every time", async () => {
    const graders = await readGraders();
    expect(graders.filter((each) => each.type === "llm")).toEqual([]);
  });
});

describe("setup/fresh-repo, the graders on played runs", () => {
  test("a run that checks bun, then writes with the script, passes every grader", async () => {
    const run = await play("good", correct);
    expect(run.created).toEqual([
      "docs/STATUS.md",
      "docs/agents/domain.md",
      "docs/agents/workspace.md",
    ]);
    expect(await failing(run)).toEqual([]);
  });

  test("a run with no bun check fails only the bun-first grader", async () => {
    const run = await play("no-bun-check", async (root) => {
      const [, ...rest] = await correct(root);
      return rest;
    });
    expect(await failing(run)).toEqual(["bun-first"]);
  });

  test("a run that checks bun only after the script fails only the bun-first grader", async () => {
    const run = await play("bun-check-late", async (root) => {
      const [check, ...rest] = await correct(root);
      return [...rest, check as Call];
    });
    expect(await failing(run)).toEqual(["bun-first"]);
  });

  test("a run that writes the Codex blocks into the repo's AGENTS.md fails only the AGENTS.md grader", async () => {
    const run = await play("project-scope", (root) =>
      Promise.resolve([bunCheck, setup(root, "--codex-scope", "project")]),
    );
    expect(await failing(run)).toEqual(["no-agents-md"]);
  });

  test("a run that writes into CLAUDE.md fails only the CLAUDE.md grader", async () => {
    const run = await play("claude-md", async (root) => {
      const calls = await correct(root);
      const text = await Bun.file(`${root}/CLAUDE.md`).text();
      await Bun.write(`${root}/CLAUDE.md`, `${text}\nRun /brain:status at session start.\n`);
      return calls;
    });
    expect(await failing(run)).toEqual(["claude-md-kept"]);
  });

  test("a run that never runs the script fails the script and file graders", async () => {
    const run = await play("no-script", () => Promise.resolve([bunCheck]));
    expect(await failing(run)).toEqual([
      "bun-first",
      "domain-md",
      "script-ran",
      "status-md",
      "workspace-md",
    ]);
  });
});
