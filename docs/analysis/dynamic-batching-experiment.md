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

*To measure.* One subsection per run: run-id, units, `used` before/after each report, per-unit deltas, rot metrics observed (or none), 429s, wall times, `quote-check.ts` totals for the run's cards, Success Auditor report path under `.teamwork/<run-id>/`. When two consecutive runs show no rot metric at a `used` ceiling, that ceiling minus the margin is proposed as D-010 via §11.

## 8. Objective

Not quota. No session approaches the rot metrics; within that, the most work per session. Quota savings only where they cost nothing in quality (M1–M5).
