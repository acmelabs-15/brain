/**
 * The dry check of the eval case `setup/migrate-08`, with no model run. It builds the case's
 * scaffold, a repo on the brain 0.8 layout, plays the whole setup-brain flow with the real
 * scripts (the migrate mode, `brain check`, the install files, capabilities.md and the overlap
 * report), and applies the case's graders to it, as `claude plugin eval` 2.1.312 reads them. It
 * plays faulty runs too, each failing the graders it should. No grader can run `brain check`, so
 * the test runs it on the played run: the migrated repo passes it.
 *
 * The CI run of 2.1.314 (2026-10-30) was right, and failed only `check-ran`: one Bash call ran
 * the migrate and then `brain check`. The fixture `fixtures/migrate-08.trace.jsonl` keeps that
 * trace's Bash calls, byte for byte, and the test grades it again.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";

import { readFrontmatter } from "../../workspace/schema";

// A played run starts bash, git and many bun processes; a loaded machine needs more than 5 s.
setDefaultTimeout(120_000);

const repo = `${import.meta.dir}/../../..`;
const caseDir = `${repo}/evals/setup/migrate-08`;
const scripts = { write: "setup/write.ts", capabilities: "setup/capabilities.ts" };
let work: string;

type Grader = Record<string, unknown> & { name: string; type: string };

/** One tool call of a run: the tool's name and its input. */
type Call = { tool: string; input: Record<string, unknown> };

/**
 * What a run leaves: its workspace, the files it created and its tool calls. A saved run is a
 * trace a real run wrote; it keeps that trace's text.
 */
type Run = { root: string; created: string[]; calls: Call[]; saved?: string };

/** A tool call a grader names: a tool, and a pattern on its JSON input. */
type CallMatch = { tool?: unknown; input_match?: unknown };

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

/** The calls that `match` names: its tool, and its pattern on the call's JSON input. */
function matching(run: Run, match: CallMatch): number[] {
  // The runner tests input_match against the call's JSON input, with no flags.
  const pattern = new RegExp(String(match.input_match ?? ""), "u");
  return run.calls.flatMap((call, index) =>
    call.tool === match.tool && pattern.test(JSON.stringify(call.input)) ? [index] : [],
  );
}

/**
 * The run's trace as `claude plugin eval` 2.1.314 writes it: one content block per line, each
 * tool call on a line of its own and its result after it. A saved run gives its own text.
 */
function trace(run: Run): string {
  if (run.saved !== undefined) {
    return run.saved;
  }
  return run.calls
    .flatMap((call, index) => [
      {
        type: "assistant",
        message: {
          id: `msg_${index}`,
          role: "assistant",
          content: [{ type: "tool_use", id: `toolu_${index}`, name: call.tool, input: call.input }],
        },
        parent_tool_use_id: null,
      },
      {
        type: "user",
        message: {
          role: "user",
          content: [{ tool_use_id: `toolu_${index}`, type: "tool_result", content: "exit 0" }],
        },
        parent_tool_use_id: null,
      },
    ])
    .map((line) => JSON.stringify(line))
    .join("\n");
}

/** The text a regex grader reads; null when its file does not exist, which fails the grader. */
async function targetText(target: unknown, run: Run): Promise<string | null> {
  if (target === "files") {
    return run.created.join("\n");
  }
  if (target === "trace") {
    return trace(run);
  }
  const file = target as { source?: unknown; path?: unknown };
  if (file?.source === "file" && typeof file.path === "string") {
    const found = Bun.file(`${run.root}/${file.path}`);
    return (await found.exists()) ? await found.text() : null;
  }
  throw new Error(`the dry check does not read the target ${JSON.stringify(target)}`);
}

/** Apply one grader to a run, with the pass rules of `claude plugin eval` 2.1.312. */
async function passes(each: Grader, run: Run): Promise<boolean> {
  if (each.type === "tool_used") {
    const count = matching(run, each as CallMatch).length;
    return count >= Number(each.min ?? 1) && count <= Number(each.max ?? Infinity);
  }
  if (each.type === "tool_order") {
    const [before] = matching(run, each.before as CallMatch);
    const [after] = matching(run, each.after as CallMatch);
    return before !== undefined && after !== undefined && before < after;
  }
  if (each.type === "file_exists") {
    // Only files created during the run count.
    const path = String(each.path);
    if (/[*?]/u.test(path)) {
      throw new Error(`${each.name}: the dry check reads a literal path only`);
    }
    return run.created.includes(path) === (each.exists ?? true);
  }
  if (each.type === "regex") {
    const text = await targetText(each.target ?? "last_message", run);
    if (text === null) {
      return false;
    }
    const found = new RegExp(String(each.pattern), String(each.flags ?? "")).test(text);
    return found === ((each.match ?? "contains") === "contains");
  }
  throw new Error(`${each.name}: the dry check does not model this ${each.type} grader`);
}

/** The name of each grader that fails the run. */
async function failing(run: Run): Promise<string[]> {
  const failed: string[] = [];
  for (const each of await readGraders()) {
    if (!(await passes(each, run))) {
      failed.push(each.name);
    }
  }
  return failed;
}

/** The fixture: the Bash calls of the CI trace of 2026-10-30, the lines the call graders read. */
const savedTrace = `${import.meta.dir}/fixtures/migrate-08.trace.jsonl`;

/** Whether a trace alone settles a grader: a regex on the trace, or the order or count of calls. */
function readsTrace(each: Grader): boolean {
  return (
    (each.type === "regex" && each.target === "trace") ||
    each.type === "tool_order" ||
    each.type === "tool_used"
  );
}

/** A run from a saved trace: as the runner counts them, every tool_use block is a call. */
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
  return { root: "", created: [], calls, saved: lines.join("\n") };
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

/** Every file in a folder outside `.git`, relative to it. */
async function filesIn(root: string): Promise<string[]> {
  const found: string[] = [];
  for await (const path of new Bun.Glob("**/*").scan({ cwd: root })) {
    found.push(path);
  }
  return found.toSorted();
}

/** The environment the runner gives a case: a home with no git config. */
function caseEnv(): Record<string, string> {
  return {
    PATH: process.env.PATH ?? "",
    HOME: `${work}/home`,
    TMPDIR: tmpdir(),
    TERM: "dumb",
    GIT_CEILING_DIRECTORIES: work,
  };
}

/** Build the case's scaffold in a new folder, with the environment the runner gives it. */
async function scaffold(name: string): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root);
  const res = Bun.spawnSync(["bash", `${caseDir}/scaffold.sh`], { cwd: root, env: caseEnv() });
  expect(res.stderr.toString()).toBe("");
  expect(res.exitCode).toBe(0);
  return root;
}

/** Run a brain script in `root` with `args`; return its Bash call as a skill spells it. */
function bun(root: string, script: string, ...args: string[]): Call {
  const res = Bun.spawnSync(["bun", `${repo}/scripts/${script}`, ...args], {
    cwd: root,
    env: caseEnv(),
  });
  expect(res.stderr.toString()).toBe("");
  expect(res.exitCode).toBe(0);
  // Claude Code puts the plugin's path in place of ${CLAUDE_PLUGIN_ROOT} when the skill loads.
  const quoted = args.map((arg) => (arg === "" || arg.includes(" ") ? `"${arg}"` : arg));
  return {
    tool: "Bash",
    input: { command: [`bun "/plugins/brain/scripts/${script}"`, ...quoted].join(" ") },
  };
}

/** The user's answers in the case's prompt, as the migrate mode's flags. */
const answers = {
  planSpec: "spec/SPEC-billing.md",
  ideas: "docs/intent/billing.md,docs/intent/usage-alerts.md",
  trackerFiles: "remove",
  adrFolder: "move",
};

function migrateFlags(given: typeof answers, renameGlossary = true): string[] {
  return [
    "--root",
    ".",
    "--migrate",
    "--plan-spec",
    given.planSpec,
    "--ideas",
    given.ideas,
    "--tracker-files",
    given.trackerFiles,
    "--adr-folder",
    given.adrFolder,
    ...(renameGlossary ? ["--rename-glossary"] : []),
  ];
}

const bunCheck: Call = { tool: "Bash", input: { command: "bun --version" } };

type Flow = {
  given?: typeof answers;
  renameGlossary?: boolean;
  dryRun?: boolean;
  migrate?: boolean;
  check?: boolean;
  /**
   * One Bash call runs the migrate and `brain check`, in this order inside its command. The
   * scripts themselves always run migrate first; only the command the grader reads changes.
   */
  oneCall?: "migrate-then-check" | "check-then-migrate";
  /** The heading of each `AGENTS.md` section the run removes after the overlap report. */
  remove?: string[];
};

/** The setup-brain flow on a 0.8 repo, as the skill's steps run it, with the parts `flow` sets. */
function setupFlow(root: string, flow: Flow = {}): Call[] {
  const given = flow.given ?? answers;
  const flags = migrateFlags(given, flow.renameGlossary ?? true);
  const calls = [bunCheck];
  if (flow.oneCall === undefined) {
    if (flow.migrate ?? true) {
      if (flow.dryRun ?? true) {
        calls.push(bun(root, scripts.write, ...flags, "--dry-run"));
      }
      calls.push(bun(root, scripts.write, ...flags));
    }
    if (flow.check ?? true) {
      calls.push(bun(root, "brain.ts", "check"));
    }
  } else {
    calls.push(bun(root, scripts.write, ...flags, "--dry-run"));
    const migrate = String(bun(root, scripts.write, ...flags).input.command);
    const check = String(bun(root, "brain.ts", "check").input.command);
    const parts = flow.oneCall === "migrate-then-check" ? [migrate, check] : [check, migrate];
    calls.push({ tool: "Bash", input: { command: parts.join("; echo ---; ") } });
  }
  const install = ["--root", ".", "--layout", "single", "--no-codex"];
  calls.push(
    bun(root, scripts.write, ...install, "--dry-run"),
    bun(root, scripts.write, ...install),
  );
  const skills = ["--root", ".", "--skills", ""];
  calls.push(
    bun(root, scripts.capabilities, ...skills, "--dry-run"),
    bun(root, scripts.capabilities, ...skills),
    bun(root, "setup/overlap.ts", "--root", "."),
  );
  for (const heading of flow.remove ?? []) {
    calls.push(bun(root, "setup/overlap.ts", "--root", ".", "--remove", heading));
  }
  return calls;
}

/** Play a run: scaffold, then the flow, which returns the calls it made. */
async function play(name: string, flow: Flow = {}): Promise<Run> {
  const root = await scaffold(name);
  const before = new Set(await filesIn(root));
  const calls = setupFlow(root, flow);
  const after = await filesIn(root);
  return { root, created: after.filter((path) => !before.has(path)), calls };
}

const exists = (full: string) =>
  stat(full).then(
    () => true,
    () => false,
  );

function git(root: string, ...args: string[]): string {
  // Only the end is trimmed: a porcelain status line can open with a space.
  return Bun.spawnSync(["git", ...args], { cwd: root, env: caseEnv() })
    .stdout.toString()
    .trimEnd();
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-migrate-08-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("setup/migrate-08, the case files", () => {
  test("every grader is computed, so a run is graded the same way every time", async () => {
    const graders = await readGraders();
    expect(graders.filter((each) => each.type === "llm")).toEqual([]);
  });

  test("the prompt answers every question of the migration and the rest of the flow", async () => {
    const prompt = await Bun.file(`${caseDir}/prompt.md`).text();
    for (const answer of [
      "spec/SPEC-billing.md",
      "Both intent docs",
      "Remove the tracker files",
      "Move CONTEXT.md to GLOSSARY.md",
      "Move the ADR folder doc/adr/",
      "Write capabilities.md as proposed",
      "Keep AGENTS.md as it is",
      "single-context",
    ]) {
      expect(prompt).toContain(answer);
    }
  });
});

describe("setup/migrate-08, a correct run", () => {
  let run: Run;

  beforeAll(async () => {
    run = await play("good");
  });

  test("passes every grader", async () => {
    expect(await failing(run)).toEqual([]);
  });

  test("the migrated repo passes brain check", () => {
    const check = Bun.spawnSync(["bun", `${repo}/scripts/brain.ts`, "check"], {
      cwd: run.root,
      env: caseEnv(),
    });
    expect(check.stdout.toString()).toBe(
      "2 migrated decisions have no kind: DEC-001, DEC-002\nno finding in 11 workspace files\n",
    );
    expect(check.exitCode).toBe(0);
  });

  test("the migration is one commit, and nothing of the 0.8 layout is left but kept files", () => {
    expect(git(run.root, "rev-list", "--count", "HEAD")).toBe("2");
    const moved = git(run.root, "show", "-M", "--name-status", "--format=", "HEAD").split("\n");
    expect(moved.filter((line) => line.startsWith("D")).toSorted()).toEqual([
      "D\tdocs/agents/issue-tracker.md",
      "D\tdocs/agents/triage-labels.md",
    ]);
    expect(moved.filter((line) => /^[RD]/u.test(line) === false).toSorted()).toEqual([
      "A\tdocs/agents/workspace.md",
      "M\tdocs/decisions/DEC-001-bill-by-calendar-month.md",
      "M\tdocs/research/RES-001-payment-provider-retries.md",
    ]);
  });

  test("no 0.8 file or folder is left: each emptied folder is gone", async () => {
    for (const old of ["CONTEXT.md", "spec", "tasks", "docs/intent", "doc"]) {
      expect(await exists(`${run.root}/${old}`)).toBe(false);
    }
  });

  test("the install files that follow the migration stay uncommitted, for the user to commit", () => {
    expect(git(run.root, "status", "--porcelain").split("\n").toSorted()).toEqual([
      " M docs/agents/domain.md",
      "?? docs/STATUS.md",
      "?? docs/agents/capabilities.md",
    ]);
  });
});

describe("setup/migrate-08, the graders on faulty runs", () => {
  test("a run with no dry run fails only the dry-run grader", async () => {
    expect(await failing(await play("no-dry-run", { dryRun: false }))).toEqual(["dry-run-first"]);
  });

  test("a run that puts the plan beside the accounts spec fails only the plan grader", async () => {
    const run = await play("wrong-plan", {
      given: { ...answers, planSpec: "spec/SPEC-accounts.md" },
    });
    expect(await failing(run)).toEqual(["plan-with-spec"]);
  });

  test("a run that keeps the ADR folder fails only the ADR-folder grader", async () => {
    const run = await play("adr-kept", { given: { ...answers, adrFolder: "keep" } });
    expect(await failing(run)).toEqual(["adr-folder"]);
  });

  test("a run that keeps CONTEXT.md fails only the glossary grader", async () => {
    expect(await failing(await play("glossary-kept", { renameGlossary: false }))).toEqual([
      "glossary",
    ]);
  });

  test("a run that skips brain check fails only the check grader", async () => {
    expect(await failing(await play("no-check", { check: false }))).toEqual(["check-ran"]);
  });

  test("a run that removes an AGENTS.md section against the user's report-only fails only that grader", async () => {
    const run = await play("removed", { remove: ["Task end"] });
    expect(await failing(run)).toEqual(["agents-md-kept"]);
  });

  test("a run that never migrates fails every migration grader, and writes no workspace.md", async () => {
    const run = await play("no-migration", { migrate: false, check: false });
    expect(await failing(run)).toEqual([
      "adr-folder",
      "adr-in-place",
      "check-ran",
      "dry-run-first",
      "glossary",
      "ideas",
      "plan-with-spec",
      "workspace-layout",
    ]);
    expect(run.created).not.toContain("docs/agents/workspace.md");
  });
});

describe("setup/migrate-08, the migrate and brain check in one Bash call", () => {
  test("a run that runs the migrate and then brain check in one call passes every grader", async () => {
    const run = await play("one-call", { oneCall: "migrate-then-check" });
    expect(await failing(run)).toEqual([]);
  });

  test("a run that runs brain check before the migrate in one call fails only the check grader", async () => {
    const run = await play("one-call-check-first", { oneCall: "check-then-migrate" });
    expect(await failing(run)).toEqual(["check-ran"]);
  });
});

describe("setup/migrate-08, the graders on the CI trace of 2026-10-30", () => {
  test("the fixture holds whole trace lines and no key", async () => {
    const text = await Bun.file(savedTrace).text();
    for (const line of text.trimEnd().split("\n")) {
      expect(JSON.stringify(JSON.parse(line))).toBe(line);
    }
    expect(text).not.toMatch(/sk-ant-|oat01|api[_-]?key/iu);
  });

  test("a trace alone settles the check, the dry run and the overlap report", async () => {
    const graders = await readGraders();
    expect(graders.filter(readsTrace).map((each) => each.name)).toEqual([
      "check-ran",
      "dry-run-first",
      "overlap-ran",
    ]);
  });

  test("the CI run, which ran the migrate and then brain check in one Bash call, passes every grader the trace settles", async () => {
    const run = savedRun(await Bun.file(savedTrace).text());
    expect(await failingSaved(run)).toEqual([]);
  });

  test("the CI run with brain check moved before the migrate inside that call fails only the check grader", async () => {
    const text = await Bun.file(savedTrace).text();
    const lines = text.trimEnd().split("\n");
    const index = lines.findIndex((line) => /--rename-glossary 2>&1[^\n]*brain\.ts/u.test(line));
    const data = JSON.parse(lines[index] ?? "") as {
      message: { content: { input: { command: string } }[] };
    };
    const [use] = data.message.content;
    const parts = use?.input.command.split("; echo ---; ") ?? [];
    expect(parts).toHaveLength(2);
    if (use !== undefined) {
      use.input.command = parts.toReversed().join("; echo ---; ");
    }
    lines[index] = JSON.stringify(data);
    expect(await failingSaved(savedRun(lines.join("\n")))).toEqual(["check-ran"]);
  });
});
