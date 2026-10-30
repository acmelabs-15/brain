/**
 * Names brain has retired must not come back, and brain's own glossary must define the
 * workspace terms. Both run inside `bun run lifecycle:check`.
 */
import { lstat, realpath } from "node:fs/promises";

import { git } from "../lib/git";
import { readLock } from "../sync/lib/lock";
import type { Finding } from "./finding";

type Retired = { pattern: RegExp; allowLine: RegExp; detail: string };

/** A line that says a skill is removed, retired or absorbed may still name it. */
const removalLine = /\b(?:removed|retired|retirements?|absorbs|absorbed)\b/iu;

/**
 * Each retired name, and the line text that may still name it. The rule for the old
 * glossary name is loose on purpose: any line that also names GLOSSARY passes, which covers
 * every line about the rename and could hide a stale mention on such a line. The rule for
 * a removed skill is narrow: a line passes only when it says the skill is removed, retired
 * or absorbed. A line that only names interview-me, or tells the reader to remove
 * something, still fails. Triage is also a plain word (a triage checklist, triaged audit
 * findings), so only the forms that name the skill count: a code span, a path or command,
 * the name followed by skill or on-ramp, a router arrow and a table cell. The lifecycle word is
 * stage, and phase stays for a plan's tasks that one checkpoint waits on; so only two
 * lifecycle forms count: the label of the first line of brain status (Phase, then a colon) and
 * the boundary between two stages under its old name. A line that also names the stage form
 * describes the rename and passes.
 */
export const retiredNames: readonly Retired[] = [
  {
    pattern: /CONTEXT(?:-MAP)?\.md/u,
    allowLine: /GLOSSARY/u,
    detail: "names CONTEXT.md or CONTEXT-MAP.md; the glossary is GLOSSARY.md now",
  },
  {
    pattern: /\bwayfind(?:er|ing)/iu,
    allowLine: removalLine,
    detail: "names wayfinder, which is removed; interview-me keeps the map now",
  },
  {
    pattern:
      /[`]triage[`]|(?:[/]|brain:)triage(?![\w-])|\btriage (?:skill|on-ramp)|→\s+triage\b|\|\s*triage\s*\|/iu,
    allowLine: removalLine,
    detail: "names triage, which is removed; re-seed it from mattpocock/skills if you need it",
  },
  {
    pattern: /\bPhase:/u,
    allowLine: /\bStage:/u,
    detail: "names Phase:; the lifecycle line of brain status is Stage: now",
  },
  {
    pattern: /\bphase[- ]boundar/iu,
    allowLine: /\bstage[- ]boundar/iu,
    detail:
      "names a phase boundary; the lifecycle word is stage now: stage boundary, stage-boundaries.md",
  },
];

/**
 * The terms brain's GLOSSARY.md must define, one `**Term**:` entry each: the workspace terms,
 * then the lifecycle word and the plan word.
 */
export const glossaryTerms = [
  "Idea",
  "Effort",
  "Destination",
  "Map",
  "Row",
  "Decide row",
  "Research row",
  "Do row",
  "Frontier",
  "Fog",
  "Claim",
  "Decision record",
  "Research record",
  "Workspace",
  "Layout 1",
  "Protocol",
  "Stage",
  "Phase",
] as const;

/** History keeps what was true then; test folders hold fixtures with the old names. */
const keptAsWritten = ["tasks/", "docs/research/", "docs/intent/", "CHANGELOG.md"];
/** Folder names skipped wherever they appear, and folder paths skipped from the root. */
const skippedNames = new Set(["node_modules", ".git"]);
const skippedPaths = new Set(["evals/results"]);
const textFile = /\.(?:md|toml|json|ts|ya?ml|sh)$/u;

/** True when a folder of `path` is one the scan skips: a skipped name anywhere, or a skipped path from the root. */
function inSkippedFolder(path: string): boolean {
  const folders = path.split("/").slice(0, -1);
  return (
    folders.some((name) => skippedNames.has(name)) ||
    [...skippedPaths].some((skipped) => path.startsWith(`${skipped}/`))
  );
}

/** The text files in the folder tree under `root`, dotfiles included; a symlink is never followed. */
async function scannedFiles(root: string): Promise<string[]> {
  const found = await Array.fromAsync(new Bun.Glob("**").scan({ cwd: root, dot: true }));
  return found.filter((path) => textFile.test(path) && !inSkippedFolder(path));
}

/**
 * The repo's text files. In a git repo these are the files git tracks or would track, so
 * whatever .gitignore names (worktrees, node_modules, build output) is never read; a
 * symlink is never followed. Outside git, a scan of the folder tree.
 */
async function textFiles(root: string): Promise<string[]> {
  const listed = git(root, "ls-files", "-z", "--cached", "--others", "--exclude-standard");
  const inRepo = git(root, "rev-parse", "--show-toplevel");
  if (!listed.ok || inRepo.out.trim() !== (await realpath(root))) {
    return scannedFiles(root);
  }
  const files: string[] = [];
  for (const path of listed.out.split("\0")) {
    if (!textFile.test(path)) {
      continue;
    }
    const entry = await lstat(`${root}/${path}`).catch(() => null);
    if (entry?.isFile() === true) {
      files.push(path);
    }
  }
  return files;
}

function keptFile(path: string): boolean {
  return keptAsWritten.some((prefix) => path.startsWith(prefix)) || path.includes("__tests__/");
}

/** Every line in a brain-owned text file that names a retired name. */
export async function checkRetiredNames(root: string): Promise<Finding[]> {
  const lock = await readLock(`${root}/upstream.lock.json`);
  const findings: Finding[] = [];
  const files = await textFiles(root);
  for (const file of files.toSorted()) {
    if (keptFile(file) || Object.hasOwn(lock.files, file)) {
      continue;
    }
    const text = await Bun.file(`${root}/${file}`).text();
    for (const [index, line] of text.split("\n").entries()) {
      for (const name of retiredNames) {
        if (name.pattern.test(line) && !name.allowLine.test(line)) {
          findings.push({ kind: "retired-name", file, detail: `line ${index + 1} ${name.detail}` });
        }
      }
    }
  }
  return findings;
}

/** One finding per workspace term that brain's GLOSSARY.md does not define. */
export async function checkGlossaryTerms(root: string): Promise<Finding[]> {
  const glossary = Bun.file(`${root}/GLOSSARY.md`);
  if (!(await glossary.exists())) {
    return [{ kind: "glossary-term", file: "GLOSSARY.md", detail: "brain's glossary is missing" }];
  }
  const text = await glossary.text();
  return glossaryTerms
    .filter((term) => !text.includes(`**${term}**:`))
    .map((term) => ({
      kind: "glossary-term",
      file: "GLOSSARY.md",
      detail: `no entry for ${term}`,
    }));
}

/**
 * The fallback that reads an old CONTEXT.md when GLOSSARY.md is missing ships in 0.9.0 (the
 * rename) and 0.10.0 (the workspace work). From 0.11.0 on, the check fails while the
 * fallback sentence is still in a file, so that release removes it, with this check.
 */
export const fallbackRemovedIn = "0.11.0";
const fallbackFiles = ["plain-talk/PLAIN-TALK.md", "skills/setup-brain/domain.md"];
const fallbackSentence = /old `CONTEXT\.md`/u;

/** A version's major, minor and patch numbers; a prerelease counts as its release. */
function versionParts(version: string): number[] {
  return (version.split("-")[0] ?? "").split(".").map(Number);
}

/** Whether `version` is at or past `floor`. */
function atOrPast(version: string, floor: string): boolean {
  const [have, need] = [versionParts(version), versionParts(floor)];
  for (let i = 0; i < 3; i += 1) {
    const [a, b] = [have[i] ?? 0, need[i] ?? 0];
    if (a !== b) {
      return a > b;
    }
  }
  return true;
}

/** One finding per file that still holds the fallback sentence once it is due to go. */
export async function checkFallbackExpiry(root: string): Promise<Finding[]> {
  const pkg = Bun.file(`${root}/package.json`);
  if (!(await pkg.exists())) {
    return [];
  }
  const { version } = (await pkg.json()) as { version?: string };
  if (version === undefined || !atOrPast(version, fallbackRemovedIn)) {
    return [];
  }
  const findings: Finding[] = [];
  for (const file of fallbackFiles) {
    const text = Bun.file(`${root}/${file}`);
    if ((await text.exists()) && fallbackSentence.test(await text.text())) {
      findings.push({
        kind: "expired-fallback",
        file,
        detail: `version ${version} is at or past ${fallbackRemovedIn}: remove the fallback sentence for the old glossary name`,
      });
    }
  }
  return findings;
}
