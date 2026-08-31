import { describe, expect, test } from "bun:test";
import { SESSIONS_INDEX_END, SESSIONS_INDEX_START, TEMPLATES, contextSection, planReadme, sessionFileTemplate, sessionsReadme } from "../templates";
import { parseHeader, template } from "../session-lib";

describe("templates", () => {
  test("the sessions README carries the index markers the tool regenerates between, and the session file shape", () => {
    const r = sessionsReadme();
    expect(r.indexOf(SESSIONS_INDEX_START)).toBeGreaterThan(-1);
    expect(r.indexOf(SESSIONS_INDEX_END)).toBeGreaterThan(r.indexOf(SESSIONS_INDEX_START));
    expect(r).toContain(sessionFileTemplate().trimEnd());
  });

  test("the session file template is the shape `new` writes, plus one worked entry", () => {
    const written = template("2026-01-01 00:00", "t", "");
    expect(parseHeader("SES-001-x.md", written).status).toBe("open");
    for (const line of ["- Goal:", "- Status: open", "- Plan:", "- Outcome:", "- Open at end:", "## Narrative", "## Changes"]) {
      expect(sessionFileTemplate()).toContain(line);
      expect(written).toContain(line);
    }
    expect(sessionFileTemplate()).toContain("- Also: <sha>");
  });

  test("the plan README carries the per-part status line in all three states and the PRD Plans table", () => {
    const p = planReadme();
    for (const s of ["> Status: planned", "> Status: in progress (session SES-006)", "> Status: done (session SES-004"]) expect(p).toContain(s);
    expect(p).toContain("## Plans");
  });

  test("the glossary section names every term the skill uses, each with an Avoid line", () => {
    const c = contextSection();
    for (const term of ["Session log", "Session", "Conversation", "Plan part", "Handoff", "Gate", "Entry", "Record"]) expect(c).toContain(`**${term}**`);
    expect(c.match(/_Avoid_/g)?.length).toBe(10);
  });

  test("every template name prints something", () => {
    for (const [name, fn] of Object.entries(TEMPLATES)) expect(fn().length, name).toBeGreaterThan(100);
  });
});

describe("references/session-log.md", () => {
  test("its session file template is byte-for-byte what the tool prints (one source, two readers)", async () => {
    const ref = await Bun.file(new URL("../../references/session-log.md", import.meta.url)).text();
    const fence = "```markdown\n" + sessionFileTemplate().trimEnd() + "\n```";
    expect(ref).toContain(fence);
  });
});
