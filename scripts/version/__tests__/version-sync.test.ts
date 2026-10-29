import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { manifests, skills, syncVersions } from "../version-sync";

const skillPath = "skills/ask-user-question/SKILL.md";

/** Frontmatter versions to be rewritten, and a body line that must stay as it is. */
const skillText = [
  "---",
  "name: ask-user-question",
  'description: "d"',
  "metadata:",
  "  type: core",
  "  library: brain",
  '  library_version: "0.0.1"',
  '  version: "0.0.1"',
  "---",
  "",
  "```yaml",
  '  version: "9.9.9"',
  "```",
  "",
].join("\n");

let work: string;

async function fixture(
  name: string,
  version: string,
  drift?: Record<string, string>,
): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root, { recursive: true });
  await Bun.write(
    `${root}/package.json`,
    `${JSON.stringify({ name: "brain", version }, null, 2)}\n`,
  );
  const bodies: Record<string, unknown> = {
    ".claude-plugin/plugin.json": { name: "brain", version: "0.0.1" },
    ".claude-plugin/marketplace.json": {
      name: "brain",
      plugins: [{ name: "brain", version: "0.0.1", source: "./" }],
    },
    ".codex-plugin/plugin.json": { name: "brain", version: "0.0.1" },
    ".agents/plugins/marketplace.json": {
      name: "brain",
      plugins: [{ name: "brain", version: "0.0.1" }],
    },
    "gemini-extension.json": { name: "brain", version: "0.0.1" },
    [skillPath]: skillText,
  };
  for (const [path, body] of Object.entries(bodies)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    const text =
      drift?.[path] ?? (typeof body === "string" ? body : `${JSON.stringify(body, null, 2)}\n`);
    await Bun.write(`${root}/${path}`, text);
  }
  return root;
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-version-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("syncVersions", () => {
  test("names the five versioned manifests", () => {
    expect(manifests.map((m) => m.path)).toEqual([
      ".claude-plugin/plugin.json",
      ".claude-plugin/marketplace.json",
      ".codex-plugin/plugin.json",
      ".agents/plugins/marketplace.json",
      "gemini-extension.json",
    ]);
  });

  test("names the skill whose frontmatter carries brain's version", () => {
    expect(skills).toEqual([{ path: skillPath, fields: ["library_version", "version"] }]);
  });

  test("writes package.json's version into every manifest, nested or not", async () => {
    const root = await fixture("write", "1.2.3");
    const drifted = await syncVersions(root, false);
    const all = [...manifests.map((m) => m.path), ...skills.map((s) => s.path)];
    expect(drifted.toSorted()).toEqual(all.toSorted());
    const plugin = await Bun.file(`${root}/.claude-plugin/plugin.json`).json();
    const market = await Bun.file(`${root}/.claude-plugin/marketplace.json`).json();
    expect(plugin.version).toBe("1.2.3");
    expect(market.plugins[0].version).toBe("1.2.3");
  });

  test("check mode lists the drifted files and writes nothing", async () => {
    const root = await fixture("check", "1.2.3");
    const before = await Bun.file(`${root}/gemini-extension.json`).text();
    const drifted = await syncVersions(root, true);
    expect(drifted).toHaveLength(6);
    expect(await Bun.file(`${root}/gemini-extension.json`).text()).toBe(before);
  });

  test("check mode passes on a synced tree, and a second write is byte-identical", async () => {
    const root = await fixture("stable", "1.2.3");
    await syncVersions(root, false);
    const first = await Bun.file(`${root}/.codex-plugin/plugin.json`).text();
    expect(await syncVersions(root, true)).toEqual([]);
    await syncVersions(root, false);
    expect(await Bun.file(`${root}/.codex-plugin/plugin.json`).text()).toBe(first);
    expect(first.endsWith("\n")).toBe(true);
  });

  test("writes the skill's metadata versions and nothing below the frontmatter", async () => {
    const root = await fixture("skill", "1.2.3");
    await syncVersions(root, false);
    const text = await Bun.file(`${root}/${skillPath}`).text();
    expect(text).toContain('  library_version: "1.2.3"\n  version: "1.2.3"\n---');
    expect(text).toContain("  library: brain\n");
    expect(text).toContain('```yaml\n  version: "9.9.9"\n```');
    expect(await syncVersions(root, true)).toEqual([]);
  });

  test("a skill without a metadata version field is an error naming it", async () => {
    const root = await fixture("noskillfield", "1.2.3", {
      [skillPath]: skillText.replace('  library_version: "0.0.1"\n', ""),
    });
    await expect(syncVersions(root, false)).rejects.toThrow(
      `${skillPath} has no metadata.library_version field`,
    );
  });

  test("a manifest without the version field is an error naming it", async () => {
    const root = await fixture("missing", "1.2.3", {
      "gemini-extension.json": `${JSON.stringify({ name: "brain" })}\n`,
    });
    await expect(syncVersions(root, false)).rejects.toThrow(
      "gemini-extension.json has no version field",
    );
  });

  test("a marketplace with no plugins entry is an error naming it", async () => {
    const root = await fixture("noplugins", "1.2.3", {
      ".claude-plugin/marketplace.json": `${JSON.stringify({ name: "brain" })}\n`,
    });
    await expect(syncVersions(root, false)).rejects.toThrow(
      ".claude-plugin/marketplace.json has no plugins.0.version field",
    );
  });
});
