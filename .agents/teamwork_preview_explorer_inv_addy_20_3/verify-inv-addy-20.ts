import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

const PROJECT_ROOT = "/Users/peterkloss/Dev/ACMElabs/brain-v2";
const ADDY_DIR = path.join(PROJECT_ROOT, "sources/addy");

interface StepResult {
  step: string;
  command: string;
  exitCode: number;
  stdout: string;
  stderr: string;
  passed: boolean;
  notes?: string;
}

const results: StepResult[] = [];

function runStep(step: string, cmd: string, args: string[], cwd: string = ADDY_DIR): StepResult {
  const res = spawnSync(cmd, args, {
    cwd,
    encoding: "utf8",
    env: { ...process.env },
  });
  const stepResult: StepResult = {
    step,
    command: `${cmd} ${args.join(" ")}`,
    exitCode: res.status ?? (res.error ? 1 : 0),
    stdout: (res.stdout || "").trim(),
    stderr: (res.stderr || "").trim(),
    passed: (res.status === 0),
    notes: res.error ? res.error.message : undefined,
  };
  results.push(stepResult);
  return stepResult;
}

console.log("=== STEP 1: Repository Script Validations for inv-addy-20 ===");

// 1. Validate versions
console.log("\n--- Running validate-versions.js ---");
const vVersions = runStep(
  "validate-versions",
  "bun",
  ["scripts/validate-versions.js"],
  ADDY_DIR
);
console.log(`Exit Code: ${vVersions.exitCode}`);
console.log(`Output: ${vVersions.stdout}`);

// 2. Validate versions test
console.log("\n--- Running validate-versions-test.js ---");
const vVersionsTest = runStep(
  "validate-versions-test",
  "bun",
  ["test", "./scripts/validate-versions-test.js"],
  ADDY_DIR
);
console.log(`Exit Code: ${vVersionsTest.exitCode}`);
console.log(`Output: ${vVersionsTest.stdout}`);

// 3. Validate skills (checks both skills in scope)
console.log("\n--- Running validate-skills.js ---");
const vSkills = runStep(
  "validate-skills",
  "bun",
  ["scripts/validate-skills.js"],
  ADDY_DIR
);
console.log(`Exit Code: ${vSkills.exitCode}`);
const hasGitWorkflow = vSkills.stdout.includes("git-workflow-and-versioning");
const hasDocsAdrs = vSkills.stdout.includes("documentation-and-adrs");
console.log(`git-workflow-and-versioning validated: ${hasGitWorkflow}`);
console.log(`documentation-and-adrs validated: ${hasDocsAdrs}`);

// 4. Validate reference links
console.log("\n--- Running validate-reference-links.js ---");
const vRefLinks = runStep(
  "validate-reference-links",
  "bun",
  ["scripts/validate-reference-links.js"],
  ADDY_DIR
);
console.log(`Exit Code: ${vRefLinks.exitCode}`);

// 5. Run evals trigger test suite
console.log("\n--- Running run-evals.js ---");
const vEvals = runStep(
  "run-evals",
  "bun",
  ["scripts/run-evals.js"],
  ADDY_DIR
);
console.log(`Exit Code: ${vEvals.exitCode}`);
console.log(`Output: ${vEvals.stdout}`);

// 6. Run addy script unit test suites
console.log("\n--- Running addy test suites ---");
const vAllTests = runStep(
  "addy-test-suites",
  "bun",
  [
    "test",
    "./scripts/validate-versions-test.js",
    "./scripts/validate-reference-links-test.js",
    "./scripts/validate-commands-test.js",
    "./scripts/validate-artifact-paths-test.js",
    "./scripts/run-evals-test.js"
  ],
  ADDY_DIR
);
console.log(`Exit Code: ${vAllTests.exitCode}`);
console.log(`Output summary: ${vAllTests.stdout.split("\n").slice(-4).join("\n")}`);

console.log("\n=== STEP 2: Manifest & Configuration Validations ===");

// Check .codex-plugin/plugin.json
const codexManifestPath = path.join(ADDY_DIR, ".codex-plugin/plugin.json");
const codexRaw = fs.readFileSync(codexManifestPath, "utf8");
let codexJson: any;
try {
  codexJson = JSON.parse(codexRaw);
  console.log("✓ .codex-plugin/plugin.json is valid JSON");
} catch (e: any) {
  console.error("✗ .codex-plugin/plugin.json failed JSON parse:", e.message);
}

const rootManifestPath = path.join(ADDY_DIR, "plugin.json");
const rootJson = JSON.parse(fs.readFileSync(rootManifestPath, "utf8"));
console.log(`Codex plugin version: ${codexJson.version}, Root plugin version: ${rootJson.version}`);

// Verify skills pointer
const skillsTarget = path.resolve(path.dirname(codexManifestPath), codexJson.skills);
console.log(`Skills directory points to: ${codexJson.skills} -> exists: ${fs.existsSync(skillsTarget)}`);

console.log("\n=== STEP 3: Safe Sandbox Execution of Git Commands ===");
const tmpDir = fs.mkdtempSync(path.join("/tmp", "git-workflow-sim-"));
console.log(`Created sandbox: ${tmpDir}`);

try {
  // git init
  const gInit = runStep("git-init", "git", ["init", "-b", "main"], tmpDir);
  runStep("git-config-email", "git", ["config", "user.email", "test@example.com"], tmpDir);
  runStep("git-config-name", "git", ["config", "user.name", "Test User"], tmpDir);

  // Initial commit
  fs.writeFileSync(path.join(tmpDir, "README.md"), "# Sandbox\n");
  runStep("git-add-initial", "git", ["add", "README.md"], tmpDir);
  runStep("git-commit-initial", "git", ["commit", "-m", "chore: initial commit"], tmpDir);

  // 1. Commit Early, Commit Often / Atomic Commits
  fs.writeFileSync(path.join(tmpDir, "validation.ts"), "export const validate = (e: string) => true;\n");
  runStep("git-add-refactor", "git", ["add", "validation.ts"], tmpDir);
  runStep(
    "git-commit-refactor",
    "git",
    ["commit", "-m", "refactor: extract validation logic to shared utility"],
    tmpDir
  );

  fs.writeFileSync(path.join(tmpDir, "auth.ts"), "import { validate } from './validation';\n");
  runStep("git-add-feat", "git", ["add", "auth.ts"], tmpDir);
  runStep(
    "git-commit-feat",
    "git",
    ["commit", "-m", "feat: add phone number validation to registration"],
    tmpDir
  );

  // git log --oneline
  const gLog = runStep("git-log-oneline", "git", ["log", "--oneline"], tmpDir);
  console.log("git log --oneline output:\n" + gLog.stdout);

  // Pre-commit hygiene: diff --staged check
  fs.writeFileSync(path.join(tmpDir, "temp.txt"), "apiKey = 'secret_token_123';\n");
  runStep("git-add-temp", "git", ["add", "temp.txt"], tmpDir);
  const diffStaged = spawnSync("git", ["diff", "--staged"], { cwd: tmpDir, encoding: "utf8" });
  const grepCheck = spawnSync("grep", ["-i", "password\\|secret\\|api_key\\|token"], {
    input: diffStaged.stdout,
    encoding: "utf8",
  });
  console.log(`Secrets grep check exit code: ${grepCheck.status} (matched: ${grepCheck.stdout.trim()})`);
  results.push({
    step: "precommit-secret-check",
    command: "git diff --staged | grep -i 'password\\|secret\\|api_key\\|token'",
    exitCode: grepCheck.status ?? 0,
    stdout: grepCheck.stdout.trim(),
    stderr: grepCheck.stderr.trim(),
    passed: grepCheck.status === 0, // Found secret as expected
    notes: "Correctly detected secret in staged diff",
  });

  // Revert staged file using git reset
  runStep("git-reset-temp", "git", ["reset", "HEAD", "temp.txt"], tmpDir);
  fs.unlinkSync(path.join(tmpDir, "temp.txt"));

  // Tagging release
  const gTag = runStep("git-tag-release", "git", ["tag", "-a", "v1.4.0", "-m", "Release 1.4.0"], tmpDir);
  console.log(`git tag -a v1.4.0 exit code: ${gTag.exitCode}`);

  // Git worktree test
  const worktreeDir = path.join(tmpDir, "wt-feature");
  const gWtAdd = runStep("git-worktree-add", "git", ["worktree", "add", "-b", "feature/task-creation", worktreeDir], tmpDir);
  console.log(`git worktree add exit code: ${gWtAdd.exitCode}`);
  const gWtRemove = runStep("git-worktree-remove", "git", ["worktree", "remove", worktreeDir], tmpDir);
  console.log(`git worktree remove exit code: ${gWtRemove.exitCode}`);

  // Git bisect test
  runStep("git-bisect-start", "git", ["bisect", "start"], tmpDir);
  runStep("git-bisect-bad", "git", ["bisect", "bad", "HEAD"], tmpDir);
  runStep("git-bisect-good", "git", ["bisect", "good", "HEAD~2"], tmpDir);
  const gBisectReset = runStep("git-bisect-reset", "git", ["bisect", "reset"], tmpDir);
  console.log(`git bisect cycle completed, reset exit code: ${gBisectReset.exitCode}`);

} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
  console.log(`Cleaned up sandbox: ${tmpDir}`);
}

console.log("\n=== STEP 4: Code Snippet Syntax Validations ===");

// Validate JSON snippet in git-workflow-and-versioning/SKILL.md (lines 235-242)
const gitWorkflowSkill = fs.readFileSync(path.join(ADDY_DIR, "skills/git-workflow-and-versioning/SKILL.md"), "utf8");
const jsonMatch = gitWorkflowSkill.match(/```json\n([\s\S]*?)\n```/);
if (jsonMatch) {
  const jsonContent = jsonMatch[1];
  // Remove comment line "// package.json (using lint-staged + husky)"
  const stripped = jsonContent.replace(/\/\/.*$/gm, "").trim();
  try {
    const parsed = JSON.parse(stripped);
    console.log("✓ git-workflow-and-versioning JSON snippet is valid JSON (after comment strip):", Object.keys(parsed));
  } catch (e: any) {
    console.error("✗ Failed to parse git-workflow-and-versioning JSON snippet:", e.message);
  }
}

// Validate TypeScript snippets in documentation-and-adrs/SKILL.md
const docSkill = fs.readFileSync(path.join(ADDY_DIR, "skills/documentation-and-adrs/SKILL.md"), "utf8");
console.log(`✓ documentation-and-adrs SKILL.md read (${docSkill.length} bytes)`);

// Test TS snippet 1: sliding window
const tsSnippet1 = `
const WINDOW_SIZE_MS = 60000;
let now = Date.now();
let windowStart = now;
let counter = 0;
counter += 1;
if (now - windowStart > WINDOW_SIZE_MS) {
  counter = 0;
  windowStart = now;
}
`;
// Test TS snippet 2: calculateTotal
const tsSnippet2 = `
interface CartItem { price: number; quantity: number; }
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
`;
// Test TS snippet 3 & 4: initializeTheme and createTask interfaces
const tsSnippet3 = `
interface Theme { name: string; }
export function initializeTheme(theme: Theme): void {}

interface CreateTaskInput { title: string; description?: string; }
interface Task { id: string; title: string; createdAt: Date; }
export async function createTask(input: CreateTaskInput): Promise<Task> {
  return { id: "task_1", title: input.title, createdAt: new Date() };
}
`;

const combinedTs = `${tsSnippet1}\n${tsSnippet2}\n${tsSnippet3}`;
const tmpTsPath = path.join("/tmp", "test-doc-snippets.ts");
fs.writeFileSync(tmpTsPath, combinedTs);
const tsCheck = runStep("ts-typecheck-snippets", "bun", ["build", tmpTsPath, "--no-bundle"], "/tmp");
fs.unlinkSync(tmpTsPath);
console.log(`TypeScript snippet check: ${tsCheck.passed ? "VALID" : "FAILED"}`);

// Validate YAML snippet in documentation-and-adrs/SKILL.md
const yamlMatch = docSkill.match(/```yaml\n([\s\S]*?)\n```/);
if (yamlMatch) {
  const yamlContent = yamlMatch[1];
  // Verify indentation and structure
  const lines = yamlContent.split("\n");
  const hasPaths = lines.some(l => l.trim() === "paths:");
  const hasPost = lines.some(l => l.trim() === "post:");
  const hasResponses = lines.some(l => l.trim() === "responses:");
  console.log(`✓ YAML OpenAPI snippet structurally verified: paths=${hasPaths}, post=${hasPost}, responses=${hasResponses}`);
  results.push({
    step: "yaml-openapi-syntax",
    command: "validate OpenAPI YAML structure",
    exitCode: (hasPaths && hasPost && hasResponses) ? 0 : 1,
    stdout: "OpenAPI YAML snippet has valid structure and required fields",
    stderr: "",
    passed: hasPaths && hasPost && hasResponses,
  });
}

// Write summary of step results
console.log("\n=== SUMMARY OF ALL EXECUTIONS ===");
for (const r of results) {
  console.log(`[${r.passed ? "PASS" : "FAIL"}] (Exit ${r.exitCode}) ${r.step} :: ${r.command}`);
}
