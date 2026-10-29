/**
 * The Claude Code `SessionStart` hook: it gives a session the brain protocol, the path of the
 * `brain` CLI, and the state of the repo before the user's first word. `claude-code.json` runs
 * it on startup, clear and compact.
 *
 *   bun scripts/hooks/session-start.ts
 *
 * It prints one JSON envelope, `hookSpecificOutput.hookEventName` and `additionalContext`, as
 * https://code.claude.com/docs/en/hooks#sessionstart-decision-control describes. Claude Code
 * caps that string at 10,000 characters and puts a longer one in a file the model is not told
 * to read, so the text stays under the cap: the status text is cut, never the protocol.
 * Claude Code exports `CLAUDE_PLUGIN_ROOT` and `CLAUDE_PROJECT_DIR` to a hook process; Bash
 * commands do not get them, so this text names the resolved `brain` path.
 */
import path from "node:path";

/** Claude Code's cap on `additionalContext`; the text stays under it. */
const cap = 10_000;

/** How long `brain status` may run before the hook gives up on it. */
const statusTimeoutMs = 10_000;

const intro =
  "The brain plugin adds this text at session start: the brain protocol, the path of the `brain` CLI on this machine, and the state of this repo from `brain status`.";

const cutLine =
  "The status text is cut here to keep this text under 10,000 characters. Run `brain status` and read docs/STATUS.md for the rest.";

/** The fields of `brain status --json` the hook uses. */
type Status = { report: string[]; note: { text: string } | null };

/** The status section: the five lines and the handoff note, or why `brain status` failed. */
async function statusText(brain: string, project: string): Promise<string> {
  let run: { code: number | null; signal: string | null; stdout: string; stderr: string };
  try {
    const proc = Bun.spawn([process.execPath, brain, "status", "--json"], {
      cwd: project,
      stdout: "pipe",
      stderr: "pipe",
      timeout: statusTimeoutMs,
    });
    const [stdout, stderr] = await Promise.all([
      new Response(proc.stdout).text(),
      new Response(proc.stderr).text(),
    ]);
    await proc.exited;
    run = { code: proc.exitCode, signal: proc.signalCode, stdout, stderr };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    return `# brain status\n\n\`brain status\` failed to start: ${reason}`;
  }
  if (run.code !== 0) {
    const limit = `the hook allows it ${statusTimeoutMs / 1000} s`;
    const how = run.signal === null ? `exit ${run.code}` : `${run.signal} (${limit})`;
    const first = run.stderr.split("\n").find((line) => line.trim() !== "");
    return `# brain status\n\n\`brain status\` failed with ${how}${first === undefined ? "" : `: ${first.trim()}`}`;
  }
  const status = JSON.parse(run.stdout) as Status;
  const note = status.note === null ? "This repo has no docs/STATUS.md." : status.note.text.trim();
  return `# brain status\n\n${status.report.join("\n")}\n\n# docs/STATUS.md\n\n${note}`;
}

/** `head`, then as much of `status` as fits under the cap, cut at a line end with a line that says so. */
function fit(head: string, status: string): string {
  const whole = `${head}\n\n${status}`;
  if (whole.length < cap) {
    return whole;
  }
  const room = cap - 1 - `${head}\n\n\n${cutLine}`.length;
  const kept = status.slice(0, Math.max(room, 0));
  const lineEnd = kept.lastIndexOf("\n");
  return `${head}\n\n${lineEnd > 0 ? kept.slice(0, lineEnd) : kept}\n${cutLine}`;
}

/** The text the hook adds to the session for the repo at `project`. */
async function sessionText(pluginRoot: string, project: string): Promise<string> {
  const source = await Bun.file(path.join(pluginRoot, "protocol/PROTOCOL.md")).text();
  const protocol = source.trim();
  const brain = path.join(pluginRoot, "scripts/brain.ts");
  const head = [
    "# brain protocol",
    "",
    intro,
    "",
    protocol,
    "",
    "# The brain CLI",
    "",
    "`brain <cmd>` on this machine:",
    "",
    "```",
    `bun "${brain}" <cmd>`,
    "```",
  ].join("\n");
  return fit(head, await statusText(brain, project));
}

if (import.meta.main) {
  const pluginRoot = process.env.CLAUDE_PLUGIN_ROOT || path.resolve(import.meta.dir, "../..");
  const project = process.env.CLAUDE_PROJECT_DIR || process.cwd();
  const additionalContext = await sessionText(pluginRoot, project);
  console.log(
    JSON.stringify({ hookSpecificOutput: { hookEventName: "SessionStart", additionalContext } }),
  );
}
