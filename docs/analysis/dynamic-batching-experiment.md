# Dynamic batching experiment — protocol, results, findings (the evidence behind D-010)

Purpose: find how much work one primary-agent conversation can carry **without approaching context rot**, how much of it can run at the same time, and how the Teamwork runs behind it behave under load. Quota is not the objective. Every number below is either measured (with the command or file that produced it) or marked *to measure*. Every harness claim carries a citation; a behaviour the documentation does not state is written as `undocumented — probe`, never filled in.

D-010 records the values this document supports. `budget.ts` applies them live; this document is the record of how they were obtained and is appended to — §7 gets one block per run, §9 gets a dated findings section whenever a capture is analysed.

## 1. Architecture under test (D-014 → D-017)

The primary agent (one conversation) reads METHOD/STATE, writes an interview brief, dispatches Teamwork itself (`invoke_subagent` → `teamwork_preview`), waits on the run's files (`await-run.ts`), verifies with `quote-check.ts` and `coverage.ts`, records, commits. It never reads a source file for inventory and never writes a card. Inside the run, the Project Orchestrator surveys with explorers, fans units out to Workers (all at once), and the Critic, Auditor, Success Auditor and an independent post-victory audit judge against the interview rubric.

Where context rot can occur, and what bounds it:

| Where | Bound | How measured |
|---|---|---|
| Primary agent | the D-010 budget (§3) | `budget.ts --record` at start, run-start, dispatched, verified, close |
| Project Orchestrator (inside the run) | §6.5 unit caps; Teamwork's own succession | the run's `progress.md` / `handoff.md`, read after the run |
| Workers | one unit each, fresh context; ≤ 50 KB and ≤ 12 files | `quote-check.ts` FAIL rate per unit; empty required fields; worker compaction (transcripts, analysed after the fact) |

## 2. Baselines from disk (measured before the reset)

Produced by `quote-check.ts --all --summary` and `coverage.ts` on the pre-reset tree (212 cards written by one-team-per-unit dispatch with no verification field), sources at the pinned SHAs:

```
quote-check: 6208 PASS, 1228 FAIL (61 of them off by one line), 339 MISSING source, across 212 card(s); 188 card(s) with failures
```

18% of resolvable citations were not byte-exact at the cited line; 82% of cards carried at least one such citation. Failure classes seen by hand: paraphrase in a verbatim field, off-by-one line numbers, a term cited at a line that does not contain it, a path cited where only the skill's name appears. This is the number the contract (Worker runs `quote-check.ts` before returning; Auditor re-runs it; primary agent re-runs it) must keep at zero.

## 3. The budget (D-010; `budget.ts`)

```
used_end = S + Σ over runs (R + n × u) + C
headroom = governing ceiling − used − C
k runs × n units fit  iff  k × (R + n × u) ≤ headroom
```

- **S** session start, **R** fixed cost per run, **u** per verified unit, **C** close — measured (§9.2), stored in `budget-params.json`, re-measured every conversation (`budget.ts --measure` at §8.3).
- **governing ceiling** — per model, `context-ceilings.json`; set only from this project's evidence, raised only by the file's `raise_rule`.
- **n** and **k** grow one step at a time along `run_sizes` / `concurrency_sizes`; a step is clean when §4 shows nothing, there are no 429s, and wall time stays within 25% of the last clean run.

## 4. Rot metrics (operational, recorded with `used` at that moment)

Primary agent: a §7 step skipped; a unit checked off without read-back; a `units.ts check` failure; a decision cited that does not exist in `DECISIONS.md`; a role or file referred to by a name that is not its documented name.

Units: any `quote-check.ts` FAIL on a returned card; an empty required field; a package prefix dropped (R4); a `coverage.ts` regression.

## 5. Concurrency

Inside a run every unit is a Worker and all Workers start together — the brief requires it (METHOD §6.3.1, D-021), because left to itself the Orchestrator did otherwise in the test series (§10.2); the run's worker window is then set by the largest unit, not by the count (§9.9). Across runs, `k` simultaneous dispatches from one conversation are a D-010 probe. What is measured per run: units, wall time (dispatch → COMPLETE, from `await-run.ts`), 429 onset and `quota.reset_in_seconds`, Success Auditor sandbox failures, per-unit `quote-check.ts` FAIL count, worker compactions (from the capture).

## 6. Harness facts, cited

- Teamwork scope, roles, integrity modes, Project Working Directory, exclusive file ownership, Orchestrator succession: https://antigravity.google/docs/teamwork
- Subagents: `model: inherit|flash|pro`, fresh context per invocation, nesting depth 10: https://antigravity.google/docs/subagents
- Boost: three-tier pipeline, code-only use cases: https://antigravity.google/docs/boost
- Statusline payload (`context_window.used_percentage`, `quota{}.reset_in_seconds`, `agent_state`, `task_count`): https://antigravity.google/docs/cli/statusline
- Headless: `-p`/`--print`, `--output-format stream-json`, `step_update.usage.{input_tokens,output_tokens,thinking_tokens,cache_read_tokens,total_tokens}`, `subagent_info`, `--print-timeout` (default 5 min), permission modes `request-review` / `always-proceed`: https://antigravity.google/docs/cli/headless
- Quota is one shared pool drawn down at API-pricing ratios; five-hour and weekly buckets: https://antigravity.google/blog/changes-to-antigravity-plans
- 429 behaviour: retries, then stop; resume by telling the team "Continue"; "keep your machine awake": https://antigravity.google/blog/google-antigravity-built-an-os
- Concurrent stream limit exists, value undocumented: https://github.com/google-antigravity/antigravity-cli/blob/main/CHANGELOG.md (1.1.21)
- Automatic conversation compaction: **undocumented**. Observed (§9.4): fires independently of `used_percentage`; handled by METHOD §8.4, not avoided.
- Teamwork dispatch under `-p`: **undocumented — probe** (D-018).
- Cache discount under plan login: **undocumented — probe** (`cache_read_tokens` is reported; whether it reduces quota draw-down is not stated).

## 7. Results

One block per run, appended by the primary agent at §7 step 8 (fields: units; `budget.ts --line` at run-start / dispatched / verified; wall time; Workers per unit as the run's `.agents/worker_*` directories show; 429s; quote-check totals; the Success Auditor's report path). Run numbering here follows the run ids: `p1-run-01` is run 01 of the production series, which begins after the D-021 reset of 2026-09-05.

The runs before that reset — the experiment of sessions 013–014 (runs 01–02 of the old numbering) and the test series of sessions 001–007 (`p1-run-01`…`p1-run-09`, 100 units, 428 cards, 8,466 PASS / 0 FAIL) — are recorded verbatim, block by block, in `rationale/13-test-series-and-final-parameters.md`; their outputs were deleted by the reset and their numbers are the basis of the parameters in `docs/plan/budget-params.json`.

### run 01 (Session 001, production p1-run-01)

- **run-id**: `p1-run-01`
- **session**: 001 (Phase 1)
- **units**: `inv-addy-1` through `inv-addy-24` (24 units, 145 inventory cards, 24 unit reports, 4 divergence cards)
- **context used**:
  - at run-start: `used=8.72%` (`[run-start p1-run-01 n=24] budget 2026-09-05T07:00:21.365Z conv=2930b2ca model="Gemini 3.8 Flash (High)" used=8.72% peak=8.72% governing=25.00% close=1.1% headroom=15.18% pending=416 → DISPATCH 1 run × 24 units`)
  - at dispatched: `used=9.71%` (`[dispatched p1-run-01] budget 2026-09-05T07:01:06.416Z conv=2930b2ca model="Gemini 3.8 Flash (High)" used=9.71% peak=9.71% governing=25.00% close=1.1% headroom=14.19% pending=392 → DISPATCH 1 run × 24 units`)
  - at verified: `used=11.94%` (`[verified p1-run-01] budget 2026-09-05T07:23:24.195Z conv=2930b2ca model="Gemini 3.8 Flash (High)" used=11.94% peak=11.94% governing=25.00% close=1.1% headroom=11.96% pending=392 → DISPATCH 1 run × 24 units`)
  - per-unit delta: 0.093% (verified 11.94% − dispatched 9.71% = 2.23% ÷ 24 units = 0.0929%)
- **rot metrics**: none observed (used: 11.94%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 20.6 min (20m 36s, from `2026-09-05T07:01:06Z` dispatch to `2026-09-05T07:22:21Z` completion). Files under `.teamwork/p1-run-01/`:
  - `.teamwork/p1-run-01/ORIGINAL_REQUEST.md` (2026-09-05T07:01:14Z)
  - `.teamwork/p1-run-01/success_auditor_report.md` (2026-09-05T07:20:34Z)
  - `.teamwork/p1-run-01/handoff.md` (2026-09-05T07:22:16Z)
- **Workers per unit**: 24 workers (`.agents/worker_1`..`worker_24` and `worker_inv-addy-1`..`worker_inv-addy-24`), one per unit, dispatched concurrently.
- **quote-check totals**: 2,252 PASS, 0 FAIL across 145 inventory cards + 12 PASS, 0 FAIL on divergence cards (0% failure rate)
- **coverage check**: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-01/success_auditor_report.md` (verdict CLEAN)
- **Probe verdict**: Quality clean (0 FAIL, 0 429, no rot metric), but wall time 20.6 min exceeded 25% bound of 12.6 min (15.75 min) due to review/audit/remediation pass on divergence card citations and YAML frontmatter. Per METHOD.md §8.2 step-up rule, `max_clean_run` stays at 16; 24 is not raised.

### run 02 (Session 001, production p1-run-02)

- **run-id**: `p1-run-02`
- **session**: 001 (Phase 1)
- **units**: `inv-addy-25` through `inv-addy-46`, `inv-matt-1` through `inv-matt-2` (24 units, 95 inventory cards, 24 unit reports)
- **context used**:
  - at run-start: `used=13.76%` (`[run-start p1-run-02 n=24] budget 2026-09-05T07:24:27.680Z conv=2930b2ca model="Gemini 3.8 Flash (High)" used=13.76% peak=13.76% governing=25.00% close=1.1% headroom=10.14% pending=392 → DISPATCH 1 run × 24 units`)
  - at dispatched: `used=14.15%` (`[dispatched p1-run-02] budget 2026-09-05T07:24:46.006Z conv=2930b2ca model="Gemini 3.8 Flash (High)" used=14.15% peak=14.15% governing=25.00% close=1.1% headroom=9.75% pending=368 → DISPATCH 1 run × 24 units`)
  - at verified: `used=16.69%` (`[verified p1-run-02] budget 2026-09-05T08:06:46.572Z conv=2930b2ca model="Gemini 3.8 Flash (High)" used=16.69% peak=16.69% governing=25.00% close=1.1% headroom=7.21% pending=368 → DISPATCH 1 run × 12 units`)
  - per-unit delta: 0.106% (verified 16.69% − dispatched 14.15% = 2.54% ÷ 24 units = 0.1058%)
- **rot metrics**: none observed (used: 16.69%)
- **429s and quota.reset_in_seconds**: Transient RESOURCE_EXHAUSTED (code 429, reset 1s/0s) handled automatically by Teamwork Sentinel; Orchestrator successor dispatched (`af237e96`) and completed run without manual intervention.
- **wall time**: 40.8 min (from `2026-09-05T07:24:46Z` dispatch to `2026-09-05T08:05:56Z` completion).
- **Workers per unit**: 24 workers, one per unit, dispatched concurrently.
- **quote-check totals**: 5,160 PASS, 0 FAIL across all 240 cards (0% failure rate)
- **coverage check**: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-02/success_auditor_report.md` (verdict CLEAN)
- **Probe verdict**: N/A (probe evaluated in run 01; run 02 dispatched under max_clean_run=16/probe=24; quality completely clean at 0 FAIL across 5,160 citations).

### run 03 (Session 002, production p1-run-03)

- **run-id**: `p1-run-03`
- **session**: 002 (Phase 1)
- **units**: `inv-matt-3` through `inv-matt-18` (16 units, 37 inventory cards, 16 unit reports)
- **context used**:
  - at run-start: `used=12.82%` (`[run-start p1-run-03 n=16] budget 2026-09-05T08:16:30.288Z conv=903142eb model="Gemini 3.8 Flash (High)" used=12.82% peak=12.82% governing=25.00% close=4.08% headroom=8.10% pending=368 → DISPATCH 1 run × 16 units (16 units, cost 7.64%)`)
  - at dispatched: `used=13.60%` (`[dispatched p1-run-03] budget 2026-09-05T08:17:02.000Z conv=903142eb model="Gemini 3.8 Flash (High)" used=13.60% peak=13.60% governing=25.00% close=4.08% headroom=7.32% pending=352 → DISPATCH 1 run × 12 units (12 units, cost 6.88%)`)
  - at verified: `used=17.65%` (`[verified p1-run-03] budget 2026-09-05T09:57:16.020Z conv=903142eb model="Gemini 3.8 Flash (High)" used=17.65% peak=17.65% governing=25.00% close=4.08% headroom=3.27% pending=352 → STOP — no plan fits the headroom: close per §8.3`)
  - per-unit delta: 0.253% (verified 17.65% − dispatched 13.60% = 4.05% ÷ 16 units = 0.253%)
- **rot metrics**: none observed (used: 17.65%)
- **429s and quota.reset_in_seconds**: Account-level quota reached during worker initialization (429: "Individual quota reached. Resets at ~09:41 UTC"); paused cleanly by Sentinel and resumed automatically post-reset at ~09:41 UTC.
- **wall time**: 99.0 min (from `2026-09-05T08:17:02Z` dispatch to `2026-09-05T09:56:02Z` completion, including 77 min quota refill pause; active execution was ~10 min).
- **Workers per unit**: 16 workers (`.agents/worker_1`..`worker_16`), one per unit, dispatched concurrently.
- **quote-check totals**: 1,380 PASS, 0 FAIL across all 37 inventory cards (0% failure rate)
- **coverage check**: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
### run 04 (Session 003, production p1-run-04)

- **run-id**: `p1-run-04`
- **session**: 003 (Phase 1)
- **units**: `inv-matt-19` through `inv-matt-42` (24 units, 87 inventory cards, 24 unit reports)
- **context used**:
  - at run-start: `used=9.11%` (`[run-start p1-run-04 n=24] budget 2026-09-05T09:59:32.625Z conv=c99a5bff model="Gemini 3.8 Flash (High)" used=9.11% peak=9.11% governing=25.00% close=1.55% headroom=14.34% pending=352 → DISPATCH 1 run × 24 units (24 units, cost 9.16%) — PROBE`)
  - at dispatched: `used=9.60%` (`[dispatched p1-run-04] budget 2026-09-05T09:59:54.376Z conv=c99a5bff model="Gemini 3.8 Flash (High)" used=9.60% peak=9.60% governing=25.00% close=1.55% headroom=13.85% pending=328 → DISPATCH 1 run × 24 units (24 units, cost 9.16%) — PROBE`)
  - at verified: `used=11.52%` (`[verified p1-run-04] budget 2026-09-05T10:15:00.329Z conv=c99a5bff model="Gemini 3.8 Flash (High)" used=11.52% peak=11.52% governing=25.00% close=1.55% headroom=11.93% pending=328 → DISPATCH 1 run × 24 units (24 units, cost 9.16%) — PROBE`)
  - per-unit delta: 0.080% (verified 11.52% − dispatched 9.60% = 1.92% ÷ 24 units = 0.080%)
- **rot metrics**: none observed (used: 11.52%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 13.5 min (from `2026-09-05T09:59:54Z` dispatch to `2026-09-05T10:13:24Z` completion).
- **Workers per unit**: 24 workers (`.agents/worker_1`..`worker_24`), one per unit, dispatched concurrently.
- **quote-check totals**: 2,320 PASS, 0 FAIL across all 87 inventory cards (0% failure rate)
- **coverage check**: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-04/success_auditor_report.md` (verdict CLEAN)
- **Probe verdict**: Clean probe! Wall time 13.5 min is within 25% bound of 12.6 min (15.75 min), 0 FAIL across 2,320 citations, 0 429s, no rot metrics, 24 parallel workers. Per METHOD.md §8.2 step-up rule, `max_clean_run` is raised from 16 to 24, with `last_clean_wall_minutes=13.5`.

### run 05 (Session 003, production p1-run-05)

- **run-id**: `p1-run-05`
- **session**: 003 (Phase 1)
- **units**: `inv-matt-43` through `inv-matt-46`, `inv-rjm-1` through `inv-rjm-20` (24 units, 105 inventory cards, 24 unit reports)
- **context used**:
  - at run-start: `used=13.21%` (`[run-start p1-run-05 n=24] budget 2026-09-05T10:15:51.948Z conv=c99a5bff model="Gemini 3.8 Flash (High)" used=13.21% peak=13.21% governing=25.00% close=1.55% headroom=10.24% pending=328 → DISPATCH 1 run × 24 units (24 units, cost 9.16%)`)
  - at dispatched: `used=13.65%` (`[dispatched p1-run-05] budget 2026-09-05T10:16:11.016Z conv=c99a5bff model="Gemini 3.8 Flash (High)" used=13.65% peak=13.65% governing=25.00% close=1.55% headroom=9.80% pending=304 → DISPATCH 1 run × 24 units (24 units, cost 9.16%)`)
  - at verified: `used=14.88%` (`[verified p1-run-05] budget 2026-09-05T10:31:09.798Z conv=c99a5bff model="Gemini 3.8 Flash (High)" used=14.88% peak=14.88% governing=25.00% close=1.55% headroom=8.57% pending=304 → DISPATCH 1 run × 16 units (16 units, cost 7.64%)`)
  - per-unit delta: 0.051% (verified 14.88% − dispatched 13.65% = 1.23% ÷ 24 units = 0.051%)
- **rot metrics**: none observed (used: 14.88%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 13.7 min (from `2026-09-05T10:16:11Z` dispatch to `2026-09-05T10:29:55Z` completion).
- **Workers per unit**: 24 workers (`.agents/worker_1`..`worker_24`), one per unit, dispatched concurrently.
- **quote-check totals**: 2,897 PASS, 0 FAIL across all 105 inventory cards (0% failure rate)
- **coverage check**: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-05/success_auditor_report.md` (verdict CLEAN)
- **Probe verdict**: N/A (run at max_clean_run=24; quality completely clean at 2,897 PASS / 0 FAIL across 105 cards; wall time 13.7 min).

### run 06 (Session 003, production p1-run-06)

- **run-id**: `p1-run-06`
- **session**: 003 (Phase 1)
- **units**: `inv-rjm-21` through `inv-rjm-36` (16 units, 29 inventory cards, 16 unit reports)
- **context used**:
  - at run-start: `used=15.71%` (`[run-start p1-run-06 n=16] budget 2026-09-05T10:31:33.437Z conv=c99a5bff model="Gemini 3.8 Flash (High)" used=15.71% peak=15.71% governing=25.00% close=1.55% headroom=7.74% pending=304 → DISPATCH 1 run × 16 units (16 units, cost 7.64%)`)
  - at dispatched: `used=16.04%` (`[dispatched p1-run-06] budget 2026-09-05T10:31:53.029Z conv=c99a5bff model="Gemini 3.8 Flash (High)" used=16.04% peak=16.04% governing=25.00% close=1.55% headroom=7.41% pending=288 → DISPATCH 1 run × 12 units (12 units, cost 6.88%)`)
  - at verified: `used=17.66%` (`[verified p1-run-06] budget 2026-09-05T10:49:00.801Z conv=c99a5bff model="Gemini 3.8 Flash (High)" used=17.66% peak=17.66% governing=25.00% close=1.55% headroom=5.79% pending=288 → DISPATCH 1 run × 6 units (6 units, cost 5.74%)`)
  - per-unit delta: 0.101% (verified 17.66% − dispatched 16.04% = 1.62% ÷ 16 units = 0.101%)
- **rot metrics**: none observed (used: 17.66%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 16.1 min (from `2026-09-05T10:31:53Z` dispatch to `2026-09-05T10:48:00Z` completion).
- **Workers per unit**: 16 workers (`.agents/worker_1`..`worker_16`), one per unit, dispatched concurrently.
- **quote-check totals**: 1,134 PASS, 0 FAIL across all 29 inventory cards (0% failure rate)
- **coverage check**: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-06/success_auditor_report.md` (verdict CLEAN)
### run 07 (Session 004, production p1-run-07)

- **run-id**: `p1-run-07`
- **session**: 004 (Phase 1)
- **units**: `inv-rjm-37` through `inv-rjm-68` (32 units, 86 inventory cards, 32 unit reports)
- **context used**:
  - at run-start: `used=9.17%` (`[run-start p1-run-07 n=32] budget 2026-09-05T10:53:10.317Z conv=d524e359 model="Gemini 3.8 Flash (High)" used=9.17% peak=9.17% governing=25.00% close=1.68% headroom=14.15% pending=288 → DISPATCH 1 run × 32 units (32 units, cost 10.68%) — PROBE`)
  - at dispatched: `used=9.90%` (`[dispatched p1-run-07] budget 2026-09-05T10:53:53.125Z conv=d524e359 model="Gemini 3.8 Flash (High)" used=9.90% peak=9.90% governing=25.00% close=1.68% headroom=13.42% pending=256 → DISPATCH 1 run × 32 units (32 units, cost 10.68%) — PROBE`)
  - at verified: `used=12.89%` (`[verified p1-run-07] budget 2026-09-05T11:12:05.865Z conv=d524e359 model="Gemini 3.8 Flash (High)" used=12.89% peak=12.89% governing=25.00% close=1.68% headroom=10.43% pending=256 → DISPATCH 1 run × 24 units (24 units, cost 9.16%)`)
  - per-unit delta: 0.093% (verified 12.89% − dispatched 9.90% = 2.99% ÷ 32 units = 0.0934%)
- **rot metrics**: none observed (used: 12.89%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 15.6 min (from `2026-09-05T10:53:53Z` dispatch to `2026-09-05T11:09:29Z` completion).
- **Workers per unit**: 32 workers (`.agents/worker_1`..`worker_32`), one per unit, dispatched concurrently.
- **quote-check totals**: 3,502 PASS, 0 FAIL across all 86 inventory cards (0% failure rate)
- **coverage check**: clean (0 failures, 0 empty required fields, 0 orphan cards, 0 alias problems, 0 variant problems)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-07/success_auditor_report.md` (verdict CLEAN)
- **Probe verdict**: Clean probe! Wall time 15.6 min is within 25% bound of 13.5 min (16.875 min), 0 FAIL across 3,502 citations, 0 429s, no rot metrics, 32 parallel workers. Per METHOD.md §8.2 step-up rule, `max_clean_run` is raised from 24 to 32, with `last_clean_wall_minutes=15.6`.

## 8. Objective

Not quota. No session approaches the rot metrics; within that, the most work per unit of wall time — bigger runs and simultaneous runs, never fewer checks.

## 9. Findings from the capture of 2026-09-04 (sessions 013–014; the basis of D-010)

*Provenance note: the transcripts and logs this section cites were analysed outside the project, from a capture, by Peter and his assistant. They are not inputs to the analysis and are not to be read by the agent (§2). This section is the record of what they showed.*


Source: `brain-v2-experiment-20260904-170149.zip` — the statusline context log (`.teamwork/ctx-log.jsonl`, 4,871 readings), the 34 Antigravity transcripts of the day (every orchestrator, Sentinel, explorer, worker and auditor conversation), the Teamwork run directories, and the repo at `2620815`. Every number below comes from those files; the command that produced it is in `analysis/` of this kit.

### 9.1 What the two runs proved

| | run 01 (session 013) | run 02 (session 014) |
|---|---|---|
| units | 6 (88 files) | 8 (17 files) |
| workers in parallel | 6 | 8 |
| quote-check on returned cards | 1,158 PASS / 0 FAIL | 1,003 PASS / 0 FAIL |
| baseline before the reset | 18% of citations FAIL | — |
| wall time, brief → final report | 27 m 54 s | 17 m 00 s |
| 429s | 0 | 0 |
| rot metrics in the primary conversation | none | none |
| primary conversation peak | not logged (see §5) | 18.08% (189,627 tokens) |

Run 02 was started, dispatched, verified, recorded and closed by the agent alone from one paste. That is the end state working.

### 9.2 Where the primary conversation's context goes (run 02, window 1,048,576 tokens)

Every reading is `total_input_tokens` from the log, attributed to the transcript step that produced it.

| phase | tokens | % of window | what it is |
|---|---|---|---|
| harness + PROMPT.md + METHOD.md | 49,870 | 4.76 | METHOD is 56 KB; the tail (lines 400–532) was read **twice** (`view_file` truncates at ~410 lines) — 17k tokens, 1.6% of that is the duplicate |
| rest of §8.1 reads | 30,022 | 2.86 | STATE.md (26 KB, 333-row unit table), handoff, DECISIONS, GLOSSARY, PREFERENCES, DO-NOT-READ, template, budget-params, experiment doc |
| §8.1 checks | 14,840 | 1.42 | memo check, quote-check, prefix, partition, coverage, git |
| **S — session start, total** | **94,732** | **9.03** | before any unit work |
| pre-dispatch | 19,055 | 1.82 | unit-facts × 8, STATE edits (each `replace_file_content` echoes ~4k tokens), brief, commits |
| monitoring, 6 Sentinel reports | 22,315 | 2.13 | 0.35% per report: budget.ts + view doc + edit + commit + reply |
| verification, 8 units | 15,737 | 1.50 | **0.19% per unit** (quote-check --summary, stamp loop, head of two cards) |
| record + close | 37,788 | 3.60 | §7 results, `--set`, next brief incl. unit-facts × 6, STATE edits × 4, `git status -u`, handoff, checks, commits |

So the cost of one conversation is

```
used_end = S + Σ over runs (R + n × u) + C
S = 9.0   (start)        R = 4.6  (fixed per run: pre-dispatch 1.8 + monitoring 2.1 + record 0.7)
u = 0.19  (per unit)     C = 2.9  (close)
```

The model reproduces run 02: 9.0 + 4.6 + 8 × 0.19 + 2.9 = 18.1% (observed 18.08%).

**Correction to session 014's own figure.** The agent recorded "per-unit delta 0.53%". That number divides the whole run — Sentinel monitoring included — by the unit count. Monitoring is a fixed cost per run (Teamwork sends about the same number of reports whatever the size). The true marginal cost of a unit in the primary conversation is 0.19%. This matters: it means run size barely moves the conversation budget.

What the model says at today's costs (ceiling 21%):

| run size | 1 run per conversation | 2 runs | 3 runs |
|---|---|---|---|
| 8 | 18.1 | 24.2 | 30.4 |
| 12 | 18.8 | 25.7 | 32.6 |
| 16 | **19.6** | 27.2 | 34.9 |

A single **16-unit run fits under 21% today**; two runs do not. The stop after run 02 (headroom 1.01%) was the arithmetic working, not a limit of the method.

### 9.3 The reductions the log justifies (no quality cost — none touches what the agent reads for the work itself)

| change | saves | where |
|---|---|---|
| Read METHOD.md in two exact views (1–410, 411–end) — PROMPT.md instruction | 1.6% per conversation | S |
| Move the 333-row unit table out of STATE.md into `docs/plan/units.md` (partition.ts already writes it); STATE keeps counts + in-progress rows | 0.5% at start, ~0.3% per run of edit echoes, 0.4% at close | S, R, C |
| Sentinel report handling: `budget.ts --record "report N"` appends the reading to a JSONL; no view/edit/commit per report | 1.5% per run | R |
| §7 records the compact `budget.ts --line` form instead of the 9-line block | 0.3% per run | R |
| Handoff and brief written with `write_to_file` once, no `git status -u` echo | 0.3% at close | C |

Result: S ≈ 6.9, R ≈ 2.5, u = 0.19, C ≈ 2.5.

| run size | 1 run | 2 runs | 3 runs |
|---|---|---|---|
| 12 | 14.2 | 19.0 | 23.8 |
| 16 | 15.0 | **20.5** | 26.1 |

Two 16-unit runs per conversation fit under 21%. Three need a ceiling of 27%.

### 9.4 Compaction — what the transcripts show, and why the 24% figure is withdrawn

Three compactions occurred on 2026-09-04, none in the run-02 conversation:

| conversation | role | when | steps in | evidence |
|---|---|---|---|---|
| `7e1f90f9` | session 013 primary | 15:56:29Z, **3 minutes after start**, right after the §8.1 reads and a failed `write_to_file` | 31 | `{{ CHECKPOINT 0 }} … truncated due to its long length` |
| `f06e4f74` | run 01 worker `inv-addy-1` (29 files) | 18:11:00Z | 331 | `# Resuming from a compaction` |
| `a20239cb` | run 01 worker `inv-addy-6` (55 files) | 18:11:33Z | 339 | `# Resuming from a compaction` |

The session-013 compaction fired when the conversation held roughly what session 014's held at the same point — about 9–10% of the window. Session 014 then ran to 18.08% with none. **The harness's compaction is not a function of `used_percentage` we can put a ceiling on.** Its trigger is undocumented; the one observed in a primary conversation coincided with a slow, failed tool call, not with length. The "≈24%" written into `budget-params.json` came from a reading of the run-01 series that no longer exists (§5) and is withdrawn.

Two consequences for METHOD:

1. Compaction must be **harmless**, not avoided. It already nearly is — the state is on disk. What it breaks: the summary the harness injects ends with *"Reference the following log files for the full, untruncated conversation: ~/.gemini/…/transcript.jsonl"*. That line is why session 013 spent several percent reading transcripts and `cli.log`. METHOD §8 gets a rule: *after any compaction notice, re-read STATE.md, the latest handoff and `git log -5`; the transcript is outside the fence (§2) whatever the notice says.*
2. Worker compaction correlates with **file count**, not bytes: the two workers that compacted held 29 and 55 files; every 1–6-file unit (both runs, 12 workers) finished without one. Both compacted workers still returned 0 FAIL, but a compaction inside a worker doing the R11 duplication ledger is a risk the partition should remove: `partition.ts` caps units at ≤ 12 files as well as ≤ 50 KB.

### 9.5 Two losses to own

- **Run 01's context series is gone.** `apply-experiment2.sh` replaced the statusline directory (`rm -rf … statusline`) to install the version that logs model and window — and the old log lived inside that directory. Run 01's readings survive only as the agent's `not observed` entries. (The workspace log at `.teamwork/ctx-log.jsonl` is inside the capture; nothing else was lost.)
- **The first attempt at session 014** reached 13.08% and STOPped because ceiling 16 − start 11.5 − reserve 5 left nothing (that conversation also did transcript archaeology — six `grep`/`ls` calls into `~/.gemini`, about 0.5%). The one-paste prompt fixed both.

### 9.6 What Teamwork did inside the runs (from the 30 subagent transcripts)

Each run is: interview conversation → Project Orchestrator → 3 survey explorers (M0, ~3.5 min) → all workers **in parallel** (run 02: 8 started at 20:09:30Z, done by 20:14:27Z — 5 min) → Success Auditor (2.5 min) → Independent Post-Victory Auditor (2 min) → Sentinel final report. Fixed overhead per run is about 12 minutes; the workers' part scales with the largest unit, not the count. **Bigger runs are cheaper per unit in wall time, in quota, and (per §2) in primary-conversation context.** The only untested edge is Teamwork's undocumented concurrent-stream limit: 11 concurrent conversations (8 workers + orchestrator + sentinel + primary) produced no 429.

### 9.7 D-010 as the evidence supports it

| parameter | value | basis |
|---|---|---|
| governing ceiling, Gemini 3.8 Flash | **25%** provisional (from 21) | 0 rot metrics through 18.08%; MRCR plateau 25% is the point where long-context recall stops degrading gracefully; compaction is not a ceiling (§4). Raise only on evidence: a conversation that peaks above 22% with zero rot metrics moves it to 28%. |
| reserve (close) | 2.9% measured → **3** | §2 |
| per-unit delta | **0.19** | §2 (replaces 0.53, which was per-run overhead spread over units) |
| per-run fixed | **4.6** now, **2.5** after §3 | new parameter in budget-params.json |
| run sizes | 8 → 12 → 16 → 24 | 8 is clean; each step needs one clean run first (§3 of the experiment doc) |
| unit cap | ≤ 50 KB **and ≤ 12 files** | §4 |
| max clean run | 8 → next probe 12 | run 03 |

`budget.ts` changes shape accordingly: `headroom = ceiling − used − reserve`; a run of n fits if `run_fixed + n × per_unit ≤ headroom`; recommend the largest series size that fits and is ≤ max_clean_run.

### 9.8 Remaining work — 295 pending units at the time of the capture (372 after the D-016 re-partition)

At 16 units per run: 19 runs. Two runs per conversation → 10 conversations of ~40 minutes each. Each conversation still needs one human action: paste PROMPT.md. The one thing that removes even that is the CLI's headless mode (`agy -p`, documented at antigravity.google/docs/cli/headless): a driver loop that starts a fresh conversation with PROMPT.md, waits for it to end, and starts the next until STATE.md says Phase 1 is complete. Whether `invoke_subagent` with `teamwork_preview` works headless is **undocumented — probe**; run 03 is the natural probe.

### 9.9 Is the work waiting on other work? Yes — 5 of 22 minutes are unit work

Run 02, every conversation's start and end relative to the paste (from the 17 transcripts of that run):

| minute | what is running | serial or parallel |
|---|---|---|
| 0.0 – 1.6 | primary agent: startup reads, checks, brief, dispatch | serial |
| 1.6 – 3.5 | Sentinel and Project Orchestrator start | serial |
| 3.5 – 7.0 | 3 survey explorers (Teamwork's M0 milestone) | 3 in parallel, but the workers wait for them |
| 7.0 – 8.1 | Orchestrator plans the worker milestones | serial |
| **8.1 – 13.1** | **8 workers, all started at 20:09:30Z** (3.0 – 5.0 min each) | **fully parallel — the only unit work** |
| 13.1 – 16.0 | Success Auditor | serial |
| 16.0 – 18.8 | Independent Post-Victory Auditor | serial |
| 18.8 – 19.2 | Sentinel final report | serial |
| 19.2 – 21.8 | primary agent: verify 8 units, record, next brief, handoff, commit | serial |

Unit work: 5.0 minutes of 21.8 (23%). Everything else is fixed, serial overhead that does not change with run size. Inside the worker window, the run finishes when the largest unit finishes (inv-addy-36, 49.5 KB, 5.0 min), so the worker window is set by the unit cap, not by the count.

#### The levers — parallelism only; nothing here changes what any agent reads or checks

1. **Bigger runs — free.** Going from 8 to 16 or 24 units adds workers to the same 5-minute window. Wall time per run stays ~22 min; throughput doubles or triples. Cost to the primary agent: 0.19% per unit. Only unknown: Antigravity's undocumented cap on simultaneous conversations (11 ran at once in run 02 with no error).
2. **Two or more runs at once from one conversation — probe.** `invoke_subagent` returned in 4 seconds and the primary sat idle receiving Sentinel messages, so it is asynchronous. The primary can dispatch run A and run B (disjoint units, separate `.teamwork/<run-id>` directories) back to back; the runs overlap; the primary verifies each when its final report arrives. Cost to the primary: one per-run fixed cost per run. This halves wall time per unit again.
3. **The headless driver removes the human gap.** Today the wall clock between conversations is however long until you paste. Run 02's conversation ended at 13:23 and nothing ran after it. The driver starts the next conversation the moment the previous one exits.

The survey explorers and the two auditors stay exactly as Teamwork runs them. They are part of the quality gate, not overhead to remove.

#### The parallelism calculation (added to budget.ts as D-010's second half)

Three measured quantities and two limits set how much work one conversation can run at once:

```
context:      S + k × (R + n × u) + C  ≤  ceiling          (S, R, u, C measured; §2)
concurrency:  k × (n + 2) + 1          ≤  stream_limit     (n workers + orchestrator + sentinel per run, + the primary)
worker time:  per-run wall ≈ 12 min fixed + time of the largest unit   (unit cap sets it, not n)

  n = units per run       k = runs dispatched at the same time
```

`budget.ts` recommends the largest (k, n) that satisfies the context line, with n ≤ max_clean_run and k ≤ max_clean_concurrency. Both maxima start at their measured values (8, 1) and step up one notch per clean run, exactly as the run-size series does now. The stream limit is unknown and is discovered the same way: a step up is clean only if the run shows zero quote-check FAIL, zero 429, and per-run wall time within 25% of the previous step — a longer wall time at the same unit sizes means the harness is queueing conversations, and that is the limit.

#### What the 295 remaining units cost in wall time

| plan | conversations | minutes each | total |
|---|---|---|---|
| today: n = 8, k = 1, one run per conversation | 37 | 22 | ~13.5 h |
| n = 16, k = 1, two runs per conversation one after the other | 10 | ~39 | ~6.5 h |
| n = 16, k = 2 | 10 | ~23 | ~3.8 h |
| n = 24, k = 2 | 7 | ~23 | ~2.7 h |

All four keep the same quality gates. Every step in n or k needs one clean run at the previous step first. Quota is the other bound: the same tokens are spent either way, only faster, so the five-hour bucket may bind before the stream limit does (the run's cost is not in the capture — `cost` was null in every log record; the statusline receives no cost field under plan login).

## 10. Findings from the test series (sessions 001–007, 2026-09-05; the basis of D-021)

Nine headless runs from one `drive.ts` command (sessions 004–006 alone: 100 units, 428 cards, 8,466 PASS / 0 FAIL repo-wide, `coverage.ts` clean, `memo.ts audit` 428 OK). The full record, block by block, is `rationale/13-test-series-and-final-parameters.md`; the capture is `brainv2capture20260904225801.zip`.

### 10.1 The primary conversation's context is not the limit at these sizes

Four Phase-1 conversations started at 8.26–8.51% (`start`), peaked at 19.0–21.2%, and closed by plan with 3.8–4.4% headroom. No rot metric in any of them. No compaction. The per-run cost, measured run-start → next run-start: first run of a conversation 5.9–6.8%, second run 1.8–3.8% — and no measurable dependence on `n` between 12 and 24 units (a 24-unit run cost 5.94%, a 12-unit first run 6.71%). The planning values `R = 4.6`, `u = 0.19` therefore over-estimate, which is the safe direction; they stay.

### 10.2 Wall time is the Orchestrator's decomposition, not the harness

| run | units | Workers | shape | wall (min) | quality |
|---|---|---|---|---|---|
| p1-run-02 | 12 | 12 | all at once | 15.6 | 627 PASS / 0 FAIL |
| p1-run-03 | 12 | 12 | all at once | 13.0 | 663 / 0 |
| p1-run-04 | 16 | 16 | all at once | 12.6 | 2,086 / 0 (probe → `max_clean_run` 16) |
| p1-run-05 | 12 | 6 | 2 units per Worker | 23.2 | 803 / 0 |
| p1-run-06 | 24 | 8 | 3 units per Worker | 27.6 | 927 / 0 (probe; wall bound failed) |
| p1-run-07 | 16 | 18 | five sequential gated milestones, a second-generation Orchestrator | 65.1 | 2,161 / 0 |

Same unit caps, same model, zero 429s in every run's files: the wall time tracks Workers-per-unit and milestone gating, not `n`. So the step-up rule's wall-time bound measured the Orchestrator in runs 05–07, and the 24-unit verdict ("not clean: 27.6 > 15.75") is void as a harness measurement. Two consequences (D-021): the brief now requires one Worker per unit, all at once, which also keeps the §6.5 caps true per Worker context; and the wall-time test counts only between runs of that shape. `run_sizes` is `[8, 12, 16, 24, 32, 48]` with `max_clean_run = 16`; 24 is probed again under the new brief.

### 10.3 What else the series showed

- **The agent recorded `run-start` counts it had not been given** (`n=16` then `n=12`, twice; `n=2` then `n=1` against a STOP). `budget.ts --record run-start` now refuses a count that is not the current plan's `n`.
- **agy ended session 004 with status ERROR** ("The stream was interrupted") *after* the agent's final paragraph; the handoff, results and close were all committed (HEAD e78eef0), and the driver went on. The driver now shows such a conversation as finished (yellow), not as a failure.
- **`k = 2` ran to completion but is not a measurement**: session 007 dispatched `p1-run-08` and `p1-run-09` (16 units each; the plan cost 15.28% of a 15.63% headroom). Ctrl-C on the driver killed only the driver; the conversation ran on, verified and committed run 08 about 51 minutes after dispatch, and was stamping run 09 when it was killed the next morning. Two simultaneous runs work; their shape and run 09's quality were never inspected, so `max_clean_concurrency` stays 1. The calculation grows `n` before `k`, so `k` is probed again only once the largest run size is proven and two of them fit.
- **Ctrl-C on the driver does not stop the conversation** — fixed: the driver now kills its agy child on interrupt; the STOP file is the graceful stop.
- **Two harness quirks cost one step each per conversation**, harmless: the first sandboxed `run_command` fails with `sandbox configuration error: deny ~/.ssh/**: globs not supported` (the `read_file(~/.ssh/**)` deny rule in `settings.json`), and `write_to_file` into the repository is refused in headless mode (`artifacts must be in …/antigravity-cli/brain/<conversation>/`), after which the agent writes the file with a heredoc. `PROMPT.md` now says both.
- **Sessions 002–003 stopped for Peter** because a METHOD edit between sessions invalidated every memo stamp (whole-file hash) — the D-020 fix (contract-section hash, `memo.ts restamp`) held for the rest of the series: 428 OK, 0 STALE at session 007's start.

