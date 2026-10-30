/**
 * The dry check of the eval case `lifecycle/plan-three-questions`, with no model run. It builds
 * the case's scaffold, plays a correct `/brain:plan` run and faulty runs with the real
 * `brain new-doc` and `brain check`, and applies the case's computed graders to each, as
 * `claude plugin eval` 2.1.312 reads them. The one llm grader is not modelled here.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { readFrontmatter } from "../../workspace/schema";

// A played run starts bash and bun processes, which take seconds on a loaded machine
// (parallel builds run several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const repo = `${import.meta.dir}/../../..`;
const caseDir = `${repo}/evals/lifecycle/plan-three-questions`;
const cli = `${repo}/scripts/brain.ts`;
const slug = "word-counter";
const folder = `docs/specs/SPEC-001-${slug}`;
const planPath = `${folder}/tasks/plan.md`;
const todoPath = `${folder}/tasks/todo.md`;
let work: string;

type Grader = Record<string, unknown> & { name: string; type: string };

/** One tool call of a run: the tool's name and its input. */
type Call = { tool: string; input: Record<string, unknown> };

/** What a run leaves: its workspace, its tool calls and its last reply. */
type Run = { root: string; calls: Call[]; last: string };

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

/** The text a regex grader reads; null when its file does not exist, which fails the grader. */
async function targetText(target: unknown, run: Run): Promise<string | null> {
  if (target === "last_message") {
    return run.last;
  }
  if (isFileTarget(target)) {
    const file = Bun.file(`${run.root}/${target.path}`);
    return (await file.exists()) ? await file.text() : null;
  }
  throw new Error(`the dry check does not read the target ${JSON.stringify(target)}`);
}

/** Apply one computed grader to a run, with the pass rules of `claude plugin eval` 2.1.312. */
async function passes(each: Grader, run: Run): Promise<boolean> {
  if (each.type === "tool_used") {
    // The runner tests input_match against the call's JSON input, with no flags. A pattern
    // that compiles with `u` matches ASCII text the same way, so `u` only adds strictness.
    const match = new RegExp(String(each.input_match ?? ""), "u");
    const count = run.calls.filter(
      (call) => call.tool === each.tool && match.test(JSON.stringify(call.input)),
    ).length;
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

/** Run the real `brain` in a workspace, with git kept inside the test's folder. */
function brain(root: string, ...args: string[]): { exitCode: number; out: string } {
  const res = Bun.spawnSync(["bun", cli, ...args], {
    cwd: root,
    env: { ...process.env, GIT_CEILING_DIRECTORIES: work },
  });
  return { exitCode: res.exitCode, out: `${res.stdout.toString()}${res.stderr.toString()}` };
}

/** Run `brain new-doc SPEC <name> --title` in a scaffold; return the Bash call as the skill spells it. */
function newSpec(root: string, name: string): Call {
  const res = brain(root, "new-doc", "SPEC", name, "--title", "Word counter");
  expect(res.exitCode).toBe(0);
  // Claude Code puts the plugin's path in place of ${CLAUDE_PLUGIN_ROOT} when the skill loads.
  return {
    tool: "Bash",
    input: {
      command: `bun "/plugins/brain/scripts/brain.ts" new-doc SPEC ${name} --title "Word counter"`,
    },
  };
}

/** The spec from the prompt, written into the spec.md that new-doc made. */
function fillSpec(text: string): string {
  return text.replace(
    /## Objective\n<[^>\n]*>/u,
    "## Objective\nA command-line tool that prints the number of words in a text file.",
  );
}

/** The plan of a correct run: one open row per task, in the template's format. */
function fillPlan(text: string): string {
  return text.replace(
    "| 01 | <task> | <task or checkpoint> | open | — | — |",
    [
      "| 01 | Count the words in a file | task | open | — | — |",
      "| 02 | Exit 1 on a missing file | task | open | 01 | — |",
      "| 03 | Checkpoint: after tasks 01-02 | checkpoint | open | 01, 02 | — |",
    ].join("\n"),
  );
}

/** The block of one task, in the template's format. */
function block(id: string, title: string, criterion: string, testName: string): string {
  return `## Task ${id}: ${title}

**Description:** ${title}, as the spec's Objective says.

**Acceptance criteria:**
- [ ] ${criterion}

**Verification:**
- [ ] \`bun test src/__tests__/${testName}.test.ts\` passes

**Files likely touched:**
- \`src/count.ts\`
- \`src/__tests__/${testName}.test.ts\`

**Scope:** XS
`;
}

/** The task list of a correct run: one block per row of the plan. */
function fillTodo(text: string): string {
  const blocks = [
    block("01", "Count the words in a file", "A file of three words prints 3", "count"),
    block("02", "Exit 1 on a missing file", "A missing file exits 1 with a message", "missing"),
    "## Checkpoint 03: After tasks 01-02\n- [ ] `bun test` passes\n",
  ].join("\n");
  return text.replace(/## Task 01: [\s\S]*$/u, blocks);
}

/**
 * Write the plan's Parallel waves section from the real `brain plan`: the lines it prints above its
 * Cap line take the place of the template's line. Return the Bash call as the skill spells it.
 */
async function writeWaves(root: string): Promise<Call> {
  const res = brain(root, "plan", "SPEC-001");
  expect(res.exitCode).toBe(0);
  const waves = res.out.slice(0, res.out.indexOf("\nCap: ")).trimEnd();
  const file = `${root}/${planPath}`;
  const plan = await Bun.file(file).text();
  const placeholder = /^## Parallel waves\n<[^>\n]*>$/mu;
  expect(plan).toMatch(placeholder);
  await Bun.write(file, plan.replace(placeholder, `## Parallel waves\n${waves}`));
  return {
    tool: "Bash",
    input: { command: 'bun "/plugins/brain/scripts/brain.ts" plan SPEC-001' },
  };
}

/** The skill calls of a correct run: the plan skill, then the question skill it loads. */
const skillCalls: Call[] = [
  { tool: "Skill", input: { skill: "brain:planning-and-task-breakdown" } },
  { tool: "Skill", input: { skill: "brain:ask-user-question" } },
];

/** The reply of a correct run: the breakdown, then the first approval question, recommended. */
const goodReply = `The plan for SPEC-001, word counter, is in ${planPath}: two tasks and a checkpoint.

1. Count the words in a file. Blocked by nothing.
2. Exit 1 on a missing file. Blocked by 1.
3. Checkpoint after tasks 1 and 2.

Does the granularity feel right?

- Right as it is (Recommended): each task is one behaviour with one test. Cost: none.
- Too coarse: split the counting into reading and counting. Cost: one more task for a few lines.
- Too fine: merge both tasks. Cost: the missing-file case loses its own test.`;

/** Play a run: scaffold, then `act` in the workspace, which returns the calls it made and its reply. */
async function play(
  name: string,
  act: (root: string) => Promise<{ calls: Call[]; last: string }>,
): Promise<Run> {
  const root = await scaffold(name);
  const { calls, last } = await act(root);
  return { root, calls, last };
}

/**
 * A correct run: new-doc makes the spec folder, the run fills spec, plan and todo, writes the
 * plan's Parallel waves section from brain plan, then checks.
 */
function planned(
  name: string,
  options: { calls?: Call[]; last?: string; fill?: boolean } = {},
): Promise<Run> {
  return play(name, async (root) => {
    const made = [newSpec(root, slug)];
    if (options.fill ?? true) {
      for (const [path, fill] of [
        [`${folder}/spec.md`, fillSpec],
        [planPath, fillPlan],
        [todoPath, fillTodo],
      ] as const) {
        await Bun.write(`${root}/${path}`, fill(await Bun.file(`${root}/${path}`).text()));
      }
      made.push(await writeWaves(root));
    }
    return { calls: [...(options.calls ?? skillCalls), ...made], last: options.last ?? goodReply };
  });
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-plan-three-questions-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("lifecycle/plan-three-questions, the case files", () => {
  test("the prompt gives /brain:plan the spec and the slug the graders read, within three runs per arm", async () => {
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
    // Bash runs brain new-doc and brain check; Write and Edit fill the files new-doc makes.
    expect(data.allowed_tools).toEqual(["Read", "Glob", "Grep", "Skill", "Bash", "Write", "Edit"]);
    const body = text.slice(text.indexOf("\n---", 3) + 4);
    expect(body.trim().startsWith("/brain:plan")).toBe(true);
    expect(body).toContain("# Spec: word counter");
    expect(body).toContain(`\`${slug}\``);
    // The plan's place comes from the workspace, so the prompt names no folder for it.
    expect(body).not.toMatch(/SPEC-|SPEC\.md|specs?\/|tasks\/|plan\.md|todo\.md/u);
  });

  test("the plan grader reads the plan of the spec folder that new-doc makes for the slug", async () => {
    const graders = await readGraders();
    const plan = graders.find((each) => each.name === "plan-file");
    expect(plan?.type).toBe("regex");
    expect(plan?.target).toEqual({ source: "file", path: planPath });
  });

  test("the one llm grader judges the question", async () => {
    const graders = await readGraders();
    const llm = graders.filter((each) => each.type === "llm");
    expect(llm.map((each) => each.name)).toEqual(["one-question"]);
  });
});

describe("lifecycle/plan-three-questions, the scaffold", () => {
  test("is a fresh brain repo: git, setup-brain's workspace.md, and no spec folder", async () => {
    const root = await scaffold("fresh");
    const template = await Bun.file(`${repo}/skills/setup-brain/workspace.md`).text();
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(template);
    expect(await filesIn(root)).toEqual(["docs/agents/workspace.md"]);
    expect(Bun.spawnSync(["git", "rev-parse", "--git-dir"], { cwd: root }).exitCode).toBe(0);
  });

  test("new-doc gives the slug the first spec number, so the plan lands where the grader reads it", async () => {
    const root = await scaffold("first-number");
    newSpec(root, slug);
    expect(await filesIn(root)).toEqual([
      "docs/agents/workspace.md",
      `${folder}/spec.md`,
      planPath,
      todoPath,
    ]);
  });
});

describe("lifecycle/plan-three-questions, the computed graders on played runs", () => {
  test("a run that plans into the new spec folder and asks one question passes every computed grader and brain check", async () => {
    const run = await planned("good");
    expect(await failing(run)).toEqual([]);
    const checked = brain(run.root, "check");
    expect(checked.out).toContain("no finding in 3 workspace files");
    expect(checked.exitCode).toBe(0);
  });

  test("a run that writes the plan to the old root tasks/plan.md fails only the plan grader", async () => {
    const run = await play("old-path", async (root) => {
      await Bun.write(`${root}/tasks/plan.md`, "# Implementation Plan: Word counter\n");
      await Bun.write(`${root}/tasks/todo.md`, "- [ ] Task 1: Count the words in a file\n");
      return { calls: skillCalls, last: goodReply };
    });
    expect(await failing(run)).toEqual(["plan-file"]);
  });

  test("a run that makes the spec folder but asks before it writes a row fails only the plan grader", async () => {
    const run = await planned("template-only", { fill: false });
    expect(await failing(run)).toEqual(["plan-file"]);
  });

  test("a run without the plan skill fails only the skill indicator", async () => {
    const run = await planned("no-skill", {
      calls: skillCalls.filter((call) => call.input.skill !== "brain:planning-and-task-breakdown"),
    });
    expect(await failing(run)).toEqual(["plan-fired"]);
  });

  test("a question with no recommendation fails only the recommended grader", async () => {
    const run = await planned("no-recommendation", {
      last: "Does the granularity feel right: too coarse, too fine, or right?",
    });
    expect(await failing(run)).toEqual(["recommended"]);
  });
});
