/**
 * brain's hooks are for Claude Code only, so they live in one file outside `hooks/`, which
 * `.claude-plugin/plugin.json` names. A `hooks/hooks.json` or a root `hooks.json` is the
 * default hook file of other hosts: Codex CLI would ask the user to trust it, and Gemini CLI
 * names its events in another way. `hooks/` is vendored, so an upstream bump could add one;
 * the check runs inside `bun run lifecycle:check` and fails there.
 */
import { lstat } from "node:fs/promises";

import type { Finding } from "./finding";

/** The hook files other hosts load by default, as paths from the root. */
const defaultHookFiles = ["hooks/hooks.json", "hooks.json"] as const;

const detail =
  "exists; Codex CLI and Gemini CLI would load it. brain's hooks live in scripts/hooks/claude-code.json, named in .claude-plugin/plugin.json";

/** One finding per default hook file that exists: a file, a folder or a link, even a broken one. */
export async function checkHookFiles(root: string): Promise<Finding[]> {
  const findings: Finding[] = [];
  for (const file of defaultHookFiles) {
    const exists = await lstat(`${root}/${file}`).then(
      () => true,
      () => false,
    );
    if (exists) {
      findings.push({ kind: "hook-file", file, detail });
    }
  }
  return findings;
}
