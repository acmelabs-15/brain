/**
 * Run every host validator that is installed.
 *
 *   bun run validate
 *
 * claude plugin validate --strict always runs. agy plugin validate runs when agy is on PATH,
 * else one line says it was skipped. The exit code is the first failure.
 */

type Step = { name: string; command: string[]; required: boolean };

export const steps: readonly Step[] = [
  { name: "claude", command: ["claude", "plugin", "validate", ".", "--strict"], required: true },
  {
    name: "claude manifest",
    command: ["claude", "plugin", "validate", ".claude-plugin/plugin.json", "--strict"],
    required: true,
  },
  { name: "agy", command: ["agy", "plugin", "validate", "."], required: false },
];

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
  const proc = Bun.spawn(step.command, { stdout: "inherit", stderr: "inherit" });
  const code = await proc.exited;
  console.log(`${step.name}: ${code === 0 ? "ok" : `exit ${code}`}`);
  return code;
}

let first = 0;
for (const step of steps) {
  const code = await run(step);
  if (code !== 0 && first === 0) {
    first = code;
  }
}
process.exit(first);
