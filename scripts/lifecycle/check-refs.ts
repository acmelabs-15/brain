/**
 * Every skill a command or skill names must exist, under the brain: prefix or bare, and
 * a user-invoked skill must say so in both hosts' files. The run also applies the name
 * checks in names.ts (no retired name, and a complete glossary), the agent-list check in
 * agents.ts (the Claude manifest names every agent), the hook-file check in hooks.ts (no
 * hook file that another host loads by default) and the router check in router.ts (using-brain
 * names every skill, and no skill that does not exist).
 *
 *   bun run lifecycle:check
 */
import { fileNames, folderNames, readIfPresent } from "../lib/files";
import { readFrontmatter } from "../workspace/schema";
import { checkAgentList } from "./agents";
import type { Finding } from "./finding";
import { checkHookFiles } from "./hooks";
import { checkFallbackExpiry, checkGlossaryTerms, checkRetiredNames } from "./names";
import { checkRouter } from "./router";

export type Ref = { prefix: string | null; name: string };

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
  const names = await fileNames(dir);
  return names.filter((name) => name.endsWith(suffix)).map((name) => `${dir}/${name}`);
}

function frontmatterFlag(text: string): boolean {
  const frontmatter = readFrontmatter(text);
  return (
    frontmatter !== null &&
    "data" in frontmatter &&
    frontmatter.data["disable-model-invocation"] === true
  );
}

async function readOrEmpty(path: string): Promise<string> {
  return (await readIfPresent(path)) ?? "";
}

export async function checkRefs(root: string): Promise<Finding[]> {
  const findings: Finding[] = [];
  const skills = await folderNames(`${root}/skills`);
  const commandFiles = await listFiles(`${root}/.claude/commands`, ".md");
  const commands = new Set(commandFiles.map((file) => file.slice(file.lastIndexOf("/") + 1, -3)));
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
      const resolves = skills.includes(ref.name) || (ref.prefix !== null && commands.has(ref.name));
      if (!resolves) {
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
  const root = process.cwd();
  const findings = [
    ...(await checkRefs(root)),
    ...(await checkRetiredNames(root)),
    ...(await checkGlossaryTerms(root)),
    ...(await checkFallbackExpiry(root)),
    ...(await checkAgentList(root)),
    ...(await checkHookFiles(root)),
    ...(await checkRouter(root)),
  ];
  for (const finding of findings) {
    console.log(`${finding.kind.padEnd(14)} ${finding.file}: ${finding.detail}`);
  }
  if (findings.length > 0) {
    console.log(`${findings.length} finding(s)`);
    process.exit(1);
  }
  console.log(
    "every skill reference resolves, every user-invoked flag agrees, no retired name is left, every agent is listed, no other host loads a hook file, using-brain routes to every skill",
  );
}
