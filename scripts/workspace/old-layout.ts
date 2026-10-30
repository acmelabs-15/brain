/**
 * The brain 0.8 layout: the files a repo on brain 0.8 keeps outside the workspace, and the ADRs
 * that came before decision records. `brain status` names them on a repo to migrate, and
 * setup-brain's migrate mode moves them; both read them from here, so the two lists agree.
 *
 * A repo is migrated when its `docs/agents/workspace.md` records `layout: 2`: the migrate mode
 * writes that line in its commit, and from then on a run of it changes nothing.
 */
import path from "node:path";

import { fileNames } from "../lib/files";
import { configFile } from "./config";
import type { Paths } from "./config";
import { readFrontmatter } from "./schema";

/** The layout a migrated repo's `workspace.md` records. */
export const currentLayout = 2;

/** Each glossary file's 0.8 name, beside the name setup-brain moves it to. */
export const glossaryMoves = [
  ["CONTEXT.md", "GLOSSARY.md"],
  ["CONTEXT-MAP.md", "GLOSSARY-MAP.md"],
] as const;

/** The spec of a one-spec repo, at the root. */
export const rootSpec = "SPEC.md";

/** The folder of a repo with one spec per module, and its capability map. */
export const specFolder = "spec";

/** The plan and the todo, which move into the spec folder they belong to. */
export const planFiles = ["tasks/plan.md", "tasks/todo.md"] as const;

/** The folder of the intent docs, which become ideas when the user picks them. */
export const intentFolder = "docs/intent";

/** setup-brain 0.8's tracker files. With triage gone, brain no longer reads them. */
export const trackerFiles = [
  "docs/agents/issue-tracker.md",
  "docs/agents/triage-labels.md",
] as const;

/** An ADR's name, in the 0.8 decisions folder and in an ADR folder: `0001-<slug>.md`. */
export const adrName = /^\d{4}-(?<slug>.+)\.md$/u;

/** The ADR folders of other tools; adr-tools also names its folder in a root `.adr-dir`. */
const adrFolderNames = ["doc/adr", "docs/adr", "docs/adrs", "docs/architecture/decisions"];

/**
 * The 0.8 files a report names, and the glob that finds each. A folder counts only with a
 * Markdown file in it: a Ruby repo's `spec/` holds tests.
 */
const oldLayout: [shown: string, pattern: string][] = [
  ...glossaryMoves.map(([old]): [string, string] => [old, old]),
  [rootSpec, rootSpec],
  [`${specFolder}/`, `${specFolder}/*.md`],
  ...planFiles.map((file): [string, string] => [file, file]),
  [`${intentFolder}/`, `${intentFolder}/*.md`],
  ...trackerFiles.map((file): [string, string] => [file, file]),
];

/** The 0.8 files under `root`, as a report names them: the glossary, specs, plan, intent docs and tracker files. */
export async function findOldLayout(root: string): Promise<string[]> {
  const found: string[] = [];
  for (const [shown, pattern] of oldLayout) {
    const first = await new Bun.Glob(pattern).scan({ cwd: root }).next();
    if (first.done !== true) {
      found.push(shown);
    }
  }
  return found;
}

/** The layout that the repo's `workspace.md` records; null when the file or its `layout` is absent. */
export async function recordedLayout(root: string): Promise<number | null> {
  const file = Bun.file(path.join(root, configFile));
  const frontmatter = (await file.exists()) ? readFrontmatter(await file.text()) : null;
  const layout = frontmatter !== null && "data" in frontmatter ? frontmatter.data.layout : null;
  return typeof layout === "number" ? layout : null;
}

/** The folder a root `.adr-dir` names, as adr-tools writes it; null when there is none. */
async function adrDirFile(root: string): Promise<string | null> {
  const file = Bun.file(path.join(root, ".adr-dir"));
  if (!(await file.exists())) {
    return null;
  }
  const text = await file.text();
  const folder = path.normalize(text.trim()).replace(/\/+$/u, "");
  const inside = folder !== "" && !path.isAbsolute(folder) && !folder.startsWith("..");
  return inside ? folder : null;
}

/**
 * The ADR folders of other tools in the repo, in path order: each folder that holds an ADR
 * (`0001-<slug>.md`) directly, other than the decisions folder. They are the folders the migrate
 * mode offers to move into the decisions folder.
 */
export async function findAdrFolders(root: string, paths: Paths): Promise<string[]> {
  const named = await adrDirFile(root);
  const candidates = new Set([...adrFolderNames, ...(named === null ? [] : [named])]);
  const found: string[] = [];
  for (const folder of candidates) {
    if (folder === paths.decisions) {
      continue;
    }
    const names = await fileNames(path.join(root, folder));
    if (names.some((name) => adrName.test(name))) {
      found.push(folder);
    }
  }
  return found.toSorted();
}

/** The files of `folder` under `root` whose names match `pattern`, as paths from the root. */
export async function filesNamed(root: string, folder: string, pattern: RegExp): Promise<string[]> {
  const names = await fileNames(path.join(root, folder));
  return names.filter((name) => pattern.test(name)).map((name) => `${folder}/${name}`);
}

/**
 * Everything under `root` that the migrate mode moves or changes beyond the glossary, as a
 * report names it: the 0.8 files, each 0.8 ADR in the decisions folder, each ADR folder, and each
 * DEC or RES file that has no frontmatter.
 */
export async function findToMigrate(root: string, paths: Paths): Promise<string[]> {
  const glossary = new Set<string>(glossaryMoves.map(([old]) => old));
  const found = await findOldLayout(root);
  const old = found.filter((shown) => !glossary.has(shown));
  const adrs = await filesNamed(root, paths.decisions, adrName);
  const adrFolders = await findAdrFolders(root, paths);
  const folders = adrFolders.map((folder) => `${folder}/`);
  const bare: string[] = [];
  for (const [type, folder] of [
    ["DEC", paths.decisions],
    ["RES", paths.research],
  ] as const) {
    for (const file of await filesNamed(
      root,
      folder,
      new RegExp(`^${type}-\\d{3}-.+\\.md$`, "u"),
    )) {
      if (readFrontmatter(await Bun.file(path.join(root, file)).text()) === null) {
        bare.push(file);
      }
    }
  }
  return [...old, ...adrs, ...folders, ...bare];
}
