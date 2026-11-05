import { afterEach, expect, test } from "bun:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { writeSetup } from "../write";

const roots: string[] = [];
const brain = `${import.meta.dir}/../../..`;

test("setup refreshes an older workspace with session guidance and retains its settings", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-workspace-guidance-`);
  roots.push(root);
  const old =
    "---\nlayout: 2\npaths:\n  decisions: records/decisions\n  research: records/research\n  ideas: records/ideas\n  specs: records/specs\nmax_parallel: 3\n---\n# Workspace\n\n## Resume\nRead the active map.\n";
  const file = `${root}/docs/agents/workspace.md`;
  await Bun.write(file, old);
  await writeSetup({ root, brain, layout: "single", dryRun: false, codexHome: null });
  const updated = await Bun.file(file).text();
  expect(updated).toContain("## Session state");
  expect(updated).toContain("brain status --json");
  expect(updated.split("---")[1]).toBe(old.split("---")[1]);
});

afterEach(async () => {
  await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

test("setup creates no status note and preserves a legacy note as history", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-retire-note-`);
  roots.push(root);
  const input = { root, brain, layout: "single" as const, dryRun: false, codexHome: null };
  await writeSetup(input);
  expect(await Bun.file(`${root}/docs/STATUS.md`).exists()).toBe(false);

  const note =
    "# Status\n\nNext: review the pending report.\nWaiting on the user: approve the report.\n";
  await Bun.write(`${root}/docs/STATUS.md`, note);
  const changes = await writeSetup(input);
  expect(changes).toContainEqual({
    path: "docs/STATUS.md -> docs/agents/history/STATUS.md",
    action: "moved",
  });
  expect(await Bun.file(`${root}/docs/agents/history/STATUS.md`).text()).toBe(note);
  expect(await Bun.file(`${root}/docs/STATUS.md`).exists()).toBe(false);
  const again = await writeSetup(input);
  expect(again.every((change) => change.action === "unchanged")).toBe(true);
});

test("a dry run leaves the legacy note in place and reports the move", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-retire-note-dry-`);
  roots.push(root);
  await Bun.write(`${root}/docs/STATUS.md`, "Next: review.\n");
  const changes = await writeSetup({
    root,
    brain,
    layout: "single",
    dryRun: true,
    codexHome: null,
  });
  expect(changes).toContainEqual({
    path: "docs/STATUS.md -> docs/agents/history/STATUS.md",
    action: "moved",
  });
  expect(await Bun.file(`${root}/docs/STATUS.md`).text()).toBe("Next: review.\n");
  expect(await Bun.file(`${root}/docs/agents/history/STATUS.md`).exists()).toBe(false);
});

test("different history keeps both notes and reports the collision", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-retire-note-collision-`);
  roots.push(root);
  await Bun.write(`${root}/docs/STATUS.md`, "Next: current review.\n");
  await Bun.write(`${root}/docs/agents/history/STATUS.md`, "Next: previous review.\n");
  const changes = await writeSetup({
    root,
    brain,
    layout: "single",
    dryRun: false,
    codexHome: null,
  });
  expect(changes).toContainEqual({
    path: "docs/STATUS.md",
    action: "skipped",
    note: "docs/agents/history/STATUS.md already holds different history; preserve both before retiring the note",
  });
  expect(await Bun.file(`${root}/docs/STATUS.md`).text()).toBe("Next: current review.\n");
  expect(await Bun.file(`${root}/docs/agents/history/STATUS.md`).text()).toBe(
    "Next: previous review.\n",
  );
});

test("ordinary setup leaves consumer roots and an existing Codex home unchanged", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-host-setup-`);
  roots.push(root);
  const codexHome = `${root}/codex-home`;
  const files = {
    "AGENTS.md": "# Consumer rules\n",
    "CLAUDE.md": "# Consumer Claude rules\n",
    "codex-home/AGENTS.md": "# Personal Codex rules\n",
  };
  for (const [file, text] of Object.entries(files)) {
    await Bun.write(`${root}/${file}`, text);
  }
  const run = Bun.spawnSync(["bun", `${brain}/scripts/setup/write.ts`, "--root", root], {
    env: { ...process.env, CODEX_HOME: codexHome },
  });
  expect(run.exitCode).toBe(0);
  expect(run.stdout.toString()).not.toContain(codexHome);
  for (const [file, text] of Object.entries(files)) {
    expect(await Bun.file(`${root}/${file}`).text()).toBe(text);
  }
  expect(await Bun.file(`${root}/docs/agents/workspace.md`).exists()).toBe(true);
});

test.each([
  ["future", "---\nlayout: 3\n---\n# Future workspace\n", "newer"],
  ["future-crlf", "---\r\nlayout: 3\r\n---\r\n# Future workspace\r\n", "newer"],
  ["invalid", "---\nlayout: 2\nmax_parallel: 0\n---\n# Workspace\n", "max_parallel"],
  ["malformed", "---\npaths: [unfinished\n---\n# Workspace\n", "frontmatter"],
  ["unclosed", "---\nlayout: 3\n# Missing closing delimiter\n", "frontmatter"],
])("%s workspace is refused before any setup write", async (name, workspace, problem) => {
  const root = await mkdtemp(`${tmpdir()}/brain-refuse-${name}-`);
  roots.push(root);
  const files = {
    "docs/agents/workspace.md": workspace,
    "docs/agents/domain.md": "# Existing domain guidance\n",
    "docs/STATUS.md": "# Work still to recover\n",
    "codex-home/AGENTS.md": "# Personal rules\n",
  };
  for (const [file, text] of Object.entries(files)) {
    await Bun.write(`${root}/${file}`, text);
  }
  const run = Bun.spawnSync([
    "bun",
    `${brain}/scripts/setup/write.ts`,
    "--root",
    root,
    "--codex-scope",
    "global",
    "--codex-home",
    `${root}/codex-home`,
  ]);
  expect(run.exitCode).toBe(1);
  expect(run.stderr.toString()).toContain(problem);
  for (const [file, text] of Object.entries(files)) {
    expect(await Bun.file(`${root}/${file}`).text()).toBe(text);
  }
  expect(await Bun.file(`${root}/docs/agents/history/STATUS.md`).exists()).toBe(false);
});

test("refresh keeps the selected domain layout and extra workspace settings", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-refresh-domain-`);
  roots.push(root);
  await writeSetup({ root, brain, layout: "multi", dryRun: false });
  const file = `${root}/docs/agents/workspace.md`;
  const existingWorkspace = await Bun.file(file).text();
  const workspace = existingWorkspace.replace(
    "max_parallel: 8",
    "max_parallel: 3\nteam: design-system\nreview:\n  owner: Peter",
  );
  await Bun.write(file, workspace);
  const run = Bun.spawnSync(["bun", `${brain}/scripts/setup/write.ts`, "--root", root]);
  expect(run.exitCode).toBe(0);
  expect(await Bun.file(`${root}/docs/agents/domain.md`).text()).toContain("Layout: multi-context");
  expect(await Bun.file(file).text()).toBe(workspace);
});

test("a missing template fails before an explicitly selected Codex write", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-setup-preflight-`);
  roots.push(root);
  const plugin = `${root}/plugin`;
  for (const file of ["plain-talk/AGENTS-block.md", "protocol/AGENTS-block.md"]) {
    await Bun.write(`${plugin}/${file}`, await Bun.file(`${brain}/${file}`).text());
  }
  const home = `${root}/codex-home`;
  const before = "# Personal rules\n";
  await Bun.write(`${home}/AGENTS.md`, before);
  await expect(
    writeSetup({
      root,
      brain: plugin,
      dryRun: false,
      codexScope: "global",
      codexHome: home,
    }),
  ).rejects.toThrow();
  expect(await Bun.file(`${home}/AGENTS.md`).text()).toBe(before);
  expect(await Bun.file(`${root}/docs/agents/workspace.md`).exists()).toBe(false);
});

test("refresh preserves a valid CRLF workspace header byte for byte", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-refresh-crlf-`);
  roots.push(root);
  const header =
    "---\r\nlayout: 2 # keep this comment\r\nmax_parallel: 3\r\nteam: design-system\r\n---\r\n";
  const file = `${root}/docs/agents/workspace.md`;
  await Bun.write(file, `${header}# Workspace\r\n\r\nOlder generated guidance.\r\n`);
  const run = Bun.spawnSync(["bun", `${brain}/scripts/setup/write.ts`, "--root", root]);
  expect(run.exitCode).toBe(0);
  const refreshed = await Bun.file(file).text();
  expect(refreshed.slice(0, header.length)).toBe(header);
  expect(refreshed).toContain("## Session state");
});
