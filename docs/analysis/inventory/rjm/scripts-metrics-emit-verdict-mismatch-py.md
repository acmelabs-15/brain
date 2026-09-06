---
package: rjm
path: scripts/metrics/emit_verdict_mismatch.py
type: script
bytes: 2809
unit: inv-rjm-253
in_scope_via: scripts/metrics/kill_criteria.py
aliases: []
memo_inputs:
  - {path: scripts/metrics/emit_verdict_mismatch.py, sha256: bb9b925ea22ea3bba761f71fb4a48fe260babaacee0fd4cb0c9e1302c7be8e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/metrics/emit_verdict_mismatch.py

## Purpose — required, verbatim
> "K4 emission point: record a local-vs-CI /review verdict mismatch." — scripts/metrics/emit_verdict_mismatch.py:2

## Design intent — required
Provides the automated telemetry emission gate for REQ-008-09 Kill Criterion 4 (K4: local-vs-CI verdict drift). Compares local and CI `/review` verdicts for a given commit using canonical verdict normalization from `scripts.ai_review_common.verdict.merge_verdicts`. When verdicts diverge, it records a single K4 event containing the commit SHA and normalized verdicts in `.agents/metrics/drift-events.jsonl`, enabling tracking against the threshold of 3+ mismatches in 30 days.

## Phase — required
rjm:review

## Inputs — required
- CLI options:
  - `--commit`: "Commit SHA under review." — scripts/metrics/emit_verdict_mismatch.py:50
  - `--local`: "Local /review verdict." — scripts/metrics/emit_verdict_mismatch.py:51
  - `--ci`: "CI /review verdict." — scripts/metrics/emit_verdict_mismatch.py:52

## Outputs — required
- Telemetry event of kind `K4` appended to `.agents/metrics/drift-events.jsonl` via `scripts.metrics.kill_criteria.emit_event` when verdicts differ (scripts/metrics/emit_verdict_mismatch.py:67)
- Console message: "verdicts match; no K4 event emitted." to stdout when matching, or "verdict MISMATCH; K4 kill-criteria event emitted." to stderr when differing (scripts/metrics/emit_verdict_mismatch.py:60, 71)
- Process exit codes: 0 (verdicts match), 1 (verdicts differ), 2 (usage error) (scripts/metrics/emit_verdict_mismatch.py:15-17, 61, 70, 72)

## Invokes — required
- script verdict — scripts/metrics/emit_verdict_mismatch.py:30
- script kill_criteria — scripts/metrics/emit_verdict_mismatch.py:31

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `K4` — scripts/metrics/emit_verdict_mismatch.py:2 — defined here
- `REQ-008-09` — scripts/metrics/emit_verdict_mismatch.py:4 — used here
- `ADR-035` — scripts/metrics/emit_verdict_mismatch.py:14 — used here
- `verdicts_match` — scripts/metrics/emit_verdict_mismatch.py:34 — defined here
- `_canonical_verdict` — scripts/metrics/emit_verdict_mismatch.py:39 — defined here
- `_parse_args` — scripts/metrics/emit_verdict_mismatch.py:45 — defined here
- `main` — scripts/metrics/emit_verdict_mismatch.py:56 — defined here

## Structure
- Module docstring and exit code specifications — scripts/metrics/emit_verdict_mismatch.py:1
- Path setup and helper imports — scripts/metrics/emit_verdict_mismatch.py:26
- Verdict comparison and normalization functions — scripts/metrics/emit_verdict_mismatch.py:34
- CLI argument parsing function — scripts/metrics/emit_verdict_mismatch.py:45
- main entrypoint and mismatch emission — scripts/metrics/emit_verdict_mismatch.py:56

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/metrics/emit_verdict_mismatch.py`
- **language:** Python (python3)
- **lines:** 77
- **documented invocation:**
  - `none` (standard CLI script, executed as `emit_verdict_mismatch --commit COMMIT --local LOCAL --ci CI`)
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/metrics/emit_verdict_mismatch.py --commit abc1234 --local PASS --ci pass`
- **abridged stdout:** `verdicts match; no K4 event emitted.`
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 = verdicts match (no K4 emitted)" — scripts/metrics/emit_verdict_mismatch.py:15
    - "1 = verdicts differ (K4 emitted)" — scripts/metrics/emit_verdict_mismatch.py:16
    - "2 = usage error (missing arguments)" — scripts/metrics/emit_verdict_mismatch.py:17
  - Actual code paths:
    - `return 0` — scripts/metrics/emit_verdict_mismatch.py:61
    - `return 1` — scripts/metrics/emit_verdict_mismatch.py:70
    - `return 1` — scripts/metrics/emit_verdict_mismatch.py:72
    - `sys.exit(main())` — scripts/metrics/emit_verdict_mismatch.py:76
  - Result: Documented exit codes match actual exit paths in code.
- **for validators/gates:**
  - Can exit non-zero: yes, exits 1 when verdicts diverge, exits 2 on argument parsing errors.
  - Verified on default branch: exits 0 when verdicts match (`--local PASS --ci pass`), exits 1 when verdicts diverge (`--local PASS --ci FAIL`).
- **does the output match what the documentation claims:** yes, normalizes case and trims whitespace to compare verdicts accurately.

## Defects — required
none

## Observations
- Uses `merge_verdicts([token])` from `scripts.ai_review_common.verdict` to ensure verdict canonicalization matches the review pipeline's consensus logic.

## Context cost
2809 bytes, 77 lines, plus `scripts/ai_review_common/verdict.py` (5200 bytes) and `scripts/metrics/kill_criteria.py` (19854 bytes). Total ~27863 bytes, ~6400 tokens.
