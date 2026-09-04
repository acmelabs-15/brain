# Dynamic Batching Experiment

## 1. Baselines from disk
*Measurement to come.* (Will read the 35 done units from `docs/analysis/inventory/addy/_units/`, count sizes of inventory entries and Sentinel reports, and extract per-unit wall time from Level-3 orchestrator transcripts on disk).

## 2. Measure orchestrator context
*Measurement to come.* (Will record `context_window.used_percentage` via statusline JSON or `/context` at session start, after dispatch, and after each Sentinel report to establish true per-unit orchestrator context cost).
Stopping rule: dispatch while `used + largest_observed_per_unit_delta + reserve < budget`.

## 3. Rot metrics, operational
*Measurement to come.* (Will monitor primary agent: skipped METHOD §7 steps, units checked off without read-back, STATE.md divergence, or fabricated citations. Will monitor units: missing `path:line` on verbatim fields, empty required fields, dropped package prefixes, or regressions in `coverage.ts` and `glossary-lint.ts`. Will record per unit alongside context-used at that moment).

## 4. Concurrency step-up
*Measurement to come.* (Will step from 5 teams to 8, 12, and 16. At each step, record 429 onset, `quota.reset_in_seconds`, auditor sandbox failures like EBUSY/OOM/timeouts, unit wall-time inflation, and any rot metric. The concurrency bound is the largest step with zero issues, with date and plan tier noted).

## 5. Harness facts
Every claim about Teamwork or Antigravity behaviour carries a URL to `antigravity.google` docs, changelog, or blog. Silence is recorded as "undocumented — probe".

## 6. Objective
Not quota. No session approaches the rot metrics; within that, the most work per session. Quota savings only where they cost nothing in quality.
