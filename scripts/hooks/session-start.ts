/**
 * The Claude Code `SessionStart` hook: it gives a session the brain protocol, the path of the
 * `brain` CLI, and the state of the repo before the user's first word. The entry in
 * `claude-code.json` has no matcher, so Claude Code runs it on every `SessionStart` source
 * (https://code.claude.com/docs/en/hooks#matcher-patterns), and this script decides what to
 * print. On resume and fork it leaves the protocol out: Claude Code keeps the text a hook
 * injected in the session transcript, so a session that carries the old transcript already
 * holds it, and only the status is new
 * (https://code.claude.com/docs/en/hooks#add-context-for-claude).
 *
 *   echo '{"source":"resume"}' | bun scripts/hooks/session-start.ts
 *
 * It prints one JSON envelope, `hookSpecificOutput.hookEventName` and `additionalContext`, as
 * https://code.claude.com/docs/en/hooks#sessionstart-decision-control describes. Claude Code
 * caps that string at 10,000 characters and puts a longer one in a file the model is not told
 * to read, so the text stays under the cap: the status text is cut, never the protocol.
 * Claude Code exports `CLAUDE_PLUGIN_ROOT` and `CLAUDE_PROJECT_DIR` to a hook process; Bash
 * commands do not get them, so this text names the resolved `brain` path.
 */
import path from "node:path";
import { isatty } from "node:tty";

/** Claude Code's cap on `additionalContext`; the text stays under it. */
const cap = 10_000;

/** How long `brain status` may run before the hook gives up on it. */
const statusTimeoutMs = 10_000;

const intro =
  "The brain plugin adds this text at session start: the brain protocol, the path of the `brain` CLI on this machine, and the state of this repo from `brain status`.";

const statusOnlyIntro =
  "The brain plugin adds this text when a session resumes or forks: the path of the `brain` CLI on this machine and the current `brain status` of this repo. The protocol is not repeated; the session's transcript already holds it. This status replaces any earlier one in the session.";

/**
 * The sources whose session carries the old transcript, and with it the protocol: `--resume`,
 * `--continue` and `/resume` start `resume`; `--fork-session`, `/fork` and `/branch` start
 * `fork` (https://code.claude.com/docs/en/hooks#sessionstart). Every other value, a missing one,
 * and any value Claude Code adds later get the full text.
 */
const statusOnlySources = new Set(["resume", "fork"]);

const cutLine =
  "The status text is cut here to keep this text under 10,000 characters. Run `brain status` and read docs/STATUS.md for the rest.";

/** The fields of `brain status --json` the hook uses. */
type Status = { report: string[]; note: { text: string } | null };

/**
 * The fields the hook uses from `brain status --json` output, or why the output does not hold
 * them. Output of another shape with exit 0 is a fault in `brain status`; the hook then says so
 * in one line, as it does when `brain status` fails, and keeps the rest of its text.
 */
function readStatus(stdout: string): Status | { problem: string } {
  let value: unknown;
  try {
    value = JSON.parse(stdout);
  } catch {
    return { problem: "it is not JSON" };
  }
  const { report, note } = (value ?? {}) as { report?: unknown; note?: unknown };
  if (!Array.isArray(report) || !report.every((line) => typeof line === "string")) {
    return { problem: "it has no `report` list of strings" };
  }
  if (note !== null && typeof (note as { text?: unknown } | undefined)?.text !== "string") {
    return { problem: "its `note` is not null or an object with a `text` string" };
  }
  return { report, note: note as Status["note"] };
}

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
  const status = readStatus(run.stdout);
  if ("problem" in status) {
    return `# brain status\n\n\`brain status --json\` gave output that the hook cannot read: ${status.problem}`;
  }
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

/**
 * How the session started: the `source` field of the hook's stdin input, which Claude Code
 * sets to `startup`, `resume`, `clear`, `compact` or `fork`
 * (https://code.claude.com/docs/en/hooks#sessionstart-input). `null` when the input is not
 * JSON or has no `source` string; the hook then gives the full text, the safe default.
 */
function sessionSource(input: string): string | null {
  try {
    const { source } = JSON.parse(input) as { source?: unknown };
    return typeof source === "string" ? source : null;
  } catch {
    return null;
  }
}

/**
 * The text the hook adds to the session for the repo at `project`: on resume and fork the
 * `brain` path and the status; for every other `source`, the protocol before them.
 */
async function sessionText(
  pluginRoot: string,
  project: string,
  source: string | null,
): Promise<string> {
  const brain = path.join(pluginRoot, "scripts/brain.ts");
  const cli = [
    "# The brain CLI",
    "",
    "`brain <cmd>` on this machine:",
    "",
    "```",
    `bun "${brain}" <cmd>`,
    "```",
  ].join("\n");
  let head: string;
  if (source !== null && statusOnlySources.has(source)) {
    head = ["# brain on resume or fork", "", statusOnlyIntro, "", cli].join("\n");
  } else {
    const protocol = await Bun.file(path.join(pluginRoot, "protocol/PROTOCOL.md")).text();
    head = ["# brain protocol", "", intro, "", protocol.trim(), "", cli].join("\n");
  }
  return fit(head, await statusText(brain, project));
}

if (import.meta.main) {
  const pluginRoot = process.env.CLAUDE_PLUGIN_ROOT || path.resolve(import.meta.dir, "../..");
  const project = process.env.CLAUDE_PROJECT_DIR || process.cwd();
  // Claude Code writes the hook's input to stdin. A run by hand in a terminal has none, and
  // reading a terminal would wait for an end of input that never comes.
  const input = isatty(0) ? "" : await Bun.stdin.text();
  const additionalContext = await sessionText(pluginRoot, project, sessionSource(input));
  console.log(
    JSON.stringify({ hookSpecificOutput: { hookEventName: "SessionStart", additionalContext } }),
  );
}
