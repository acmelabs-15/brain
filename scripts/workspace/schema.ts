/**
 * The frontmatter schema of each workspace file type, the H1 each one opens with, the line
 * format of a research record's findings, and the words of a map or plan row. new-doc, check
 * and the migrate mode share them, so a template, a check finding and a migrated file agree
 * on every field.
 *
 * A file the migrate mode gave frontmatter carries `migrated: 0.8`. It needs only the field
 * that names it (`id`, or `spec` in a spec folder): the migration writes no value it cannot
 * read from the file's name, because a guessed `kind` or `status` would pass the check and
 * hide the gap. Its body is not checked, because the migration changes no byte of it. Every
 * field such a file does carry is checked like a new file's.
 */

export type DocType = "IDEA" | "DEC" | "RES" | "spec" | "plan" | "todo";

/** Return what is wrong with a value, or null when it is valid. */
type Rule = (value: unknown) => string | null;

export type Field = {
  /**
   * `always`: every file carries it, a migrated one too. `new`: every file without the
   * `migrated` marker carries it. `optional`: a file may carry it.
   */
  need: "always" | "new" | "optional";
  rule: Rule;
  /** A new file may leave the field out when this holds: `decided` on a proposed decision. */
  unless?: (data: Record<string, unknown>) => boolean;
};

export type Schema = {
  /** The field that names the file; it must equal the ID the file's name or folder gives. */
  identity: "id" | "spec";
  fields: Record<string, Field>;
  /** The text the file's H1 opens with; a title follows it. */
  heading: (id: string) => string;
  /** Problems across fields; each runs only when the fields it reads are valid. */
  across?: (data: Record<string, unknown>) => string[];
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function show(value: unknown): string {
  return JSON.stringify(value) ?? String(value);
}

function oneOf(...allowed: string[]): Rule {
  const shape = `${allowed.slice(0, -1).join(", ")} or ${allowed.at(-1)}`;
  return (value) =>
    typeof value === "string" && allowed.includes(value) ? null : `${show(value)} is not ${shape}`;
}

function like(pattern: RegExp, shape: string): Rule {
  return (value) =>
    typeof value === "string" && pattern.test(value) ? null : `${show(value)} is not ${shape}`;
}

function listOf(pattern: RegExp, shape: string): Rule {
  return (value) => {
    if (!Array.isArray(value)) {
      return `${show(value)} is not a list`;
    }
    const wrong = value.filter((item) => typeof item !== "string" || !pattern.test(item));
    return wrong.length === 0 ? null : `${wrong.map(show).join(", ")} is not ${shape}`;
  };
}

const adrQuestions = ["hard-to-reverse", "surprising", "real-trade-off"] as const;

function adrTest(value: unknown): string | null {
  const answered =
    isRecord(value) &&
    Object.keys(value).length === adrQuestions.length &&
    adrQuestions.every((question) => typeof value[question] === "boolean");
  return answered
    ? null
    : "needs hard-to-reverse, surprising and real-trade-off, each true or false";
}

/** `kind` is `architecture` exactly when all three ADR questions are answered true. */
function kindFollowsAdrTest(data: Record<string, unknown>): string[] {
  const { kind } = data;
  const answers = data["adr-test"];
  const valid = (kind === "decision" || kind === "architecture") && adrTest(answers) === null;
  if (!valid || !isRecord(answers)) {
    return [];
  }
  const expected = adrQuestions.every((question) => answers[question] === true)
    ? "architecture"
    : "decision";
  return kind === expected
    ? []
    : [`kind: ${kind} disagrees with adr-test, which makes it ${expected}`];
}

const from: Field = {
  need: "new",
  rule: like(
    /^(?:(?:IDEA|SPEC)-\d{3}(?:#\d{2})?|user)$/u,
    "a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user",
  ),
};
const evidence: Field = { need: "optional", rule: listOf(/^RES-\d{3}$/u, "RES-NNN") };
const spec: Field = { need: "always", rule: like(/^SPEC-\d{3}$/u, "SPEC-NNN") };

/** One schema per type, keyed as the templates are named. */
export const schemas: Record<DocType, Schema> = {
  IDEA: {
    identity: "id",
    fields: {
      id: { need: "always", rule: like(/^IDEA-\d{3}$/u, "IDEA-NNN") },
      status: { need: "new", rule: oneOf("define", "specced", "parked") },
    },
    heading: (id) => `# ${id}: `,
  },
  DEC: {
    identity: "id",
    fields: {
      id: { need: "always", rule: like(/^DEC-\d{3}$/u, "DEC-NNN") },
      status: {
        need: "new",
        rule: like(
          /^(?:proposed|accepted|superseded by DEC-\d{3})$/u,
          "proposed, accepted or superseded by DEC-NNN",
        ),
      },
      kind: { need: "new", rule: oneOf("decision", "architecture") },
      "adr-test": { need: "new", rule: adrTest },
      from,
      evidence,
      decided: {
        need: "new",
        rule: like(/^\d{4}-\d{2}-\d{2} by [^\s<>][^<>]*$/u, "YYYY-MM-DD by <name>"),
        unless: (data) => data.status === "proposed",
      },
    },
    heading: (id) => `# ${id}: `,
    across: kindFollowsAdrTest,
  },
  RES: {
    identity: "id",
    fields: {
      id: { need: "always", rule: like(/^RES-\d{3}$/u, "RES-NNN") },
      status: { need: "new", rule: oneOf("in-progress", "resolved") },
      kind: { need: "new", rule: oneOf("research", "task") },
      from,
      evidence,
      date: { need: "new", rule: like(/^\d{4}-\d{2}-\d{2}$/u, "YYYY-MM-DD") },
    },
    heading: (id) => `# ${id}: `,
  },
  spec: {
    identity: "spec",
    fields: {
      spec,
      sources: {
        need: "new",
        rule: listOf(/^(?:IDEA|DEC|RES)-\d{3}$/u, "IDEA-NNN, DEC-NNN or RES-NNN"),
      },
    },
    heading: (id) => `# ${id}: `,
  },
  plan: { identity: "spec", fields: { spec }, heading: (id) => `# ${id} plan: ` },
  todo: { identity: "spec", fields: { spec }, heading: (id) => `# ${id} todo: ` },
};

/**
 * One finding in a research record's `## Findings`: the claim, its source and the date it was
 * checked, then at most one validator the source cache holds for that source.
 */
export const findingLine =
  /^- (?<claim>.+?)\. Source: (?<source>.+?), checked (?<checked>\d{4}-\d{2}-\d{2})(?:, etag: (?<etag>.+?)|, last-modified: (?<lastModified>.+?))?\.?$/u;
const findingShape =
  '"- <claim>. Source: <source>, checked <YYYY-MM-DD>." with an optional ", etag: <value>" or ", last-modified: <value>"';

/** The status of a row in a map or a plan; `superseded by NN` names the row that replaced it. */
export const rowStatus = /^(?:open|in-progress|resolved|superseded by \d{2})$/u;

/**
 * The header and the row types of each table. A map's rows are named by how they resolve:
 * decide (`interview`, `prototype`, `ideate`), research, and do (`task`).
 */
export const tables = {
  map: {
    columns: ["#", "Question", "Type", "Status", "Blocked by", "Result"],
    types: ["interview", "prototype", "ideate", "research", "task"],
  },
  plan: {
    columns: ["#", "Task", "Type", "Status", "Blocked by", "Result"],
    types: ["task", "checkpoint"],
  },
} as const;

function checkFields(
  type: DocType,
  data: Record<string, unknown>,
  id: string,
  migrated: boolean,
): string[] {
  const schema = schemas[type];
  const problems = Object.keys(data)
    .filter((key) => key !== "migrated" && !Object.hasOwn(schema.fields, key))
    .map((key) => `${key}: not a field of a ${type} file`);
  if (migrated && String(data.migrated) !== "0.8") {
    problems.push(`migrated: ${show(data.migrated)} is not 0.8`);
  }
  for (const [key, field] of Object.entries(schema.fields)) {
    const value = data[key];
    if (value === undefined || value === null) {
      const skipped = field.need === "optional" || (field.need === "new" && migrated);
      if (!skipped && field.unless?.(data) !== true) {
        problems.push(`${key}: missing`);
      }
      continue;
    }
    const problem = field.rule(value);
    if (problem !== null) {
      problems.push(`${key}: ${problem}`);
    } else if (key === schema.identity && value !== id) {
      problems.push(`${key}: ${show(value)} does not match the file's ID ${id}`);
    }
  }
  return [...problems, ...(schema.across?.(data) ?? [])];
}

function checkHeading(prefix: string, body: string): string[] {
  const heading = body.split("\n").find((line) => line.startsWith("# "));
  if (heading === undefined) {
    return ["H1: missing"];
  }
  if (!heading.startsWith(prefix)) {
    return [`H1: ${show(heading)} does not open with ${show(prefix)}`];
  }
  return heading.slice(prefix.length).trim() === "" ? [`H1: ${show(heading)} has no title`] : [];
}

function checkFindings(body: string): string[] {
  const problems: string[] = [];
  let inFindings = false;
  for (const line of body.split("\n")) {
    if (/^#{1,2} /u.test(line)) {
      inFindings = line.trim() === "## Findings";
    } else if (inFindings && line.startsWith("- ") && !findingLine.test(line)) {
      problems.push(`finding: ${show(line)} is not ${findingShape}`);
    }
  }
  return problems;
}

function parseYaml(text: string): { data: unknown } | { error: string } {
  try {
    return { data: Bun.YAML.parse(text) };
  } catch (error) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
}

/**
 * Split a file's text into its frontmatter fields and the body below them. Returns null when
 * the text opens with no frontmatter, and the problem when the frontmatter is not a map of
 * fields.
 */
export function readFrontmatter(
  text: string,
): { data: Record<string, unknown>; body: string } | { error: string } | null {
  const parts = /^---\n(?:(?<head>[\s\S]*?)\n)?---(?:\n|$)/u.exec(text);
  if (parts === null) {
    return null;
  }
  const parsed = parseYaml(parts.groups?.head ?? "");
  if ("error" in parsed) {
    return { error: `not valid YAML (${parsed.error})` };
  }
  // An empty frontmatter is a map with no fields, so each missing field gets its own line.
  const data = parsed.data ?? {};
  if (!isRecord(data)) {
    return { error: "not a map of fields" };
  }
  return { data, body: text.slice(parts[0].length) };
}

/**
 * Check one workspace file's text against its type: the frontmatter, the H1 and, in a research
 * record, each finding line. `id` is the ID the file's name or spec folder gives it. Returns
 * one line per problem, each opening with the field it names; an empty list means valid.
 */
export function checkDoc(type: DocType, text: string, id: string): string[] {
  const frontmatter = readFrontmatter(text);
  if (frontmatter === null) {
    return ["frontmatter: missing"];
  }
  if ("error" in frontmatter) {
    return [`frontmatter: ${frontmatter.error}`];
  }
  const { data, body } = frontmatter;
  const migrated = Object.hasOwn(data, "migrated");
  const problems = checkFields(type, data, id, migrated);
  if (migrated) {
    return problems;
  }
  problems.push(...checkHeading(schemas[type].heading(id), body));
  if (type === "RES") {
    problems.push(...checkFindings(body));
  }
  return problems;
}
