---
package: rjm
path: scripts/ci/drift_collect_details.py
type: script
bytes: 2875
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/drift_collect_details.py, sha256: 417fbff30ed3205ffd3118787599df92da6d149f4f69f525ea042ee7bba377b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/drift_collect_details.py

## Purpose — required, verbatim
> "Collect drift details: re-run detection with JSON output, parse results." — scripts/ci/drift_collect_details.py:2

## Design intent — required
Re-executes agent drift detection with JSON output, invokes `parse_drift_results.py` to write formatted markdown details and count files, and exports `agents_count` to GitHub Actions outputs or stdout, replacing inline shell logic per ADR-006 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"RUNNER_TEMP"` — scripts/ci/drift_collect_details.py:46
- Environment variable `"GITHUB_OUTPUT"` — scripts/ci/drift_collect_details.py:36
- Detection output JSON file `"drift-results.json"` — scripts/ci/drift_collect_details.py:49
- Count file `"drift-count.txt"` — scripts/ci/drift_collect_details.py:74

## Outputs — required
- Results file `"drift-results.json"` — scripts/ci/drift_collect_details.py:49
- Details markdown file `"drift-details.md"` — scripts/ci/drift_collect_details.py:73
- Count file `"drift-count.txt"` — scripts/ci/drift_collect_details.py:74
- Output parameter `"agents_count"` — scripts/ci/drift_collect_details.py:94 to `GITHUB_OUTPUT` or stdout

## Invokes — required
- script build/scripts/detect_agent_drift.py — scripts/ci/drift_collect_details.py:53
- script scripts/ci/parse_drift_results.py — scripts/ci/drift_collect_details.py:79

## Invoked by — required
orphan

## Concepts named — required, verbatim
`drift-detection` — scripts/ci/drift_collect_details.py:4 — used here
`ADR-006` — scripts/ci/drift_collect_details.py:4 — used here
`ADR-035` — scripts/ci/drift_collect_details.py:17 — used here
`RUNNER_TEMP` — scripts/ci/drift_collect_details.py:15 — used here
`GITHUB_OUTPUT` — scripts/ci/drift_collect_details.py:36 — used here
`agents_count` — scripts/ci/drift_collect_details.py:94 — defined here
`EXIT_OK` — scripts/ci/drift_collect_details.py:30 — defined here
`EXIT_ERR` — scripts/ci/drift_collect_details.py:31 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/drift_collect_details.py`, language: Python 3, lines: 105
- documented invocation: `"Collect drift details: re-run detection with JSON output, parse results." — scripts/ci/drift_collect_details.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/drift_collect_details.py`, abridged stdout: `agents_count=2`, **actual exit code**: 0
- documented exit codes: `"0 - details collected and agents_count output set" — scripts/ci/drift_collect_details.py:18`, `"1 - empty JSON or parse error" — scripts/ci/drift_collect_details.py:19`, `"N - detection crashed (exit N from detect_agent_drift.py)" — scripts/ci/drift_collect_details.py:20`; actual exit paths: `scripts/ci/drift_collect_details.py:64` (`return rc` when detection returns >= 2), `scripts/ci/drift_collect_details.py:70` (`return EXIT_ERR` [1] if JSON empty), `scripts/ci/drift_collect_details.py:90` (`return result2.returncode`), `scripts/ci/drift_collect_details.py:95` (`return EXIT_OK` [0]), `scripts/ci/drift_collect_details.py:104` (`sys.exit(main())`)
- for validators/gates: executes detection pipeline; exits 0 when drift details and count are extracted, propagating non-zero crash exit codes
- does the output match what the documentation claims? yes, writes JSON, generates details/count artifacts, and sets agents_count output

## Defects — required
none

## Observations
Gracefully falls back to printing `key=value` on stdout when `GITHUB_OUTPUT` is unset in local runs.

## Context cost
2875 bytes, approximately 718 tokens.
