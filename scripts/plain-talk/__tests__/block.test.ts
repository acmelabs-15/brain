import { describe, expect, test } from "bun:test";

import { endMarker, replaceBlock, startMarker } from "../block";

const block = `${startMarker}\n## Talk plain\n\nBody v2.\n${endMarker}\n`;

describe("replaceBlock", () => {
  test("an empty file becomes the block alone", () => {
    expect(replaceBlock("", block, "AGENTS.md")).toBe(block);
    expect(replaceBlock("\n\n", block, "AGENTS.md")).toBe(block);
  });

  test("a file without markers gets the block appended after one blank line", () => {
    expect(replaceBlock("# Repo\n\nKeep.\n", block, "AGENTS.md")).toBe(
      `# Repo\n\nKeep.\n\n${block}`,
    );
  });

  test("an old block between the markers is replaced in place, text outside kept", () => {
    const before = `# Repo\n\nKeep.\n\n${startMarker}\n## Talk plain\n\nBody v1.\n${endMarker}\n\nAnd this.\n`;
    expect(replaceBlock(before, block, "AGENTS.md")).toBe(
      `# Repo\n\nKeep.\n\n${block}\nAnd this.\n`,
    );
  });

  test("the same block twice is a fixed point", () => {
    const once = replaceBlock("# Repo\n", block, "AGENTS.md");
    expect(replaceBlock(once, block, "AGENTS.md")).toBe(once);
  });

  test("a start marker without an end marker is an error naming the file", () => {
    expect(() => replaceBlock(`${startMarker}\nno end\n`, block, "x/AGENTS.md")).toThrow(
      "x/AGENTS.md has a start marker without an end marker",
    );
  });
});
