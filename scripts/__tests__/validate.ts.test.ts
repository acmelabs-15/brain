import { describe, expect, test } from "bun:test";

import { claudeVerdict } from "../validate";

const root = "/tmp/brain-validation";
const warning = {
  path: "root",
  code: null,
  message:
    "CLAUDE.md at the plugin root is not loaded as project context. To ship context with your plugin, use a skill (skills/<name>/SKILL.md) instead.",
};

function report() {
  return {
    success: false,
    strict: true,
    target: `${root}/.claude-plugin/plugin.json`,
    manifest: {
      file: `${root}/.claude-plugin/plugin.json`,
      type: "plugin",
      errors: [],
      warnings: [],
      notes: [],
    },
    contents: [{ file: `${root}/CLAUDE.md`, errors: [], warnings: [warning], notes: [] }],
    directory: { profile: null, findings: [], undecided: [], incomplete: false, failure: null },
  };
}

describe("Claude strict validation policy", () => {
  test("accepts the approved contributor-file warning without calling it a strict pass", () => {
    expect(claudeVerdict(JSON.stringify(report()), 1, root)).toBe(
      "accepted with one approved warning",
    );
  });

  test("rejects a report from a different target or an incomplete directory check", () => {
    const incomplete = { ...report(), directory: { ...report().directory, incomplete: true } };
    expect(claudeVerdict(JSON.stringify(incomplete), 1, root)).toBe("rejected");
    const other = { ...report(), target: "/tmp/other/.claude-plugin/plugin.json" };
    expect(claudeVerdict(JSON.stringify(other), 1, root)).toBe("rejected");
  });

  test("requires the exact diagnostic on the exact root file", () => {
    for (const changed of [
      { ...warning, message: `${warning.message} Changed contract.` },
      { ...warning, code: "NEW_CODE" },
      { ...warning, path: "other" },
    ]) {
      const value = {
        ...report(),
        contents: [{ file: `${root}/CLAUDE.md`, errors: [], warnings: [changed], notes: [] }],
      };
      expect(claudeVerdict(JSON.stringify(value), 1, root)).toBe("rejected");
    }
    const value = {
      ...report(),
      contents: [{ file: `${root}/nested/CLAUDE.md`, errors: [], warnings: [warning], notes: [] }],
    };
    expect(claudeVerdict(JSON.stringify(value), 1, root)).toBe("rejected");
  });

  test("rejects additional warnings, errors, malformed reports and unexpected exits", () => {
    const original = report();
    const extra = {
      ...original,
      manifest: { ...original.manifest, warnings: [{ message: "Missing author" }] },
    };
    const error = {
      ...original,
      contents: [
        ...original.contents,
        {
          file: `${root}/skills/broken/SKILL.md`,
          errors: [{ message: "Missing description" }],
          warnings: [],
          notes: [],
        },
      ],
    };
    for (const value of [extra, error, {}, null, { ...original, contents: [null] }]) {
      expect(claudeVerdict(JSON.stringify(value), 1, root)).toBe("rejected");
    }
    expect(claudeVerdict("not JSON", 1, root)).toBe("rejected");
    for (const code of [0, 2, 143, null]) {
      expect(claudeVerdict(JSON.stringify(original), code, root)).toBe("rejected");
    }
  });

  test("distinguishes a clean strict pass and keeps non-gating directory advice visible", () => {
    const clean = { ...report(), success: true, contents: [] };
    expect(claudeVerdict(JSON.stringify(clean), 0, root)).toBe("strict validation passed");
    expect(claudeVerdict(JSON.stringify({ ...clean, strict: false }), 0, root)).toBe("rejected");
    const advice = {
      ...report(),
      directory: {
        ...report().directory,
        findings: [{ code: "ICON_MISSING", severity: "warning", blocking: false, hold: false }],
      },
    };
    expect(claudeVerdict(JSON.stringify(advice), 1, root)).toBe(
      "accepted with one approved warning",
    );
    const failed = { ...advice, directory: { ...advice.directory, failure: "failed" } };
    expect(claudeVerdict(JSON.stringify(failed), 1, root)).toBe("rejected");
  });
});
