---
package: rjm
path: scripts/metrics/kill_criteria.py
type: script
bytes: 19854
unit: inv-rjm-254
in_scope_via: .github/workflows/drift-detection.yml
aliases: []
memo_inputs:
  - {path: scripts/metrics/kill_criteria.py, sha256: df07f1498c8f0ffe5579934dc3331a3e5de5d023fd502207bfb31cb7ea8dc686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/metrics/kill_criteria.py

## Purpose — required, verbatim
> "Canonical emitter for REQ-008-09 kill-criteria (K1-K4) telemetry." — scripts/metrics/kill_criteria.py:2

## Design intent — required
Centralizes the JSONL schema and telemetry emission logic for the four REQ-008-09 review convergence kill criteria (K1-K4), preventing drift among disparate writers (drift-guard hook, drift-check CI job, vendored-install verification, and local vs CI verdict comparison). Provides an append-only event emitter with optional file locking and a trailing 30-day reporting/rollup CLI that evaluates count thresholds to signal warnings or hard rollback requirements before or upon firing.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments: `"--kind"` — scripts/metrics/kill_criteria.py:222, `"--detail"` — scripts/metrics/kill_criteria.py:227, `"--events-path"` — scripts/metrics/kill_criteria.py:231, and subcommand `"report"` — scripts/metrics/kill_criteria.py:238
- Telemetry events file `".agents/metrics/drift-events.jsonl"` — scripts/metrics/kill_criteria.py:85

## Outputs — required
- Telemetry events appended to `".agents/metrics/drift-events.jsonl"` — scripts/metrics/kill_criteria.py:85
- Standard output formatted JSON event string or markdown report table `"## Kill-Criteria Drift Telemetry (REQ-008-09)"` — scripts/metrics/kill_criteria.py:440
- Process exit codes: 0 (event written or clear report), 1 (kill criterion fired), 2 (usage/configuration error), 3 (external file failure) — scripts/metrics/kill_criteria.py:57-61

## Invokes — required
- script hook_utilities — scripts/metrics/kill_criteria.py:121

## Invoked by — required
- script emit_event — scripts/metrics/check_vendored_install.py:36
- script emit_event — scripts/metrics/emit_verdict_mismatch.py:31
- config .github/workflows/drift-detection.yml — .github/workflows/drift-detection.yml:44

## Concepts named — required, verbatim
- `REQ-008-09` — scripts/metrics/kill_criteria.py:2 — used here
- `kill-criteria` — scripts/metrics/kill_criteria.py:2 — defined here | used here
- `K1` — scripts/metrics/kill_criteria.py:16 — defined here | used here
- `K2` — scripts/metrics/kill_criteria.py:18 — defined here | used here
- `K3` — scripts/metrics/kill_criteria.py:19 — defined here | used here
- `K4` — scripts/metrics/kill_criteria.py:21 — defined here | used here
- `schemaVersion` — scripts/metrics/kill_criteria.py:29 — defined here | used here
- `rollover window` — scripts/metrics/kill_criteria.py:30 — defined here | used here
- `System of record` — scripts/metrics/kill_criteria.py:33 — used here
- `SoR` — scripts/metrics/kill_criteria.py:33 — used here
- `secret-redaction` — scripts/metrics/kill_criteria.py:40 — used here
- `Weekly rollup` — scripts/metrics/kill_criteria.py:49 — defined here | used here
- `ADR-035` — scripts/metrics/kill_criteria.py:56 — used here
- `KillCriterion` — scripts/metrics/kill_criteria.py:75 — defined here | used here
- `VALID_KINDS` — scripts/metrics/kill_criteria.py:77 — defined here
- `ORDERED_KINDS` — scripts/metrics/kill_criteria.py:80 — defined here
- `SCHEMA_VERSION` — scripts/metrics/kill_criteria.py:82 — defined here
- `EVENTS_RELPATH` — scripts/metrics/kill_criteria.py:85 — defined here
- `WINDOW_DAYS` — scripts/metrics/kill_criteria.py:90 — defined here
- `KILL_THRESHOLDS` — scripts/metrics/kill_criteria.py:99 — defined here
- `CriterionStatus` — scripts/metrics/kill_criteria.py:294 — defined here
- `CriterionRollup` — scripts/metrics/kill_criteria.py:298 — defined here
- `approaching` — scripts/metrics/kill_criteria.py:305 — defined here | used here
- `fired` — scripts/metrics/kill_criteria.py:305 — defined here | used here
- `build_event` — scripts/metrics/kill_criteria.py:132 — defined here
- `emit_event` — scripts/metrics/kill_criteria.py:178 — defined here
- `count_events_in_window` — scripts/metrics/kill_criteria.py:371 — defined here
- `build_rollups` — scripts/metrics/kill_criteria.py:398 — defined here
- `render_report` — scripts/metrics/kill_criteria.py:425 — defined here
- `report_events` — scripts/metrics/kill_criteria.py:470 — defined here

## Structure
- Module docstring and specification — scripts/metrics/kill_criteria.py:2
- Type definitions and constants — scripts/metrics/kill_criteria.py:75
- File locking helper _try_lock_helpers — scripts/metrics/kill_criteria.py:107
- Event construction and append logic — scripts/metrics/kill_criteria.py:132
- Argument parsing and path sanitization — scripts/metrics/kill_criteria.py:213
- Read side and aggregation logic — scripts/metrics/kill_criteria.py:298
- Markdown report rendering render_report — scripts/metrics/kill_criteria.py:425
- CLI execution handlers and main entry point — scripts/metrics/kill_criteria.py:502

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/metrics/kill_criteria.py`
- **language:** Python
- **lines:** 547
- **documented invocation:**
  `python3 scripts/metrics/kill_criteria.py report >> "$GITHUB_STEP_SUMMARY"` — .github/workflows/drift-detection.yml:62
  `prog="kill_criteria"` — scripts/metrics/kill_criteria.py:214
- **executed:** yes
- **actual command:** `python3 scripts/metrics/kill_criteria.py report`
- **actual stdout:**
```
## Kill-Criteria Drift Telemetry (REQ-008-09)

Trailing 30-day window ending 2026-09-06 (UTC).

ALERT: kill criteria fired: K3. Roll back per REQ-008-09.

| Kind | Criterion | Count | Threshold | Status |
| --- | --- | --- | --- | --- |
| K1 | drift hook false positives | 0 | 3 | ok |
| K2 | generator-induced CI regressions | 0 | 3 | ok |
| K3 | vendored install breakage | 2 | 1 | FIRED |
| K4 | local-vs-CI verdict drift | 2 | 3 | approaching |
```
- **actual exit code:** 1
- **documented exit codes vs actual:**
  - `0 = event written, or report produced with no criterion fired` — scripts/metrics/kill_criteria.py:57 vs `return 0` — scripts/metrics/kill_criteria.py:529
  - `1 = report produced and at least one kill criterion has fired (logic /` — scripts/metrics/kill_criteria.py:58 vs `return 1` — scripts/metrics/kill_criteria.py:510
  - `2 = usage / configuration error (bad arguments, unknown kind, unsafe path)` — scripts/metrics/kill_criteria.py:60 vs `return 2` — scripts/metrics/kill_criteria.py:522, 539
  - `3 = external failure (could not write or read the metrics file)` — scripts/metrics/kill_criteria.py:61 vs `return 3` — scripts/metrics/kill_criteria.py:508, 527
  - Process exit via `sys.exit(main())` — scripts/metrics/kill_criteria.py:546
- **gate check:** Exits non-zero on fired kill criteria (1), usage error (2), or I/O failure (3). On default branch, `report` exits 1 because K3 has fired (2 events observed, threshold 1).
- **output match:** Output matches the documented format and REQ-008-09 specification exactly.

## Defects — required
none

## Observations
Demonstrates defensive file locking via `hook_utilities` with automatic fallback to un-locked append, strict input validation confining paths to the repository root without traversal (`_safe_events_path`), and resilient JSONL parsing that ignores malformed lines so a crashed writer cannot poison rollup reporting.

## Context cost
19854 bytes, 547 lines, plus `scripts/hook_utilities/` (15212 bytes total across utilities.py, bootstrap.py, guards.py, path_safety.py). Total ~35066 bytes, ~8200 tokens.
