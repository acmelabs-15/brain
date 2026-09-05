# 12 · Open questions — what is unproven, and how each one is decided

Every item here is marked `undocumented — probe` somewhere in METHOD or the experiment doc. None is a guess written as a fact. When a probe lands, the answer goes into `../dynamic-batching-experiment.md` §7 (the run that decided it) and this file is updated in the same session.

| # | question | how it is decided | consequence either way |
|---|---|---|---|
| 1 | Where is Antigravity's concurrent-stream limit? | The step-up rule: a probe of more units or more simultaneous runs whose wall time grows by more than 25% at the same unit caps **and the same shape** — one Worker per unit, all at once (D-021; the test series' slow runs were the Orchestrator's decomposition, not the harness). 16 Workers at once ran in 12.6 min with no error (p1-run-04); 11 simultaneous conversations produced no error in the experiment's run 02. | The limit becomes `max_clean_run` / `max_clean_concurrency` in `budget-params.json`; the series stops there. Next probe: 24 units under the new brief. |
| 2 | Does the 5-hour quota bucket bind before the stream limit? | 429s in the run's files (`progress.md`, worker handoffs) and `await-run.ts` STALLED. Nine test-series runs (up to 24 units, 51 agent directories in one run) recorded zero 429s. | The primary agent waits through the pause; Teamwork's Sentinel resumes the workers when the bucket refills (Peter, 2026-09-05, correcting an earlier roll-back rule; sessions 006–007 observed a four-hour pause that resumed). A paused run counts for quality but not as a step-up measurement. |
| 3 | What effort does `Model: "flash"` select for a subagent? | Not probed — made moot by `Model: "inherit"` (D-017). | None. |
| 4 | Does plan login receive any cache discount on Antigravity? | `cache_read_tokens` in the headless stream's `usage`; no documentation states a quota effect. | None for the method — savings never depended on it. Relevant to Part 2 on Claude Code, where caching is documented. |
| 5 | Is 25% the right governing ceiling for 3.8 Flash? | The `raise_rule` in `context-ceilings.json`: a conversation that peaks above 22% with zero rot metrics raises it to 28%, and so on, never above the plateau (25% → the rule caps there unless the plateau is revised by new evidence). A rot metric at any level stops dispatch and is recorded with `used`. | The ceiling grows only on evidence; a rot metric would lower it. |
| 6 | Do the other models' ceilings hold on this workload? | Only if a conversation ever runs on them; until then each is governed by its strict knee. | None while the project stays on 3.8 Flash. |
| 7 | Should brain ship M1/M3/M4/M5 as general tools? | Peter, at the Phase 5 gate (D-005). | Part 2 scope. |
| 8 | Is Boost useful for any Phase 7 build unit? | A build unit that is a hard, test-verifiable problem (D-014 kept in D-017). | Phase 7 only. |
| 10 | Does the Orchestrator honour the one-Worker-per-unit requirement of the brief (D-021)? | The run's `.agents/worker_*` directories count against its units, and its `progress.md` shows no sequential milestone gating — checked by the agent at §8.2 for every probe. | If it does not, the wall-time test stays void for that run and the probe repeats; a persistent refusal would need a §11 change (the brief's wording, or a smaller `n`). |
| 11 | Is `u` (0.19 per unit) real, or is the per-run cost flat in `n`? | `budget.ts --measure` each conversation; the series measured 5.9–6.8% for a first run of 12, 16 or 24 units. | A flat slope at 32 and 48 would let a D-0xx lower `u`, which lets more units into a conversation; until then 0.19 over-estimates, the safe direction. |
| 12 | Can Phases 2–5 run headless as written? | The driver now continues past Phase 1; each phase's *Done when* and §8.3 apply unchanged; the agent says `STOP: needs Peter` where the files do not tell it what to do. | Expected friction: Phase 2's units are not in `units.ts` (Phase 1 table); the first Phase-2 conversation will show whether §5 is enough or a §11 change is needed. |
| 9 | Will a single file over 50 KB (23 rjm units, the largest 338 KB) compact its worker? | The FAIL count and the run's files when those units run; the worker's `quote-check.ts` is the quality gate regardless. | If a worker returns truncated or failing output the unit is rolled back and the cap question becomes a D-0xx decision (§6.5). |

## Closed since the experiment

- ~~Does a METHOD edit between sessions invalidate the cards?~~ — Not any more: D-020 keys the memo on the extraction contract (§2.4, §3, §4) + template. Sessions 002–003 (2026-09-05) stopped on this; the agent's diagnosis was exact.

- ~~Does Teamwork dispatch work under headless `agy -p`?~~ — **Yes** (session 001, 2026-09-05: `p1-run-01`, 90 cards, 0 FAIL, committed, closed by plan).
- ~~Is `usage.input_tokens` the context or a running total?~~ — Neither alone: it is the *uncached* part of the prompt; `input_tokens + cache_read_tokens` is the context (23.09% vs the statusline's 22.97% peak). And the statusline renders headless, so the driver's log is only a fallback.

- ~~Compaction threshold~~ — not a function of context used; handled by §8.4.
- ~~Peter must answer the interview for fidelity~~ — misattribution; D-017.
- ~~Per-unit cost 0.53%~~ — 0.19%; the rest is per-run.
- ~~Can a whole Phase-1 series run from one command?~~ — **Yes** (test series, 2026-09-05: sessions 004–006 from one `drive.ts` command, six runs, 100 units, 0 FAIL, each conversation closed by plan and committed).
- ~~Does the wall-time bound detect the harness?~~ — Only between runs of the same shape (D-021).
