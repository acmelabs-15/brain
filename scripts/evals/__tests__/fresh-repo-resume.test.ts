/**
 * The dry check of the eval case `setup/fresh-repo-resume`, with no model run. It builds the
 * case's scaffold and proves it is the repo `/setup-brain` leaves on Claude Code: the setup
 * writer and the capabilities script find every file in place, and the repo's own `AGENTS.md`
 * holds no brain text. It
 * shows that `brain status` and the session-start hook both give the words the graders look
 * for, so the case holds whether or not the hook runs in an eval session. Then it plays a
 * correct report and faulty ones, and applies the case's computed graders to each, as
 * `claude plugin eval` 2.1.312 reads them. A judge grader needs a model, so the dry check reads
 * only its frontmatter.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { replaceBlock } from "../../plain-talk/block";
import { writeCapabilities } from "../../setup/capabilities";
import { writeSetup } from "../../setup/write";
import { readFrontmatter } from "../../workspace/schema";

// A played run starts bash and bun processes, which take seconds on a loaded machine
// (parallel builds run several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const repo = `${import.meta.dir}/../../..`;
const caseDir = `${repo}/evals/setup/fresh-repo-resume`;
const cli = `${repo}/scripts/brain.ts`;
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

/** The text a regex grader reads; the dry check models the targets this case uses. */
function targetText(target: unknown, run: Run): Promise<string> {
  if (target === "last_message") {
    return Promise.resolve(run.last);
  }
  if (target === "files") {
    return Promise.resolve(run.created.join("\n"));
  }
  const source = target as { source?: unknown; path?: unknown } | null;
  if (source?.source === "file" && typeof source.path === "string") {
    return Bun.file(`${run.root}/${source.path}`).text();
  }
  throw new Error(`the dry check does not read the target ${JSON.stringify(target)}`);
}

/** Apply one computed grader to a run, with the pass rules of `claude plugin eval` 2.1.312. */
async function passes(each: Grader, run: Run): Promise<boolean> {
  if (each.type === "tool_used") {
    // The runner tests input_match against the call's JSON input, with no flags.
    const match = new RegExp(String(each.input_match ?? ""), "u");
    const count = run.calls.filter(
      (call) => call.tool === each.tool && match.test(JSON.stringify(call.input)),
    ).length;
    return count >= Number(each.min ?? 1) && count <= Number(each.max ?? Infinity);
  }
  if (each.type === "regex") {
    const text = await targetText(each.target ?? "last_message", run);
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

/** Run the real `brain status` in a workspace, with git kept inside the test's folder. */
function brainStatus(root: string): { exitCode: number; out: string } {
  const res = Bun.spawnSync(["bun", cli, "status"], {
    cwd: root,
    env: { ...process.env, GIT_CEILING_DIRECTORIES: work },
  });
  return { exitCode: res.exitCode, out: `${res.stdout.toString()}${res.stderr.toString()}` };
}

/** The Bash call of a session that runs `brain status`, as the status skill spells it. */
const statusCall: Call = {
  tool: "Bash",
  input: { command: 'bun "/plugins/brain/scripts/brain.ts" status' },
};

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

/** A correct report: the five lines of the real `brain status`, then the next step in a sentence. */
function report(root: string): Promise<{ calls: Call[]; last: string }> {
  const status = brainStatus(root);
  expect(status.exitCode).toBe(0);
  const last = `${status.out.trim()}\n\nThe repo is set up for brain and holds no work yet. To start, run interview-me and tell it what you want to build.`;
  return Promise.resolve({ calls: [statusCall], last });
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-fresh-repo-resume-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("setup/fresh-repo-resume, the case files", () => {
  test("the prompt asks where the work stands and names no brain word, within three runs per arm", async () => {
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
    // Bash runs brain status; Write and Edit stay, so the AGENTS.md grader also judges the session.
    expect(data.allowed_tools).toEqual(["Read", "Glob", "Grep", "Skill", "Bash", "Write", "Edit"]);
    const body = text.slice(text.indexOf("\n---", 3) + 4);
    expect(body.trim()).toBe("Where does the work in this repo stand, and what is the next step?");
    // The state must come from the plugin, so the prompt names no command, file or skill.
    expect(body).not.toMatch(/brain|status|setup|interview|idea|spec|STATUS|AGENTS/iu);
  });

  test("the one judge reads the last reply, beside computed graders on the same run", async () => {
    const graders = await readGraders();
    const judges = graders.filter((each) => each.type === "llm");
    expect(judges.map((each) => [each.name, each.focus])).toEqual([
      ["invents-no-work", "last_message"],
    ]);
    expect(graders.filter((each) => each.type !== "llm").length).toBeGreaterThan(judges.length);
  });

  test("no grader reads a tool call, so the case holds whether or not the session-start hook runs", async () => {
    // With the hook, the state is in the session before the first word and no call is needed;
    // without it, the session runs brain status. Only the reply and AGENTS.md are graded.
    const graders = await readGraders();
    expect(
      graders.filter((each) => each.type === "tool_used" || each.type === "tool_order"),
    ).toEqual([]);
  });
});

describe("setup/fresh-repo-resume, the scaffold", () => {
  test("is a committed repo with the repo's own AGENTS.md and the files setup-brain writes", async () => {
    const root = await scaffold("fresh");
    expect(await filesIn(root)).toEqual([
      "AGENTS.md",
      "docs/STATUS.md",
      "docs/agents/capabilities.md",
      "docs/agents/domain.md",
      "docs/agents/workspace.md",
      "package.json",
    ]);
    const clean = Bun.spawnSync(["git", "status", "--porcelain"], { cwd: root });
    expect(clean.exitCode).toBe(0);
    expect(clean.stdout.toString()).toBe("");
  });

  test("the setup writer, run again on the scaffold, finds every file in place", async () => {
    const root = await scaffold("writer");
    const changes = await writeSetup({
      brain: repo,
      root,
      layout: "single",
      dryRun: true,
      codexHome: null,
    });
    expect(changes.map((change) => `${change.action} ${change.path}`)).toEqual([
      "unchanged docs/agents/domain.md",
      "unchanged docs/agents/workspace.md",
      "unchanged docs/STATUS.md",
    ]);
  });

  test("the capabilities script, run again on the scaffold, keeps capabilities.md and proposes no row", async () => {
    const root = await scaffold("capabilities");
    const before = await Bun.file(`${root}/docs/agents/capabilities.md`).text();
    const result = await writeCapabilities({ brain: repo, root, skills: [], dryRun: true });
    expect(result.changes.map((change) => `${change.action} ${change.path}`)).toEqual([
      "unchanged docs/agents/capabilities.md",
    ]);
    expect(result.unnamed).toEqual([]);
    expect(result.text).toBe(before);
  });

  test("brain status reports no active work and interview-me as the next step, with nothing red", async () => {
    const root = await scaffold("status");
    const status = brainStatus(root);
    expect(status.exitCode).toBe(0);
    const lines = status.out.trim().split("\n");
    expect(lines).toHaveLength(5);
    expect(lines[0]).toBe("Stage: no active work");
    expect(lines[2]).toStartWith("Next step: ");
    expect(lines[2]).toContain("interview-me");
    expect(lines[3]).toBe("Red: none");
    expect(lines[4]).toBe("Waiting on the user: none");
  });

  test("the session-start hook gives the same five lines, so a session with the hook has the words too", async () => {
    const root = await scaffold("hook");
    const res = Bun.spawnSync(["bun", `${repo}/scripts/hooks/session-start.ts`], {
      cwd: root,
      env: {
        ...process.env,
        CLAUDE_PLUGIN_ROOT: repo,
        CLAUDE_PROJECT_DIR: root,
        GIT_CEILING_DIRECTORIES: work,
      },
    });
    expect(res.exitCode).toBe(0);
    const out = JSON.parse(res.stdout.toString()) as {
      hookSpecificOutput: { additionalContext: string };
    };
    expect(out.hookSpecificOutput.additionalContext).toContain(brainStatus(root).out.trim());
  });
});

describe("setup/fresh-repo-resume, the computed graders on played runs", () => {
  test("a session that reports brain status's lines passes every computed grader", async () => {
    const run = await play("good", report);
    expect(run.created).toEqual([]);
    expect(await failing(run)).toEqual([]);
  });

  test("a session that writes brain's block into the repo's AGENTS.md fails only the AGENTS.md grader", async () => {
    const run = await play("agents-md", async (root) => {
      const block = await Bun.file(`${repo}/plain-talk/AGENTS-block.md`).text();
      const agents = await Bun.file(`${root}/AGENTS.md`).text();
      await Bun.write(`${root}/AGENTS.md`, replaceBlock(agents, block, "AGENTS.md"));
      return report(root);
    });
    expect(await failing(run)).toEqual(["agents-md"]);
  });

  test("a session that reports work that does not exist fails the stage grader", async () => {
    const run = await play("invented", () =>
      Promise.resolve({
        calls: [],
        last: "Stage: define (IDEA-001: a probe CLI). Next step: IDEA-001#01, then interview-me's next row.",
      }),
    );
    expect(await failing(run)).toEqual(["stage"]);
  });

  test("a session that gives no next step fails the next-step grader", async () => {
    const run = await play("no-next-step", () =>
      Promise.resolve({ calls: [], last: "There is no active work in this repo yet." }),
    );
    expect(await failing(run)).toEqual(["next-step"]);
  });
});
