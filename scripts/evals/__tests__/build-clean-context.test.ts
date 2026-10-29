/**
 * The dry check of the eval case `lifecycle/build-clean-context`, with no model run. It builds
 * the case's scaffold, plays a correct `/build auto` run and faulty runs with real git commits
 * and the real `brain check`, and applies the case's own grader files to each, as
 * `claude plugin eval` 2.1.312 reads them. The one llm grader is not modelled here.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { readFrontmatter } from "../../workspace/schema";

// A played run starts bash, git and bun processes, which take seconds on a loaded machine
// (parallel builds run several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const repo = `${import.meta.dir}/../../..`;
const caseDir = `${repo}/evals/lifecycle/build-clean-context`;
const cli = `${repo}/scripts/brain.ts`;
const folder = "docs/specs/SPEC-001-greeter";
const planPath = `${folder}/tasks/plan.md`;
const todoPath = `${folder}/tasks/todo.md`;
// Claude Code puts the plugin's path in place of ${CLAUDE_PLUGIN_ROOT} when the command loads.
const brainCheck = 'bun "/plugins/brain/scripts/brain.ts" check';
let work: string;

type Grader = Record<string, unknown> & { name: string; type: string };

/** One Agent call as the main session makes it. */
type AgentCall = { description: string; prompt: string; subagent_type: string };

/** What a run leaves: its workspace, the Bash commands and the Agent calls of the main session. */
type Run = { root: string; commands: string[]; agents: AgentCall[] };

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

function isFileTarget(target: unknown): target is { source: "file"; path: string } {
  return (
    typeof target === "object" &&
    target !== null &&
    (target as { source?: unknown }).source === "file" &&
    typeof (target as { path?: unknown }).path === "string"
  );
}

/** How many inputs match a tool_used grader's `input_match`, tested against the call's JSON. */
function matching(each: Grader, inputs: unknown[]): number {
  // The runner tests input_match against the call's JSON input, with no flags. A pattern
  // that compiles with `u` matches ASCII text the same way, so `u` only adds strictness.
  const match = new RegExp(String(each.input_match ?? ""), "u");
  return inputs.filter((input) => match.test(JSON.stringify(input))).length;
}

/** Apply one computed grader to a run, with the pass rules of `claude plugin eval` 2.1.312. */
async function passes(each: Grader, run: Run): Promise<boolean> {
  if (each.type === "tool_used" && (each.tool === "Agent" || each.tool === "Bash")) {
    const inputs =
      each.tool === "Agent" ? run.agents : run.commands.map((command) => ({ command }));
    const count = matching(each, inputs);
    return count >= Number(each.min ?? 1) && count <= Number(each.max ?? Infinity);
  }
  if (each.type === "regex" && isFileTarget(each.target)) {
    const file = Bun.file(`${run.root}/${each.target.path}`);
    if (!(await file.exists())) {
      return false;
    }
    const found = new RegExp(String(each.pattern), String(each.flags ?? "")).test(
      await file.text(),
    );
    const match = each.match ?? "contains";
    if (match === "contains" || match === "not_contains") {
      return found === (match === "contains");
    }
  }
  throw new Error(`${each.name}: the dry check does not model this ${each.type} grader`);
}

/** The name of each computed grader that fails the run; llm graders need a model. */
async function failing(run: Run): Promise<string[]> {
  const failed: string[] = [];
  for (const each of await readGraders()) {
    if (each.type !== "llm" && !(await passes(each, run))) {
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

/** The environment the runner gives a scaffold, and the played git commands after it. */
function sandbox(): Record<string, string> {
  return {
    PATH: process.env.PATH ?? "",
    HOME: `${work}/home`,
    TMPDIR: tmpdir(),
    TERM: "dumb",
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_CEILING_DIRECTORIES: work,
  };
}

/** Run git in a played workspace and return its standard output. */
function git(root: string, ...args: string[]): string {
  const res = Bun.spawnSync(["git", ...args], { cwd: root, env: sandbox() });
  expect(res.stderr.toString()).toBe("");
  expect(res.exitCode).toBe(0);
  return res.stdout.toString().trim();
}

/** Run the real `brain check` in a workspace. */
function runCheck(root: string): { exitCode: number; out: string } {
  const res = Bun.spawnSync(["bun", cli, "check"], {
    cwd: root,
    env: { ...process.env, GIT_CEILING_DIRECTORIES: work },
  });
  return { exitCode: res.exitCode, out: `${res.stdout.toString()}${res.stderr.toString()}` };
}

/** Build the case's scaffold in a new folder, with the environment the runner gives it. */
async function scaffold(name: string): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root);
  const res = Bun.spawnSync(["bash", `${caseDir}/scaffold.sh`], { cwd: root, env: sandbox() });
  expect(res.stderr.toString()).toBe("");
  expect(res.exitCode).toBe(0);
  return root;
}

/** The block of row `id` in a todo file: from its `## Task NN:` heading to the next heading. */
function blockOf(todo: string, id: string): string {
  const start = todo.indexOf(`## Task ${id}: `);
  expect(start).toBeGreaterThan(-1);
  const next = todo.indexOf("\n## ", start + 1);
  return todo.slice(start, next === -1 ? undefined : next).trimEnd();
}

/** A brief as `/build auto` writes it: the plain-talk block, then the task's block, copied whole. */
async function brief(root: string, id: string): Promise<AgentCall> {
  const todo = await Bun.file(`${root}/${todoPath}`).text();
  const plainTalk = await Bun.file(`${repo}/plain-talk/AGENTS-block.md`).text();
  return {
    description: `Build task ${id}`,
    prompt: [
      plainTalk,
      `Build this task of the spec in ${folder}/, whose spec.md it cites.`,
      blockOf(todo, id),
      "Invoke brain:incremental-implementation and brain:test-driven-development.",
      "Tick only the boxes in your own block of tasks/todo.md, and leave tasks/plan.md alone.",
      "Stage the files the task touched and tasks/todo.md by name, and make one commit.",
      'brain is bun "/plugins/brain/scripts/brain.ts".',
    ].join("\n\n"),
    subagent_type: "general-purpose",
  };
}

/** The code each task writes, by row. */
const code: Record<string, Record<string, string>> = {
  "01": {
    "src/greet.ts":
      'export function greet(name: string): string {\n  return "Hello, " + name;\n}\n',
    "src/__tests__/greet.test.ts":
      'import { expect, test } from "bun:test";\nimport { greet } from "../greet";\n\ntest("greet", () => expect(greet("Ann")).toBe("Hello, Ann"));\n',
  },
  "02": {
    "src/shout.ts":
      'import { greet } from "./greet";\n\nexport function shout(name: string): string {\n  return greet(name).toUpperCase();\n}\n',
    "src/__tests__/shout.test.ts":
      'import { expect, test } from "bun:test";\nimport { shout } from "../shout";\n\ntest("shout", () => expect(shout("Ann")).toBe("HELLO, ANN"));\n',
  },
};

/** Tick every box in the block of row `id`, and no other box. */
async function tick(root: string, id: string): Promise<void> {
  const file = `${root}/${todoPath}`;
  const todo = await Bun.file(file).text();
  const block = blockOf(todo, id);
  await Bun.write(file, todo.replace(block, block.replaceAll("- [ ]", "- [x]")));
}

/** A sub-agent builds row `id`: it writes the code, maybe ticks its block, and commits. */
async function subAgent(root: string, id: string, ticks = true): Promise<string> {
  const files = code[id] ?? {};
  for (const [path, text] of Object.entries(files)) {
    await Bun.write(`${root}/${path}`, text);
  }
  if (ticks) {
    await tick(root, id);
  }
  git(root, "add", "--", ...Object.keys(files), todoPath);
  git(root, "commit", "-qm", `feat: build task ${id}`);
  return git(root, "rev-parse", "--short", "HEAD");
}

/** The main session closes row `id`: the row goes resolved with `result`, then brain check, then a commit. */
async function closeRow(run: Run, id: string, result: string): Promise<void> {
  const file = `${run.root}/${planPath}`;
  const plan = await Bun.file(file).text();
  const row = new RegExp(
    `^(\\| ${id} \\|[^|\\n]*\\|[^|\\n]*\\|) open (\\|[^|\\n]*\\|) — \\|$`,
    "mu",
  );
  expect(row.test(plan)).toBe(true);
  await Bun.write(file, plan.replace(row, `$1 resolved $2 ${result} |`));
  run.commands.push(brainCheck);
  expect(runCheck(run.root).exitCode).toBe(0);
  git(run.root, "add", "--", planPath);
  git(run.root, "commit", "-qm", `chore: close row ${id} of SPEC-001`);
  run.commands.push(`git add -- ${planPath} && git commit -m "chore: close row ${id} of SPEC-001"`);
}

/** The verification a closed row names, by row. */
function verified(id: string): string {
  return `\`bun test src/__tests__/${id === "01" ? "greet" : "shout"}.test.ts\`: 1 pass`;
}

/** The result cell of a closed row: the commit SHA, then the verification and its outcome. */
function closed(sha: string, id: string): string {
  return `${sha}; ${verified(id)}`;
}

type Play = { brief?: typeof brief; ticks?: boolean; close?: boolean; result?: typeof closed };

/** Play `/build auto` on the scaffold: one sub-agent per row, then the main session closes it. */
async function buildAuto(name: string, play: Play = {}): Promise<Run> {
  const root = await scaffold(name);
  const run: Run = { root, commands: [], agents: [] };
  for (const id of ["01", "02"]) {
    run.agents.push(await (play.brief ?? brief)(root, id));
    const sha = await subAgent(root, id, play.ticks ?? true);
    if (play.close ?? true) {
      await closeRow(run, id, (play.result ?? closed)(sha, id));
    }
  }
  return run;
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-build-clean-context-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("lifecycle/build-clean-context, the case files", () => {
  test("the prompt runs /brain:build auto, names no spec path, and stays within three runs per arm", async () => {
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
    expect(data.allowed_tools).toEqual([
      "Read",
      "Glob",
      "Grep",
      "Skill",
      "Agent",
      "Bash",
      "Write",
      "Edit",
    ]);
    const body = text.slice(text.indexOf("\n---", 3) + 4);
    expect(body.trim().startsWith("/brain:build auto")).toBe(true);
    // /build must find the spec through docs/agents/workspace.md, so the prompt names none.
    expect(body).not.toMatch(/SPEC|spec\/|specs\/|tasks\/|todo\.md|plan\.md/u);
  });

  test("the scaffold is a brain repo with one committed spec folder, setup-brain's workspace.md, and no old-layout file", async () => {
    const root = await scaffold("fresh");
    const template = await Bun.file(`${repo}/skills/setup-brain/workspace.md`).text();
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(template);
    expect(await filesIn(root)).toEqual([
      "docs/agents/workspace.md",
      `${folder}/spec.md`,
      planPath,
      todoPath,
      "package.json",
    ]);
    expect(git(root, "status", "--porcelain")).toBe("");
    expect(git(root, "log", "--format=%s")).toBe("scaffold");
  });

  test("the scaffold passes brain check, and its plan has row 01 on the frontier and row 02 behind it", async () => {
    const root = await scaffold("checked");
    const result = runCheck(root);
    expect(result.out).toContain("no finding in 3 workspace files");
    expect(result.exitCode).toBe(0);
    const plan = await Bun.file(`${root}/${planPath}`).text();
    expect(plan).toContain("| 01 | Greet by name | task | open | — | — |");
    expect(plan).toContain("| 02 | Shout a greeting | task | open | 01 | — |");
  });

  test("each todo block names its own test file, which no other scaffold file names", async () => {
    const root = await scaffold("blocks");
    const todo = await Bun.file(`${root}/${todoPath}`).text();
    expect(blockOf(todo, "01")).toContain("bun test src/__tests__/greet.test.ts");
    expect(blockOf(todo, "02")).toContain("bun test src/__tests__/shout.test.ts");
    expect(blockOf(todo, "01")).not.toContain("shout.test.ts");
    expect(blockOf(todo, "02")).not.toContain("greet.test.ts");
    for (const path of ["docs/agents/workspace.md", `${folder}/spec.md`, planPath]) {
      expect(await Bun.file(`${root}/${path}`).text()).not.toMatch(/(?:greet|shout)\.test\.ts/u);
    }
  });

  test("the one llm grader judges the closing summary", async () => {
    const graders = await readGraders();
    const llm = graders.filter((each) => each.type === "llm");
    expect(llm.map((each) => each.name)).toEqual(["two-commits"]);
  });
});

describe("lifecycle/build-clean-context, the graders on played runs", () => {
  test("a run that hands each block to its own sub-agent and closes each row passes every computed grader and brain check", async () => {
    const run = await buildAuto("good");
    expect(await failing(run)).toEqual([]);
    expect(runCheck(run.root).exitCode).toBe(0);
    expect(git(run.root, "status", "--porcelain")).toBe("");
  });

  test("a run that looks for the spec at the old paths finds none and stops, so it fails every computed grader", async () => {
    const root = await scaffold("old-paths");
    expect(await failing({ root, commands: [], agents: [] })).toEqual([
      "plan-rows-resolved",
      "todo-block-01",
      "todo-block-02",
      "todo-ticked",
      "two-subagents",
    ]);
  });

  test("a run with one sub-agent for the whole plan fails only the sub-agent count", async () => {
    const root = await scaffold("one-agent");
    const run: Run = { root, commands: [], agents: [] };
    const both = await brief(root, "01");
    const todo = await Bun.file(`${root}/${todoPath}`).text();
    both.prompt = `${both.prompt}\n\n${blockOf(todo, "02")}`;
    run.agents.push(both);
    const first = await subAgent(root, "01");
    const second = await subAgent(root, "02");
    await closeRow(run, "01", closed(first, "01"));
    await closeRow(run, "02", closed(second, "02"));
    expect(await failing(run)).toEqual(["two-subagents"]);
  });

  test("a run whose briefs retell the task instead of handing its block fails both block graders", async () => {
    const run = await buildAuto("retold", {
      brief: (_root, id) =>
        Promise.resolve({
          description: `Build task ${id}`,
          prompt: `Implement task ${id} of the plan, as the spec says, and commit it.`,
          subagent_type: "general-purpose",
        }),
    });
    expect(await failing(run)).toEqual(["todo-block-01", "todo-block-02"]);
  });

  test("a run whose sub-agents leave todo.md alone fails only the ticks", async () => {
    const run = await buildAuto("unticked", { ticks: false });
    expect(await failing(run)).toEqual(["todo-ticked"]);
  });

  test("a run whose main session never closes the plan rows fails only the plan rows", async () => {
    const run = await buildAuto("open-rows", { close: false });
    expect(await failing(run)).toEqual(["plan-rows-resolved"]);
  });

  test("a run that writes each SHA as code passes the plan rows", async () => {
    const run = await buildAuto("sha-as-code", {
      result: (sha, id) => `\`${sha}\`; ${verified(id)}`,
    });
    expect(await failing(run)).toEqual([]);
  });

  test("a run that closes a row with no commit SHA fails only the plan rows", async () => {
    const run = await buildAuto("no-sha", { result: (_sha, id) => `done; ${verified(id)}` });
    expect(await failing(run)).toEqual(["plan-rows-resolved"]);
  });
});
