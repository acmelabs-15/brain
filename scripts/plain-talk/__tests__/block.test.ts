import { describe, expect, test } from "bun:test";

import { endMarker, markersFor, replaceBlock, startMarker } from "../block";

const block = `${startMarker}\n## Talk plain\n\nBody v2.\n${endMarker}\n`;
const protocol = markersFor("protocol");
const protocolBlock = `${protocol.start}\n## brain protocol\n\nRules v1.\n${protocol.end}\n`;

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

describe("replaceBlock, two blocks in one file", () => {
  test("the plain-talk markers are the markers named plain-talk", () => {
    expect(markersFor("plain-talk")).toEqual({ start: startMarker, end: endMarker });
    expect(protocol).toEqual({
      start: "<!-- brain:protocol:start -->",
      end: "<!-- brain:protocol:end -->",
    });
  });

  test("a block with other markers goes after the plain-talk block, which stays as it is", () => {
    const both = replaceBlock(
      replaceBlock("# Repo\n", block, "AGENTS.md"),
      protocolBlock,
      "AGENTS.md",
    );
    expect(both).toBe(`# Repo\n\n${block}\n${protocolBlock}`);
  });

  test("each block is replaced between its own markers only", () => {
    const both = `# Repo\n\n${block}\n${protocolBlock}\nTail.\n`;
    const plainV3 = block.replace("Body v2.", "Body v3.");
    const protocolV2 = protocolBlock.replace("Rules v1.", "Rules v2.");
    expect(replaceBlock(both, plainV3, "AGENTS.md")).toBe(
      `# Repo\n\n${plainV3}\n${protocolBlock}\nTail.\n`,
    );
    expect(replaceBlock(both, protocolV2, "AGENTS.md")).toBe(
      `# Repo\n\n${block}\n${protocolV2}\nTail.\n`,
    );
    expect(replaceBlock(both, protocolBlock, "AGENTS.md")).toBe(both);
  });

  test("a block that does not open and close with the markers of one name is an error", () => {
    const unmarked = "## No markers\n";
    const mixed = `${startMarker}\nBody.\n${protocol.end}\n`;
    expect(() => replaceBlock("# Repo\n", unmarked, "x/AGENTS.md")).toThrow(
      "the block for x/AGENTS.md does not open and close with the markers of one name",
    );
    expect(() => replaceBlock("# Repo\n", mixed, "x/AGENTS.md")).toThrow(
      "the block for x/AGENTS.md does not open and close with the markers of one name",
    );
  });
});
