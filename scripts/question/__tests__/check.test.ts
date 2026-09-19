import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkQuestionSkill, forbidden } from "../check";

let work: string;

async function skill(name: string, files: Record<string, string>): Promise<string> {
  const dir = `${work}/${name}`;
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${dir}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${dir}/${path}`, body);
  }
  return dir;
}

const good = {
  "SKILL.md": `---\nname: ask-user-question\ndescription: "Composes one question for the user. Use for a user-owned choice, a reply that leaves a gap, or a question the user did not understand."\n---\n\n# Ask user question\n\nThe user picks. The reply settles it.\n`,
  "references/claude-code.md": "# Claude Code\n\nContract.\n",
  "references/codex.md": "# Codex\n\nContract.\n",
  "references/gemini-cli.md": "# Gemini CLI\n\nContract.\n",
};

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-question-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("checkQuestionSkill", () => {
  test("a skill within every budget and without the synonyms has no findings", async () => {
    expect(await checkQuestionSkill(await skill("good", good))).toEqual([]);
  });

  test("a description over 300 characters is a finding", async () => {
    const long = {
      ...good,
      "SKILL.md": good["SKILL.md"].replace(
        "Composes one question",
        `Composes ${"very ".repeat(60)}one question`,
      ),
    };
    const findings = await checkQuestionSkill(await skill("long", long));
    expect(findings.map((f) => f.kind)).toEqual(["description-length"]);
  });

  test("each forbidden synonym is its own finding with the line", async () => {
    const bad = {
      ...good,
      "SKILL.md": `${good["SKILL.md"]}\nThe person waits. The reader reads. The surrounding task ends.\n`,
    };
    const findings = await checkQuestionSkill(await skill("synonyms", bad));
    expect(findings.map((f) => f.detail).toSorted()).toEqual(
      ["the person", "the reader", "the surrounding task"]
        .map((w) => `line 10 uses "${w}"`)
        .toSorted(),
    );
  });

  test("the forbidden list holds the five synonyms and the response-for-reply pair", () => {
    expect(forbidden.map((f) => f.word)).toEqual([
      "the person",
      "the reader",
      "surrounding task",
      "another workflow",
      "later topic",
      "response",
    ]);
  });

  test("a SKILL.md over 250 lines and a reference over 120 lines are findings", async () => {
    const big = {
      ...good,
      "SKILL.md": `${good["SKILL.md"]}${"line\n".repeat(250)}`,
      "references/codex.md": `${good["references/codex.md"]}${"line\n".repeat(120)}`,
    };
    const findings = await checkQuestionSkill(await skill("big", big));
    expect(findings.map((f) => `${f.kind}:${f.file}`).toSorted()).toEqual([
      "line-budget:SKILL.md",
      "line-budget:references/codex.md",
    ]);
  });

  test("a missing reference is a finding", async () => {
    const missing = { ...good };
    delete (missing as Record<string, string>)["references/gemini-cli.md"];
    const findings = await checkQuestionSkill(await skill("missing", missing));
    expect(findings.map((f) => f.kind)).toEqual(["missing-file"]);
  });
});
