/**
 * Write package.json's version into every host manifest and every listed skill's frontmatter.
 *
 *   bun run version:sync            write
 *   bun run version:sync -- --check exit 1 if any file disagrees
 */

export type Manifest = { path: string; field: string };

export const manifests: readonly Manifest[] = [
  { path: ".claude-plugin/plugin.json", field: "version" },
  { path: ".claude-plugin/marketplace.json", field: "plugins.0.version" },
  { path: ".codex-plugin/plugin.json", field: "version" },
  { path: ".agents/plugins/marketplace.json", field: "plugins.0.version" },
  { path: "gemini-extension.json", field: "version" },
];

/** A skill whose frontmatter `metadata` block carries brain's version in these fields. */
export type SkillVersion = { path: string; fields: readonly string[] };

export const skills: readonly SkillVersion[] = [
  { path: "skills/ask-user-question/SKILL.md", fields: ["library_version", "version"] },
];

type Json = Record<string, unknown> | unknown[];

function getField(doc: Json, field: string): unknown {
  let node: unknown = doc;
  for (const key of field.split(".")) {
    if (node === null || typeof node !== "object") {
      return undefined;
    }
    node = (node as Record<string, unknown>)[key];
  }
  return node;
}

function setField(doc: Json, field: string, value: string): void {
  const keys = field.split(".");
  const last = keys.pop();
  let node: unknown = doc;
  for (const key of keys) {
    node = (node as Record<string, unknown>)[key];
  }
  (node as Record<string, unknown>)[last as string] = value;
}

/** Rewrites each field's quoted value inside the frontmatter only; the body stays as it is. */
function setFrontmatter(text: string, skill: SkillVersion, version: string): string {
  const end = text.indexOf("\n---", 3);
  if (!text.startsWith("---") || end === -1) {
    throw new TypeError(`${skill.path} has no frontmatter`);
  }
  let head = text.slice(0, end);
  for (const field of skill.fields) {
    const pattern = new RegExp(`^([ \\t]+${field}:[ \\t]*")[^"]*(")`, "mu");
    if (!pattern.test(head)) {
      throw new TypeError(`${skill.path} has no metadata.${field} field`);
    }
    head = head.replace(pattern, `$1${version}$2`);
  }
  return head + text.slice(end);
}

/** Returns the files whose version differed from package.json. Writes them unless `check`. */
export async function syncVersions(root: string, check: boolean): Promise<string[]> {
  const pkg = (await Bun.file(`${root}/package.json`).json()) as { version?: string };
  if (typeof pkg.version !== "string") {
    throw new TypeError("package.json has no version field");
  }
  const drifted: string[] = [];
  for (const manifest of manifests) {
    const file = Bun.file(`${root}/${manifest.path}`);
    const doc = (await file.json()) as Json;
    const current = getField(doc, manifest.field);
    if (typeof current !== "string") {
      throw new TypeError(`${manifest.path} has no ${manifest.field} field`);
    }
    if (current === pkg.version) {
      continue;
    }
    drifted.push(manifest.path);
    if (!check) {
      setField(doc, manifest.field, pkg.version);
      await Bun.write(file, `${JSON.stringify(doc, null, 2)}\n`);
    }
  }
  for (const skill of skills) {
    const file = Bun.file(`${root}/${skill.path}`);
    const before = await file.text();
    const after = setFrontmatter(before, skill, pkg.version);
    if (after === before) {
      continue;
    }
    drifted.push(skill.path);
    if (!check) {
      await Bun.write(file, after);
    }
  }
  return drifted;
}

if (import.meta.main) {
  const check = process.argv.includes("--check");
  const drifted = await syncVersions(process.cwd(), check);
  for (const path of drifted) {
    console.log(`${check ? "drift  " : "written"} ${path}`);
  }
  if (check && drifted.length > 0) {
    console.log(`${drifted.length} file(s) disagree with package.json`);
    process.exit(1);
  }
  if (drifted.length === 0) {
    console.log("every manifest and skill matches package.json");
  }
}
