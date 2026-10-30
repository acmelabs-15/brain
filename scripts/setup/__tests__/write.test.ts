import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { lstat, mkdir, mkdtemp, rm, stat, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";

import { endMarker, markersFor, startMarker } from "../../plain-talk/block";
import { readLock } from "../../sync/lib/lock";
import { readConfig } from "../../workspace/config";
import { writeSetup } from "../write";
import type { Change } from "../write";

// The flag tests start a bun process, which takes seconds on a loaded machine.
setDefaultTimeout(60_000);

let work: string;
let brain: string;

const block = `${startMarker}\n## Talk plain\n\nBody v2.\n${endMarker}\n`;
const protocolMarkers = markersFor("protocol");
const protocol = `${protocolMarkers.start}\n## brain protocol\n\nRules v2.\n${protocolMarkers.end}\n`;
/** A Codex file that held nothing before: the plain-talk block, then the protocol block. */
const codexText = `${block}\n${protocol}`;
const workspace = `---
layout: 2
paths:
  decisions: docs/decisions
  research: docs/research
  ideas: docs/ideas
  specs: docs/specs
max_parallel: 8
---
# Workspace

Rules v2.
`;
const seed = "# Status\n\nNo active work. Start with interview-me.\n";
/** What a fresh run writes into the repo, in the order the change list names it. */
const repoFiles = ["docs/agents/domain.md", "docs/agents/workspace.md", "docs/STATUS.md"];
const exists = (p: string) =>
  stat(p).then(
    () => true,
    () => false,
  );

async function repo(name: string, files: Record<string, string> = {}): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root, { recursive: true });
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${path}`, body);
  }
  return root;
}

/** A Codex home directory, with AGENTS.md holding `agents` when given. */
async function codexHome(name: string, agents?: string): Promise<string> {
  const home = `${work}/${name}/.codex`;
  await mkdir(home, { recursive: true });
  if (agents !== undefined) {
    await Bun.write(`${home}/AGENTS.md`, agents);
  }
  return home;
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-setup-`);
  brain = `${work}/brain`;
  await mkdir(`${brain}/plain-talk`, { recursive: true });
  await mkdir(`${brain}/protocol`, { recursive: true });
  await mkdir(`${brain}/skills/setup-brain`, { recursive: true });
  await Bun.write(`${brain}/plain-talk/AGENTS-block.md`, block);
  await Bun.write(`${brain}/protocol/AGENTS-block.md`, protocol);
  await Bun.write(
    `${brain}/skills/setup-brain/domain.md`,
    "# Domain docs\n\nLayout: {{layout}}.\n",
  );
  await Bun.write(`${brain}/skills/setup-brain/workspace.md`, workspace);
  await Bun.write(`${brain}/skills/setup-brain/STATUS.md`, seed);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

const base = { layout: "single" as const, dryRun: false, codexHome: null };

describe("writeSetup, the repo", () => {
  test("in an empty repo it creates domain.md, workspace.md and the STATUS.md seed, and nothing else", async () => {
    const root = await repo("empty");
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes).toEqual(repoFiles.map((path) => ({ path, action: "created" })));
    expect(await Bun.file(`${root}/docs/agents/domain.md`).text()).toBe(
      "# Domain docs\n\nLayout: single-context.\n",
    );
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(workspace);
    expect(await Bun.file(`${root}/docs/STATUS.md`).text()).toBe(seed);
    expect(await exists(`${root}/docs/agents/issue-tracker.md`)).toBe(false);
    expect(await exists(`${root}/docs/agents/triage-labels.md`)).toBe(false);
    expect(await exists(`${root}/AGENTS.md`)).toBe(false);
    expect(await exists(`${root}/CLAUDE.md`)).toBe(false);
    expect(await exists(`${root}/GEMINI.md`)).toBe(false);
  });

  test("a repo's own AGENTS.md, CLAUDE.md and GEMINI.md are left as they are", async () => {
    const files = { "AGENTS.md": "# Mine\n", "CLAUDE.md": "# Claude\n", "GEMINI.md": "# Gemini\n" };
    const root = await repo("untouched", files);
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes.map((c) => c.path)).toEqual(repoFiles);
    for (const [path, body] of Object.entries(files)) {
      expect(await Bun.file(`${root}/${path}`).text()).toBe(body);
    }
  });

  test("a second run reports every file unchanged and writes nothing", async () => {
    const root = await repo("twice");
    await writeSetup({ brain, root, ...base });
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes).toEqual(repoFiles.map((path) => ({ path, action: "unchanged" })));
  });

  test("dry run lists every change and writes nothing", async () => {
    const root = await repo("dry");
    const changes = await writeSetup({ brain, root, ...base, dryRun: true });
    expect(changes.map((c) => `${c.action} ${c.path}`)).toEqual(
      repoFiles.map((path) => `created ${path}`),
    );
    expect(await exists(`${root}/docs`)).toBe(false);
  });

  test("an existing docs/STATUS.md is the agent's handoff note: kept byte for byte", async () => {
    const note = "# Status\n\n- Next: IDEA-001#03. Ask the user about the reader.\n";
    const root = await repo("status-kept", { "docs/STATUS.md": note });
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes).toContainEqual({ path: "docs/STATUS.md", action: "unchanged" });
    expect(await Bun.file(`${root}/docs/STATUS.md`).text()).toBe(note);
  });

  test("multi layout names the map in domain.md", async () => {
    const root = await repo("multi");
    await writeSetup({ brain, root, ...base, layout: "multi" });
    expect(await Bun.file(`${root}/docs/agents/domain.md`).text()).toBe(
      "# Domain docs\n\nLayout: multi-context.\n",
    );
  });
});

describe("writeSetup, the workspace config", () => {
  test("a re-run keeps the repo's folder paths and max_parallel, and brings the template's new text", async () => {
    const before = workspace
      .replace("decisions: docs/decisions", 'decisions: "docs/my decisions"')
      .replace("max_parallel: 8", "max_parallel: 3")
      .replace("Rules v2.", "Rules v1.");
    const root = await repo("workspace-settings", { "docs/agents/workspace.md": before });
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes).toContainEqual({ path: "docs/agents/workspace.md", action: "updated" });
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(
      workspace
        .replace("decisions: docs/decisions", 'decisions: "docs/my decisions"')
        .replace("max_parallel: 8", "max_parallel: 3"),
    );
    const config = await readConfig(root);
    expect(config.paths.decisions).toBe("docs/my decisions");
    const again = await writeSetup({ brain, root, ...base });
    expect(again).toContainEqual({ path: "docs/agents/workspace.md", action: "unchanged" });
  });

  test("a workspace.md whose frontmatter is not valid YAML is skipped with the reason, and kept", async () => {
    const before = "---\npaths: [docs/decisions\n---\n# Workspace\n";
    const root = await repo("workspace-broken", { "docs/agents/workspace.md": before });
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes).toContainEqual({
      path: "docs/agents/workspace.md",
      action: "skipped",
      note: "its frontmatter is not valid YAML; fix it, then run setup-brain again",
    });
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(before);
  });
});

describe("writeSetup, a repo on the brain 0.8 layout", () => {
  const waitsForMigration: Change = {
    path: "docs/agents/workspace.md",
    action: "skipped",
    note: "the repo is on layout 1 (brain 0.9 and earlier): the migrate mode writes this file",
  };

  test("writes domain.md and the seed, and leaves workspace.md to the migrate mode: its layout: 2 marks a migrated repo", async () => {
    const root = await repo("old-layout", { "tasks/plan.md": "# Implementation Plan: X\n" });
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes).toEqual([
      { path: "docs/agents/domain.md", action: "created" },
      waitsForMigration,
      { path: "docs/STATUS.md", action: "created" },
    ]);
    expect(await exists(`${root}/docs/agents/workspace.md`)).toBe(false);
  });

  test.each([
    ["a 0.8 ADR", { "docs/decisions/0001-use-bun.md": "# Use Bun\n" }],
    ["an ADR folder", { "doc/adr/0001-use-bun.md": "# 1. Use Bun\n" }],
    ["a decision record with no frontmatter", { "docs/decisions/DEC-001-x.md": "# DEC-001: X\n" }],
  ])("%s holds workspace.md back too", async (_, files) => {
    const root = await repo(`old-${Object.keys(files)[0]?.replaceAll("/", "-")}`, files);
    expect(await writeSetup({ brain, root, ...base })).toContainEqual(waitsForMigration);
  });

  test("a CONTEXT.md alone does not: the glossary rename has its own question", async () => {
    const root = await repo("old-glossary-only", { "CONTEXT.md": "# Terms\n" });
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes).toContainEqual({ path: "docs/agents/workspace.md", action: "created" });
  });

  test("a workspace.md that records layout: 2 is written as usual, beside 0.8 files the user kept", async () => {
    const root = await repo("migrated-kept", {
      "docs/agents/workspace.md": workspace,
      "docs/intent/kept.md": "# Intent: kept\n",
    });
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes).toContainEqual({ path: "docs/agents/workspace.md", action: "unchanged" });
  });

  test("domain.md names each ADR folder the repo kept, as read-only history, after the decisions line", async () => {
    const shipped = `${import.meta.dir}/../../..`;
    const root = await repo("adr-kept", {
      "docs/agents/workspace.md": workspace,
      "doc/adr/0001-use-bun.md": "# 1. Use Bun\n",
    });
    await writeSetup({ brain: shipped, root, ...base });
    const domain = await Bun.file(`${root}/docs/agents/domain.md`).text();
    const lines = domain.split("\n");
    const decisions = lines.findIndex((line) => line.startsWith("- `docs/decisions/`"));
    expect(lines[decisions + 1]).toBe(
      "- `doc/adr/`: older architecture decisions (ADRs), kept as read-only history. Read the ones that touch your area. Record each new decision in a decision record.",
    );
  });
});

describe("writeSetup, the Codex global file", () => {
  test("a Codex home without AGENTS.md gets one holding plain talk and the protocol, listed first", async () => {
    const root = await repo("codex-new");
    const home = await codexHome("codex-new");
    const changes = await writeSetup({ brain, root, ...base, codexHome: home });
    expect(changes[0]).toEqual({ path: `${home}/AGENTS.md`, action: "created" });
    expect(await Bun.file(`${home}/AGENTS.md`).text()).toBe(codexText);
  });

  test("an existing file keeps every line outside the markers, gets an old block replaced and the protocol added", async () => {
    const root = await repo("codex-existing");
    const before = `# My rules\n\nKeep this.\n\n${startMarker}\n## Talk plain\n\nBody v1.\n${endMarker}\n\nAnd this.\n`;
    const home = await codexHome("codex-existing", before);
    const changes = await writeSetup({ brain, root, ...base, codexHome: home });
    expect(changes[0]).toEqual({ path: `${home}/AGENTS.md`, action: "updated" });
    expect(await Bun.file(`${home}/AGENTS.md`).text()).toBe(
      `# My rules\n\nKeep this.\n\n${block}\nAnd this.\n\n${protocol}`,
    );
  });

  test("an old protocol block is replaced in place, and the text around it is kept", async () => {
    const root = await repo("codex-protocol-old");
    const oldProtocol = `${protocolMarkers.start}\n## brain protocol\n\nRules v1.\n${protocolMarkers.end}\n`;
    const home = await codexHome("codex-protocol-old", `${block}\n${oldProtocol}\n# Mine\n`);
    const changes = await writeSetup({ brain, root, ...base, codexHome: home });
    expect(changes[0]).toEqual({ path: `${home}/AGENTS.md`, action: "updated" });
    expect(await Bun.file(`${home}/AGENTS.md`).text()).toBe(`${codexText}\n# Mine\n`);
  });

  test("a symlinked AGENTS.md stays a symlink and its target gets both blocks", async () => {
    const root = await repo("codex-link");
    const home = await codexHome("codex-link");
    await Bun.write(`${work}/codex-link/AGENTS.md`, "# Home rules\n");
    await symlink("../AGENTS.md", `${home}/AGENTS.md`);
    await writeSetup({ brain, root, ...base, codexHome: home });
    const link = await lstat(`${home}/AGENTS.md`);
    expect(link.isSymbolicLink()).toBe(true);
    expect(await Bun.file(`${work}/codex-link/AGENTS.md`).text()).toBe(
      `# Home rules\n\n${codexText}`,
    );
  });

  test("a missing Codex home is reported as skipped and nothing is created", async () => {
    const root = await repo("codex-missing");
    const home = `${work}/codex-missing/.codex`;
    const changes = await writeSetup({ brain, root, ...base, codexHome: home });
    expect(changes[0]).toEqual({
      path: `${home}/AGENTS.md`,
      action: "skipped",
      note: "no Codex home directory",
    });
    expect(await exists(home)).toBe(false);
  });

  test("codexHome null leaves the Codex step out entirely", async () => {
    const root = await repo("codex-off");
    const changes = await writeSetup({ brain, root, ...base, codexHome: null });
    expect(changes.some((c) => c.path.endsWith(".codex/AGENTS.md"))).toBe(false);
  });

  test("a second run and a dry run leave the Codex file alone", async () => {
    const root = await repo("codex-twice");
    const home = await codexHome("codex-twice", "# Mine\n");
    await writeSetup({ brain, root, ...base, codexHome: home });
    const once = await Bun.file(`${home}/AGENTS.md`).text();
    const again = await writeSetup({ brain, root, ...base, codexHome: home });
    expect(again[0]).toEqual({ path: `${home}/AGENTS.md`, action: "unchanged" });
    const dryHome = await codexHome("codex-dry", "# Mine\n");
    const dry = await writeSetup({ brain, root, ...base, codexHome: dryHome, dryRun: true });
    expect(dry[0]).toEqual({ path: `${dryHome}/AGENTS.md`, action: "updated" });
    expect(await Bun.file(`${dryHome}/AGENTS.md`).text()).toBe("# Mine\n");
    expect(await Bun.file(`${home}/AGENTS.md`).text()).toBe(once);
  });

  test("a start marker without an end marker is an error naming the Codex file", async () => {
    const root = await repo("codex-broken");
    const home = await codexHome("codex-broken", `${startMarker}\nno end\n`);
    await expect(writeSetup({ brain, root, ...base, codexHome: home })).rejects.toThrow(
      `${home}/AGENTS.md has a start marker without an end marker`,
    );
  });

  test("a broken protocol block is an error too, and the file is left as it was", async () => {
    const root = await repo("codex-protocol-broken");
    const before = `${block}\n${protocolMarkers.start}\nno end\n`;
    const home = await codexHome("codex-protocol-broken", before);
    await expect(writeSetup({ brain, root, ...base, codexHome: home })).rejects.toThrow(
      `${home}/AGENTS.md has a start marker without an end marker`,
    );
    expect(await Bun.file(`${home}/AGENTS.md`).text()).toBe(before);
  });
});

describe("writeSetup, Codex project scope", () => {
  test("project scope writes both blocks into the repo AGENTS.md and skips the global file", async () => {
    const root = await repo("scope-project");
    const home = await codexHome("scope-project", "# Mine\n");
    const changes = await writeSetup({
      brain,
      root,
      ...base,
      codexHome: home,
      codexScope: "project",
    });
    expect(changes[0]).toEqual({ path: "AGENTS.md", action: "created" });
    expect(changes.some((c) => c.path === `${home}/AGENTS.md`)).toBe(false);
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(codexText);
    expect(await Bun.file(`${home}/AGENTS.md`).text()).toBe("# Mine\n");
  });

  test("project scope keeps the repo text outside the markers and replaces an old block", async () => {
    const before = `# Repo\n\nKeep.\n\n${startMarker}\nold\n${endMarker}\n\nTail.\n`;
    const root = await repo("scope-project-existing", { "AGENTS.md": before });
    const changes = await writeSetup({ brain, root, ...base, codexScope: "project" });
    expect(changes[0]).toEqual({ path: "AGENTS.md", action: "updated" });
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(
      `# Repo\n\nKeep.\n\n${block}\nTail.\n\n${protocol}`,
    );
  });

  test("project scope: a second run is unchanged, a dry run writes nothing, CLAUDE.md and GEMINI.md stay", async () => {
    const root = await repo("scope-project-twice", { "CLAUDE.md": "# C\n", "GEMINI.md": "# G\n" });
    await writeSetup({ brain, root, ...base, codexScope: "project" });
    const again = await writeSetup({ brain, root, ...base, codexScope: "project" });
    expect(again[0]).toEqual({ path: "AGENTS.md", action: "unchanged" });
    const dry = await repo("scope-project-dry");
    const changes = await writeSetup({
      brain,
      root: dry,
      ...base,
      codexScope: "project",
      dryRun: true,
    });
    expect(changes[0]).toEqual({ path: "AGENTS.md", action: "created" });
    expect(await exists(`${dry}/AGENTS.md`)).toBe(false);
    expect(await Bun.file(`${root}/CLAUDE.md`).text()).toBe("# C\n");
    expect(await Bun.file(`${root}/GEMINI.md`).text()).toBe("# G\n");
  });

  test("the default scope is global", async () => {
    const root = await repo("scope-default");
    const home = await codexHome("scope-default");
    const changes = await writeSetup({ brain, root, ...base, codexHome: home });
    expect(changes[0]).toEqual({ path: `${home}/AGENTS.md`, action: "created" });
    expect(await exists(`${root}/AGENTS.md`)).toBe(false);
  });
});

describe("write.ts --check", () => {
  const writeScript = `${import.meta.dir}/../write.ts`;
  const check = (root: string) =>
    Bun.spawnSync(["bun", writeScript, "--root", root, "--brain", brain, "--no-codex", "--check"]);

  test("on a repo setup-brain has not touched: exit 1, each file named as drift, nothing written", async () => {
    const root = await repo("check-fresh");
    const run = check(root);
    expect(run.exitCode).toBe(1);
    const out = run.stdout.toString();
    for (const path of repoFiles) {
      expect(out).toContain(`created   ${path}`);
    }
    expect(out).toContain("3 files differ from what setup-brain writes: run setup-brain");
    expect(await exists(`${root}/docs`)).toBe(false);
  });

  test("after a run: exit 0, every file unchanged", async () => {
    const root = await repo("check-done");
    await writeSetup({ brain, root, ...base });
    const run = check(root);
    expect(run.exitCode).toBe(0);
    const out = run.stdout.toString();
    for (const path of repoFiles) {
      expect(out).toContain(`unchanged ${path}`);
    }
    expect(out).toContain("every file is in place");
  });

  test("one changed file: exit 1, that file named, the change not undone", async () => {
    const root = await repo("check-drift");
    await writeSetup({ brain, root, ...base });
    await Bun.write(`${root}/docs/agents/domain.md`, "# Mine now\n");
    const run = check(root);
    expect(run.exitCode).toBe(1);
    expect(run.stdout.toString()).toContain("updated   docs/agents/domain.md");
    expect(run.stdout.toString()).toContain("1 file differs from what setup-brain writes");
    expect(await Bun.file(`${root}/docs/agents/domain.md`).text()).toBe("# Mine now\n");
  });

  test("on a repo on the brain 0.8 layout: exit 1, naming what the migrate mode moves, even when the other files are in place", async () => {
    const root = await repo("check-old", {
      "tasks/plan.md": "# Implementation Plan: X\n",
      "docs/decisions/0001-use-bun.md": "# Use Bun\n",
    });
    await writeSetup({ brain, root, ...base });
    const run = check(root);
    expect(run.exitCode).toBe(1);
    expect(run.stdout.toString()).toEndWith(
      "the repo is on layout 1 (brain 0.9 and earlier): run setup-brain to migrate. Found: tasks/plan.md, docs/decisions/0001-use-bun.md\n",
    );
  });

  test("a workspace.md whose frontmatter is not valid YAML is drift: exit 1, its note shown, the file kept", async () => {
    const before = "---\npaths: [docs/decisions\n---\n# Workspace\n";
    const root = await repo("check-broken-yaml", { "docs/agents/workspace.md": before });
    await writeSetup({ brain, root, ...base });
    const run = check(root);
    expect(run.exitCode).toBe(1);
    const out = run.stdout.toString();
    expect(out).toContain(
      "skipped   docs/agents/workspace.md  (its frontmatter is not valid YAML; fix it, then run setup-brain again)",
    );
    expect(out).toEndWith(
      "1 file differs from what setup-brain writes: fix each skipped file by hand, then run setup-brain\n",
    );
    expect(await Bun.file(`${root}/docs/agents/workspace.md`).text()).toBe(before);
  });

  test("no Codex home on this machine is no drift: a run skips that file too, so exit 0", async () => {
    const root = await repo("check-no-codex-home");
    await writeSetup({ brain, root, ...base });
    const home = `${work}/check-no-codex-home/.codex`;
    const run = Bun.spawnSync([
      "bun",
      writeScript,
      "--root",
      root,
      "--brain",
      brain,
      "--codex-home",
      home,
      "--check",
    ]);
    expect(run.exitCode).toBe(0);
    const out = run.stdout.toString();
    expect(out).toContain(`skipped   ${home}/AGENTS.md  (no Codex home directory)`);
    expect(out).toEndWith("every file is in place\n");
  });

  test("--check with --migrate is bad usage: exit 2", () => {
    const run = Bun.spawnSync(["bun", writeScript, "--root", work, "--check", "--migrate"]);
    expect(run.exitCode).toBe(2);
    expect(run.stderr.toString()).toContain("--check");
  });
});

describe("write.ts, the retired tracker flags", () => {
  const writeScript = `${import.meta.dir}/../write.ts`;

  test.each([
    ["--tracker", "local"],
    ["--repo", "acme/app"],
  ])("%s is bad usage: exit 2, the flag named, nothing written", async (flag, value) => {
    const root = await repo(`flag${flag}`);
    const run = Bun.spawnSync([
      "bun",
      writeScript,
      "--root",
      root,
      "--brain",
      brain,
      "--no-codex",
      flag,
      value,
    ]);
    expect(run.exitCode).toBe(2);
    expect(run.stderr.toString()).toContain(`unknown or incomplete flag ${flag}`);
    expect(await exists(`${root}/docs`)).toBe(false);
  });
});

describe("the shipped ADR folder", () => {
  const shipped = `${import.meta.dir}/../../..`;

  test("domain.md names docs/decisions/, the folder agent-skills uses", async () => {
    const root = await repo("shipped-domain");
    await writeSetup({ brain: shipped, root, ...base });
    const domain = await Bun.file(`${root}/docs/agents/domain.md`).text();
    expect(domain).toContain("`docs/decisions/`");
  });

  test("domain-modeling writes decision records to docs/decisions/ through brain new-doc", async () => {
    const format = await Bun.file(`${shipped}/skills/domain-modeling/DEC-FORMAT.md`).text();
    expect(format).toContain("`docs/decisions/` by default");
    expect(format).toContain("brain new-doc DEC <slug>");
  });

  test("no brain-owned skill file names docs/adr/", async () => {
    const lock = await readLock(`${shipped}/upstream.lock.json`);
    const naming: string[] = [];
    for await (const path of new Bun.Glob("skills/**/*.md").scan({ cwd: shipped })) {
      if (path in lock.files) {
        continue;
      }
      const text = await Bun.file(`${shipped}/${path}`).text();
      if (text.includes("docs/adr/")) {
        naming.push(path);
      }
    }
    expect(naming.toSorted()).toEqual([]);
  });
});

/** A git repo holding `files`, all committed, so `git mv` can move them. */
async function gitRepo(name: string, files: Record<string, string>): Promise<string> {
  const root = await repo(name, files);
  const git = (...args: string[]) => Bun.spawnSync(["git", ...args], { cwd: root });
  git("init", "-q");
  git("add", ".");
  git("-c", "user.name=test", "-c", "user.email=test@example.com", "commit", "-q", "-m", "init");
  return root;
}

const gitStatus = (root: string) =>
  Bun.spawnSync(["git", "status", "--porcelain"], { cwd: root }).stdout.toString();

describe("writeSetup, the glossary rename", () => {
  test("renameGlossary moves CONTEXT.md and CONTEXT-MAP.md with git mv", async () => {
    const root = await gitRepo("rename", {
      "CONTEXT.md": "# Terms\n",
      "CONTEXT-MAP.md": "# Map\n",
    });
    const changes = await writeSetup({ brain, root, ...base, renameGlossary: true });
    expect(changes.slice(0, 2)).toEqual([
      { path: "CONTEXT.md -> GLOSSARY.md", action: "moved" },
      { path: "CONTEXT-MAP.md -> GLOSSARY-MAP.md", action: "moved" },
    ]);
    expect(await Bun.file(`${root}/GLOSSARY.md`).text()).toBe("# Terms\n");
    expect(await exists(`${root}/CONTEXT.md`)).toBe(false);
    expect(gitStatus(root)).toContain("R  CONTEXT.md -> GLOSSARY.md");
    expect(gitStatus(root)).toContain("R  CONTEXT-MAP.md -> GLOSSARY-MAP.md");
  });

  test("a dry run lists the move and moves nothing", async () => {
    const root = await gitRepo("rename-dry", { "CONTEXT.md": "# Terms\n" });
    const changes = await writeSetup({ brain, root, ...base, dryRun: true, renameGlossary: true });
    expect(changes[0]).toEqual({ path: "CONTEXT.md -> GLOSSARY.md", action: "moved" });
    expect(await exists(`${root}/CONTEXT.md`)).toBe(true);
    expect(await exists(`${root}/GLOSSARY.md`)).toBe(false);
  });

  test("without renameGlossary an existing CONTEXT.md stays where it is", async () => {
    const root = await gitRepo("rename-off", { "CONTEXT.md": "# Terms\n" });
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes.some((c) => c.action === "moved")).toBe(false);
    expect(await exists(`${root}/CONTEXT.md`)).toBe(true);
  });

  test("an existing GLOSSARY.md is never overwritten; the move is skipped", async () => {
    const root = await gitRepo("rename-both", {
      "CONTEXT.md": "# Old\n",
      "GLOSSARY.md": "# New\n",
    });
    const changes = await writeSetup({ brain, root, ...base, renameGlossary: true });
    expect(changes[0]).toEqual({
      path: "CONTEXT.md -> GLOSSARY.md",
      action: "skipped",
      note: "GLOSSARY.md already exists",
    });
    expect(await Bun.file(`${root}/GLOSSARY.md`).text()).toBe("# New\n");
    expect(await exists(`${root}/CONTEXT.md`)).toBe(true);
  });
});

describe("writeSetup, a glossary file git does not track", () => {
  test("an untracked CONTEXT.md is skipped with a note, and stays", async () => {
    const root = await gitRepo("rename-untracked", { "README.md": "# x\n" });
    await Bun.write(`${root}/CONTEXT.md`, "# Terms\n");
    for (const dryRun of [true, false]) {
      const changes = await writeSetup({ brain, root, ...base, dryRun, renameGlossary: true });
      expect(changes[0]).toEqual({
        path: "CONTEXT.md -> GLOSSARY.md",
        action: "skipped",
        note: "not tracked by git; move it by hand",
      });
    }
    expect(await exists(`${root}/CONTEXT.md`)).toBe(true);
    expect(await exists(`${root}/GLOSSARY.md`)).toBe(false);
  });

  test("outside a git repo nothing moves, and both files are reported", async () => {
    const root = await repo("rename-no-git", { "CONTEXT.md": "# T\n", "CONTEXT-MAP.md": "# M\n" });
    const changes = await writeSetup({ brain, root, ...base, renameGlossary: true });
    expect(changes.slice(0, 2).map((c) => [c.path, c.action, c.note])).toEqual([
      ["CONTEXT.md -> GLOSSARY.md", "skipped", "not tracked by git; move it by hand"],
      ["CONTEXT-MAP.md -> GLOSSARY-MAP.md", "skipped", "not tracked by git; move it by hand"],
    ]);
    expect(await exists(`${root}/CONTEXT.md`)).toBe(true);
  });
});

describe("write.ts --check, a glossary move", () => {
  const writeScript = `${import.meta.dir}/../write.ts`;

  test("a glossary move that a run cannot make is drift: exit 1, its note shown, nothing moved", async () => {
    const root = await gitRepo("check-glossary-both", {
      "CONTEXT.md": "# Old\n",
      "GLOSSARY.md": "# New\n",
    });
    await writeSetup({ brain, root, ...base });
    const run = Bun.spawnSync([
      "bun",
      writeScript,
      "--root",
      root,
      "--brain",
      brain,
      "--no-codex",
      "--rename-glossary",
      "--check",
    ]);
    expect(run.exitCode).toBe(1);
    const out = run.stdout.toString();
    expect(out).toContain("skipped   CONTEXT.md -> GLOSSARY.md  (GLOSSARY.md already exists)");
    expect(out).toEndWith(
      "1 file differs from what setup-brain writes: fix each skipped file by hand, then run setup-brain\n",
    );
    expect(await exists(`${root}/CONTEXT.md`)).toBe(true);
  });
});

describe("the shipped STATUS.md seed", () => {
  const shipped = `${import.meta.dir}/../../..`;

  test("says there is no active work and names interview-me, with no labelled line that would hide the frontier", async () => {
    // brain status takes a `Next:` or `Waiting on the user:` line over the rows, so a seeded one
    // would still win after interview-me charts the first idea.
    const text = await Bun.file(`${shipped}/skills/setup-brain/STATUS.md`).text();
    expect(text).toContain("No active work.");
    expect(text).toContain("interview-me");
    expect(text).not.toMatch(/^(?:[-*] +)?(?:next|next step|waiting|waiting on the user): /imu);
  });
});

describe("the shipped glossary rules", () => {
  const shipped = `${import.meta.dir}/../../..`;

  test("domain.md names GLOSSARY.md and holds the one-release CONTEXT.md fallback", async () => {
    const domain = await Bun.file(`${shipped}/skills/setup-brain/domain.md`).text();
    expect(domain).toContain("`GLOSSARY.md`");
    expect(domain).toContain("`GLOSSARY-MAP.md`");
    expect(domain).toMatch(/no `GLOSSARY\.md`[^\n]*`CONTEXT\.md`[^\n]*setup-brain/u);
  });
});
