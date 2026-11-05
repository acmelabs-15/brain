/** Select only reviewed plugin instructions/support code; never copy consumer records or credentials. */
import { lstat, mkdir } from "node:fs/promises";
import path from "node:path";

import { selectedBrainSkills } from "./interview-driver";

const selected = selectedBrainSkills.map((name) => name.slice("brain:".length));
const additions = [
  "skills/setup-brain/MIGRATION.md",
  "skills/setup-brain/ROOT-CLEANUP.md",
  "skills/ask-user-question/references/selection.md",
  "references/brain/commit-contract.md",
  "skills/code-review-and-quality/REVIEW-CRITERIA.md",
  "skills/security-and-hardening/references/hardening-patterns.md",
  "docs/install/prerequisites.md",
  "docs/maintainers/changes.md",
  "docs/agents.md",
  "licenses/agent-skills-security.LICENSE",
];

export function snapshotSourceAllowed(file: string): boolean {
  if (
    file
      .split("/")
      .some((part) => /^(?:\.env(?:\..*)?|credentials(?:\..*)?|.*\.(?:pem|key|p12))$/iu.test(part))
  ) {
    return false;
  }
  if (
    path.isAbsolute(file) ||
    file
      .split("/")
      .some((part) =>
        ["..", ".git", "__tests__", "tests", "fixtures", "evals", "node_modules"].includes(part),
      )
  ) {
    return false;
  }
  if (
    file === "package.json" ||
    file === ".claude-plugin/plugin.json" ||
    file === "scripts/brain.ts" ||
    file === "scripts/plain-talk/block.ts"
  ) {
    return true;
  }
  if (/^(?:protocol|plain-talk|references)\/.*\.md$/u.test(file)) {
    return true;
  }
  if (["README.md", "CONTRIBUTING.md", "LICENSE", "docs/agents.md"].includes(file)) {
    return true;
  }
  if (/^licenses\/[^/]+\.LICENSE$/u.test(file)) {
    return true;
  }
  if (/^docs\/(?:install|maintainers)\/.*\.md$/u.test(file)) {
    return true;
  }
  if (
    /^(?:\.claude\/commands|agents|claude\/agents|output-styles|commands|rules|hooks)\//u.test(file)
  ) {
    return /\.(?:md|json|toml|sh)$/u.test(file) && !/-test\./u.test(file);
  }
  if (/^scripts\/(?:lib|workspace|setup)\/.*\.(?:ts|md)$/u.test(file)) {
    return true;
  }
  if (/^scripts\/hooks\/(?:session-start\.ts|claude-code\.json)$/u.test(file)) {
    return true;
  }
  return (
    selected.some((skill) => file.startsWith(`skills/${skill}/`)) &&
    /\.(?:md|yaml|yml|json|ts|sh|svg|png|jpg)$/u.test(file)
  );
}

type Manifest = {
  files: { path: string; sha256: string; sourceSha256: string }[];
  selectedSkills: string[];
  notes: string[];
};

/** Match the complete public source set as well as its bytes; unknown additions need review. */
async function sourceFiles(source: string): Promise<string[]> {
  const tracked = Bun.spawnSync(["git", "ls-files", "-z"], { cwd: source });
  if (tracked.exitCode !== 0) {
    throw new Error("snapshot source must be a Git checkout");
  }
  const reviewed = new Set([
    ...tracked.stdout.toString().split("\0").filter(Boolean),
    ...additions,
  ]);
  const patterns = [
    "skills/**/*",
    "references/**/*",
    ".claude/commands/**/*",
    "agents/**/*",
    "claude/agents/**/*",
    "output-styles/**/*",
    "commands/**/*",
    "rules/**/*",
    "hooks/**/*",
    "protocol/**/*",
    "plain-talk/**/*",
    "scripts/lib/**/*",
    "scripts/workspace/**/*",
    "scripts/setup/**/*",
    "scripts/hooks/**/*",
    "scripts/brain.ts",
    "scripts/plain-talk/block.ts",
    "docs/install/**/*",
    "docs/maintainers/**/*",
    "docs/agents.md",
    "licenses/*",
    "LICENSE",
    "README.md",
    "CONTRIBUTING.md",
    "package.json",
    ".claude-plugin/plugin.json",
  ];
  const found = new Set<string>();
  for (const pattern of patterns) {
    for await (const file of new Bun.Glob(pattern).scan({
      cwd: source,
      dot: true,
      onlyFiles: true,
      followSymlinks: false,
    })) {
      if (!snapshotSourceAllowed(file)) {
        continue;
      }
      if (!reviewed.has(file)) {
        throw new Error(`unreviewed public-support path: ${file}`);
      }
      found.add(file);
    }
  }
  const catalog: string[] = [];
  for await (const file of new Bun.Glob("skills/*/SKILL.md").scan({
    cwd: source,
    onlyFiles: true,
  })) {
    catalog.push(`brain:${file.split("/")[1]}`);
  }
  if (JSON.stringify(catalog.toSorted()) !== JSON.stringify(selectedBrainSkills.toSorted())) {
    throw new Error(
      "the public skill catalog changed; review the complete catalog before snapshotting",
    );
  }
  return [...found].toSorted();
}

export async function prepareSnapshot(sourcePath: string, outputPath: string): Promise<Manifest> {
  const source = path.resolve(sourcePath);
  const output = path.resolve(outputPath);
  // mkdir without recursive refuses an existing snapshot: baseline/candidate arms remain immutable.
  await mkdir(path.dirname(output), { recursive: true });
  await mkdir(output);
  const files = await sourceFiles(source);
  const manifest: Manifest = {
    files: [],
    selectedSkills: selectedBrainSkills,
    notes: [
      "Full public Brain catalog: all 33 skills, their support, actual commands, agents, output styles, original manifest and hook.",
      "Private docs, repository metadata, tests/fixtures, credentials and root maintainer instructions are excluded.",
    ],
  };
  for (const file of files) {
    const full = path.join(source, file);
    const stat = await lstat(full).catch(() => null);
    if (stat === null && additions.includes(file)) {
      continue;
    }
    if (!stat?.isFile() || stat.isSymbolicLink()) {
      throw new Error(`snapshot refuses non-regular source: ${file}`);
    }
    const bytes = await Bun.file(full).bytes();
    const sourceSha256 = new Bun.CryptoHasher("sha256").update(bytes).digest("hex");
    if (file === ".claude-plugin/plugin.json") {
      const plugin = JSON.parse(new TextDecoder().decode(bytes)) as Record<string, unknown>;
      if (plugin.name !== "brain" || plugin.hooks !== "./scripts/hooks/claude-code.json") {
        throw new Error("unexpected source plugin identity/hook");
      }
    }
    await mkdir(path.dirname(path.join(output, file)), { recursive: true });
    await Bun.write(path.join(output, file), bytes);
    manifest.files.push({
      path: file,
      sha256: new Bun.CryptoHasher("sha256").update(bytes).digest("hex"),
      sourceSha256,
    });
  }
  for (const skill of selected) {
    if (!manifest.files.some((file) => file.path === `skills/${skill}/SKILL.md`)) {
      throw new Error(`snapshot lacks selected skill ${skill}`);
    }
  }
  await Bun.write(`${output}/.evaluation-snapshot.json`, `${JSON.stringify(manifest, null, 2)}\n`);
  return manifest;
}

/** A reviewed snapshot is stale when any selected source file changes before a run. */
export async function verifySnapshotSource(source: string, snapshot: string): Promise<void> {
  const manifest = (await Bun.file(`${snapshot}/.evaluation-snapshot.json`).json()) as Manifest;
  if (
    JSON.stringify(await sourceFiles(source)) !==
    JSON.stringify(manifest.files.map((file) => file.path).toSorted())
  ) {
    throw new Error("rebuild candidate snapshot after public source/catalog set change");
  }
  for (const file of manifest.files) {
    const bytes = await Bun.file(path.join(source, file.path)).bytes();
    if (new Bun.CryptoHasher("sha256").update(bytes).digest("hex") !== file.sourceSha256) {
      throw new Error(`rebuild candidate snapshot after source change: ${file.path}`);
    }
  }
}

export async function verifySnapshot(root: string): Promise<void> {
  const manifest = (await Bun.file(`${root}/.evaluation-snapshot.json`).json()) as Manifest;
  if (
    !Array.isArray(manifest.files) ||
    JSON.stringify(manifest.selectedSkills) !== JSON.stringify(selectedBrainSkills)
  ) {
    throw new Error("invalid selected snapshot manifest");
  }
  const expected = new Set(manifest.files.map((file) => file.path));
  for await (const file of new Bun.Glob("**/*").scan({ cwd: root, onlyFiles: true, dot: true })) {
    if (file !== ".evaluation-snapshot.json" && !expected.has(file)) {
      throw new Error(`unexpected snapshot file: ${file}`);
    }
  }
  for (const file of manifest.files) {
    if (!snapshotSourceAllowed(file.path)) {
      throw new Error(`unapproved snapshot path: ${file.path}`);
    }
    const full = path.join(root, file.path);
    const stat = await lstat(full);
    if (!stat.isFile() || stat.isSymbolicLink()) {
      throw new Error(`snapshot source changed type: ${file.path}`);
    }
    if (
      new Bun.CryptoHasher("sha256").update(await Bun.file(full).bytes()).digest("hex") !==
      file.sha256
    ) {
      throw new Error(`snapshot changed: ${file.path}`);
    }
  }
}

if (import.meta.main) {
  const [source, output] = process.argv.slice(2);
  if (!source || !output) {
    throw new Error(
      "usage: bun scripts/evals/keystone-snapshot.ts <source-repo> <new-snapshot-folder>",
    );
  }
  const manifest = await prepareSnapshot(source, output);
  await verifySnapshot(path.resolve(output));
  console.log(
    JSON.stringify({ files: manifest.files.length, selectedSkills: manifest.selectedSkills }),
  );
}
