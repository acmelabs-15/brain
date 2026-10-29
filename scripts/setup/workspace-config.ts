/**
 * The text of `docs/agents/workspace.md` that setup-brain writes: the template from the plugin,
 * with the settings the repo's own file sets. The install writes and the migrate mode share it.
 */
import { readFrontmatter } from "../workspace/schema";

/** The settings in `docs/agents/workspace.md` that belong to the repo: a re-run keeps each one set. */
const repoSettings = [
  ...["decisions", "research", "ideas", "specs"].map((key) => ({ key, line: `  ${key}` })),
  { key: "max_parallel", line: "max_parallel" },
];

/** A setting's value as YAML: as it is when it is a number or a plain path, else quoted. */
function yamlScalar(value: string | number): string {
  const text = String(value);
  return typeof value === "number" || /^[\w./-]+$/u.test(text) ? text : JSON.stringify(text);
}

/**
 * The workspace config to write: the template, with each repo setting that `current` already
 * sets put in place of the template's value. Null when `current`'s frontmatter cannot be read,
 * since a run would then lose the repo's settings.
 */
export function workspaceText(template: string, current: string | null): string | null {
  const frontmatter = current === null ? null : readFrontmatter(current);
  if (frontmatter !== null && "error" in frontmatter) {
    return null;
  }
  const data = frontmatter?.data ?? {};
  const paths = typeof data.paths === "object" && data.paths !== null ? data.paths : {};
  const set: Record<string, unknown> = { ...paths, max_parallel: data.max_parallel };
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
