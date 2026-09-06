---
package: rjm
path: scripts/metrics/kill_criteria.py
type: script
bytes: 19854
unit: inv-rjm-254
in_scope_via: scripts/pr_branch_mapping.py
aliases: []
memo_inputs:
  - {path: scripts/metrics/kill_criteria.py, sha256: df07f1498c8f0ffe5579934dc3331a3e5de5d023fd502207bfb31cb7ea8dc686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/metrics/kill_criteria.py

## Purpose — required, verbatim
> "Canonical emitter for REQ-008-09 kill-criteria (K1-K4) telemetry." — scripts/metrics/kill_criteria.py:2

## Design intent — required
Provides a centralized, canonical module and CLI for emitting and rolling up telemetry on REQ-008-09 kill criteria (K1–K4) to track convergence health across drift-guard hooks, CI jobs, vendored installations, and local vs. CI verdicts. By unifying the append-only JSONL schema and locking logic in one place, it prevents emission points from drifting apart and enables scheduled reporting to warn maintainers before rollback thresholds are reached.

## Phase — required
cross-phase

## Inputs — required
- CLI options:
  - `--kind`: "Kill criterion to record (K1, K2, K3, or K4)." — scripts/metrics/kill_criteria.py:224
  - `--detail`: "Free-text description of the trigger (caller-controlled)." — scripts/metrics/kill_criteria.py:228
  - `--events-path`: "Override for the events JSONL file (default: repo metrics file)." — scripts/metrics/kill_criteria.py:233
  - `report` subcommand: "Print a weekly markdown rollup of trailing-window kill-criteria counts." — scripts/metrics/kill_criteria.py:239
- On-disk events store: `.agents/metrics/drift-events.jsonl` (scripts/metrics/kill_criteria.py:85)

## Outputs — required
- Append-only JSONL event lines written to `.agents/metrics/drift-events.jsonl` (or `--events-path`)
- Markdown rollup report printed to stdout in `report` mode containing weekly status table and alerts (scripts/metrics/kill_criteria.py:440-466)
- JSON event representation emitted to stdout in emit mode (scripts/metrics/kill_criteria.py:528)
- Process exit codes: 0 (success / no criterion fired), 1 (kill criterion fired), 2 (usage/config error), 3 (external I/O failure) (scripts/metrics/kill_criteria.py:57-61)

## Invokes — required
- script hook_utilities — scripts/metrics/kill_criteria.py:121

## Invoked by — required
- script pr_branch_mapping.py — scripts/pr_branch_mapping.py:125
- script update_reviewer_signal_stats.py — scripts/update_reviewer_signal_stats.py:389
- script error_classification.py — scripts/error_classification.py:163

## Concepts named — required, verbatim
- `REQ-008-09` — scripts/metrics/kill_criteria.py:2 — used here
- `K1` — scripts/metrics/kill_criteria.py:16 — used here
- `K2` — scripts/metrics/kill_criteria.py:18 — used here
- `K3` — scripts/metrics/kill_criteria.py:19 — used here
- `K4` — scripts/metrics/kill_criteria.py:21 — used here
- `KillCriterion` — scripts/metrics/kill_criteria.py:75 — defined here
- `VALID_KINDS` — scripts/metrics/kill_criteria.py:77 — defined here
- `ORDERED_KINDS` — scripts/metrics/kill_criteria.py:80 — defined here
- `SCHEMA_VERSION` — scripts/metrics/kill_criteria.py:82 — defined here
- `EVENTS_RELPATH` — scripts/metrics/kill_criteria.py:85 — defined here
- `WINDOW_DAYS` — scripts/metrics/kill_criteria.py:90 — defined here
- `KILL_THRESHOLDS` — scripts/metrics/kill_criteria.py:99 — defined here
- `build_event` — scripts/metrics/kill_criteria.py:132 — defined here
- `emit_event` — scripts/metrics/kill_criteria.py:178 — defined here
- `CriterionStatus` — scripts/metrics/kill_criteria.py:294 — defined here
- `CriterionRollup` — scripts/metrics/kill_criteria.py:298 — defined here
- `count_events_in_window` — scripts/metrics/kill_criteria.py:371 — defined here
- `build_rollups` — scripts/metrics/kill_criteria.py:398 — defined here
- `render_report` — scripts/metrics/kill_criteria.py:425 — defined here
- `report_events` — scripts/metrics/kill_criteria.py:470 — defined here

## Structure
- Canonical emitter module docstring and kill criteria definitions — scripts/metrics/kill_criteria.py:1
- Type definitions and module constants — scripts/metrics/kill_criteria.py:75
- Lock helper import and repo root resolution — scripts/metrics/kill_criteria.py:107
- Event construction and file append functions — scripts/metrics/kill_criteria.py:132
- CLI argument parsing and safe path validation — scripts/metrics/kill_criteria.py:206
- Report data structures and window calculations — scripts/metrics/kill_criteria.py:294
- Rollup rendering and report generation — scripts/metrics/kill_criteria.py:398
- CLI execution entry points for report and emit — scripts/metrics/kill_criteria.py:502

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/metrics/kill_criteria.py`
- **language:** Python (python3)
- **lines:** 547
- **documented invocation:**
  - `python3 scripts/metrics/kill_criteria.py --help`
  - `python3 scripts/metrics/kill_criteria.py report`
- **executed:** yes
- **actual command run:** `python3 scripts/metrics/kill_criteria.py report`
- **abridged stdout:**
```markdown
## Kill-Criteria Drift Telemetry (REQ-008-09)

Trailing 30-day window ending 2026-09-06 (UTC).

All clear: no kill criterion is within one event of its limit.

| Kind | Criterion | Count | Threshold | Status |
| --- | --- | --- | --- | --- |
| K1 | drift hook false positives | 0 | 3 | ok |
| K2 | generator-induced CI regressions | 0 | 3 | ok |
| K3 | vendored install breakage | 0 | 1 | ok |
| K4 | local-vs-CI verdict drift | 0 | 3 | ok |
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 = event written, or report produced with no criterion fired" — scripts/metrics/kill_criteria.py:57
    - "1 = report produced and at least one kill criterion has fired (logic /" — scripts/metrics/kill_criteria.py:58
    - "2 = usage / configuration error (bad arguments, unknown kind, unsafe path)" — scripts/metrics/kill_criteria.py:60
    - "3 = external failure (could not write or read the metrics file)" — scripts/metrics/kill_criteria.py:61
  - Actual code paths:
    - `return 1 if any_fired else 0` — scripts/metrics/kill_criteria.py:510
    - `return 0` — scripts/metrics/kill_criteria.py:529
    - `return 2` — scripts/metrics/kill_criteria.py:522
    - `return 2` — scripts/metrics/kill_criteria.py:539
    - `return 3` — scripts/metrics/kill_criteria.py:508
    - `return 3` — scripts/metrics/kill_criteria.py:527
    - `sys.exit(main())` — scripts/metrics/kill_criteria.py:546
  - Result: Documented exit codes match actual exit paths in code.
- **for validators/gates:**
  - Can exit non-zero: Exits 1 when a kill criterion threshold is reached (fired), 2 on CLI usage or argument error, 3 on file I/O error.
  - Verified on repository default branch: `python3 scripts/metrics/kill_criteria.py report` exits 0 (all clear, 0 events recorded).
- **does the output match what the documentation claims:** yes, produces the formatted markdown table with K1-K4 telemetry statuses.

## Defects — required
none

## Observations
- Features defensive file locking via `hook_utilities.lock_file` with fallback to unlocked append if unavailable.
- Rigorous path sanitization in `_safe_events_path` prevents directory traversal or absolute path overrides.

## Context cost
19854 bytes, 547 lines, ~4500 tokens.
