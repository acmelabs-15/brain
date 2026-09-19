/**
 * Every skill a command or skill names must exist, under the brain: prefix or bare, and
 * a user-invoked skill must say so in both hosts' files.
 *
 *   bun run lifecycle:check
 */
import { readdir } from "node:fs/promises";

export type Ref = { prefix: string | null; name: string };
export type Finding = {
  kind: "unresolved" | "old-prefix" | "flag-mismatch";
  file: string;
  detail: string;
};

const prefixed = /\b(?<prefix>brain|agent-skills):(?<name>[a-z0-9][a-z0-9-]*)(?![a-z0-9:-])/gu;
const skillTool =
  /Skill tool(?: twice| once)?,? (?:with|for) "(?<first>[a-z0-9][a-z0-9-]*)"(?:,? (?:and )?"(?<second>[a-z0-9][a-z0-9-]*)")?/gu;

export function findRefs(text: string): Ref[] {
  const found: { index: number; ref: Ref }[] = [];
  for (const match of text.matchAll(prefixed)) {
    const { prefix, name } = match.groups as { prefix: string; name: string };
    found.push({ index: match.index, ref: { prefix, name } });
  }
  for (const match of text.matchAll(skillTool)) {
    const { first, second } = match.groups as { first: string; second?: string };
    found.push({ index: match.index, ref: { prefix: null, name: first } });
    if (second !== undefined) {
      found.push({ index: match.index + 1, ref: { prefix: null, name: second } });
    }
  }
  return found.toSorted((a, b) => a.index - b.index).map((entry) => entry.ref);
}

async function listFiles(dir: string, suffix: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(suffix))
    .map((entry) => `${dir}/${entry.name}`)
    .toSorted();
}

async function skillDirs(root: string): Promise<string[]> {
  const entries = await readdir(`${root}/skills`, { withFileTypes: true }).catch(() => []);
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .toSorted();
}

function frontmatterFlag(text: string): boolean {
  const end = text.indexOf("\n---", 3);
  const head = text.startsWith("---") && end !== -1 ? text.slice(0, end) : "";
  return /^disable-model-invocation:\s*true\s*$/mu.test(head);
}

async function readOrEmpty(path: string): Promise<string> {
  const file = Bun.file(path);
  return (await file.exists()) ? file.text() : "";
}

export async function checkRefs(root: string): Promise<Finding[]> {
  const findings: Finding[] = [];
  const skills = await skillDirs(root);
  const files = [
    ...(await listFiles(`${root}/.claude/commands`, ".md")),
    ...(await listFiles(`${root}/commands`, ".toml")),
    ...skills.map((name) => `${root}/skills/${name}/SKILL.md`),
  ];
  for (const file of files) {
    const text = await readOrEmpty(file);
    const rel = file.slice(root.length + 1);
    for (const ref of findRefs(text)) {
      const shown = ref.prefix === null ? ref.name : `${ref.prefix}:${ref.name}`;
      if (ref.prefix === "agent-skills") {
        findings.push({
          kind: "old-prefix",
          file: rel,
          detail: `${shown} should be brain:${ref.name}`,
        });
      }
      if (!skills.includes(ref.name)) {
        findings.push({
          kind: "unresolved",
          file: rel,
          detail: `no skills/${ref.name}/SKILL.md for ${shown}`,
        });
      }
    }
  }
  for (const name of skills) {
    const skill = await readOrEmpty(`${root}/skills/${name}/SKILL.md`);
    const yaml = await readOrEmpty(`${root}/skills/${name}/agents/openai.yaml`);
    const claudeFlag = frontmatterFlag(skill);
    const codexFlag = /allow_implicit_invocation:\s*false/u.test(yaml);
    if (claudeFlag !== codexFlag) {
      findings.push({
        kind: "flag-mismatch",
        file: `skills/${name}`,
        detail: `disable-model-invocation is ${claudeFlag} but allow_implicit_invocation: false is ${codexFlag}`,
      });
    }
  }
  return findings;
}

if (import.meta.main) {
  const findings = await checkRefs(process.cwd());
  for (const finding of findings) {
    console.log(`${finding.kind.padEnd(14)} ${finding.file}: ${finding.detail}`);
  }
  if (findings.length > 0) {
    console.log(`${findings.length} finding(s)`);
    process.exit(1);
  }
  console.log("every skill reference resolves and every user-invoked flag agrees");
}
