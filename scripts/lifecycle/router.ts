/**
 * using-brain is the router. Its Quick Reference names every brain skill with its stage, its
 * discovery tree routes each situation to a skill, and its commands table names each stage's
 * skill. A name with no skill behind it routes work nowhere; a skill the Quick Reference misses
 * is a skill no session finds. The check runs inside `bun run lifecycle:check` and fails on either.
 */
import { readdir } from "node:fs/promises";

import type { Finding } from "./finding";

const routerFile = "skills/using-brain/SKILL.md";

/** One row of the Quick Reference: a stage and the skill it names. */
export type RouterRow = { stage: string; skill: string };

/** The lines under the `## <title>` heading, up to the next `## ` heading. */
function section(text: string, title: string): string[] {
  const lines = text.split("\n");
  const start = lines.findIndex((line) => line.trim() === `## ${title}`);
  if (start === -1) {
    return [];
  }
  const rest = lines.slice(start + 1);
  const end = rest.findIndex((line) => line.startsWith("## "));
  return end === -1 ? rest : rest.slice(0, end);
}

/** The cells of one table row. */
function cells(line: string): string[] {
  return line
    .trim()
    .replaceAll(/^\||\|$/gu, "")
    .split("|")
    .map((cell) => cell.trim());
}

/** Each table in `lines`, as its header cells and its body rows; the separator row is dropped. */
function tables(lines: string[]): { header: string[]; rows: string[][] }[] {
  const found: { header: string[]; rows: string[][] }[] = [];
  let block: string[] = [];
  for (const line of [...lines, ""]) {
    if (line.trim().startsWith("|")) {
      block.push(line);
      continue;
    }
    if (block.length >= 2) {
      const [head = "", , ...body] = block;
      found.push({ header: cells(head), rows: body.map(cells) });
    }
    block = [];
  }
  return found;
}

/** The rows of the Quick Reference, the first table under its heading. */
export function quickReference(text: string): RouterRow[] {
  const [table] = tables(section(text, "Quick Reference"));
  if (table === undefined) {
    return [];
  }
  const stage = table.header.indexOf("Stage");
  const skill = table.header.indexOf("Skill");
  return table.rows.map((row) => ({ stage: row[stage] ?? "", skill: row[skill] ?? "" }));
}

/** Every name in a table column headed Skill, anywhere in the file; a cell may hold several. */
function skillColumnNames(text: string): string[] {
  const names: string[] = [];
  for (const table of tables(text.split("\n"))) {
    const column = table.header.indexOf("Skill");
    if (column === -1) {
      continue;
    }
    for (const row of table.rows) {
      names.push(...(row[column] ?? "").split(/,\s*/u).filter((name) => name !== ""));
    }
  }
  return names;
}

/**
 * The skills the discovery tree routes to: each name right after an arrow on a branch line of
 * the tree's code block. A target that opens with a capital, a backtick or a path is not a skill.
 */
function treeTargets(text: string): string[] {
  const block = section(text, "Skill Discovery").join("\n").split("```")[1] ?? "";
  const names: string[] = [];
  for (const line of block.split("\n")) {
    if (!/[├└]──/u.test(line)) {
      continue;
    }
    for (const match of line.matchAll(/→\s*(?<name>[a-z][a-z0-9-]*)(?![\w/.`-])/gu)) {
      names.push(match.groups?.name ?? "");
    }
  }
  return names;
}

async function skillNames(root: string): Promise<string[]> {
  const entries = await readdir(`${root}/skills`, { withFileTypes: true }).catch(() => []);
  const names: string[] = [];
  for (const entry of entries) {
    if (entry.isDirectory() && (await Bun.file(`${root}/skills/${entry.name}/SKILL.md`).exists())) {
      names.push(entry.name);
    }
  }
  return names.toSorted();
}

/** One finding per skill using-brain names that does not exist, and per skill its Quick Reference misses. */
export async function checkRouter(root: string): Promise<Finding[]> {
  const router = Bun.file(`${root}/${routerFile}`);
  const finding = (detail: string): Finding => ({ kind: "router", file: routerFile, detail });
  if (!(await router.exists())) {
    return [finding("is missing; it routes work to every skill")];
  }
  const text = await router.text();
  const skills = new Set(await skillNames(root));
  const findings: Finding[] = [];
  const places: [string, string[]][] = [
    ["the discovery tree", treeTargets(text)],
    ["a Skill column", skillColumnNames(text)],
  ];
  for (const [place, names] of places) {
    for (const name of new Set(names)) {
      if (!skills.has(name)) {
        findings.push(finding(`${place} names ${name}, which has no skills/${name}/SKILL.md`));
      }
    }
  }
  const listed = new Set(quickReference(text).map((row) => row.skill));
  for (const name of skills) {
    if (name !== "using-brain" && !listed.has(name)) {
      findings.push(
        finding(`the Quick Reference misses ${name}; every skill but using-brain needs a row`),
      );
    }
  }
  return findings;
}
