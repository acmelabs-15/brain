import { afterEach, expect, test } from "bun:test";
import { lstat, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import {
  allowedArtifactWrite,
  allowedCommand,
  allowedSkill,
  sessionInvocation,
  selectedBrainSkills,
} from "../interview-driver";
import { reserveBudget, runEvaluation, settleBudget } from "../interview-evaluation";
import { keystoneCases, scaffoldKeystone } from "../keystone-cases";
import { policySummary } from "../keystone-preflight";
import { prepareSnapshot, snapshotSourceAllowed, verifySnapshotSource } from "../keystone-snapshot";

const roots: string[] = [];
afterEach(async () => {
  await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

test("only selected Brain skill names can reach the native Skill tool", () => {
  expect(allowedSkill({ skill: "brain:using-brain" })).toBe(true);
  expect(allowedSkill({ skill: "other:using-brain" })).toBe(false);
  expect(allowedSkill({ skill: "brain:shipping-and-launch" })).toBe(true);
  expect(allowedSkill({ skill: "brain:build" })).toBe(true);
  expect(allowedSkill({ skill: "brain:unreviewed-extra-skill" })).toBe(false);
  expect(allowedSkill({ skill: "using-brain" })).toBe(false);
});

test("startup hooks and no-question profile retain explicit isolation arguments", () => {
  const options = {
    cwd: "/fixture/work",
    plugin: "/fixture/plugin",
    output: "/fixture/result",
    prompt: "Continue",
    answers: [],
    hooks: true,
    nativeQuestions: false,
  };
  const { args, env } = sessionInvocation(options);
  const value = (flag: string) => args[args.indexOf(flag) + 1] ?? "";
  expect(args).toContain("--restricted");
  expect(value("--permission-mode")).toBe("manual");
  expect(value("--max-budget-usd")).toBe("2");
  expect(value("--setting-sources")).toBe("");
  expect(args).toContain("--strict-mcp-config");
  expect(JSON.parse(value("--mcp-config"))).toEqual({ mcpServers: {} });
  expect(args).toContain("--include-hook-events");
  expect(value("--tools")).not.toContain("AskUserQuestion");
  const settings = JSON.parse(value("--settings"));
  expect(settings.disableAllHooks).toBe(false);
  expect(settings.permissions.ask).toContain("Skill");
  expect(env.CLAUDE_CODE_DISABLE_CLAUDE_MDS).toBe("1");
  expect(env.CLAUDE_CODE_DISABLE_AUTO_MEMORY).toBe("1");
  expect(env.CODEX_HOME).toBe("/fixture/work/codex");
  expect(env.BASH_ENV).toBeUndefined();
});

test("setup profile exposes only fixed consumer guidance writes and bounded script calls", () => {
  const brain = "/fixture/plugin/scripts/brain.ts";
  const cwd = "/fixture/work";
  const write = 'bun "/fixture/plugin/scripts/setup/write.ts" --root .';
  expect(allowedCommand(write, brain)).toBe(false);
  expect(allowedCommand(`${write} --dry-run`, brain, [], true, cwd)).toBe(false);
  expect(allowedCommand(`${write} --no-codex --dry-run`, brain, [], true, cwd)).toBe(true);
  expect(
    allowedCommand(
      `${write} --codex-home /fixture/work/codex --codex-scope global`,
      brain,
      [],
      true,
      cwd,
    ),
  ).toBe(true);
  expect(
    allowedCommand(`${write} --codex-home /real/home/.codex --dry-run`, brain, [], true, cwd),
  ).toBe(false);
  expect(
    allowedCommand(
      'bun "/fixture/plugin/scripts/setup/write.ts" --root /outside',
      brain,
      [],
      true,
      cwd,
    ),
  ).toBe(false);
  expect(allowedCommand(`${write}; touch /tmp/x`, brain, [], true, cwd)).toBe(false);
  expect(
    allowedCommand(
      'bun "/fixture/plugin/scripts/setup/capabilities.ts" --root . --skills "brain:using-brain,brain:setup-brain" --dry-run',
      brain,
      [],
      true,
      cwd,
    ),
  ).toBe(true);
  expect(
    allowedCommand(
      'bun "/fixture/plugin/scripts/setup/capabilities.ts" --root . --skills "brain:build,brain:status,brain:setup-brain,plugin-authoring" --dry-run',
      brain,
      [],
      true,
      cwd,
    ),
  ).toBe(true);
  expect(allowedSkill({ skill: "plugin-authoring" })).toBe(false);
  expect(
    allowedArtifactWrite({ file_path: "docs/agents/workspace.md" }, "/fixture/work", true),
  ).toBe(true);
  expect(allowedArtifactWrite({ file_path: "AGENTS.md" }, "/fixture/work", true)).toBe(false);
  expect(allowedArtifactWrite({ file_path: "codex/AGENTS.md" }, "/fixture/work", true)).toBe(false);
  expect(allowedArtifactWrite({ file_path: "scripts/setup/write.ts" }, "/fixture/work", true)).toBe(
    false,
  );
});

test("snapshot selection excludes private records, fixtures, credentials and unrelated plugin surfaces", () => {
  for (const file of [
    "docs/ideas/IDEA-001-real.md",
    "docs/research/RES-001-real.md",
    "docs/decisions/DEC-001-real.md",
    "docs/intent/private.md",
    ".git/config",
    ".env",
    ".claude/settings.json",
    "AGENTS.md",
    "CLAUDE.md",
    "scripts/workspace/__tests__/fixtures/x.md",
    "scripts/evals/interview-driver.ts",
    "skills/private-non-catalog/SKILL.md",
  ]) {
    expect(snapshotSourceAllowed(file)).toBe(false);
  }
  for (const file of [
    "skills/setup-brain/SKILL.md",
    "skills/ask-user-question/references/selection.md",
    "scripts/hooks/session-start.ts",
    "scripts/setup/write.ts",
    "scripts/workspace/status.ts",
    "scripts/workspace/templates/IDEA.md",
    "skills/shipping-and-launch/SKILL.md",
    ".claude/commands/build.md",
    "agents/code-reviewer.md",
    "output-styles/talk-plain.md",
    "docs/agents.md",
    "LICENSE",
    "licenses/agent-skills-security.LICENSE",
  ]) {
    expect(snapshotSourceAllowed(file)).toBe(true);
  }
});

test("the persistent ledger reserves retries and refuses a pair that crosses the total cap", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-eval-budget-`);
  roots.push(root);
  const file = `${root}/ledger.json`;
  for (let i = 0; i < 10; i += 1) {
    await reserveBudget(file, 3, 32);
  }
  await expect(reserveBudget(file, 3, 32)).rejects.toThrow("budget");
  const ledger = await Bun.file(file).json();
  expect(ledger.reservedUsd).toBe(30);
});

test("keystone evaluation refuses execution without explicit approval before any model process", async () => {
  await expect(
    runEvaluation({
      suite: "keystone",
      baseline: "/missing",
      candidate: "/missing",
      output: "/missing",
      approved: false,
    }),
  ).rejects.toThrow("explicit approval");
});

test("allowed setup commands and new-doc keep real side effects inside the invented consumer", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-eval-side-effects-`);
  roots.push(root);
  const cwd = `${root}/fixture`;
  const plugin = `${import.meta.dir}/../../..`;
  const c = keystoneCases.find((entry) => entry.fixture === "fresh");
  if (c === undefined) {
    throw new Error("fresh fixture missing");
  }
  await scaffoldKeystone(c, cwd, plugin);
  const outside = `${root}/outside-codex/AGENTS.md`;
  await Bun.write(outside, "# Outside fixture sentinel\n");
  const brain = `${plugin}/scripts/brain.ts`;
  const base = `bun "${plugin}/scripts/setup/write.ts" --root . --codex-home "${cwd}/codex"`;
  expect(allowedCommand(`${base} --dry-run`, brain, [], true, cwd)).toBe(true);
  const env = {
    ...process.env,
    CODEX_HOME: `${root}/outside-codex`,
    GIT_CONFIG_GLOBAL: "/dev/null",
    GIT_CONFIG_NOSYSTEM: "1",
  };
  const dry = Bun.spawnSync(
    [
      "bun",
      `${plugin}/scripts/setup/write.ts`,
      "--root",
      ".",
      "--codex-home",
      `${cwd}/codex`,
      "--dry-run",
    ],
    { cwd, env },
  );
  expect(dry.exitCode).toBe(0);
  expect(dry.stdout.toString()).not.toContain("outside-codex");
  const write = Bun.spawnSync(
    ["bun", `${plugin}/scripts/setup/write.ts`, "--root", ".", "--codex-home", `${cwd}/codex`],
    { cwd, env },
  );
  expect(write.exitCode).toBe(0);
  expect(await Bun.file(outside).text()).toBe("# Outside fixture sentinel\n");
  const create = Bun.spawnSync(["bun", brain, "new-doc", "DEC", "fixture-decision"], { cwd, env });
  expect(create.exitCode).toBe(0);
  const claim = await lstat(`${cwd}/.git/brain/ids/DEC/001`);
  expect(claim.isDirectory()).toBe(true);
});

test("policy preflight reports structure while withholding policy values and commands", () => {
  const summary = policySummary({
    hooks: { SessionStart: [{ hooks: [{ command: "SECRET-COMMAND-MARKER" }] }] },
    env: { API_TOKEN: "SECRET-TOKEN-MARKER" },
    apiKeyHelper: "SECRET-HELPER-MARKER",
    enabledPlugins: { "private-plugin-identity": true },
  });
  expect(summary.hookEventCounts).toEqual({ SessionStart: 1 });
  expect(summary.configuredPluginCount).toBe(1);
  const text = JSON.stringify(summary);
  expect(text).not.toContain("SECRET-");
  expect(text).not.toContain("private-plugin-identity");
  expect(text).not.toContain("API_TOKEN");
});

test("the multi-effort scaffold gives the second idea its distinct retention question", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-eval-multi-`);
  roots.push(root);
  const c = keystoneCases.find((entry) => entry.fixture === "multi");
  if (c === undefined) {
    throw new Error("multi-effort fixture missing");
  }
  await scaffoldKeystone(c, root, `${import.meta.dir}/../../..`);
  const second = await Bun.file(`${root}/docs/ideas/IDEA-002-backup.md`).text();
  expect(second).toContain(
    "| 01 | Keep backups for seven or thirty days? | interview | open | — | — |",
  );
  expect(second).not.toContain("CSV or Markdown");
  expect(second).toContain("choose how long local note backups remain available");
  expect(second).toContain("An accepted decision about local backup retention");
});

test.each([
  [1.8, 1],
  [null, 1],
])("cost reconciliation blocks another pair for %j", async (first, second) => {
  const root = await mkdtemp(`${tmpdir()}/brain-eval-reconcile-`);
  roots.push(root);
  const file = `${root}/ledger.json`;
  await reserveBudget(file, 3, 32);
  await expect(settleBudget(file, [first, second], 1.5)).rejects.toThrow("stop further paid pairs");
  const state = await Bun.file(file).json();
  expect(state.blocked).toBe(true);
  expect(state.reservedUsd).toBeCloseTo(first === null ? 3 : 3.3);
  await expect(reserveBudget(file, 3, 32)).rejects.toThrow("budget");
});

test.each([-1, 1])("an invalid ledger total %j cannot fund a pair", async (total) => {
  const root = await mkdtemp(`${tmpdir()}/brain-eval-invalid-ledger-`);
  roots.push(root);
  const file = `${root}/ledger.json`;
  await Bun.write(file, JSON.stringify({ reservedUsd: total, reservations: [] }));
  await expect(reserveBudget(file, 3, 32)).rejects.toThrow("ledger invalid");
});

test("source freshness catches new public files and catalog entries before looking only at old hashes", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-eval-source-set-`);
  roots.push(root);
  const source = `${root}/source`;
  await Bun.write(`${source}/package.json`, '{"name":"fixture-brain"}');
  await Bun.write(
    `${source}/.claude-plugin/plugin.json`,
    '{"name":"brain","hooks":"./scripts/hooks/claude-code.json"}',
  );
  for (const skill of selectedBrainSkills) {
    const name = skill.slice("brain:".length);
    await Bun.write(
      `${source}/skills/${name}/SKILL.md`,
      `---\nname: ${name}\ndescription: Fixture.\n---\n# Fixture\n`,
    );
  }
  Bun.spawnSync(["git", "init", "--quiet", "--template=", source], {
    env: { ...process.env, GIT_CONFIG_GLOBAL: "/dev/null", GIT_CONFIG_NOSYSTEM: "1" },
  });
  Bun.spawnSync(["git", "add", "."], { cwd: source });
  await prepareSnapshot(source, `${root}/snapshot`);
  await verifySnapshotSource(source, `${root}/snapshot`);
  await Bun.write(`${source}/docs/install/new-public-guide.md`, "# New guide\n");
  await expect(verifySnapshotSource(source, `${root}/snapshot`)).rejects.toThrow(
    "unreviewed public-support path",
  );
  await rm(`${source}/docs`, { recursive: true });
  await Bun.write(`${source}/skills/new-skill/SKILL.md`, "# New skill\n");
  await expect(verifySnapshotSource(source, `${root}/snapshot`)).rejects.toThrow("catalog changed");
});
