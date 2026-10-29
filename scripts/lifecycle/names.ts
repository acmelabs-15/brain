/**
 * Names brain has retired must not come back, and brain's own glossary must define the
 * workspace terms. Both run inside `bun run lifecycle:check`.
 */
import { readdir } from "node:fs/promises";

import { readLock } from "../sync/lib/lock";
import type { Finding } from "./check-refs";

type Retired = { pattern: RegExp; allowLine: RegExp; detail: string };

/** Each retired name, and the line text that may still name it: a line about the change. */
export const retiredNames: readonly Retired[] = [
  {
    pattern: /CONTEXT(?:-MAP)?\.md/u,
    allowLine: /GLOSSARY/u,
    detail: "names CONTEXT.md or CONTEXT-MAP.md; the glossary is GLOSSARY.md now",
  },
];

/** The terms brain's GLOSSARY.md must define, one `**Term**:` entry each. */
export const glossaryTerms = [
  "Idea",
  "Effort",
  "Destination",
  "Map",
  "Row",
  "Decide row",
  "Research row",
  "Do row",
  "Frontier",
  "Fog",
  "Claim",
  "Decision record",
  "Research record",
  "Workspace",
  "Protocol",
] as const;

/** History keeps what was true then; test folders hold fixtures with the old names. */
const keptAsWritten = ["tasks/", "docs/research/", "docs/intent/", "CHANGELOG.md"];
const neverRead = new Set(["node_modules", ".git", "evals/results"]);
const textFile = /\.(?:md|toml|json|ts|ya?ml|sh)$/u;

async function textFiles(root: string, rel = ""): Promise<string[]> {
  const entries = await readdir(rel === "" ? root : `${root}/${rel}`, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const path = rel === "" ? entry.name : `${rel}/${entry.name}`;
    if (entry.isDirectory()) {
      if (!neverRead.has(entry.name) && !neverRead.has(path)) {
        files.push(...(await textFiles(root, path)));
      }
    } else if (textFile.test(entry.name)) {
      files.push(path);
    }
  }
  return files;
}

function keptFile(path: string): boolean {
  return keptAsWritten.some((prefix) => path.startsWith(prefix)) || path.includes("__tests__/");
}

/** Every line in a brain-owned text file that names a retired name. */
export async function checkRetiredNames(root: string): Promise<Finding[]> {
  const lock = await readLock(`${root}/upstream.lock.json`);
  const findings: Finding[] = [];
  const files = await textFiles(root);
  for (const file of files.toSorted()) {
    if (keptFile(file) || file in lock.files) {
      continue;
    }
    const text = await Bun.file(`${root}/${file}`).text();
    for (const [index, line] of text.split("\n").entries()) {
      for (const name of retiredNames) {
        if (name.pattern.test(line) && !name.allowLine.test(line)) {
          findings.push({ kind: "retired-name", file, detail: `line ${index + 1} ${name.detail}` });
        }
      }
    }
  }
  return findings;
}

/** One finding per workspace term that brain's GLOSSARY.md does not define. */
export async function checkGlossaryTerms(root: string): Promise<Finding[]> {
  const glossary = Bun.file(`${root}/GLOSSARY.md`);
  if (!(await glossary.exists())) {
    return [{ kind: "glossary-term", file: "GLOSSARY.md", detail: "brain's glossary is missing" }];
  }
  const text = await glossary.text();
  return glossaryTerms
    .filter((term) => !text.includes(`**${term}**:`))
    .map((term) => ({
      kind: "glossary-term",
      file: "GLOSSARY.md",
      detail: `no entry for ${term}`,
    }));
}
