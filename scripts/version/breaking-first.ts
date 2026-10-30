/**
 * Put the newest version's breaking changes first in CHANGELOG.md, after `changeset version`.
 *
 *   bun run scripts/version/breaking-first.ts [CHANGELOG.md]
 *
 * Every bullet of the newest version whose text opens with "**Breaking:**" moves out of its
 * group (Major, Minor or Patch Changes) into a "### Breaking Changes" section at the top of
 * that version, in the order the bullets appear, and loses the prefix. A group the move leaves
 * empty goes. Changesets writes a group's bullets in the order it reads the `.changeset` files,
 * which it does not sort, so this step is where breaking changes come first (Peter, 2026-10-30).
 * Older versions stay as they are, and a second run changes nothing.
 */

/** A bullet's first line, up to the prefix: the PR and commit links changesets writes, if any. */
const breakingLead = /^(?<lead>- (?:\[[^\]]*\]\([^)]*\) ?)*(?:- )?)\*\*Breaking:\*\* ?/u;

type Group = { heading: string; bullets: string[][] };

/** The groups of one version section: each `### ` heading with its bullets, continuations kept. */
function readGroups(body: string[]): Group[] {
  const groups: Group[] = [];
  for (const line of body) {
    if (line.startsWith("### ")) {
      groups.push({ heading: line, bullets: [] });
    } else if (line.startsWith("- ")) {
      groups.at(-1)?.bullets.push([line]);
    } else if (line.startsWith(" ")) {
      groups.at(-1)?.bullets.at(-1)?.push(line);
    }
  }
  return groups;
}

/** The CHANGELOG text with the newest version's breaking bullets in a section of their own. */
export function breakingFirst(text: string): string {
  const lines = text.split("\n");
  const start = lines.findIndex((line) => line.startsWith("## "));
  if (start === -1) {
    return text;
  }
  const next = lines.findIndex((line, index) => index > start && line.startsWith("## "));
  const end = next === -1 ? lines.length : next;
  const groups = readGroups(lines.slice(start + 1, end));
  const breaking: string[][] = [];
  for (const group of groups) {
    group.bullets = group.bullets.filter((bullet) => {
      const lead = breakingLead.exec(bullet[0] ?? "")?.groups?.lead;
      if (lead === undefined) {
        return true;
      }
      breaking.push([(bullet[0] ?? "").replace(breakingLead, lead), ...bullet.slice(1)]);
      return false;
    });
  }
  if (breaking.length === 0) {
    return text;
  }
  const kept = [{ heading: "### Breaking Changes", bullets: breaking }, ...groups].filter(
    (group) => group.bullets.length > 0,
  );
  const section = [lines[start] ?? ""];
  for (const group of kept) {
    const bullets = group.bullets.flatMap((bullet, index) =>
      index > 0 ? ["", ...bullet] : bullet,
    );
    section.push("", group.heading, "", ...bullets);
  }
  section.push("");
  return [...lines.slice(0, start), ...section, ...lines.slice(end)].join("\n");
}

if (import.meta.main) {
  const path = process.argv[2] ?? "CHANGELOG.md";
  const file = Bun.file(path);
  const text = await file.text();
  const out = breakingFirst(text);
  if (out !== text) {
    await Bun.write(path, out);
    console.log(`breaking changes first in ${path}`);
  }
}
