import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { chmod, cp, mkdir, mkdtemp, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkDoc } from "../../workspace/schema";
import { migrate, UsageError } from "../migrate";
import type { Change } from "../write";

// The fixture tests run git many times and start bun processes; the default 5 s is too tight.
setDefaultTimeout(60_000);

let work: string;

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-migrate-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

const encode = (text: string) => new TextEncoder().encode(text);

const decPath = "docs/decisions/DEC-001-lint.md";
const resPath = "docs/research/RES-001-layout.md";

/** A 0.8 decision: CRLF line ends, trailing spaces, a byte that is not UTF-8, no final newline. */
const decBytes = new Uint8Array([
  ...encode("# DEC-001: Lint with Oxlint\r\n\r\nDecided 2026-09-19 by Peter.  \r\nCaf"),
  0xe9,
  ...encode(" stays as it is"),
]);
const resText =
  "# RES-001: How brain carries agent-skills\n\nDate: 2026-09-19.\n\n## Findings\n- Claude Code reads plugin.json.\n";

const decHead = "---\nid: DEC-001\nmigrated: 0.8\ndecided: 2026-09-19\n---\n";
const resHead = "---\nid: RES-001\nmigrated: 0.8\ndate: 2026-09-19\n---\n";

/** Run git in `root`, with author and committer dates set to `date`. */
function git(root: string, args: string[], date = "2026-09-19T10:00:00Z") {
  return Bun.spawnSync(["git", ...args], {
    cwd: root,
    env: { ...process.env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date },
  });
}

const gitOut = (root: string, ...args: string[]) => git(root, args).stdout.toString().trim();

async function put(root: string, files: Record<string, string | Uint8Array>): Promise<void> {
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${path}`, body);
  }
}

function commitAll(root: string, message: string, date = "2026-09-19T10:00:00Z"): void {
  git(root, ["add", "-A"], date);
  git(root, ["commit", "-q", "-m", message], date);
}

/** An empty git repo with a test identity that signs nothing. */
async function emptyRepo(name: string): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root, { recursive: true });
  git(root, ["init", "-q"]);
  for (const [key, value] of [
    ["user.name", "test"],
    ["user.email", "test@example.com"],
    ["commit.gpgsign", "false"],
    ["core.autocrlf", "false"],
  ]) {
    git(root, ["config", key as string, value as string]);
  }
  return root;
}

/** A git repo holding `files`, committed on 2026-09-19. */
async function gitRepo(name: string, files: Record<string, string | Uint8Array>): Promise<string> {
  const root = await emptyRepo(name);
  await put(root, files);
  commitAll(root, "init");
  return root;
}

const fixture = `${import.meta.dir}/../../workspace/__tests__/fixtures/layout-0.8`;

/** A git repo holding a copy of the 0.8-layout fixture, committed on 2026-09-19. */
async function fixtureRepo(name: string): Promise<string> {
  const root = await emptyRepo(name);
  await cp(fixture, root, { recursive: true });
  commitAll(root, "init");
  return root;
}

const bytes = (root: string, path: string) => Bun.file(`${root}/${path}`).bytes();
const exists = (full: string) =>
  stat(full).then(
    () => true,
    () => false,
  );

describe("migrate, the frontmatter step", () => {
  test("gives a DEC and a RES their ID, migrated: 0.8 and their first commit's date, and keeps every byte below", async () => {
    const root = await gitRepo("fields", { [decPath]: decBytes, [resPath]: resText });
    const result = await migrate({ root, dryRun: false });
    expect(result.changes).toEqual([
      { path: decPath, action: "updated" },
      { path: resPath, action: "updated" },
    ]);
    const dec = await bytes(root, decPath);
    expect(new TextDecoder().decode(dec.subarray(0, decHead.length))).toBe(decHead);
    expect(dec.subarray(decHead.length)).toEqual(decBytes);
    expect(await Bun.file(`${root}/${resPath}`).text()).toBe(resHead + resText);
  });

  test("writes files that pass the DEC and RES schemas", async () => {
    const root = await gitRepo("schema", { [decPath]: decBytes, [resPath]: resText });
    await migrate({ root, dryRun: false });
    expect(checkDoc("DEC", await Bun.file(`${root}/${decPath}`).text(), "DEC-001")).toEqual([]);
    expect(checkDoc("RES", await Bun.file(`${root}/${resPath}`).text(), "RES-001")).toEqual([]);
  });

  test("takes the date of the file's first commit, before a later edit and a rename", async () => {
    const root = await gitRepo("history", { "docs/decisions/DEC-001-old.md": "# DEC-001: Old\n" });
    await put(root, { "docs/decisions/DEC-001-old.md": "# DEC-001: Old\n\nEdited.\n" });
    commitAll(root, "edit", "2026-10-01T10:00:00Z");
    git(root, ["mv", "docs/decisions/DEC-001-old.md", decPath]);
    commitAll(root, "rename", "2026-10-28T10:00:00Z");
    await migrate({ root, dryRun: false });
    expect(await Bun.file(`${root}/${decPath}`).text()).toBe(
      `${decHead}# DEC-001: Old\n\nEdited.\n`,
    );
  });

  test("writes one commit of its own, which adds the frontmatter lines and nothing else", async () => {
    const root = await gitRepo("commit", { [decPath]: decBytes, [resPath]: resText });
    const result = await migrate({ root, dryRun: false });
    expect(result.commit).toBe(gitOut(root, "rev-parse", "HEAD"));
    expect(gitOut(root, "rev-list", "--count", "HEAD")).toBe("2");
    expect(gitOut(root, "log", "-1", "--format=%s")).toBe(
      "chore: migrate to the brain workspace layout",
    );
    expect(gitOut(root, "show", "--format=", "--numstat", "HEAD")).toBe(
      `5\t0\t${decPath}\n5\t0\t${resPath}`,
    );
    expect(gitOut(root, "status", "--porcelain")).toBe("");
  });

  test("leaves other staged changes out of its commit, still staged", async () => {
    const root = await gitRepo("staged", { [resPath]: resText, "README.md": "# x\n" });
    await put(root, { "README.md": "# y\n" });
    git(root, ["add", "README.md"]);
    await migrate({ root, dryRun: false });
    expect(gitOut(root, "show", "--format=", "--name-only", "HEAD")).toBe(resPath);
    expect(gitOut(root, "status", "--porcelain")).toBe("M  README.md");
  });

  test("a dry run lists every file and writes nothing", async () => {
    const root = await gitRepo("dry", { [decPath]: decBytes, [resPath]: resText });
    const head = gitOut(root, "rev-parse", "HEAD");
    const result = await migrate({ root, dryRun: true });
    expect(result).toEqual({
      changes: [
        { path: decPath, action: "updated" },
        { path: resPath, action: "updated" },
      ],
      commit: null,
    });
    expect(await bytes(root, decPath)).toEqual(decBytes);
    expect(await Bun.file(`${root}/${resPath}`).text()).toBe(resText);
    expect(gitOut(root, "rev-parse", "HEAD")).toBe(head);
  });

  test("lists a file that has frontmatter as unchanged, and a second run writes no commit", async () => {
    const root = await gitRepo("twice", { [decPath]: decBytes, [resPath]: resText });
    await migrate({ root, dryRun: false });
    const head = gitOut(root, "rev-parse", "HEAD");
    const again = await migrate({ root, dryRun: false });
    expect(again).toEqual({
      changes: [
        { path: decPath, action: "unchanged" },
        { path: resPath, action: "unchanged" },
      ],
      commit: null,
    });
    expect(gitOut(root, "rev-parse", "HEAD")).toBe(head);
  });

  test("skips a file git does not track, and one with uncommitted changes, and says why", async () => {
    const root = await gitRepo("untrusted", { [decPath]: decBytes });
    await put(root, { [decPath]: "# DEC-001: Changed\n", [resPath]: resText });
    const head = gitOut(root, "rev-parse", "HEAD");
    const result = await migrate({ root, dryRun: false });
    expect(result).toEqual({
      changes: [
        {
          path: decPath,
          action: "skipped",
          note: "has uncommitted changes; commit them first",
        },
        { path: resPath, action: "skipped", note: "not tracked by git; commit it first" },
      ],
      commit: null,
    });
    expect(await Bun.file(`${root}/${decPath}`).text()).toBe("# DEC-001: Changed\n");
    expect(await Bun.file(`${root}/${resPath}`).text()).toBe(resText);
    expect(gitOut(root, "rev-parse", "HEAD")).toBe(head);
  });

  test("reads the decisions and research folders from workspace.md, and lists only DEC and RES files", async () => {
    const root = await gitRepo("config", {
      "docs/agents/workspace.md":
        "---\nlayout: 2\npaths:\n  decisions: records/decisions\n  research: records/research\n---\n# Workspace\n",
      "records/decisions/DEC-004-pick.md": "# DEC-004: Pick\n",
      "records/decisions/README.md": "# Decisions\n",
      "records/research/RES-007-find.md": "# RES-007: Find\n",
      [decPath]: decBytes,
    });
    const result = await migrate({ root, dryRun: false });
    expect(result.changes).toEqual([
      { path: "records/decisions/DEC-004-pick.md", action: "updated" },
      { path: "records/research/RES-007-find.md", action: "updated" },
    ]);
    expect(await bytes(root, decPath)).toEqual(decBytes);
    expect(await Bun.file(`${root}/records/decisions/README.md`).text()).toBe("# Decisions\n");
  });
});

const specHead = (id: string) => `---\nspec: ${id}\nmigrated: 0.8\n---\n`;

/** Each 0.8 file of the fixture the spec step moves, its new path, and the frontmatter it gains. */
const fixtureMoves = [
  [
    "spec/CAPABILITY-MAP.md",
    "docs/decisions/DEC-002-capability-map-billing.md",
    "---\nid: DEC-002\nmigrated: 0.8\ndecided: 2026-09-19\n---\n",
  ],
  ["spec/SPEC-accounts.md", "docs/specs/SPEC-001-accounts/spec.md", specHead("SPEC-001")],
  ["spec/SPEC-billing.md", "docs/specs/SPEC-002-billing/spec.md", specHead("SPEC-002")],
  ["tasks/plan.md", "docs/specs/SPEC-002-billing/tasks/plan.md", specHead("SPEC-002")],
  ["tasks/todo.md", "docs/specs/SPEC-002-billing/tasks/todo.md", specHead("SPEC-002")],
] as const;

/** The change list of a run on the fixture whose answer puts the plan beside the billing spec. */
const fixtureChanges: Change[] = [
  ...fixtureMoves.map(([from, to]): Change => ({ path: `${from} -> ${to}`, action: "moved" })),
  { path: "docs/decisions/DEC-001-bill-by-calendar-month.md", action: "updated" },
  { path: "docs/research/RES-001-payment-provider-retries.md", action: "updated" },
];

describe("migrate, the spec step", () => {
  test("moves each spec, the capability map, the plan and the todo, and adds frontmatter only", async () => {
    const root = await fixtureRepo("specs");
    const result = await migrate({ root, dryRun: false, planSpec: "spec/SPEC-billing.md" });
    expect(result.changes).toEqual(fixtureChanges);
    for (const [from, to, head] of fixtureMoves) {
      const before = await Bun.file(`${fixture}/${from}`).bytes();
      expect(await bytes(root, to)).toEqual(new Uint8Array([...encode(head), ...before]));
      expect(await exists(`${root}/${from}`)).toBe(false);
    }
  });

  test("writes one commit in which git sees each move as a rename, so history follows the file", async () => {
    const root = await fixtureRepo("renames");
    const result = await migrate({ root, dryRun: false, planSpec: "spec/SPEC-billing.md" });
    expect(result.commit).toBe(gitOut(root, "rev-parse", "HEAD"));
    expect(gitOut(root, "rev-list", "--count", "HEAD")).toBe("2");
    expect(gitOut(root, "status", "--porcelain")).toBe("");
    const renames = gitOut(root, "show", "-M", "--name-status", "--format=", "HEAD")
      .split("\n")
      .filter((line) => line.startsWith("R"))
      .map((line) => line.split("\t").slice(1).join(" -> "));
    expect(renames.toSorted()).toEqual(
      fixtureMoves.map(([from, to]) => `${from} -> ${to}`).toSorted(),
    );
    expect(
      gitOut(
        root,
        "log",
        "--follow",
        "--format=%s",
        "--",
        "docs/specs/SPEC-002-billing/tasks/plan.md",
      ),
    ).toBe("chore: migrate to the brain workspace layout\ninit");
  });

  test("the moved files pass brain check; the one finding left is the 0001 ADR, which this step leaves", async () => {
    const root = await fixtureRepo("check");
    await migrate({ root, dryRun: false, planSpec: "spec/SPEC-billing.md" });
    const run = Bun.spawnSync(["bun", `${import.meta.dir}/../../brain.ts`, "check"], { cwd: root });
    expect(run.stdout.toString()).toBe(
      [
        "docs/decisions/0001-keep-the-ledger-in-postgres.md: name: not DEC-NNN-<slug>.md",
        "2 migrated decisions have no kind: DEC-001, DEC-002",
        "1 finding in 8 workspace files",
        "",
      ].join("\n"),
    );
    expect(run.exitCode).toBe(1);
  });

  test("a dry run lists every move and writes nothing: no file, no folder, no claim, no commit", async () => {
    const root = await fixtureRepo("specs-dry");
    const head = gitOut(root, "rev-parse", "HEAD");
    const result = await migrate({ root, dryRun: true, planSpec: "spec/SPEC-billing.md" });
    expect(result).toEqual({ changes: fixtureChanges, commit: null });
    expect(gitOut(root, "status", "--porcelain")).toBe("");
    expect(await exists(`${root}/docs/specs`)).toBe(false);
    expect(await exists(`${root}/.git/brain`)).toBe(false);
    expect(gitOut(root, "rev-parse", "HEAD")).toBe(head);
  });

  test("one SPEC.md and one plan need no answer: the plan goes with the spec, whose H1 gives the slug", async () => {
    // CRLF line ends, a byte that is not UTF-8 and no final newline: the body must keep each byte.
    const spec = new Uint8Array([
      ...encode("# Spec: Invoice CSV export\r\n\r\nCaf"),
      0xe9,
      ...encode(" stays as it is"),
    ]);
    const root = await gitRepo("single", {
      "SPEC.md": spec,
      "tasks/plan.md": "# Implementation Plan: Invoice CSV export\n",
      "tasks/todo.md": "# Tasks: Invoice CSV export\n",
    });
    const result = await migrate({ root, dryRun: false });
    const folder = "docs/specs/SPEC-001-invoice-csv-export";
    expect(result.changes).toEqual([
      { path: `SPEC.md -> ${folder}/spec.md`, action: "moved" },
      { path: `tasks/plan.md -> ${folder}/tasks/plan.md`, action: "moved" },
      { path: `tasks/todo.md -> ${folder}/tasks/todo.md`, action: "moved" },
    ]);
    expect(await bytes(root, `${folder}/spec.md`)).toEqual(
      new Uint8Array([...encode(specHead("SPEC-001")), ...spec]),
    );
    expect(await Bun.file(`${root}/${folder}/tasks/todo.md`).text()).toBe(
      `${specHead("SPEC-001")}# Tasks: Invoice CSV export\n`,
    );
  });

  test("numbers each spec above the specs and the claims already there, in a dry run as in a real run", async () => {
    const root = await gitRepo("numbers", {
      "SPEC.md": "# Spec: Export\n",
      "docs/specs/SPEC-001-old/spec.md": "---\nspec: SPEC-001\nmigrated: 0.8\n---\n# Spec: Old\n",
    });
    await mkdir(`${root}/.git/brain/ids/SPEC/002`, { recursive: true });
    const moved: Change[] = [
      { path: "SPEC.md -> docs/specs/SPEC-003-export/spec.md", action: "moved" },
    ];
    const dry = await migrate({ root, dryRun: true });
    expect(dry.changes).toEqual(moved);
    const real = await migrate({ root, dryRun: false });
    expect(real.changes).toEqual(moved);
    expect(await exists(`${root}/.git/brain/ids/SPEC/003`)).toBe(true);
  });

  test("several specs and a plan with no answer: refuses before any change, and names the specs", async () => {
    const root = await fixtureRepo("ask");
    const run = migrate({ root, dryRun: false });
    await expect(run).rejects.toBeInstanceOf(UsageError);
    await expect(run).rejects.toThrow(
      "tasks/plan.md and tasks/todo.md belong to one of 2 specs, and only the user can say which: pass --plan-spec with spec/SPEC-accounts.md, spec/SPEC-billing.md or none",
    );
    await run.catch(() => null);
    expect(gitOut(root, "status", "--porcelain")).toBe("");
    expect(await exists(`${root}/.git/brain`)).toBe(false);
  });

  test("an answer that names no spec the run found is refused", async () => {
    const root = await fixtureRepo("wrong-answer");
    const run = migrate({ root, dryRun: true, planSpec: "spec/SPEC-invoices.md" });
    await expect(run).rejects.toBeInstanceOf(UsageError);
    await expect(run).rejects.toThrow(
      "--plan-spec spec/SPEC-invoices.md names no spec: pass spec/SPEC-accounts.md, spec/SPEC-billing.md or none",
    );
    await run.catch(() => null);
  });

  test("the answer none leaves the plan and the todo in tasks/, and says why", async () => {
    const root = await fixtureRepo("none");
    const result = await migrate({ root, dryRun: true, planSpec: "none" });
    const note = "the user named no spec for it; it stays where it is";
    expect(result.changes.filter((change) => change.path.startsWith("tasks/"))).toEqual([
      { path: "tasks/plan.md", action: "skipped", note },
      { path: "tasks/todo.md", action: "skipped", note },
    ]);
  });

  test("a plan with no spec stays where it is, and says why", async () => {
    const root = await gitRepo("no-spec", { "tasks/plan.md": "# Implementation Plan: X\n" });
    const result = await migrate({ root, dryRun: false });
    expect(result.changes).toEqual([
      {
        path: "tasks/plan.md",
        action: "skipped",
        note: "no spec to move it beside; it stays where it is",
      },
    ]);
  });

  test("skips a spec git does not track or that has uncommitted changes, and the plan that belongs to it", async () => {
    const root = await gitRepo("skip", {
      "SPEC.md": "# Spec: Export\n",
      "tasks/plan.md": "# Implementation Plan: Export\n",
    });
    await put(root, {
      "SPEC.md": "# Spec: Export\n\nEdited.\n",
      "spec/SPEC-cli.md": "# Spec: cli\n",
    });
    const head = gitOut(root, "rev-parse", "HEAD");
    const result = await migrate({ root, dryRun: false, planSpec: "SPEC.md" });
    expect(result).toEqual({
      changes: [
        { path: "SPEC.md", action: "skipped", note: "has uncommitted changes; commit them first" },
        {
          path: "spec/SPEC-cli.md",
          action: "skipped",
          note: "not tracked by git; commit it first",
        },
        { path: "tasks/plan.md", action: "skipped", note: "its spec SPEC.md is skipped" },
      ],
      commit: null,
    });
    expect(gitOut(root, "rev-parse", "HEAD")).toBe(head);
  });

  test("leaves a file in spec/ where it is when it is no spec or capability map, or has frontmatter", async () => {
    const root = await gitRepo("others", {
      "spec/README.md": "# Specs\n\nOne spec per module.\n",
      "spec/SPEC-api.md": "---\ntitle: API\n---\n# Spec: api\n",
      "spec/SPEC-cli.md": "# Spec: cli\n",
    });
    const result = await migrate({ root, dryRun: true });
    expect(result.changes).toEqual([
      {
        path: "spec/README.md",
        action: "skipped",
        note: "not a spec or a capability map; it stays where it is",
      },
      {
        path: "spec/SPEC-api.md",
        action: "skipped",
        note: "has frontmatter already; move it by hand",
      },
      { path: "spec/SPEC-cli.md -> docs/specs/SPEC-001-cli/spec.md", action: "moved" },
    ]);
  });
});

describe("write.ts --migrate", () => {
  const writeScript = `${import.meta.dir}/../write.ts`;
  const run = (...args: string[]) => Bun.spawnSync(["bun", writeScript, ...args]);
  // Each test starts bun processes, which take longer than the default 5 s on a busy machine.
  const slow = { timeout: 30_000 };

  test(
    "--dry-run prints each file and writes nothing; a real run prints the commit",
    async () => {
      const root = await gitRepo("cli", { [decPath]: decBytes, [resPath]: resText });
      const dry = run("--migrate", "--root", root, "--dry-run");
      expect(dry.exitCode).toBe(0);
      expect(dry.stdout.toString()).toBe(
        `updated   ${decPath}  (dry run)\nupdated   ${resPath}  (dry run)\n`,
      );
      expect(gitOut(root, "rev-list", "--count", "HEAD")).toBe("1");
      const real = run("--migrate", "--root", root);
      expect(real.exitCode).toBe(0);
      expect(real.stdout.toString()).toBe(
        `updated   ${decPath}\nupdated   ${resPath}\ncommitted ${gitOut(root, "rev-parse", "HEAD")}\n`,
      );
      expect(await bytes(root, decPath)).toEqual(new Uint8Array([...encode(decHead), ...decBytes]));
    },
    slow,
  );

  test(
    "a failed commit exits 1 and leaves every file as it was",
    async () => {
      const root = await gitRepo("cli-fail", { [decPath]: decBytes, [resPath]: resText });
      await put(root, { ".hooks/pre-commit": "#!/usr/bin/env bun\nprocess.exit(1);\n" });
      await chmod(`${root}/.hooks/pre-commit`, 0o755);
      git(root, ["config", "core.hooksPath", ".hooks"]);
      const head = gitOut(root, "rev-parse", "HEAD");
      const failed = run("--migrate", "--root", root);
      expect(failed.exitCode).toBe(1);
      expect(failed.stderr.toString()).toContain("git commit failed");
      expect(await bytes(root, decPath)).toEqual(decBytes);
      expect(await Bun.file(`${root}/${resPath}`).text()).toBe(resText);
      expect(gitOut(root, "rev-parse", "HEAD")).toBe(head);
    },
    slow,
  );

  test("--plan-spec gives the user's answer; the dry run prints each move", async () => {
    const root = await fixtureRepo("cli-plan");
    const dry = run(
      "--migrate",
      "--root",
      root,
      "--plan-spec",
      "spec/SPEC-billing.md",
      "--dry-run",
    );
    expect(dry.exitCode).toBe(0);
    expect(dry.stdout.toString()).toBe(
      fixtureChanges.map((c) => `${c.action.padEnd(9)} ${c.path}  (dry run)\n`).join(""),
    );
  });

  test("several specs and a plan without --plan-spec exit 2, naming the flag", async () => {
    const root = await fixtureRepo("cli-ask");
    const asked = run("--migrate", "--root", root, "--dry-run");
    expect(asked.exitCode).toBe(2);
    expect(asked.stderr.toString()).toContain("pass --plan-spec with spec/SPEC-accounts.md");
    expect(asked.stdout.toString()).toBe("");
  });

  test("--plan-spec without --migrate is bad usage", () => {
    const wrong = run("--root", work, "--plan-spec", "SPEC.md", "--dry-run");
    expect(wrong.exitCode).toBe(2);
    expect(wrong.stderr.toString()).toBe("--plan-spec answers the migrate mode; add --migrate\n");
  });

  test("a failed commit moves every file back, and leaves no folder it made", async () => {
    const root = await fixtureRepo("cli-fail-moves");
    await put(root, { ".hooks/pre-commit": "#!/usr/bin/env bun\nprocess.exit(1);\n" });
    await chmod(`${root}/.hooks/pre-commit`, 0o755);
    git(root, ["config", "core.hooksPath", ".hooks"]);
    const head = gitOut(root, "rev-parse", "HEAD");
    const failed = run("--migrate", "--root", root, "--plan-spec", "spec/SPEC-billing.md");
    expect(failed.exitCode).toBe(1);
    expect(failed.stderr.toString()).toContain("Every file is back as it was.");
    for (const [from, to] of fixtureMoves) {
      expect(await bytes(root, from)).toEqual(await Bun.file(`${fixture}/${from}`).bytes());
      expect(await exists(`${root}/${to}`)).toBe(false);
    }
    expect(await exists(`${root}/docs/specs`)).toBe(false);
    expect(gitOut(root, "status", "--porcelain", "--untracked-files=no")).toBe("");
    expect(gitOut(root, "rev-parse", "HEAD")).toBe(head);
  });
});
