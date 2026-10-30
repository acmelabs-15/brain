import { describe, expect, test } from "bun:test";

/**
 * using-brain carries the intent doc's `using-brain` table and the Decisions row
 * "Anti-rationalization rules": the 1% rule in Skill Rule 1 and nowhere in the protocol, the
 * stateful interview, the files that carry the work across a stage boundary, one lifecycle line
 * per stage, and the status command.
 */
const root = `${import.meta.dir}/../../..`;

function read(path: string): Promise<string> {
  return Bun.file(`${root}/${path}`).text();
}

/** The text under the `## <title>` heading, up to the next `## ` heading. */
function section(text: string, title: string): string {
  const start = text.indexOf(`\n## ${title}\n`);
  expect(start).not.toBe(-1);
  const rest = text.slice(start + title.length + 5);
  const end = rest.search(/^## /mu);
  return end === -1 ? rest : rest.slice(0, end);
}

/** The text of numbered rule `n` in a list, up to the next numbered rule. */
function rule(text: string, n: number): string {
  const start = text.search(new RegExp(`^${n}\\. `, "mu"));
  expect(start).not.toBe(-1);
  const rest = text.slice(start);
  const end = rest.slice(1).search(/^\d+\. /mu);
  return end === -1 ? rest : rest.slice(0, end + 1);
}

describe("using-brain, Skill Rule 1: the 1% rule", () => {
  test("carries the ported wording and the three rejected thoughts", async () => {
    const one = rule(section(await read("skills/using-brain/SKILL.md"), "Skill Rules"), 1);
    expect(one).toContain("If a task matches a skill, you MUST invoke it");
    expect(one).toContain("even a 1% chance");
    expect(one).toContain('"This is too small for a skill"');
    expect(one).toContain('"I can just quickly implement this"');
    expect(one).toContain('"I\'ll gather context first"');
  });

  test("reaches every session as a short form in the protocol; the long form stays here", async () => {
    // Peter, 2026-10-30: nothing preloads using-brain, so the protocol carries Rule 1's short
    // form in place of its soft line, and using-brain keeps the long form.
    const protocol = await read("protocol/PROTOCOL.md");
    expect(protocol).toContain(
      "Before you act, load any skill that may apply, even at a 1% chance. 'Too small for a skill', 'I'll just do it quickly' and 'I'll gather context first' are not reasons to skip one.",
    );
    expect(protocol).not.toContain("When a skill may apply, load it before you act.");
    expect(protocol).not.toMatch(/MUST invoke/u);
  });
});

describe("using-brain, the rest of its table in the intent doc", () => {
  test("Skill Rule 4 starts with interview-me when what is wanted is unclear, with the spec when it is clear", async () => {
    const four = rule(section(await read("skills/using-brain/SKILL.md"), "Skill Rules"), 4);
    expect(four).toMatch(/unclear[\s\S]*interview-me[\s\S]*clear[\s\S]*spec/u);
  });

  test("the interview is stateful, keeps its map in an idea file, and records as it goes", async () => {
    const text = await read("skills/using-brain/SKILL.md");
    const interview = text.slice(
      text.indexOf("### The interview"),
      text.indexOf("### The prototype"),
    );
    expect(interview).toContain("docs/ideas/IDEA-NNN-<slug>.md");
    for (const kind of ["decide row", "research row", "do row"]) {
      expect(interview).toContain(kind);
    }
    expect(interview).toMatch(/between rows/u);
    expect(interview).toMatch(/the map lives in the conversation/u);
    expect(text).toContain("### 7. Record As You Go");
    expect(text).not.toContain("docs/intent/");
  });

  test("a prototype is a row in the map, and handoff is only for another directory or harness", async () => {
    const text = await read("skills/using-brain/SKILL.md");
    const detour = text.slice(
      text.indexOf("### The prototype"),
      text.indexOf("### The vocabulary"),
    );
    expect(detour).toMatch(/prototype row/u);
    expect(detour).toMatch(/DEC file/u);
    expect(detour).toMatch(/handoff[^.]*only when[^.]*(?:directory|harness)/u);
  });

  test("the stage boundaries say the files carry the work, and no window holds define through plan", async () => {
    const text = await read("skills/using-brain/SKILL.md");
    expect(section(text, "Stage Boundaries")).toContain(
      "The files carry the work, not the window.",
    );
    expect(text).not.toMatch(/unbroken window/u);
    const reference = await read("references/brain/stage-boundaries.md");
    expect(reference).toMatch(/the files carry the work/iu);
    expect(reference).toMatch(/define, plan, build, verify, review(?:,| or| and) ship/u);
  });

  test("the lifecycle sequence is one line per stage, the six in order", async () => {
    const lifecycle = section(await read("skills/using-brain/SKILL.md"), "Lifecycle Sequence");
    const stages = [...lifecycle.matchAll(/^\d\. (?<stage>[A-Z][a-z]+):/gmu)].map(
      (match) => match.groups?.stage,
    );
    expect(stages).toEqual(["Define", "Plan", "Build", "Verify", "Review", "Ship"]);
    expect(lifecycle).toContain("`specs/SPEC-NNN-<slug>/`");
  });

  test("the lifecycle names where spec-driven-development's own stages fall", async () => {
    const lifecycle = section(await read("skills/using-brain/SKILL.md"), "Lifecycle Sequence");
    expect(lifecycle).toMatch(/Stages 0 and 1[^.;]*define/u);
    expect(lifecycle).toMatch(/Stages 2 and 3[^.;]*plan/u);
    expect(lifecycle).toMatch(/Stage 4[^.;]*build/u);
  });

  test("the commands table names the status command on each host", async () => {
    const lifecycle = section(await read("skills/using-brain/SKILL.md"), "Lifecycle Sequence");
    const row = lifecycle.split("\n").find((line) => /^\|[^|]*\| status \|/u.test(line));
    expect(row).toBeDefined();
    expect(row).toContain("/brain:status");
    expect(row).toContain("`/status`");
  });
});
