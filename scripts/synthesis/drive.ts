#!/usr/bin/env bun
// drive.ts — the headless driver: run the project conversation after conversation without a human paste (D-018, D-021).
//
//   bun scripts/synthesis/drive.ts                    run conversations from the current phase to the human gate (Phase 5 done),
//                                                     or until a stop condition fires, or --max conversations have run
//   bun scripts/synthesis/drive.ts --max 1            one conversation
//   bun scripts/synthesis/drive.ts --dry-run          print the agy command and exit
//   touch .teamwork/drive/STOP                        graceful stop: the running conversation finishes and commits, then the driver stops
//   Ctrl-C                                            hard stop: kills the driver AND the agy conversation (its units stay in-progress)
//
// Each conversation is `agy -p "<PROMPT.md>" --output-format stream-json --model <slug> --print-timeout 720m` in the repo root,
// with `--dangerously-skip-permissions` unless --ask is given (headless mode has no prompt to answer; the CLI docs:
// "tools that would normally ask for confirmation are handled by policy"). The 12-hour timeout outlives a Teamwork run paused
// on quota (METHOD §6.3). The driver reads the NDJSON events and:
//   • writes the context time series only if the statusline is not writing it: agy renders the statusline in headless mode too
//     (observed 2026-09-05: 2,783 statusline records for the first driven conversation), so the driver's records are a fallback.
//     One .teamwork/ctx-log.jsonl record per step_update that carries usage, with the context size = usage.input_tokens +
//     usage.cache_read_tokens (input_tokens is the UNCACHED part of the prompt; the two together are the prompt the model saw);
//     the driver stops if that sum ever exceeds the window;
//   • records subagent spawns (subagent_info) and new .teamwork/<run>/ directories, so a fan-out conversation that did nothing is recognised;
//   • saves the full event stream to .teamwork/drive/<n>-<conversation_id>.jsonl and the final envelope to …-result.json.
// Stop conditions (the driver never decides anything the agent should) — METHOD §8.5:
//   STATE.md phase is 6 or later, or the newest handoff is titled "Spec ready for review" (the human gate — Peter's turn);
//   the agent's final response contains "STOP: needs Peter" or a `needs_peter: yes` handoff was written; two conversations in a
//   row ended with status ≠ SUCCESS; a conversation ended with `git status --porcelain` non-empty (the §8.3 commit did not happen);
//   a conversation in a fan-out phase (1 or 2) changed nothing (no subagent step, no new run directory, phase and unit counts
//   unchanged); the context sum exceeded the window; the STOP file exists.
// A conversation with status ERROR whose handoff is complete and committed with a clean tree (agy's "The stream was interrupted"
// after the final paragraph — session 004 of the test series) is a finished conversation: shown yellow, not counted as a failure.
// Everything the driver sees goes to .teamwork/drive/drive.log; the terminal shows one task block per conversation (drive-ui.ts).
import { readFileSync, existsSync, mkdirSync, appendFileSync, writeFileSync, readdirSync, rmSync } from "fs";
import { join } from "path";
import * as ui from "./drive-ui";
import { readUnitStatus } from "./_lib";

const argv = process.argv.slice(2);
const opt = (k: string, d: string) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] ?? d : d; };
const MAX = Number(opt("--max", "200"));
const MODEL = opt("--model", "gemini-3.8-flash-high");
const TIMEOUT = opt("--print-timeout", "720m"); // 12 h: a Teamwork run paused on quota resumes when the bucket refills; the conversation must outlive the pause (§6.3)
const ASK = argv.includes("--ask");
const DRY = argv.includes("--dry-run");
const REPO = process.cwd();
const DRIVE = join(REPO, ".teamwork", "drive");
const STOP_FILE = join(DRIVE, "STOP");
mkdirSync(DRIVE, { recursive: true });
const record = (s: string) => appendFileSync(join(DRIVE, "drive.log"), `${new Date().toISOString()} ${s}\n`); // the record; the display is drive-ui
const log = (s: string) => { record(s); ui.info(s); };

const ceilings = JSON.parse(readFileSync(join(REPO, "docs/plan/context-ceilings.json"), "utf8"));
const modelKey = Object.keys(ceilings).find(k => !k.startsWith("_") && k !== "default" && MODEL.toLowerCase().startsWith(k.toLowerCase().replace(/ /g, "-")));
const WINDOW: number = modelKey ? ceilings[modelKey].window : 0;
const modelLabel = modelKey ?? MODEL;
if (!WINDOW) log(`warning: no window size for model '${MODEL}' in context-ceilings.json — used_percentage cannot be computed; budget.ts will fall back to the default ceiling`);

const phaseOf = () => (readFileSync(join(REPO, "docs/plan/STATE.md"), "utf8").match(/\| \*\*phase\*\* \| `([^`]+)` \|/) || [])[1] ?? "?";
const phaseNum = (p: string) => Number.parseFloat(p.replace(/[^\d.]/g, "")) || 0; // "1", "1V", "0.5", "4V" → 1, 1, 0.5, 4
const FANOUT = (p: string) => /^[12]$/.test(p);                                       // Phases 1 and 2 dispatch Teamwork runs; 1V/2 verification may too
const sh = (cmd: string) => Bun.spawnSync(["bash", "-lc", cmd], { cwd: REPO }).stdout.toString().trim();
const runDirs = () => new Set(existsSync(join(REPO, ".teamwork")) ? readdirSync(join(REPO, ".teamwork")).filter(d => /^p\d+-run-/.test(d)) : []);
const handoffs = () => readdirSync(join(REPO, "docs/plan/sessions")).filter(f => /^\d{3}-.*\.md$/.test(f)).sort();
const newestHandoff = () => { const h = handoffs(); return h.length ? readFileSync(join(REPO, "docs/plan/sessions", h[h.length - 1]!), "utf8") : ""; };
const atGate = () => phaseNum(phaseOf()) >= 6 || /^#.*Spec ready for review/im.test(newestHandoff());
const unitCounts = () => { const rows = readUnitStatus(join(REPO, "docs/plan/units.md")); return { done: rows.filter(r => r.status === "done").length, total: rows.length }; };
const unitsLine = () => { const u = unitCounts(); return u.total ? `${u.done}/${u.total} units` : ""; };

const prompt = readFileSync(join(REPO, "PROMPT.md"), "utf8");
const cmd = ["agy", "-p", prompt, "--output-format", "stream-json", "--model", MODEL, "--print-timeout", TIMEOUT, ...(ASK ? [] : ["--dangerously-skip-permissions"])];
if (DRY) { console.log(cmd.map(a => a === prompt ? '"<PROMPT.md>"' : a).join(" ")); process.exit(0); }
if (existsSync(STOP_FILE)) { rmSync(STOP_FILE); log("removed a stale .teamwork/drive/STOP file from an earlier stop"); }

ui.intro(`brain lifecycle synthesis — headless driver · phase ${phaseOf()} · model ${MODEL} · up to ${MAX} conversation(s) · stop with: touch .teamwork/drive/STOP`);
const readOrNull = (f: string) => { try { return readFileSync(f, "utf8"); } catch { return null; } };
const ctxNow = (convId: string): string => { // latest statusline reading for this conversation, for the live line
  try { const lines = readFileSync(join(REPO, ".teamwork", "ctx-log.jsonl"), "utf8").trim().split("\n"); for (let i = lines.length - 1; i >= Math.max(0, lines.length - 400); i--) { if (lines[i]!.includes(convId)) { const r = JSON.parse(lines[i]!); return `${Number(r.used_percentage).toFixed(1)}%`; } } } catch { } return "—";
};
let stopReason = "";
let failures = 0;
// Ctrl-C (SIGINT) or SIGTERM: kill the agy conversation too. Without this the driver dies and agy runs on — the test series'
// session 007 outlived its Ctrl-C by nine hours (D-021). The graceful stop is the STOP file; this is the hard one.
let current: ReturnType<typeof Bun.spawn> | null = null;
for (const sig of ["SIGINT", "SIGTERM"] as const) process.on(sig, () => {
  if (current) { try { current.kill("SIGTERM"); } catch { } }
  record(`driver interrupted (${sig}): agy conversation killed; its units stay in-progress for the next session's §8.1 step 6`);
  process.stdout.write("\x1b[?25h\n");
  console.log(`interrupted — agy conversation killed. The next conversation's §8.1 step 6 finishes or re-dispatches its units. Check with: pgrep -lf agy`);
  process.exit(130);
});
for (let n = 1; n <= MAX; n++) {
  const phaseStart = phaseOf();
  if (atGate()) { log(`stop: ${phaseNum(phaseStart) >= 6 ? `STATE.md phase is ${phaseStart}` : "the newest handoff is titled 'Spec ready for review'"} — the human gate; the driver covers Phases 0–5. Read docs/plan/lifecycle-spec/ and write human_approval in STATE.md (METHOD §5).`); break; }
  const before = runDirs();
  const handoffsBefore = new Set(handoffs());
  const unitsBefore = unitCounts();
  record(`conversation ${n}: starting agy (model ${MODEL}, timeout ${TIMEOUT}, phase ${phaseStart})`);
  const t0 = Date.now();
  // the session number is the previous handoff's + 1 (§8.1 step 10); units done/total from the status table
  const prevNo = Math.max(-1, ...[...handoffsBefore].map(f => Number((f.match(/^(\d+)-/) || [])[1] ?? -1)));
  const session = String(prevNo + 1).padStart(3, "0");
  const live = ui.conversation(`Conversation ${n} · Session ${session} · Phase ${phaseStart}${unitsLine() ? ` · ${unitsLine()}` : ""}`);
  let lastTool = "", milestones = 0, warnings = 0, lastPlannedRun = ""; const seenToolSteps = new Set<number>();
  const redraw = () => {
    const mins = ((Date.now() - t0) / 60000).toFixed(0);
    const runs = [...runDirs()].filter(d => !before.has(d)).map(d => ui.runSummary(join(REPO, ".teamwork", d), readOrNull)).join(", ");
    live.status(`${mins} min · step ${steps} · ctx ${convId ? ctxNow(convId) : "—"}${runs ? ` · ${runs}` : ""}${lastTool ? ` · ${lastTool}` : ""}${existsSync(STOP_FILE) ? " · STOP requested — stopping after this conversation" : ""}`);
  };
  const proc = Bun.spawn(cmd, { cwd: REPO, stdout: "pipe", stderr: "pipe", env: { ...process.env, TERM: "dumb" } });
  current = proc;
  let convId = "", steps = 0, maxInput = 0, subagents = 0, result: any = null, overflow = false, streamPath = "", usageEvents = 0, statuslineSeen = false;
  const statuslineWrites = () => { // has the statusline written a record for this conversation? (checked every 10 usage events until seen)
    if (statuslineSeen || !convId) return statuslineSeen;
    try { const tail = readFileSync(join(REPO, ".teamwork", "ctx-log.jsonl"), "utf8"); statuslineSeen = tail.split("\n").some(l => l.includes(convId) && !l.includes('"source":"drive.ts"')); } catch { }
    return statuslineSeen;
  };
  const decoder = new TextDecoder(); let buf = "";
  const handle = (line: string) => {
    if (!line.trim()) return;
    let ev: any; try { ev = JSON.parse(line); } catch { appendFileSync(join(DRIVE, `${n}-raw.log`), line + "\n"); return; }
    // stream shape (observed 2026-09-05): {"event":"init","conversation_id":…,"init":{…}} · {"event":"step_update","step_update":{conversation_id,
    // step_index,state,step_type,tool_name,tool_info,usage,subagent_info,text_delta}} · {"event":"result","result":{status,response,error,duration_seconds,usage}}
    const kind = ev.event ?? ev.type;
    const body = ev[kind] ?? ev;
    if (!convId && (ev.conversation_id || body.conversation_id)) { convId = ev.conversation_id || body.conversation_id; streamPath = join(DRIVE, `${n}-${convId}.jsonl`); }
    if (streamPath) appendFileSync(streamPath, line + "\n"); else appendFileSync(join(DRIVE, `${n}-pending.jsonl`), line + "\n");
    if (kind === "step_update") {
      steps++;
      const usage = body.usage; const ctxTok = Number(usage?.input_tokens ?? NaN) + Number(usage?.cache_read_tokens ?? 0);
      if (Number.isFinite(ctxTok) && ctxTok > 0 && WINDOW) {
        usageEvents++; maxInput = Math.max(maxInput, ctxTok);
        if (ctxTok > WINDOW) overflow = true;
        if (usageEvents % 10 === 1) statuslineWrites();
        if (!statuslineSeen) appendFileSync(join(REPO, ".teamwork", "ctx-log.jsonl"), JSON.stringify({ ts: new Date().toISOString(), conversation_id: convId, used_percentage: +(ctxTok / WINDOW * 100).toFixed(4), context_window_size: WINDOW, total_input_tokens: ctxTok, model: modelLabel, agent_state: body.state ?? "working", subagents, task_count: null, cost: null, source: "drive.ts" }) + "\n");
      }
      if (body.subagent_info) subagents++;
      if (body.tool_name && !seenToolSteps.has(body.step_index)) { // each tool step streams twice (running, done); show it once
        seenToolSteps.add(body.step_index);
        const params = body.tool_info?.parameters ?? body.tool_info?.params ?? {};
        lastTool = ui.describeTool(body.tool_name, params);
        const planned = String(params.CommandLine || "").match(/run-start ([\w-]+) n=/); if (planned) lastPlannedRun = planned[1] ?? "";
        const m = ui.milestone(body.tool_name, params, lastPlannedRun);
        if (m) { milestones++; if (m.kind === "warn") warnings++; record(`conversation ${n}: ${m.text}`); live.line(m.text, m.kind); }
      }
      redraw();
    }
    if (kind === "result") result = body;
  };
  const reader = proc.stdout.getReader();
  while (true) { const { value, done } = await reader.read(); if (done) break; buf += decoder.decode(value, { stream: true }); const parts = buf.split("\n"); buf = parts.pop() ?? ""; for (const p of parts) handle(p); }
  if (buf.trim()) handle(buf);
  const stderr = await new Response(proc.stderr).text();
  const code = await proc.exited;
  current = null;
  if (stderr.trim()) appendFileSync(join(DRIVE, `${n}-stderr.log`), stderr);
  if (result) writeFileSync(join(DRIVE, `${n}-result.json`), JSON.stringify(result, null, 2));
  let status: string = result?.status ?? (code === 0 ? "SUCCESS?" : `EXIT ${code}`);
  const response: string = String(result?.response ?? "");
  const newRuns = [...runDirs()].filter(d => !before.has(d));
  const newHandoffs = handoffs().filter(f => !handoffsBefore.has(f));
  const handoffText = newHandoffs.map(f => readFileSync(join(REPO, "docs/plan/sessions", f), "utf8")).join("\n");
  const needsPeter = /needs_peter:\s*yes/.test(handoffText) || /STOP: needs Peter/i.test(response);
  const dirty = sh("git status --porcelain");
  const phaseEnd = phaseOf(); const unitsAfter = unitCounts();
  const mins = Math.round(Number(result?.duration_seconds ?? (Date.now() - t0) / 1000) / 60);
  const peakPct = WINDOW ? `${(maxInput / WINDOW * 100).toFixed(1)}%` : `${maxInput.toLocaleString()} tok`;
  const quality = response.match(/([\d,]+) PASS\s*\/\s*(\d+) FAIL/); const fails = quality ? Number(quality[2]) : null;
  // a stream interrupted after the agent finished (handoff complete, tree committed) is a finished conversation, not a failed one
  const handoffComplete = newHandoffs.length > 0 && !/\*\(in progress\)\*/.test(handoffText) && /context_used_peak:\s*[\d.]+%/.test(handoffText);
  let note = "";
  if (status !== "SUCCESS" && !dirty && handoffComplete && /stream was interrupted/i.test(String(result?.error ?? ""))) { note = " (stream interrupted after the close; handoff committed)"; status = "FINISHED"; }
  const detail = `Conversation ${n} · Session ${session} · Phase ${phaseStart}${phaseEnd !== phaseStart ? `→${phaseEnd}` : ""} · ${status} · ${mins} min${unitsLine() ? ` · ${unitsLine()}` : ""} · runs [${newRuns.join(" ") || "none"}]${quality ? ` · ${quality[1]} PASS / ${quality[2]} FAIL` : ""} · peak ${peakPct} · HEAD ${sh("git log -1 --format=%h")}`;
  record(`${detail}${note} — ${steps} steps, context log by ${statuslineSeen ? "statusline" : "drive.ts"}, subagent steps ${subagents}, handoff [${newHandoffs.join(" ")}]`);
  const ok = status === "SUCCESS" || status === "FINISHED";
  const didNothing = ok && !subagents && !newRuns.length && phaseEnd === phaseStart && unitsAfter.done === unitsBefore.done && unitsAfter.total === unitsBefore.total;
  if (overflow) stopReason = "a step reported input_tokens + cache_read_tokens above the window — the usage fields are not the prompt size; the driver's rule must be changed before running again";
  else if (dirty) stopReason = `working tree not clean after the conversation (the §8.3 commit did not happen):\n${dirty}`;
  else if (needsPeter) stopReason = "the agent asked for Peter (needs_peter: yes / STOP: needs Peter) — read its last paragraph and the handoff's For Peter section";
  else if (!ok && ++failures >= 2) stopReason = "two conversations in a row did not end with status SUCCESS — see .teamwork/drive/<n>-result.json and <n>-stderr.log";
  else if (didNothing && FANOUT(phaseStart)) stopReason = `a Phase ${phaseStart} conversation changed nothing (no subagent step, no new .teamwork run directory, phase and unit counts unchanged) — read its handoff`;
  const verdict: ui.Verdict = stopReason ? "red" : (!ok || status === "FINISHED" || warnings > 0 || (fails !== null && fails > 0)) ? "yellow" : "green";
  live.finish(detail + note, verdict);
  if (stopReason) { record(`stop: ${stopReason}`); ui.error(`stop: ${stopReason}`); break; }
  if (ok) failures = 0;
  if (existsSync(STOP_FILE)) { rmSync(STOP_FILE); stopReason = "stopped by request (.teamwork/drive/STOP) after the conversation finished — start drive.ts again to continue"; log(stopReason); break; }
}
record("driver finished");
ui.outro(stopReason ? `stopped — ${stopReason.split("\n")[0]}` : `finished · phase now ${phaseOf()} · ${sh("bun scripts/synthesis/units.ts status 2>/dev/null | tail -1") || ""}`);
