/**
 * The dry check of the eval case `lifecycle/interview-parallel-research`, with no model run. It
 * builds the case's scaffold and proves that its idea file has three research rows and one
 * interview row on its frontier, that the cap lets all three research rows start, and that the
 * scaffold passes the real `brain check`. Then it plays a correct resume and faulty ones and
 * applies the case's computed graders to each, as `claude plugin eval` 2.1.312 reads them.
 *
 * A real run of `claude plugin eval` 2.1.312 (2026-10-29) writes the `trace` target one
 * content block per line, and each tool result on the line right after its own call, even when
 * one assistant message made several calls. The calls of one message share its `msg_` id. The
 * dry check builds each played trace in that shape.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkDoc, readFrontmatter, rowStatus, tables } from "../../workspace/schema";

// A played run starts bash and bun processes, which take seconds on a loaded machine
// (parallel builds run several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const repo = `${import.meta.dir}/../../..`;
const caseDir = `${repo}/evals/lifecycle/interview-parallel-research`;
const cli = `${repo}/scripts/brain.ts`;
const idea = "docs/ideas/IDEA-001-notes-export.md";
const research = ["02", "03", "04"];
let work: string;

type Grader = Record<string, unknown> & { name: string; type: string };

/** One tool call of a run: the tool's name and its input. */
type Call = { tool: string; input: Record<string, unknown> };

/** What a run leaves: its workspace, its tool calls turn by turn, and its last reply. */
type Run = { root: string; turns: Call[][]; last: string };

/** One row of a map, keyed by its column names. */
type Row = { id: string; type: string; status: string; blockedBy: string[] };

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

/** The text a tool call returns in a played run. */
function resultOf(call: Call): string {
  if (call.tool === "Agent") {
    return `Async agent launched successfully. ${String(call.input.description)}`;
  }
  return `Done: ${call.tool}`;
}

/** One trace line that returns tool results to the model, as a user message. */
function reply(content: object[]): object {
  return { type: "user", message: { role: "user", content } };
}

/**
 * The run as JSON lines: the init line with the session's tools, the prompt, then each turn's
 * tool calls, each on its own line with the turn's message id and followed by its result, then
 * the last reply.
 */
function trace(run: Run): string {
  const lines: object[] = [
    { type: "system", subtype: "init", tools: [{ name: "Agent" }, { name: "Read" }] },
    { type: "user", message: { role: "user", content: "Pick up the idea." } },
  ];
  for (const [turn, calls] of run.turns.entries()) {
    const uses = calls.map((call, index) => ({
      type: "tool_use",
      id: `toolu_${turn}_${index}`,
      name: call.tool,
      input: call.input,
    }));
    const results = calls.map((call, index) => ({
      tool_use_id: `toolu_${turn}_${index}`,
      type: "tool_result",
      content: resultOf(call),
    }));
    const message = (content: object[]) => ({
      type: "assistant",
      message: { id: `msg_${turn}`, role: "assistant", content },
    });
    for (const [index, use] of uses.entries()) {
      lines.push(message([use]), reply(results.slice(index, index + 1)));
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

/** Apply one computed grader to a run, with the pass rules of `claude plugin eval` 2.1.312. */
async function passes(each: Grader, run: Run): Promise<boolean> {
  if (each.type === "tool_used") {
    // The runner tests input_match against the call's JSON input, with no flags. A pattern
    // that compiles with `u` matches ASCII text the same way, so `u` only adds strictness.
    const match = new RegExp(String(each.input_match ?? ""), "u");
    const count = run.turns
      .flat()
      .filter((call) => call.tool === each.tool && match.test(JSON.stringify(call.input))).length;
    return count >= Number(each.min ?? 1) && count <= Number(each.max ?? Infinity);
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

/** The name of each computed grader that fails the run. */
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

/** The rows of the `## Map` table in an idea file. */
function mapRows(text: string): Row[] {
  const section = text.split(/^## Map\n/mu)[1]?.split(/^## /mu)[0] ?? "";
  const lines = section.split("\n").filter((line) => line.startsWith("|"));
  const header = lines[0]
    ?.split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());
  expect(header).toEqual([...tables.map.columns]);
  return lines.slice(2).map((line) => {
    const [id, , type, status, blocked] = line
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());
    const blockedBy = blocked === "—" ? [] : String(blocked).split(/,\s*/u);
    return { id, type, status, blockedBy } as Row;
  });
}

/** Every `open` row whose blocking rows are all `resolved`. */
function frontier(rows: Row[]): string[] {
  const resolved = new Set(rows.filter((row) => row.status === "resolved").map((row) => row.id));
  return rows
    .filter((row) => row.status === "open" && row.blockedBy.every((id) => resolved.has(id)))
    .map((row) => row.id);
}

/** The tool calls of a resume up to the research: interview-me, its three skills, the idea file. */
const resumeTurns: Call[][] = [
  [{ tool: "Skill", input: { skill: "brain:interview-me" } }],
  [
    { tool: "Skill", input: { skill: "brain:ask-user-question" } },
    { tool: "Skill", input: { skill: "brain:domain-modeling" } },
    { tool: "Skill", input: { skill: "brain:context-engineering" } },
  ],
  [{ tool: "Read", input: { file_path: `/tmp/eval/${idea}` } }],
  [
    { tool: "Skill", input: { skill: "brain:writing-for-agents" } },
    { tool: "Read", input: { file_path: "/plugins/brain/skills/interview-me/RESEARCH.md" } },
  ],
];

/** The questions of the research rows, as the idea file states them. */
const questions: Record<string, string> = {
  "02": "Does the note store keep each note's creation and edit dates?",
  "03": "Which output formats can the CLI already write?",
  "04": "How does the note store record links between notes?",
};

/** The Agent call for research row `id`, with its brief filled as RESEARCH.md says. */
function researchCall(id: string): Call {
  const others = research.filter((each) => each !== id).map((each) => `IDEA-001#${each}`);
  return {
    tool: "Agent",
    input: {
      description: `Research row ${id}`,
      subagent_type: "brain:researcher",
      prompt: [
        "You research one question and write the answer to one research record.",
        `Question: ${questions[id]} The user is planning an export command for a notes CLI.`,
        "Needed by: IDEA-001#07, which decides whether exported notes keep their dates and links.",
        "Start from: src/store.ts and src/cli.ts.",
        `Out of scope: ${others.join(" and ")}, which are other rows.`,
        "Repo: /tmp/eval. Run every command from this folder.",
        'Brain CLI: bun "/plugins/brain/scripts/brain.ts" <cmd>.',
        "Step 1. Run `brain new-doc RES <slug>`. In that file, fill the frontmatter " +
          `(kind: research, from: IDEA-001#${id}), the title after the ID in the H1, and the question.`,
        "Step 7. Reply with the path of your research record and nothing else.",
      ].join("\n"),
    },
  };
}

/** One Agent call whose brief carries all of `ids`: one sub-agent for several rows. */
function sharedCall(ids: string[]): Call {
  const calls = ids.map(researchCall);
  return {
    tool: "Agent",
    input: {
      description: "Research rows",
      subagent_type: "brain:researcher",
      prompt: calls.map((call) => String(call.input.prompt)).join("\n\n"),
    },
  };
}

/** Set the rows `ids` to `in-progress` in the idea file on disk, and return the Edit call. */
async function markStarted(root: string, ids: string[]): Promise<Call> {
  const path = `${root}/${idea}`;
  const before = await Bun.file(path).text();
  let after = before;
  for (const id of ids) {
    const row = new RegExp(`^(\\| ${id} \\|[^|\\n]*\\| research \\|) open \\|`, "mu");
    expect(row.test(after)).toBe(true);
    after = after.replace(row, "$1 in-progress |");
  }
  await Bun.write(path, after);
  return {
    tool: "Edit",
    input: { file_path: `/tmp/eval/${idea}`, old_string: before, new_string: after },
  };
}

/** The reply of a correct resume: the research is running, then row 05's question, recommended. */
const goodReply = `IDEA-001, export notes to other apps, is in define. Row 01 is resolved (DEC-001). Rows 02, 03 and 04 are research rows: a sub-agent works on each now. Rows 06 and 07 wait on them.

Row 05: export every note at once, or one note at a time?

- Every note at once (Recommended): a wiki app opens a whole folder, and DEC-001 targets wiki apps. Cost: a large notes folder takes longer to export.
- One note at a time: the user picks what to share. Cost: moving a whole wiki takes many runs.`;

/** Play a run: scaffold, then `act` in the workspace, which returns the turns it made and its reply. */
async function play(
  name: string,
  act: (root: string) => Promise<{ turns: Call[][]; last: string }>,
): Promise<Run> {
  const root = await scaffold(name);
  const { turns, last } = await act(root);
  return { root, turns, last };
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-interview-parallel-research-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("lifecycle/interview-parallel-research, the case files", () => {
  test("the prompt names the idea and nothing from its map, grants Agent, and stays within three runs per arm", async () => {
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
    expect(body).toContain("notes export");
    // The session gets the idea file only: the prompt names no row, ID or way to work the rows.
    expect(body).not.toMatch(
      /IDEA-|DEC-|RES-|\brow\b|\d|research|parallel|agent|at once|frontier|date|link|format/iu,
    );
  });

  test("every grader is computed, and each research row on the frontier has its own Agent grader", async () => {
    const graders = await readGraders();
    expect(graders.filter((each) => each.type === "llm")).toEqual([]);
    for (const id of research) {
      const own = graders.find((each) => each.name === `research-${id}`);
      expect([id, own?.type, own?.tool]).toEqual([id, "tool_used", "Agent"]);
    }
    const atOnce = graders.find((each) => each.name === "started-at-once");
    expect([atOnce?.type, atOnce?.target, atOnce?.match]).toEqual(["regex", "trace", undefined]);
  });
});

describe("lifecycle/interview-parallel-research, the scaffold", () => {
  test("is a brain repo with setup-brain's workspace.md, a small notes CLI, the idea file and its one decision", async () => {
    const root = await scaffold("fresh");
    const template = await Bun.file(`${repo}/skills/setup-brain/workspace.md`).text();
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(template);
    expect(Bun.spawnSync(["git", "rev-parse", "--git-dir"], { cwd: root }).exitCode).toBe(0);
    expect(await filesIn(root)).toEqual([
      "README.md",
      "docs/agents/workspace.md",
      "docs/decisions/DEC-001-wiki-apps-first.md",
      idea,
      "package.json",
      "src/cli.ts",
      "src/store.ts",
    ]);
  });

  test("every numbered file passes its schema, and the real brain check finds nothing", async () => {
    const root = await scaffold("checked");
    for (const path of await filesIn(root)) {
      const name = /(?<type>IDEA|DEC|RES)-\d{3}/u.exec(path);
      if (name === null) {
        continue;
      }
      const type = name.groups?.type as "IDEA" | "DEC" | "RES";
      expect([path, checkDoc(type, await Bun.file(`${root}/${path}`).text(), name[0])]).toEqual([
        path,
        [],
      ]);
    }
    const res = Bun.spawnSync(["bun", cli, "check"], {
      cwd: root,
      env: { ...process.env, GIT_CEILING_DIRECTORIES: work },
    });
    expect(res.stdout.toString()).toContain("no finding");
    expect(res.exitCode).toBe(0);
  });

  test("the frontier holds the three research rows and one interview row, and the later rows wait on them", async () => {
    const root = await scaffold("map");
    const text = await Bun.file(`${root}/${idea}`).text();
    expect(front(text).status).toBe("define");
    const rows = mapRows(text);
    const ids = new Set(rows.map((row) => row.id));
    for (const row of rows) {
      expect(row.status).toMatch(rowStatus);
      expect(tables.map.types as readonly string[]).toContain(row.type);
      expect(row.blockedBy.filter((id) => !ids.has(id))).toEqual([]);
    }
    expect(frontier(rows)).toEqual([...research, "05"]);
    expect(rows.filter((row) => row.type === "research").map((row) => row.id)).toEqual(research);
    expect(rows.find((row) => row.id === "05")?.type).toBe("interview");
    // Every row past the frontier waits on at least one research row, so nothing else can start.
    const later = rows.filter((row) => row.status === "open" && !frontier(rows).includes(row.id));
    expect(later.map((row) => row.id)).toEqual(["06", "07"]);
    for (const row of later) {
      expect(row.blockedBy.some((id) => research.includes(id))).toBe(true);
    }
    // No research record exists yet, so every research row starts fresh: none is continued.
    const files = await filesIn(root);
    expect(files.filter((path) => path.includes("RES-"))).toEqual([]);
  });

  test("the cap lets all three research rows start: max_parallel is 8 in workspace.md", async () => {
    const root = await scaffold("cap");
    const data = front(await Bun.file(`${root}/docs/agents/workspace.md`).text());
    // The runner passes only an allowlist of variables to a run, and BRAIN_MAX_PARALLEL is not
    // on it, so the file's value is the cap the session sees.
    expect(data.max_parallel).toBe(8);
    expect(Number(data.max_parallel)).toBeGreaterThanOrEqual(research.length);
  });

  test("the repo's own code answers each research row, so a sub-agent needs no web source", async () => {
    const root = await scaffold("answers");
    const store = await Bun.file(`${root}/src/store.ts`).text();
    const cliText = await Bun.file(`${root}/src/cli.ts`).text();
    expect(store).toMatch(/created: string/u);
    expect(store).toMatch(/updated: string/u);
    expect(store).toMatch(/links: string\[\]/u);
    expect(cliText).toMatch(/--json/u);
  });
});

describe("lifecycle/interview-parallel-research, the computed graders on played runs", () => {
  test("a resume that starts the three research rows in one turn, then asks row 05, passes every computed grader", async () => {
    const run = await play("good", async (root) => ({
      turns: [...resumeTurns, research.map(researchCall), [await markStarted(root, research)]],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual([]);
  });

  test("a resume that starts the rows in one turn with the idea file's write passes too", async () => {
    const run = await play("same-turn-write", async (root) => ({
      turns: [...resumeTurns, [await markStarted(root, research), ...research.map(researchCall)]],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual([]);
  });

  test("a resume that starts the rows one turn after another fails only the at-once grader", async () => {
    const run = await play("one-by-one", async (root) => ({
      turns: [
        ...resumeTurns,
        ...research.map((id) => [researchCall(id)]),
        [await markStarted(root, research)],
      ],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual(["started-at-once"]);
  });

  test("a resume that starts two rows, then the third in a later turn, fails only the at-once grader", async () => {
    const run = await play("two-then-one", async (root) => ({
      turns: [
        ...resumeTurns,
        [researchCall("02"), researchCall("03")],
        [researchCall("04")],
        [await markStarted(root, research)],
      ],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual(["started-at-once"]);
  });

  test("a resume that starts only the first research row fails the other rows and the map", async () => {
    const run = await play("first-only", async (root) => ({
      turns: [...resumeTurns, [researchCall("02")], [await markStarted(root, ["02"])]],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual([
      "one-agent-per-row",
      "research-03",
      "research-04",
      "rows-in-progress",
      "started-at-once",
    ]);
  });

  test("a resume that asks row 05 first and starts no research fails every research grader", async () => {
    const run = await play("asks-first", () =>
      Promise.resolve({ turns: resumeTurns, last: goodReply }),
    );
    expect(await failing(run)).toEqual([
      "one-agent-per-row",
      "research-02",
      "research-03",
      "research-04",
      "rows-in-progress",
      "started-at-once",
    ]);
  });

  test("a resume that gives all three rows to one sub-agent fails the one-per-row and at-once graders", async () => {
    const run = await play("one-agent", async (root) => ({
      turns: [...resumeTurns, [sharedCall(research)], [await markStarted(root, research)]],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual(["one-agent-per-row", "started-at-once"]);
  });

  test("a resume that starts the rows but leaves them open in the idea file fails only the map grader", async () => {
    const run = await play("no-write", () =>
      Promise.resolve({ turns: [...resumeTurns, research.map(researchCall)], last: goodReply }),
    );
    expect(await failing(run)).toEqual(["rows-in-progress"]);
  });

  test("a run without the skill fails only the skill indicator", async () => {
    const run = await play("no-skill", async (root) => ({
      turns: [
        ...resumeTurns
          .map((calls) => calls.filter((call) => call.tool !== "Skill"))
          .filter((calls) => calls.length > 0),
        research.map(researchCall),
        [await markStarted(root, research)],
      ],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual(["interview-fired"]);
  });
});
