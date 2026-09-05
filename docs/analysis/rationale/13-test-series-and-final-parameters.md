# 13 · The test series and the final parameters (sessions 001–007, 2026-09-05) — the basis of D-021

**Status:** record. The runs recorded here were deleted from the tree by the D-021 reset; their numbers are the parameters in `docs/plan/budget-params.json` and the rules D-021 added to METHOD (§6.3.1 one Worker per unit; §7 step 2 the checked `run-start`; §8.2 the same-shape wall-time test; §8.5 the driver to the human gate). The production series that follows the reset appends to `../dynamic-batching-experiment.md` §7; its §10 is the short form of this file.

## 1. What was run

After the D-016 reset and the final kit (D-010, D-017, D-018) the whole method ran headless: `bun scripts/synthesis/drive.ts` in the repository, nothing else. Between conversations Peter applied two between-session kits — the rationale record with hotfix 1 (D-019: repository-root rule, stream parsing, quota rule) and hotfix 2 (D-020: memo keyed on the extraction contract) — and captured the tree three times for analysis. All conversations ran Gemini 3.8 Flash (High) with the governing ceiling at 25%.

| session | conversation | start % | peak % | runs (units) | minutes | ended |
|---|---|---|---|---|---|---|
| 000 | — (interactive paste) | — | 10.2 | Phase 0 | — | by plan |
| 001 | 32f74daf | 15.31 (fence incident, see `01-timeline.md`) | 22.97 (statusline; 20.69 at `verified`) | p1-run-01 (8) | 21 | SUCCESS? (driver parsed the wrong shape; fixed) |
| 002 | 579b4fde | 10.89 | 12.28 | none | 3 | STOP: needs Peter — memo audit 90 STALE after the hotfix-1 METHOD edit (whole-file hash) → D-020 |
| 003 | 199362a6 | 8.42 | 11.82 | none | 3 | same (the D-020 kit was not yet applied) |
| 004 | 39c94819 | 8.51 | 19.92 | p1-run-02 (12), p1-run-03 (12) | 36 | ERROR — "The stream was interrupted" *after* the close; everything committed (e78eef0) |
| 005 | bf2aa367 | 8.26 | 19.04 | p1-run-04 (16), p1-run-05 (12) | 43 | SUCCESS |
| 006 | 12d1d16a | 8.27 | 20.03 | p1-run-06 (24), p1-run-07 (16) | 99 | SUCCESS |
| 007 | ffd4476f | 8.27 | 8.27 | p1-run-08 (16) + p1-run-09 (16) dispatched together (k = 2 probe) | 2 | cancelled by hand for the final reset |

End state before the reset (HEAD 025daa0): 100 units done of 416 (addy 46/46, matt 46/46, rjm 8/46), 428 cards, `quote-check.ts --summary --all` 8,466 PASS / 0 FAIL, `coverage.ts` clean, `memo.ts audit` 428 OK / 0 STALE / 0 UNSTAMPED, `units.ts check` clean; 32 units `in-progress` from the cancelled session 007 (the next session's §8.1 step 6 would have finished or re-dispatched them).

## 2. The context readings (`.teamwork/readings.jsonl`, `budget.ts --record`)

Every reading of the four Phase-1 conversations, with the change since the previous reading of the same conversation:

```
39c94819 (session 004)   8.51 start · 9.53 run-start 02 n=12 (+1.01) · 10.35 dispatched (+0.83) · 14.15 verified (+3.80)
                         16.24 run-start 03 n=12 (+2.08) · 16.71 dispatched (+0.47) · 18.05 verified (+1.34) · 19.91 close (+1.87)
bf2aa367 (session 005)   8.26 start · 9.05 run-start 04 n=16 (+0.78) · 9.60 dispatched (+0.55) · 14.04 verified (+4.45)
                         15.83 run-start 05 n=16 (+1.78) · 15.89 run-start 05 n=12 (+0.07) · 16.27 dispatched (+0.38) · 17.95 verified (+1.68) · 19.04 close (+1.09)
12d1d16a (session 006)   8.27 start · 9.16 run-start 06 n=24 (+0.89) · 10.05 dispatched (+0.89) · 12.94 verified (+2.88)
                         15.10 run-start 07 n=16 (+2.16) · 15.62 dispatched (+0.53) · 18.92 verified (+3.30) · 20.03 close (+1.10)
ffd4476f (session 007)   8.27 start · 9.07 run-start 08 n=16 (+0.80) · 9.70 dispatched (+0.63) · 9.90 run-start 09 n=16 (+0.19) · 10.30 dispatched (+0.40)
```

Read as costs per run (run-start → the next run-start, or → close for the last run of a conversation, the close's own cost subtracted):

| run | n | cost of the run (% of window) | position in its conversation |
|---|---|---|---|
| p1-run-02 | 12 | 6.71 | first |
| p1-run-03 | 12 | ≈ 2.6 (18.05 − 16.24 = 1.81 to `verified`, plus the record step inside the 1.87 close) | second |
| p1-run-04 | 16 | 6.78 | first |
| p1-run-05 | 12 | 2.06 (+ record) | second |
| p1-run-06 | 24 | 5.94 | first |
| p1-run-07 | 16 | 3.82 (+ record) | second |

Three things follow. The first run of a conversation costs 5.9–6.8% and the second 1.8–3.8%, whatever `n` is — the difference is what the agent reads the first time it goes through §7 (the run's files, the recipe's outputs) and does not read again. There is no measurable per-unit slope between 12 and 24 units: the 24-unit run was the cheapest first run. And the planning model `R + n·u` with `R = 4.6`, `u = 0.19` predicted 6.88 / 7.64 / 9.16 for 12 / 16 / 24 units against 6.71 / 6.78 / 5.94 measured — it over-estimates, increasingly with `n`, which is the safe direction for a context budget. The values stay; `budget.ts --measure` keeps re-deriving them each conversation, and a future decision may lower `u` once the production series shows the same flat slope at 32 and 48 units.

`S` (start): 8.26–8.51 at `start`, 9.05–9.53 at the first `run-start` (the §8.1 protocol plus the handoff file); stored 9.16. `C` (close): 1.09–1.10 in a normal close, 1.87 when the close included a dispatch attempt that `budget.ts` stopped (session 004's `run-start p1-run-04 n=2`, `n=1`); stored 1.1.

## 3. Wall time: the Orchestrator, not the harness

The step-up rule treats a wall time more than 25% above the last clean run at the same unit caps as the sign of the harness queueing conversations (the undocumented concurrent-stream limit). The series broke that reading:

| run | units | `worker_*` dirs | how the Orchestrator decomposed it | wall (min) | quote-check |
|---|---|---|---|---|---|
| p1-run-02 | 12 | 12 | one Worker per unit, all at once | 15.6 | 627 PASS / 0 FAIL |
| p1-run-03 | 12 | 12 | one Worker per unit, all at once | 13.0 | 663 / 0 |
| p1-run-04 | 16 | 16 | one Worker per unit, all at once | 12.6 | 2,086 / 0 |
| p1-run-05 | 12 | 6 | five milestones, 1–5 units per Worker | 23.2 | 803 / 0 |
| p1-run-06 | 24 | 8 | 3 units per Worker | 27.6 | 927 / 0 |
| p1-run-07 | 16 | 18 (incl. one `_fix`) | five sequential gated milestones (4 + 4 + 4 + 4 + E2E), each with 2 Reviewers, 2 Challengers, 1 Auditor; a Generation-2 Orchestrator brief prepared at 05:10Z; 51 agent directories | 65.1 | 2,161 / 0 |

Zero 429s in every run's files (`grep -il 429` over `progress.md` and every handoff), zero rot metrics, zero FAIL. The three slow runs are exactly the three where the Orchestrator did not give every unit its own Worker at once. So:

- The 24-unit probe (`p1-run-06`) was **clean on quality** and its wall-time verdict is **void** — 27.6 minutes for 8 Workers doing 3 units each measures the Orchestrator, not the harness. The agent applied the rule as written and removed 24 from `run_sizes`; D-021 puts it back and the probe runs again under the new brief.
- The 65-minute run (`p1-run-07`) was neither a quota pause nor a harness limit; it was a decomposition choice. Under the old rule it would have failed a step-up; it was not a probe, so nothing was decided on it.
- The unit caps of §6.5 (50 KB, 12 files — from the two run-01 Workers that compacted at 29 and 55 files) are *per Worker context*; a Worker given 3 units reads up to 150 KB and 36 files, outside the evidence. Quality held anyway in runs 05–07, but the brief should not leave it to chance.

Hence the brief's new Requirements line (METHOD §6.3.1): one Worker per unit, every Worker at once, no sequential milestone gating that holds units back; review, challenge and audit per unit or across the run. And the wall-time test is valid only between runs of that shape (§8.2) — the agent checks the shape from the run's own files (`worker_*` directories under `.teamwork/<run-id>/.agents/`, the Orchestrator's `progress.md`).

## 4. Concurrency (`k`)

Session 007 was the first `k = 2` probe: the plan `2 × 16` cost 15.28% against a 15.63% headroom; both runs were dispatched within 22 seconds. Peter pressed Ctrl-C on the driver two minutes later for the final reset — and learned the next morning that **Ctrl-C had killed only the driver**. The agy conversation it had spawned kept running for nine more hours: it waited for both runs, verified `p1-run-08` (16 units, `inv-rjm-9`–`24`) and committed its results at 23:45 local time (`cac2f67`, about 51 minutes after dispatch), and was stamping `p1-run-09`'s cards (`inv-rjm-25`–`40`, 79 cards and 16 reports written to the tree, uncommitted) when the process was found and killed on 2026-09-05. Both runs of the `k = 2` probe therefore ran to completion together, and run 08 passed the agent's verification; run 09's quality was never checked and its wall time is unknown (the `readings.jsonl` of that conversation was not captured). That is evidence that two simultaneous runs work, not a step-up measurement — the shape of the two runs was not inspected, and the conversation's own record is lost with the reset. `max_clean_concurrency` stays 1; the calculation will probe `k = 2` again when a plan calls for it.

Two lessons went into the go kit: the driver now kills its agy child when it is interrupted (Ctrl-C), and the STOP file is the documented way to stop it — a conversation killed mid-run leaves its Teamwork workers writing into the tree, which the next session's §8.1 step 6 must then reconcile. With `n` growing before `k` (one 32-unit run costs `R + 32u`, two 16-unit runs `2R + 32u`), and `run_sizes` now reaching 48, `k = 2` is probed only when the largest proven `n` leaves room for two — at the current start and close costs, `2 × (4.6 + 48 × 0.19) = 27.4%` never fits a 14.7% headroom, so in practice one run per dispatch of up to 48 units, and a second run in the same conversation when the first leaves headroom (as every test-series conversation did).

## 5. What broke, and what changed because of it

| what | evidence | change (D-021 unless noted) |
|---|---|---|
| `run-start` recorded with a count the verdict had not given | `run-start p1-run-03 n=16` then `n=12`; `p1-run-05 n=16` then `n=12`; `p1-run-04 n=2`, `n=1` against a STOP | `budget.ts --record run-start` refuses `n` ≠ the plan's; §7 step 2 says so |
| session 004 status ERROR after a complete close | `1-result.json`: `error: "The stream was interrupted. Please continue…"`, `duration 2137 s`; HEAD e78eef0 committed; tree clean | driver: ERROR + complete handoff + clean tree = FINISHED (yellow), no failure count |
| memo stamps invalidated by a METHOD edit | sessions 002–003 `STOP: needs Peter`, 90 STALE | D-020 (between sessions): `method_sha` over §2.4/§3/§4 + template; `memo.ts restamp`; held to the end (428 OK) |
| the driver parsed a flat event shape | session 001: `SUCCESS?`, 0 tokens, 0 subagents | D-019 hotfix 1: nested `{event, <event>: {…}}`; context = `input_tokens + cache_read_tokens` |
| the display flooded the terminal | long spinner lines wrapped; one frame per row | `drive-ui.ts`: self-drawn block, lines cut to the terminal width, plain dimmed log lines, ✔/▲/✖ on completion |
| first sandboxed command fails each conversation | `sandbox configuration error: deny ~/.ssh/**: globs not supported` (every stream, step 4–20) | harness; noted in PROMPT.md ("run it again"); Peter may drop the `**` from the `read_file(…/**)` deny rules in `settings.json` |
| `write_to_file` refused in headless mode | `…is not a valid artifact path; artifacts must be in ~/.gemini/antigravity-cli/brain/<conversation>/` (every stream, the handoff file) | harness; PROMPT.md: create files with a heredoc |
| 32 units left `in-progress` by the cancelled session | STATE 284 pending / 32 in-progress / 100 done | none — §8.1 step 6 exists for this; the reset removed them anyway |

## 6. The final parameters

`docs/plan/budget-params.json` after D-021: `start_pct 9.16`, `run_fixed_pct 4.6`, `per_unit_pct 0.19`, `close_pct 1.1`, `run_sizes [8, 12, 16, 24, 32, 48]`, `max_clean_run 16`, `concurrency_sizes [1, 2, 3]`, `max_clean_concurrency 1`, `wall_time_bound_pct 25`, `last_clean_wall_minutes 12.6` (p1-run-04, 16 Workers at once). Governing ceiling for Gemini 3.8 Flash: 25% (`context-ceilings.json`; the raise rule to 28% needs a conversation above 22% with zero rot metrics — the series peaked at 21.2%).

What the first production conversations will do with them: at a 9.2% start the headroom is 14.7%; the largest series size that fits is 48 (`4.6 + 48 × 0.19 = 13.7`), but the step-up rule allows only one step above the proven 16, so the first run is a 24-unit probe (cost 9.16 by the model, ~6 measured), the second run in that conversation whatever fits the remaining headroom, and each later conversation steps to 32, then 48, as long as each step is clean by the same-shape test. 316 pending units at 24–48 per run is roughly 8–10 runs over 5–6 conversations for the rest of Phase 1.

## Appendix — the run blocks as the agent recorded them (`dynamic-batching-experiment.md` §7 before the reset)

Runs 01–02 are the experiment of sessions 013–014 (before the D-016 reset); runs 03–09 are the test series (`p1-run-01`…`p1-run-07`). `p1-run-08`/`p1-run-09` (session 007) were dispatched and cancelled before any block was written.

#### run 01

- **run-id**: `p1-run-01`
- **units**: `inv-addy-1`, `inv-addy-6`, `inv-addy-8`, `inv-addy-9`, `inv-addy-12`, `inv-addy-14` (6 units, 88 files, 4 divergence pairs)
- **context used**:
  - start: not observed
  - at approval: not observed
  - after report 1: not observed
  - after report 2: not observed
  - after report 3: not observed
  - after report 4: not observed
  - at end: not observed
  - largest per-unit delta: not observed
- **rot metrics**: none observed (used: not observed)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 27m 54s (from `2026-09-04T17:54:17Z` request to `2026-09-04T18:22:11Z` final report). Files read under `.teamwork/p1-run-01/` and `.agents/`:
  - `.teamwork/p1-run-01/DISPATCH.md` (dispatch logged at 2026-09-04T17:55:17Z)
  - `.teamwork/p1-run-01/progress.md` (last visited at 2026-09-04T18:18:25Z)
  - `.teamwork/p1-run-01/handoff.md` (orchestrator handoff at 2026-09-04T18:18:40Z)
  - `.teamwork/p1-run-01/success_auditor_report.md` (completed at 2026-09-04T18:17:15Z)
  - `.agents/victory_auditor_p1_run_01/handoff.md` (audit completed at 2026-09-04T18:22:30Z)
- **quote-check totals**:
  - Run 01 cards: 1,158 PASS, 0 FAIL, 0 MISSING across 92 cards (0% failure rate)
  - Baseline (§2): 6,208 PASS, 1,228 FAIL, 339 MISSING across 212 cards (18% failure rate)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-01/success_auditor_report.md` (confirmed by victory auditor at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/victory_auditor_p1_run_01/handoff.md` with VICTORY CONFIRMED)

#### run 02

- **run-id**: `p1-run-02`
- **units**: `inv-addy-15`, `inv-addy-16`, `inv-addy-17`, `inv-addy-22`, `inv-addy-25`, `inv-addy-36`, `inv-addy-37`, `inv-addy-38` (8 units)
- **context readings**:
  - session start:
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        9.071636199951172%  (95,123 tokens; peak this conversation 9.071636199951172%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        9.93%
  per-unit delta  not measured%   units_left —   max clean run —   pending 303
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - immediately before dispatch:
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        10.214805603027344%  (107,110 tokens; peak this conversation 10.214805603027344%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        8.79%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 1 (2026-09-04T20:03:55Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        11.05642318725586%  (115,935 tokens; peak this conversation 11.05642318725586%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        7.94%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 2 (2026-09-04T20:08:16Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        11.581611633300781%  (121,442 tokens; peak this conversation 11.581611633300781%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        7.42%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 3 (2026-09-04T20:10:05Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        11.871528625488281%  (124,482 tokens; peak this conversation 11.871528625488281%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        7.13%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 4 (2026-09-04T20:16:11Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        12.137699127197266%  (127,273 tokens; peak this conversation 12.137699127197266%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        6.86%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 5 (2026-09-04T20:18:20Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        12.427997589111328%  (130,317 tokens; peak this conversation 12.427997589111328%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        6.57%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 6 (2026-09-04T20:20:06Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        12.712764739990234%  (133,303 tokens; peak this conversation 12.712764739990234%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        6.29%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after verification:
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        14.423465728759766%  (151,241 tokens; peak this conversation 14.423465728759766%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        4.58%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
- **per-unit delta**: 0.53% (used after verification 14.42% − used before dispatch 10.21% = 4.21% ÷ 8 units = 0.526%)
- **rot metrics**: none observed (used: 14.42%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 17m 00s (from `2026-09-04T20:04:00Z` dispatch to `2026-09-04T20:21:00Z` sentinel final handoff). Files read under `.teamwork/p1-run-02/` and `.agents/`:
  - `.teamwork/p1-run-02/DISPATCH.md` (dispatch logged at 2026-09-04T20:04:00Z)
  - `.teamwork/p1-run-02/progress.md` (last updated at 2026-09-04T20:17:15Z)
  - `.teamwork/p1-run-02/handoff.md` (orchestrator handoff at 2026-09-04T20:17:30Z)
  - `.teamwork/p1-run-02/success_auditor_report.md` (completed at 2026-09-04T20:17:15Z)
  - `.agents/victory_auditor_p1_run_02/handoff.md` (audit completed at 2026-09-04T20:20:00Z)
  - `.agents/sentinel_p1_run_02/handoff.md` (sentinel handoff at 2026-09-04T20:21:00Z)
- **quote-check totals**:
  - Run 02 cards: 1,003 PASS, 0 FAIL, 0 MISSING across 17 cards (0% failure rate)
  - Cumulative (Runs 01 + 02): 2,161 PASS, 0 FAIL, 0 MISSING across 109 cards (0% failure rate)
  - Baseline (§2): 6,208 PASS, 1,228 FAIL, 339 MISSING across 212 cards (18% failure rate)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-02/success_auditor_report.md` (confirmed by victory auditor at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/victory_auditor_p1_run_02/handoff.md` and sentinel handoff at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/sentinel_p1_run_02/handoff.md` with VICTORY CONFIRMED)

#### run 03 (Session 001, post-reset p1-run-01)

- **run-id**: `p1-run-01`
- **session**: 001 (Phase 1)
- **units**: `inv-addy-1`, `inv-addy-2`, `inv-addy-3`, `inv-addy-4`, `inv-addy-5`, `inv-addy-6`, `inv-addy-7`, `inv-addy-8` (8 units, 90 inventory cards, 4 divergence cards, 8 reports)
- **context used**:
  - at run-start: `used=16.03%` (`[run-start p1-run-01 n=8] budget 2026-09-05T01:43:03.015Z conv=32f74daf model="Gemini 3.8 Flash (High)" used=16.03% peak=16.03% governing=25.00% close=2.9% headroom=6.07% pending=416 → DISPATCH 1 run × 7 units`)
  - at dispatched: `used=16.49%` (`[dispatched p1-run-01] budget 2026-09-05T01:43:28.374Z conv=32f74daf model="Gemini 3.8 Flash (High)" used=16.49% peak=16.49% governing=25.00% close=2.9% headroom=5.61% pending=408 → DISPATCH 1 run × 5 units`)
  - at verified: `used=20.69%` (`[verified p1-run-01] budget 2026-09-05T02:01:25.248Z conv=32f74daf model="Gemini 3.8 Flash (High)" used=20.69% peak=20.69% governing=25.00% close=2.9% headroom=1.41% pending=408 → STOP — no plan fits the headroom: close per §8.3`)
  - per-unit delta: 0.52% (verified 20.69% − dispatched 16.49% = 4.20% ÷ 8 units)
- **rot metrics**: none observed (used: 20.69%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 15m 57s (from `2026-09-05T01:43:28Z` dispatch to `2026-09-05T01:59:25Z` victory confirmed). Files read under `.teamwork/p1-run-01/` and `.agents/`:
  - `.teamwork/p1-run-01/ORIGINAL_REQUEST.md` (2026-09-05T01:44:21Z)
  - `.teamwork/p1-run-01/.agents/orchestrator_1/progress.md` (2026-09-05T01:56:55Z)
  - `.teamwork/p1-run-01/.agents/orchestrator_1/handoff.md` (2026-09-05T01:57:30Z)
  - `.teamwork/p1-run-01/.agents/victory_auditor_1/handoff.md` (2026-09-05T01:59:25Z)
  - `.teamwork/p1-run-01/.agents/sentinel_1/handoff.md` (2026-09-05T01:59:25Z)
- **quote-check totals**:
  - Run 01 cards: 1,217 PASS, 0 FAIL across 90 cards + 12 PASS, 0 FAIL across 4 divergence cards = 1,229 PASS, 0 FAIL (0% failure rate)
  - Coverage check: 0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems (exit code 0)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-01/success_auditor_report.md` (symlinked to `.agents/victory_auditor_1/handoff.md` with VICTORY CONFIRMED)

#### run 04 (Session 004, post-reset p1-run-02)

- **run-id**: `p1-run-02`
- **session**: 004 (Phase 1)
- **units**: `inv-addy-9`, `inv-addy-10`, `inv-addy-11`, `inv-addy-12`, `inv-addy-13`, `inv-addy-14`, `inv-addy-15`, `inv-addy-16`, `inv-addy-17`, `inv-addy-18`, `inv-addy-19`, `inv-addy-20` (12 units, 51 inventory cards, 12 reports)
- **context used**:
  - at run-start: `used=9.53%` (`[run-start p1-run-02 n=12] budget 2026-09-05T02:56:34.589Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=9.53% peak=9.53% governing=25.00% close=1.29% headroom=14.18% pending=408 → DISPATCH 1 run × 12 units`)
  - at dispatched: `used=10.35%` (`[dispatched p1-run-02] budget 2026-09-05T02:57:08.547Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=10.35% peak=10.35% governing=25.00% close=1.29% headroom=13.36% pending=396 → DISPATCH 1 run × 12 units`)
  - at verified: `used=14.15%` (`[verified p1-run-02] budget 2026-09-05T03:14:06.094Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=14.15% peak=14.15% governing=25.00% close=1.29% headroom=9.56% pending=396 → DISPATCH 1 run × 12 units`)
  - per-unit delta: 0.32% (verified 14.15% − dispatched 10.35% = 3.80% ÷ 12 units = 0.317%)
- **rot metrics**: none observed (used: 14.15%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 15m 38s (from `2026-09-05T02:57:08Z` dispatch to `2026-09-05T03:12:46Z` completion report). Files under `.teamwork/p1-run-02/`:
  - `.teamwork/p1-run-02/ORIGINAL_REQUEST.md` (2026-09-05T02:57:35Z)
  - `.teamwork/p1-run-02/.agents/sentinel_1/handoff.md` (2026-09-05T03:12:46Z)
  - `.teamwork/p1-run-02/.agents/victory_auditor_1/handoff.md` (2026-09-05T03:12:46Z)
  - `.teamwork/p1-run-02/success_auditor_report.md` (2026-09-05T03:12:46Z)
- **quote-check totals**:
  - Run 02 cards: 627 PASS, 0 FAIL across 51 inventory cards (0% failure rate)
  - Coverage check: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-02/success_auditor_report.md` (confirmed by victory auditor at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-02/.agents/victory_auditor_1/handoff.md` with VICTORY CONFIRMED)
- **Probe verdict**: CLEAN (zero quote-check FAIL, zero 429, no rot metric, wall time 15.6 min within 25% of 17 min). `max_clean_run` raised to 12; `last_clean_wall_minutes` set to 15.6.

#### run 05 (Session 004, post-reset p1-run-03)

- **run-id**: `p1-run-03`
- **session**: 004 (Phase 1)
- **units**: `inv-addy-21`, `inv-addy-22`, `inv-addy-23`, `inv-addy-24`, `inv-addy-25`, `inv-addy-26`, `inv-addy-27`, `inv-addy-28`, `inv-addy-29`, `inv-addy-30`, `inv-addy-31`, `inv-addy-32` (12 units, 15 inventory cards, 12 reports)
- **context used**:
  - at run-start: `used=16.24%` (`[run-start p1-run-03 n=12] budget 2026-09-05T03:15:03.661Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=16.24% peak=16.24% governing=25.00% close=1.29% headroom=7.47% pending=396 → DISPATCH 1 run × 12 units`)
  - at dispatched: `used=16.71%` (`[dispatched p1-run-03] budget 2026-09-05T03:15:28.647Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=16.71% peak=16.71% governing=25.00% close=1.29% headroom=7.00% pending=384 → DISPATCH 1 run × 12 units`)
  - at verified: `used=18.05%` (`[verified p1-run-03] budget 2026-09-05T03:28:56.382Z conv=39c94819 model="Gemini 3.8 Flash (High)" used=18.05% peak=18.05% governing=25.00% close=1.29% headroom=5.66% pending=384 → DISPATCH 1 run × 5 units`)
  - per-unit delta: 0.11% (verified 18.05% − dispatched 16.71% = 1.34% ÷ 12 units = 0.112%)
- **rot metrics**: none observed (used: 18.05%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 12m 58s (from `2026-09-05T03:15:28Z` dispatch to `2026-09-05T03:28:26Z` completion report). Files under `.teamwork/p1-run-03/`:
  - `.teamwork/p1-run-03/ORIGINAL_REQUEST.md` (2026-09-05T03:16:15Z)
  - `.teamwork/p1-run-03/.agents/sentinel_1/handoff.md` (2026-09-05T03:28:26Z)
  - `.teamwork/p1-run-03/.agents/victory_auditor_1/handoff.md` (2026-09-05T03:28:26Z)
  - `.teamwork/p1-run-03/success_auditor_report.md` (2026-09-05T03:28:26Z)
- **quote-check totals**:
  - Run 03 cards: 663 PASS, 0 FAIL across 15 inventory cards (0% failure rate)
  - Coverage check: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-03/success_auditor_report.md` (confirmed by victory auditor at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-03/.agents/victory_auditor_1/handoff.md` with VICTORY CONFIRMED)

#### run 06 (Session 005, post-reset p1-run-04)

- **run-id**: `p1-run-04`
- **session**: 005 (Phase 1)
- **units**: `inv-addy-33`, `inv-addy-34`, `inv-addy-35`, `inv-addy-36`, `inv-addy-37`, `inv-addy-38`, `inv-addy-39`, `inv-addy-40`, `inv-addy-41`, `inv-addy-42`, `inv-addy-43`, `inv-addy-44`, `inv-addy-45`, `inv-addy-46`, `inv-matt-1`, `inv-matt-2` (16 units, 84 inventory cards, 16 reports; completes package `addy`)
- **context used**:
  - at run-start: `used=9.05%` (`[run-start p1-run-04 n=16] budget 2026-09-05T03:32:14.713Z conv=bf2aa367 model="Gemini 3.8 Flash (High)" used=9.05% peak=9.05% governing=25.00% close=1.87% headroom=14.08% pending=384 → DISPATCH 1 run × 16 units (16 units, cost 7.64%) — PROBE: one step above the proven maximum (1 × 12); a clean result (zero FAIL, zero 429, wall time within 25% of 15.6 min) raises max_clean_run`)
  - at dispatched: `used=9.60%` (`[dispatched p1-run-04] budget 2026-09-05T03:32:38.463Z conv=bf2aa367 model="Gemini 3.8 Flash (High)" used=9.60% peak=9.60% governing=25.00% close=1.87% headroom=13.53% pending=368 → DISPATCH 1 run × 16 units (16 units, cost 7.64%) — PROBE: one step above the proven maximum (1 × 12); a clean result (zero FAIL, zero 429, wall time within 25% of 15.6 min) raises max_clean_run`)
  - at verified: `used=14.05%` (`[verified p1-run-04] budget 2026-09-05T03:47:13.581Z conv=bf2aa367 model="Gemini 3.8 Flash (High)" used=14.05% peak=14.05% governing=25.00% close=1.87% headroom=9.08% pending=368 → DISPATCH 1 run × 16 units (16 units, cost 7.64%) — PROBE: one step above the proven maximum (1 × 12); a clean result (zero FAIL, zero 429, wall time within 25% of 15.6 min) raises max_clean_run`)
  - per-unit delta: 0.28% (verified 14.05% − dispatched 9.60% = 4.45% ÷ 16 units = 0.278%)
- **rot metrics**: none observed (used: 14.05%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 12m 53s (from `2026-09-05T03:32:38Z` dispatch to `2026-09-05T03:45:31Z` completion report). Probe clean: wall time 12.88 min ≤ 19.5 min bound (25% over 15.6m); raised `max_clean_run=16`, `last_clean_wall_minutes=12.6`.
- **quote-check totals**:
  - Run 04 cards: 2,086 PASS, 0 FAIL across 84 inventory cards (0% failure rate)
  - Coverage check: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-04/success_auditor_report.md`

#### run 07 (Session 005, post-reset p1-run-05)

- **run-id**: `p1-run-05`
- **session**: 005 (Phase 1)
- **units**: `inv-matt-3`, `inv-matt-4`, `inv-matt-5`, `inv-matt-6`, `inv-matt-7`, `inv-matt-8`, `inv-matt-9`, `inv-matt-10`, `inv-matt-11`, `inv-matt-12`, `inv-matt-13`, `inv-matt-14` (12 units, 33 inventory cards, 12 reports)
- **context used**:
  - at run-start: `used=15.89%` (`[run-start p1-run-05 n=12] budget 2026-09-05T03:48:08.474Z conv=bf2aa367 model="Gemini 3.8 Flash (High)" used=15.89% peak=15.89% governing=25.00% close=1.87% headroom=7.24% pending=368 → DISPATCH 1 run × 12 units (12 units, cost 6.88%)`)
  - at dispatched: `used=16.27%` (`[dispatched p1-run-05] budget 2026-09-05T03:48:34.460Z conv=bf2aa367 model="Gemini 3.8 Flash (High)" used=16.27% peak=16.27% governing=25.00% close=1.87% headroom=6.86% pending=356 → DISPATCH 1 run × 8 units (8 units, cost 6.12%)`)
  - at verified: `used=17.95%` (`[verified p1-run-05] budget 2026-09-05T04:12:20.828Z conv=bf2aa367 model="Gemini 3.8 Flash (High)" used=17.95% peak=17.95% governing=25.00% close=1.87% headroom=5.18% pending=356 → DISPATCH 1 run × 3 units (3 units, cost 5.17%)`)
  - per-unit delta: 0.14% (verified 17.95% − dispatched 16.27% = 1.68% ÷ 12 units = 0.14%)
- **rot metrics**: none observed (used: 17.95%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 23m 11s (from `2026-09-05T03:48:34Z` dispatch to `2026-09-05T04:11:45Z` completion report).
- **quote-check totals**:
  - Run 05 cards: 803 PASS, 0 FAIL across 33 inventory cards (0% failure rate)
  - Coverage check: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-05/success_auditor_report.md`

#### run 08 (Session 006, post-reset p1-run-06)

- **run-id**: `p1-run-06`
- **session**: 006 (Phase 1)
- **units**: `inv-matt-15` through `inv-matt-38` (24 units, 44 inventory cards, 24 reports)
- **context used**:
  - at run-start: `used=9.16%` (`[run-start p1-run-06 n=24] budget 2026-09-05T04:14:40.428Z conv=12d1d16a model="Gemini 3.8 Flash (High)" used=9.16% peak=9.16% governing=25.00% close=1.09% headroom=14.75% pending=356 → DISPATCH 1 run × 24 units (24 units, cost 9.16%) — PROBE: one step above the proven maximum (1 × 16); a clean result (zero FAIL, zero 429, wall time within 25% of 12.6 min) raises max_clean_run`)
  - at dispatched: `used=10.05%` (`[dispatched p1-run-06] budget 2026-09-05T04:15:10.757Z conv=12d1d16a model="Gemini 3.8 Flash (High)" used=10.05% peak=10.05% governing=25.00% close=1.09% headroom=13.86% pending=332 → DISPATCH 1 run × 24 units (24 units, cost 9.16%) — PROBE: one step above the proven maximum (1 × 16); a clean result (zero FAIL, zero 429, wall time within 25% of 12.6 min) raises max_clean_run`)
  - at verified: `used=12.94%` (`[verified p1-run-06] budget 2026-09-05T04:43:48.938Z conv=12d1d16a model="Gemini 3.8 Flash (High)" used=12.94% peak=12.94% governing=25.00% close=1.09% headroom=10.97% pending=332 → DISPATCH 1 run × 24 units (24 units, cost 9.16%) — PROBE: one step above the proven maximum (1 × 16); a clean result (zero FAIL, zero 429, wall time within 25% of 12.6 min) raises max_clean_run`)
  - per-unit delta: 0.12% (verified 12.94% − dispatched 10.05% = 2.89% ÷ 24 units = 0.120%)
- **rot metrics**: none observed (used: 12.94%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 28m 01s (from `2026-09-05T04:15:10Z` dispatch to `2026-09-05T04:43:11Z` completion report; `await-run.ts` reported elapsed 27.6 min). Probe quality clean (927 PASS, 0 FAIL, 0 429, 0 rot metrics), but wall time (27.6 min) exceeded bound of 15.75 min (25% above 12.6 min). Per METHOD.md §8.2: `max_clean_run` stays 16; step not raised.
- **quote-check totals**:
  - Run 06 cards: 927 PASS, 0 FAIL across 44 inventory cards (0% failure rate)
  - Coverage check: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-06/success_auditor_report.md`

#### run 09 (Session 006, post-reset p1-run-07)

- **run-id**: `p1-run-07`
- **session**: 006 (Phase 1)
- **units**: `inv-matt-39` through `inv-matt-46` (8 units) and `inv-rjm-1` through `inv-rjm-8` (8 units) (16 units, 111 inventory cards, 16 reports)
- **context used**:
  - at run-start: `used=15.10%` (`[run-start p1-run-07 n=16] budget 2026-09-05T04:44:38.440Z conv=12d1d16a model="Gemini 3.8 Flash (High)" used=15.10% peak=15.10% governing=25.00% close=1.09% headroom=8.81% pending=332 → DISPATCH 1 run × 16 units (16 units, cost 7.64%)`)
  - at dispatched: `used=15.62%` (`[dispatched p1-run-07] budget 2026-09-05T04:45:01.790Z conv=12d1d16a model="Gemini 3.8 Flash (High)" used=15.62% peak=15.62% governing=25.00% close=1.09% headroom=8.29% pending=316 → DISPATCH 1 run × 16 units (16 units, cost 7.64%)`)
  - at verified: `used=18.92%` (`[verified p1-run-07] budget 2026-09-05T05:51:18.401Z conv=12d1d16a model="Gemini 3.8 Flash (High)" used=18.92% peak=18.92% governing=25.00% close=1.09% headroom=4.99% pending=316 → DISPATCH 1 run × 2 units (2 units, cost 4.98%)`)
  - per-unit delta: 0.21% (verified 18.92% − dispatched 15.62% = 3.30% ÷ 16 units = 0.206%)
- **rot metrics**: none observed (used: 18.92%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 65m 24s (from `2026-09-05T04:45:01Z` dispatch to `2026-09-05T05:50:25Z` completion report; `await-run.ts` reported elapsed 65.1 min).
- **quote-check totals**:
  - Run 07 cards: 2,161 PASS, 0 FAIL across 111 inventory cards (0% failure rate)
  - Coverage check: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-07/success_auditor_report.md`
