import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkGlossaryTerms, checkRetiredNames, glossaryTerms } from "../names";

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

const fullGlossary = glossaryTerms.map((term) => `**${term}**:\nA definition.\n`).join("\n");

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-names-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("checkRetiredNames, the old glossary name", () => {
  test("a brain-owned file that names CONTEXT.md is a finding with its line", async () => {
    const root = await tree("stray", { "skills/x/SKILL.md": "# X\n\nRead `CONTEXT.md` first.\n" });
    expect(await checkRetiredNames(root)).toEqual([
      {
        kind: "retired-name",
        file: "skills/x/SKILL.md",
        detail: "line 3 names CONTEXT.md or CONTEXT-MAP.md; the glossary is GLOSSARY.md now",
      },
    ]);
  });

  test("CONTEXT-MAP.md is caught too, in any text file brain owns", async () => {
    const root = await tree("map", { ".claude/commands/x.md": "See CONTEXT-MAP.md.\n" });
    const found = await checkRetiredNames(root);
    expect(found.map((f) => f.file)).toEqual([".claude/commands/x.md"]);
  });

  test("a line that also names GLOSSARY describes the rename and passes", async () => {
    const root = await tree("rename-line", {
      "skills/x/SKILL.md": "Move `CONTEXT.md` to `GLOSSARY.md` with git mv.\n",
    });
    expect(await checkRetiredNames(root)).toEqual([]);
  });

  test("history, test folders and vendored files may keep the old name", async () => {
    const root = await tree("exempt", {
      "tasks/done/x/plan.md": "CONTEXT.md\n",
      "tasks/todo.md": "CONTEXT.md\n",
      "docs/research/RES-001-x.md": "CONTEXT.md\n",
      "docs/intent/x.md": "CONTEXT.md\n",
      "CHANGELOG.md": "CONTEXT.md\n",
      "scripts/x/__tests__/x.test.ts": '"CONTEXT.md"\n',
      "skills/vendored/SKILL.md": "CONTEXT.md\n",
      "upstream.lock.json": JSON.stringify({
        files: { "skills/vendored/SKILL.md": { upstream: "u", sha256: "0" } },
        seeds: {},
      }),
    });
    expect(await checkRetiredNames(root)).toEqual([]);
  });

  test("a symlink is never followed, so no file outside the root is read", async () => {
    const outside = await tree("outside", { "notes.md": "CONTEXT.md\n" });
    const root = await tree("linked", { "README.md": "# x\n" });
    await symlink(`${outside}/notes.md`, `${root}/notes.md`);
    expect(await checkRetiredNames(root)).toEqual([]);
  });

  test("node_modules and .git are never read", async () => {
    const root = await tree("skipped", {
      "node_modules/pkg/README.md": "CONTEXT.md\n",
      ".git/info/x.md": "CONTEXT.md\n",
    });
    expect(await checkRetiredNames(root)).toEqual([]);
  });
});

describe("checkGlossaryTerms", () => {
  test("a GLOSSARY.md with every workspace term passes", async () => {
    const root = await tree("glossary-full", { "GLOSSARY.md": fullGlossary });
    expect(await checkGlossaryTerms(root)).toEqual([]);
  });

  test("a missing term is a finding that names it", async () => {
    const root = await tree("glossary-gap", {
      "GLOSSARY.md": fullGlossary.replace("**Fog**:", "**Mist**:"),
    });
    expect(await checkGlossaryTerms(root)).toEqual([
      { kind: "glossary-term", file: "GLOSSARY.md", detail: "no entry for Fog" },
    ]);
  });

  test("no GLOSSARY.md at all is one finding", async () => {
    const root = await tree("glossary-none", { "README.md": "# x\n" });
    expect(await checkGlossaryTerms(root)).toEqual([
      { kind: "glossary-term", file: "GLOSSARY.md", detail: "brain's glossary is missing" },
    ]);
  });
});

describe("brain itself", () => {
  const shipped = `${import.meta.dir}/../../..`;

  test("names no retired name outside history, and its glossary is complete", async () => {
    expect(await checkRetiredNames(shipped)).toEqual([]);
    expect(await checkGlossaryTerms(shipped)).toEqual([]);
  });
});
