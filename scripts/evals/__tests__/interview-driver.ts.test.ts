import { describe, expect, test } from "bun:test";

import { allowedCommand, allowedRead, answerQuestion } from "../interview-driver";

describe("interview evaluation host", () => {
  test("returns the scripted answer against the actual question text", () => {
    const input = { questions: [{ question: "Which format?", options: [] }] };
    expect(answerQuestion(input, "CSV")).toEqual({
      behavior: "allow",
      updatedInput: { ...input, answers: { "Which format?": "CSV" } },
    });
  });

  test("rejects a batch instead of inventing answers for its extra questions", () => {
    expect(() =>
      answerQuestion({ questions: [{ question: "First?" }, { question: "Second?" }] }, "Yes"),
    ).toThrow("exactly one");
  });

  test("only allows the bounded brain commands and the case's exact local action", () => {
    const brain = "/fixture/plugin/scripts/brain.ts";
    expect(allowedCommand(`bun "${brain}" check`, brain)).toBe(true);
    expect(allowedCommand(`bun "${brain}" new-doc DEC csv --title "Export CSV"`, brain)).toBe(true);
    expect(allowedCommand(`bun "${brain}" check; touch /tmp/other`, brain)).toBe(false);
    expect(allowedCommand(`bun "${brain}" new-doc DEC csv --title "$(whoami)"`, brain)).toBe(false);
    expect(allowedCommand("bun -e 'fetch(url)'", brain)).toBe(false);
    expect(allowedCommand("git push", brain)).toBe(false);
    expect(allowedCommand("bun create-resource.ts", brain, ["bun create-resource.ts"])).toBe(true);
  });

  test("bounds read tools to the fixture or selected plugin, with explicit defaults", () => {
    const cwd = "/fixture/work";
    const plugin = "/fixture/plugin";
    expect(allowedRead("Read", { file_path: "docs/idea.md" }, cwd, plugin)).toBe(true);
    expect(
      allowedRead("Read", { file_path: `${plugin}/skills/interview-me/SKILL.md` }, cwd, plugin),
    ).toBe(true);
    expect(allowedRead("Glob", { pattern: "**/*.md" }, cwd, plugin)).toBe(true);
    expect(allowedRead("Grep", { pattern: "map", path: plugin }, cwd, plugin)).toBe(true);
    expect(
      allowedRead("Read", { file_path: "/Users/person/.claude/settings.json" }, cwd, plugin),
    ).toBe(false);
    expect(allowedRead("Read", { file_path: "../../private" }, cwd, plugin)).toBe(false);
    expect(allowedRead("Read", {}, cwd, plugin)).toBe(false);
    expect(allowedRead("Glob", { pattern: "../**" }, cwd, plugin)).toBe(false);
    expect(allowedRead("Grep", { pattern: "map", path: "/fixture/other" }, cwd, plugin)).toBe(
      false,
    );
  });
});
