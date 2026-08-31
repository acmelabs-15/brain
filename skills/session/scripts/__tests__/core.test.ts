import { describe, expect, test } from "bun:test";
import {
  declinesEntry,
  FILL,
  id,
  indexRow,
  knownShas,
  MAX_FILES,
  parseHeader,
  placeholderCount,
  planDir,
  projectDir,
  render,
  selectSession,
  servesPlan,
  sessionFileTemplate,
  sessionsDir,
  sessionsReadme,
  SESSIONS_INDEX_END,
  SESSIONS_INDEX_START,
  slugify,
  template,
  TEMPLATES,
  withStatus,
} from "../core";
import type { Session } from "../core";

const header = (extra = "") => `# 2026-08-30 18:00 · Docs for rehydration

- Goal: Make a fresh session able to pick up where the last one stopped.
${extra}- Outcome: ${FILL}

## Narrative

${FILL} — what was asked.

## Changes (one entry per commit, in order)
`;

const session = (seq: number, status: "in progress" | "done", title = `s${seq}`): Session => ({
  seq,
  started: "2026-08-30 18:00",
  title,
  goal: "g",
  status,
  plan: "",
  file: `/x/SES-00${seq}-${title}.md`,
  name: `SES-00${seq}-${title}.md`,
  text: "",
});

describe("paths", () => {
  test("CLAUDE_PROJECT_DIR wins when set; the docs hang off it", () => {
    const before = process.env.CLAUDE_PROJECT_DIR;
    process.env.CLAUDE_PROJECT_DIR = "/repo";
    try {
      expect(projectDir()).toBe("/repo");
      expect(sessionsDir()).toBe("/repo/docs/sessions");
      expect(planDir()).toBe("/repo/docs/plan");
    } finally {
      if (before === undefined) delete process.env.CLAUDE_PROJECT_DIR;
      else process.env.CLAUDE_PROJECT_DIR = before;
    }
  });

  test("without the variable the git toplevel is the root (this repo)", () => {
    const before = process.env.CLAUDE_PROJECT_DIR;
    delete process.env.CLAUDE_PROJECT_DIR;
    try {
      expect(projectDir()).toBe(new URL("../../../..", import.meta.url).pathname.replace(/\/$/, ""));
    } finally {
      if (before !== undefined) process.env.CLAUDE_PROJECT_DIR = before;
    }
  });
});

describe("parseHeader", () => {
  test("reads seq, timestamp, title, goal, status and plan", () => {
    const h = parseHeader(
      "SES-004-docs-rehydration.md",
      header("- Status: done\n- Plan: PLAN-002 · nested CLAUDE.md\n"),
    );
    expect(h).toEqual({
      seq: 4,
      started: "2026-08-30 18:00",
      title: "Docs for rehydration",
      goal: "Make a fresh session able to pick up where the last one stopped.",
      status: "done",
      plan: "PLAN-002 · nested CLAUDE.md",
    });
  });

  test("a file without a Status line is in progress (another conversation's, or pre-ADR-020)", () => {
    expect(parseHeader("SES-005-rehydration.md", header()).status).toBe("in progress");
  });

  test("the pre-ADR-001 words open / closed are read as in progress / done", () => {
    expect(parseHeader("SES-005-x.md", header("- Status: open\n")).status).toBe("in progress");
    expect(parseHeader("SES-005-x.md", header("- Status: closed\n")).status).toBe("done");
  });

  test("an em-dash Plan means unplanned", () => {
    expect(parseHeader("SES-006-x.md", header("- Status: in progress\n- Plan: —\n")).plan).toBe("");
  });

  test("rejects an unknown status and a bad heading", () => {
    expect(() => parseHeader("SES-006-x.md", header("- Status: paused\n"))).toThrow(
      /Status must be one of in progress \| done/,
    );
    expect(() => parseHeader("SES-006-x.md", "# no timestamp\n- Goal: g")).toThrow(/first heading/);
    expect(() => parseHeader("notes.md", header())).toThrow(/not a session file name/);
  });
});

describe("selectSession", () => {
  test("a named session wins whatever is in progress, by id, number or file name", () => {
    const all = [session(4, "done", "docs"), session(5, "in progress", "rehydration")];
    expect(selectSession(all, "SES-004").seq).toBe(4);
    expect(selectSession(all, "4").seq).toBe(4);
    expect(selectSession(all, "SES-004-docs.md").seq).toBe(4);
    expect(() => selectSession(all, "SES-009")).toThrow(/no session file matches/);
  });

  test("with nothing named, the one session in progress is the target", () => {
    const all = [session(3, "done"), session(4, "in progress")];
    expect(selectSession(all, undefined).seq).toBe(4);
  });

  test("no session in progress says how to name or start one", () => {
    expect(() => selectSession([session(3, "done")], undefined)).toThrow(
      /no session in progress — name one with `--session SES-NNN` or start one with `new <slug>`/,
    );
  });

  test("several sessions in progress refuse to guess and list them", () => {
    const all = [session(4, "in progress", "docs"), session(5, "in progress", "rehydration")];
    expect(() => selectSession(all, undefined)).toThrow(
      /2 sessions in progress — say which with --session: SES-004 \(docs\), SES-005 \(rehydration\)/,
    );
  });
});

describe("withStatus", () => {
  test("replaces an existing Status line in place", () => {
    const text = withStatus(header("- Status: in progress\n"), "done");
    expect(text).toContain("- Status: done");
    expect(text.match(/^- Status:/gm)).toHaveLength(1);
  });

  test("inserts a Status line right after Goal when the file has none", () => {
    const text = withStatus(header(), "done");
    expect(text).toMatch(/^- Goal: .+\n- Status: done\n- Outcome:/m);
  });
});

describe("template, placeholders, index", () => {
  test("a new session starts in progress with its plan, and carries the placeholders", () => {
    const t = template("2026-08-31 09:00", "visual grouping", "PLAN-001 · Phase 1");
    expect(t).toContain("- Status: in progress\n- Plan: PLAN-001 · Phase 1\n");
    expect(placeholderCount(t)).toBe(2); // Goal + Narrative; Outcome waits for close
    expect(placeholderCount(t, true)).toBe(3);
    expect(template("2026-08-31 09:00", "x", "")).toContain("- Plan: —\n");
    expect(parseHeader("SES-001-x.md", template("2026-01-01 00:00", "t", "")).status).toBe("in progress");
  });

  test("the index row shows status and plan", () => {
    const s = { ...session(6, "in progress", "grouping"), plan: "PLAN-001", goal: "Ship it" };
    expect(indexRow(s)).toBe(
      "- [SES-006 · 2026-08-30 18:00 · grouping](SES-006-grouping.md) — in progress · PLAN-001 — Ship it",
    );
  });

  test("slugify and id", () => {
    expect(slugify("Fix 2FA — again!")).toBe("fix-2fa-again");
    expect(id(7)).toBe("SES-007");
  });
});

describe("what a session accounts for (ADR-021)", () => {
  test("knownShas: entry headings plus the shas parent entries vouch for on Also lines", () => {
    const text = `## Changes

### 2026-08-30 · feat(session): the model · 66b083d

- Summary: …
- Also: 5476479 — its docs(session) fix-up
- Also: a8f44b2 — typo in the ADR
- Files:
  - \`x\` (+1/−0) — a phrase

### 2026-08-30 · eval(session): iteration 3 · 4e7f673
`;
    expect(knownShas(text)).toEqual(["66b083d", "4e7f673", "5476479", "a8f44b2"]);
  });

  test("declinesEntry: only the trailer, anywhere in the body, case-insensitive", () => {
    expect(declinesEntry("Biome reformat after the fixer moved.\n\nSession-entry: none\n")).toBe(
      true,
    );
    expect(declinesEntry("session-entry: NONE")).toBe(true);
    expect(declinesEntry("Mentions Session-entry: none in prose, not as a line")).toBe(false);
    expect(declinesEntry("")).toBe(false);
  });
});

describe("the entry skeleton", () => {
  const commit = {
    sha: "9c1d2e3f4a5b6c7d",
    date: "2026-08-31",
    subject: "fix(finder): keep_the cursor",
    body: "",
    files: [
      { path: "src/picker.ts", added: 12, deleted: 3 },
      { path: "assets/icon.png", added: null, deleted: null },
    ],
  };

  test("render: the heading with the short sha, the placeholders, one line per file, binary marked", () => {
    const text = render(commit, undefined);
    expect(text).toContain("### 2026-08-31 · fix(finder): keep\\_the cursor · 9c1d2e3");
    expect(text).toContain(`- Summary: ${FILL}\n- Why: ${FILL}\n- Files:\n`);
    expect(text).toContain("  - `src/picker.ts` (+12/−3) — _(fill in)_");
    expect(text).toContain("  - `assets/icon.png` (binary) — _(fill in)_");
    expect(knownShas(text)).toEqual(["9c1d2e3"]);
  });

  test("render: a tagged commit gets its release marker; past MAX_FILES the list is cut with a pointer", () => {
    expect(render(commit, "v1.2.0")).toContain("> **Released v1.2.0** — tag on this commit.");
    const many = { ...commit, files: Array.from({ length: MAX_FILES + 5 }, (_, i) => ({ path: `f${i}`, added: 1, deleted: 0 })) };
    expect(render(many, undefined)).toContain(`… +5 more (\`git show --stat 9c1d2e3\`)`);
    expect(render({ ...commit, files: [] }, undefined)).toContain("_(no files)_");
  });

  test("SKILL.md's entry template shows the skeleton's own lines, filled (one shape, two readers)", async () => {
    const skill = await Bun.file(new URL("../../SKILL.md", import.meta.url)).text();
    for (const line of ["### YYYY-MM-DD · type(scope): subject · sha", "- Summary: [", "- Why: [", "- Also: [sha] — [", "- Files:", "  - `path/to/file` (+a/−d) — [", "- Notes: ["]) {
      expect(skill, line).toContain(line);
    }
  });
});

describe("servesPlan", () => {
  test("matches the plan id at the start of the Plan line, any part, any case", () => {
    expect(servesPlan("PLAN-003 · part 2", "PLAN-003")).toBe(true);
    expect(servesPlan("plan-003", "PLAN-003")).toBe(true);
    expect(servesPlan("PLAN-0031 · x", "PLAN-003")).toBe(false);
    expect(servesPlan("", "PLAN-003")).toBe(false);
    expect(servesPlan("PLAN-003", "")).toBe(false);
  });
});

describe("the documents init writes", () => {
  test("the sessions README carries the index markers the tool regenerates between, and the session file shape", () => {
    const r = sessionsReadme();
    expect(r.indexOf(SESSIONS_INDEX_START)).toBeGreaterThan(-1);
    expect(r.indexOf(SESSIONS_INDEX_END)).toBeGreaterThan(r.indexOf(SESSIONS_INDEX_START));
    expect(r).toContain(sessionFileTemplate().trimEnd());
    expect(r).toContain("three acts");
  });

  test("the session file template is the shape `new` writes, plus one worked entry", () => {
    for (const line of ["- Goal:", "- Status: in progress", "- Plan:", "- Outcome:", "## Narrative", "## Changes"]) {
      expect(sessionFileTemplate()).toContain(line);
      expect(template("2026-01-01 00:00", "t", "")).toContain(line);
    }
    // `[sha]` is the template's own slot form, as in `[what that fix-up fixed]` beside it;
    // `<sha>` is the prose form the rules use (SKILL.md).
    expect(sessionFileTemplate()).toContain("- Also: [sha]");
  });

  test("every template name prints something, and CONTEXT.md is not among them (ADR-004)", () => {
    for (const [name, fn] of Object.entries(TEMPLATES)) expect(fn().length, name).toBeGreaterThan(100);
    expect(Object.keys(TEMPLATES).sort()).toEqual(["session", "sessions-readme"]);
  });
});

describe("the plugin's own glossary (skills/session/CONTEXT.md, the one home of the words — ADR-004)", () => {
  test("names every term the skill uses, each with an Avoid line, and none of the retired ones", async () => {
    const c = await Bun.file(new URL("../../CONTEXT.md", import.meta.url)).text();
    for (const term of ["Session log", "Session", "Conversation", "Status", "Start", "Log", "Close", "Plan part", "Gate", "Entry", "Record"]) expect(c).toContain(`**${term}**`);
    // the acts entry is one glossary entry (Start / Log / Close), so nine _Avoid_ lines for nine entries
    // (counted at line start: the prose below the glossary mentions the word)
    expect(c.match(/^_Avoid_:/gm)?.length).toBe(9);
    expect(c).toContain("ledger (former name, retired 2026-08-30)");
    for (const retired of ["**Join**", "**Leave**", "**Handoff**", "Open at end"]) expect(c).not.toContain(retired);
  });
});
