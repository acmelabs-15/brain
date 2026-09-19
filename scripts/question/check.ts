/**
 * The mechanical bar for the ask-user-question skill.
 *
 *   bun run question:check
 *
 * Description under 300 characters; no forbidden synonym in SKILL.md; SKILL.md under 250
 * lines; each host reference present and under 120 lines.
 */

export type Finding = {
  kind: "description-length" | "synonym" | "line-budget" | "missing-file";
  file: string;
  detail: string;
};

export type Forbidden = { word: string; pattern: RegExp };

/** The domain map fixes one word per concept; these are the synonyms the skill must not use. */
export const forbidden: readonly Forbidden[] = [
  { word: "the person", pattern: /\bthe person\b/giu },
  { word: "the reader", pattern: /\bthe reader\b/giu },
  { word: "surrounding task", pattern: /\bsurrounding task\b/giu },
  { word: "another workflow", pattern: /\banother workflow\b/giu },
  { word: "later topic", pattern: /\blater topic\b/giu },
  { word: "response", pattern: /\bresponses?\b(?! deadline| timeout| time)/giu },
];

const references = ["references/claude-code.md", "references/codex.md", "references/gemini-cli.md"];
const budgets = { skill: 250, reference: 120, description: 300 };

function description(text: string): string {
  const end = text.indexOf("\n---", 3);
  const head = text.startsWith("---") && end !== -1 ? text.slice(0, end) : "";
  const line = head.split("\n").find((l) => l.startsWith("description:"));
  if (line === undefined) {
    return "";
  }
  return line
    .slice("description:".length)
    .trim()
    .replace(/^"(?<body>.*)"$/u, "$<body>");
}

function lineCount(text: string): number {
  return text.endsWith("\n") ? text.split("\n").length - 1 : text.split("\n").length;
}

export async function checkQuestionSkill(dir: string): Promise<Finding[]> {
  const findings: Finding[] = [];
  const skill = await Bun.file(`${dir}/SKILL.md`).text();

  const desc = description(skill);
  if (desc.length > budgets.description) {
    findings.push({
      kind: "description-length",
      file: "SKILL.md",
      detail: `${desc.length} characters, limit ${budgets.description}`,
    });
  }

  for (const [index, line] of skill.split("\n").entries()) {
    for (const entry of forbidden) {
      const matches = line.match(entry.pattern);
      if (matches !== null) {
        const shown =
          entry.word === "response"
            ? matches[0].toLowerCase()
            : `the ${entry.word.replace(/^the /u, "")}`;
        findings.push({
          kind: "synonym",
          file: "SKILL.md",
          detail: `line ${index + 1} uses "${shown}"`,
        });
      }
    }
  }

  if (lineCount(skill) > budgets.skill) {
    findings.push({
      kind: "line-budget",
      file: "SKILL.md",
      detail: `${lineCount(skill)} lines, limit ${budgets.skill}`,
    });
  }

  for (const path of references) {
    const file = Bun.file(`${dir}/${path}`);
    if (!(await file.exists())) {
      findings.push({ kind: "missing-file", file: path, detail: "expected host reference" });
      continue;
    }
    const lines = lineCount(await file.text());
    if (lines > budgets.reference) {
      findings.push({
        kind: "line-budget",
        file: path,
        detail: `${lines} lines, limit ${budgets.reference}`,
      });
    }
  }
  return findings;
}

if (import.meta.main) {
  const findings = await checkQuestionSkill(`${process.cwd()}/skills/ask-user-question`);
  for (const finding of findings) {
    console.log(`${finding.kind.padEnd(19)} ${finding.file}: ${finding.detail}`);
  }
  if (findings.length > 0) {
    console.log(`${findings.length} finding(s)`);
    process.exit(1);
  }
  console.log("ask-user-question is within every budget and uses the map's words");
}
