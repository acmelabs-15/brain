import { describe, expect, test } from "bun:test";

/** Every brain-owned text that dispatches a sub-agent puts the plain-talk block in its prompt. */
const dispatchers = [
  ".claude/commands/build.md",
  ".claude/commands/ship.md",
  ".claude/commands/webperf.md",
  "commands/build.toml",
  "commands/ship.toml",
  "commands/webperf.toml",
  "skills/code-review-and-quality/SKILL.md",
];

const root = `${import.meta.dir}/../../..`;

describe("sub-agent prompts carry the plain-talk block", () => {
  for (const path of dispatchers) {
    test(path, async () => {
      const text = await Bun.file(`${root}/${path}`).text();
      expect(text).toContain("plain-talk/AGENTS-block.md");
    });
  }
});
