/**
 * `brain status` at the CLI seam. Each test copies a shared fixture into a temp git repo,
 * changes at most a file or two (the change the test names), runs
 * `bun scripts/brain.ts status` there, and asserts the exit code and what it prints. Each
 * fixture's README names the state brain must report on it; these tests hold status to it.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { cp, mkdir, mkdtemp, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

// Each test starts a bun process, which takes seconds on a loaded machine (parallel builds run
// several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const cli = `${import.meta.dir}/../../brain.ts`;
const fixtures = `${import.meta.dir}/fixtures`;
let work: string;

/**
 * A git repo under the work folder: a copy of `fixture`, with each file in `files` written
 * over it, or removed when its text is null.
 */
async function repo(
  name: string,
  fixture: string,
  files: Record<string, string | null> = {},
): Promise<string> {
  const root = `${work}/${name}`;
  await cp(`${fixtures}/${fixture}`, root, { recursive: true });
  for (const [path, body] of Object.entries(files)) {
    if (body === null) {
      await rm(`${root}/${path}`);
    } else {
      await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
      await Bun.write(`${root}/${path}`, body);
    }
  }
  Bun.spawnSync(["git", "init", "--quiet"], { cwd: root });
  return root;
}

/** Run `brain` in `cwd`; git stops looking for a repo at the work folder. */
async function brain(cwd: string, ...args: string[]) {
  const proc = Bun.spawn(["bun", cli, ...args], {
    cwd,
    env: { ...process.env, GIT_CEILING_DIRECTORIES: work },
    stdout: "pipe",
    stderr: "pipe",
  });
  const [stdout, stderr] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
  ]);
  return { code: await proc.exited, stdout, stderr };
}

/** The lines a run prints, each ended by a line break. */
function lines(...printed: string[]): string {
  return printed.map((line) => `${line}\n`).join("");
}

type Step = { ref: string; title: string; type: string; status: string; result: string };
type Json = {
  migrate: string[] | null;
  report: string[];
  efforts: {
    id: string;
    kind: string;
    phase: string;
    title: string;
    path: string;
    lastStep: Step | null;
    frontier: Step[];
    inProgress: Step[];
    waiting: Step[];
  }[];
  ideas: { id: string; title: string; status: string | null; path: string; specs: string[] }[];
  red: string[];
  note: { path: string; text: string; next: string | null; waiting: string | null } | null;
};

/** `brain status --json` in `root`, parsed, after a check that the five lines match the text run. */
async function statusJson(root: string): Promise<Json> {
  const res = await brain(root, "status", "--json");
  expect(res.stderr).toBe("");
  expect(res.code).toBe(0);
  const data = JSON.parse(res.stdout) as Json;
  const text = await brain(root, "status");
  expect(lines(...data.report)).toBe(text.stdout);
  return data;
}

function refs(steps: Step[]): string[] {
  return steps.map((step) => step.ref);
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-status-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("brain status, the five lines on each fixture", () => {
  test("idea-mid-define: an idea in define, with docs/STATUS.md naming the next step and the waiting decisions", async () => {
    const root = await repo("five-idea", "idea-mid-define");
    const res = await brain(root, "status");
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe(
      lines(
        "Phase: define (IDEA-001: Sync notes across devices)",
        "Last step: IDEA-001#04: Sync through a hosted service, or peer to peer? (DEC-002)",
        "Next step: IDEA-001#06. Build the two merge prototypes, then ask the user to pick one.",
        "Red: none",
        "Waiting on the user: IDEA-001#06 (pick a merge prototype) and IDEA-001#08 (end-to-end encryption at launch).",
      ),
    );
    expect(res.code).toBe(0);
  });

  test("spec-mid-build: a spec in build, with no docs/STATUS.md, so the plan alone gives each line", async () => {
    const root = await repo("five-spec", "spec-mid-build");
    const res = await brain(root, "status");
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe(
      lines(
        "Phase: build (SPEC-001: Export invoices as CSV)",
        "Last step: SPEC-001#03: Export works end to end (8b41d07; `bun run check`: green)",
        "Next step: SPEC-001#05: Quote customer names that hold commas or quotes; in progress: SPEC-001#04: Add the Export button to the invoices page",
        "Red: none",
        "Waiting on the user: none",
      ),
    );
    expect(res.code).toBe(0);
  });

  test("no-active-work: no line names a parked idea or a finished spec, and the next step quotes docs/STATUS.md", async () => {
    const root = await repo("five-none", "no-active-work");
    const res = await brain(root, "status");
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe(
      lines(
        "Phase: no active work",
        "Last step: none",
        "Next step: none in the workspace; docs/STATUS.md says: No active work. Start with interview-me.",
        "Red: none",
        "Waiting on the user: none",
      ),
    );
    expect(res.code).toBe(0);
  });
});

describe("brain status, the lines the rows give", () => {
  test("with no docs/STATUS.md, the next step is the first frontier row and the waiting decisions are the decide rows on the frontier", async () => {
    const root = await repo("rows-idea", "idea-mid-define", { "docs/STATUS.md": null });
    const res = await brain(root, "status");
    expect(res.stdout).toBe(
      lines(
        "Phase: define (IDEA-001: Sync notes across devices)",
        "Last step: IDEA-001#04: Sync through a hosted service, or peer to peer? (DEC-002)",
        "Next step: IDEA-001#06: How do two edits to one note merge? Pick one of two prototypes; in progress: IDEA-001#05: Set up a test account on the sync service",
        "Red: none",
        "Waiting on the user: IDEA-001#06: How do two edits to one note merge? Pick one of two prototypes; IDEA-001#08: Must notes be end-to-end encrypted at launch?",
      ),
    );
    expect(res.code).toBe(0);
  });

  test("a docs/STATUS.md that names neither line leaves both to the rows", async () => {
    const root = await repo("rows-note", "idea-mid-define", {
      "docs/STATUS.md": "# Status\n\n- Red: nothing.\n",
    });
    const res = await brain(root, "status");
    const printed = res.stdout.split("\n");
    expect(printed[2]).toBe(
      "Next step: IDEA-001#06: How do two edits to one note merge? Pick one of two prototypes; in progress: IDEA-001#05: Set up a test account on the sync service",
    );
    expect(printed[4]).toBe(
      "Waiting on the user: IDEA-001#06: How do two edits to one note merge? Pick one of two prototypes; IDEA-001#08: Must notes be end-to-end encrypted at launch?",
    );
  });

  test("two active efforts: each line names both, the idea first", async () => {
    const parked = await Bun.file(
      `${fixtures}/no-active-work/docs/ideas/IDEA-002-offline-mode.md`,
    ).text();
    expect(parked).toContain("status: parked");
    const root = await repo("rows-two", "spec-mid-build", {
      "docs/ideas/IDEA-002-offline-mode.md": parked.replace("status: parked", "status: define"),
    });
    const res = await brain(root, "status");
    expect(res.stdout).toBe(
      lines(
        "Phase: define (IDEA-002: Offline mode); build (SPEC-001: Export invoices as CSV)",
        "Last step: SPEC-001#03: Export works end to end (8b41d07; `bun run check`: green)",
        "Next step: IDEA-002#01: Which screens must work offline?; SPEC-001#05: Quote customer names that hold commas or quotes; in progress: SPEC-001#04: Add the Export button to the invoices page",
        "Red: none",
        "Waiting on the user: IDEA-002#01: Which screens must work offline?",
      ),
    );
    expect(res.code).toBe(0);
    const data = await statusJson(root);
    expect(data.efforts.map((effort) => [effort.id, refs(effort.frontier)])).toEqual([
      ["IDEA-002", ["IDEA-002#01"]],
      ["SPEC-001", ["SPEC-001#05"]],
    ]);
  });

  test("the git branch names one of two unfinished efforts: the lines name that effort only", async () => {
    const parked = await Bun.file(
      `${fixtures}/no-active-work/docs/ideas/IDEA-002-offline-mode.md`,
    ).text();
    const root = await repo("branch-one", "spec-mid-build", {
      "docs/ideas/IDEA-002-offline-mode.md": parked.replace("status: parked", "status: define"),
    });
    Bun.spawnSync(["git", "symbolic-ref", "HEAD", "refs/heads/feat/offline-mode"], { cwd: root });
    const res = await brain(root, "status");
    expect(res.stdout).toBe(
      lines(
        "Phase: define (IDEA-002: Offline mode)",
        "Last step: none",
        "Next step: IDEA-002#01: Which screens must work offline?",
        "Red: none",
        "Waiting on the user: IDEA-002#01: Which screens must work offline?",
      ),
    );
    expect(res.code).toBe(0);
  });

  test("the git branch names a finished effort: its phase is finished, and the rows give no next step", async () => {
    const root = await repo("branch-finished", "no-active-work");
    Bun.spawnSync(["git", "symbolic-ref", "HEAD", "refs/heads/theme-tokens"], { cwd: root });
    const res = await brain(root, "status");
    expect(res.stdout).toBe(
      lines(
        "Phase: finished (SPEC-001: Colour tokens for a light and a dark theme)",
        "Last step: SPEC-001#03: Both themes pass the contrast check (9d7f3b4; `bun run check`: green)",
        "Next step: none in the workspace; docs/STATUS.md says: No active work. Start with interview-me.",
        "Red: none",
        "Waiting on the user: none",
      ),
    );
    expect(res.code).toBe(0);
  });
});

describe("brain status, an idea that ends with no spec", () => {
  test("a done idea is finished: it is not the active effort, and its result passes brain check", async () => {
    const root = await repo("done-idea", "no-active-work", {
      "docs/ideas/IDEA-003-switch-placement.md": `---
id: IDEA-003
status: done
result: DEC-002
---
# IDEA-003: Where the theme switch goes

## Intent
- Outcome: users find the theme switch where they look for it.
- User: people who pick light or dark by hand.
- Why now: support tickets ask where the switch is.
- Success: no ticket asks for the switch for a month.
- Constraint: no new screen.
- Out of scope: new themes.

Confirmed by Sam on 2026-09-12.

## Destination
A decision: the screen that holds the theme switch.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

## Map
| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which screen holds the theme switch? | interview | resolved | — | DEC-002 |

## Not yet specified
None.

## Out of scope
- New themes.
`,
    });
    const res = await brain(root, "status");
    expect(res.stdout).toBe(
      lines(
        "Phase: no active work",
        "Last step: none",
        "Next step: none in the workspace; docs/STATUS.md says: No active work. Start with interview-me.",
        "Red: none",
        "Waiting on the user: none",
      ),
    );
    expect(res.code).toBe(0);
    const data = await statusJson(root);
    expect(data.efforts).toEqual([]);
    expect(data.ideas.map(({ id, status, specs }) => ({ id, status, specs }))).toEqual([
      { id: "IDEA-001", status: "specced", specs: ["SPEC-001", "SPEC-002"] },
      { id: "IDEA-002", status: "parked", specs: [] },
      { id: "IDEA-003", status: "done", specs: [] },
    ]);
  });
});

describe("brain status --json, on each fixture", () => {
  test("idea-mid-define: the frontier its README names, the rows in progress and waiting, and the full note", async () => {
    const root = await repo("json-idea", "idea-mid-define");
    const data = await statusJson(root);
    expect(data.migrate).toBeNull();
    expect(data.efforts).toHaveLength(1);
    const [idea] = data.efforts;
    expect(idea?.id).toBe("IDEA-001");
    expect(idea?.kind).toBe("idea");
    expect(idea?.phase).toBe("define");
    expect(idea?.path).toBe("docs/ideas/IDEA-001-sync-notes.md");
    expect(refs(idea?.frontier ?? [])).toEqual(["IDEA-001#06", "IDEA-001#07", "IDEA-001#08"]);
    expect(refs(idea?.inProgress ?? [])).toEqual(["IDEA-001#05"]);
    expect(refs(idea?.waiting ?? [])).toEqual(["IDEA-001#06", "IDEA-001#08"]);
    expect(idea?.lastStep).toEqual({
      ref: "IDEA-001#04",
      title: "Sync through a hosted service, or peer to peer?",
      type: "ideate",
      status: "resolved",
      result: "DEC-002",
    });
    expect(data.ideas).toEqual([
      {
        id: "IDEA-001",
        title: "Sync notes across devices",
        status: "define",
        path: "docs/ideas/IDEA-001-sync-notes.md",
        specs: [],
      },
    ]);
    expect(data.red).toEqual([]);
    expect(data.note).toEqual({
      path: "docs/STATUS.md",
      text: await Bun.file(`${root}/docs/STATUS.md`).text(),
      next: "IDEA-001#06. Build the two merge prototypes, then ask the user to pick one.",
      waiting:
        "IDEA-001#06 (pick a merge prototype) and IDEA-001#08 (end-to-end encryption at launch).",
    });
  });

  test("spec-mid-build: the plan's frontier, its row in progress, and the spec the idea produced", async () => {
    const root = await repo("json-spec", "spec-mid-build");
    const data = await statusJson(root);
    expect(data.efforts).toHaveLength(1);
    const [spec] = data.efforts;
    expect(spec?.id).toBe("SPEC-001");
    expect(spec?.kind).toBe("spec");
    expect(spec?.phase).toBe("build");
    expect(spec?.path).toBe("docs/specs/SPEC-001-invoice-csv-export");
    expect(refs(spec?.frontier ?? [])).toEqual(["SPEC-001#05"]);
    expect(refs(spec?.inProgress ?? [])).toEqual(["SPEC-001#04"]);
    expect(spec?.waiting).toEqual([]);
    expect(spec?.lastStep?.ref).toBe("SPEC-001#03");
    expect(data.ideas.map(({ id, status, specs }) => ({ id, status, specs }))).toEqual([
      { id: "IDEA-001", status: "specced", specs: ["SPEC-001"] },
    ]);
    expect(data.red).toEqual([]);
    expect(data.note).toBeNull();
  });

  test("no-active-work: no effort, though the parked idea's map has an open row, and each idea's specs", async () => {
    const root = await repo("json-none", "no-active-work");
    const data = await statusJson(root);
    expect(data.efforts).toEqual([]);
    expect(data.ideas.map(({ id, status, specs }) => ({ id, status, specs }))).toEqual([
      { id: "IDEA-001", status: "specced", specs: ["SPEC-001", "SPEC-002"] },
      { id: "IDEA-002", status: "parked", specs: [] },
    ]);
    expect(data.red).toEqual([]);
    expect(data.note).toEqual({
      path: "docs/STATUS.md",
      text: "No active work. Start with interview-me.\n",
      next: null,
      waiting: null,
    });
  });

  test("a red item: each brain check finding, as brain check names it", async () => {
    const root = await repo("json-red", "idea-mid-define", {
      "docs/decisions/notes.md": "# Notes\n",
      "docs/agents/workspace.md": null,
    });
    const data = await statusJson(root);
    expect(data.red).toEqual([
      "no docs/agents/workspace.md: run setup-brain",
      "docs/decisions/notes.md: name: not DEC-NNN-<slug>.md",
    ]);
  });
});

describe("brain status, a repo on the 0.8 layout", () => {
  const migrate =
    "This repo is on the brain 0.8 layout: run setup-brain to migrate. Found: CONTEXT.md, spec/, tasks/plan.md, tasks/todo.md, docs/intent/, docs/agents/issue-tracker.md.";

  test("layout-0.8: one line, run setup-brain to migrate, naming the 0.8 files it found", async () => {
    const root = await repo("old", "layout-0.8");
    const res = await brain(root, "status");
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe(lines(migrate));
    expect(res.code).toBe(0);
  });

  test("layout-0.8, --json: the same line, the 0.8 files, and no effort", async () => {
    const root = await repo("old-json", "layout-0.8");
    const data = await statusJson(root);
    expect(data.migrate).toEqual([
      "CONTEXT.md",
      "spec/",
      "tasks/plan.md",
      "tasks/todo.md",
      "docs/intent/",
      "docs/agents/issue-tracker.md",
    ]);
    expect(data.report).toEqual([migrate]);
    expect(data.efforts).toEqual([]);
  });

  test("a workspace.md marks the repo as migrated, though 0.8 files remain", async () => {
    const root = await repo("old-config", "layout-0.8", {
      "docs/agents/workspace.md": "---\nlayout: 2\n---\n# Workspace\n",
    });
    const res = await brain(root, "status");
    expect(res.stdout.split("\n")[0]).toBe("Phase: no active work");
    expect(res.code).toBe(0);
  });
});

/** A hash of every path under `root`, `.git` too, and of every file's bytes. */
async function treeHash(root: string): Promise<string> {
  const hasher = new Bun.CryptoHasher("sha256");
  const entries = await Array.fromAsync(
    new Bun.Glob("**").scan({ cwd: root, dot: true, onlyFiles: false }),
  );
  const files = new Set(
    await Array.fromAsync(new Bun.Glob("**").scan({ cwd: root, dot: true, onlyFiles: true })),
  );
  for (const entry of entries.toSorted()) {
    hasher.update(`${entry}\0`);
    if (files.has(entry)) {
      hasher.update(await Bun.file(`${root}/${entry}`).arrayBuffer());
    }
  }
  return hasher.digest("hex");
}

describe("brain status is read-only", () => {
  test.each(["idea-mid-define", "spec-mid-build", "no-active-work", "layout-0.8"])(
    "%s: the tree is the same before and after status and status --json",
    async (fixture) => {
      const root = await repo(`read-only-${fixture}`, fixture);
      const before = await treeHash(root);
      const text = await brain(root, "status");
      const json = await brain(root, "status", "--json");
      expect([text.code, json.code]).toEqual([0, 0]);
      expect(await treeHash(root)).toBe(before);
    },
  );
});

describe("brain status, usage and the config", () => {
  test("from a folder inside the repo, it reports on the whole repo", async () => {
    const root = await repo("inside", "spec-mid-build");
    const res = await brain(`${root}/docs/specs`, "status");
    expect(res.stdout.split("\n")[0]).toBe("Phase: build (SPEC-001: Export invoices as CSV)");
    expect(res.code).toBe(0);
  });

  test.each(["--verbose", "--json --json", "IDEA-001"])(
    "an argument other than one --json prints the usage and exits 2: %s",
    async (given) => {
      const args = given.split(" ");
      const root = await repo(`usage-${args.join("-")}`, "no-active-work");
      const res = await brain(root, "status", ...args);
      expect(res.stdout).toBe("");
      expect(res.stderr).toContain("usage: brain status [--json]");
      expect(res.code).toBe(2);
    },
  );

  test("a workspace.md it cannot use fails: it exits 1 and names the file and the problem", async () => {
    const root = await repo("config-bad", "no-active-work", {
      "docs/agents/workspace.md": "---\npaths:\n  ideas: /tmp/ideas\n---\n",
    });
    const res = await brain(root, "status");
    expect(res.stdout).toBe("");
    expect(res.stderr).toStartWith("docs/agents/workspace.md: paths.ideas: ");
    expect(res.code).toBe(1);
  });
});

describe("brain status, red items", () => {
  test("a brain check finding is red: the line counts it, and the report still exits 0", async () => {
    const root = await repo("red-finding", "idea-mid-define", {
      "docs/decisions/notes.md": "# Notes\n",
    });
    const res = await brain(root, "status");
    expect(res.stdout.split("\n")[3]).toBe("Red: 1 brain check finding: run brain check");
    expect(res.code).toBe(0);
  });

  test("no workspace.md and no 0.8 file: the default folders, and setup-brain is red", async () => {
    const root = await repo("red-setup", "idea-mid-define", { "docs/agents/workspace.md": null });
    const res = await brain(root, "status");
    expect(res.stdout).toBe(
      lines(
        "Phase: define (IDEA-001: Sync notes across devices)",
        "Last step: IDEA-001#04: Sync through a hosted service, or peer to peer? (DEC-002)",
        "Next step: IDEA-001#06. Build the two merge prototypes, then ask the user to pick one.",
        "Red: no docs/agents/workspace.md: run setup-brain",
        "Waiting on the user: IDEA-001#06 (pick a merge prototype) and IDEA-001#08 (end-to-end encryption at launch).",
      ),
    );
    expect(res.code).toBe(0);
  });
});
