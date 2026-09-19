/**
 * Write what brain's skills assume is in a repo.
 *
 *   bun run scripts/setup/write.ts --root <repo> --layout single|multi [--tracker local|github|gitlab] [--repo owner/name] [--dry-run] [--brain <plugin root>]
 *
 * AGENTS.md gets the plain-talk block between its markers, created if absent.
 * CLAUDE.md and GEMINI.md get an @AGENTS.md import line when they exist and lack it.
 * docs/agents/domain.md gets the consumer rules with the layout named.
 * docs/agents/issue-tracker.md and docs/agents/triage-labels.md come from the templates, local tracker by default.
 * Every change is listed; --dry-run lists and writes nothing.
 */
import { mkdir } from "node:fs/promises";

export type Layout = "single" | "multi";
export type Tracker = "local" | "github" | "gitlab";
export type Change = { path: string; action: "created" | "updated" | "unchanged" };
export type SetupInput = {
  brain: string;
  root: string;
  layout: Layout;
  dryRun: boolean;
  tracker?: Tracker;
  repoSlug?: string;
};

export const startMarker = "<!-- brain:plain-talk:start -->";
export const endMarker = "<!-- brain:plain-talk:end -->";
const importLine = "@AGENTS.md";

/** Insert `block` between the markers, or append it after one blank line. Text outside the markers is kept. */
export function replaceBlock(text: string, block: string, fileName: string): string {
  const from = text.indexOf(startMarker);
  const to = text.indexOf(endMarker);
  if (from === -1 && to === -1) {
    return text.trim() === "" ? block : `${text.trimEnd()}\n\n${block}`;
  }
  if (from === -1 || to === -1 || to < from) {
    throw new Error(
      `${fileName} has a start marker without an end marker, or the markers are out of order`,
    );
  }
  const after = text.slice(to + endMarker.length).replace(/^\n/u, "");
  return `${text.slice(0, from)}${block}${after}`;
}

/** Add the import line at the end when the file lacks it. */
export function addImport(text: string): string {
  const lines = text.split("\n");
  if (lines.some((line) => line.trim() === importLine)) {
    return text;
  }
  return `${text.trimEnd()}\n\n${importLine}\n`;
}

async function readIfPresent(path: string): Promise<string | null> {
  const file = Bun.file(path);
  return (await file.exists()) ? file.text() : null;
}

async function put(
  input: SetupInput,
  path: string,
  next: string,
  create: boolean,
): Promise<Change> {
  const full = `${input.root}/${path}`;
  const current = await readIfPresent(full);
  if (current === null && !create) {
    return { path, action: "unchanged" };
  }
  if (current === next) {
    return { path, action: "unchanged" };
  }
  if (!input.dryRun) {
    await mkdir(full.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(full, next);
  }
  return { path, action: current === null ? "created" : "updated" };
}

export async function writeSetup(input: SetupInput): Promise<Change[]> {
  const block = await Bun.file(`${input.brain}/plain-talk/AGENTS-block.md`).text();
  const domainTemplate = await Bun.file(`${input.brain}/skills/setup-brain/domain.md`).text();
  const layoutName = input.layout === "single" ? "single-context" : "multi-context";
  const changes: Change[] = [];

  const agents = (await readIfPresent(`${input.root}/AGENTS.md`)) ?? "";
  changes.push(await put(input, "AGENTS.md", replaceBlock(agents, block, "AGENTS.md"), true));

  for (const name of ["CLAUDE.md", "GEMINI.md"]) {
    const current = await readIfPresent(`${input.root}/${name}`);
    if (current === null) {
      continue;
    }
    changes.push(await put(input, name, addImport(current), false));
  }

  const domain = domainTemplate.replaceAll("{{layout}}", layoutName);
  changes.push(await put(input, "docs/agents/domain.md", domain, true));

  const tracker = input.tracker ?? "local";
  const trackerTemplate = await Bun.file(
    `${input.brain}/skills/setup-brain/issue-tracker-${tracker}.md`,
  ).text();
  const trackerText = trackerTemplate.replaceAll("{{repo}}", input.repoSlug ?? "<owner>/<name>");
  changes.push(await put(input, "docs/agents/issue-tracker.md", trackerText, true));
  const labels = await Bun.file(`${input.brain}/skills/setup-brain/triage-labels.md`).text();
  changes.push(await put(input, "docs/agents/triage-labels.md", labels, true));
  return changes;
}

function parseArgs(argv: string[]): SetupInput {
  const input: SetupInput = {
    brain: `${import.meta.dir}/../..`,
    root: process.cwd(),
    layout: "single",
    dryRun: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i];
    const value = argv[i + 1];
    if (flag === "--dry-run") {
      input.dryRun = true;
    } else if (flag === "--root" && value !== undefined) {
      input.root = value;
      i += 1;
    } else if (flag === "--brain" && value !== undefined) {
      input.brain = value;
      i += 1;
    } else if (flag === "--layout" && (value === "single" || value === "multi")) {
      input.layout = value;
      i += 1;
    } else if (
      flag === "--tracker" &&
      (value === "local" || value === "github" || value === "gitlab")
    ) {
      input.tracker = value;
      i += 1;
    } else if (flag === "--repo" && value !== undefined) {
      input.repoSlug = value;
      i += 1;
    } else {
      throw new Error(`unknown or incomplete flag ${flag}`);
    }
  }
  return input;
}

if (import.meta.main) {
  try {
    const input = parseArgs(process.argv.slice(2));
    const changes = await writeSetup(input);
    for (const change of changes) {
      console.log(`${change.action.padEnd(9)} ${change.path}${input.dryRun ? "  (dry run)" : ""}`);
    }
  } catch (error) {
    console.error((error as Error).message);
    process.exit(2);
  }
}
