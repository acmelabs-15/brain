/**
 * The Claude Code `SessionStart` hook, spawned as Claude Code spawns it. Each test copies a
 * shared workspace fixture into a temp git repo, runs `bun scripts/hooks/session-start.ts` with
 * `CLAUDE_PLUGIN_ROOT` and `CLAUDE_PROJECT_DIR` set and the hook's JSON input on stdin, and
 * asserts the exit code and the JSON the hook prints. The input and its `source` field, the
 * envelope and the 10,000-character cap come from the hooks reference:
 * https://code.claude.com/docs/en/hooks#sessionstart-input and
 * https://code.claude.com/docs/en/hooks#sessionstart-decision-control
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { cp, mkdir, mkdtemp, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

// Each test starts two bun processes (the hook and the `brain status` it runs), which takes
// seconds on a loaded machine; the default 5 s is too tight.
setDefaultTimeout(60_000);

/** The plugin's root: what Claude Code sets `CLAUDE_PLUGIN_ROOT` to. */
const pluginRoot = path.resolve(import.meta.dir, "../../..");
const hook = `${pluginRoot}/scripts/hooks/session-start.ts`;
const fixtures = `${pluginRoot}/scripts/workspace/__tests__/fixtures`;
const protocolSource = await Bun.file(`${pluginRoot}/protocol/PROTOCOL.md`).text();
const protocol = protocolSource.trim();
const brainCommand = `bun "${pluginRoot}/scripts/brain.ts" <cmd>`;
let work: string;

/** The `brain` path section, which every text carries. */
const cliSection = [
  "# The brain CLI",
  "",
  "`brain <cmd>` on this machine:",
  "",
  "```",
  brainCommand,
  "```",
].join("\n");

/** The status section on the no-active-work fixture: the five lines, then docs/STATUS.md. */
const noWorkStatus = [
  "# brain status",
  "",
  "Stage: no active work",
  "Last step: none",
  "Next step: none in the workspace; docs/STATUS.md says: No active work. Start with interview-me.",
  "Red: none",
  "Waiting on the user: none",
  "",
  "# docs/STATUS.md",
  "",
  "No active work. Start with interview-me.",
].join("\n");

/** The full text on the no-active-work fixture: the protocol, the brain path and the status. */
const fullNoWork = [
  "# brain protocol",
  "",
  "The brain plugin adds this text at session start: the brain protocol, the path of the `brain` CLI on this machine, and the state of this repo from `brain status`.",
  "",
  protocol,
  "",
  cliSection,
  "",
  noWorkStatus,
].join("\n");

/**
 * The text on resume or fork, on the no-active-work fixture: the brain path and the status, no
 * protocol.
 */
const statusOnlyNoWork = [
  "# brain on resume or fork",
  "",
  "The brain plugin adds this text when a session resumes or forks: the path of the `brain` CLI on this machine and the current `brain status` of this repo. The protocol is not repeated; the session's transcript already holds it. This status replaces any earlier one in the session.",
  "",
  cliSection,
  "",
  noWorkStatus,
].join("\n");

/**
 * The JSON Claude Code writes to a `SessionStart` hook's stdin, with `source` set:
 * https://code.claude.com/docs/en/hooks#sessionstart-input
 */
function input(source: string, cwd: string): string {
  return JSON.stringify({ session_id: "abc123", hook_event_name: "SessionStart", source, cwd });
}

/** The lines of the protocol that appear in `context`; none should, on resume or fork. */
function protocolLinesIn(context: string): string[] {
  return protocol.split("\n").filter((line) => line.trim() !== "" && context.includes(line));
}

/**
 * A git repo under the work folder: a copy of `fixture`, with each file in `files` written
 * over it.
 */
async function repo(name: string, fixture: string, files: Record<string, string> = {}) {
  const root = `${work}/${name}`;
  await cp(`${fixtures}/${fixture}`, root, { recursive: true });
  for (const [file, body] of Object.entries(files)) {
    await mkdir(`${root}/${file}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${file}`, body);
  }
  Bun.spawnSync(["git", "init", "--quiet"], { cwd: root });
  return root;
}

/**
 * Spawn `command` as Claude Code spawns a hook for `project`, with `stdin` as its input (a
 * startup session by default); git stops at the work folder.
 */
async function spawnHook(
  project: string,
  {
    command = ["bun", hook],
    cwd = project,
    stdin = input("startup", cwd),
  }: { command?: string[]; cwd?: string; stdin?: string } = {},
) {
  const proc = Bun.spawn(command, {
    cwd,
    env: {
      ...process.env,
      CLAUDE_PLUGIN_ROOT: pluginRoot,
      CLAUDE_PROJECT_DIR: project,
      GIT_CEILING_DIRECTORIES: work,
    },
    stdin: new Blob([stdin]),
    stdout: "pipe",
    stderr: "pipe",
  });
  const [stdout, stderr] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
  ]);
  return { code: await proc.exited, stdout, stderr };
}

/**
 * The text the hook adds to the session, after checks that the run exited 0, printed nothing
 * on stderr, and printed one envelope with only the event name and the text, under the cap.
 */
function contextOf(run: { code: number; stdout: string; stderr: string }): string {
  expect(run.stderr).toBe("");
  expect(run.code).toBe(0);
  const envelope = JSON.parse(run.stdout) as {
    hookSpecificOutput: { hookEventName: string; additionalContext: string };
  };
  expect(Object.keys(envelope)).toEqual(["hookSpecificOutput"]);
  expect(Object.keys(envelope.hookSpecificOutput)).toEqual(["hookEventName", "additionalContext"]);
  expect(envelope.hookSpecificOutput.hookEventName).toBe("SessionStart");
  const context = envelope.hookSpecificOutput.additionalContext;
  expect(context.length).toBeLessThan(10_000);
  return context;
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-session-start-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("the hook file and the manifest", () => {
  test("the Claude manifest names the one hook file", async () => {
    const manifest = (await Bun.file(`${pluginRoot}/.claude-plugin/plugin.json`).json()) as {
      hooks?: unknown;
    };
    expect(manifest.hooks).toBe("./scripts/hooks/claude-code.json");
  });

  test("its SessionStart entry has no matcher, so it fires on every source, and its command runs the hook", async () => {
    type Handler = { type: string; command: string; args: string[] };
    type Entry = { matcher?: string; hooks: Handler[] };
    const file = (await Bun.file(`${pluginRoot}/scripts/hooks/claude-code.json`).json()) as {
      hooks: Record<string, Entry[]>;
    };
    // Claude Code's placeholder for the plugin's root, written literally.
    const placeholder = `\${CLAUDE_PLUGIN_ROOT}`;
    // A hook file wraps its events in a top-level "hooks" key, or it fails to load:
    // https://code.claude.com/docs/en/plugins/manifest-reference#hooks
    expect(Object.keys(file)).toEqual(["hooks"]);
    const entries = file.hooks.SessionStart ?? [];
    expect(entries).toHaveLength(1);
    const [entry] = entries as [Entry];
    // No matcher: an omitted matcher matches every occurrence of the event, so the hook runs on
    // every source, and session-start.ts decides what to print:
    // https://code.claude.com/docs/en/hooks#matcher-patterns
    expect(Object.keys(entry)).toEqual(["hooks"]);
    // Exec form: `args` keeps the resolved path one argument, with no shell quoting.
    expect(entry.hooks).toEqual([
      { type: "command", command: "bun", args: [`${placeholder}/scripts/hooks/session-start.ts`] },
    ]);
    const [{ command, args }] = entry.hooks as [Handler];
    const resolved = args.map((arg) => arg.replace(placeholder, pluginRoot));
    const root = await repo("wired", "no-active-work");
    const context = contextOf(await spawnHook(root, { command: [command, ...resolved] }));
    expect(context).toContain(protocol);
  });
});

describe("the text for each source of the session", () => {
  test.each(["startup", "clear", "compact"])(
    "%s: the protocol, the brain path, the five lines and docs/STATUS.md, in that order",
    async (source) => {
      const root = await repo(`source-${source}`, "no-active-work");
      const context = contextOf(await spawnHook(root, { stdin: input(source, root) }));
      expect(context).toBe(fullNoWork);
    },
  );

  test.each(["resume", "fork"])(
    "%s: the brain path, the five lines and docs/STATUS.md, with no protocol text",
    async (source) => {
      const root = await repo(`source-${source}`, "no-active-work");
      const context = contextOf(await spawnHook(root, { stdin: input(source, root) }));
      expect(context).toBe(statusOnlyNoWork);
      expect(protocolLinesIn(context)).toEqual([]);
      expect(context.length).toBeLessThan(fullNoWork.length / 2);
    },
  );

  test.each([
    ["a source value Claude Code may add later", input("teleport", "/")],
    ["an input with no source field", JSON.stringify({ hook_event_name: "SessionStart" })],
    ["an input that is not JSON", ""],
  ])("%s: the full text, the safe default", async (name, stdin) => {
    const root = await repo(`fallback-${name.replaceAll(/\W+/gu, "-")}`, "no-active-work");
    const context = contextOf(await spawnHook(root, { stdin }));
    expect(context).toBe(fullNoWork);
  });
});

describe("the session-start text on each fixture", () => {
  test("idea-mid-define: the five lines of an idea in define, and the full docs/STATUS.md text", async () => {
    const root = await repo("idea", "idea-mid-define");
    const context = contextOf(await spawnHook(root));
    const noteSource = await Bun.file(`${root}/docs/STATUS.md`).text();
    const note = noteSource.trim();
    expect(context).toContain(protocol);
    expect(context).toContain(brainCommand);
    expect(context).toContain(
      [
        "# brain status",
        "",
        "Stage: define (IDEA-001: Sync notes across devices)",
        "Last step: IDEA-001#04: Sync through a hosted service, or peer to peer? (DEC-002)",
        "Next step: IDEA-001#06. Build the two merge prototypes, then ask the user to pick one.",
        "Red: none",
        "Waiting on the user: IDEA-001#06 (pick a merge prototype) and IDEA-001#08 (end-to-end encryption at launch).",
      ].join("\n"),
    );
    expect(context.endsWith(`# docs/STATUS.md\n\n${note}`)).toBe(true);
  });

  test("spec-mid-build: the five lines of a spec in build, and a line that the repo has no docs/STATUS.md", async () => {
    const root = await repo("spec", "spec-mid-build");
    const context = contextOf(await spawnHook(root));
    expect(context).toContain(protocol);
    expect(context).toContain(brainCommand);
    expect(context).toContain(
      [
        "Stage: build (SPEC-001: Export invoices as CSV)",
        "Last step: SPEC-001#03: Export works end to end (8b41d07; `bun run check`: green)",
        "Next step: SPEC-001#05: Quote customer names that hold commas or quotes; in progress: SPEC-001#04: Add the Export button to the invoices page",
        "Red: none",
        "Waiting on the user: none",
      ].join("\n"),
    );
    expect(context.endsWith("# docs/STATUS.md\n\nThis repo has no docs/STATUS.md.")).toBe(true);
  });

  test("layout-0.8: the one line that says to run setup-brain to migrate", async () => {
    const root = await repo("old", "layout-0.8");
    const context = contextOf(await spawnHook(root));
    expect(context).toContain(protocol);
    expect(context).toContain(
      "# brain status\n\nThis repo is on the brain 0.8 layout: run setup-brain to migrate. Found: CONTEXT.md, spec/, tasks/plan.md, tasks/todo.md, docs/intent/, docs/agents/issue-tracker.md, docs/agents/triage-labels.md.\n",
    );
  });

  test("the repo is CLAUDE_PROJECT_DIR, wherever the hook process starts", async () => {
    const root = await repo("project-dir", "spec-mid-build");
    const context = contextOf(await spawnHook(root, { cwd: work }));
    expect(context).toContain("Stage: build (SPEC-001: Export invoices as CSV)");
  });
});

describe("when the status does not fit or does not run", () => {
  test("a docs/STATUS.md too long for the cap is cut at a line end, and one line says so", async () => {
    const lines = Array.from({ length: 400 }, (_, i) => `- Note line ${i + 1} of 400.`);
    const root = await repo("long", "idea-mid-define", {
      "docs/STATUS.md": `# Status\n\n${lines.join("\n")}\n`,
    });
    const context = contextOf(await spawnHook(root));
    expect(context).toContain(protocol);
    expect(context).toContain(brainCommand);
    expect(context).toContain("Stage: define (IDEA-001: Sync notes across devices)");
    expect(context).toContain("- Note line 1 of 400.");
    expect(context).not.toContain("- Note line 400 of 400.");
    const [kept, cut] = context.split(
      "\nThe status text is cut here to keep this text under 10,000 characters. Run `brain status` and read docs/STATUS.md for the rest.",
    );
    expect(cut).toBe("");
    expect(kept).toMatch(/\n- Note line \d+ of 400\.$/u);
  });

  test("a CLAUDE_PROJECT_DIR that does not exist still leaves the protocol and says why status did not start", async () => {
    const context = contextOf(await spawnHook(`${work}/missing`, { cwd: work }));
    expect(context).toContain(protocol);
    expect(context).toContain(brainCommand);
    expect(context).toContain("# brain status\n\n`brain status` failed to start: ");
  });

  test("a brain status that fails still leaves the protocol, the brain path and the failure", async () => {
    const config = await Bun.file(`${fixtures}/no-active-work/docs/agents/workspace.md`).text();
    const root = await repo("failing", "no-active-work", {
      "docs/agents/workspace.md": config.replace("layout: 2\n", "layout: 2\nmax_parallel: 0\n"),
    });
    const context = contextOf(await spawnHook(root));
    expect(context).toContain(protocol);
    expect(context).toContain(brainCommand);
    expect(
      context.endsWith(
        "# brain status\n\n`brain status` failed with exit 1: docs/agents/workspace.md: max_parallel: 0 is not a whole number of 1 or more",
      ),
    ).toBe(true);
  });

  test("on resume, a docs/STATUS.md too long for the cap is cut at a line end, and one line says so", async () => {
    const lines = Array.from({ length: 500 }, (_, i) => `- Note line ${i + 1} of 500.`);
    const root = await repo("long-resume", "idea-mid-define", {
      "docs/STATUS.md": `# Status\n\n${lines.join("\n")}\n`,
    });
    const context = contextOf(await spawnHook(root, { stdin: input("resume", root) }));
    expect(protocolLinesIn(context)).toEqual([]);
    expect(context).toContain(brainCommand);
    expect(context).toContain("Stage: define (IDEA-001: Sync notes across devices)");
    expect(context).toContain("- Note line 1 of 500.");
    expect(context).not.toContain("- Note line 500 of 500.");
    const [kept, cut] = context.split(
      "\nThe status text is cut here to keep this text under 10,000 characters. Run `brain status` and read docs/STATUS.md for the rest.",
    );
    expect(cut).toBe("");
    expect(kept).toMatch(/\n- Note line \d+ of 500\.$/u);
  });

  test("on resume, a brain status that fails leaves the brain path and the failure, with no protocol text", async () => {
    const config = await Bun.file(`${fixtures}/no-active-work/docs/agents/workspace.md`).text();
    const root = await repo("failing-resume", "no-active-work", {
      "docs/agents/workspace.md": config.replace("layout: 2\n", "layout: 2\nmax_parallel: 0\n"),
    });
    const context = contextOf(await spawnHook(root, { stdin: input("resume", root) }));
    expect(protocolLinesIn(context)).toEqual([]);
    expect(context).toContain(brainCommand);
    expect(
      context.endsWith(
        "# brain status\n\n`brain status` failed with exit 1: docs/agents/workspace.md: max_parallel: 0 is not a whole number of 1 or more",
      ),
    ).toBe(true);
  });
});
