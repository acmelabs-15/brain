/**
 * Report where a repo's own rules files repeat what brain now carries, and take the sections the
 * user picks out of the repo's AGENTS.md.
 *
 *   bun run scripts/setup/overlap.ts --root <repo> [--brain <plugin root>] [--remove <heading>]... [--dry-run]
 *
 * Without --remove it writes nothing. For AGENTS.md, CLAUDE.md, .claude/CLAUDE.md and GEMINI.md it
 * lists each section and each line in it (a sentence, a table or a code block) as one of three kinds:
 *
 *   covered  one sentence of brain's protocol, or of docs/agents/capabilities.md outside its tables,
 *            holds every topic word of the line, and three quarters or more of that sentence's
 *            topic words are the line's; that sentence is printed;
 *   moved    the line names the first cell of a capabilities.md row in a code span (a toolchain
 *            check, a library, a server), and capabilities.md holds every version the line names;
 *   orphan   neither. A table and a code block are always orphans: they stay as they are.
 *
 * Shared words alone cover nothing: "Stage the task's files by name." is an orphan, since its words
 * are spread over a protocol section and the protocol's "Stage files by name." lacks "task". When
 * the match is unsure the line stays: a false covered takes a user's line out of AGENTS.md, and a
 * false orphan only keeps one. A bold label goes the way of its paragraph, and a line that ends with
 * a colon above a list goes the way of that list.
 *
 * The protocol is read from the plugin at run time, protocol/PROTOCOL.md, so the report follows it.
 * An AGENTS.md section is offered when it has a covered or moved line and either its heading names
 * a protocol or capabilities.md section, or most of its lines are covered or moved. Text between
 * brain's own markers is skipped. The report ends with the other authors in the git history: every
 * author but the user (by name or email) and bot accounts.
 *
 * --remove <heading> takes an offered AGENTS.md section out: its covered and moved lines go, its
 * orphan lines stay under its heading, and the heading also stays above a kept section under it.
 * A real run writes one commit that holds AGENTS.md alone, and refuses an AGENTS.md that git does
 * not track or that has uncommitted changes. --dry-run returns the trimmed sections and writes
 * nothing. CLAUDE.md and GEMINI.md are reported only: setup-brain never writes them.
 */
import path from "node:path";

import { UsageError } from "./migrate";
import type { Change } from "./write";

export { UsageError } from "./migrate";

export type Kind = "covered" | "moved" | "orphan";
export type ReportLine = { text: string; kind: Kind; home?: string; replacement?: string };
export type ReportSection = {
  heading: string;
  level: number;
  /** offered: AGENTS.md may lose it; overlap: the same finding in a file setup-brain never edits. */
  status: "offered" | "overlap" | "kept";
  /** What replaces the section: `protocol: <heading>` or `capabilities.md: <heading>`. */
  homes: string[];
  lines: ReportLine[];
};
export type ReportFile = { path: string; editable: boolean; sections: ReportSection[] };
export type OverlapInput = {
  brain: string;
  root: string;
  dryRun: boolean;
  /** The headings of the offered AGENTS.md sections the user picked to remove. */
  remove?: string[];
};
export type OverlapResult = {
  files: ReportFile[];
  authors: string[];
  changes: Change[];
  /** The SHA of the commit a real removal wrote; null otherwise. */
  commit: string | null;
  /** Each picked section as the removal leaves it; empty without --remove. */
  trimmed: string;
};

type Unit = { text: string; words: Set<string>; spans: string[]; label: boolean };
type Block = {
  start: number;
  end: number;
  /** A table, a code block, HTML or a quote: one unit, kept as it is. */
  whole: boolean;
  indent: string;
  /** The list marker as written (`-`, `1.`), or null for a paragraph. */
  marker: string | null;
  units: Unit[];
};
type Section = { heading: string; level: number; start: number; end: number; blocks: Block[] };
/** `eol` is the file's line end, "\r\n" or "\n"; `lines` hold no line end. */
type Doc = { lines: string[]; eol: string; finalNewline: boolean; sections: Section[] };
/** A protocol or capabilities.md section by name, with its sentences: what can cover a line. */
type Home = { name: string; units: { text: string; words: Set<string> }[] };
type Entry = { value: string; home: string; row: string };
type Context = {
  homes: Home[];
  targets: { words: Set<string>; home: string }[];
  entries: Entry[];
  capabilities: string;
};
type Analysed = { section: Section; report: ReportSection; blockLines: ReportLine[][] };

/** The rules files a host reads from a repo; only AGENTS.md is ever written. */
const ruleFiles = ["AGENTS.md", "CLAUDE.md", ".claude/CLAUDE.md", "GEMINI.md"];
const capabilitiesPath = "docs/agents/capabilities.md";
/**
 * The share of a covering sentence's topic words that must be the line's, so that a short line
 * does not meet a long sentence by chance ("Then check again." in "Run `brain check`.").
 */
const coveredShare = 0.75;
const commitTitle = "docs: remove what brain now carries from AGENTS.md";

const headingLine = /^(?<hashes>#{1,6})\s+(?<text>.+?)\s*#*\s*$/u;
const markerLine = /^<!-- brain:(?<name>[a-z0-9-]+):(?<edge>start|end) -->$/u;
const fence = /^\s*(?<mark>```|~~~)/u;
const listItem = /^(?<indent>\s*)(?<marker>[-*+]|\d+[.)])\s+(?<rest>.*)$/u;
const version = /\d+\.\d+(?:\.\d+)*/gu;

/** Words that carry no topic; "no", "not" and "never" stay, since they turn a rule around. */
const stopwords = new Set(
  (
    "a an the and or but nor of to in on at for with from by as into onto than then so if when " +
    "whenever while before after until each every all any its it is are was were be been being " +
    "this that these those there here what which who whom whose you your yours we our us he him " +
    "his she her they them their theirs me my do does did done has have had can could will would " +
    "should may might must also only just own same such more most other some about over under up " +
    "down out off again once via per both either neither how why where whether else too very md"
  ).split(" "),
);

function git(root: string, ...args: string[]) {
  return Bun.spawnSync(["git", ...args], { cwd: root, stdout: "pipe", stderr: "pipe" });
}

/** A word's plain form, so "skills" meets "skill" and "libraries" meets "library". */
function normal(word: string): string {
  if (/^\d/u.test(word)) {
    return word;
  }
  if (word.length > 4 && word.endsWith("ies")) {
    return `${word.slice(0, -3)}y`;
  }
  if (word.length > 3 && word.endsWith("s") && !/(?:ss|us|is)$/u.test(word)) {
    return word.slice(0, -1);
  }
  return word;
}

/** The topic words of Markdown text: a link counts by its text, a version stays one word. */
function wordsOf(text: string): Set<string> {
  const plain = text.replaceAll(/\[(?<label>[^\]]*)\]\([^)]*\)/gu, "$<label>").toLowerCase();
  const words = new Set<string>();
  for (const [token] of plain.matchAll(/\d+(?:\.\d+)+|[a-z0-9]+(?:-[a-z0-9]+)*/gu)) {
    const word = normal(token);
    if (token.length > 1 && !stopwords.has(token) && !stopwords.has(word)) {
      words.add(word);
    }
  }
  return words;
}

/** Whether `b` holds every word of `a`. */
const subset = (a: Set<string>, b: Set<string>) => [...a].every((word) => b.has(word));

const spansOf = (text: string) =>
  [...text.matchAll(/`(?<span>[^`]+)`/gu)].map((m) => (m.groups?.span ?? "").trim());

/** Words that end with a period inside a sentence. */
const abbreviations = new Set(["e.g", "i.e", "etc", "vs", "cf"]);

/**
 * The sentences of a paragraph or list item. A period, ! or ? ends one when, past any closing
 * bold or bracket, a space and then a letter, a digit, a backtick, a link or bold text follow.
 * A sentence may start in lower case, with a name such as `using-brain`; an abbreviation ends none.
 */
function sentences(text: string): string[] {
  const out: string[] = [];
  let inCode = false;
  let from = 0;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i] as string;
    if (char === "`") {
      inCode = !inCode;
    }
    if (inCode || !".!?".includes(char)) {
      continue;
    }
    const word = /\S+$/u.exec(text.slice(from, i))?.[0].toLowerCase() ?? "";
    if (char === "." && abbreviations.has(word)) {
      continue;
    }
    let after = i + 1;
    while (after < text.length && "*_)\"'".includes(text[after] as string)) {
      after += 1;
    }
    let next = after;
    while (next < text.length && /\s/u.test(text[next] as string)) {
      next += 1;
    }
    if (next > after && next < text.length && /[A-Za-z0-9`[*_("]/u.test(text[next] as string)) {
      out.push(text.slice(from, after).trim());
      from = next;
      i = next - 1;
    }
  }
  const last = text.slice(from).trim();
  return last === "" ? out : [...out, last];
}

/** A bold lead-in such as `**Sub-agent briefs.**` or `**Facts** (row 9).`: it names its paragraph. */
function isLabel(text: string): boolean {
  const bold = /^(?<mark>\*\*|__).+?\k<mark>/u.exec(text);
  return bold !== null && /^\s*(?:\([^)]*\))?\s*[.:]?\s*$/u.test(text.slice(bold[0].length));
}

function unit(text: string, whole: boolean): Unit {
  return {
    text,
    words: whole ? new Set() : wordsOf(text),
    spans: spansOf(text),
    label: !whole && isLabel(text),
  };
}

/** The line after a code block that opens at `start`. */
function codeBlockEnd(lines: string[], start: number): number {
  const mark = fence.exec(lines[start] as string)?.groups?.mark as string;
  for (let i = start + 1; i < lines.length; i += 1) {
    if ((lines[i] as string).trimStart().startsWith(mark)) {
      return i + 1;
    }
  }
  return lines.length;
}

const isTableLine = (line: string) => line.trimStart().startsWith("|");

/** The line where a paragraph or a list item that starts at `start` ends. */
function proseEnd(lines: string[], start: number, to: number): number {
  let end = start + 1;
  while (end < to) {
    const line = lines[end] as string;
    const other = listItem.test(line) || fence.test(line) || isTableLine(line);
    if (line.trim() === "" || other || headingLine.test(line)) {
      break;
    }
    end += 1;
  }
  return end;
}

/** The blocks between two line numbers: paragraphs, list items, and whole tables or code. */
function blocksOf(lines: string[], from: number, to: number): Block[] {
  const blocks: Block[] = [];
  let i = from;
  while (i < to) {
    const line = lines[i] as string;
    if (line.trim() === "") {
      i += 1;
      continue;
    }
    let end = i + 1;
    if (fence.test(line)) {
      end = Math.min(codeBlockEnd(lines, i), to);
    } else if (isTableLine(line)) {
      while (end < to && isTableLine(lines[end] as string)) {
        end += 1;
      }
    } else if (/^\s*[<>]/u.test(line)) {
      while (end < to && (lines[end] as string).trim() !== "") {
        end += 1;
      }
    } else {
      end = proseEnd(lines, i, to);
      const item = listItem.exec(line)?.groups;
      const rest = lines.slice(i + 1, end).map((l) => l.trim());
      const body = [item === undefined ? line.trim() : (item.rest as string), ...rest].join(" ");
      const units = sentences(body).map((text) => unit(text, false));
      const indent = item?.indent ?? (/^\s*/u.exec(line)?.[0] as string);
      blocks.push({ start: i, end, whole: false, indent, marker: item?.marker ?? null, units });
      i = end;
      continue;
    }
    const text = lines.slice(i, end).join("\n");
    blocks.push({
      start: i,
      end,
      whole: true,
      indent: "",
      marker: null,
      units: [unit(text, true)],
    });
    i = end;
  }
  return blocks;
}

/** A Markdown file as sections, each from its heading to the next heading or brain block. */
function parse(raw: string): Doc {
  const eol = raw.includes("\r\n") ? "\r\n" : "\n";
  const text = raw.replaceAll("\r\n", "\n");
  const finalNewline = text.endsWith("\n");
  const lines = (finalNewline ? text.slice(0, -1) : text).split("\n");
  const sections: Section[] = [];
  let open: Section | null = null;
  const close = (end: number) => {
    if (open !== null) {
      open.end = end;
      open = null;
    }
  };
  let i = 0;
  while (i < lines.length) {
    const line = lines[i] as string;
    const marker = markerLine.exec(line.trim())?.groups;
    if (marker?.edge === "start") {
      close(i);
      const end = `<!-- brain:${marker.name}:end -->`;
      let j = i + 1;
      while (j < lines.length && (lines[j] as string).trim() !== end) {
        j += 1;
      }
      i = j + 1;
      continue;
    }
    if (fence.test(line)) {
      i = codeBlockEnd(lines, i);
      continue;
    }
    const heading = headingLine.exec(line)?.groups;
    if (heading !== undefined) {
      close(i);
      const level = (heading.hashes as string).length;
      open = { heading: heading.text as string, level, start: i, end: lines.length, blocks: [] };
      sections.push(open);
    }
    i += 1;
  }
  close(lines.length);
  for (const section of sections) {
    section.blocks = blocksOf(lines, section.start + 1, section.end);
  }
  return { lines, eol, finalNewline, sections };
}

function homeOf(name: string, section: Section): Home {
  const units = section.blocks
    .filter((b) => !b.whole)
    .flatMap((b) => b.units.map((u) => ({ text: u.text, words: u.words })));
  return { name, units };
}

/** The protocol's sections and capabilities.md's: what can cover a line, and the rows a line can move to. */
async function context(brain: string, root: string): Promise<Context> {
  const protocolPath = `${brain}/protocol/PROTOCOL.md`;
  const protocol = Bun.file(protocolPath);
  if (!(await protocol.exists())) {
    throw new Error(`brain's protocol is missing: ${protocolPath}`);
  }
  const ctx: Context = { homes: [], targets: [], entries: [], capabilities: "" };
  for (const section of parse(await protocol.text()).sections) {
    const name = `protocol: ${section.heading}`;
    ctx.homes.push(homeOf(name, section));
    ctx.targets.push({ words: wordsOf(section.heading), home: name });
  }
  const file = Bun.file(`${root}/${capabilitiesPath}`);
  ctx.capabilities = (await file.exists()) ? await file.text() : "";
  const doc = parse(ctx.capabilities);
  for (const section of doc.sections) {
    const name = section.level === 1 ? "capabilities.md" : `capabilities.md: ${section.heading}`;
    ctx.homes.push(homeOf(name, section));
    if (section.level >= 2) {
      ctx.targets.push({ words: wordsOf(section.heading), home: name });
    }
    for (const block of section.blocks) {
      if (!block.whole || !isTableLine(doc.lines[block.start] as string)) {
        continue;
      }
      // A table's first two lines are its header and its rule; each later line is a row.
      for (const row of doc.lines.slice(block.start + 2, block.end)) {
        const first = row.split(/(?<!\\)\|/u)[1] ?? "";
        for (const value of spansOf(first)) {
          ctx.entries.push({ value, home: name, row: row.trim() });
        }
      }
    }
  }
  return ctx;
}

/** The kind of one line, with what replaces it when it is covered or moved. */
function classify(line: Unit, ctx: Context): ReportLine {
  const { text } = line;
  const versions = text.match(version) ?? [];
  if (versions.every((v) => ctx.capabilities.includes(v))) {
    const entry = ctx.entries.find((e) => line.spans.includes(e.value));
    if (entry !== undefined) {
      return { text, kind: "moved", home: entry.home, replacement: entry.row };
    }
  }
  // The covering sentence holds every word of the line; of those, the one with fewest others.
  let found: { home: string; text: string } | null = null;
  let closest = 0;
  for (const home of ctx.homes) {
    for (const sentence of home.units) {
      if (!subset(line.words, sentence.words)) {
        continue;
      }
      const held = line.words.size / sentence.words.size;
      if (held > closest) {
        found = { home: home.name, text: sentence.text };
        closest = held;
      }
    }
  }
  return found === null || closest < coveredShare
    ? { text, kind: "orphan" }
    : { text, kind: "covered", home: found.home, replacement: found.text };
}

/** One block's lines. A label, or a line with no topic word, goes the way of its block. */
function blockLines(block: Block, ctx: Context): ReportLine[] {
  if (block.whole) {
    return [{ text: block.units[0]?.text ?? "", kind: "orphan" }];
  }
  const own = block.units.map((u) => (u.label || u.words.size === 0 ? null : classify(u, ctx)));
  const real = own.filter((line): line is ReportLine => line !== null);
  const follow: Kind =
    real.length === 0 || real.some((line) => line.kind === "orphan")
      ? "orphan"
      : (real[0]?.kind ?? "orphan");
  return block.units.map((u, i) => own[i] ?? { text: u.text, kind: follow });
}

/**
 * A paragraph that ends with a colon above a list ("Run it:") introduces that list, so its last
 * line goes the way of the list: it stays when an item keeps a line.
 */
function followLists(blocks: Block[], perBlock: ReportLine[][]): void {
  for (const [b, block] of blocks.entries()) {
    const last = block.units.at(-1);
    const lines = perBlock[b];
    if (block.whole || block.marker !== null || !last?.text.endsWith(":") || lines === undefined) {
      continue;
    }
    const items: ReportLine[] = [];
    for (let n = b + 1; n < blocks.length && (blocks[n]?.marker ?? null) !== null; n += 1) {
      items.push(...(perBlock[n] ?? []));
    }
    if (items.length > 0) {
      const kind = items.some((line) => line.kind === "orphan") ? "orphan" : items[0]?.kind;
      lines[lines.length - 1] = { text: last.text, kind: kind ?? "orphan" };
    }
  }
}

function analyse(section: Section, editable: boolean, ctx: Context): Analysed {
  const perBlock = section.blocks.map((block) => blockLines(block, ctx));
  followLists(section.blocks, perBlock);
  const lines = perBlock.flat();
  const hits = lines.filter((line) => line.kind !== "orphan");
  const own = wordsOf(section.heading);
  const named =
    section.level < 2 || own.size === 0
      ? []
      : ctx.targets
          .filter((t) => t.words.size > 0 && (subset(own, t.words) || subset(t.words, own)))
          .map((t) => t.home);
  const homes = [
    ...new Set([...named, ...hits.flatMap((line) => (line.home === undefined ? [] : [line.home]))]),
  ];
  const over =
    section.level >= 2 && hits.length > 0 && (named.length > 0 || hits.length * 2 > lines.length);
  let status: ReportSection["status"] = "kept";
  if (over) {
    status = editable ? "offered" : "overlap";
  }
  const { heading, level } = section;
  return { section, report: { heading, level, status, homes, lines }, blockLines: perBlock };
}

/** The authors in the git history other than the user (by name or by email) and bot accounts. */
function otherAuthors(root: string): string[] {
  const log = git(root, "shortlog", "-sne", "HEAD");
  if (log.exitCode !== 0) {
    return [];
  }
  const name = git(root, "config", "user.name").stdout.toString().trim();
  const email = git(root, "config", "user.email").stdout.toString().trim().toLowerCase();
  const others: string[] = [];
  for (const line of log.stdout.toString().split("\n")) {
    const found = /^\s*\d+\t(?<who>(?<name>.*) <(?<email>.*)>)$/u.exec(line)?.groups;
    if (found === undefined) {
      continue;
    }
    const isUser =
      (name !== "" && found.name === name) ||
      (email !== "" && found.email?.toLowerCase() === email);
    if (!isUser && !/\[bot\]/iu.test(found.name as string)) {
      others.push(found.who as string);
    }
  }
  return others;
}

const orderedMarker = /^(?<number>\d+)(?<dot>[.)])$/u;

/** Numbering for the kept items of ordered lists, restarted at each list's first number. */
class Numbers {
  private readonly first = new Map<string, number>();
  private readonly last = new Map<string, number>();

  /** Note a block whether it is kept or not, so a list keeps its first number. */
  see(block: Block): void {
    const ordered = orderedMarker.exec(block.marker ?? "")?.groups;
    if (block.marker === null) {
      this.first.clear();
      this.last.clear();
    } else if (ordered !== undefined && !this.first.has(block.indent)) {
      this.first.set(block.indent, Number(ordered.number));
    }
  }

  /** The marker a kept item takes. */
  marker(block: Block): string {
    const ordered = orderedMarker.exec(block.marker ?? "")?.groups;
    if (ordered === undefined) {
      return block.marker ?? "";
    }
    const previous = this.last.get(block.indent);
    const n = previous === undefined ? (this.first.get(block.indent) ?? 1) : previous + 1;
    this.last.set(block.indent, n);
    return `${n}${ordered.dot}`;
  }
}

/** A block with only its orphan lines; a block that keeps every line keeps its own text. */
function renderBlock(lines: string[], block: Block, kept: string[], numbers: Numbers): string[] {
  const all = kept.length === block.units.length;
  if (block.marker === null) {
    return all ? lines.slice(block.start, block.end) : [`${block.indent}${kept.join(" ")}`];
  }
  const marker = numbers.marker(block);
  if (all) {
    const first = (lines[block.start] as string).replace(/^(?<lead>\s*)\S+/u, `$<lead>${marker}`);
    return [first, ...lines.slice(block.start + 1, block.end)];
  }
  return [`${block.indent}${marker} ${kept.join(" ")}`];
}

/** A picked section's body with only its orphan lines, blank lines kept single. */
function trimBody(doc: Doc, analysed: Analysed): string[] {
  const { section, blockLines: perBlock } = analysed;
  const numbers = new Numbers();
  const out: string[] = [];
  let b = 0;
  let i = section.start + 1;
  while (i < section.end) {
    const block = section.blocks[b];
    if (block !== undefined && block.start === i) {
      numbers.see(block);
      const kinds = perBlock[b] ?? [];
      const kept = block.units.filter((_, k) => kinds[k]?.kind === "orphan").map((u) => u.text);
      if (kept.length > 0) {
        out.push(...renderBlock(doc.lines, block, kept, numbers));
      }
      i = block.end;
      b += 1;
      continue;
    }
    out.push("");
    i += 1;
  }
  return out.filter((line, k) => line !== "" || out[k - 1] !== "");
}

/** AGENTS.md with each picked section trimmed, and the trimmed sections for a dry run. */
function trim(doc: Doc, all: Analysed[], picked: Analysed[]): { text: string; trimmed: string } {
  const bodies = new Map(picked.map((a) => [a.section, trimBody(doc, a)]));
  const gone = (a: Analysed) => bodies.get(a.section)?.every((line) => line === "") === true;
  const out: string[] = [];
  const shown: string[] = [];
  let cursor = 0;
  for (const [index, a] of all.entries()) {
    const body = bodies.get(a.section);
    if (body === undefined) {
      continue;
    }
    const heading = doc.lines[a.section.start] as string;
    let next: string[] = [heading, ...body];
    if (gone(a)) {
      const under = all.slice(index + 1);
      const stop = under.findIndex((c) => c.section.level <= a.section.level);
      const children = stop === -1 ? under : under.slice(0, stop);
      const keepsHeading = children.some((c) => !gone(c));
      next = keepsHeading ? [heading, ...(body.length > 0 ? [""] : [])] : [];
      shown.push(
        `${heading}  (removed${keepsHeading ? "; the heading stays above its subsections" : ""})`,
      );
    } else {
      shown.push([heading, ...body].join("\n").trimEnd());
    }
    out.push(...doc.lines.slice(cursor, a.section.start), ...next);
    cursor = a.section.end;
  }
  out.push(...doc.lines.slice(cursor));
  while (doc.finalNewline && out.length > 0 && out.at(-1) === "") {
    out.pop();
  }
  const text = `${out.join(doc.eol)}${doc.finalNewline ? doc.eol : ""}`;
  return { text, trimmed: shown.length === 0 ? "" : `${shown.join("\n\n")}\n` };
}

/** Why AGENTS.md cannot take a removal of its own commit, or null when git holds it as it is. */
function refusal(root: string): string | null {
  if (git(root, "ls-files", "--error-unmatch", "--", "AGENTS.md").exitCode !== 0) {
    return "AGENTS.md is not tracked by git; commit it first, so the removal is a commit of its own";
  }
  if (git(root, "diff", "--quiet", "HEAD", "--", "AGENTS.md").exitCode !== 0) {
    return "AGENTS.md has uncommitted changes; commit them first, so the removal is a commit of its own";
  }
  return null;
}

/** Report the overlap in `input.root`; with `remove`, trim those AGENTS.md sections and commit them. */
export async function overlap(input: OverlapInput): Promise<OverlapResult> {
  const root = path.resolve(input.root);
  const ctx = await context(input.brain, root);
  const files: ReportFile[] = [];
  let agents: { doc: Doc; text: string; analysed: Analysed[] } | null = null;
  for (const file of ruleFiles) {
    const handle = Bun.file(`${root}/${file}`);
    if (!(await handle.exists())) {
      continue;
    }
    const text = await handle.text();
    const doc = parse(text);
    const editable = file === "AGENTS.md";
    const analysed = doc.sections.map((section) => analyse(section, editable, ctx));
    files.push({ path: file, editable, sections: analysed.map((a) => a.report) });
    if (editable) {
      agents = { doc, text, analysed };
    }
  }
  const result: OverlapResult = {
    files,
    authors: otherAuthors(root),
    changes: [],
    commit: null,
    trimmed: "",
  };
  const remove = input.remove ?? [];
  if (remove.length === 0) {
    return result;
  }
  const offered = agents?.analysed.filter((a) => a.report.status === "offered") ?? [];
  for (const heading of remove) {
    if (!offered.some((a) => a.report.heading === heading)) {
      const names = offered.map((a) => a.report.heading).join(", ") || "none";
      throw new UsageError(
        `"${heading}" is not an offered section of AGENTS.md; offered: ${names}`,
      );
    }
  }
  if (agents === null) {
    return result;
  }
  const picked = offered.filter((a) => remove.includes(a.report.heading));
  const { text, trimmed } = trim(agents.doc, agents.analysed, picked);
  if (text === agents.text) {
    return { ...result, changes: [{ path: "AGENTS.md", action: "unchanged" }] };
  }
  const changes: Change[] = [{ path: "AGENTS.md", action: "updated" }];
  if (input.dryRun) {
    return { ...result, changes, trimmed };
  }
  const why = refusal(root);
  if (why !== null) {
    throw new Error(why);
  }
  await Bun.write(`${root}/AGENTS.md`, text);
  const body = `setup-brain's overlap report found these sections covered by brain's protocol or by ${capabilitiesPath}: ${picked.map((a) => a.report.heading).join(", ")}. Each orphan line stays under its heading.`;
  const commit = git(root, "commit", "--quiet", "-m", commitTitle, "-m", body, "--", "AGENTS.md");
  if (commit.exitCode !== 0) {
    await Bun.write(`${root}/AGENTS.md`, agents.text);
    const reason = commit.stderr.toString().trim();
    throw new Error(`git commit failed: ${reason}\nAGENTS.md is back as it was.`);
  }
  const sha = git(root, "rev-parse", "HEAD").stdout.toString().trim();
  return { ...result, changes, commit: sha, trimmed };
}

/** A line's text for the report: a table or a code block shows its first line. */
function firstLine(text: string): string {
  const [first, ...rest] = text.split("\n");
  return rest.length === 0 ? (first ?? "") : `${first} ...`;
}

function lineOut(line: ReportLine): string[] {
  const out = [`    ${line.kind.padEnd(7)}  ${firstLine(line.text)}`];
  if (line.replacement !== undefined) {
    out.push(`             = ${line.replacement}`);
  }
  return out;
}

/** The report as the command prints it: each file, section and line, then the other authors. */
function format(result: OverlapResult): string {
  const out: string[] = [];
  if (!result.files.some((file) => file.editable)) {
    out.push("AGENTS.md: none");
  }
  for (const file of result.files) {
    const only = "  (reported only: setup-brain never edits this file)";
    out.push(file.editable ? file.path : `${file.path}${only}`);
    for (const s of file.sections) {
      const heading = `${"#".repeat(s.level)} ${s.heading}`;
      const hits = s.lines.filter((line) => line.kind !== "orphan");
      if (s.status === "kept") {
        const count = `  (${hits.length} of ${s.lines.length} lines covered or moved)`;
        out.push(
          `  kept     ${heading}${hits.length === 0 ? "" : count}`,
          ...hits.flatMap(lineOut),
        );
        continue;
      }
      const line = `  ${s.status.padEnd(7)}  ${heading}  ->  ${s.homes.join("; ")}`;
      out.push(line, ...s.lines.flatMap(lineOut));
    }
  }
  const authors = result.authors.length === 0 ? "none" : result.authors.join(", ");
  out.push(`other authors: ${authors}`);
  return out.join("\n");
}

function parseArgs(argv: string[]): OverlapInput {
  const input: OverlapInput = {
    brain: `${import.meta.dir}/../..`,
    root: process.cwd(),
    dryRun: false,
    remove: [],
  };
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
    } else if (flag === "--remove") {
      input.remove?.push(value);
    } else {
      throw new Error(`unknown or incomplete flag ${flag}`);
    }
    i += 1;
  }
  return input;
}

/** Print the report, or the removal and its commit, and return the exit code. */
async function main(argv: string[]): Promise<number> {
  let input: OverlapInput;
  try {
    input = parseArgs(argv);
  } catch (error) {
    console.error((error as Error).message);
    return 2;
  }
  try {
    const result = await overlap(input);
    if ((input.remove ?? []).length === 0) {
      console.log(format(result));
      return 0;
    }
    for (const change of result.changes) {
      console.log(`${change.action.padEnd(9)} ${change.path}${input.dryRun ? "  (dry run)" : ""}`);
    }
    if (result.trimmed !== "" && input.dryRun) {
      console.log(`\n${result.trimmed}`);
    }
    if (result.commit !== null) {
      console.log(`committed ${result.commit}`);
    }
    return 0;
  } catch (error) {
    console.error((error as Error).message);
    return error instanceof UsageError ? 2 : 1;
  }
}

if (import.meta.main) {
  process.exit(await main(process.argv.slice(2)));
}
