// drive-ui.ts — the terminal display for drive.ts (METHOD §8.5): one spinner for the conversation in progress with a concise
// live line, one finished line per conversation (green = clean, yellow = finished with something to look at, red = the driver
// stopped), and one line per milestone inside a conversation (dispatched, run complete, verified, committed).
// Built on @clack/prompts (spinner, log, intro, outro). When stdout is not a terminal (a log file, CI) it prints plain lines.
// Everything shown here is also written verbatim to .teamwork/drive/drive.log by drive.ts; the display is a view, not the record.
import * as p from "@clack/prompts";

const tty = process.stdout.isTTY === true;
const plain = (s: string) => console.log(s);

export type Verdict = "green" | "yellow" | "red";

export function intro(title: string) { tty ? p.intro(title) : plain(`== ${title}`); }
export function outro(msg: string) { tty ? p.outro(msg) : plain(`== ${msg}`); }
export function note(msg: string, title?: string) { tty ? p.log.message(`${title ? title + ": " : ""}${msg}`) : plain(`${title ? title + ": " : ""}${msg}`); }
export function step(msg: string) { tty ? p.log.step(msg) : plain(`  ◇ ${msg}`); }
export function info(msg: string) { tty ? p.log.info(msg) : plain(`  · ${msg}`); }
export function warn(msg: string) { tty ? p.log.warn(msg) : plain(`  ▲ ${msg}`); }
export function error(msg: string) { tty ? p.log.error(msg) : plain(`  ■ ${msg}`); }

/** The live line for one conversation. `update` is throttled to one redraw per second. */
export function conversation(label: string) {
  const s = tty ? p.spinner() : null;
  let last = 0, pending = "";
  if (s) s.start(label); else plain(`◆ ${label}`);
  const flush = () => { if (s && pending) { s.message(pending); pending = ""; } };
  const timer = setInterval(flush, 1000);
  return {
    update(msg: string) { pending = msg; const now = Date.now(); if (now - last >= 1000) { last = now; flush(); } },
    finish(msg: string, verdict: Verdict) {
      clearInterval(timer);
      if (s) { if (verdict === "green") s.stop(msg); else if (verdict === "red") s.cancel(msg); else s.error(msg); }   // clack 1.7: stop → green ◇, cancel → red ■, error → red ▲
      else plain(`${verdict === "green" ? "◇" : verdict === "yellow" ? "▲" : "■"} ${msg}`);
      if (verdict === "yellow" && tty) p.log.warn("finished with something to look at — see the lines above and .teamwork/drive/drive.log");
    },
  };
}

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
