import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkRouter, quickReference } from "../router";

let work: string;

async function tree(name: string, files: Record<string, string>): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root, { recursive: true });
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${path}`, body);
  }
  return root;
}

const skill = (name: string) =>
  `---\nname: ${name}\ndescription: Does ${name}.\n---\n\n# ${name}\n`;

/** A discovery tree with these branch lines, in the shape using-brain draws it. */
function discovery(...branches: string[]): string {
  return [
    "## Skill Discovery",
    "",
    "```",
    "Task arrives",
    "    │",
    "    │   MAIN FLOW: idea → ship",
    ...branches.map((line) => `    ${line}`),
    "```",
    "",
  ].join("\n");
}

/** A Quick Reference table with these rows. */
function reference(...rows: [string, string][]): string {
  return [
    "## Quick Reference",
    "",
    "| Stage | Skill | One-Line Summary |",
    "|-------|-------|-----------------|",
    ...rows.map(([stage, name]) => `| ${stage} | ${name} | Does ${name}. |`),
    "",
  ].join("\n");
}

/** A repo with skills alpha and beta, and a using-brain whose body is `body`. */
function repo(body: string, extra: Record<string, string> = {}): Record<string, string> {
  return {
    "skills/alpha/SKILL.md": skill("alpha"),
    "skills/beta/SKILL.md": skill("beta"),
    "skills/using-brain/SKILL.md": `${skill("using-brain")}\n${body}`,
    ...extra,
  };
}

const cleanTree = discovery("├── First? ──────→ alpha (once per repo)", "└── Second? → beta");
const cleanReference = reference(["Define", "alpha"], ["Any", "beta"]);

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-router-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("quickReference, the rows of using-brain's Quick Reference", () => {
  test("gives each row's stage and skill, in order", () => {
    expect(quickReference(`# Using brain\n\n${cleanReference}`)).toEqual([
      { stage: "Define", skill: "alpha" },
      { stage: "Any", skill: "beta" },
    ]);
  });

  test("reads only the table under the Quick Reference heading", () => {
    const text = [
      "## Commands",
      "",
      "| Stage | Skill |",
      "|---|---|",
      "| Plan | gamma |",
      "",
      cleanReference,
      "## After",
      "",
      "| Stage | Skill |",
      "|---|---|",
      "| Ship | delta |",
    ].join("\n");
    expect(quickReference(text).map((row) => row.skill)).toEqual(["alpha", "beta"]);
  });

  test("gives no rows when the heading is missing", () => {
    expect(quickReference("# Using brain\n\nNo table here.\n")).toEqual([]);
  });
});

describe("checkRouter, using-brain against the skills that exist", () => {
  test("a router that names every skill in its Quick Reference, and only real ones, passes", async () => {
    const root = await tree("clean", repo(`${cleanTree}\n${cleanReference}`));
    expect(await checkRouter(root)).toEqual([]);
  });

  test("a skill the Quick Reference misses is a finding that names it", async () => {
    const root = await tree(
      "misses-one",
      repo(`${cleanTree}\n${reference(["Define", "alpha"])}`, {
        "skills/gamma/SKILL.md": skill("gamma"),
      }),
    );
    expect(await checkRouter(root)).toEqual([
      {
        kind: "router",
        file: "skills/using-brain/SKILL.md",
        detail: "the Quick Reference misses beta; every skill but using-brain needs a row",
      },
      {
        kind: "router",
        file: "skills/using-brain/SKILL.md",
        detail: "the Quick Reference misses gamma; every skill but using-brain needs a row",
      },
    ]);
  });

  test("a Quick Reference row for a skill with no folder is a finding", async () => {
    const root = await tree(
      "ghost-row",
      repo(
        `${cleanTree}\n${reference(["Define", "alpha"], ["Any", "beta"], ["On-ramp", "ghost"])}`,
      ),
    );
    expect(await checkRouter(root)).toEqual([
      {
        kind: "router",
        file: "skills/using-brain/SKILL.md",
        detail: "a Skill column names ghost, which has no skills/ghost/SKILL.md",
      },
    ]);
  });

  test("a tree branch that routes to a skill with no folder is a finding, in a chain too", async () => {
    const body = `${discovery(
      "├── First? ──────→ alpha (once per repo)",
      "├── A detour? → beta → ghost → beta",
      "└── Second? → phantom",
    )}\n${cleanReference}`;
    const root = await tree("ghost-branch", repo(body));
    const found = await checkRouter(root);
    expect(found.map((finding) => finding.detail)).toEqual([
      "the discovery tree names ghost, which has no skills/ghost/SKILL.md",
      "the discovery tree names phantom, which has no skills/phantom/SKILL.md",
    ]);
  });

  test("a Skill column in another table, one name or several, is checked too", async () => {
    const commands = [
      "## Commands",
      "",
      "| Stage | Skill | Claude Code command |",
      "|---|---|---|",
      "| Define | alpha, ghost | `spec` |",
      "| Plan | beta | `plan` |",
      "",
    ].join("\n");
    const root = await tree("commands", repo(`${cleanTree}\n${commands}\n${cleanReference}`));
    const found = await checkRouter(root);
    expect(found.map((finding) => finding.detail)).toEqual([
      "a Skill column names ghost, which has no skills/ghost/SKILL.md",
    ]);
  });

  test("an arrow to a command, a file or a capital word names no skill", async () => {
    const body = `${discovery(
      "├── First? ──────→ alpha (once per repo)",
      "├── Recording a decision? → DEC file through `brain new-doc`",
      "├── Resuming? → `brain status`",
      "└── Second? → beta",
    )}\n${cleanReference}`;
    const root = await tree("not-skills", repo(body));
    expect(await checkRouter(root)).toEqual([]);
  });

  test("a line of the tree that is not a branch names no skill", async () => {
    // The tree's header line, "MAIN FLOW: idea → ship", has an arrow but routes nowhere.
    const root = await tree("header", repo(`${cleanTree}\n${cleanReference}`));
    expect(await checkRouter(root)).toEqual([]);
  });

  test("a missing using-brain is one finding", async () => {
    const root = await tree("no-router", {
      "skills/alpha/SKILL.md": skill("alpha"),
    });
    expect(await checkRouter(root)).toEqual([
      {
        kind: "router",
        file: "skills/using-brain/SKILL.md",
        detail: "is missing; it routes work to every skill",
      },
    ]);
  });
});

describe("brain itself", () => {
  const shipped = `${import.meta.dir}/../../..`;

  test("using-brain names every skill in its Quick Reference, and names no skill that does not exist", async () => {
    expect(await checkRouter(shipped)).toEqual([]);
  });
});
