// drive-ui.ts — the terminal display for drive.ts (METHOD §8.5): one task block per conversation — a spinning title
// ("Conversation N · Session NNN · done/total units"), a scrolling log beneath it of what is happening (milestones and,
// every few seconds, the live status: minutes, step, context %, each run's progress, the current command), and a coloured
// completion line: green ✔ clean, yellow ▲ finished with something to look at, red ✖ the driver stopped (reason printed after).
// The block is drawn here (clack's taskLog has a static title symbol); intro, outro and free-standing log lines use
// @clack/prompts. When stdout is not a terminal (a log file, CI) plain lines are printed.
// Everything shown here is also written verbatim to .teamwork/drive/drive.log by drive.ts; the display is a view, not the record.
import * as p from "@clack/prompts";

const tty = process.stdout.isTTY === true;
const plain = (s: string) => console.log(s);

export type Verdict = "green" | "yellow" | "red";

const columns = () => Math.max(60, process.stdout.columns || 100);
const fit = (msg: string, reserve = 6) => { const w = columns() - reserve; return msg.length > w ? msg.slice(0, w - 1) + "…" : msg; };


export function intro(title: string) { tty ? p.intro(fit(title, 4)) : plain(`== ${title}`); }
export function outro(msg: string) { tty ? p.outro(fit(msg, 4)) : plain(`== ${msg}`); }
export function note(msg: string, title?: string) { tty ? p.log.message(`${title ? title + ": " : ""}${msg}`) : plain(`${title ? title + ": " : ""}${msg}`); }
export function step(msg: string) { tty ? p.log.step(fit(msg)) : plain(`  ◇ ${msg}`); }
export function info(msg: string) { tty ? p.log.info(fit(msg)) : plain(`  · ${msg}`); }
export function warn(msg: string) { tty ? p.log.warn(fit(msg)) : plain(`  ▲ ${msg}`); }
export function error(msg: string) { tty ? p.log.error(fit(msg)) : plain(`  ■ ${msg}`); }

// ---- colours (ANSI; no dependency beyond what clack already pulls in)
const c = { pink: (t: string) => `\x1b[38;5;212m${t}\x1b[0m`, green: (t: string) => `\x1b[32m${t}\x1b[0m`, yellow: (t: string) => `\x1b[33m${t}\x1b[0m`, red: (t: string) => `\x1b[31m${t}\x1b[0m`, dim: (t: string) => `\x1b[2m${t}\x1b[0m`, bold: (t: string) => `\x1b[1m${t}\x1b[0m`, gray: (t: string) => `\x1b[90m${t}\x1b[0m` };
const FRAMES = ["◒", "◐", "◓", "◑"];

/** One conversation = one task block, drawn by this file so the title symbol can spin (clack's taskLog cannot):
 *
 *   ◐  Conversation 1 · Session 004 · 133/416 units        ← pink spinner + bold title, redrawn every 80 ms
 *   │  ◇ dispatched p1-run-02                               ← the last `limit` log lines (milestones and the live status)
 *   │  9 min · step 61 · ctx 12.4% · p1-run-02 5/11 · …
 *   └
 *
 * The nested lines are plain dimmed text with no icons; new lines push old ones out. On finish the block collapses to one
 * line — the spinner becomes the status icon: green ✔ (clean), yellow ▲ (finished, look at drive.log), red ✖ (the driver
 * stopped; the reason is printed as its own line after). Every line is cut to the terminal width first — a wrapped line breaks the redraw
 * (the one-frame-per-row flood of 2026-09-05). When stdout is not a terminal, plain lines are printed instead. */
export function conversation(title: string, limit = 8) {
  const out = process.stdout;
  let lines: string[] = [], frame = 0, height = 0, lastStatus = "", lastAt = 0, done = false;
  const draw = () => {
    if (!tty || done) return;
    const block = [`${c.pink(FRAMES[frame % FRAMES.length]!)}  ${c.bold(fit(title, 4))}`, ...lines.map(l => `${c.pink("│")}  ${c.dim(l)}`), c.pink("└")];
    out.write((height ? `\x1b[${height}A` : "") + "\x1b[J" + block.join("\n") + "\n");
    height = block.length; frame++;
  };
  const push = (l: string) => { lines.push(fit(l, 5)); if (lines.length > limit) lines = lines.slice(-limit); draw(); };
  if (tty) { out.write("\x1b[?25l"); draw(); } else plain(`◆ ${title}`);
  const timer = tty ? setInterval(draw, 80) : null;
  return {
    /** the live status — becomes a log line at most every 5 s and only when it changed */
    status(msg: string) {
      const now = Date.now(); const m = fit(msg, 5);
      if (m === lastStatus || now - lastAt < 5000) return;
      lastStatus = m; lastAt = now;
      tty ? push(m) : plain(`  … ${m}`);
    },
    /** a milestone — always a log line; same plain, dimmed style as the status lines (no leading icon) */
    line(msg: string, _kind: "step" | "info" | "warn" = "step") {
      tty ? push(msg) : plain(`  ${fit(msg, 5)}`);
    },
    finish(msg: string, verdict: Verdict) {
      if (timer) clearInterval(timer);
      done = true;
      const m = fit(msg, 4);
      if (!tty) { plain(`${verdict === "green" ? "✔" : verdict === "yellow" ? "▲" : "✖"} ${m}`); return; }
      const sym = verdict === "green" ? c.green("✔") : verdict === "yellow" ? c.yellow("▲") : c.red("✖");
      // the nested lines go away on completion, whatever the verdict; the spinner becomes the status icon. The full log is in drive.log.
      out.write((height ? `\x1b[${height}A` : "") + "\x1b[J" + `${sym}  ${c.bold(m)}\n${c.gray("│")}\n` + "\x1b[?25h");
      height = 0;
    },
  };
}
process.on("exit", () => { if (tty) process.stdout.write("\x1b[?25h"); });

/** Short human form of a tool call from the stream, for the live line. */
export function describeTool(name: string | undefined, params: any): string {
  if (!name) return "";
  const a = params || {};
  const short = (s: string, n = 70) => (s.length > n ? s.slice(0, n - 1) + "…" : s);
  const rel = (x: string) => String(x || "").replace(/^\/Users\/[^/]+\/Dev\/ACMElabs\/brain-v2\//, "");
  switch (name) {
    case "run_command": return short(String(a.CommandLine || ""));
    case "view_file": return `read ${rel(a.AbsolutePath)}${a.StartLine ? `:${a.StartLine}–${a.EndLine ?? ""}` : ""}`;
    case "write_to_file": return `write ${rel(a.TargetFile || a.AbsolutePath)}`;
    case "replace_file_content": case "multi_replace_file_content": return `edit ${rel(a.TargetFile || a.AbsolutePath)}`;
    case "invoke_subagent": return "invoke_subagent (Teamwork)";
    case "command_status": return "waiting on a command";
    case "grep_search": return `grep ${short(String(a.Query || ""), 40)}`;
    case "find_by_name": return `find ${short(String(a.Pattern || ""), 40)}`;
    case "list_dir": return `ls ${rel(a.DirectoryPath)}`;
    default: return name;
  }
}

/** Milestone detection from a tool call: returns a line to print, or null. */
export function milestone(name: string | undefined, params: any, lastPlannedRun = ""): { text: string; kind: "step" | "info" | "warn" } | null {
  if (!name) return null;
  const a = params || {};
  if (name === "invoke_subagent") { const m = JSON.stringify(a).match(/p\d+-run-\d+/); return { text: `dispatched ${m ? m[0] : lastPlannedRun || "a Teamwork run"} — Teamwork is working; the run's progress is on the line above`, kind: "step" }; }
  if (name !== "run_command") return null;
  const c = String(a.CommandLine || "");
  let m: RegExpMatchArray | null;
  if ((m = c.match(/budget\.ts --record "?run-start ([\w-]+) n=(\d+)/))) return { text: `run ${m[1]} planned: ${m[2]} units`, kind: "info" };
  if ((m = c.match(/units\.ts mark done --session (\d+) (.+)$/))) return { text: `verified and checked off: ${(m[2] ?? "").trim().split(/\s+/).length} unit(s)`, kind: "step" };
  if ((m = c.match(/units\.ts mark rolled-back/))) return { text: `units rolled back: ${c.replace(/.*rolled-back/, "").trim()}`, kind: "warn" };
  if ((m = c.match(/units\.ts mark blocked/))) return { text: `unit blocked: ${c.replace(/.*blocked/, "").trim()}`, kind: "warn" };
  if ((m = c.match(/git commit[^"']*["']([^"']+)["']/))) return { text: `committed: ${m[1] ?? ""}`, kind: "step" };
  if ((m = c.match(/budget\.ts --set (.+)$/))) return { text: `measured: ${(m[1] ?? "").trim()}`, kind: "info" };
  return null;
}

/** Summary of a completed run directory, for the live line: "p1-run-03 3/11" or "p1-run-03 done". */
export function runSummary(dir: string, readFile: (p: string) => string | null): string {
  const name = dir.split("/").pop() ?? dir;
  const report = readFile(`${dir}/success_auditor_report.md`), handoff = readFile(`${dir}/handoff.md`) ?? "";
  if (report && /complete/i.test(handoff)) return `${name} done`;
  const prog = readFile(`${dir}/progress.md`) ?? "";
  const done = (prog.match(/^- \[x\]/gm) || []).length, total = (prog.match(/^- \[[ x]\]/gm) || []).length;
  return total ? `${name} ${done}/${total}` : `${name} starting`;
}
