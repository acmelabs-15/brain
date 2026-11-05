/**
 * Run every host validator that is installed.
 *
 *   bun run validate
 *
 * Claude's strict reports remain visible. Only its exact root CLAUDE.md warning is
 * accepted by Brain's policy; this is reported separately from a strict pass.
 * agy runs when available. The exit code is the first failure.
 */
import path from "node:path";

type Step = { name: string; command: string[]; required: boolean };

export const steps: readonly Step[] = [
  {
    name: "claude",
    command: ["claude", "plugin", "validate", ".", "--strict", "--json"],
    required: true,
  },
  {
    name: "claude manifest",
    command: ["claude", "plugin", "validate", ".claude-plugin/plugin.json", "--strict", "--json"],
    required: true,
  },
  { name: "agy", command: ["agy", "plugin", "validate", "."], required: false },
];

const rootWarning =
  "CLAUDE.md at the plugin root is not loaded as project context. To ship context with your plugin, use a skill (skills/<name>/SKILL.md) instead.";

type Verdict = "strict validation passed" | "accepted with one approved warning" | "rejected";
type RecordValue = Record<string, unknown>;

function isRecord(value: unknown): value is RecordValue {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isResult(value: unknown): value is RecordValue & { warnings: unknown[] } {
  return (
    isRecord(value) &&
    typeof value.file === "string" &&
    Array.isArray(value.errors) &&
    value.errors.length === 0 &&
    Array.isArray(value.warnings) &&
    Array.isArray(value.notes)
  );
}

/** Directory-catalog advice is outside --strict; a failed or partial check is not. */
function completeReport(report: RecordValue, root: string): boolean {
  const targets = ["plugin.json", "marketplace.json"].map((name) =>
    path.join(root, ".claude-plugin", name),
  );
  const { directory } = report;
  return (
    typeof report.target === "string" &&
    targets.includes(report.target) &&
    isRecord(report.manifest) &&
    report.manifest.file === report.target &&
    isRecord(directory) &&
    directory.profile === null &&
    directory.failure === null &&
    directory.incomplete === false &&
    Array.isArray(directory.findings) &&
    directory.findings.every(
      (finding) => isRecord(finding) && finding.blocking === false && finding.hold === false,
    ) &&
    Array.isArray(directory.undecided) &&
    directory.undecided.length === 0
  );
}

/** Assess the strict report, never a filtered copy of the delivered plugin. */
export function claudeVerdict(stdout: string, code: number | null, root: string): Verdict {
  let report: unknown;
  try {
    report = JSON.parse(stdout);
  } catch {
    return "rejected";
  }
  if (
    !isRecord(report) ||
    report.strict !== true ||
    !Array.isArray(report.contents) ||
    !completeReport(report, root)
  ) {
    return "rejected";
  }
  const results = [report.manifest, ...report.contents];
  if (!results.every(isResult)) {
    return "rejected";
  }
  const warnings = results.flatMap((result) =>
    result.warnings.map((warning) => ({ file: result.file, warning })),
  );
  if (code === 0 && report.success === true && warnings.length === 0) {
    return "strict validation passed";
  }
  if (code !== 1 || report.success !== false || warnings.length !== 1) {
    return "rejected";
  }
  const [only] = warnings;
  if (
    only?.file === path.join(root, "CLAUDE.md") &&
    isRecord(only.warning) &&
    only.warning.path === "root" &&
    only.warning.code === null &&
    only.warning.message === rootWarning
  ) {
    return "accepted with one approved warning";
  }
  return "rejected";
}

async function run(step: Step): Promise<number> {
  const binary = step.command[0] as string;
  if (Bun.which(binary) === null) {
    if (step.required) {
      console.error(`${step.name}: ${binary} is not on PATH`);
      return 1;
    }
    console.log(`${step.name}: skipped, ${binary} is not on PATH`);
    return 0;
  }
  if (binary === "claude") {
    const proc = Bun.spawn(step.command, { stdout: "pipe", stderr: "pipe" });
    const [stdout, stderr, code] = await Promise.all([
      new Response(proc.stdout).text(),
      new Response(proc.stderr).text(),
      proc.exited,
    ]);
    process.stdout.write(stdout);
    process.stderr.write(stderr);
    const verdict = stderr.trim() === "" ? claudeVerdict(stdout, code, process.cwd()) : "rejected";
    console.log(`${step.name}: ${verdict}`);
    return verdict === "rejected" ? code || 1 : 0;
  }
  const proc = Bun.spawn(step.command, { stdout: "inherit", stderr: "inherit" });
  const code = await proc.exited;
  console.log(`${step.name}: ${code === 0 ? "ok" : `exit ${code}`}`);
  return code;
}

if (import.meta.main) {
  let first = 0;
  for (const step of steps) {
    const code = await run(step);
    if (code !== 0 && first === 0) {
      first = code;
    }
  }
  process.exit(first);
}
