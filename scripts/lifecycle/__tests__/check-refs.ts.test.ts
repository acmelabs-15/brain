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
      "frontmatter: missing closing delimiter",
    ],
    [
      "invalid",
      "---\nname: [\ndescription: Interview the user.\n---\n",
      "frontmatter: not valid YAML",
    ],
    [
      "colon-in-description",
      "---\nname: sample\ndescription: Do the work: test it.\n---\n",
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

describe("skill body size", () => {
  test("rejects a body beyond the shared host's 24000-byte limit", async () => {
    const root = `${work}/oversize-body`;
    await mkdir(`${root}/skills/sample`, { recursive: true });
    await Bun.write(
      `${root}/skills/sample/SKILL.md`,
      `---\nname: sample\ndescription: A skill.\n---\n${"a".repeat(24_001)}`,
    );

    expect(await checkRefs(root)).toContainEqual({
      kind: "body-size",
      file: "skills/sample/SKILL.md",
      detail: "body: 24001 UTF-8 bytes exceeds the 24000-byte host limit",
    });
  });

  test.each([
    ["ascii-boundary", "a".repeat(24_000)],
    ["multibyte-boundary", "界".repeat(8000)],
  ])("accepts exactly 24000 body bytes: %s", async (name, body) => {
    const root = `${work}/${name}`;
    await mkdir(`${root}/skills/sample`, { recursive: true });
    await Bun.write(
      `${root}/skills/sample/SKILL.md`,
      `---\nname: sample\ndescription: A skill.\n---\n${body}`,
    );

    expect(await checkRefs(root)).toEqual([]);
  });

  test("counts multibyte text as UTF-8 bytes rather than characters", async () => {
    const root = `${work}/multibyte-oversize`;
    await mkdir(`${root}/skills/sample`, { recursive: true });
    await Bun.write(
      `${root}/skills/sample/SKILL.md`,
      `---\nname: sample\ndescription: A skill.\n---\n${"界".repeat(8000)}🧠`,
    );

    expect(await checkRefs(root)).toContainEqual({
      kind: "body-size",
      file: "skills/sample/SKILL.md",
      detail: "body: 24004 UTF-8 bytes exceeds the 24000-byte host limit",
    });
  });

  test("excludes large valid frontmatter from the body limit", async () => {
    const root = `${work}/large-frontmatter`;
    await mkdir(`${root}/skills/sample`, { recursive: true });
    await Bun.write(
      `${root}/skills/sample/SKILL.md`,
      `---\nname: sample\ndescription: A skill.\nmetadata:\n  note: ${"a".repeat(25_000)}\n---\n# Short body\n`,
    );

    expect(await checkRefs(root)).toEqual([]);
  });
});
