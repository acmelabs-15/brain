/**
 * Propose `docs/agents/capabilities.md` from a repo's own files, and write it after the user's yes.
 *
 *   bun run scripts/setup/capabilities.ts --root <repo> --skills <name,name,...> [--omit <name>]... [--dry-run] [--brain <plugin root>]
 *
 * --skills names every skill the host lists to the agent; a dependency in package.json proposes the
 * installed skills named after it. packageManager and engines in package.json propose toolchain
 * checks, and so does a `<tool> --version` check with its version that the repo's AGENTS.md names,
 * so the overlap report can count that line as moved. The MCP config file that each host reads from
 * a repo proposes servers. --omit leaves out a library, a server or a tool the user declined. An
 * existing capabilities.md is the repo's file: a run keeps it as it is and lists each proposed row
 * it does not name. --dry-run lists and writes nothing.
 */
import { mkdir } from "node:fs/promises";

import type { Change } from "./write";

export type CapabilitiesInput = {
  brain: string;
  root: string;
  /** Every skill name the host lists, as `plugin:skill` or as a bare name. */
  skills: string[];
  /** Libraries, servers and tools (`node`, `bun`) to leave out. */
  omit?: string[];
  dryRun: boolean;
};

/** A proposed row that an existing capabilities.md does not name, with the section it belongs in. */
export type Unnamed = { section: string; row: string };

export type CapabilitiesResult = {
  /** One change per repo file that could not be read, then the change to capabilities.md. */
  changes: Change[];
  /** The text the proposal gives; written only when capabilities.md does not exist yet. */
  text: string;
  unnamed: Unnamed[];
};

/** One proposed row: `name` is what --omit matches, `cell` its first cell, as the file spells it. */
type Entry = { name: string; cell: string; row: string };
type Section = { heading: string; placeholder: string; entries: Entry[] };
type Read = { data: Record<string, unknown> } | { skipped: Change } | null;

const target = "docs/agents/capabilities.md";

/**
 * The repo file each host reads its MCP servers from, in host order, and the key that holds them:
 * Claude Code https://code.claude.com/docs/en/mcp#project-scope; Codex, for trusted projects,
 * https://developers.openai.com/codex/mcp#configure-with-configtoml; Gemini CLI
 * https://geminicli.com/docs/tools/mcp-server/#how-to-set-up-your-mcp-server; Antigravity
 * https://antigravity.google/docs/mcp?app=cli.
 */
const serverFiles = [
  { path: ".mcp.json", format: "JSON", key: "mcpServers" },
  { path: ".codex/config.toml", format: "TOML", key: "mcp_servers" },
  { path: ".gemini/settings.json", format: "JSON", key: "mcpServers" },
  { path: ".agents/mcp_config.json", format: "JSON", key: "mcpServers" },
] as const;

/** The tools a toolchain check runs as `<tool> --version`: runtimes and package managers. */
const tools = new Set(["bun", "deno", "node", "npm", "pnpm", "yarn"]);

const dependencyFields = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "optionalDependencies",
] as const;

/** `text` as a code span in a table cell: a pipe, as in a `^18 || ^20` range, is escaped. */
const code = (text: string) => `\`${text.replaceAll("|", "\\|")}\``;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Read a repo file as JSON (comments allowed) or TOML; null when it is absent. */
async function readData(root: string, path: string, format: "JSON" | "TOML"): Promise<Read> {
  const file = Bun.file(`${root}/${path}`);
  if (!(await file.exists())) {
    return null;
  }
  try {
    const text = await file.text();
    const data: unknown = format === "TOML" ? Bun.TOML.parse(text) : Bun.JSONC.parse(text);
    return { data: isRecord(data) ? data : {} };
  } catch {
    const note = `not valid ${format}; nothing proposed from it`;
    return { skipped: { path, action: "skipped", note } };
  }
}

function words(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/u)
    .filter((word) => word !== "");
}

function same(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((word, i) => word === b[i]);
}

/**
 * Whether a plugin, or a skill with no plugin, is named after a dependency: its words are the
 * dependency's full name (`@tanstack/react-router`, `tanstack-react-router`), its scope alone
 * (`@supabase/supabase-js`, `supabase`), or end with a name of two words or more
 * (`@acmelabs/design-system`, `acme-design-system`). A one-word name such as `react` matches only
 * a plugin of that exact name, since plugins like `tanstack-react-start` merely mention it.
 */
function namedAfter(dependency: string, plugin: string): boolean {
  const slash = dependency.startsWith("@") ? dependency.indexOf("/") : -1;
  const scope = slash > 0 ? words(dependency.slice(1, slash)) : [];
  const name = words(dependency.slice(slash + 1));
  const own = words(plugin);
  return (
    same(own, [...scope, ...name]) ||
    (scope.length > 0 && same(own, scope)) ||
    (name.length >= 2 && same(own.slice(-name.length), name))
  );
}

function libraryEntries(manifest: Record<string, unknown>, skills: string[]): Entry[] {
  const dependencies = new Set<string>();
  for (const field of dependencyFields) {
    const listed = manifest[field];
    for (const name of isRecord(listed) ? Object.keys(listed) : []) {
      dependencies.add(name);
    }
  }
  const entries: Entry[] = [];
  for (const dependency of [...dependencies].toSorted()) {
    // Type packages describe a library; the library's own skills come with the library.
    if (dependency.startsWith("@types/")) {
      continue;
    }
    const matched = new Set<string>();
    for (const skill of skills) {
      const colon = skill.indexOf(":");
      const plugin = colon === -1 ? skill : skill.slice(0, colon);
      if (namedAfter(dependency, plugin)) {
        matched.add(colon === -1 ? skill : `${plugin}:*`);
      }
    }
    if (matched.size > 0) {
      const cell = code(dependency);
      const list = [...matched].toSorted().map(code).join(", ");
      entries.push({ name: dependency, cell, row: `| ${cell} | ${list} |` });
    }
  }
  return entries;
}

/** A toolchain row; `from` is its From cell, as the file spells it. */
function check(tool: string, range: string, from: string): Entry {
  const cell = code(`${tool} --version`);
  return { name: tool, cell, row: `| ${cell} | ${code(range)} | ${from} |` };
}

const inPackageJson = (field: string) => `${code(field)} in ${code("package.json")}`;

/**
 * Toolchain checks: the version `packageManager` pins, without its hash
 * (https://github.com/nodejs/corepack#when-authoring-packages), then each range in `engines`
 * (https://docs.npmjs.com/cli/v11/configuring-npm/package-json#engines). A URL in place of a
 * version, a range of `*`, and an engine that is not a runtime or a package manager are left out.
 */
function toolchainEntries(manifest: Record<string, unknown>): Entry[] {
  const entries: Entry[] = [];
  const pinned = /^(?<tool>[a-z]+)@(?<version>[^+]+)/u.exec(String(manifest.packageManager ?? ""));
  const { tool, version } = pinned?.groups ?? {};
  if (tool !== undefined && version !== undefined && tools.has(tool) && !version.includes(":")) {
    entries.push(check(tool, version, inPackageJson("packageManager")));
  }
  const engines = isRecord(manifest.engines) ? manifest.engines : {};
  for (const [engine, range] of Object.entries(engines)) {
    const wanted = typeof range === "string" ? range.trim() : "";
    if (tools.has(engine) && wanted !== "" && wanted !== "*") {
      entries.push(check(engine, wanted, inPackageJson("engines")));
    }
  }
  return entries;
}

/** brain's own blocks, each between its markers: setup-brain wrote them, so they hold no repo fact. */
const brainBlock = /<!-- brain:(?<name>[a-z0-9-]+):start -->[\s\S]*?<!-- brain:\k<name>:end -->/gu;

/**
 * `<tool> --version` in a code span, then its version before the sentence ends (a period ends it
 * unless a digit follows). "or later", "or newer" or a "+" after the version makes it a lower bound.
 */
const namedCheck =
  /`(?<tool>[a-z]+) --version`(?:[^.\n]|\.(?=\d)){0,40}?(?<version>\d+\.\d+(?:\.\d+)?)(?<later>\+|\s+or\s+(?:later|newer|higher|above))?/gu;

/** Toolchain checks that a hand-written AGENTS.md names with a version, once each. */
function agentsEntries(text: string): Entry[] {
  const entries = new Map<string, Entry>();
  for (const match of text.replace(brainBlock, "").matchAll(namedCheck)) {
    const { tool, version, later } = match.groups ?? {};
    if (tool !== undefined && version !== undefined && tools.has(tool)) {
      const entry = check(tool, later === undefined ? version : `>=${version}`, code("AGENTS.md"));
      entries.set(entry.row, entry);
    }
  }
  return [...entries.values()];
}

/** One row per server, naming every repo file that configures it, in host order. */
function serverEntries(found: Map<string, string[]>): Entry[] {
  return [...found.keys()].toSorted().map((name) => {
    const files = (found.get(name) ?? []).map(code).join(", ");
    const cell = code(name);
    return { name, cell, row: `| ${cell} | ${files} | one real read-only call |` };
  });
}

/** The three sections a repo's files propose, and a change for each file that could not be read. */
async function propose(
  root: string,
  skills: string[],
): Promise<{ sections: Section[]; skipped: Change[] }> {
  const skipped: Change[] = [];
  const manifest = await readData(root, "package.json", "JSON");
  if (manifest !== null && "skipped" in manifest) {
    skipped.push(manifest.skipped);
  }
  const pkg = manifest !== null && "data" in manifest ? manifest.data : {};
  const found = new Map<string, string[]>();
  for (const { path, format, key } of serverFiles) {
    const config = await readData(root, path, format);
    if (config !== null && "skipped" in config) {
      skipped.push(config.skipped);
    }
    const servers = config !== null && "data" in config ? config.data[key] : undefined;
    for (const name of isRecord(servers) ? Object.keys(servers) : []) {
      // A code span cannot hold a backtick, and a table row cannot hold a line break.
      if (/[`\r\n]/u.test(name)) {
        const note = `server ${JSON.stringify(name)} left out: a backtick or a line break in a name breaks the table`;
        skipped.push({ path, action: "skipped", note });
        continue;
      }
      found.set(name, [...(found.get(name) ?? []), path]);
    }
  }
  const agents = Bun.file(`${root}/AGENTS.md`);
  const named = (await agents.exists()) ? agentsEntries(await agents.text()) : [];
  const sections = [
    {
      heading: "Toolchain",
      placeholder: "toolchain",
      entries: [...toolchainEntries(pkg), ...named],
    },
    { heading: "Library skills", placeholder: "libraries", entries: libraryEntries(pkg, skills) },
    { heading: "Servers", placeholder: "servers", entries: serverEntries(found) },
  ];
  return { sections, skipped };
}

/** The template with each section's rows in place of its placeholder line; no rows, no line. */
function fill(template: string, sections: Section[]): string {
  let text = template;
  for (const { placeholder, entries } of sections) {
    const line = new RegExp(`^\\{\\{${placeholder}\\}\\}\\n?`, "mu");
    const rows = entries.map((entry) => `${entry.row}\n`).join("");
    text = text.replace(line, () => rows);
  }
  return text;
}

/** Propose capabilities.md and write it, unless `dryRun` is set or the file already exists. */
export async function writeCapabilities(input: CapabilitiesInput): Promise<CapabilitiesResult> {
  const template = await Bun.file(`${input.brain}/skills/setup-brain/capabilities.md`).text();
  const { sections, skipped } = await propose(input.root, input.skills);
  const omit = input.omit ?? [];
  const kept = sections.map((section) => ({
    ...section,
    entries: section.entries.filter((entry) => !omit.includes(entry.name)),
  }));
  const text = fill(template, kept);
  const full = `${input.root}/${target}`;
  const file = Bun.file(full);
  if (await file.exists()) {
    const current = await file.text();
    const unnamed = kept.flatMap(({ heading, entries }) =>
      entries
        .filter((entry) => !current.includes(entry.cell))
        .map((entry) => ({ section: heading, row: entry.row })),
    );
    const note = "the repo's file now: add a row by hand";
    return { changes: [...skipped, { path: target, action: "unchanged", note }], text, unnamed };
  }
  if (!input.dryRun) {
    await mkdir(full.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(full, text);
  }
  return { changes: [...skipped, { path: target, action: "created" }], text, unnamed: [] };
}

function parseArgs(argv: string[]): CapabilitiesInput {
  const input: CapabilitiesInput = {
    brain: `${import.meta.dir}/../..`,
    root: process.cwd(),
    skills: [],
    omit: [],
    dryRun: false,
  };
  let skillsGiven = false;
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i] as string;
    if (flag === "--dry-run") {
      input.dryRun = true;
      continue;
    }
    const value = argv[i + 1];
    if (value === undefined) {
      throw new Error(`unknown or incomplete flag ${flag}`);
    }
    if (flag === "--root") {
      input.root = value;
    } else if (flag === "--brain") {
      input.brain = value;
    } else if (flag === "--omit") {
      input.omit?.push(value);
    } else if (flag === "--skills") {
      input.skills = value
        .split(",")
        .map((name) => name.trim())
        .filter((name) => name !== "");
      skillsGiven = true;
    } else {
      throw new Error(`unknown or incomplete flag ${flag}`);
    }
    i += 1;
  }
  if (!skillsGiven) {
    throw new Error(
      "--skills is required: every skill name the host lists, comma-separated (it may be empty)",
    );
  }
  return input;
}

/** Run the proposal or the write, print each change and each row not named yet, return the exit code. */
async function main(argv: string[]): Promise<number> {
  let input: CapabilitiesInput;
  try {
    input = parseArgs(argv);
  } catch (error) {
    console.error((error as Error).message);
    return 2;
  }
  try {
    const result = await writeCapabilities(input);
    for (const change of result.changes) {
      const note = change.note ?? (input.dryRun ? "dry run" : "");
      console.log(`${change.action.padEnd(9)} ${change.path}${note === "" ? "" : `  (${note})`}`);
    }
    for (const { section, row } of result.unnamed) {
      console.log(`not named ${section}: ${row}`);
    }
    const created = result.changes.some((c) => c.path === target && c.action === "created");
    if (input.dryRun && created) {
      console.log(`\n${result.text}`);
    }
    return 0;
  } catch (error) {
    console.error((error as Error).message);
    return 1;
  }
}

if (import.meta.main) {
  process.exit(await main(process.argv.slice(2)));
}
