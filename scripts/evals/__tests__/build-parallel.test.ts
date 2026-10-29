/**
 * The dry check of the eval case `lifecycle/build-parallel`, with no model run. It builds the
 * case's scaffold, plays a correct parallel `/build auto` run and faulty runs with real git
 * worktrees, real merges and the real `brain plan` and `brain check`, and applies the case's own
 * grader files to each, as `claude plugin eval` reads them. The one llm grader is not modelled.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { readFrontmatter } from "../../workspace/schema";

// A played run starts many git and bun processes, which take seconds on a loaded machine
// (parallel builds run several gates at once); the default 5 s is too tight.
setDefaultTimeout(120_000);

const repo = `${import.meta.dir}/../../..`;
const caseDir = `${repo}/evals/lifecycle/build-parallel`;
const cli = `${repo}/scripts/brain.ts`;
const branch = "feat/text-tools";
const folder = "docs/specs/SPEC-001-text-tools";
const planPath = `${folder}/tasks/plan.md`;
const todoPath = `${folder}/tasks/todo.md`;
// Claude Code puts the plugin's path in place of ${CLAUDE_PLUGIN_ROOT} when the command loads.
const brainCmd = 'bun "/plugins/brain/scripts/brain.ts"';
const wave = ["01", "02", "03", "04", "05"];
let work: string;

type Grader = Record<string, unknown> & { name: string; type: string };

/** One tool call of the main session: the tool's name and its input. */
type Call = { tool: string; input: Record<string, unknown> };

/** What a run leaves: its workspace and the main session's tool calls, in order. */
type Run = { root: string; calls: Call[] };

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

/** A `tool_order` side: a tool name, or a tool with an `input_match`. */
function sideOf(side: unknown): { tool: string; inputMatch: string } {
  if (typeof side === "string") {
    return { tool: side, inputMatch: "" };
  }
  const { tool, input_match: inputMatch } = side as { tool?: unknown; input_match?: unknown };
  return { tool: String(tool), inputMatch: String(inputMatch ?? "") };
}

/** Whether a call is to `tool` and its JSON input matches `inputMatch`. */
function hits(call: Call, tool: string, inputMatch: string): boolean {
  // The runner tests input_match against the call's JSON input, with no flags. A pattern
  // that compiles with `u` matches ASCII text the same way, so `u` only adds strictness.
  return call.tool === tool && new RegExp(inputMatch, "u").test(JSON.stringify(call.input));
}

/** Apply one computed grader to a run, with the pass rules the plugin-evals docs give. */
async function passes(each: Grader, run: Run): Promise<boolean> {
  if (each.type === "tool_used") {
    const tool = String(each.tool);
    const count = run.calls.filter((call) => hits(call, tool, String(each.input_match ?? "")));
    return count.length >= Number(each.min ?? 1) && count.length <= Number(each.max ?? Infinity);
  }
  if (each.type === "tool_order") {
    // Both tools were called, and the first matching `before` call comes before the first
    // matching `after` call.
    const before = sideOf(each.before);
    const after = sideOf(each.after);
    const first = run.calls.findIndex((call) => hits(call, before.tool, before.inputMatch));
    const then = run.calls.findIndex((call) => hits(call, after.tool, after.inputMatch));
    return first !== -1 && then !== -1 && first < then;
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

/** Every file in a folder outside `.git`, relative to it; dotfiles are left out. */
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

/** Run git in a played folder and return its standard output. */
function git(cwd: string, ...args: string[]): string {
  const res = Bun.spawnSync(["git", ...args], { cwd, env: sandbox() });
  expect(res.stderr.toString()).toBe("");
  expect(res.exitCode).toBe(0);
  return res.stdout.toString().trim();
}

/** Run the real `brain` in a workspace, with the cap from the workspace file only. */
function brain(root: string, ...args: string[]): { exitCode: number; out: string } {
  const env: Record<string, string | undefined> = {
    ...process.env,
    GIT_CEILING_DIRECTORIES: work,
  };
  delete env.BRAIN_MAX_PARALLEL;
  const res = Bun.spawnSync(["bun", cli, ...args], { cwd: root, env });
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

/** The test file each task's block names in its verification line, by row. */
const testFile: Record<string, string> = {
  "01": "count",
  "02": "longest",
  "03": "capitalize",
  "04": "reverse",
  "05": "distinct",
  "07": "summary",
};

/** The code each task writes, by row: one module on top of `words`, and its test. */
const code: Record<string, { name: string; body: string; check: string }> = {
  "01": {
    name: "countWords",
    body: "return words(text).length;",
    check: 'countWords("a b  c")).toBe(3)',
  },
  "02": {
    name: "longestWord",
    body: 'return words(text).reduce((a, b) => (b.length > a.length ? b : a), "");',
    check: 'longestWord("a bbb cc")).toBe("bbb")',
  },
  "03": {
    name: "capitalize",
    body: 'return words(text).map((w) => w[0]?.toUpperCase() + w.slice(1)).join(" ");',
    check: 'capitalize("ann lee")).toBe("Ann Lee")',
  },
  "04": {
    name: "reverseWords",
    body: 'return words(text).reverse().join(" ");',
    check: 'reverseWords("a b c")).toBe("c b a")',
  },
  "05": {
    name: "distinctWords",
    body: "return [...new Set(words(text))];",
    check: 'distinctWords("a b a")).toEqual(["a", "b"])',
  },
  "07": {
    name: "summary",
    body: 'return String(words(text).length) + " words, longest: " + (words(text).toSorted((a, b) => b.length - a.length)[0] ?? "");',
    check: 'summary("a bbb")).toBe("2 words, longest: bbb")',
  },
};

/** The files a task writes, by path. */
function filesOf(id: string): Record<string, string> {
  const file = testFile[id] ?? "";
  const { name, body, check } = code[id] ?? { name: "", body: "", check: "" };
  return {
    [`src/${file}.ts`]: `import { words } from "./text";\n\nexport function ${name}(text: string) {\n  ${body}\n}\n`,
    [`src/__tests__/${file}.test.ts`]: `import { expect, test } from "bun:test";\nimport { ${name} } from "../${file}";\n\ntest("${name}", () => expect(${check});\n`,
  };
}

type Brief = { isolation?: boolean; branch?: boolean };

/** A brief as `/build auto` writes it: the plain-talk block, the base, then the block, whole. */
async function brief(root: string, id: string, options: Brief = {}): Promise<Call> {
  const todo = await Bun.file(`${root}/${todoPath}`).text();
  const plainTalk = await Bun.file(`${repo}/plain-talk/AGENTS-block.md`).text();
  const base =
    (options.branch ?? true)
      ? `Your worktree may start on the default branch. First run \`git merge --ff-only ${branch}\`, then \`bun install\`.`
      : "Your worktree is ready. Run `bun install` first.";
  return {
    tool: "Agent",
    input: {
      description: `Build task ${id}`,
      prompt: [
        plainTalk,
        base,
        `Build this task of the spec in ${folder}/, whose spec.md it cites.`,
        blockOf(todo, id),
        "Invoke brain:incremental-implementation and brain:test-driven-development.",
        "Leave tasks/plan.md and tasks/todo.md alone: the main session ticks and closes the row.",
        "Stage the files the task touched by name, and make one commit.",
        `Write your result to T${id}-result.md; reply with its path and one line.`,
        `brain is ${brainCmd}.`,
      ].join("\n\n"),
      subagent_type: "general-purpose",
      ...((options.isolation ?? true) ? { isolation: "worktree" } : {}),
    },
  };
}

/**
 * A sub-agent starts on row `id` in its own worktree. The worktree starts on the remote's default
 * branch, as Claude Code's default base does, and the brief's first step brings it to the
 * feature branch's head. Returns the worktree's branch.
 */
function startTask(root: string, name: string, id: string): string {
  const tree = `${work}/${name}-worktree-${id}`;
  const taskBranch = `worktree-agent-${name}-${id}`;
  git(root, "worktree", "add", "-q", "-b", taskBranch, tree, "origin/main");
  git(tree, "merge", "-q", "--ff-only", branch);
  return taskBranch;
}

/** A played sub-agent writes its task's files in its worktree and commits them; returns the SHA. */
async function commitTask(name: string, id: string): Promise<string> {
  const tree = `${work}/${name}-worktree-${id}`;
  const files = filesOf(id);
  for (const [path, text] of Object.entries(files)) {
    await Bun.write(`${tree}/${path}`, text);
  }
  git(tree, "add", "--", ...Object.keys(files));
  git(tree, "commit", "-qm", `feat: build task ${id}`);
  return git(tree, "rev-parse", "--short", "HEAD");
}

/** Tick every box in the block of row `id`, and no other box. */
async function tick(root: string, id: string): Promise<void> {
  const file = `${root}/${todoPath}`;
  const todo = await Bun.file(file).text();
  const block = blockOf(todo, id);
  await Bun.write(file, todo.replace(block, block.replaceAll("- [ ]", "- [x]")));
}

/** The main session merges a task's branch into the feature branch, then runs the gate. */
function merge(run: Run, taskBranch: string, id: string): void {
  git(run.root, "merge", "-q", "--no-ff", "--no-edit", taskBranch);
  run.calls.push(
    {
      tool: "Bash",
      input: { command: `git merge --no-ff --no-edit ${taskBranch}`, description: `Merge ${id}` },
    },
    { tool: "Bash", input: { command: "bun test", description: "Run the gate" } },
  );
}

/**
 * The main session closes row `id`: it ticks the block, resolves the row, checks and commits.
 * With `check`, the real `brain check` runs too; each run takes a bun start, so only the
 * correct run pays for it.
 */
async function closeRow(run: Run, id: string, sha: string, check: boolean): Promise<void> {
  await tick(run.root, id);
  const file = `${run.root}/${planPath}`;
  const plan = await Bun.file(file).text();
  const row = new RegExp(
    `^(\\| ${id} \\|[^|\\n]*\\|[^|\\n]*\\|) open (\\|[^|\\n]*\\|) — \\|$`,
    "mu",
  );
  expect(row.test(plan)).toBe(true);
  const result = `${sha}; \`bun test src/__tests__/${testFile[id]}.test.ts\`: 1 pass`;
  await Bun.write(file, plan.replace(row, `$1 resolved $2 ${result} |`));
  run.calls.push({ tool: "Bash", input: { command: `${brainCmd} check` } });
  if (check) {
    expect(brain(run.root, "check").exitCode).toBe(0);
  }
  git(run.root, "add", "--", planPath, todoPath);
  git(run.root, "commit", "-qm", `chore: close row ${id} of SPEC-001`);
  run.calls.push({
    tool: "Bash",
    input: {
      command: `git add -- ${planPath} ${todoPath} && git commit -m "chore: close row ${id}"`,
    },
  });
}

type Play = {
  /** The rows started at once in each batch; every batch is merged before the next starts. */
  batches?: string[][];
  brief?: Brief;
  close?: boolean;
  /** Run the real `brain check` at each row close. */
  check?: boolean;
  pastCheckpoint?: boolean;
};

/** Play `/build auto` on the scaffold: start each batch at once, then merge and close one at a time. */
async function buildAuto(name: string, play: Play = {}): Promise<Run> {
  const root = await scaffold(name);
  const run: Run = {
    root,
    calls: [{ tool: "Bash", input: { command: `${brainCmd} plan --json` } }],
  };
  const batches = [...(play.batches ?? [wave])];
  if (play.pastCheckpoint === true) {
    batches.push(["07"]);
  }
  for (const batch of batches) {
    if (batch.includes("07")) {
      // A run that goes past the checkpoint resolves it by itself, with no review.
      const file = `${root}/${planPath}`;
      const plan = await Bun.file(file).text();
      await Bun.write(
        file,
        plan.replace(
          /^(?<head>\| 06 \|[^\n]*\|) open (?<blockers>\|[^\n]*\|) — \|$/mu,
          "$<head> resolved $<blockers> bun test: pass |",
        ),
      );
    }
    const started: { id: string; taskBranch: string }[] = [];
    for (const id of batch) {
      run.calls.push(await brief(root, id, play.brief));
      started.push({ id, taskBranch: startTask(root, name, id) });
    }
    for (const { id, taskBranch } of started) {
      const sha = await commitTask(name, id);
      merge(run, taskBranch, id);
      if (play.close ?? true) {
        await closeRow(run, id, sha, play.check ?? false);
      }
    }
  }
  return run;
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-build-parallel-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("lifecycle/build-parallel, the case files", () => {
  test("the prompt runs /brain:build auto, names no spec path, and stays within three runs per arm", async () => {
    const text = await Bun.file(`${caseDir}/prompt.md`).text();
    // The keys the case loader accepts; any other key fails the case.
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
    // /build must find the spec through workspace.md and the branch through git, so the
    // prompt names neither, and says nothing about running in parallel.
    expect(body).not.toMatch(/SPEC|specs\/|tasks\/|todo\.md|plan\.md|feat\/|parallel|worktree/iu);
  });

  test("the case reads the scaffold script, as build-clean-context does", async () => {
    expect(await Bun.file(`${caseDir}/case.yaml`).text()).toBe(
      'schema_version: "1.1"\nname: lifecycle/build-parallel\ncontext:\n  scaffold_script: scaffold.sh\n',
    );
  });

  test("the one llm grader judges the reason for starting fewer", async () => {
    const graders = await readGraders();
    expect(graders.filter((each) => each.type === "llm").map((each) => each.name)).toEqual([
      "reason-for-fewer",
    ]);
  });
});

describe("lifecycle/build-parallel, the scaffold", () => {
  test("is a brain repo on its feature branch, with setup-brain's workspace.md copied from the plugin", async () => {
    const root = await scaffold("fresh");
    const template = await Bun.file(`${repo}/skills/setup-brain/workspace.md`).text();
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(template);
    expect(await filesIn(root)).toEqual([
      "README.md",
      "docs/agents/workspace.md",
      `${folder}/spec.md`,
      planPath,
      todoPath,
      "package.json",
      "src/__tests__/text.test.ts",
      "src/text.ts",
    ]);
    // The install's folder, and the folder Claude Code puts sub-agent worktrees in.
    expect(await Bun.file(`${root}/.gitignore`).text()).toBe("node_modules/\n.claude/worktrees/\n");
    expect(git(root, "branch", "--show-current")).toBe(branch);
    expect(git(root, "status", "--porcelain")).toBe("");
    expect(git(root, "log", "--format=%s")).toBe("scaffold\ninitial");
  });

  test("its remote's default branch is main, which lacks the feature, so a worktree on it must merge the branch first", async () => {
    const root = await scaffold("remote");
    expect(git(root, "rev-parse", "--abbrev-ref", "origin/HEAD")).toBe("origin/main");
    expect(git(root, "ls-tree", "-r", "--name-only", "origin/main")).toBe("README.md");
    expect(git(root, "rev-parse", "origin/main")).not.toBe(git(root, "rev-parse", branch));
    expect(git(root, "merge-base", "--is-ancestor", "origin/main", branch)).toBe("");
  });

  test("passes brain check, and brain plan puts five tasks in the first wave, then the checkpoint, then row 07", async () => {
    const root = await scaffold("planned");
    const checked = brain(root, "check");
    expect(checked.out).toContain("no finding in 3 workspace files");
    expect(checked.exitCode).toBe(0);
    const planned = brain(root, "plan", "--json");
    expect(planned.exitCode).toBe(0);
    const data = JSON.parse(planned.out) as {
      maxParallel: number;
      waves: { wave: number; startAtOnce: number; rows: { id: string; type: string }[] }[];
      criticalPath: string[];
      sharedFiles: unknown[];
    };
    expect(data.maxParallel).toBe(8);
    expect(data.waves.map((each) => each.rows.map((row) => `${row.id} ${row.type}`))).toEqual([
      wave.map((id) => `${id} task`),
      ["06 checkpoint"],
      ["07 task"],
    ]);
    expect(data.waves[0]?.startAtOnce).toBe(5);
    expect(data.criticalPath).toEqual(["01", "06", "07"]);
    expect(data.sharedFiles).toEqual([]);
  });

  test("each todo block names its own test file, which no other scaffold file names", async () => {
    const root = await scaffold("blocks");
    const todo = await Bun.file(`${root}/${todoPath}`).text();
    for (const [id, file] of Object.entries(testFile)) {
      expect(blockOf(todo, id)).toContain(`bun test src/__tests__/${file}.test.ts`);
      const others = Object.entries(testFile).filter(([other]) => other !== id);
      for (const [, other] of others) {
        expect(blockOf(todo, id)).not.toContain(`${other}.test.ts`);
      }
    }
    for (const path of ["docs/agents/workspace.md", `${folder}/spec.md`, planPath]) {
      expect(await Bun.file(`${root}/${path}`).text()).not.toMatch(
        /(?:count|longest|capitalize|reverse|distinct|summary)\.test\.ts/u,
      );
    }
  });
});

describe("lifecycle/build-parallel, the graders on played runs", () => {
  test("a run that starts the five tasks at once, then merges and closes one at a time, passes every computed grader", async () => {
    const run = await buildAuto("good", { check: true });
    expect(await failing(run)).toEqual([]);
    expect(brain(run.root, "check").exitCode).toBe(0);
    expect(git(run.root, "status", "--porcelain")).toBe("");
    // The merged feature branch passes its own tests: the text module and the five tasks.
    const tests = Bun.spawnSync(["bun", "test"], { cwd: run.root, env: sandbox() });
    expect(tests.stderr.toString()).toContain(" 6 pass");
    expect(tests.exitCode).toBe(0);
  });

  test("a run that only reads the plan fails every computed grader", async () => {
    const root = await scaffold("no-build");
    expect(await failing({ root, calls: [] })).toEqual([
      "branch-head",
      "rows-resolved",
      "started-01",
      "started-02",
      "started-03",
      "started-04",
      "started-05",
      "stops-at-checkpoint",
      "worktrees",
    ]);
  });

  test("a run that builds one task at a time fails every start but the first", async () => {
    const run = await buildAuto("one-at-a-time", { batches: wave.map((id) => [id]) });
    expect(await failing(run)).toEqual(["started-02", "started-03", "started-04", "started-05"]);
  });

  test("a run that starts three, then two, fails the two late starts", async () => {
    const run = await buildAuto("three-then-two", {
      batches: [
        ["01", "02", "03"],
        ["04", "05"],
      ],
    });
    expect(await failing(run)).toEqual(["started-04", "started-05"]);
  });

  test("a run whose sub-agents get no worktree fails only the worktree count", async () => {
    const run = await buildAuto("no-worktree", { brief: { isolation: false } });
    expect(await failing(run)).toEqual(["worktrees"]);
  });

  test("a run whose briefs never name the feature branch fails only the branch head", async () => {
    const run = await buildAuto("no-branch", { brief: { branch: false } });
    expect(await failing(run)).toEqual(["branch-head"]);
  });

  test("a run whose main session never closes the rows fails both plan graders", async () => {
    const run = await buildAuto("open-rows", { close: false });
    expect(await failing(run)).toEqual(["rows-resolved", "stops-at-checkpoint"]);
  });

  test("a run that goes past the checkpoint without a review fails only the checkpoint stop", async () => {
    const run = await buildAuto("past-checkpoint", { pastCheckpoint: true });
    expect(await failing(run)).toEqual(["stops-at-checkpoint"]);
  });
});
