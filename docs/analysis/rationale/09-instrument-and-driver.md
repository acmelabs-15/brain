# 09 · The instrument and the driver — statusline, `budget.ts`, `await-run.ts`, `drive.ts`

**Status:** in force. The statusline log is the context instrument (D-010); `budget.ts` is the calculation; `await-run.ts` is how the primary agent sees a Teamwork run; `drive.ts` is the headless driver (D-018, probe).

## Why an instrument at all

Until 2026-09-04 nobody measured context. Sessions 006–011 talked about "safe batch size" with no number behind it and mistook quota (429s) for the limit. Peter's correction in the session-011 handoff — the limit is context rot, and the answer must be a *calculation* — needs a reading of the conversation's context that the agent can obtain from a file, not from memory or a screen.

Antigravity's statusline API delivers `context_window.used_percentage` (and the window size, model, agent state, quota buckets) to a user script on every render. That script is the only place the number is available to a file.

## The statusline port (`coralline-agy`)

Peter's Claude Code bar is coralline; he wanted agy's bar to match it: two rows (dir · git · model · clock / context · 5-hour quota · cost), a thin pink capped gauge for context (`━━━━━━╸┄┄┄┄┄ NN%`), a small gap between rows. The port is pure Bun (R9 applies to everything the project writes), tokyo-night palette, and it does one thing coralline does not: with `ctxLog` set, it appends one JSON record per render:

```
{ts, conversation_id, used_percentage, context_window_size, total_input_tokens, model, agent_state, subagents, task_count, cost}
```

Two design points that mattered later:

- **The log lives in the workspace**, at `<repo>/.teamwork/ctx-log.jsonl`, not under `~/.gemini`. The agent's sandbox cannot read `~/.gemini`, and the fence forbids it anyway. `apply-experiment2.sh` moved it there on 2026-09-04.
- **`model` carries the effort** (`Gemini 3.8 Flash (High)`), because agy has no separate effort field. `budget.ts` matches the ceilings file by exact key then by prefix, and METHOD §7 step 5 reads the stamp's model and effort from this string.

A cost was paid for the move: the statusline directory was replaced wholesale by the experiment kit, and the old log — the whole run-01 series — was inside it. `apply-final.sh` now appends any old log to the workspace log before replacing the directory.

The `cost` field is null under plan login (agy sends none), which is why the quota dimension of D-010 is measured in 429s and wall time, not dollars.

## `budget.ts` — the calculation

Inputs are files only: the last record of the newest conversation in `ctx-log.jsonl`; the model's ceilings; the measured parameters in `budget-params.json`; the pending count from `units.md`. Output is a verdict.

Three versions existed:

1. **Experiment prompt (session 013):** `used + largest per-unit delta + reserve < budget`, budget 16 then 21. It stopped session 014's first attempt without dispatching (no headroom after an 11.5% start) and stopped the series after run 02 with 1% headroom.
2. **Session-014 tooling:** `units_left = floor(headroom / per_unit_delta)`; recommended the largest series size ≤ `min(units_left, max_clean_run, pending)`. Its input `per_unit_delta = 0.53` was wrong in kind: it divided the whole run by the unit count.
3. **Final (D-010):** `k × (R + n × u) ≤ governing − used − C`, with `R` (fixed per run) and `u` (per unit) separated, both measured; the plan with the most units that fits, `n` before `k`; the one-step-up probe. `--record <label>` appends timestamped readings; `--measure` re-derives `S`, `R`, `u`, `C` from a conversation's own readings; `--set` stores them. Every parameter is therefore re-measured every conversation, and the calculation is never "remembered".

Why `n` grows before `k`: each run pays `R`; one 16-unit run costs `R + 16u`, two 8-unit runs cost `2R + 16u`.

Why the probe is one step: a step that fails must be attributable. Two steps at once (12 units *and* 2 runs) would not say which limit was hit.

## `await-run.ts` — how the primary agent sees a run

In runs 01–02 the primary agent learned about the run from Sentinel messages injected into its conversation, and recorded each one with a view / edit / commit cycle — six per run, 2.1% of the window. The messages are also invisible to a headless conversation. Both problems have one answer: the run's own files. A Teamwork run writes `progress.md`, `handoff.md` and `success_auditor_report.md` into its working directory; `await-run.ts` polls those, prints one line per run, and exits 0 when the completion artifacts exist, 3 when the wait elapsed, 4 when nothing has changed for 15 minutes — usually a quota pause, which the primary agent waits through (§6.3). The primary agent's behaviour is now identical in interactive and headless mode, and the run's fixed cost falls from 4.6% toward 2.5%.

The Sentinel's messages still arrive interactively; METHOD says to read them but not to treat them as the record.

## `drive.ts` — the headless driver (D-018)

Peter's end state is one action per conversation, and then none. Antigravity's headless mode (`agy -p … --output-format stream-json`) starts a conversation from a prompt and streams typed events; the driver loops it: start, feed `PROMPT.md`, read the stream, stop, repeat, until the human gate (since D-021; Phases 0–1 only in the D-018 probe) or a stop condition fires.

What the driver was expected to contribute, and what it actually does: I assumed the statusline would not render in headless mode and made the driver write the context log from the stream's `usage` field. Session 001 (2026-09-05) showed the statusline **does** render headless — 2,783 readings for that conversation — so the driver's log is a fallback: it writes only if no statusline record for its conversation appears. Its rule is `context = usage.input_tokens + usage.cache_read_tokens` (`input_tokens` alone is the uncached part of the prompt); replaying session 001's saved stream through it gives a 23.09% peak against the statusline's 22.97%.

Session 001 also answered the other open question: Teamwork dispatch (`invoke_subagent` → `teamwork_preview`) works under `-p` — `p1-run-01`, 90 cards, zero FAIL, from one driver command. The driver still stops if a Phase-1 conversation dispatches nothing. `--print-timeout` is set to 12 hours because the default is 5 minutes and a Teamwork run paused on quota must be outlived by the conversation (Peter's correction, 2026-09-05: the Sentinel pauses and resumes workers across a rate limit; the primary agent waits, never rolls back); `--dangerously-skip-permissions` is passed because headless mode has no prompt to answer (the CLI docs: "tools that would normally ask for confirmation are handled by policy"); `--ask` disables that.

## What the test series changed (D-021)

Two things in `budget.ts`: `--record "run-start <run> n=<count>"` now refuses a count that is not the current plan's `n` (the series recorded guessed counts four times — the label is evidence, so the script checks it); and the probe verdict's wall-time clause is read under the same-shape condition of §8.2, because the series showed wall time following the Orchestrator's decomposition (6 Workers for 12 units, 8 for 24, sequential milestones for 16), not the harness — `13-test-series-and-final-parameters.md` §3.

`drive.ts` now runs from Phase 0 to the human gate (Phase 6 in `STATE.md`, or a *Spec ready for review* handoff), stops gracefully on `.teamwork/drive/STOP` once the running conversation has committed, counts a conversation that agy ends with status ERROR after a complete, committed close as finished (session 004: "The stream was interrupted" after the final paragraph), and applies the "did nothing" stop only in fan-out phases and only when phase, unit counts and run directories are all unchanged. The default `--max` is 200.

## The display (`drive-ui.ts`)

Peter's request before the final run (2026-09-05): a clack-style task log — the thing in progress shown with a spinner and concise information, nested log lines beneath it with no icons that go away when it completes, and the spinner turning into a status icon: green for success, yellow for warning, red for a problem. `drive-ui.ts` does that: one task block per conversation — a pink spinner (◒◐◓◑) beside a bold title `Conversation N · Session NNN · Phase P · done/total units`, beneath it up to eight plain dimmed log lines (milestones as they happen; the live status — minutes, step, context %, each run's progress, the current command — at most every five seconds) that scroll away, and on completion the block collapses to one line whose icon is the verdict: green ✔ clean, yellow ▲ finished with something to look at, red ✖ the driver stopped (the reason follows as its own line). The block is drawn by the file itself, because clack's `taskLog` has a static title symbol; `@clack/prompts` (the one dependency in the tooling, dev-only, used by nothing the agent runs) draws the intro, outro and free-standing lines. Every line is cut to the terminal width first — the first version let long spinner lines wrap and the redraw printed one frame per row (2026-09-05). The display is a view; `.teamwork/drive/drive.log` is the record.

## What is deliberately not measured

Dollars (no cost field under plan login). Compaction as a threshold (§8.4; `11-experiment-and-reset.md`). The Teamwork workers' own context — the primary agent never reads a transcript; worker health is inferred from `quote-check.ts` on what they return and from the unit caps that the run-01 worker compactions justified.
