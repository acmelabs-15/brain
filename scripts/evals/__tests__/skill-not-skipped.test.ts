/**
 * The dry check of the eval case `lifecycle/skill-not-skipped`, with no model run. It builds the
 * case's scaffold, a small Next.js app in a brain repo, and proves that the task is a one-line
 * change whose right line depends on the Next.js version. Then it plays a correct run and faulty
 * ones and applies the case's computed graders to each, as `claude plugin eval` 2.1.312 reads them.
 *
 * The case measures Skill Rule 1 of using-brain (Decisions row "Anti-rationalization rules"): a
 * small task that matches a skill whose description does not obviously fit still loads the skill,
 * before the change.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { readFrontmatter } from "../../workspace/schema";

// A played run starts bash and git processes, which take seconds on a loaded machine
// (parallel builds run several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const repo = `${import.meta.dir}/../../..`;
const caseDir = `${repo}/evals/lifecycle/skill-not-skipped`;
const config = "next.config.ts";
const docsUrl = "https://nextjs.org/docs/app/api-reference/config/next-config-js/typedRoutes";
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

/** The text a regex grader reads; null when its file does not exist, which fails the grader. */
async function targetText(target: unknown, run: Run): Promise<string | null> {
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
    const count = run.calls.filter((call) =>
      hits(call, String(each.tool), String(each.input_match ?? "")),
    ).length;
    return count >= Number(each.min ?? 1) && count <= Number(each.max ?? Infinity);
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

const skillCall = (skill: string): Call => ({ tool: "Skill", input: { skill } });
const readCall = (path: string): Call => ({
  tool: "Read",
  input: { file_path: `/tmp/eval/${path}` },
});

/** Add `line` to the config's options on disk, and return the Edit call that made the change. */
async function editConfig(root: string, line: string): Promise<Call> {
  const before = await Bun.file(`${root}/${config}`).text();
  const anchor = "  reactStrictMode: true,\n";
  expect(before).toContain(anchor);
  const after = before.replace(anchor, `${anchor}${line}\n`);
  await Bun.write(`${root}/${config}`, after);
  return {
    tool: "Edit",
    input: { file_path: `/tmp/eval/${config}`, old_string: anchor, new_string: `${anchor}${line}` },
  };
}

/** The reply of a correct run: the version it found, the line it added, and the page it used. */
const goodReply = `Typed routes are on. The app uses Next.js 15.5.4, where \`typedRoutes\` is a stable top-level option in \`next.config.ts\`; it no longer sits under \`experimental\`.

Source: ${docsUrl}`;

/** The reply of a run that could not reach the docs and says so. */
const unverifiedReply = `Typed routes are on: I added \`typedRoutes: true\` to \`next.config.ts\` for Next.js 15.5.4.

UNVERIFIED: I could not reach the Next.js docs from here, so this line is from memory. Check it against the docs for 15.5.`;

/** The reply of a run that names no source and flags nothing. */
const bareReply = "Done. I added `typedRoutes: true` to `next.config.ts`.";

/** Play a run: scaffold, then `act` in the workspace, which returns its calls and its reply. */
async function play(
  name: string,
  act: (root: string) => Promise<{ calls: Call[]; last: string }>,
): Promise<Run> {
  const root = await scaffold(name);
  const { calls, last } = await act(root);
  return { root, calls, last };
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-skill-not-skipped-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("lifecycle/skill-not-skipped, the case files", () => {
  test("the prompt asks a one-line change, in words that do not point at the skill", async () => {
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
    expect(body).toContain(config);
    expect(body).toMatch(/one-line change/u);
    // The skill's description speaks of docs, sources and correct versions; the prompt names
    // none of them, so only Skill Rule 1 makes the skill load.
    expect(body).not.toMatch(
      /skill|source|doc|official|verif|correct|current|version|latest|deprecat|experimental|brain/iu,
    );
  });

  test("every grader is computed, and the skill must load before the edit", async () => {
    const graders = await readGraders();
    expect(graders.filter((each) => each.type === "llm")).toEqual([]);
    const fired = graders.find((each) => each.name === "skill-fired");
    expect([fired?.type, fired?.tool]).toEqual(["tool_used", "Skill"]);
    expect(String(fired?.input_match)).toContain("source-driven-development");
    const order = graders.find((each) => each.name === "skill-before-edit");
    expect(order?.type).toBe("tool_order");
    expect(sideOf(order?.before)).toEqual({
      tool: "Skill",
      inputMatch: String(fired?.input_match),
    });
    expect(sideOf(order?.after).tool).toBe("Edit");
  });
});

describe("lifecycle/skill-not-skipped, the scaffold", () => {
  test("is a brain repo with setup-brain's workspace.md and a small Next.js app", async () => {
    const root = await scaffold("fresh");
    const template = await Bun.file(`${repo}/skills/setup-brain/workspace.md`).text();
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(template);
    expect(Bun.spawnSync(["git", "rev-parse", "--git-dir"], { cwd: root }).exitCode).toBe(0);
    expect(await filesIn(root)).toEqual([
      "README.md",
      "app/layout.tsx",
      "app/page.tsx",
      "app/products/page.tsx",
      "docs/agents/workspace.md",
      config,
      "package.json",
      "tsconfig.json",
    ]);
  });

  test("pins Next.js 15.5, where typedRoutes left experimental, and the config has no typed routes yet", async () => {
    const root = await scaffold("version");
    const pkg = (await Bun.file(`${root}/package.json`).json()) as {
      dependencies: Record<string, string>;
    };
    // Next.js 15.5 made typedRoutes a stable top-level option; earlier releases read it under
    // experimental. So the right line depends on the pinned version and its docs.
    // Source: https://nextjs.org/blog/next-15-5, checked 2026-10-29.
    expect(pkg.dependencies.next).toBe("15.5.4");
    const text = await Bun.file(`${root}/${config}`).text();
    expect(text).not.toContain("typedRoutes");
    expect(text).not.toContain("experimental");
  });

  test("the app has a link the type check would catch once typed routes are on", async () => {
    const root = await scaffold("links");
    const page = await Bun.file(`${root}/app/page.tsx`).text();
    expect(page).toContain('href="/products"');
    expect(await Bun.file(`${root}/app/products/page.tsx`).exists()).toBe(true);
  });
});

describe("lifecycle/skill-not-skipped, the computed graders on played runs", () => {
  test("a run that loads source-driven-development, reads the version, edits, then cites the page passes", async () => {
    const run = await play("good", async (root) => ({
      calls: [
        skillCall("brain:source-driven-development"),
        readCall("package.json"),
        readCall(config),
        await editConfig(root, "  typedRoutes: true,"),
      ],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual([]);
  });

  test("a run that loads using-brain first, then the skill, passes too", async () => {
    const run = await play("router-first", async (root) => ({
      calls: [
        skillCall("brain:using-brain"),
        skillCall("source-driven-development"),
        readCall("package.json"),
        await editConfig(root, "  typedRoutes: true,"),
      ],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual([]);
  });

  test("a run with no reach to the docs that flags its line as unverified passes", async () => {
    const run = await play("unverified", async (root) => ({
      calls: [
        skillCall("brain:source-driven-development"),
        readCall("package.json"),
        await editConfig(root, "  typedRoutes: true,"),
      ],
      last: unverifiedReply,
    }));
    expect(await failing(run)).toEqual([]);
  });

  test("a run that skips the skill as too small fails the skill graders only", async () => {
    const run = await play("skipped", async (root) => ({
      calls: [readCall(config), await editConfig(root, "  typedRoutes: true,")],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual(["skill-before-edit", "skill-fired"]);
  });

  test("a run that edits first and loads the skill after fails only the order grader", async () => {
    const run = await play("late", async (root) => ({
      calls: [
        readCall(config),
        await editConfig(root, "  typedRoutes: true,"),
        skillCall("brain:source-driven-development"),
      ],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual(["skill-before-edit"]);
  });

  test("a run that loads another skill in its place fails the skill graders", async () => {
    const run = await play("other-skill", async (root) => ({
      calls: [
        skillCall("brain:incremental-implementation"),
        await editConfig(root, "  typedRoutes: true,"),
      ],
      last: goodReply,
    }));
    expect(await failing(run)).toEqual(["skill-before-edit", "skill-fired"]);
  });

  test("a run that loads the skill but makes no change fails the edit graders", async () => {
    const run = await play("no-change", () =>
      Promise.resolve({
        calls: [skillCall("brain:source-driven-development"), readCall("package.json")],
        last: goodReply,
      }),
    );
    expect(await failing(run)).toEqual(["skill-before-edit", "typed-routes-on"]);
  });

  test("a run that names no source and flags nothing fails only the source grader", async () => {
    const run = await play("bare", async (root) => ({
      calls: [
        skillCall("brain:source-driven-development"),
        await editConfig(root, "  typedRoutes: true,"),
      ],
      last: bareReply,
    }));
    expect(await failing(run)).toEqual(["source-cited"]);
  });

  test("the option under experimental, the pre-15.5 place, still counts as the change", async () => {
    // Whether a run finds the current place depends on the docs the sandbox lets it reach,
    // so the case grades that the skill loaded and the change landed, not which place it chose.
    const run = await play("experimental", async (root) => ({
      calls: [
        skillCall("brain:source-driven-development"),
        await editConfig(root, "  experimental: { typedRoutes: true },"),
      ],
      last: unverifiedReply,
    }));
    expect(await failing(run)).toEqual([]);
  });
});
