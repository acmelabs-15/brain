import { describe, expect, test } from "bun:test";

import { checkDoc, readFrontmatter } from "../schema";

function research(status: string, outcome: string): string {
  return `---
id: RES-001
status: ${status}
kind: research
from: IDEA-001#02
date: 2026-11-05
${outcome}---
# RES-001: Can the store emit changes?

## Findings
- The store emits each change. Source: src/store.ts:12, checked 2026-11-05.
`;
}

describe("research outcome", () => {
  test.each(["", "outcome: answered\n"])("accepts resolved research with outcome %s", (outcome) => {
    expect(checkDoc("RES", research("resolved", outcome), "RES-001")).toEqual([]);
  });

  test.each(["partial", "blocked"])("keeps %s research in progress", (outcome) => {
    expect(checkDoc("RES", research("in-progress", `outcome: ${outcome}\n`), "RES-001")).toEqual(
      [],
    );
    expect(checkDoc("RES", research("resolved", `outcome: ${outcome}\n`), "RES-001")).toContain(
      `status: resolved requires outcome: answered, not ${outcome}`,
    );
  });
});

test.each(["\n", "\r\n"])(
  "frontmatter accepts %j delimiters and preserves the exact body",
  (eol) => {
    const body = `# Body${eol}\nOriginal spacing  ${eol}`;
    expect(readFrontmatter(`---${eol}layout: 3${eol}---${eol}${body}`)).toEqual({
      data: { layout: 3 },
      body,
    });
    expect(readFrontmatter(`---${eol}---${eol}${body}`)).toEqual({ data: {}, body });
  },
);
