/**
 * `brain plan` at the CLI seam. Each test copies a shared fixture into a temp git repo, runs
 * `bun scripts/brain.ts plan` there, and asserts the exit code and every line it prints. The
 * plan-shapes fixture holds a linear plan, a wide plan, a plan with checkpoints and a cycle; its
 * README names what brain must report for each.
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
 * A git repo under the work folder: a copy of `fixture`, with each file in `files` written over
 * it.
 */
async function repo(
  name: string,
  fixture: string,
  files: Record<string, string> = {},
): Promise<string> {
  const root = `${work}/${name}`;
  await cp(`${fixtures}/${fixture}`, root, { recursive: true });
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${path}`, body);
  }
  Bun.spawnSync(["git", "init", "--quiet", "--initial-branch=main"], { cwd: root });
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

/** One hash over every file under `root`, `.git` included: its path and its bytes. */
async function treeHash(root: string): Promise<string> {
  const hasher = new Bun.CryptoHasher("sha256");
  const files = await Array.fromAsync(new Bun.Glob("**").scan({ cwd: root, dot: true }));
  for (const file of files.toSorted()) {
    hasher.update(`${file}\0`);
    hasher.update(await Bun.file(`${root}/${file}`).bytes());
    hasher.update("\0");
  }
  return hasher.digest("hex");
}

/** An open task row as `--json` prints it. */
function task(id: string, title: string, files: string[]) {
  return { id, title, type: "task", status: "open", files };
}

const linear = lines(
  "| Wave | Rows |",
  "|---|---|",
  "| 1 | 02 |",
  "| 2 | 03 |",
  "| 3 | 04 (checkpoint) |",
  "",
  "Critical path, 3 rows: 02, 03, 04.",
  "",
  "Files that more than one task in a wave touches: none.",
  "",
  "Phases that share a wave: none.",
);

const wide = lines(
  "| Wave | Rows |",
  "|---|---|",
  "| 1 | 02, 03, 04, 05 |",
  "| 2 | 06 |",
  "",
  "Critical path, 2 rows: 02, 06.",
  "",
  "Files that more than one task in a wave touches:",
  "- Wave 1: `package.json` (04, 05)",
  "- Wave 1: `src/import/index.ts` (02, 03, 05)",
  "",
  "Phases that share a wave: none.",
);

const checkpoints = lines(
  "| Wave | Rows |",
  "|---|---|",
  "| 1 | 01, 04 |",
  "| 2 | 02 |",
  "| 3 | 03 (checkpoint) |",
  "| 4 | 05 |",
  "| 5 | 06 (checkpoint) |",
  "",
  "Critical path, 5 rows: 01, 02, 03, 05, 06.",
  "",
  "Files that more than one task in a wave touches: none.",
  "",
  "Phases that share a wave, each named by its checkpoint row:",
  "- 03 and 06: wave 1",
);

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-plan-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("brain plan, the waves of each plan shape", () => {
  test.each([
    ["a linear plan", "SPEC-001", linear],
    ["a wide plan, whose tasks in wave 1 share two files", "SPEC-002", wide],
    ["a plan with checkpoints, whose two phases share wave 1", "SPEC-003", checkpoints],
  ])("%s: waves, critical path, shared files and phases", async (_shape, spec, expected) => {
    const root = await repo(`shape-${spec}`, "plan-shapes");
    const res = await brain(root, "plan", spec);
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe(expected);
    expect(res.code).toBe(0);
  });

  test("a spec mid-build, with no spec named: it reads the active effort's plan", async () => {
    const root = await repo("mid-build", "spec-mid-build");
    const res = await brain(root, "plan");
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe(
      lines(
        "| Wave | Rows |",
        "|---|---|",
        "| 1 | 04, 05 |",
        "| 2 | 06 |",
        "| 3 | 07 (checkpoint) |",
        "",
        "Critical path, 3 rows: 04, 06, 07.",
        "",
        "Files that more than one task in a wave touches: none.",
        "",
        "Phases that share a wave: none.",
      ),
    );
    expect(res.code).toBe(0);
  });

  test("a plan whose rows are all resolved has no wave", async () => {
    const root = await repo("all-resolved", "no-active-work");
    const res = await brain(root, "plan", "SPEC-001");
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe(lines("No open rows: every row is resolved or superseded."));
    expect(res.code).toBe(0);
  });

  test.each([
    ["the spec folder", "docs/specs/SPEC-002-wide"],
    ["its plan file", "docs/specs/SPEC-002-wide/tasks/plan.md"],
  ])("a path to %s reads the same plan as its spec ID", async (_what, path) => {
    const root = await repo(`path-${Bun.hash(path)}`, "plan-shapes");
    const res = await brain(root, "plan", path);
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe(wide);
    expect(res.code).toBe(0);
  });
});

describe("brain plan --json", () => {
  test("gives the same data as the text, with each row's title, type, status and files", async () => {
    const root = await repo("json-wide", "plan-shapes");
    const res = await brain(root, "plan", "SPEC-002", "--json");
    expect(res.stderr).toBe("");
    expect(res.code).toBe(0);
    expect(JSON.parse(res.stdout)).toEqual({
      plan: "docs/specs/SPEC-002-wide/tasks/plan.md",
      waves: [
        {
          wave: 1,
          rows: [
            task("02", "Import contacts from CSV", ["src/import/csv.ts", "src/import/index.ts"]),
            task("03", "Import contacts from vCard", [
              "src/import/vcard.ts",
              "src/import/index.ts",
            ]),
            task("04", "Import contacts from JSON", ["src/import/json.ts", "package.json"]),
            task("05", "Import contacts from a spreadsheet", [
              "src/import/sheet.ts",
              "package.json",
              "src/import/index.ts",
            ]),
          ],
        },
        {
          wave: 2,
          rows: [
            task("06", "Pick the importer from the file type", [
              "src/import/pick.ts",
              "src/import/index.ts",
            ]),
          ],
        },
      ],
      criticalPath: ["02", "06"],
      sharedFiles: [
        { wave: 1, file: "package.json", rows: ["04", "05"] },
        { wave: 1, file: "src/import/index.ts", rows: ["02", "03", "05"] },
      ],
      overlaps: [],
    });
  });

  test("marks a row in progress, and names a file two tasks in its wave share", async () => {
    // Row 06 no longer waits for row 04, so both touch the Export button in wave 1.
    const root = await repo(
      "json-mid-build",
      "spec-mid-build",
      await edited(
        "spec-mid-build",
        "docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md",
        "| 06 | Show progress for an export of more than 1,000 invoices | task | open | 04 | — |",
        "| 06 | Show progress for an export of more than 1,000 invoices | task | open | — | — |",
      ),
    );
    const res = await brain(root, "plan", "SPEC-001", "--json");
    expect(res.stderr).toBe("");
    expect(res.code).toBe(0);
    const data = JSON.parse(res.stdout);
    expect(data.waves[0].rows.map((row: { id: string }) => row.id)).toEqual(["04", "05", "06"]);
    expect(data.waves[0].rows[0].status).toBe("in-progress");
    expect(data.criticalPath).toEqual(["04", "07"]);
    expect(data.sharedFiles).toEqual([
      { wave: 1, file: "src/pages/invoices/ExportButton.tsx", rows: ["04", "06"] },
    ]);
    expect(data.overlaps).toEqual([]);
  });

  test("lists two phases that share a wave, with the waves they share", async () => {
    const root = await repo("json-overlap", "plan-shapes");
    const res = await brain(root, "plan", "SPEC-003", "--json");
    expect(res.stderr).toBe("");
    expect(res.code).toBe(0);
    expect(JSON.parse(res.stdout).overlaps).toEqual([{ phases: ["03", "06"], waves: [1] }]);
  });
});

describe("brain plan, a plan it cannot put in order", () => {
  test("a cycle: it exits 1 and names each blocked-by edge of the cycle", async () => {
    const root = await repo("cycle", "plan-shapes");
    const res = await brain(root, "plan", "SPEC-004");
    expect(res.stdout).toBe("");
    expect(res.stderr).toBe(
      lines(
        "docs/specs/SPEC-004-cycle/tasks/plan.md: cycle: 02 is blocked by 04, 04 by 03, 03 by 02",
      ),
    );
    expect(res.code).toBe(1);
  });

  test("a cycle with --json: it exits 1 and prints no JSON", async () => {
    const root = await repo("cycle-json", "plan-shapes");
    const res = await brain(root, "plan", "SPEC-004", "--json");
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain("cycle: 02 is blocked by 04, 04 by 03, 03 by 02");
    expect(res.code).toBe(1);
  });

  test("a row blocked by itself is a cycle of one row", async () => {
    const plan = "docs/specs/SPEC-001-linear/tasks/plan.md";
    const root = await repo(
      "self-cycle",
      "plan-shapes",
      await edited(
        "plan-shapes",
        plan,
        "| 03 | Write the site folder | task | open | 02 | — |",
        "| 03 | Write the site folder | task | open | 03 | — |",
      ),
    );
    const res = await brain(root, "plan", "SPEC-001");
    expect(res.stderr).toBe(lines(`${plan}: cycle: 03 is blocked by 03`));
    expect(res.code).toBe(1);
  });

  test("an unknown blocker: it exits 1 and names the row and the blocker", async () => {
    const plan = "docs/specs/SPEC-001-linear/tasks/plan.md";
    const root = await repo(
      "unknown-blocker",
      "plan-shapes",
      await edited(
        "plan-shapes",
        plan,
        "| 03 | Write the site folder | task | open | 02 | — |",
        "| 03 | Write the site folder | task | open | 09 | — |",
      ),
    );
    const res = await brain(root, "plan", "SPEC-001");
    expect(res.stdout).toBe("");
    expect(res.stderr).toBe(
      lines(`${plan}: row 03: blocked by 09, which is not a row in this plan`),
    );
    expect(res.code).toBe(1);
  });

  test("a row blocked by a superseded row never starts: it exits 1 and names each such edge", async () => {
    const plan = "docs/specs/SPEC-001-linear/tasks/plan.md";
    const root = await repo(
      "superseded-blocker",
      "plan-shapes",
      await edited(
        "plan-shapes",
        plan,
        "| 02 | Render a note's Markdown as HTML | task | in-progress | 01 | — |",
        "| 02 | Render a note's Markdown as HTML | task | superseded by 05 | 01 | — |\n| 05 | Render with the new engine | task | open | 01 | — |",
      ),
    );
    const res = await brain(root, "plan", "SPEC-001");
    expect(res.stdout).toBe("");
    // Checkpoint 04 lists 02 among its blockers too.
    expect(res.stderr).toBe(
      lines(
        `${plan}: row 03: blocked by 02, which is superseded by 05`,
        `${plan}: row 04: blocked by 02, which is superseded by 05`,
      ),
    );
    expect(res.code).toBe(1);
  });
});

describe("brain plan, which spec it reads", () => {
  test("the git branch names a spec: it reads that spec's plan", async () => {
    const root = await repo("branch", "plan-shapes");
    Bun.spawnSync(["git", "checkout", "--quiet", "-b", "feat/wide"], { cwd: root });
    const res = await brain(root, "plan");
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe(wide);
    expect(res.code).toBe(0);
  });

  test("several efforts are not finished: it names them and exits 2", async () => {
    const root = await repo("several", "plan-shapes");
    const res = await brain(root, "plan");
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain(
      "several efforts are not finished: SPEC-001, SPEC-002, SPEC-003, SPEC-004; name the spec to plan",
    );
    expect(res.stderr).toContain("usage: brain plan");
    expect(res.code).toBe(2);
  });

  test("the active effort is an idea: it says an idea has no plan and exits 2", async () => {
    const root = await repo("idea", "idea-mid-define");
    const res = await brain(root, "plan");
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain(
      "the active effort is IDEA-001, an idea, which has no plan; name the spec to plan",
    );
    expect(res.code).toBe(2);
  });

  test("no effort is active: it says so and exits 2", async () => {
    const root = await repo("none", "no-active-work");
    const res = await brain(root, "plan");
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain("no active effort; name the spec to plan");
    expect(res.code).toBe(2);
  });

  test("a spec ID with no spec folder: it names the ID and exits 2", async () => {
    const root = await repo("unknown-spec", "plan-shapes");
    const res = await brain(root, "plan", "SPEC-009");
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain("no spec SPEC-009 in docs/specs");
    expect(res.code).toBe(2);
  });

  test("a spec ID that two spec folders take: it names both folders and exits 2", async () => {
    const plan = "docs/specs/SPEC-002-wide/tasks/plan.md";
    const root = await repo("two-folders", "plan-shapes", {
      "docs/specs/SPEC-002-wide-copy/tasks/plan.md": await Bun.file(
        `${fixtures}/plan-shapes/${plan}`,
      ).text(),
    });
    const res = await brain(root, "plan", "SPEC-002");
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain(
      "SPEC-002 names more than one spec folder (docs/specs/SPEC-002-wide, docs/specs/SPEC-002-wide-copy); name the folder",
    );
    expect(res.code).toBe(2);
  });

  test("a path with no plan: it names the path and exits 2", async () => {
    const root = await repo("no-plan", "plan-shapes");
    const res = await brain(root, "plan", "docs/agents");
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain("no tasks/plan.md in docs/agents");
    expect(res.code).toBe(2);
  });

  test.each([
    ["an unknown option", ["--frobnicate"]],
    ["two specs", ["SPEC-001", "SPEC-002"]],
  ])("bad usage, %s: it prints the usage and exits 2", async (_what, args) => {
    const root = await repo(`usage-${Bun.hash(args.join(" "))}`, "plan-shapes");
    const res = await brain(root, "plan", ...args);
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain("usage: brain plan");
    expect(res.code).toBe(2);
  });

  test("brain's own usage names the plan command", async () => {
    const root = await repo("brain-usage", "plan-shapes");
    const res = await brain(root);
    expect(res.stderr).toMatch(/^ {2}plan /mu);
    expect(res.code).toBe(2);
  });
});

describe("brain plan is read-only", () => {
  test("the tree, .git included, hashes the same before and after every kind of run", async () => {
    const root = await repo("read-only", "plan-shapes");
    const before = await treeHash(root);
    await brain(root, "plan", "SPEC-002");
    await brain(root, "plan", "SPEC-003", "--json");
    await brain(root, "plan", "SPEC-004");
    await brain(root, "plan");
    expect(await treeHash(root)).toBe(before);
  });
});
