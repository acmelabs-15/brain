/**
 * The text of `docs/agents/workspace.md` that setup-brain writes: the template from the plugin,
 * with the settings the repo's own file sets, or on a first install the specs folder it picks.
 * The install writes and the migrate mode share it.
 */
import { readdir } from "node:fs/promises";
import path from "node:path";

import { folderNames } from "../lib/files";
import { defaultPaths, folderPath } from "../workspace/config";
import { readFrontmatter } from "../workspace/schema";

/** The settings in `docs/agents/workspace.md` that belong to the repo: a re-run keeps each one set. */
const repoSettings = [
  ...["decisions", "research", "ideas", "specs"].map((key) => ({ key, line: `  ${key}` })),
  { key: "max_parallel", line: "max_parallel" },
];

/** A spec folder's name, as `brain new-doc SPEC` writes it. */
const specFolderName = /^SPEC-\d{3}-[a-z0-9]+(?:-[a-z0-9]+)*$/u;

/** The specs folder of brain 0.10.0 and 0.11.0, where `brain new-doc SPEC` wrote with no `workspace.md`. */
const oldSpecsFolder = "docs/specs";

/** A setting's value as YAML: as it is when it is a number or a plain path, else quoted. */
function yamlScalar(value: string | number): string {
  const text = String(value);
  return typeof value === "number" || /^[\w./-]+$/u.test(text) ? text : JSON.stringify(text);
}

/**
 * The workspace config to write: the template, with each repo setting that `current` already
 * sets put in place of the template's value. `specs`, the specs folder of a first install, takes
 * the template's place the same way. Null when `current`'s frontmatter cannot be read, since a
 * run would then lose the repo's settings.
 */
export function workspaceText(
  template: string,
  current: string | null,
  specs?: string,
): string | null {
  const frontmatter = current === null ? null : readFrontmatter(current);
  if (frontmatter !== null && "error" in frontmatter) {
    return null;
  }
  const data = frontmatter?.data ?? {};
  const paths = typeof data.paths === "object" && data.paths !== null ? data.paths : {};
  const set: Record<string, unknown> = { specs, ...paths, max_parallel: data.max_parallel };
  // Only the frontmatter holds settings; the body is the template's, as it is.
  const end = template.indexOf("\n---\n", 3);
  let head = template.slice(0, end);
  for (const { key, line } of repoSettings) {
    const value = set[key];
    if (typeof value === "string" || typeof value === "number") {
      head = head.replace(new RegExp(`^${line}: .*$`, "mu"), () => `${line}: ${yamlScalar(value)}`);
    }
  }
  return `${head}${template.slice(end)}`;
}

/**
 * The entries directly in `folder` that are not a spec folder, sorted, each folder with its `/`.
 * Dotfiles stay out, as they do in `brain check`.
 */
async function otherEntries(folder: string): Promise<string[]> {
  const names = await readdir(folder).catch((): string[] => []);
  const folders = new Set(await folderNames(folder));
  return names
    .filter((name) => !name.startsWith("."))
    .filter((name) => !(folders.has(name) && specFolderName.test(name)))
    .map((name) => (folders.has(name) ? `${name}/` : name))
    .toSorted();
}

/**
 * The specs folder of a first install, the run that creates `docs/agents/workspace.md`:
 * `docs/specs` when it holds a spec folder already (`brain new-doc SPEC` on brain 0.10.0 or
 * 0.11.0), else the user's `answer`, else the default. When the default folder holds other files
 * and there is no answer, only the user can say where brain's specs go: the error names those
 * files and the flag that carries the answer.
 */
export async function firstSpecsFolder(
  root: string,
  answer: string | undefined,
): Promise<{ folder: string } | { error: string }> {
  const old = await folderNames(path.join(root, oldSpecsFolder));
  if (old.some((name) => specFolderName.test(name))) {
    return { folder: oldSpecsFolder };
  }
  if (answer !== undefined) {
    const checked = folderPath(answer);
    return "error" in checked ? { error: `--specs-folder ${checked.error}` } : checked;
  }
  const folder = defaultPaths.specs;
  const others = await otherEntries(path.join(root, folder));
  if (others.length === 0) {
    return { folder };
  }
  return {
    error: `${folder}/ holds files that are not spec folders (${others.join(", ")}), and only the user can say where brain's specs go: pass --specs-folder with ${oldSpecsFolder}, another folder in the repo, or ${folder}`,
  };
}
