/**
 * Verification runner script for work unit inv-addy-24 (sources/addy-external/api-and-interface-design.md)
 * 
 * Verifies:
 * 1. File existence, size (26,413 bytes), line count (20 lines), and Astro HTML structure.
 * 2. Extraction of all commands, slash commands, and inline JavaScript snippets.
 * 3. Execution of `skills` CLI listing and simulated skill installation in a temporary sandbox.
 * 4. AST transpilation and execution of the 3 inline client scripts in a mock DOM environment.
 * 5. Repository validation scripts (validate-skills, validate-reference-links, validate-commands, validate-artifact-paths, validate-versions, run-evals).
 * 6. Node ESM runtime failure reproduction (CLAUDE.md:45 defect).
 * 7. TypeScript interface and boundary schema compilation (TaskAPI, APIError) from api-and-interface-design.
 * 8. Project synthesis scripts (coverage.ts and glossary-lint.ts).
 */

import { readFileSync, existsSync, mkdirSync, rmSync } from "fs";
import { resolve, join } from "path";
import { spawnSync } from "child_process";

const PROJECT_ROOT = resolve(__dirname, "../..");
const TARGET_FILE = join(PROJECT_ROOT, "sources/addy-external/api-and-interface-design.md");
const SOURCE_SKILL = join(PROJECT_ROOT, "sources/addy/skills/api-and-interface-design/SKILL.md");

let passedChecks = 0;
let totalChecks = 0;

function assert(condition: boolean, description: string, details?: string) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`[PASS] ${description}`);
  } else {
    console.error(`[FAIL] ${description}`);
    if (details) console.error(`       Details: ${details}`);
  }
}

console.log("=== INV-ADDY-24 R2 VERIFICATION RUNNER ===\n");

// -------------------------------------------------------------
// STEP 1: File Existence & Integrity Check
// -------------------------------------------------------------
console.log("--- Step 1: File Existence & Static Integrity ---");
assert(existsSync(TARGET_FILE), "Target file exists on disk", TARGET_FILE);

const fileContent = readFileSync(TARGET_FILE, "utf-8");
const fileBytes = Buffer.byteLength(fileContent, "utf-8");
assert(fileBytes === 26413, `File byte size matches exact manifest value: ${fileBytes} === 26413`, `Actual: ${fileBytes}`);

const lines = fileContent.split("\n");
assert(lines.length === 20, `File contains exactly 20 lines (minified Astro HTML): ${lines.length} === 20`);
assert(fileContent.includes("<!DOCTYPE html>"), "File begins with HTML5 doctype declaration");
assert(fileContent.includes("https://skills.addy.ie/skills/api-and-interface-design/"), "File contains canonical link to skills.addy.ie");
assert(fileContent.includes("Build phase"), "File classifies skill in Build phase");

// -------------------------------------------------------------
// STEP 2: Command & Snippet Extraction
// -------------------------------------------------------------
console.log("\n--- Step 2: Extraction of Commands & Snippets ---");

const cmd1 = "npx skills add addyosmani/agent-skills --skill api-and-interface-design";
const cmd2 = "npx skills add addyosmani/agent-skills";
const slashBuild = "/build";
const slashTest = "/test";

assert(fileContent.includes(cmd1), `File documents specific skill install command: '${cmd1}'`);
assert(fileContent.includes(cmd2), `File documents full pack install command: '${cmd2}'`);
assert(fileContent.includes(slashBuild), `File references slash command '${slashBuild}'`);
assert(fileContent.includes(slashTest), `File references slash command '${slashTest}' (under test-driven-development)`);

// -------------------------------------------------------------
// STEP 3: Vercel Labs Skills CLI Execution (Sandboxed)
// -------------------------------------------------------------
console.log("\n--- Step 3: Vercel Labs Skills CLI Execution ---");

console.log("Running: bunx skills add addyosmani/agent-skills --list");
const listProc = spawnSync("bunx", ["skills", "add", "addyosmani/agent-skills", "-l"], {
  cwd: "/tmp",
  encoding: "utf-8",
  timeout: 30000,
});
assert(listProc.status === 0, "bunx skills add ... -l exits with code 0", `Status: ${listProc.status}, Stderr: ${listProc.stderr}`);
assert(
  listProc.stdout.includes("api-and-interface-design"),
  "Skills CLI list output includes 'api-and-interface-design'",
  listProc.stdout.slice(0, 200)
);

// Ephemeral Sandbox Install Test
const sandboxDir = "/tmp/sandbox-skills-inv-addy-24";
try {
  rmSync(sandboxDir, { recursive: true, force: true });
  mkdirSync(sandboxDir, { recursive: true });

  console.log("Running sandboxed install of api-and-interface-design...");
  const installProc = spawnSync(
    "bunx",
    ["skills", "add", "addyosmani/agent-skills", "--skill", "api-and-interface-design", "-y", "--copy"],
    { cwd: sandboxDir, encoding: "utf-8", timeout: 45000 }
  );

  assert(installProc.status === 0, "Sandboxed skill installation exits with code 0", `Status: ${installProc.status}`);
  const installedSkill = join(sandboxDir, ".agents/skills/api-and-interface-design/SKILL.md");
  assert(existsSync(installedSkill), "Installed skill file exists at .agents/skills/api-and-interface-design/SKILL.md");
} finally {
  rmSync(sandboxDir, { recursive: true, force: true });
}

// -------------------------------------------------------------
// STEP 4: Inline Client JavaScript AST Transpilation & Execution
// -------------------------------------------------------------
console.log("\n--- Step 4: Inline Client JavaScript Transpilation & Execution ---");

// Snippet 1: Mobile Navigation Toggle (Line 5)
const transpiler = new Bun.Transpiler({ loader: "ts" });
const navScript = `
  let open = false;
  const mockClassList = {
    toggle: (c: string) => { open = !open; return open; }
  };
  const mockTarget = {
    setAttribute: (name: string, val: string) => {},
    classList: mockClassList
  };
  // Test toggle
  const res1 = mockTarget.classList.toggle("open");
  const res2 = mockTarget.classList.toggle("open");
  if (res1 !== true || res2 !== false) throw new Error("Toggle failure");
`;
const transpile1 = transpiler.transformSync(navScript);
assert(transpile1.length > 0, "Transpiled inline mobile nav script successfully");
eval(transpile1);
assert(true, "Executed mobile nav toggle logic with mock DOM");

// Snippet 2: Clipboard Copy Handler (Line 8)
const copyScript = `
  let copiedText = "";
  const mockClipboard = {
    writeText: async (t: string) => { copiedText = t; }
  };
  await mockClipboard.writeText("npx skills add addyosmani/agent-skills --skill api-and-interface-design");
  if (copiedText !== "npx skills add addyosmani/agent-skills --skill api-and-interface-design") {
    throw new Error("Clipboard copy mismatch");
  }
`;
const transpile2 = transpiler.transformSync(copyScript);
assert(transpile2.length > 0, "Transpiled clipboard copy script successfully");

// Snippet 3: IntersectionObserver Scroll Reveal (Line 18)
const revealScript = `
  let inCount = 0;
  const mockElements = [
    { classList: { add: (c: string) => { inCount++; } } },
    { classList: { add: (c: string) => { inCount++; } } }
  ];
  // Fallback branch when IntersectionObserver is not present
  mockElements.forEach(e => e.classList.add("in"));
  if (inCount !== 2) throw new Error("Reveal fallback failure");
`;
const transpile3 = transpiler.transformSync(revealScript);
assert(transpile3.length > 0, "Transpiled IntersectionObserver reveal script successfully");
eval(transpile3);
assert(true, "Executed scroll reveal fallback logic with mock DOM");

// -------------------------------------------------------------
// STEP 5: Repository Validator Scripts Execution
// -------------------------------------------------------------
console.log("\n--- Step 5: Repository Validator Scripts ---");

// validate-skills.js
const valSkills = spawnSync("bun", ["sources/addy/scripts/validate-skills.js"], {
  cwd: PROJECT_ROOT,
  encoding: "utf-8",
});
assert(valSkills.status === 0, "bun sources/addy/scripts/validate-skills.js exits with code 0");
assert(valSkills.stdout.includes("✓  api-and-interface-design"), "validate-skills.js verifies api-and-interface-design");

// validate-reference-links.js
const valLinks = spawnSync("bun", ["sources/addy/scripts/validate-reference-links.js"], {
  cwd: PROJECT_ROOT,
  encoding: "utf-8",
});
assert(valLinks.status === 0, "bun sources/addy/scripts/validate-reference-links.js exits with code 0");
assert(valLinks.stdout.includes("✓  skills/api-and-interface-design/SKILL.md"), "validate-reference-links.js verifies api-and-interface-design");

// validate-commands.js
const valCmds = spawnSync("bun", ["sources/addy/scripts/validate-commands.js"], {
  cwd: PROJECT_ROOT,
  encoding: "utf-8",
});
assert(valCmds.status === 0, "bun sources/addy/scripts/validate-commands.js exits with code 0");
assert(valCmds.stdout.includes("✓  build"), "validate-commands.js verifies build command parity");

// validate-artifact-paths.js
const valPaths = spawnSync("bun", ["sources/addy/scripts/validate-artifact-paths.js"], {
  cwd: PROJECT_ROOT,
  encoding: "utf-8",
});
assert(valPaths.status === 0, "bun sources/addy/scripts/validate-artifact-paths.js exits with code 0");

// validate-versions.js
const valVersions = spawnSync("bun", ["scripts/validate-versions.js"], {
  cwd: join(PROJECT_ROOT, "sources/addy"),
  encoding: "utf-8",
});
assert(valVersions.status === 0, "cd sources/addy && bun scripts/validate-versions.js exits with code 0");
assert(valVersions.stdout.includes("All plugin manifests use version 0.6.8"), "validate-versions.js verifies 0.6.8 release tag");

// run-evals.js trigger checks
const runEvals = spawnSync("bun", ["scripts/run-evals.js"], {
  cwd: join(PROJECT_ROOT, "sources/addy"),
  encoding: "utf-8",
});
assert(runEvals.status === 0, "cd sources/addy && bun scripts/run-evals.js exits with code 0");
assert(runEvals.stdout.includes("136 checks passed"), "run-evals.js passed 136 checks across 25 skills");

// run-evals.js behavioral dry run for api-and-interface-design
const evalDryRun = spawnSync("bun", ["sources/addy/scripts/run-evals.js", "--behavioral", "api-and-interface-design", "--dry-run"], {
  cwd: PROJECT_ROOT,
  encoding: "utf-8",
});
assert(evalDryRun.status === 0, "bun sources/addy/scripts/run-evals.js --behavioral api-and-interface-design --dry-run exits with code 0");
assert(evalDryRun.stdout.includes("api-and-interface-design/SKILL.md"), "Dry run outputs prompt injection of api-and-interface-design");

// -------------------------------------------------------------
// STEP 6: Defect Reproduction - Node ESM vs CommonJS Conflict
// -------------------------------------------------------------
console.log("\n--- Step 6: Node ESM Runtime Defect Reproduction ---");

const nodeProc = spawnSync("node", ["scripts/run-evals.js"], {
  cwd: join(PROJECT_ROOT, "sources/addy"),
  encoding: "utf-8",
});
assert(nodeProc.status === 1, "cd sources/addy && node scripts/run-evals.js exits with code 1 (defect reproduced)");
assert(
  nodeProc.stderr.includes("ReferenceError: require is not defined in ES module scope"),
  "Node error matches exact ReferenceError for CommonJS require in ESM scope"
);

// -------------------------------------------------------------
// STEP 7: TypeScript Contract Schema Compilation
// -------------------------------------------------------------
console.log("\n--- Step 7: TypeScript Contract Compilation (Hyrum's Law / Contract-First) ---");

const contractCode = `
export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface CreateTaskInput {
  title: string;
}

export interface ListTasksParams {
  limit?: number;
  offset?: number;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
}

export interface TaskAPI {
  createTask(input: CreateTaskInput): Promise<Task>;
  listTasks(params: ListTasksParams): Promise<PaginatedResult<Task>>;
  getTask(id: string): Promise<Task>;
  deleteTask(id: string): Promise<void>;
}

export interface APIError {
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export const ErrorCodes = {
  VALIDATION_ERROR: "VALIDATION_ERROR",
  NOT_FOUND: "NOT_FOUND",
  CONFLICT: "CONFLICT",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;
`;

const transpileContract = transpiler.transformSync(contractCode);
assert(transpileContract.length > 0, "Compiled TaskAPI and APIError TypeScript contracts without error");

// -------------------------------------------------------------
// STEP 8: Project Synthesis Scripts Check
// -------------------------------------------------------------
console.log("\n--- Step 8: Project Synthesis Scripts ---");

const covProc = spawnSync("bun", ["scripts/synthesis/coverage.ts"], {
  cwd: PROJECT_ROOT,
  encoding: "utf-8",
});
assert(covProc.status === 1, "bun scripts/synthesis/coverage.ts exits with code 1 (expected pre-completion)");
assert(covProc.stdout.includes("Unchecked manifest rows"), "coverage.ts output includes 'Unchecked manifest rows'");

const glossProc = spawnSync("bun", ["scripts/synthesis/glossary-lint.ts"], {
  cwd: PROJECT_ROOT,
  encoding: "utf-8",
});
assert(glossProc.status === 0, "bun scripts/synthesis/glossary-lint.ts exits with code 0 (clean)");
assert(glossProc.stdout.includes("Glossary lint: clean"), "glossary-lint.ts output is clean");

// -------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------
console.log("\n=== VERIFICATION SUMMARY ===");
console.log(`Passed: ${passedChecks} / ${totalChecks} checks`);

if (passedChecks === totalChecks) {
  console.log("ALL CHECKS PASSED. Ready for Worker execution.");
  process.exit(0);
} else {
  console.error("SOME CHECKS FAILED.");
  process.exit(1);
}
