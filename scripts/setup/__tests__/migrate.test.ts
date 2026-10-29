import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { chmod, mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkDoc } from "../../workspace/schema";
import { migrate } from "../migrate";

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

/** A git repo holding `files`, committed on 2026-09-19 by a test identity that signs nothing. */
async function gitRepo(name: string, files: Record<string, string | Uint8Array>): Promise<string> {
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
  await put(root, files);
  commitAll(root, "init");
  return root;
}

const bytes = (root: string, path: string) => Bun.file(`${root}/${path}`).bytes();

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
});
