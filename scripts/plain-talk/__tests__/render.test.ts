import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { endMarker, markersFor, startMarker } from "../block";
import { render, renderAll, sources as realSources } from "../render";
import type { BlockTarget, Source, Target } from "../render";

let work: string;

const body = "Line one.\n\n## Part\n\n- item\n";
const targets: readonly Target[] = [
  { template: "templates/a.md", out: "out/a.md" },
  { template: "templates/b.md", out: "b.md" },
  { template: "templates/c.md", out: "out/deep/c.md" },
];
const blocks: readonly BlockTarget[] = [{ block: "out/deep/c.md", into: "AGENTS.md" }];

/** The first source text alone, without and with its block target. */
const only: readonly Source[] = [{ path: "SOURCE.md", targets, blockTargets: [] }];
const withBlock: readonly Source[] = [{ path: "SOURCE.md", targets, blockTargets: blocks }];

/** A second source text with its own template target and its own block target. */
const second: Source = {
  path: "SECOND.md",
  targets: [
    { template: "templates/d.md", out: "out/d.md" },
    { template: "templates/c.md", out: "second-block.md" },
  ],
  blockTargets: [{ block: "second-block.md", into: "OTHER.md" }],
};

/** A third source text whose block, named third, goes into a file another source writes. */
const third = markersFor("third");
const thirdBlock = `${third.start}\nThird text.\n${third.end}\n`;
function thirdInto(into: string): Source {
  return {
    path: "THIRD.md",
    targets: [{ template: "templates/e.md", out: "third-block.md" }],
    blockTargets: [{ block: "third-block.md", into }],
  };
}

async function fixture(name: string, agents?: string): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(`${root}/templates`, { recursive: true });
  await Bun.write(`${root}/SOURCE.md`, body);
  await Bun.write(`${root}/SECOND.md`, "Second text.\n\n- rule\n\n");
  await Bun.write(`${root}/THIRD.md`, "Third text.\n");
  await Bun.write(`${root}/templates/a.md`, "---\nname: a\n---\n\n{{body}}\n");
  await Bun.write(`${root}/templates/b.md`, "# b\n\n{{body}}\n");
  await Bun.write(`${root}/templates/c.md`, `${startMarker}\n{{body}}\n${endMarker}\n`);
  await Bun.write(`${root}/templates/d.md`, "# d\n\n{{body}}\n");
  await Bun.write(`${root}/templates/e.md`, `${third.start}\n{{body}}\n${third.end}\n`);
  if (agents !== undefined) {
    await Bun.write(`${root}/AGENTS.md`, agents);
  }
  return root;
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-render-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("render", () => {
  test("puts the trimmed body where the slot is and ends with one newline", () => {
    expect(render("# h\n\n{{body}}\n", "x\n\n")).toBe("# h\n\nx\n");
  });

  test("a template without the slot is an error naming it", () => {
    expect(() => render("no slot\n", "x", "templates/z.md")).toThrow(
      "templates/z.md has no {{body}} slot",
    );
  });
});

describe("renderAll", () => {
  test("writes every target, creating folders, and the body is byte-identical in all", async () => {
    const root = await fixture("write");
    const changed = await renderAll(root, only, false);
    expect(changed.toSorted()).toEqual(["b.md", "out/a.md", "out/deep/c.md"]);
    const a = await Bun.file(`${root}/out/a.md`).text();
    const b = await Bun.file(`${root}/b.md`).text();
    const c = await Bun.file(`${root}/out/deep/c.md`).text();
    const trimmed = body.trimEnd();
    expect(a).toContain(trimmed);
    expect(b).toContain(trimmed);
    expect(c).toContain(trimmed);
    expect(a.startsWith("---\nname: a\n---\n\n")).toBe(true);
  });

  test("check mode lists drift and writes nothing; clean after a render", async () => {
    const root = await fixture("check");
    const drift = await renderAll(root, only, true);
    expect(drift).toHaveLength(3);
    await renderAll(root, only, false);
    expect(await renderAll(root, only, true)).toEqual([]);
    await Bun.write(`${root}/b.md`, "edited\n");
    expect(await renderAll(root, only, true)).toEqual(["b.md"]);
    expect(await Bun.file(`${root}/b.md`).text()).toBe("edited\n");
  });

  test("a second render is byte-identical", async () => {
    const root = await fixture("stable");
    await renderAll(root, only, false);
    const first = await Bun.file(`${root}/out/a.md`).text();
    await renderAll(root, only, false);
    expect(await Bun.file(`${root}/out/a.md`).text()).toBe(first);
  });
});

describe("renderAll, block targets", () => {
  test("the block lands between the markers of a hand-written file, text outside kept", async () => {
    const root = await fixture(
      "block",
      `# Repo rules\n\nKeep.\n\n${startMarker}\nold\n${endMarker}\n\nTail.\n`,
    );
    const changed = await renderAll(root, withBlock, false);
    expect(changed).toContain("AGENTS.md");
    const c = await Bun.file(`${root}/out/deep/c.md`).text();
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(
      `# Repo rules\n\nKeep.\n\n${c}\nTail.\n`,
    );
  });

  test("a file without markers gets the block appended; a missing file is created", async () => {
    const root = await fixture("block-append", "# Repo rules\n");
    await renderAll(root, withBlock, false);
    const c = await Bun.file(`${root}/out/deep/c.md`).text();
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(`# Repo rules\n\n${c}`);
    const missing = await fixture("block-missing");
    await renderAll(missing, withBlock, false);
    expect(await Bun.file(`${missing}/AGENTS.md`).text()).toBe(c);
  });

  test("check mode reports an edited block as drift and leaves the file alone", async () => {
    const root = await fixture("block-check", "# Repo rules\n");
    await renderAll(root, withBlock, false);
    expect(await renderAll(root, withBlock, true)).toEqual([]);
    const edited = `# Repo rules\n\n${startMarker}\nedited\n${endMarker}\n`;
    await Bun.write(`${root}/AGENTS.md`, edited);
    expect(await renderAll(root, withBlock, true)).toEqual(["AGENTS.md"]);
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(edited);
  });

  test("the block is taken from the fresh render, so an edited output does not leak into the file", async () => {
    const root = await fixture("block-fresh", "# Repo rules\n");
    await renderAll(root, withBlock, false);
    await Bun.write(`${root}/out/deep/c.md`, `${startMarker}\nstale\n${endMarker}\n`);
    const drift = await renderAll(root, withBlock, true);
    expect(drift).toEqual(["out/deep/c.md"]);
  });
});

describe("renderAll, several sources", () => {
  test("two sources render in one run, each into its own targets and its own block target", async () => {
    const root = await fixture("two", "# Repo rules\n");
    const changed = await renderAll(root, [...withBlock, second], false);
    expect(changed).toEqual([
      "out/a.md",
      "b.md",
      "out/deep/c.md",
      "AGENTS.md",
      "out/d.md",
      "second-block.md",
      "OTHER.md",
    ]);
    expect(await Bun.file(`${root}/b.md`).text()).toBe("# b\n\nLine one.\n\n## Part\n\n- item\n");
    expect(await Bun.file(`${root}/out/d.md`).text()).toBe("# d\n\nSecond text.\n\n- rule\n");
    expect(await Bun.file(`${root}/OTHER.md`).text()).toBe(
      `${startMarker}\nSecond text.\n\n- rule\n${endMarker}\n`,
    );
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(
      `# Repo rules\n\n${startMarker}\nLine one.\n\n## Part\n\n- item\n${endMarker}\n`,
    );
  });

  test("a check run reports drift in the outputs of either source and writes nothing", async () => {
    const root = await fixture("two-check", "# Repo rules\n");
    const both = [...withBlock, second];
    await renderAll(root, both, false);
    expect(await renderAll(root, both, true)).toEqual([]);
    await Bun.write(`${root}/b.md`, "edited\n");
    expect(await renderAll(root, both, true)).toEqual(["b.md"]);
    await Bun.write(`${root}/out/d.md`, "edited\n");
    await Bun.write(`${root}/OTHER.md`, `${startMarker}\nedited\n${endMarker}\n`);
    expect(await renderAll(root, both, true)).toEqual(["b.md", "out/d.md", "OTHER.md"]);
    expect(await Bun.file(`${root}/OTHER.md`).text()).toBe(
      `${startMarker}\nedited\n${endMarker}\n`,
    );
    await renderAll(root, both, false);
    expect(await renderAll(root, both, true)).toEqual([]);
  });

  test("two targets that write one file are an error naming it, before any write", async () => {
    const root = await fixture("two-clash");
    const clash: Source = {
      path: "SECOND.md",
      targets: [{ template: "templates/d.md", out: "b.md" }],
      blockTargets: [],
    };
    await expect(renderAll(root, [...only, clash], false)).rejects.toThrow(
      "b.md is written from both SOURCE.md and SECOND.md",
    );
    expect(await Bun.file(`${root}/out/a.md`).exists()).toBe(false);
  });

  test("a block target takes its block from its own source's targets only", async () => {
    const root = await fixture("two-foreign-block");
    const foreign: Source = {
      path: "SECOND.md",
      targets: [{ template: "templates/d.md", out: "out/d.md" }],
      blockTargets: [{ block: "out/deep/c.md", into: "OTHER.md" }],
    };
    await expect(renderAll(root, [...only, foreign], false)).rejects.toThrow(
      "OTHER.md takes its block from out/deep/c.md, which is not a target of SECOND.md",
    );
  });
});

describe("renderAll, a block in a file that another source writes", () => {
  test("the block goes after the whole file another source renders, and each file is written once", async () => {
    const root = await fixture("into-whole");
    const changed = await renderAll(root, [...only, thirdInto("b.md")], false);
    expect(changed).toEqual(["out/a.md", "b.md", "out/deep/c.md", "third-block.md"]);
    expect(await Bun.file(`${root}/b.md`).text()).toBe(
      `# b\n\nLine one.\n\n## Part\n\n- item\n\n${thirdBlock}`,
    );
    expect(await renderAll(root, [...only, thirdInto("b.md")], true)).toEqual([]);
  });

  test("a check run reports the whole file when either source's part of it drifts", async () => {
    const root = await fixture("into-whole-check");
    const list = [...only, thirdInto("b.md")];
    await renderAll(root, list, false);
    const rendered = await Bun.file(`${root}/b.md`).text();
    await Bun.write(`${root}/b.md`, rendered.replace("Third text.", "Edited."));
    expect(await renderAll(root, list, true)).toEqual(["b.md"]);
    await Bun.write(`${root}/b.md`, rendered.replace("Line one.", "Edited."));
    expect(await renderAll(root, list, true)).toEqual(["b.md"]);
  });

  test("blocks of two names share one hand-written file, each between its own markers", async () => {
    const root = await fixture("two-blocks", "# Repo rules\n");
    await renderAll(root, [...withBlock, thirdInto("AGENTS.md")], false);
    const c = await Bun.file(`${root}/out/deep/c.md`).text();
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(`# Repo rules\n\n${c}\n${thirdBlock}`);
    expect(await renderAll(root, [...withBlock, thirdInto("AGENTS.md")], true)).toEqual([]);
  });

  test("two blocks of one name in one file are an error naming the file, before any write", async () => {
    const root = await fixture("two-same-name", "# Repo rules\n");
    const sameName: Source = {
      path: "THIRD.md",
      targets: [{ template: "templates/c.md", out: "third-block.md" }],
      blockTargets: [{ block: "third-block.md", into: "AGENTS.md" }],
    };
    await expect(renderAll(root, [...withBlock, sameName], false)).rejects.toThrow(
      "AGENTS.md takes two blocks named plain-talk, from SOURCE.md and THIRD.md",
    );
    expect(await Bun.file(`${root}/out/a.md`).exists()).toBe(false);
  });
});

describe("the real source list", () => {
  test("plain talk: four host outputs, and its block goes into brain's own AGENTS.md", () => {
    expect(realSources[0]).toEqual({
      path: "plain-talk/PLAIN-TALK.md",
      targets: [
        { template: "plain-talk/templates/output-style.md", out: "output-styles/talk-plain.md" },
        { template: "plain-talk/templates/gemini.md", out: "GEMINI.md" },
        { template: "plain-talk/templates/antigravity-rule.md", out: "rules/talk-plain.md" },
        { template: "plain-talk/templates/agents-block.md", out: "plain-talk/AGENTS-block.md" },
      ],
      blockTargets: [{ block: "plain-talk/AGENTS-block.md", into: "AGENTS.md" }],
    });
  });

  test("the protocol: an Antigravity rule, the block setup-brain writes for Codex, and that block in GEMINI.md and brain's own AGENTS.md", () => {
    expect(realSources.slice(1)).toEqual([
      {
        path: "protocol/PROTOCOL.md",
        targets: [
          { template: "plain-talk/templates/protocol-rule.md", out: "rules/protocol.md" },
          { template: "plain-talk/templates/protocol-block.md", out: "protocol/AGENTS-block.md" },
        ],
        blockTargets: [
          { block: "protocol/AGENTS-block.md", into: "GEMINI.md" },
          { block: "protocol/AGENTS-block.md", into: "AGENTS.md" },
        ],
      },
    ]);
  });
});

describe("the real texts", () => {
  const repo = `${import.meta.dir}/../../..`;

  test("every rule for Antigravity opens with frontmatter that sets trigger: always_on", async () => {
    const rules = realSources.flatMap((source) =>
      source.targets.filter((target) => target.out.startsWith("rules/")),
    );
    expect(rules.map((rule) => rule.out)).toEqual(["rules/talk-plain.md", "rules/protocol.md"]);
    for (const rule of rules) {
      const template = await Bun.file(`${repo}/${rule.template}`).text();
      expect(template).toStartWith("---\ntrigger: always_on\n");
    }
  });

  test("the protocol leaves 6,000 of the session-start hook's 10,000 characters for the status", async () => {
    // The budget holds (Decisions row "The protocol's budget"): a new rule goes to using-brain
    // (routing and working rules) or to workspace.md (layout and naming), not to the protocol.
    const protocol = await Bun.file(`${repo}/protocol/PROTOCOL.md`).text();
    expect(protocol.length).toBeLessThanOrEqual(4000);
  });

  test("the protocol says the user, never a person's name, because brain is public", async () => {
    const protocol = await Bun.file(`${repo}/protocol/PROTOCOL.md`).text();
    expect(protocol).toContain("the user");
    expect(protocol).not.toMatch(/\bPeter\b/u);
  });
});
