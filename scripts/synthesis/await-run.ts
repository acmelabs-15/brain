#!/usr/bin/env bun
// await-run.ts — wait for one or more Teamwork runs to finish, reading only the run directories (METHOD §6.3, §7 step 4).
//
//   bun scripts/synthesis/await-run.ts <run-id> [<run-id>…] [--wait 240] [--stall 15]
//
// Polls .teamwork/<run-id>/ every 10 s for up to --wait seconds (default 240) and prints one line per run:
//   run-id  state  elapsed  milestones done/total  newest-file age  path of the completion artifacts
// Exit codes: 0 every run complete · 3 wait elapsed, at least one run still working (run it again) ·
//             4 a run has been silent longer than --stall minutes (default 15) — the §6.3 quota rule applies ·
//             2 usage / directory missing.
//
// A run is COMPLETE when its directory holds both `success_auditor_report.md` and an orchestrator `handoff.md` whose
// text says the batch is complete. Sentinel messages may also arrive in the conversation; they are not needed —
// the files are the record, and this is what makes the primary agent behave the same in interactive and headless mode.
// Output is deliberately small: one line per run per call, never file contents.
import { existsSync, readdirSync, statSync, readFileSync } from "fs";
import { join } from "path";

const argv = process.argv.slice(2);
const opt = (k: string, d: number) => { const i = argv.indexOf(k); return i >= 0 ? Number(argv[i + 1]) : d; };
const WAIT = opt("--wait", 240), STALL = opt("--stall", 15);
const runs = argv.filter((a, i) => !a.startsWith("--") && argv[i - 1] !== "--wait" && argv[i - 1] !== "--stall");
if (!runs.length) { console.error("usage: await-run.ts <run-id> [<run-id>…] [--wait seconds] [--stall minutes]"); process.exit(2); }

function newest(dir: string): number { // epoch ms of the newest file under dir
  let t = 0;
  const walk = (d: string) => { for (const e of readdirSync(d, { withFileTypes: true })) { const p = join(d, e.name); if (e.isDirectory()) walk(p); else t = Math.max(t, statSync(p).mtimeMs); } };
  try { walk(dir); } catch { }
  return t;
}
function status(run: string) {
  const dir = join(".teamwork", run);
  if (!existsSync(dir)) return { run, state: "absent", line: `${run}  ABSENT — .teamwork/${run}/ does not exist yet (dispatch not started, or a different Project Working Directory)` };
  const report = join(dir, "success_auditor_report.md"), handoff = join(dir, "handoff.md"), progress = join(dir, "progress.md");
  const handoffText = existsSync(handoff) ? readFileSync(handoff, "utf8") : "";
  const complete = existsSync(report) && /complete/i.test(handoffText);
  const prog = existsSync(progress) ? readFileSync(progress, "utf8") : "";
  const done = (prog.match(/^- \[x\]/gm) || []).length, total = (prog.match(/^- \[[ x]\]/gm) || []).length;
  const started = Math.min(...readdirSync(dir).map(f => statSync(join(dir, f)).birthtimeMs || statSync(join(dir, f)).mtimeMs));
  const elapsedMin = (Date.now() - started) / 60000, ageMin = (Date.now() - newest(dir)) / 60000;
  const state = complete ? "COMPLETE" : ageMin > STALL ? "STALLED" : "working";
  return { run, state, line: `${run}  ${state}  elapsed ${elapsedMin.toFixed(1)} min  milestones ${done}/${total}  newest file ${ageMin.toFixed(1)} min ago${complete ? `  → ${report} ; ${handoff}` : ""}` };
}

const t0 = Date.now();
while (true) {
  const st = runs.map(status);
  const allDone = st.every(s => s.state === "COMPLETE");
  const stalled = st.some(s => s.state === "STALLED");
  if (allDone || stalled || (Date.now() - t0) / 1000 >= WAIT) {
    for (const s of st) console.log(s.line);
    process.exit(allDone ? 0 : stalled ? 4 : 3);
  }
  await Bun.sleep(10_000);
}
