import { describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";

import {
  allowedArtifactWrite,
  allowedCommand,
  allowedRead,
  answerQuestion,
} from "../interview-driver";

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

  test("only permits writes to the interview's Markdown records and glossary", () => {
    const cwd = "/fixture/work";
    for (const file of [
      "docs/ideas/IDEA-001-export.md",
      "docs/decisions/DEC-001-format.md",
      "docs/research/RES-001-account.md",
      "GLOSSARY.md",
    ]) {
      expect(allowedArtifactWrite({ file_path: file }, cwd)).toBe(true);
      expect(allowedArtifactWrite({ file_path: `${cwd}/${file}` }, cwd)).toBe(true);
    }
    for (const file of [
      "create-resource.ts",
      "bunfig.toml",
      ".env",
      "receipt.json",
      "README.md",
      "docs/agents/workspace.md",
      "docs/ideas/../decisions/DEC-001.md",
      "docs/ideas/../../create-resource.ts",
      "docs/ideas/code.ts",
      "/tmp/outside.md",
    ]) {
      expect(allowedArtifactWrite({ file_path: file }, cwd)).toBe(false);
    }
    expect(allowedArtifactWrite({}, cwd)).toBe(false);
  });

  test("rejects record symlinks to scripts and artifact directories outside the fixture", async () => {
    const root = await mkdtemp(`${tmpdir()}/interview-write-policy-`);
    const cwd = `${root}/fixture`;
    try {
      await mkdir(`${cwd}/docs/ideas`, { recursive: true });
      await mkdir(`${root}/outside`);
      await Bun.write(`${cwd}/create-resource.ts`, "// read-only fixture source\n");
      await symlink("../../create-resource.ts", `${cwd}/docs/ideas/link.md`);
      await symlink(`${root}/outside/nonexistent.md`, `${cwd}/docs/ideas/dangling.md`);
      await symlink(`${root}/outside`, `${cwd}/docs/research`);
      expect(allowedArtifactWrite({ file_path: "docs/ideas/link.md" }, cwd)).toBe(false);
      expect(allowedArtifactWrite({ file_path: "docs/ideas/dangling.md" }, cwd)).toBe(false);
      expect(allowedArtifactWrite({ file_path: "docs/research/RES-001-new.md" }, cwd)).toBe(false);
      expect(allowedArtifactWrite({ file_path: "docs/ideas/IDEA-002-new.md" }, cwd)).toBe(true);
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });
});
