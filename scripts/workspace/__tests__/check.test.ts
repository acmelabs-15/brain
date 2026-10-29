/**
 * `brain check` at the CLI seam. Each test copies a shared fixture into a temp git repo,
 * breaks one rule in one file (the small fixture is the change the test names), runs
 * `bun scripts/brain.ts check` there, and asserts the exit code and every line it prints.
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
 * A git repo under the work folder: a copy of `fixture` (or an empty folder for null), with
 * each file in `files` written over it.
 */
async function repo(
  name: string,
  fixture: string | null,
  files: Record<string, string> = {},
): Promise<string> {
  const root = `${work}/${name}`;
  await (fixture === null
    ? mkdir(root, { recursive: true })
    : cp(`${fixtures}/${fixture}`, root, { recursive: true }));
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${path}`, body);
  }
  Bun.spawnSync(["git", "init", "--quiet"], { cwd: root });
  return root;
}

/** A fixture file with one piece of text replaced; fails the test when the text is not there. */
async function edited(
  fixture: string,
  path: string,
  from: string,
  to: string,
): Promise<Record<string, string>> {
  const text = await Bun.file(`${fixtures}/${fixture}/${path}`).text();
  expect(text).toContain(from);
  return { [path]: text.replace(from, to) };
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

/** A decision as the migrate mode leaves it: its ID, the marker, the date, and `extra` fields. */
function migratedDecision(id: string, extra = ""): string {
  return `---\nid: ${id}\nmigrated: 0.8\ndecided: 2026-09-19\n${extra}---\n# ${id}. Old title\n`;
}

const idea = "docs/ideas/IDEA-001-sync-notes.md";
const plan = "docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md";
const spec = "docs/specs/SPEC-001-invoice-csv-export/spec.md";

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-check-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("brain check, the clean fixtures", () => {
  test.each([
    ["idea-mid-define", 5],
    ["spec-mid-build", 8],
    ["no-active-work", 11],
  ])("%s has no finding: it exits 0 and counts its workspace files", async (fixture, count) => {
    const root = await repo(`clean-${fixture}`, fixture);
    const res = await brain(root, "check");
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe(lines(`no finding in ${count} workspace files`));
    expect(res.code).toBe(0);
  });
});

describe("brain check, one finding line per rule", () => {
  test.each([
    ["docs/decisions/0001-keep-the-ledger.md", "name: not DEC-NNN-<slug>.md"],
    ["docs/research/RES-3-cache.md", "name: not RES-NNN-<slug>.md"],
    ["docs/ideas/IDEA-002-Offline_Mode.md", "name: not IDEA-NNN-<slug>.md"],
    [
      "docs/specs/SPEC-001-sync/notes.md",
      "name: not SPEC-NNN-<slug>/spec.md, tasks/plan.md or tasks/todo.md",
    ],
  ])("a bad name: %s", async (path, problem) => {
    const root = await repo(`name-${Bun.hash(path)}`, "idea-mid-define", { [path]: "# Notes\n" });
    const res = await brain(root, "check");
    expect(res.stdout).toBe(lines(`${path}: ${problem}`, "1 finding in 6 workspace files"));
    expect(res.code).toBe(1);
  });

  test("a duplicate number: a second file names a decision number already taken", async () => {
    const root = await repo("duplicate-dec", "idea-mid-define", {
      "docs/decisions/DEC-002-peer-to-peer.md": `---
id: DEC-002
status: accepted
kind: decision
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-001#04
decided: 2026-10-24 by Sam
---
# DEC-002: Sync peer to peer
`,
    });
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        "docs/decisions/DEC-002-peer-to-peer.md: number: DEC-002 is also docs/decisions/DEC-002-hosted-sync-service.md",
        "1 finding in 6 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("a duplicate number: a second spec folder names a spec number already taken", async () => {
    const root = await repo("duplicate-spec", "spec-mid-build", {
      "docs/specs/SPEC-001-invoice-pdf-export/spec.md":
        "---\nspec: SPEC-001\nsources: [IDEA-001]\n---\n# SPEC-001: Export invoices as PDF\n",
    });
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        "docs/specs/SPEC-001-invoice-pdf-export: number: SPEC-001 is also docs/specs/SPEC-001-invoice-csv-export",
        "1 finding in 9 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("frontmatter that does not match its template", async () => {
    const path = "docs/decisions/DEC-001-phones-and-laptops.md";
    const root = await repo(
      "frontmatter",
      "idea-mid-define",
      await edited("idea-mid-define", path, "kind: decision", "kind: adr"),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        `${path}: kind: "adr" is not decision or architecture`,
        "1 finding in 5 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("a resolved map row whose result names no DEC or RES file", async () => {
    const root = await repo(
      "row-no-link",
      "idea-mid-define",
      await edited("idea-mid-define", idea, "| resolved | — | RES-001 |", "| resolved | — | — |"),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        `${idea}: row 02: resolved, but its result names no DEC or RES file`,
        "1 finding in 5 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("a map row whose result names a DEC or RES file that does not exist", async () => {
    const root = await repo(
      "row-dangling-link",
      "idea-mid-define",
      await edited(
        "idea-mid-define",
        idea,
        "| resolved | — | RES-001 |",
        "| resolved | — | RES-009 |",
      ),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(`${idea}: row 02: result RES-009 does not exist`, "1 finding in 5 workspace files"),
    );
    expect(res.code).toBe(1);
  });

  test("a blocked-by that names no row in the same map", async () => {
    const root = await repo(
      "blocked-by-map",
      "idea-mid-define",
      await edited(
        "idea-mid-define",
        idea,
        "encrypted at launch? | interview | open | — |",
        "encrypted at launch? | interview | open | 11 |",
      ),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        `${idea}: row 08: blocked by 11, which is not a row in this map`,
        "1 finding in 5 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("a blocked-by that names no row in the same plan", async () => {
    const root = await repo(
      "blocked-by-plan",
      "spec-mid-build",
      await edited("spec-mid-build", plan, "| task | open | 01 |", "| task | open | 01, 12 |"),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        `${plan}: row 05: blocked by 12, which is not a row in this plan`,
        "1 finding in 8 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("a spec sources entry that does not exist", async () => {
    const root = await repo(
      "sources",
      "spec-mid-build",
      await edited("spec-mid-build", spec, "RES-001]", "RES-001, RES-007]"),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(`${spec}: sources: RES-007 does not exist`, "1 finding in 8 workspace files"),
    );
    expect(res.code).toBe(1);
  });

  test("a row superseded by a row that is not in the same map", async () => {
    const root = await repo(
      "superseded-row",
      "idea-mid-define",
      await edited("idea-mid-define", idea, "superseded by 06", "superseded by 12"),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        `${idea}: row 03: superseded by 12, which is not a row in this map`,
        "1 finding in 5 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("a decision superseded by a decision that does not exist", async () => {
    const path = "docs/decisions/DEC-001-system-theme-only.md";
    const root = await repo(
      "superseded-dec",
      "no-active-work",
      await edited("no-active-work", path, "superseded by DEC-002", "superseded by DEC-009"),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        `${path}: status: superseded by DEC-009, which does not exist`,
        "1 finding in 11 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("a wrong H1 prefix", async () => {
    const root = await repo(
      "h1-prefix",
      "spec-mid-build",
      await edited("spec-mid-build", plan, "# SPEC-001 plan: ", "# SPEC-002 plan: "),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        `${plan}: H1: "# SPEC-002 plan: Export invoices as CSV" does not open with "# SPEC-001 plan: "`,
        "1 finding in 8 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("a spec field that does not match its folder", async () => {
    const root = await repo(
      "spec-field",
      "spec-mid-build",
      await edited("spec-mid-build", plan, "spec: SPEC-001", "spec: SPEC-002"),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        `${plan}: spec: "SPEC-002" does not match the file's ID SPEC-001`,
        "1 finding in 8 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("a plan copied from another spec is caught by its old ID, in the spec field and the H1", async () => {
    const copied = await Bun.file(`${fixtures}/spec-mid-build/${plan}`).text();
    const root = await repo("copied-plan", "spec-mid-build", {
      "docs/specs/SPEC-002-invoice-pdf-export/spec.md":
        "---\nspec: SPEC-002\nsources: [IDEA-001]\n---\n# SPEC-002: Export invoices as PDF\n",
      "docs/specs/SPEC-002-invoice-pdf-export/tasks/plan.md": copied,
    });
    const res = await brain(root, "check");
    const path = "docs/specs/SPEC-002-invoice-pdf-export/tasks/plan.md";
    expect(res.stdout).toBe(
      lines(
        `${path}: spec: "SPEC-001" does not match the file's ID SPEC-002`,
        `${path}: H1: "# SPEC-001 plan: Export invoices as CSV" does not open with "# SPEC-002 plan: "`,
        "2 findings in 10 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("a malformed RES finding", async () => {
    const path = "docs/research/RES-001-store-change-feed.md";
    const root = await repo(
      "finding",
      "idea-mid-define",
      await edited("idea-mid-define", path, "db.ts:8, checked 2026-10-22.", "db.ts:8."),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        `${path}: finding: "- The note store is a SQLite file, opened in one place. Source: src/store/db.ts:8." is not "- <claim>. Source: <source>, checked <YYYY-MM-DD>." with an optional ", etag: <value>" or ", last-modified: <value>"`,
        "1 finding in 5 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("an H1 whose title is still the template's placeholder", async () => {
    const path = "docs/decisions/DEC-001-phones-and-laptops.md";
    const root = await repo(
      "h1-placeholder",
      "idea-mid-define",
      await edited(
        "idea-mid-define",
        path,
        "# DEC-001: Sync phones and laptops at launch, tablets later",
        "# DEC-001: <title>",
      ),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        `${path}: H1: "# DEC-001: <title>" has a placeholder, not a title`,
        "1 finding in 5 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });
});

describe("brain check, a row that breaks the row format", () => {
  test.each([
    [
      "a status that is not a row status",
      "encrypted at launch? | interview | open |",
      "encrypted at launch? | interview | done |",
      'row 08: status "done" is not open, in-progress, resolved or superseded by NN',
    ],
    [
      "a type that is not a map row type",
      "encrypted at launch? | interview |",
      "encrypted at launch? | question |",
      'row 08: type "question" is not interview, prototype, ideate, research or task',
    ],
    [
      "a number that is not two digits",
      "| 08 | Must notes",
      "| 8 | Must notes",
      'row "8": the number is not two digits',
    ],
    [
      "a missing cell",
      "encrypted at launch? | interview | open | — | — |",
      "encrypted at launch? | interview | open | — |",
      "row 08: 5 cells, not 6",
    ],
    [
      "a blocked-by that is not a row number",
      "encrypted at launch? | interview | open | — |",
      "encrypted at launch? | interview | open | 8 |",
      'row 08: blocked by "8" is not a two-digit row number',
    ],
    [
      "a number an earlier row has",
      "| 10 | Measure",
      "| 09 | Measure",
      "row 09: an earlier row has the same number",
    ],
    [
      "a table whose header is not the map's",
      "| # | Question | Type |",
      "| # | Question | Kind |",
      "map: no table with the columns # | Question | Type | Status | Blocked by | Result",
    ],
  ])("in a map, %s", async (_name, from, to, problem) => {
    const root = await repo(
      `map-row-${Bun.hash(to)}`,
      "idea-mid-define",
      await edited("idea-mid-define", idea, from, to),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(lines(`${idea}: ${problem}`, "1 finding in 5 workspace files"));
    expect(res.code).toBe(1);
  });

  test.each([
    [
      "a type that is not a plan row type",
      "| Quote customer names that hold commas or quotes | task |",
      "| Quote customer names that hold commas or quotes | bug |",
      'row 05: type "bug" is not task or checkpoint',
    ],
    [
      "a table whose header is not the plan's",
      "| # | Task | Type |",
      "| # | Step | Type |",
      "plan: no table with the columns # | Task | Type | Status | Blocked by | Result",
    ],
  ])("in a plan, %s", async (_name, from, to, problem) => {
    const root = await repo(
      `plan-row-${Bun.hash(to)}`,
      "spec-mid-build",
      await edited("spec-mid-build", plan, from, to),
    );
    const res = await brain(root, "check");
    expect(res.stdout).toBe(lines(`${plan}: ${problem}`, "1 finding in 8 workspace files"));
    expect(res.code).toBe(1);
  });
});

describe("brain check, a migrated 0.8 file", () => {
  test("keeps its old body: a plan with no row table and an idea with an old table have no row finding", async () => {
    const root = await repo("migrated-bodies", "spec-mid-build", {
      [plan]: `---
spec: SPEC-001
migrated: 0.8
---
# Plan: invoice export

- [x] Task 1: write one invoice as a CSV row
- [ ] Task 2: export a date range
`,
      "docs/ideas/IDEA-002-usage-alerts.md": `---
id: IDEA-002
migrated: 0.8
---
# Intent: usage alerts

| Step | Ticket | State |
|---|---|---|
| 1 | Alert thresholds | done |
`,
    });
    const res = await brain(root, "check");
    expect(res.stdout).toBe(lines("no finding in 9 workspace files"));
    expect(res.code).toBe(0);
  });

  test("decisions with no kind get one informational line, and the exit code stays 0", async () => {
    const root = await repo("unclassified", "idea-mid-define", {
      "docs/decisions/DEC-001-phones-and-laptops.md": migratedDecision("DEC-001"),
      "docs/decisions/DEC-002-hosted-sync-service.md": migratedDecision("DEC-002"),
      "docs/decisions/DEC-003-tablets-later.md": migratedDecision("DEC-003", "kind: decision\n"),
      "docs/decisions/DEC-005-free-plan.md": migratedDecision("DEC-005"),
    });
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        "3 migrated decisions have no kind: DEC-001, DEC-002, DEC-005",
        "no finding in 7 workspace files",
      ),
    );
    expect(res.code).toBe(0);
  });

  test("one decision with no kind, beside a finding: the line is singular, and the finding alone sets exit 1", async () => {
    const root = await repo("unclassified-and-finding", "idea-mid-define", {
      "docs/decisions/DEC-003-tablets-later.md":
        "---\nid: DEC-003\nmigrated: 0.8\n---\n# 3. Tablets later\n",
      "docs/decisions/notes.md": "# Notes\n",
    });
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        "docs/decisions/notes.md: name: not DEC-NNN-<slug>.md",
        "1 migrated decision has no kind: DEC-003",
        "1 finding in 7 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });
});

describe("brain check, the layout", () => {
  test("a repo on the 0.8 layout, with no workspace.md, fails on the files that break the default layout", async () => {
    const root = await repo("layout-08", "layout-0.8");
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines(
        "docs/decisions/0001-keep-the-ledger-in-postgres.md: name: not DEC-NNN-<slug>.md",
        "docs/decisions/DEC-001-bill-by-calendar-month.md: frontmatter: missing",
        "docs/research/RES-001-payment-provider-retries.md: frontmatter: missing",
        "3 findings in 3 workspace files",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("reads each folder from workspace.md, so a file outside the configured folder is not checked", async () => {
    const root = await repo("config-paths", null, {
      "docs/agents/workspace.md": "---\nlayout: 2\npaths:\n  decisions: records\n---\n",
      "records/notes.md": "# Notes\n",
      "docs/decisions/notes.md": "# Not read\n",
    });
    const res = await brain(root, "check");
    expect(res.stdout).toBe(
      lines("records/notes.md: name: not DEC-NNN-<slug>.md", "1 finding in 1 workspace file"),
    );
    expect(res.code).toBe(1);
  });

  test("a workspace.md it cannot use fails: it exits 1 and names the file and the problem", async () => {
    const root = await repo("config-bad", null, {
      "docs/agents/workspace.md": "---\npaths:\n  decisions: /tmp/decisions\n---\n",
    });
    const res = await brain(root, "check");
    expect(res.stdout).toBe("");
    expect(res.stderr).toStartWith("docs/agents/workspace.md: paths.decisions: ");
    expect(res.code).toBe(1);
  });

  test("an argument prints the usage and exits 2", async () => {
    const root = await repo("usage", null);
    const res = await brain(root, "check", "--json");
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain("usage: brain check");
    expect(res.code).toBe(2);
  });
});
