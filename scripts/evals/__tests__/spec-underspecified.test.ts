/**
 * The dry check of the eval case `lifecycle/spec-underspecified`, with no model run. It builds
 * the case's scaffold, plays a correct chart and faulty runs with the real `brain new-doc` and
 * `brain check`, and applies the case's computed graders to each, as `claude plugin eval`
 * 2.1.312 reads them. The one llm grader is not modelled here.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { readFrontmatter } from "../../workspace/schema";

// A played run starts bash and bun processes, which take seconds on a loaded machine
// (parallel builds run several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const repo = `${import.meta.dir}/../../..`;
const caseDir = `${repo}/evals/lifecycle/spec-underspecified`;
const cli = `${repo}/scripts/brain.ts`;
// The prompt names no slug, so a run picks its own; this is the one interview-me's example picks.
const slug = "team-metrics";
const idea = `docs/ideas/IDEA-001-${slug}.md`;
let work: string;

type Grader = Record<string, unknown> & { name: string; type: string };

/** One tool call of a run: the tool's name and its input. */
type Call = { tool: string; input: Record<string, unknown> };

/** What a run leaves: its workspace, the files it created, its tool calls and its last reply. */
type Run = { root: string; created: string[]; calls: Call[]; last: string };

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

/** The text a regex grader reads; the dry check models the two targets this case uses. */
function targetText(target: unknown, run: Run): string {
  if (target === "last_message") {
    return run.last;
  }
  if (target === "files") {
    return run.created.join("\n");
  }
  throw new Error(`the dry check does not read the target ${JSON.stringify(target)}`);
}

/** Apply one computed grader to a run, with the pass rules of `claude plugin eval` 2.1.312. */
function passes(each: Grader, run: Run): boolean {
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
    const text = targetText(each.target ?? "last_message", run);
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
  const graders = await readGraders();
  return graders
    .filter((each) => each.type !== "llm" && !passes(each, run))
    .map((each) => each.name);
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

/** Run `brain new-doc IDEA <name> --title` in a scaffold; return the Bash call as the skill spells it. */
function newIdea(root: string, name: string): Call {
  const res = brain(root, "new-doc", "IDEA", name, "--title", "Team metrics");
  expect(res.exitCode).toBe(0);
  // Claude Code puts the plugin's path in place of ${CLAUDE_PLUGIN_ROOT} when the skill loads.
  return {
    tool: "Bash",
    input: {
      command: `bun "/plugins/brain/scripts/brain.ts" new-doc IDEA ${name} --title "Team metrics"`,
    },
  };
}

/** The chart of interview-me's example: the hypothesis as a draft, four rows, and the fog. */
function chart(text: string): string {
  return text
    .replace("- Outcome: <one line>", '- Outcome: a view that answers "how are we doing?"')
    .replace("- User: <one line>", "- User: open, row 01.")
    .replace("- Why now: <one line>", "- Why now: open, row 01.")
    .replace("- Success: <one line>", "- Success: open, row 03.")
    .replace("- Constraint: <one line>", "- Constraint: open, row 04.")
    .replace("- Out of scope: <one line>", "- Out of scope: open, row 03.")
    .replace(
      /## Destination\n<[^>\n]*>/u,
      '## Destination\nA spec for the view that answers "how are we doing?".',
    )
    .replace(
      /## Notes\n<[^>\n]*>/u,
      "## Notes\nEvery session loads ask-user-question, domain-modeling and context-engineering.",
    )
    .replace(
      "| 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — |",
      [
        '| 01 | Who asks "how are we doing?" | interview | open | — | — |',
        "| 02 | Which metrics does the repo already export? | research | open | — | — |",
        "| 03 | What does a good answer let the reader decide? | interview | open | 01 | — |",
        "| 04 | Which metrics answer that question? | interview | open | 02, 03 | — |",
      ].join("\n"),
    )
    .replace(
      /## Not yet specified\n<[^>\n]*>/u,
      "## Not yet specified\n- How fresh the numbers must be, once the reader is known.",
    )
    .replace(/## Out of scope\n<[^>\n]*>/u, "## Out of scope\nNone yet.");
}

/** The skill calls of a correct run: the spec skill, the interview, and the three it loads. */
const skillCalls: Call[] = [
  { tool: "Skill", input: { skill: "brain:spec-driven-development" } },
  { tool: "Skill", input: { skill: "brain:interview-me" } },
  { tool: "Skill", input: { skill: "brain:ask-user-question" } },
  { tool: "Skill", input: { skill: "brain:domain-modeling" } },
  { tool: "Skill", input: { skill: "brain:context-engineering" } },
];

/** The reply of a correct run: the chart in a few lines, then row 01's question, recommended. */
const goodReply = `The map is in ${idea}. Destination: a spec for the view that answers "how are we doing?". The frontier holds rows 01 and 02.

Row 01: when you say "how are we doing?", who is asking?

- The engineering team in standup (Recommended): "we" usually scopes that way, and standups are where this question comes up. Cost: the view leaves out what a manager needs.
- You alone: a personal view. Cost: the team gets nothing from it.
- Up the chain, a manager or the board: Cost: other metrics and a slower path to a first version.`;

/** Play a run: scaffold, then `act` in the workspace, which returns the calls it made and its reply. */
async function play(
  name: string,
  act: (root: string) => Promise<{ calls: Call[]; last: string }>,
): Promise<Run> {
  const root = await scaffold(name);
  const before = new Set(await filesIn(root));
  const { calls, last } = await act(root);
  const after = await filesIn(root);
  const created = after.filter((path) => !before.has(path));
  return { root, created, calls, last };
}

/** A run that charts the idea file through new-doc, then puts its first question. */
function charted(name: string, options: { calls?: Call[]; last?: string } = {}): Promise<Run> {
  return play(name, async (root) => {
    const made = newIdea(root, slug);
    await Bun.write(`${root}/${idea}`, chart(await Bun.file(`${root}/${idea}`).text()));
    return { calls: [...(options.calls ?? skillCalls), made], last: options.last ?? goodReply };
  });
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-spec-underspecified-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("lifecycle/spec-underspecified, the case files", () => {
  test("the prompt is the underspecified ask after /brain:spec, within three runs per arm", async () => {
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
    // Bash runs brain new-doc and brain check; Write and Edit fill the idea file.
    expect(data.allowed_tools).toEqual(["Read", "Glob", "Grep", "Skill", "Bash", "Write", "Edit"]);
    const body = text.slice(text.indexOf("\n---", 3) + 4);
    expect(body.trim()).toBe("/brain:spec Build me a dashboard for our metrics.");
  });

  test("the idea grader reads the first idea number in the workspace's ideas folder", async () => {
    const graders = await readGraders();
    const file = graders.find((each) => each.name === "idea-file");
    expect(file?.type).toBe("regex");
    expect(file?.target).toBe("files");
    expect(String(file?.pattern)).toContain("docs/ideas/IDEA-001-");
  });

  test("the one llm grader judges the question", async () => {
    const graders = await readGraders();
    const llm = graders.filter((each) => each.type === "llm");
    expect(llm.map((each) => each.name)).toEqual(["one-recommendation"]);
  });
});

describe("lifecycle/spec-underspecified, the scaffold", () => {
  test("is a fresh brain repo: git, setup-brain's workspace.md, and no idea file", async () => {
    const root = await scaffold("fresh");
    const template = await Bun.file(`${repo}/skills/setup-brain/workspace.md`).text();
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(template);
    expect(await filesIn(root)).toEqual(["docs/agents/workspace.md"]);
    expect(Bun.spawnSync(["git", "rev-parse", "--git-dir"], { cwd: root }).exitCode).toBe(0);
  });
});

describe("lifecycle/spec-underspecified, the computed graders on played runs", () => {
  test("a run that charts the idea file through new-doc, then asks one question, passes every computed grader and brain check", async () => {
    const run = await charted("good");
    expect(run.created).toEqual([idea]);
    expect(await failing(run)).toEqual([]);
    const checked = brain(run.root, "check");
    expect(checked.out).toContain("no finding in 1 workspace file");
    expect(checked.exitCode).toBe(0);
  });

  test("a run that charts under another slug passes every computed grader", async () => {
    const run = await play("other-slug", (root) =>
      Promise.resolve({
        calls: [...skillCalls, newIdea(root, "metrics-dashboard")],
        last: goodReply,
      }),
    );
    expect(run.created).toEqual(["docs/ideas/IDEA-001-metrics-dashboard.md"]);
    expect(await failing(run)).toEqual([]);
  });

  test("a run that asks at once, with no map on disk, fails both chart graders", async () => {
    const run = await play("no-chart", () =>
      Promise.resolve({ calls: skillCalls, last: goodReply }),
    );
    expect(run.created).toEqual([]);
    expect(await failing(run)).toEqual(["idea-file", "new-doc-ran"]);
  });

  test("a run that writes the idea file by hand fails only the new-doc grader", async () => {
    const source = await charted("source");
    const text = await Bun.file(`${source.root}/${idea}`).text();
    const run = await play("by-hand", async (root) => {
      await Bun.write(`${root}/${idea}`, text);
      return { calls: skillCalls, last: goodReply };
    });
    expect(await failing(run)).toEqual(["new-doc-ran"]);
  });

  test("a run without the interview fails only the interview indicator", async () => {
    const run = await charted("no-interview", {
      calls: skillCalls.filter((call) => call.input.skill !== "brain:interview-me"),
    });
    expect(await failing(run)).toEqual(["interview-fired"]);
  });

  test("a question with no recommendation fails only the recommended grader", async () => {
    const run = await charted("no-recommendation", {
      last: 'Row 01: when you say "how are we doing?", who is asking?',
    });
    expect(await failing(run)).toEqual(["recommended"]);
  });
});
