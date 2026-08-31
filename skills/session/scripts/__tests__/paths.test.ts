import { describe, expect, test } from "bun:test";
import { assetsDir, contextFile, planDir, projectDir, sessionsDir } from "../paths";

describe("paths", () => {
  test("CLAUDE_PROJECT_DIR wins when set; the docs hang off it", () => {
    const before = process.env.CLAUDE_PROJECT_DIR;
    process.env.CLAUDE_PROJECT_DIR = "/repo";
    try {
      expect(projectDir()).toBe("/repo");
      expect(sessionsDir()).toBe("/repo/docs/sessions");
      expect(planDir()).toBe("/repo/docs/plan");
      expect(contextFile()).toBe("/repo/CONTEXT.md");
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

  test("assets are the skill's own, next to scripts/", () => {
    expect(assetsDir()).toBe(new URL("../../assets", import.meta.url).pathname);
  });
});
