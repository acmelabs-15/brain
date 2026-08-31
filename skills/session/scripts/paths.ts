/**
 * Where things are — resolved in this one module and imported everywhere else.
 *
 * The tool runs from wherever the plugin is installed, against the docs of
 * whatever repo the conversation is in, so the two anchors are different:
 * the docs system hangs off the user's project root, which is `CLAUDE_PROJECT_DIR` inside a
 * Claude Code session, the git toplevel outside one, and the working directory
 * as the last resort.
 */
import { join } from "node:path";

function fromEnv(name: string, fallback: () => string): string {
  const value = process.env[name];
  return value && value.length > 0 ? value : fallback();
}

function gitToplevel(): string | undefined {
  const r = Bun.spawnSync(["git", "rev-parse", "--show-toplevel"]);
  if (r.exitCode !== 0) return undefined;
  const dir = r.stdout.toString().trim();
  return dir.length > 0 ? dir : undefined;
}

/** The user's repo — never the plugin's. */
export function projectDir(): string {
  return fromEnv("CLAUDE_PROJECT_DIR", () => gitToplevel() ?? process.cwd());
}

export function sessionsDir(root = projectDir()): string {
  return join(root, "docs", "sessions");
}

export function planDir(root = projectDir()): string {
  return join(root, "docs", "plan");
}

export function contextFile(root = projectDir()): string {
  return join(root, "CONTEXT.md");
}
