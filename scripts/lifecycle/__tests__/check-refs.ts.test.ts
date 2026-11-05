import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkRefs } from "../check-refs";

let work: string;

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-skill-metadata-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("skill metadata validation", () => {
  test.each([
    ["missing", "# Skill\n", "frontmatter: missing or unclosed"],
    [
      "unclosed",
      "---\n\n## name: sample\ndescription: Interview the user.\n",
      "frontmatter: missing or unclosed",
    ],
    [
      "invalid",
      "---\nname: [\ndescription: Interview the user.\n---\n",
      "frontmatter: not valid YAML",
    ],
    ["no-name", "---\ndescription: Interview the user.\n---\n", "name: needs a nonempty string"],
    [
      "blank-description",
      "---\nname: sample\ndescription: '  '\n---\n",
      "description: needs a nonempty string",
    ],
  ])("rejects %s metadata", async (name, text, problem) => {
    const root = `${work}/${name}`;
    await mkdir(`${root}/skills/sample`, { recursive: true });
    await Bun.write(`${root}/skills/sample/SKILL.md`, text);
    const checked = await checkRefs(root);
    const findings = checked.filter((finding) => finding.kind === "metadata");
    expect(findings).toHaveLength(1);
    expect(findings[0]?.file).toBe("skills/sample/SKILL.md");
    expect(findings[0]?.detail).toStartWith(problem);
  });
});
