/**
 * brain: the CLI that skills, the protocol and briefs call `brain <command>`.
 *
 *   bun scripts/brain.ts <command> [args]
 *
 * It runs in the repo it works on (the current directory). Each command is one entry in
 * `commands`; the usage text names every command, built or planned.
 * Exit codes: 0 clean, 1 a finding or a failed action, 2 bad usage.
 */

import { check } from "./workspace/check";
import { newDoc } from "./workspace/new-doc";
import { plan } from "./workspace/plan";
import { status } from "./workspace/status";

type Command = (args: string[]) => Promise<number>;

const usage = `usage: brain <command> [args]

commands:
  new-doc <TYPE> <slug>   create the next numbered file: IDEA, DEC, RES or SPEC
  check                   check the workspace against its rules
  plan [<spec>] [--json]  print what can run at once in a spec's plan: waves, critical path
  status [--json]         report the active work: phase, last step, next step`;

/**
 * Each command takes the arguments after its name and returns the exit code. A new
 * command is one entry here, such as `["new-doc", newDoc]`.
 */
const commands = new Map<string, Command>([
  ["new-doc", newDoc],
  ["check", check],
  ["plan", plan],
  ["status", status],
]);

async function main(argv: string[]): Promise<number> {
  const [name, ...args] = argv;
  const run = name === undefined ? undefined : commands.get(name);
  if (run === undefined) {
    if (name !== undefined) {
      console.error(`unknown command: ${name}`);
    }
    console.error(usage);
    return 2;
  }
  return await run(args);
}

if (import.meta.main) {
  process.exit(await main(process.argv.slice(2)));
}
