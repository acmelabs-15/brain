import { describe, expect, test } from "bun:test";

/**
 * The commands that read or write a spec find it through `docs/agents/workspace.md`, in its
 * spec folder, and name no path of the old layout: a root `SPEC.md`, a `spec/` folder.
 */
const commands = [
  ".claude/commands/spec.md",
  ".claude/commands/plan.md",
  ".claude/commands/build.md",
  "commands/spec.toml",
  "commands/planning.toml",
  "commands/build.toml",
];

const root = `${import.meta.dir}/../../..`;

function read(path: string): Promise<string> {
  return Bun.file(`${root}/${path}`).text();
}

describe("commands on spec folders", () => {
  for (const path of commands) {
    test(`${path} finds the spec through docs/agents/workspace.md and names no old-layout path`, async () => {
      const text = await read(path);
      expect(text).toContain("docs/agents/workspace.md");
      expect(text).not.toMatch(/\bSPEC\.md\b/u);
      expect(text).not.toMatch(/(?<![\w./-])spec\//u);
    });
  }

  for (const path of [".claude/commands/build.md", "commands/build.toml"]) {
    test(`${path} keeps work in the active spec folder out of the clean-baseline stop`, async () => {
      expect(await read(path)).toContain("docs/specs/SPEC-NNN-<slug>/");
    });
  }

  for (const path of commands.filter((each) => each.endsWith(".md"))) {
    test(`${path} spells brain with the plugin path that Claude Code fills in`, async () => {
      const text = await read(path);
      if (/`brain (?:check|new-doc)\b/u.test(text)) {
        // The text holds the variable itself, for Claude Code to fill in, so `\${` stays literal.
        expect(text).toContain(`bun "\${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts"`);
      }
    });
  }

  for (const path of commands.filter((each) => each.endsWith(".toml"))) {
    test(`${path} leaves the Claude Code plugin variable out`, async () => {
      expect(await read(path)).not.toContain("CLAUDE_PLUGIN_ROOT");
    });
  }
});
