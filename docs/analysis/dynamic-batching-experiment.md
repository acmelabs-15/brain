# Dynamic batching experiment — protocol and results (becomes D-010)

Purpose: find how much work one primary-agent conversation can carry **without approaching context rot**, and how the Teamwork run behind it behaves under load. Quota is not the objective. Every number below is either measured (with the command that produced it) or marked *to measure*. Every harness claim carries a citation to `antigravity.google`; a behaviour the documentation does not state is written as `undocumented — probe`, never filled in.

## 1. Architecture under test (D-014)

The primary agent (this conversation) reads METHOD/STATE, writes an interview brief, waits while Peter runs `/teamwork-preview`, receives Sentinel progress reports, verifies with `coverage.ts` and `quote-check.ts`, records, commits. It never reads a source file for inventory and never writes a card. Inside the run, the Project Orchestrator fans units out to Workers; Critic and Auditor judge against the interview rubric; the Success Auditor confirms.

Where context rot can occur, and what bounds it:

| Where | Bound | How measured |
|---|---|---|
| Primary agent | the stopping rule in §3 | `context_window.used_percentage` at session start, after dispatch, after each Sentinel report |
| Project Orchestrator (inside the run) | §6.5 unit sizing (≤ ~50 KB source per unit); Teamwork's documented self-succession between milestones | transcript read *after* the run completes (never during a session as orientation) |
| Workers | one unit each, fresh context | `quote-check.ts` FAIL rate per unit; empty required fields |

## 2. Baselines from disk (measured before the reset)

Recorded here so the reset does not lose them. Produced by `quote-check.ts --all --summary` and `coverage.ts` on the pre-reset tree (212 cards written by one-team-per-unit dispatch with an agent-run interview), sources at the pinned SHAs, external snapshots absent on the measuring machine:

```
quote-check: 5087 PASS, 1117 FAIL (61 of them off by one line), 1571 MISSING source, across 212 card(s); 173 card(s) with failures
```

(Measured 2026-09-04 on Peter's machine):
```
quote-check: 6208 PASS, 1228 FAIL (61 of them off by one line), 339 MISSING source, across 212 card(s); 188 card(s) with failures
```

18% of resolvable citations were not byte-exact at the cited line; 82% of cards carried at least one such citation. Failure classes seen by hand: paraphrase in a verbatim field ("check placement by cost" for "Place each check by cost"), off-by-one line numbers, a term cited at a line that does not contain it, a path cited where only the skill's name appears. This is the number the new contract (Worker runs `quote-check.ts` before returning; Auditor re-runs it) must drive to zero.

## 3. Stopping rule (primary agent)

Dispatch while `used + largest_observed_per_unit_delta + reserve < budget`.

- `used` — `context_window.used_percentage` now.
- `per_unit_delta` — the increase in `used` from one Sentinel report; the largest seen so far in this conversation.
- `reserve` — what §8.3 needs to close the session (measure once: start-of-8.3 to commit).
- `budget` — the smallest `used` at which any rot metric (§4) was observed, minus a margin; *to measure*. Until measured, no number is written anywhere in METHOD or STATE.

## 4. Rot metrics (operational, recorded with `used` at that moment)

Primary agent: a §7 step skipped; a unit checked off without read-back; `STATE.md` counts diverging from the unit table; a decision cited that does not exist in `DECISIONS.md`; a role or file referred to by a name that is not its documented name.

Units: any `quote-check.ts` FAIL on a returned card; an empty required field; a package prefix dropped (R4); a `coverage.ts` regression.

## 5. Concurrency inside a run

Teamwork sizes its own team; the documented steering is the prompt wording ("keep it small" forces the non-decomposing path) and a request for "a very large team" (math only). What is measured per run: units in the run, wall time per unit (from the run's progress artifact timestamps), 429 onset and `quota.reset_in_seconds` (statusline), Success Auditor sandbox failures (EBUSY/OOM/timeouts), and the per-unit `quote-check.ts` FAIL count. A run is stepped up (more units per batch) only when the previous step showed none of §4.

## 6. Harness facts, cited

- Teamwork scope, roles, integrity modes, Project Working Directory, exclusive file ownership, Orchestrator succession: https://antigravity.google/docs/teamwork
- Subagents: `model: inherit|flash|pro`, fresh context per invocation, nesting depth 10, custom agents at `.agents/agents/<name>.md`: https://antigravity.google/docs/subagents
- Boost: three-tier pipeline, "Seconds to hours", test-suite verification, comparison table with Teamwork: https://antigravity.google/docs/boost
- Statusline payload (`context_window.used_percentage`, `quota{}.reset_in_seconds`, `agent_state`, `task_count`): https://antigravity.google/docs/cli/statusline
- Headless `stream-json` events incl. `subagent_info` and `usage.cache_read_tokens`: https://antigravity.google/docs/cli/headless
- Quota is one shared pool drawn down at API-pricing ratios; five-hour and weekly buckets: https://antigravity.google/blog/changes-to-antigravity-plans
- 429 behaviour: retries, then stop; resume by telling the team "Continue"; watchdog cron respawns a stale worker from its progress files; "keep your machine awake": https://antigravity.google/blog/google-antigravity-built-an-os
- Concurrent stream limit exists, value undocumented: https://github.com/google-antigravity/antigravity-cli/blob/main/CHANGELOG.md (1.1.21)
- Automatic conversation summarisation in the Antigravity CLI: **undocumented — probe.** No setting found that enables or disables it; the stopping rule keeps `used` far below where it could trigger.
- Cache discount under plan login: **undocumented — probe** (`cache_read_tokens` is reported since CLI 1.1.13; whether it reduces quota draw-down is not stated).

## 7. Results

### run 01

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

### run 02

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

## 8. Objective

Not quota. No session approaches the rot metrics; within that, the most work per session. Quota savings only where they cost nothing in quality (M1–M5).
