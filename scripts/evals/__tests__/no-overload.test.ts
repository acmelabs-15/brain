/**
 * The dry check of the eval case `lifecycle/no-overload`, with no model run. It builds the case's
 * scaffold, a brain repo with one small function, and proves that the question is answered by
 * reading that function. Then it plays a correct run and faulty ones and applies the case's
 * computed graders to each, as `claude plugin eval` 2.1.312 reads them.
 *
 * The case is the counterweight to `lifecycle/skill-not-skipped` (Decisions row
 * "Anti-rationalization rules"): Skill Rule 1's 1% rule must not load a lifecycle skill for a
 * plain question that no skill matches. A lifecycle skill is one that using-brain's Quick
 * Reference puts in one of the six stages; the grader names exactly those.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { quickReference } from "../../lifecycle/router";
import { readFrontmatter } from "../../workspace/schema";

// A played run starts bash and git processes, which take seconds on a loaded machine
// (parallel builds run several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const repo = `${import.meta.dir}/../../..`;
const caseDir = `${repo}/evals/lifecycle/no-overload`;
/** The six stages of the lifecycle, as GLOSSARY.md's Stage entry names them. */
const stages = new Set(["Define", "Plan", "Build", "Verify", "Review", "Ship"]);
let work: string;

type Grader = Record<string, unknown> & { name: string; type: string };

/** One tool call of a run: the tool's name and its input. */
type Call = { tool: string; input: Record<string, unknown> };

/** What a run leaves: its workspace, its tool calls in order, and its last reply. */
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
  if (each.type === "regex" && (each.target === "last_message" || each.target === undefined)) {
    const found = new RegExp(String(each.pattern), String(each.flags ?? "")).test(run.last);
    const match = each.match ?? "contains";
    if (match === "contains" || match === "not_contains") {
      return found === (match === "contains");
    }
  }
  throw new Error(`${each.name}: the dry check does not model this ${each.type} grader`);
}

/** The name of each computed grader that fails the run. */
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

/** The skills using-brain's Quick Reference puts in a lifecycle stage, and those it puts elsewhere. */
async function routerSkills(): Promise<{ lifecycle: string[]; other: string[] }> {
  const rows = quickReference(await Bun.file(`${repo}/skills/using-brain/SKILL.md`).text());
  const pick = (inStage: boolean) =>
    [
      ...new Set(rows.filter((row) => stages.has(row.stage) === inStage).map((row) => row.skill)),
    ].toSorted();
  return { lifecycle: pick(true), other: pick(false) };
}

/** The skill names in the grader's alternation, `(?:a|b|c)"`. */
function namesIn(pattern: string): string[] {
  const group = /\(\?:(?<names>[a-z][a-z0-9|-]*)\)"/u.exec(pattern)?.groups?.names ?? "";
  return group.split("|").toSorted();
}

const skillCall = (skill: string): Call => ({ tool: "Skill", input: { skill } });
const readCart: Call = { tool: "Read", input: { file_path: "/tmp/eval/src/cart.ts" } };

/** The reply of a correct run, from the code. */
const goodReply =
  "`cartTotal` returns the cart's total in cents: the sum of each line's `priceCents` times its `quantity`. For an empty cart it returns `null`, not 0, so its type is `number | null`.";

/** The reply of a run that guessed instead of reading. */
const guessedReply = "`cartTotal` returns the cart's total in cents, or 0 for an empty cart.";

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-no-overload-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("lifecycle/no-overload, the case files", () => {
  test("the prompt is a plain question that names no skill, and the session can load a skill", async () => {
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
    // Skill is granted, so a skill the rule over-reaches for can load and the grader can see it.
    expect(data.allowed_tools).toEqual(["Read", "Glob", "Grep", "Skill"]);
    const body = text.slice(text.indexOf("\n---", 3) + 4).trim();
    expect(body).toBe("What does `cartTotal` in `src/cart.ts` return?");
  });

  test("the skill grader names exactly the skills using-brain puts in a lifecycle stage", async () => {
    const graders = await readGraders();
    const none = graders.find((each) => each.name === "no-lifecycle-skill");
    expect([none?.type, none?.tool, none?.min, none?.max]).toEqual(["tool_used", "Skill", 0, 0]);
    const { lifecycle } = await routerSkills();
    expect(lifecycle.length).toBeGreaterThan(0);
    expect(namesIn(String(none?.input_match))).toEqual(lifecycle);
  });

  test("the skills outside the six stages are the router's setup, status and any-stage skills", async () => {
    // A known list, so a skill moved out of a lifecycle stage shows up here as a choice.
    const { other } = await routerSkills();
    expect(other).toEqual([
      "ask-user-question",
      "domain-modeling",
      "handoff",
      "setup-brain",
      "status",
      "wait-what",
      "writing-for-agents",
    ]);
  });

  test("the answer grader runs in both arms: any session answers the question", async () => {
    const graders = await readGraders();
    const answers = graders.find((each) => each.name === "answers");
    expect([answers?.type, answers?.target, answers?.arm]).toEqual([
      "regex",
      "last_message",
      "both",
    ]);
  });
});

describe("lifecycle/no-overload, the scaffold", () => {
  test("is a brain repo with setup-brain's workspace.md and one small module", async () => {
    const root = await scaffold("fresh");
    const template = await Bun.file(`${repo}/skills/setup-brain/workspace.md`).text();
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(template);
    expect(Bun.spawnSync(["git", "rev-parse", "--git-dir"], { cwd: root }).exitCode).toBe(0);
    expect(await filesIn(root)).toEqual([
      "README.md",
      "docs/agents/workspace.md",
      "package.json",
      "src/cart.ts",
    ]);
  });

  test("cartTotal returns null for an empty cart, which only a read of the code tells", async () => {
    const root = await scaffold("cart");
    const text = await Bun.file(`${root}/src/cart.ts`).text();
    expect(text).toContain("export function cartTotal(lines: Line[]): number | null {");
    expect(text).toContain("return null;");
    // No comment gives the answer away: the run reads the body.
    expect(text).not.toMatch(/\/\/|\/\*/u);
  });
});

describe("lifecycle/no-overload, the computed graders on played runs", () => {
  test("a run that reads the function and answers passes", async () => {
    const root = await scaffold("good");
    expect(await failing({ root, calls: [readCart], last: goodReply })).toEqual([]);
  });

  test("a run that loads only a skill outside the six stages, such as the router, passes", async () => {
    const root = await scaffold("outside");
    const { other } = await routerSkills();
    for (const skill of ["using-brain", ...other]) {
      const run = { root, calls: [skillCall(`brain:${skill}`), readCart], last: goodReply };
      expect([skill, await failing(run)]).toEqual([skill, []]);
    }
  });

  test("a run that loads any lifecycle skill, with or without the prefix, fails only the skill grader", async () => {
    const root = await scaffold("overload");
    const { lifecycle } = await routerSkills();
    for (const skill of lifecycle) {
      for (const name of [skill, `brain:${skill}`]) {
        const run = { root, calls: [skillCall(name), readCart], last: goodReply };
        expect([name, await failing(run)]).toEqual([name, ["no-lifecycle-skill"]]);
      }
    }
  });

  test("a skill whose name only starts like a lifecycle skill's does not count", async () => {
    const root = await scaffold("prefix");
    const run = {
      root,
      calls: [skillCall("brain:test-driven-development-extra")],
      last: goodReply,
    };
    expect(await failing(run)).toEqual([]);
  });

  test("a run that guesses instead of reading fails only the answer grader", async () => {
    const root = await scaffold("guessed");
    expect(await failing({ root, calls: [], last: guessedReply })).toEqual(["answers"]);
  });
});
