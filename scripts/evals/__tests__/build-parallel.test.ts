/**
 * The dry check of the eval case `lifecycle/build-parallel`, with no model run. It builds the
 * case's scaffold, plays a correct parallel `/build auto` run and faulty runs with real git
 * worktrees, real merges and the real `brain plan` and `brain check`, and applies the case's own
 * grader files to each, as `claude plugin eval` reads them. The one llm grader is not modelled.
 *
 * Two hosts are played. On one, the Agent tool gives each sub-agent a worktree. On the other, as
 * in `claude plugin eval` 2.1.312, an Agent call with `isolation: "worktree"` comes back refused
 * ("Cannot create agent worktree: worktree isolation is unavailable in this session"), and the
 * main session makes each worktree itself with `git worktree add` (the worktree fallback, T52).
 *
 * A real run of `claude plugin eval` 2.1.312 (2026-10-29) writes the `trace` target one content
 * block per line, and each tool result after its own call, even when one assistant message made
 * several calls. The calls of one message share its `msg_` id. The dry check builds each played
 * trace in that shape.
 *
 * The CI run of 2.1.314 (2026-10-30) also put system lines and the sub-agents' own lines between
 * an Agent call and its result. Its behaviour was right: the harness refused isolation, the main
 * session made all five worktrees from the branch head in one Bash loop, started the five tasks
 * before the first merge, merged them one at a time and stopped at checkpoint 06. The fixture
 * `fixtures/build-parallel.trace.jsonl` keeps the lines of that trace the trace graders read, byte
 * for byte: every Agent and Bash call, the main session's and the sub-agents', each Agent call's
 * result, and the system lines between a call and its result.
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
// The tool result `claude plugin eval` 2.1.312 gives an Agent call with isolation.
const refusal =
  "Cannot create agent worktree: worktree isolation is unavailable in this session (plugin evaluation harness)";
// The tree check of the worktree fallback, as `/build auto` writes it.
const treeCheck = ["status", "--porcelain", "--untracked-files=all", "--", ":!.claude/worktrees"];
let work: string;

type Grader = Record<string, unknown> & { name: string; type: string };

/** One tool call of the main session: the tool's name, its input, and the result it got. */
type Call = { tool: string; input: Record<string, unknown>; result?: string; error?: boolean };

/**
 * What a run leaves: its workspace, its tool calls message by message, and its last reply. A
 * saved run is a trace a real run wrote; it keeps that trace's text.
 */
type Run = { root: string; turns: Call[][]; last: string; saved?: string };

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

/** One trace line that returns a tool result to the model, as a user message. */
function reply(id: string, call: Call): object {
  const result = {
    tool_use_id: id,
    type: "tool_result",
    content: call.result ?? `Done: ${call.tool}`,
    ...(call.error === true ? { is_error: true } : {}),
  };
  return { type: "user", message: { role: "user", content: [result] } };
}

/**
 * The run as JSON lines: the init line with the session's tools, the prompt, then each message's
 * tool calls, each on its own line with the message's id and followed by its result, then the
 * last reply. A saved run gives the text its real run wrote.
 */
function trace(run: Run): string {
  if (run.saved !== undefined) {
    return run.saved;
  }
  const lines: object[] = [
    { type: "system", subtype: "init", tools: [{ name: "Agent" }, { name: "Bash" }] },
    {
      type: "user",
      message: { role: "user", content: "/brain:build auto\n\nThe plan is approved." },
    },
  ];
  for (const [turn, calls] of run.turns.entries()) {
    for (const [index, call] of calls.entries()) {
      const id = `toolu_${turn}_${index}`;
      const use = { type: "tool_use", id, name: call.tool, input: call.input };
      lines.push(
        { type: "assistant", message: { id: `msg_${turn}`, role: "assistant", content: [use] } },
        reply(id, call),
      );
    }
  }
  lines.push({
    type: "assistant",
    message: { role: "assistant", content: [{ type: "text", text: run.last }] },
  });
  return lines.map((line) => JSON.stringify(line)).join("\n");
}

/** The text a regex grader reads, for the targets this case uses. */
async function targetText(target: unknown, run: Run): Promise<string | null> {
  if (target === "trace") {
    return trace(run);
  }
  if (target === "last_message" || target === undefined) {
    return run.last;
  }
  if (isFileTarget(target)) {
    const file = Bun.file(`${run.root}/${target.path}`);
    return (await file.exists()) ? file.text() : null;
  }
  throw new Error(`the dry check does not read the target ${JSON.stringify(target)}`);
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
    const calls = run.turns.flat();
    const count = calls.filter((call) => hits(call, tool, String(each.input_match ?? "")));
    return count.length >= Number(each.min ?? 1) && count.length <= Number(each.max ?? Infinity);
  }
  if (each.type === "regex") {
    const text = await targetText(each.target, run);
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

/** The fixture: the lines of the CI trace of 2026-10-30 that the trace graders read. */
const savedTrace = `${import.meta.dir}/fixtures/build-parallel.trace.jsonl`;

/** Whether a trace alone settles a grader: a regex on the trace, or a count of tool calls. */
function readsTrace(each: Grader): boolean {
  return (each.type === "regex" && each.target === "trace") || each.type === "tool_used";
}

/**
 * A run from a saved trace. As the runner counts them, every tool_use block is a call, a
 * sub-agent's too; the trace target is each line, joined by line breaks.
 */
function savedRun(text: string): Run {
  const lines = text.trimEnd().split("\n");
  const calls: Call[] = [];
  for (const line of lines) {
    const data = JSON.parse(line) as { type?: string; message?: { content?: unknown } };
    const content = data.message?.content;
    if (data.type === "assistant" && Array.isArray(content)) {
      for (const block of content as { type?: string; name?: string; input?: object }[]) {
        if (block.type === "tool_use") {
          calls.push({ tool: String(block.name), input: { ...block.input } });
        }
      }
    }
  }
  return { root: "", turns: [calls], last: "", saved: lines.join("\n") };
}

/** The name of each grader that a saved trace settles alone and that fails it. */
async function failingSaved(run: Run): Promise<string[]> {
  const failed: string[] = [];
  for (const each of await readGraders()) {
    if (readsTrace(each) && !(await passes(each, run))) {
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

/** The folder of row `id`'s fallback worktree, relative to the workspace. */
function fallbackTree(id: string): string {
  return `.claude/worktrees/T${id}`;
}

type Brief = { isolation?: boolean; branch?: boolean; worktree?: string };

/**
 * A brief as `/build auto` writes it: the plain-talk block, the base, then the block, whole. With
 * `worktree`, the base is the fallback worktree the main session made, and the brief says to work
 * only there.
 */
async function brief(root: string, id: string, options: Brief = {}): Promise<Call> {
  const todo = await Bun.file(`${root}/${todoPath}`).text();
  const plainTalk = await Bun.file(`${repo}/plain-talk/AGENTS-block.md`).text();
  let base = "Your worktree is ready. Run `bun install` first.";
  if (options.worktree !== undefined) {
    base = `Work only in ${options.worktree}: every file you read or write is under it, and every shell command starts with \`cd ${options.worktree} && \`. Its branch build/T${id} holds the head of ${branch}, and the install has run.`;
  } else if (options.branch ?? true) {
    base = `Your worktree may start on the default branch. First run \`git merge --ff-only ${branch}\`, then \`bun install\`.`;
  }
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
    result: `Async agent launched successfully. Build task ${id}`,
  };
}

/**
 * Claude Code gives a sub-agent on row `id` a worktree of its own. The worktree starts on the
 * remote's default branch, as Claude Code's default base does, and the brief's first step brings
 * it to the feature branch's head. Returns the worktree's folder and branch.
 */
function isolatedTask(
  root: string,
  name: string,
  id: string,
): { tree: string; taskBranch: string } {
  const tree = `${work}/${name}-worktree-${id}`;
  const taskBranch = `worktree-agent-${name}-${id}`;
  git(root, "worktree", "add", "-q", "-b", taskBranch, tree, "origin/main");
  git(tree, "merge", "-q", "--ff-only", branch);
  return { tree, taskBranch };
}

/**
 * The main session makes row `id`'s fallback worktree from `base` and runs the install there, as
 * the worktree fallback says. Returns the two calls, the worktree's folder and its branch.
 */
function fallbackTask(
  root: string,
  id: string,
  base: string,
): { calls: Call[]; tree: string; taskBranch: string } {
  const taskBranch = `build/T${id}`;
  const tree = `${root}/${fallbackTree(id)}`;
  git(root, "worktree", "add", "-q", "-b", taskBranch, fallbackTree(id), base);
  const install = Bun.spawnSync(["bun", "install"], { cwd: tree, env: process.env });
  expect(install.exitCode).toBe(0);
  const calls: Call[] = [
    {
      tool: "Bash",
      input: {
        command: `git worktree add -b ${taskBranch} ${fallbackTree(id)} ${base}`,
        description: `Make the worktree of task ${id}`,
      },
    },
    {
      tool: "Bash",
      input: { command: `cd ${fallbackTree(id)} && bun install`, description: `Install in T${id}` },
    },
  ];
  return { calls, tree, taskBranch };
}

/** A played sub-agent writes its task's files in its worktree and commits them; returns the SHA. */
async function commitTask(tree: string, id: string): Promise<string> {
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
  run.turns.push(
    [
      {
        tool: "Bash",
        input: { command: `git merge --no-ff --no-edit ${taskBranch}`, description: `Merge ${id}` },
      },
    ],
    [{ tool: "Bash", input: { command: "bun test", description: "Run the gate" } }],
  );
}

/** The main session runs the tree check and returns its output. */
function checkTree(run: Run): string {
  run.turns.push([
    {
      tool: "Bash",
      input: {
        command: `git ${treeCheck.slice(0, -1).join(" ")} '${treeCheck.at(-1)}'`,
        description: "Check this session's tree",
      },
    },
  ]);
  return git(run.root, ...treeCheck);
}

/** After its merge, the main session removes a fallback worktree, prunes, and drops its branch. */
function removeTree(run: Run, id: string): void {
  git(run.root, "worktree", "remove", fallbackTree(id));
  git(run.root, "worktree", "prune");
  git(run.root, "branch", "-q", "-d", `build/T${id}`);
  run.turns.push([
    {
      tool: "Bash",
      input: {
        command: `git worktree remove ${fallbackTree(id)} && git worktree prune && git branch -d build/T${id}`,
      },
    },
  ]);
}

/**
 * Write the plan's Parallel waves section again from the real `brain plan`: the lines it prints
 * above its Cap line take the place of the section's old lines.
 */
async function rewriteWaves(root: string): Promise<void> {
  const planned = brain(root, "plan", "SPEC-001");
  expect(planned.exitCode).toBe(0);
  const waves = planned.out.slice(0, planned.out.indexOf("\nCap: ")).trimEnd();
  const file = `${root}/${planPath}`;
  const plan = await Bun.file(file).text();
  const start = plan.indexOf("## Parallel waves\n");
  expect(start).toBeGreaterThan(-1);
  const next = plan.indexOf("\n## ", start + 1);
  const rest = next === -1 ? "" : plan.slice(next);
  await Bun.write(file, `${plan.slice(0, start)}## Parallel waves\n${waves}\n${rest}`);
}

/**
 * The main session closes row `id`: it ticks the block, resolves the row, writes the Parallel
 * waves section again, checks and commits. With `check`, the real `brain plan` and `brain check`
 * run too; each run takes a bun start, so only the correct runs pay for it.
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
  run.turns.push([
    { tool: "Bash", input: { command: `${brainCmd} plan SPEC-001` } },
    { tool: "Bash", input: { command: `${brainCmd} check` } },
  ]);
  if (check) {
    await rewriteWaves(run.root);
    expect(brain(run.root, "check").exitCode).toBe(0);
  }
  git(run.root, "add", "--", planPath, todoPath);
  git(run.root, "commit", "-qm", `chore: close row ${id} of SPEC-001`);
  run.turns.push([
    {
      tool: "Bash",
      input: {
        command: `git add -- ${planPath} ${todoPath} && git commit -m "chore: close row ${id}"`,
      },
    },
  ]);
}

/** The host refuses isolation, and the main session makes each worktree itself. */
type Fallback = {
  /** The start point of each `git worktree add`; the feature branch when left out. */
  base?: string;
  /** One Bash loop makes every worktree of a batch and installs in it, as the CI run did. */
  loop?: boolean;
  /** The brief names the worktree's path; true when left out. */
  path?: boolean;
  /** The row whose sub-agent also writes its module in the main session's tree. */
  stray?: string;
  /** The row whose sub-agent fails: it commits nothing and replies fail. */
  fail?: string;
};

type Play = {
  /** The rows started at once in each batch; every batch is merged before the next starts. */
  batches?: string[][];
  brief?: Brief;
  close?: boolean;
  /** Run the real `brain check` at each row close. */
  check?: boolean;
  pastCheckpoint?: boolean;
  fallback?: Fallback;
};

/** A started task: its row, its worktree's folder and branch. */
type Started = { id: string; tree: string; taskBranch: string };

/** Resolve checkpoint 06 with no review, for a run that goes past it. */
async function passCheckpoint(root: string): Promise<void> {
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

/** Start one batch of rows, each in a worktree, and return them. */
async function startBatch(run: Run, name: string, batch: string[], play: Play): Promise<Started[]> {
  const { fallback } = play;
  if (fallback === undefined) {
    const calls: Call[] = [];
    const started: Started[] = [];
    for (const id of batch) {
      calls.push(await brief(run.root, id, play.brief));
      started.push({ id, ...isolatedTask(run.root, name, id) });
    }
    run.turns.push(calls);
    return started;
  }
  const base = fallback.base ?? branch;
  const made = batch.map((id) => ({ id, ...fallbackTask(run.root, id, base) }));
  if (fallback.loop === true) {
    const tree = fallbackTree("$n");
    const command = `for n in ${batch.join(" ")}; do git worktree add -b build/T$n ${tree} ${base} && (cd ${tree} && bun install); done`;
    run.turns.push([{ tool: "Bash", input: { command, description: "Make the worktrees" } }]);
  } else {
    run.turns.push(made.flatMap((each) => each.calls));
  }
  const calls: Call[] = [];
  for (const { id, tree } of made) {
    const worktree = (fallback.path ?? true) ? tree : undefined;
    calls.push(await brief(run.root, id, { isolation: false, worktree }));
  }
  run.turns.push(calls);
  return made.map(({ id, tree, taskBranch }) => ({ id, tree, taskBranch }));
}

/**
 * The host refuses isolation: the whole first wave goes out at once with it, and every call comes
 * back refused. The main session then records its tree; returns that record.
 */
async function refuseWave(run: Run): Promise<string> {
  const refused: Call[] = [];
  for (const id of wave) {
    refused.push({ ...(await brief(run.root, id)), result: refusal, error: true });
  }
  run.turns.push(refused);
  return checkTree(run);
}

/**
 * The played sub-agents work in their worktrees and commit; returns each commit's SHA by row. A
 * failed task leaves its work uncommitted in its own worktree, and a stray one also writes its
 * module in the main session's tree.
 */
async function subAgentsWork(
  root: string,
  started: Started[],
  fallback?: Fallback,
): Promise<Map<string, string>> {
  const shas = new Map<string, string>();
  for (const { id, tree } of started) {
    const module = `src/${testFile[id]}.ts`;
    if (fallback?.fail === id) {
      await Bun.write(`${tree}/${module}`, "export {};\n");
    } else {
      shas.set(id, await commitTask(tree, id));
    }
    if (fallback?.stray === id) {
      await Bun.write(`${root}/${module}`, filesOf(id)[module] ?? "");
    }
  }
  return shas;
}

/**
 * When a fallback task replies, the main session checks its tree against the record, then reads
 * the task's line. Returns the stop message, or null when the task may merge.
 */
function stopOnReply(
  run: Run,
  id: string,
  started: Started[],
  fallback: Fallback,
  record: string,
): string | null {
  const now = checkTree(run);
  if (now !== record) {
    return `Stopped before any merge: an agent wrote in this session's tree.\n${now}`;
  }
  if (fallback.fail === id) {
    const kept = started.filter((each) => each.id >= id).map((each) => fallbackTree(each.id));
    return `Task ${id} failed. Kept worktrees: ${kept.join(", ")}.`;
  }
  return null;
}

/**
 * Play `/build auto` on the scaffold: start each batch at once, then merge and close one task at a
 * time. With `fallback`, the first wave's isolated calls come back refused, and every task then
 * runs in a worktree the main session made: it records its tree before the first task starts,
 * checks it again when each task replies, and stops before any merge when it changed. A merged
 * worktree is removed; a failed task stops the build and keeps its worktree.
 */
async function buildAuto(name: string, play: Play = {}): Promise<Run> {
  const root = await scaffold(name);
  const run: Run = {
    root,
    turns: [[{ tool: "Bash", input: { command: `${brainCmd} plan --json` } }]],
    last: "All five tasks of the first wave started at once. Checkpoint 06 waits for your review.",
  };
  const batches = [...(play.batches ?? [wave])];
  if (play.pastCheckpoint === true) {
    batches.push(["07"]);
  }
  const { fallback } = play;
  const record = fallback === undefined ? "" : await refuseWave(run);
  for (const batch of batches) {
    if (batch.includes("07")) {
      await passCheckpoint(root);
    }
    const started = await startBatch(run, name, batch, play);
    const shas = await subAgentsWork(root, started, fallback);
    for (const { id, taskBranch } of started) {
      const stop = fallback === undefined ? null : stopOnReply(run, id, started, fallback, record);
      if (stop !== null) {
        run.last = stop;
        return run;
      }
      merge(run, taskBranch, id);
      if (play.close ?? true) {
        await closeRow(run, id, shas.get(id) ?? "", play.check ?? false);
      }
      if (fallback !== undefined) {
        removeTree(run, id);
      }
    }
  }
  return run;
}

/** The paths of the worktrees git lists for a workspace, sorted. */
function worktrees(root: string): string[] {
  return git(root, "worktree", "list", "--porcelain")
    .split("\n")
    .filter((line) => line.startsWith("worktree "))
    .map((line) => line.slice("worktree ".length))
    .toSorted();
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

  test("each start grader reads the trace, and names its task's test file and fallback worktree", async () => {
    const graders = await readGraders();
    for (const id of wave) {
      const own = graders.find((each) => each.name === `started-${id}`);
      expect([own?.type, own?.target]).toEqual(["regex", "trace"]);
      expect(String(own?.pattern)).toContain(`${testFile[id]}\\.test\\.ts`);
      expect(String(own?.pattern)).toContain(`worktrees/T${id}\\b`);
      expect(String(own?.pattern)).toContain("feat/text-tools");
    }
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

describe("lifecycle/build-parallel, the graders on played runs where the Agent tool gives a worktree", () => {
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

  test("a run that only reads the plan fails every grader that needs a start or a closed row", async () => {
    const root = await scaffold("no-build");
    const run: Run = { root, turns: [], last: "" };
    expect(await failing(run)).toEqual([
      "branch-head",
      "rows-resolved",
      "started-01",
      "started-02",
      "started-03",
      "started-04",
      "started-05",
      "stops-at-checkpoint",
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

  test("a run whose sub-agents get no worktree fails every start and the worktree grader", async () => {
    const run = await buildAuto("no-worktree", { brief: { isolation: false } });
    expect(await failing(run)).toEqual([
      "started-01",
      "started-02",
      "started-03",
      "started-04",
      "started-05",
      "worktrees",
    ]);
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

describe("lifecycle/build-parallel, the graders on played runs where the Agent tool refuses a worktree", () => {
  test("a fallback run passes every computed grader, and leaves no worktree and no task branch behind", async () => {
    const run = await buildAuto("fallback", { check: true, fallback: {} });
    expect(await failing(run)).toEqual([]);
    expect(brain(run.root, "check").exitCode).toBe(0);
    expect(git(run.root, "status", "--porcelain")).toBe("");
    expect(worktrees(run.root)).toEqual([run.root]);
    expect(git(run.root, "branch", "--list", "build/*")).toBe("");
    for (const id of wave) {
      expect(await Bun.file(`${run.root}/${fallbackTree(id)}/package.json`).exists()).toBe(false);
    }
    const tests = Bun.spawnSync(["bun", "test"], { cwd: run.root, env: sandbox() });
    expect(tests.stderr.toString()).toContain(" 6 pass");
    expect(tests.exitCode).toBe(0);
  });

  test("a refused call is no start: a fallback run that then starts one task at a time fails every start but the first", async () => {
    const run = await buildAuto("fallback-one-at-a-time", {
      batches: wave.map((id) => [id]),
      fallback: {},
    });
    expect(await failing(run)).toEqual(["started-02", "started-03", "started-04", "started-05"]);
  });

  test("a refused run that then starts the tasks with neither isolation nor a worktree path fails every start and the worktree grader", async () => {
    const run = await buildAuto("fallback-no-path", { fallback: { path: false } });
    expect(await failing(run)).toEqual([
      "started-01",
      "started-02",
      "started-03",
      "started-04",
      "started-05",
      "worktrees",
    ]);
  });

  test("a fallback run that makes every worktree in one Bash loop, as the CI run did, passes every computed grader", async () => {
    const run = await buildAuto("fallback-loop", { fallback: { loop: true } });
    expect(
      run.turns.flat().filter((call) => /worktree add/u.test(String(call.input.command))),
    ).toHaveLength(1);
    expect(await failing(run)).toEqual([]);
  });

  test("a fallback run whose one loop makes the worktrees from main fails every start", async () => {
    const run = await buildAuto("fallback-loop-from-main", {
      fallback: { loop: true, base: "main" },
    });
    expect(await failing(run)).toEqual([
      "started-01",
      "started-02",
      "started-03",
      "started-04",
      "started-05",
    ]);
  });

  test("a fallback run whose worktrees start from main, not the branch head, fails every start", async () => {
    const run = await buildAuto("fallback-from-main", { fallback: { base: "main" } });
    expect(await failing(run)).toEqual([
      "started-01",
      "started-02",
      "started-03",
      "started-04",
      "started-05",
    ]);
  });

  test("a sub-agent that writes in the main tree stops the build before any merge", async () => {
    const run = await buildAuto("fallback-stray", { fallback: { stray: "02" } });
    expect(run.last).toContain("Stopped before any merge");
    expect(run.last).toContain("?? src/longest.ts");
    // No task reached the feature branch, and every worktree stays for the user to inspect.
    expect(git(run.root, "log", "--format=%s", branch)).toBe("scaffold\ninitial");
    expect(worktrees(run.root)).toEqual(
      [run.root, ...wave.map((id) => `${run.root}/${fallbackTree(id)}`)].toSorted(),
    );
    const calls = run.turns.flat().map((call) => String(call.input.command ?? ""));
    expect(calls.filter((command) => command.startsWith("git merge"))).toEqual([]);
    expect(await failing(run)).toEqual(["rows-resolved", "stops-at-checkpoint"]);
  });

  test("a merged fallback worktree is gone, and a failed one stays and is named", async () => {
    const run = await buildAuto("fallback-kept", { fallback: { fail: "03" } });
    // Task 03's uncommitted file sits in its own worktree, which the tree check leaves out.
    expect(run.last).not.toContain("Stopped before any merge");
    expect(git(`${run.root}/${fallbackTree("03")}`, "status", "--porcelain")).toBe(
      "?? src/capitalize.ts",
    );
    for (const id of ["01", "02"]) {
      expect(await Bun.file(`${run.root}/${fallbackTree(id)}/package.json`).exists()).toBe(false);
      expect(git(run.root, "branch", "--list", `build/T${id}`)).toBe("");
    }
    expect(worktrees(run.root)).toEqual(
      [run.root, ...["03", "04", "05"].map((id) => `${run.root}/${fallbackTree(id)}`)].toSorted(),
    );
    expect(git(run.root, "branch", "--list", "--format=%(refname:short)", "build/T03")).toBe(
      "build/T03",
    );
    expect(run.last).toContain(`Task 03 failed. Kept worktrees: ${fallbackTree("03")}`);
    expect(await failing(run)).toEqual(["rows-resolved", "stops-at-checkpoint"]);
  });
});

describe("lifecycle/build-parallel, the graders on the CI trace of 2026-10-30", () => {
  const starts = ["started-01", "started-02", "started-03", "started-04", "started-05"];

  test("the fixture holds whole trace lines and no key, and an Agent call's result can come lines after the call", async () => {
    const text = await Bun.file(savedTrace).text();
    const lines = text.trimEnd().split("\n");
    for (const line of lines) {
      expect(JSON.stringify(JSON.parse(line))).toBe(line);
    }
    expect(text).not.toMatch(/sk-ant-|oat01|api[_-]?key/iu);
    const call = lines.findIndex((line) => line.includes('"name":"Agent"'));
    const id = /"id":"(?<id>toolu_\w+)"/u.exec(lines[call] ?? "")?.groups?.id ?? "";
    const result = lines.findIndex((line) => line.includes(`"tool_use_id":"${id}"`));
    expect(lines[call + 1]).toContain('"type":"user"');
    const launch = lines.findIndex(
      (line, index) =>
        index > result && line.includes('"name":"Agent"') && !line.includes('"isolation"'),
    );
    expect(lines[launch + 1]).toContain('"subtype":"background_tasks_changed"');
  });

  test("a trace alone settles each task's start, the worktree grader and the branch head", async () => {
    const graders = await readGraders();
    expect(graders.filter(readsTrace).map((each) => each.name)).toEqual([
      "branch-head",
      ...starts,
      "worktrees",
    ]);
  });

  test("the CI run, which made every worktree from the branch head in one loop and started the five tasks before the first merge, passes every grader the trace settles", async () => {
    const run = savedRun(await Bun.file(savedTrace).text());
    expect(await failingSaved(run)).toEqual([]);
  });

  test("the CI run with its worktrees made from main fails every start", async () => {
    const text = await Bun.file(savedTrace).text();
    const fromMain = text.replace("/T$n feat/text-tools &&", "/T$n main &&");
    expect(fromMain).not.toBe(text);
    expect(await failingSaved(savedRun(fromMain))).toEqual(starts);
  });

  test("the CI run with its first merge moved before the second start fails every later start", async () => {
    const text = await Bun.file(savedTrace).text();
    const lines = text.trimEnd().split("\n");
    const firstMerge = lines.findIndex((line) => line.includes("git merge --no-ff build/T01"));
    const second = lines.findIndex(
      (line) =>
        line.includes('"name":"Agent"') &&
        line.includes("longest.test.ts") &&
        !line.includes('"isolation"'),
    );
    expect(firstMerge).toBeGreaterThan(second);
    const [moved] = lines.splice(firstMerge, 1);
    lines.splice(second, 0, moved ?? "");
    expect(await failingSaved(savedRun(lines.join("\n")))).toEqual(starts.slice(1));
  });
});
