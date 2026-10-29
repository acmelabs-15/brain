/**
 * The Claude manifest's `agents` list replaces Claude Code's scan of `agents/`, so an agent
 * file the list misses never loads. The check runs inside `bun run lifecycle:check`, and an
 * upstream bump that adds an agent fails there until the list names it.
 */
import { readdir, stat } from "node:fs/promises";

import type { Finding } from "./finding";

const manifestPath = ".claude-plugin/plugin.json";

/** The `agents` field as a list: one path, a list of paths, or none. */
function listedPaths(raw: unknown): string[] {
  if (typeof raw === "string") {
    return [raw];
  }
  return Array.isArray(raw) ? raw.filter((entry) => typeof entry === "string") : [];
}

async function isMarkdownFile(path: string): Promise<boolean> {
  const info = await stat(path).catch(() => null);
  return info !== null && info.isFile() && path.endsWith(".md");
}

/** Every top-level `.md` file in `agents/`, as a path from the root. */
async function agentFiles(root: string): Promise<string[]> {
  const entries = await readdir(`${root}/agents`, { withFileTypes: true }).catch(() => []);
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => `agents/${entry.name}`)
    .toSorted();
}

/** One finding per agent file the list misses, and per listed path that is not an agent file. */
export async function checkAgentList(root: string): Promise<Finding[]> {
  const manifest = Bun.file(`${root}/${manifestPath}`);
  const raw = (await manifest.exists()) ? ((await manifest.json()) as { agents?: unknown }) : {};
  const listed = listedPaths(raw.agents);
  const findings: Finding[] = [];
  const finding = (detail: string): Finding => ({ kind: "agent-list", file: manifestPath, detail });
  for (const path of listed) {
    if (!path.startsWith("./")) {
      findings.push(finding(`lists ${path}; every path starts with ./`));
    }
    if (!(await isMarkdownFile(`${root}/${path}`))) {
      findings.push(finding(`lists ${path}, which is not an existing .md file`));
    }
  }
  const named = new Set(listed.map((path) => path.replace(/^\.\//u, "")));
  for (const file of await agentFiles(root)) {
    if (!named.has(file)) {
      findings.push(finding(`${file} is not in the agents list`));
    }
  }
  return findings;
}
