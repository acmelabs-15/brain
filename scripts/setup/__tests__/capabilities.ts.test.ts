import { afterEach, expect, test } from "bun:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

const roots: string[] = [];
const brain = `${import.meta.dir}/../../..`;

afterEach(async () => {
  await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

test("capability refresh reports changed values and preserves the repo's file", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-capability-drift-`);
  roots.push(root);
  const before = [
    "# Capabilities",
    "",
    "## Toolchain",
    "",
    "| Command | Version | From |",
    "|---|---|---|",
    "| `bun --version` | `~1.3.0` | `engines` in `package.json` |",
    "",
    "## Servers",
    "",
    "| Server | Configured in | Prove with |",
    "|---|---|---|",
    "| `docs` | `.gemini/settings.json` | `read_docs` |",
    "",
  ].join("\n");
  await Bun.write(`${root}/docs/agents/capabilities.md`, before);
  await Bun.write(`${root}/package.json`, JSON.stringify({ engines: { bun: "~1.4.0" } }));
  await Bun.write(`${root}/.mcp.json`, JSON.stringify({ mcpServers: { docs: {} } }));
  const run = Bun.spawnSync([
    "bun",
    `${brain}/scripts/setup/capabilities.ts`,
    "--root",
    root,
    "--skills",
    "",
    "--dry-run",
  ]);
  expect(run.exitCode).toBe(0);
  expect(run.stdout.toString()).toContain("changed Toolchain:");
  expect(run.stdout.toString()).toContain("`~1.4.0`");
  expect(run.stdout.toString()).toContain("changed Servers:");
  expect(run.stdout.toString()).toContain("| `docs` | `.mcp.json` | `read_docs` |");
  expect(await Bun.file(`${root}/docs/agents/capabilities.md`).text()).toBe(before);
});

test("distinct source rows for one tool do not produce false capability drift", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-capability-sources-`);
  roots.push(root);
  const before = [
    "# Capabilities",
    "",
    "## Toolchain",
    "",
    "| Command | Version | From |",
    "|---|---|---|",
    "| `bun --version` | `1.4.4` | `packageManager` in `package.json` |",
    "| `bun --version` | `~1.4.0` | `engines` in `package.json` |",
    "",
  ].join("\n");
  await Bun.write(`${root}/docs/agents/capabilities.md`, before);
  await Bun.write(
    `${root}/package.json`,
    JSON.stringify({
      packageManager: "bun@1.4.4",
      engines: { bun: "~1.4.0" },
    }),
  );
  const run = Bun.spawnSync([
    "bun",
    `${brain}/scripts/setup/capabilities.ts`,
    "--root",
    root,
    "--skills",
    "",
    "--dry-run",
  ]);
  expect(run.exitCode).toBe(0);
  expect(run.stdout.toString()).not.toContain("changed Toolchain:");
  expect(await Bun.file(`${root}/docs/agents/capabilities.md`).text()).toBe(before);
});

test("capability comparisons keep identically named entries in their own sections", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-capability-sections-`);
  roots.push(root);
  const before = [
    "# Capabilities",
    "",
    "## Library skills",
    "",
    "| Library | Skills |",
    "|---|---|",
    "| `docs` | `docs:*` |",
    "",
    "## Servers",
    "",
    "| Server | Configured in | Prove with |",
    "|---|---|---|",
    "| `docs` | `.mcp.json` | `read_docs` |",
    "",
  ].join("\n");
  await Bun.write(`${root}/docs/agents/capabilities.md`, before);
  await Bun.write(`${root}/package.json`, JSON.stringify({ dependencies: { docs: "1.0.0" } }));
  await Bun.write(`${root}/.mcp.json`, JSON.stringify({ mcpServers: { docs: {} } }));
  const run = Bun.spawnSync([
    "bun",
    `${brain}/scripts/setup/capabilities.ts`,
    "--root",
    root,
    "--skills",
    "docs:read",
    "--dry-run",
  ]);
  expect(run.exitCode).toBe(0);
  expect(run.stdout.toString()).not.toMatch(/^changed /mu);
  expect(run.stdout.toString()).not.toContain("not named ");
  expect(await Bun.file(`${root}/docs/agents/capabilities.md`).text()).toBe(before);
});

test("a newly declared source for the same tool is added without replacing the existing pin", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-capability-new-source-`);
  roots.push(root);
  const before =
    "# Capabilities\n\n## Toolchain\n\n| Command | Version | From |\n|---|---|---|\n| `bun --version` | `1.4.4` | `packageManager` in `package.json` |\n";
  await Bun.write(`${root}/docs/agents/capabilities.md`, before);
  await Bun.write(
    `${root}/package.json`,
    JSON.stringify({ packageManager: "bun@1.4.4", engines: { bun: "~1.4.0" } }),
  );
  const run = Bun.spawnSync([
    "bun",
    `${brain}/scripts/setup/capabilities.ts`,
    "--root",
    root,
    "--skills",
    "",
    "--dry-run",
  ]);
  expect(run.exitCode).toBe(0);
  expect(run.stdout.toString()).toContain(
    "not named Toolchain: | `bun --version` | `~1.4.0` | `engines` in `package.json` |",
  );
  expect(run.stdout.toString()).not.toContain("changed Toolchain:");
  expect(await Bun.file(`${root}/docs/agents/capabilities.md`).text()).toBe(before);
});
