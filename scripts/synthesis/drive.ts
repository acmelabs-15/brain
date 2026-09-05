#!/usr/bin/env bun
// drive.ts — the headless driver: run the project conversation after conversation without a human paste (D-018 probe).
//
//   bun scripts/synthesis/drive.ts                    run conversations until STATE.md leaves Phases 0–1, a stop condition fires,
//                                                     or --max conversations have run
//   bun scripts/synthesis/drive.ts --max 1            one conversation (the p1-run-01 probe: does Teamwork dispatch work headless?)
//   bun scripts/synthesis/drive.ts --dry-run          print the agy command and exit
//
// Each conversation is `agy -p "<PROMPT.md>" --output-format stream-json --model <slug> --print-timeout <n>m` in the repo root,
// with `--dangerously-skip-permissions` unless --ask is given (headless mode has no prompt to answer; the CLI docs:
// "tools that would normally ask for confirmation are handled by policy"). The driver reads the NDJSON events and:
//   • writes the context time series the statusline would have written — one .teamwork/ctx-log.jsonl record per step_update
//     that carries usage, with used_percentage = usage.input_tokens / window — so budget.ts works unchanged (PROBE: the docs
//     do not say whether input_tokens is the step's prompt size or cumulative; the driver stops the conversation and says so
//     if the value ever exceeds the window);
//   • records subagent spawns (subagent_info) so a conversation that never dispatched Teamwork is recognised;
//   • saves the full event stream to .teamwork/drive/<n>-<conversation_id>.jsonl and the final envelope to …-result.json.
// Stop conditions (the driver never decides anything the agent should): STATE.md phase is no longer `0` or `1` (Phase 0 may be
// driven too; its conversation dispatches nothing by design); the agent's final
// response contains "STOP: needs Peter" or a `needs_peter: yes` handoff was written this conversation; two conversations in a
// row ended with status ≠ SUCCESS; a conversation ended with `git status --porcelain` non-empty (the §8.3 commit did not happen);
// a conversation dispatched nothing (no subagent_info and no new .teamwork/<run>/ directory) — headless Teamwork is unproven.
// Everything the driver sees goes to .teamwork/drive/drive.log; it prints one line per conversation.
import { readFileSync, existsSync, mkdirSync, appendFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const argv = process.argv.slice(2);
const opt = (k: string, d: string) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] ?? d : d; };
const MAX = Number(opt("--max", "50"));
const MODEL = opt("--model", "gemini-3.8-flash-high");
const TIMEOUT = opt("--print-timeout", "180m");
const ASK = argv.includes("--ask");
const DRY = argv.includes("--dry-run");
const REPO = process.cwd();
const DRIVE = join(REPO, ".teamwork", "drive");
mkdirSync(DRIVE, { recursive: true });
const log = (s: string) => { const line = `${new Date().toISOString()} ${s}`; appendFileSync(join(DRIVE, "drive.log"), line + "\n"); console.log(line); };

const ceilings = JSON.parse(readFileSync(join(REPO, "docs/plan/context-ceilings.json"), "utf8"));
const modelKey = Object.keys(ceilings).find(k => !k.startsWith("_") && k !== "default" && MODEL.toLowerCase().startsWith(k.toLowerCase().replace(/ /g, "-")));
const WINDOW: number = modelKey ? ceilings[modelKey].window : 0;
const modelLabel = modelKey ?? MODEL;
if (!WINDOW) log(`warning: no window size for model '${MODEL}' in context-ceilings.json — used_percentage cannot be computed; budget.ts will fall back to the default ceiling`);

const phaseOf = () => (readFileSync(join(REPO, "docs/plan/STATE.md"), "utf8").match(/\| \*\*phase\*\* \| `([^`]+)` \|/) || [])[1] ?? "?";
const sh = (cmd: string) => Bun.spawnSync(["bash", "-lc", cmd], { cwd: REPO }).stdout.toString().trim();
const runDirs = () => new Set(existsSync(join(REPO, ".teamwork")) ? readdirSync(join(REPO, ".teamwork")).filter(d => /^p\d+-run-/.test(d)) : []);

const prompt = readFileSync(join(REPO, "PROMPT.md"), "utf8");
const cmd = ["agy", "-p", prompt, "--output-format", "stream-json", "--model", MODEL, "--print-timeout", TIMEOUT, ...(ASK ? [] : ["--dangerously-skip-permissions"])];
if (DRY) { console.log(cmd.map(a => a === prompt ? '"<PROMPT.md>"' : a).join(" ")); process.exit(0); }

let failures = 0;
for (let n = 1; n <= MAX; n++) {
  const phaseStart = phaseOf();
  if (phaseStart !== "0" && phaseStart !== "1") { log(`stop: STATE.md phase is ${phaseStart} — the driver covers Phases 0–1 only`); break; }
  const before = runDirs();
  const handoffsBefore = new Set(readdirSync(join(REPO, "docs/plan/sessions")));
  log(`conversation ${n}: starting agy (model ${MODEL}, timeout ${TIMEOUT})`);
  const proc = Bun.spawn(cmd, { cwd: REPO, stdout: "pipe", stderr: "pipe", env: { ...process.env, TERM: "dumb" } });
  let convId = "", steps = 0, maxInput = 0, subagents = 0, result: any = null, overflow = false, streamPath = "";
  const decoder = new TextDecoder(); let buf = "";
  const handle = (line: string) => {
    if (!line.trim()) return;
    let ev: any; try { ev = JSON.parse(line); } catch { appendFileSync(join(DRIVE, `${n}-raw.log`), line + "\n"); return; }
    if (!convId && ev.conversation_id) { convId = ev.conversation_id; streamPath = join(DRIVE, `${n}-${convId}.jsonl`); }
    if (streamPath) appendFileSync(streamPath, line + "\n"); else appendFileSync(join(DRIVE, `${n}-pending.jsonl`), line + "\n");
    if (ev.type === "step_update" || ev.event === "step_update") {
      steps++;
      const usage = ev.usage ?? ev.step?.usage; const inTok = Number(usage?.input_tokens ?? NaN);
      if (Number.isFinite(inTok) && inTok > 0 && WINDOW) {
        maxInput = Math.max(maxInput, inTok);
        if (inTok > WINDOW) overflow = true;
        appendFileSync(join(REPO, ".teamwork", "ctx-log.jsonl"), JSON.stringify({ ts: new Date().toISOString(), conversation_id: convId, used_percentage: +(inTok / WINDOW * 100).toFixed(4), context_window_size: WINDOW, total_input_tokens: inTok, model: modelLabel, agent_state: ev.state ?? "working", subagents, task_count: null, cost: null, source: "drive.ts" }) + "\n");
      }
      if (ev.subagent_info ?? ev.step?.subagent_info) subagents++;
    }
    if (ev.type === "result" || ev.event === "result") result = ev;
  };
  const reader = proc.stdout.getReader();
  while (true) { const { value, done } = await reader.read(); if (done) break; buf += decoder.decode(value, { stream: true }); const parts = buf.split("\n"); buf = parts.pop() ?? ""; for (const p of parts) handle(p); }
  if (buf.trim()) handle(buf);
  const stderr = await new Response(proc.stderr).text();
  const code = await proc.exited;
  if (stderr.trim()) appendFileSync(join(DRIVE, `${n}-stderr.log`), stderr);
  if (result) writeFileSync(join(DRIVE, `${n}-result.json`), JSON.stringify(result, null, 2));
  const status = result?.status ?? (code === 0 ? "SUCCESS?" : `EXIT ${code}`);
  const response: string = String(result?.response ?? "");
  const newRuns = [...runDirs()].filter(d => !before.has(d));
  const newHandoffs = readdirSync(join(REPO, "docs/plan/sessions")).filter(f => !handoffsBefore.has(f));
  const needsPeter = newHandoffs.some(f => /needs_peter:\s*yes/.test(readFileSync(join(REPO, "docs/plan/sessions", f), "utf8"))) || /STOP: needs Peter/i.test(response);
  const dirty = sh("git status --porcelain");
  log(`conversation ${n}: ${status} in ${Math.round(Number(result?.duration_seconds ?? 0) / 60)} min — ${steps} steps, peak input ${maxInput.toLocaleString()} tokens${WINDOW ? ` (${(maxInput / WINDOW * 100).toFixed(2)}%)` : ""}, subagent steps ${subagents}, new runs [${newRuns.join(" ")}], handoff [${newHandoffs.join(" ")}], HEAD ${sh("git log -1 --format=%h")}`);
  if (overflow) { log("stop: a step reported input_tokens above the window — usage.input_tokens is cumulative, not the prompt size; the ctx-log written this conversation is wrong and the driver's percentage rule must be changed before running again"); break; }
  if (dirty) { log(`stop: working tree not clean after the conversation (the §8.3 commit did not happen):\n${dirty}`); break; }
  if (needsPeter) { log("stop: the agent asked for Peter (needs_peter: yes / STOP: needs Peter)"); break; }
  if (status !== "SUCCESS") { failures++; if (failures >= 2) { log("stop: two conversations in a row did not end with status SUCCESS"); break; } continue; }
  failures = 0;
  if (!subagents && !newRuns.length && phaseStart === "1") { log("stop: the conversation dispatched nothing (no subagent steps, no new .teamwork run directory) — headless Teamwork dispatch is unproven; run this conversation interactively"); break; }
}
log("driver finished");
