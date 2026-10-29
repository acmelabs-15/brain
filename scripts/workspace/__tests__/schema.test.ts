import { describe, expect, test } from "bun:test";

import { checkDoc, findingLine, rowStatus, tables } from "../schema";
import type { DocType } from "../schema";

const templates = `${import.meta.dir}/../templates`;

function template(type: DocType): Promise<string> {
  return Bun.file(`${templates}/${type}.md`).text();
}

/** Fill a template the way new-doc does: the claimed ID or the spec's ID, and today's date. */
function newDocFill(text: string, id: string): string {
  return text
    .replaceAll("{{id}}", id)
    .replaceAll("{{spec}}", id)
    .replaceAll("{{date}}", "2026-10-29");
}

/** The cells of the table header that opens with `| # |`. */
function tableHeader(text: string): string[] | undefined {
  return text
    .split("\n")
    .find((line) => line.startsWith("| # |"))
    ?.split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());
}

/** The field each problem names: the text before its first colon. */
function fields(problems: string[]): string[] {
  return problems.map((problem) => problem.slice(0, problem.indexOf(":")));
}

const validIdea = `---
id: IDEA-004
status: define
---
# IDEA-004: Keep the define phase on disk
`;

const validDec = `---
id: DEC-031
status: accepted
kind: decision
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-004#03
evidence: [RES-001]
decided: 2026-10-29 by Peter
---
# DEC-031: Pin addy's skills by SHA and sync with Bun

Brain pins each upstream by SHA.
`;

const validRes = `---
id: RES-032
status: resolved
kind: research
from: IDEA-004#06
date: 2026-10-29
---
# RES-032: How Bun parses YAML dates

## Question
Does Bun.YAML.parse turn a date into a Date?

## Findings
- Bun.YAML.parse keeps 2026-10-29 as a string. Source: https://bun.com/docs/api/yaml, checked 2026-10-29.

## Follow-ups
- Does the check need a Date at all?
`;

const validSpec = `---
spec: SPEC-012
sources: [IDEA-004, DEC-031, RES-009]
---
# SPEC-012: Workspace
`;

const validPlan = `---
spec: SPEC-012
---
# SPEC-012 plan: Workspace
`;

const validTodo = `---
spec: SPEC-012
---
# SPEC-012 todo: Workspace
`;

describe("templates", () => {
  test("hold only the placeholders new-doc fills: {{id}} in a numbered file, {{spec}} in a spec folder, {{date}}", async () => {
    const found: Record<string, string[]> = {};
    for (const type of ["IDEA", "DEC", "RES", "spec", "plan", "todo"] as const) {
      const text = await template(type);
      const names = [...text.matchAll(/\{\{(?<name>[^}]*)\}\}/gu)];
      found[type] = [...new Set(names.map((match) => match.groups?.name ?? ""))].toSorted();
    }
    expect(found).toEqual({
      IDEA: ["id"],
      DEC: ["date", "id"],
      RES: ["date", "id"],
      spec: ["spec"],
      plan: ["spec"],
      todo: ["spec"],
    });
  });

  test.each([
    ["IDEA", "IDEA-004"],
    ["spec", "SPEC-012"],
    ["plan", "SPEC-012"],
    ["todo", "SPEC-012"],
  ] as const)("%s, filled by new-doc, passes its schema", async (type, id) => {
    expect(checkDoc(type, newDocFill(await template(type), id), id)).toEqual([]);
  });

  test("DEC, filled by new-doc only, fails on each field the agent still has to fill", async () => {
    const problems = checkDoc("DEC", newDocFill(await template("DEC"), "DEC-031"), "DEC-031");
    expect(fields(problems)).toEqual(["kind", "adr-test", "from", "decided"]);
  });

  test("RES, filled by new-doc only, fails on each field and the finding line the agent still has to fill", async () => {
    const problems = checkDoc("RES", newDocFill(await template("RES"), "RES-032"), "RES-032");
    expect(fields(problems)).toEqual(["kind", "from", "finding"]);
  });

  test("DEC, filled by new-doc and then by the agent, passes its schema", async () => {
    const filled = newDocFill(await template("DEC"), "DEC-031")
      .replace("<decision or architecture>", "decision")
      .replace("hard-to-reverse: <true or false>", "hard-to-reverse: false")
      .replace("surprising: <true or false>", "surprising: false")
      .replace("real-trade-off: <true or false>", "real-trade-off: true")
      .replace("<IDEA-NNN#NN>", "IDEA-004#03")
      .replace("[] # the RES files", "[RES-001] # the RES files")
      .replace("<name>", "Peter")
      .replace("<title>", "Pin addy's skills by SHA and sync with Bun");
    expect(checkDoc("DEC", filled, "DEC-031")).toEqual([]);
  });

  test("RES, filled by new-doc and then by the agent, passes its schema", async () => {
    const filled = newDocFill(await template("RES"), "RES-032")
      .replace("<research or task>", "task")
      .replace("<IDEA-NNN#NN>", "user")
      .replace(
        "- <claim>. Source: <url or path:line>, checked <YYYY-MM-DD>.",
        "- The claims folder sits in git's common folder. Source: scripts/workspace/claims.ts:12, checked 2026-10-29.",
      );
    expect(checkDoc("RES", filled, "RES-032")).toEqual([]);
  });

  test("a map and a plan open their table with the shared row header", async () => {
    expect(tableHeader(await template("IDEA"))).toEqual([...tables.map.columns]);
    expect(tableHeader(await template("plan"))).toEqual([...tables.plan.columns]);
  });

  test("a todo block carries no status line and no Dependencies field", async () => {
    const todo = await template("todo");
    expect(todo).not.toMatch(/^\**(?:Status|Dependencies)\b/mu);
  });
});

describe("a required field", () => {
  test.each([
    ["IDEA", "id", "IDEA-004", validIdea, "id: IDEA-004\n"],
    ["IDEA", "status", "IDEA-004", validIdea, "status: define\n"],
    ["DEC", "id", "DEC-031", validDec, "id: DEC-031\n"],
    ["DEC", "status", "DEC-031", validDec, "status: accepted\n"],
    ["DEC", "kind", "DEC-031", validDec, "kind: decision\n"],
    [
      "DEC",
      "adr-test",
      "DEC-031",
      validDec,
      "adr-test:\n  hard-to-reverse: false\n  surprising: false\n  real-trade-off: true\n",
    ],
    ["DEC", "from", "DEC-031", validDec, "from: IDEA-004#03\n"],
    ["DEC", "decided", "DEC-031", validDec, "decided: 2026-10-29 by Peter\n"],
    ["RES", "id", "RES-032", validRes, "id: RES-032\n"],
    ["RES", "status", "RES-032", validRes, "status: resolved\n"],
    ["RES", "kind", "RES-032", validRes, "kind: research\n"],
    ["RES", "from", "RES-032", validRes, "from: IDEA-004#06\n"],
    ["RES", "date", "RES-032", validRes, "date: 2026-10-29\n"],
    ["spec", "spec", "SPEC-012", validSpec, "spec: SPEC-012\n"],
    ["spec", "sources", "SPEC-012", validSpec, "sources: [IDEA-004, DEC-031, RES-009]\n"],
    ["plan", "spec", "SPEC-012", validPlan, "spec: SPEC-012\n"],
    ["todo", "spec", "SPEC-012", validTodo, "spec: SPEC-012\n"],
  ] as const)("%s without %s fails as missing", (type, field, id, text, line) => {
    expect(checkDoc(type, text, id)).toEqual([]);
    expect(checkDoc(type, text.replace(line, ""), id)).toContain(`${field}: missing`);
  });

  test("an empty value counts as missing", () => {
    expect(checkDoc("DEC", validDec.replace("from: IDEA-004#03", "from:"), "DEC-031")).toEqual([
      "from: missing",
    ]);
  });

  test("evidence is optional", () => {
    expect(checkDoc("DEC", validDec.replace("evidence: [RES-001]\n", ""), "DEC-031")).toEqual([]);
  });

  test("a new decision's decided date needs the name of who decided", () => {
    const dateOnly = validDec.replace("decided: 2026-10-29 by Peter", "decided: 2026-10-29");
    expect(checkDoc("DEC", dateOnly, "DEC-031")).toEqual([
      'decided: "2026-10-29" is not YYYY-MM-DD by <name>',
    ]);
  });

  test("a proposed decision needs no decided line", () => {
    const proposed = validDec
      .replace("status: accepted", "status: proposed")
      .replace("decided: 2026-10-29 by Peter\n", "");
    expect(checkDoc("DEC", proposed, "DEC-031")).toEqual([]);
  });
});

describe("a wrong value", () => {
  test.each([
    ["IDEA", "status", "status: define", "status: done", "IDEA-004", validIdea],
    ["IDEA", "id", "id: IDEA-004", "id: IDEA-4", "IDEA-004", validIdea],
    ["DEC", "status", "status: accepted", "status: superseded", "DEC-031", validDec],
    ["DEC", "kind", "kind: decision", "kind: adr", "DEC-031", validDec],
    ["DEC", "adr-test", "  surprising: false\n", "", "DEC-031", validDec],
    ["DEC", "adr-test", "surprising: false", "surprising: no", "DEC-031", validDec],
    ["DEC", "from", "from: IDEA-004#03", "from: IDEA-004#3", "DEC-031", validDec],
    ["DEC", "from", "from: IDEA-004#03", "from: <IDEA-NNN#NN>", "DEC-031", validDec],
    ["DEC", "evidence", "evidence: [RES-001]", "evidence: [notes.md]", "DEC-031", validDec],
    ["DEC", "evidence", "evidence: [RES-001]", "evidence: RES-001", "DEC-031", validDec],
    ["DEC", "decided", "by Peter", "by <name>", "DEC-031", validDec],
    ["DEC", "decided", "decided: 2026-10-29", "decided: yesterday", "DEC-031", validDec],
    ["RES", "status", "status: resolved", "status: done", "RES-032", validRes],
    ["RES", "kind", "kind: research", "kind: fact", "RES-032", validRes],
    ["RES", "date", "date: 2026-10-29", "date: 29 Oct 2026", "RES-032", validRes],
    ["spec", "sources", "RES-009]", "notes.md]", "SPEC-012", validSpec],
    ["spec", "spec", "spec: SPEC-012", "spec: SPEC-12", "SPEC-012", validSpec],
  ] as const)("%s fails on %s when %j becomes %j", (type, field, from, to, id, text) => {
    expect(checkDoc(type, text, id)).toEqual([]);
    expect(fields(checkDoc(type, text.replace(from, to), id))).toEqual([field]);
  });

  test("an ID that does not match the file's name fails", () => {
    expect(checkDoc("DEC", validDec, "DEC-030")).toContain(
      'id: "DEC-031" does not match the file\'s ID DEC-030',
    );
  });

  test("a field the template does not have fails, so a misspelt field is caught", () => {
    const misspelt = validDec.replace("from: IDEA-004#03", "form: IDEA-004#03");
    expect(checkDoc("DEC", misspelt, "DEC-031").toSorted()).toEqual([
      "form: not a field of a DEC file",
      "from: missing",
    ]);
  });

  test("a superseded decision names the decision that replaced it", () => {
    const superseded = validDec.replace("status: accepted", "status: superseded by DEC-040");
    expect(checkDoc("DEC", superseded, "DEC-031")).toEqual([]);
  });

  test.each(["IDEA-004", "SPEC-012#04", "SPEC-012", "user"])("from: %s is valid", (from) => {
    expect(checkDoc("DEC", validDec.replace("IDEA-004#03", from), "DEC-031")).toEqual([]);
  });
});

describe("kind and the ADR test", () => {
  const allTrue = validDec
    .replace("hard-to-reverse: false", "hard-to-reverse: true")
    .replace("surprising: false", "surprising: true");

  test("all three answers true make the decision an architecture decision", () => {
    expect(
      checkDoc("DEC", allTrue.replace("kind: decision", "kind: architecture"), "DEC-031"),
    ).toEqual([]);
  });

  test("kind decision with all three answers true fails", () => {
    expect(fields(checkDoc("DEC", allTrue, "DEC-031"))).toEqual(["kind"]);
  });

  test("kind architecture with one answer false fails", () => {
    const architecture = validDec.replace("kind: decision", "kind: architecture");
    expect(fields(checkDoc("DEC", architecture, "DEC-031"))).toEqual(["kind"]);
  });
});

describe("the H1", () => {
  test("a plan copied from another spec fails on its spec field and its H1", () => {
    const copied = validPlan.replaceAll("SPEC-012", "SPEC-011");
    expect(checkDoc("plan", copied, "SPEC-012")).toEqual([
      'spec: "SPEC-011" does not match the file\'s ID SPEC-012',
      'H1: "# SPEC-011 plan: Workspace" does not open with "# SPEC-012 plan: "',
    ]);
  });

  test("a spec's H1 opens with its ID alone", () => {
    const planHeading = validSpec.replace("# SPEC-012: ", "# SPEC-012 plan: ");
    expect(fields(checkDoc("spec", planHeading, "SPEC-012"))).toEqual(["H1"]);
  });

  test("an H1 with no title fails", () => {
    expect(
      fields(
        checkDoc("IDEA", validIdea.replace(": Keep the define phase on disk", ":"), "IDEA-004"),
      ),
    ).toEqual(["H1"]);
  });

  test("a file with no H1 fails", () => {
    expect(
      checkDoc("todo", validTodo.replace("# SPEC-012 todo: Workspace\n", ""), "SPEC-012"),
    ).toEqual(["H1: missing"]);
  });
});

describe("a finding line", () => {
  const line =
    "- Bun.YAML.parse keeps 2026-10-29 as a string. Source: https://bun.com/docs/api/yaml, checked 2026-10-29.";

  test.each([
    ["with an etag", `${line.slice(0, -1)}, etag: "33a64df5".`],
    [
      "with a last-modified date",
      `${line.slice(0, -1)}, last-modified: Wed, 21 Oct 2026 07:28:00 GMT`,
    ],
    [
      "with a path and line as its source",
      "- The cap is 10,000 characters. Source: docs/hooks.md:42, checked 2026-10-29.",
    ],
  ])("%s passes", (_name, finding) => {
    expect(findingLine.test(finding)).toBe(true);
    expect(checkDoc("RES", validRes.replace(line, finding), "RES-032")).toEqual([]);
  });

  test.each([
    ["no source", "- Bun keeps dates as strings, checked 2026-10-29."],
    ["no checked date", "- Bun keeps dates as strings. Source: https://bun.com/docs/api/yaml."],
    [
      "a date that is not YYYY-MM-DD",
      "- Bun keeps dates as strings. Source: https://bun.com, checked 29 Oct.",
    ],
    [
      "an unknown validator",
      "- Bun keeps dates as strings. Source: https://bun.com, checked 2026-10-29, hash: 1.",
    ],
  ])("with %s fails", (_name, finding) => {
    expect(findingLine.test(finding)).toBe(false);
    expect(checkDoc("RES", validRes.replace(line, finding), "RES-032")).toEqual([
      `finding: "${finding}" is not "- <claim>. Source: <source>, checked <YYYY-MM-DD>." with an optional ", etag: <value>" or ", last-modified: <value>"`,
    ]);
  });

  test("a bullet outside Findings is not a finding", () => {
    expect(
      checkDoc("RES", validRes.replace("- Does the check", "- Does the check, maybe,"), "RES-032"),
    ).toEqual([]);
  });
});

describe("a migrated 0.8 file", () => {
  const migratedDec = `---
id: DEC-001
migrated: 0.8
---
# 1. Lint with Oxlint

Decided 2026-09-19.
`;

  test("carries only its ID and the marker, and keeps its old H1", () => {
    expect(checkDoc("DEC", migratedDec, "DEC-001")).toEqual([]);
  });

  test("still carries its ID", () => {
    expect(checkDoc("DEC", migratedDec.replace("id: DEC-001\n", ""), "DEC-001")).toEqual([
      "id: missing",
    ]);
  });

  test("has each field it does carry checked like a new file's", () => {
    const withKind = migratedDec.replace("migrated: 0.8", "migrated: 0.8\nkind: adr");
    expect(fields(checkDoc("DEC", withKind, "DEC-001"))).toEqual(["kind"]);
  });

  test("may carry a decided date with no name, as the migration writes it from git history", () => {
    const dated = migratedDec.replace("migrated: 0.8", "migrated: 0.8\ndecided: 2026-09-19");
    expect(checkDoc("DEC", dated, "DEC-001")).toEqual([]);
  });

  test("may carry a decided date with the name of who decided", () => {
    const named = migratedDec.replace(
      "migrated: 0.8",
      "migrated: 0.8\ndecided: 2026-09-19 by Peter",
    );
    expect(checkDoc("DEC", named, "DEC-001")).toEqual([]);
  });

  test("fails on a decided value that is not a date", () => {
    const wrong = migratedDec.replace("migrated: 0.8", "migrated: 0.8\ndecided: yesterday");
    expect(checkDoc("DEC", wrong, "DEC-001")).toEqual([
      'decided: "yesterday" is not YYYY-MM-DD, or YYYY-MM-DD by <name>',
    ]);
  });

  test("names the 0.8 layout and no other", () => {
    expect(fields(checkDoc("DEC", migratedDec.replace("0.8", "0.9"), "DEC-001"))).toEqual([
      "migrated",
    ]);
  });

  test("keeps its body unchecked, findings included", () => {
    const res = `---
id: RES-001
migrated: 0.8
---
# RES-001: How brain carries agent-skills

## Findings
- Claude Code reads .claude-plugin/plugin.json.
`;
    expect(checkDoc("RES", res, "RES-001")).toEqual([]);
  });

  test.each([
    ["IDEA", "IDEA-001", "id: IDEA-001"],
    ["spec", "SPEC-001", "spec: SPEC-001"],
  ] as const)("of type %s needs only its identity field too", (type, id, identity) => {
    expect(checkDoc(type, `---\n${identity}\nmigrated: 0.8\n---\n# Old title\n`, id)).toEqual([]);
  });
});

describe("the frontmatter", () => {
  test("missing fails", () => {
    expect(checkDoc("IDEA", "# IDEA-004: Merge\n", "IDEA-004")).toEqual(["frontmatter: missing"]);
  });

  test("that is not valid YAML fails", () => {
    expect(
      fields(checkDoc("IDEA", "---\nid: [IDEA-004\n---\n# IDEA-004: Merge\n", "IDEA-004")),
    ).toEqual(["frontmatter"]);
  });

  test("that is a list, not a map of fields, fails", () => {
    expect(checkDoc("IDEA", "---\n- IDEA-004\n---\n# IDEA-004: Merge\n", "IDEA-004")).toEqual([
      "frontmatter: not a map of fields",
    ]);
  });
});

describe("a map or plan row status", () => {
  test.each(["open", "in-progress", "resolved", "superseded by 03"])("%s is valid", (status) => {
    expect(rowStatus.test(status)).toBe(true);
  });

  test.each(["done", "superseded", "superseded by 3", "superseded by DEC-031"])(
    "%s is not",
    (status) => {
      expect(rowStatus.test(status)).toBe(false);
    },
  );
});
