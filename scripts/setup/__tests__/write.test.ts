import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { lstat, mkdir, mkdtemp, rm, stat, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";

import { endMarker, startMarker } from "../../plain-talk/block";
import { writeSetup } from "../write";

let work: string;
let brain: string;

const block = `${startMarker}\n## Talk plain\n\nBody v2.\n${endMarker}\n`;
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
  await mkdir(`${brain}/skills/setup-brain`, { recursive: true });
  await Bun.write(`${brain}/plain-talk/AGENTS-block.md`, block);
  await Bun.write(
    `${brain}/skills/setup-brain/domain.md`,
    "# Domain docs\n\nLayout: {{layout}}.\n",
  );
  await Bun.write(
    `${brain}/skills/setup-brain/issue-tracker-local.md`,
    "# Tracker: local\n\nIssues live under .scratch/.\n",
  );
  await Bun.write(
    `${brain}/skills/setup-brain/issue-tracker-github.md`,
    "# Tracker: GitHub\n\nRepo: {{repo}}\n",
  );
  await Bun.write(
    `${brain}/skills/setup-brain/issue-tracker-gitlab.md`,
    "# Tracker: GitLab\n\nRepo: {{repo}}\n",
  );
  await Bun.write(`${brain}/skills/setup-brain/triage-labels.md`, "# Labels\n\nneeds-triage\n");
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

const base = { layout: "single" as const, dryRun: false, codexHome: null };

describe("writeSetup, the repo", () => {
  test("in an empty repo it creates the three docs/agents files and no context file", async () => {
    const root = await repo("empty");
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes).toEqual([
      { path: "docs/agents/domain.md", action: "created" },
      { path: "docs/agents/issue-tracker.md", action: "created" },
      { path: "docs/agents/triage-labels.md", action: "created" },
    ]);
    expect(await Bun.file(`${root}/docs/agents/domain.md`).text()).toBe(
      "# Domain docs\n\nLayout: single-context.\n",
    );
    expect(await exists(`${root}/AGENTS.md`)).toBe(false);
    expect(await exists(`${root}/CLAUDE.md`)).toBe(false);
    expect(await exists(`${root}/GEMINI.md`)).toBe(false);
  });

  test("a repo's own AGENTS.md, CLAUDE.md and GEMINI.md are left as they are", async () => {
    const files = { "AGENTS.md": "# Mine\n", "CLAUDE.md": "# Claude\n", "GEMINI.md": "# Gemini\n" };
    const root = await repo("untouched", files);
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes.map((c) => c.path)).toEqual([
      "docs/agents/domain.md",
      "docs/agents/issue-tracker.md",
      "docs/agents/triage-labels.md",
    ]);
    for (const [path, body] of Object.entries(files)) {
      expect(await Bun.file(`${root}/${path}`).text()).toBe(body);
    }
  });

  test("a second run reports every file unchanged and writes nothing", async () => {
    const root = await repo("twice");
    await writeSetup({ brain, root, ...base });
    const changes = await writeSetup({ brain, root, ...base });
    expect(changes.every((c) => c.action === "unchanged")).toBe(true);
  });

  test("dry run lists every change and writes nothing", async () => {
    const root = await repo("dry");
    const changes = await writeSetup({ brain, root, ...base, dryRun: true });
    expect(changes.map((c) => `${c.action} ${c.path}`)).toEqual([
      "created docs/agents/domain.md",
      "created docs/agents/issue-tracker.md",
      "created docs/agents/triage-labels.md",
    ]);
    expect(await exists(`${root}/docs`)).toBe(false);
  });

  test("multi layout names the map in domain.md", async () => {
    const root = await repo("multi");
    await writeSetup({ brain, root, ...base, layout: "multi" });
    expect(await Bun.file(`${root}/docs/agents/domain.md`).text()).toBe(
      "# Domain docs\n\nLayout: multi-context.\n",
    );
  });
});

describe("writeSetup, the Codex global file", () => {
  test("a Codex home without AGENTS.md gets one holding the block, listed first", async () => {
    const root = await repo("codex-new");
    const home = await codexHome("codex-new");
    const changes = await writeSetup({ brain, root, ...base, codexHome: home });
    expect(changes[0]).toEqual({ path: `${home}/AGENTS.md`, action: "created" });
    expect(await Bun.file(`${home}/AGENTS.md`).text()).toBe(block);
  });

  test("an existing file keeps every line outside the markers and gets an old block replaced", async () => {
    const root = await repo("codex-existing");
    const before = `# My rules\n\nKeep this.\n\n${startMarker}\n## Talk plain\n\nBody v1.\n${endMarker}\n\nAnd this.\n`;
    const home = await codexHome("codex-existing", before);
    const changes = await writeSetup({ brain, root, ...base, codexHome: home });
    expect(changes[0]).toEqual({ path: `${home}/AGENTS.md`, action: "updated" });
    expect(await Bun.file(`${home}/AGENTS.md`).text()).toBe(
      `# My rules\n\nKeep this.\n\n${block}\nAnd this.\n`,
    );
  });

  test("a symlinked AGENTS.md stays a symlink and its target gets the block", async () => {
    const root = await repo("codex-link");
    const home = await codexHome("codex-link");
    await Bun.write(`${work}/codex-link/AGENTS.md`, "# Home rules\n");
    await symlink("../AGENTS.md", `${home}/AGENTS.md`);
    await writeSetup({ brain, root, ...base, codexHome: home });
    const link = await lstat(`${home}/AGENTS.md`);
    expect(link.isSymbolicLink()).toBe(true);
    expect(await Bun.file(`${work}/codex-link/AGENTS.md`).text()).toBe(`# Home rules\n\n${block}`);
  });

  test("a missing Codex home is reported as skipped and nothing is created", async () => {
    const root = await repo("codex-missing");
    const home = `${work}/codex-missing/.codex`;
    const changes = await writeSetup({ brain, root, ...base, codexHome: home });
    expect(changes[0]).toEqual({ path: `${home}/AGENTS.md`, action: "skipped" });
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
});

describe("writeSetup, tracker", () => {
  test("the default tracker is local markdown, and both tracker files are written from the templates", async () => {
    const root = await repo("tracker-local");
    await writeSetup({ brain, root, ...base });
    expect(await Bun.file(`${root}/docs/agents/issue-tracker.md`).text()).toBe(
      "# Tracker: local\n\nIssues live under .scratch/.\n",
    );
    expect(await Bun.file(`${root}/docs/agents/triage-labels.md`).text()).toBe(
      "# Labels\n\nneeds-triage\n",
    );
  });

  test("a GitHub tracker names the repo in the file", async () => {
    const root = await repo("tracker-github");
    await writeSetup({ brain, root, ...base, tracker: "github", repoSlug: "acme/app" });
    expect(await Bun.file(`${root}/docs/agents/issue-tracker.md`).text()).toBe(
      "# Tracker: GitHub\n\nRepo: acme/app\n",
    );
  });

  test("a second run leaves both tracker files unchanged", async () => {
    const root = await repo("tracker-twice");
    await writeSetup({ brain, root, ...base, tracker: "gitlab", repoSlug: "acme/app" });
    const changes = await writeSetup({
      brain,
      root,
      ...base,
      tracker: "gitlab",
      repoSlug: "acme/app",
    });
    expect(
      changes
        .filter((c) => c.path.startsWith("docs/agents/"))
        .every((c) => c.action === "unchanged"),
    ).toBe(true);
  });
});
