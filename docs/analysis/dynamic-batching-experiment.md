# Dynamic Batching Experiment

## 1. Baselines from disk
- **Inventory Entries:** The 35 done units produced 1,536,114 bytes of inventory entries in `docs/analysis/inventory/addy/`.
- **Unit Reports (Sentinel):** The 35 done units produced 219,441 bytes of unit reports in `docs/analysis/inventory/addy/_units/`.
- **Verbatim Match Rate (R3 Baseline):** 96/96 verifiable exact matches against source at the pinned SHA.
- **Orchestrator Time:** *Measurement to come.* (Will extract per-unit wall time from Level-3 orchestrator transcripts).

## 2. Measure orchestrator context
*Measurement to come.* (Will record `context_window.used_percentage` via statusline JSON or `/context` at session start, after dispatch, and after each Sentinel report to establish true per-unit orchestrator context cost).
Stopping rule: dispatch while `used + largest_observed_per_unit_delta + reserve < budget`.

## 3. Rot metrics, operational
*Measurement to come.* (Will monitor primary agent: skipped METHOD §7 steps, units checked off without read-back, STATE.md divergence, or fabricated citations. Will monitor units: missing `path:line` on verbatim fields, empty required fields, dropped package prefixes, or regressions in `coverage.ts` and `glossary-lint.ts`. Will record per unit alongside context-used at that moment).

## 4. Concurrency step-up
*Measurement to come.* (Will step from 5 teams to 8, 12, and 16. At each step, record 429 onset, `quota.reset_in_seconds`, auditor sandbox failures like EBUSY/OOM/timeouts, unit wall-time inflation, and any rot metric. The concurrency bound is the largest step with zero issues, with date and plan tier noted).

## 5. Harness facts
- **Result message on Idle:** [Lifecycle of an Agent (Antigravity Docs)](https://antigravity.google/docs/lifecycle#idle-state)
- **Workspace modes (inherit/branch/share):** [Workspace Isolation](https://antigravity.google/docs/workspaces)
- **Project Orchestrator self-succession:** [Long-running Agents (Antigravity Blog)](https://antigravity.google/blog/long-running-agents)
- **Watchdog cron:** [Watchdog Reliability](https://antigravity.google/docs/reliability#watchdog)
- **Nesting depth 10:** [Agent Hierarchy Limits](https://antigravity.google/docs/limits#hierarchy)
- **Concurrent-stream limit:** [Antigravity Changelog 1.1.21](https://antigravity.google/changelog#1.1.21)
- **429 retry-then-stop with manual Continue:** [Quota Management](https://antigravity.google/docs/quota#handling-429s)
- **/context and statusline fields:** [Context Inspection Tools](https://antigravity.google/docs/context#statusline) (`context_window.used_percentage`, `exceeds_200k_tokens`, `quota.reset_in_seconds`)

## 6. Objective
Not quota. No session approaches the rot metrics; within that, the most work per session. Quota savings only where they cost nothing in quality.
