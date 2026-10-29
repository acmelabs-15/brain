/**
 * The dry check of the eval case `lifecycle/interview-resume`, with no model run. It builds
 * the case's scaffold and proves that its idea file has exactly one row on its frontier, and
 * that every record the map links is valid. Then it plays a correct resume and faulty ones,
 * with the real `brain new-doc` where a run creates a file, and applies the case's computed
 * graders to each, as `claude plugin eval` 2.1.312 reads them. A judge grader needs a model,
 * so the dry check reads only its frontmatter.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkDoc, readFrontmatter, rowStatus, tables } from "../../workspace/schema";

// A played run starts bash and bun processes, which take seconds on a loaded machine
// (parallel builds run several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const caseDir = `${import.meta.dir}/../../../evals/lifecycle/interview-resume`;
const cli = `${import.meta.dir}/../../brain.ts`;
const idea = "docs/ideas/IDEA-001-sync-notes.md";
let work: string;

type Grader = Record<string, unknown> & { name: string; type: string };

/** One tool call of a run: the tool's name and its input. */
type Call = { tool: string; input: Record<string, unknown> };

/** What a run leaves: its workspace, the files it created, its tool calls and its last reply. */
type Run = { root: string; created: string[]; calls: Call[]; last: string };

/** One row of a map, keyed by its column names. */
type Row = {
  id: string;
  question: string;
  type: string;
  status: string;
  blockedBy: string[];
  result: string;
};

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
    // The runner tests input_match against the call's JSON input, with no flags.
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

/** The name of each computed grader that fails the run; judge graders are left out. */
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

/** Run `brain new-doc <type> <slug>` in a scaffold; return the Bash call as the skill spells it. */
function newDoc(root: string, type: string, slug: string): Call {
  const res = Bun.spawnSync(["bun", cli, "new-doc", type, slug], {
    cwd: root,
    env: { ...process.env, GIT_CEILING_DIRECTORIES: work },
  });
  expect(res.stderr.toString()).toBe("");
  expect(res.exitCode).toBe(0);
  // Claude Code puts the plugin's path in place of ${CLAUDE_PLUGIN_ROOT} when the skill loads.
  return {
    tool: "Bash",
    input: { command: `bun "/plugins/brain/scripts/brain.ts" new-doc ${type} ${slug}` },
  };
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
    const [id, question, type, status, blocked, result] = line
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());
    const blockedBy = blocked === "—" ? [] : String(blocked).split(/,\s*/u);
    return { id, question, type, status, blockedBy, result } as Row;
  });
}

/** Every `open` row whose blocking rows are all `resolved`. */
function frontier(rows: Row[]): string[] {
  const resolved = new Set(rows.filter((row) => row.status === "resolved").map((row) => row.id));
  return rows
    .filter((row) => row.status === "open" && row.blockedBy.every((id) => resolved.has(id)))
    .map((row) => row.id);
}

/** The tool calls of a resume: interview-me and the three skills it loads, then the idea file. */
const resumeCalls: Call[] = [
  { tool: "Skill", input: { skill: "brain:interview-me" } },
  { tool: "Skill", input: { skill: "brain:ask-user-question" } },
  { tool: "Skill", input: { skill: "brain:domain-modeling" } },
  { tool: "Skill", input: { skill: "brain:context-engineering" } },
  { tool: "Read", input: { file_path: `/tmp/eval/${idea}` } },
];

/** The reply of a correct resume: where the map stands, then row 09's question, recommended. */
const goodReply = `IDEA-001, sync notes across devices, is in define. Rows 01, 02, 04, 05, 06 and 07 are resolved; row 03 was superseded by row 06. The frontier holds one row: 09. Rows 08 and 10 wait on it.

Row 09: must notes be end-to-end encrypted at launch?

- Not at launch (Recommended): the Standard plan stays at $0.40 per active user per month (RES-003), the cheapest plan that meets the 60-second target. Cost: notes sit unencrypted on the service until a later release.
- Yes, at launch: notes are encrypted before they leave the device. Cost: the Business plan, $0.90 per active user per month.`;

/** Play a run: scaffold, then `act` in the workspace, which returns the calls it made and its reply. */
async function play(
  name: string,
  act: (root: string) => { calls: Call[]; last: string },
): Promise<Run> {
  const root = await scaffold(name);
  const before = new Set(await filesIn(root));
  const { calls, last } = act(root);
  const after = await filesIn(root);
  const created = after.filter((path) => !before.has(path));
  return { root, created, calls, last };
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-interview-resume-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("lifecycle/interview-resume, the case files", () => {
  test("the prompt names the idea and nothing else from its map, within three runs per arm", async () => {
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
    const body = text.slice(text.indexOf("\n---", 3) + 4);
    expect(body).toContain("sync notes");
    // The session gets the idea file only: the prompt names no row, ID or answer.
    expect(body).not.toMatch(/IDEA-|DEC-|RES-|\brow\b|\d|encrypt|plan|merge|offline/iu);
  });

  test("every judge grader reads the last reply, beside computed graders on the same run", async () => {
    const graders = await readGraders();
    const judges = graders.filter((each) => each.type === "llm");
    expect(judges.length).toBeGreaterThan(0);
    expect(judges.map((each) => each.focus)).toEqual(judges.map(() => "last_message"));
    expect(graders.filter((each) => each.type !== "llm").length).toBeGreaterThan(judges.length);
  });
});

describe("lifecycle/interview-resume, the scaffold", () => {
  test("is a brain repo with setup-brain's workspace.md, the idea file and its records, and no handoff note", async () => {
    const root = await scaffold("fresh");
    const template = await Bun.file(
      `${import.meta.dir}/../../../skills/setup-brain/workspace.md`,
    ).text();
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(template);
    expect(Bun.spawnSync(["git", "rev-parse", "--git-dir"], { cwd: root }).exitCode).toBe(0);
    expect(await filesIn(root)).toEqual([
      "README.md",
      "docs/agents/workspace.md",
      "docs/decisions/DEC-001-phones-and-laptops.md",
      "docs/decisions/DEC-002-hosted-sync-service.md",
      "docs/decisions/DEC-003-merge-by-line.md",
      idea,
      "docs/research/RES-001-store-change-feed.md",
      "docs/research/RES-002-sync-test-account.md",
      "docs/research/RES-003-sync-service-cost.md",
    ]);
  });

  test("every numbered file passes its schema", async () => {
    const root = await scaffold("schema");
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
  });

  test("the map is mid-define: one interview row on the frontier, and the first open row blocked", async () => {
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
    expect(frontier(rows)).toEqual(["09"]);
    expect(rows.find((row) => row.id === "09")?.type).toBe("interview");
    // A run that takes the first open row in table order asks a blocked row.
    expect(rows.find((row) => row.status === "open")?.id).toBe("08");
    // The fog waits on an open row, so no fog is sharp enough to become a row on resume.
    expect(text).toMatch(/## Not yet specified\n- .*once the offline limit is known\.\n/u);
  });

  test("every resolved row links a record, and that record names the row in from", async () => {
    const root = await scaffold("links");
    const rows = mapRows(await Bun.file(`${root}/${idea}`).text());
    const files = await filesIn(root);
    for (const row of rows) {
      if (row.status !== "resolved") {
        expect([row.id, row.result]).toEqual([row.id, "—"]);
        continue;
      }
      const record = files.find((path) => path.includes(`/${row.result}-`));
      expect([row.id, record === undefined]).toEqual([row.id, false]);
      const data = front(await Bun.file(`${root}/${record}`).text());
      expect([row.id, data.from, data.status]).toEqual([
        row.id,
        `IDEA-001#${row.id}`,
        row.result.startsWith("DEC") ? "accepted" : "resolved",
      ]);
    }
  });
});

describe("lifecycle/interview-resume, the computed graders on played runs", () => {
  test("a resume that asks row 09 with a recommendation passes every computed grader", async () => {
    const run = await play("good", () => ({ calls: resumeCalls, last: goodReply }));
    expect(run.created).toEqual([]);
    expect(await failing(run)).toEqual([]);
  });

  test("a session that charts the idea again fails the no-new-idea grader", async () => {
    const run = await play("recharted", (root) => ({
      calls: [...resumeCalls, newDoc(root, "IDEA", "sync-notes")],
      last: goodReply,
    }));
    expect(run.created).toEqual(["docs/ideas/IDEA-002-sync-notes.md"]);
    expect(await failing(run)).toEqual(["no-new-idea"]);
  });

  test("a session that decides row 09 itself fails the no-new-decision grader", async () => {
    const run = await play("self-decided", (root) => ({
      calls: [...resumeCalls, newDoc(root, "DEC", "no-encryption-at-launch")],
      last: goodReply,
    }));
    expect(run.created).toEqual(["docs/decisions/DEC-004-no-encryption-at-launch.md"]);
    expect(await failing(run)).toEqual(["no-new-decision"]);
  });

  test("a session that asks the first open row, which is blocked, fails the frontier-row grader", async () => {
    const run = await play("blocked-row", () => ({
      calls: resumeCalls,
      last: `Next is row 08: which plan of the sync service do we buy at launch?

- Standard (Recommended): $0.40 per active user per month, the cheapest. Cost: fewer features.
- Business: $0.90 per active user per month. Cost: more than twice the price.`,
    }));
    expect(await failing(run)).toEqual(["frontier-row"]);
  });

  test("a question with no recommendation fails the recommended grader", async () => {
    const run = await play("no-recommendation", () => ({
      calls: resumeCalls,
      last: "Row 09: must notes be end-to-end encrypted at launch? Yes, or not at launch?",
    }));
    expect(await failing(run)).toEqual(["recommended"]);
  });

  test("a run without the skill fails only the skill indicator", async () => {
    const run = await play("no-skill", () => ({
      calls: resumeCalls.filter((call) => call.tool !== "Skill"),
      last: goodReply,
    }));
    expect(await failing(run)).toEqual(["interview-fired"]);
  });
});
