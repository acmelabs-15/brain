---
package: rjm
path: scripts/ci/drift_run_detection.py
type: script
bytes: 1954
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/drift_run_detection.py, sha256: a8ff6e4e1b35f8e278ca8d09a96e6ef4f7f561741cb99c9257eaca6e77d57b58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/drift_run_detection.py

## Purpose — required, verbatim
> "Run agent drift detection and set GITHUB_OUTPUT drift_detected." — scripts/ci/drift_run_detection.py:2

## Design intent — required
Executes agent drift detection via `build/scripts/detect_agent_drift.py` with `--fail-on-install-drift` and sets `drift_detected` (`true` or `false`) in GitHub Actions outputs, treating expected drift (exit 1) as a successful step execution (exit 0) while propagating unexpected crashes (exit >= 2) per ADR-006 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"GITHUB_OUTPUT"` — scripts/ci/drift_run_detection.py:31
- Subprocess execution flags `"--output-format"` — scripts/ci/drift_run_detection.py:47 and `"--fail-on-install-drift"` — scripts/ci/drift_run_detection.py:49

## Outputs — required
- Output parameter `"drift_detected"` — scripts/ci/drift_run_detection.py:56 set to `"true"` or `"false"` in `GITHUB_OUTPUT` or stdout
- Progress message `"Running agent drift detection..."` — scripts/ci/drift_run_detection.py:41 to stdout

## Invokes — required
- script build/scripts/detect_agent_drift.py — scripts/ci/drift_run_detection.py:46

## Invoked by — required
orphan

## Concepts named — required, verbatim
`drift-detection` — scripts/ci/drift_run_detection.py:4 — used here
`ADR-006` — scripts/ci/drift_run_detection.py:4 — used here
`ADR-035` — scripts/ci/drift_run_detection.py:15 — used here
`drift_detected` — scripts/ci/drift_run_detection.py:2 — defined here
`GITHUB_OUTPUT` — scripts/ci/drift_run_detection.py:2 — used here
`EXIT_OK` — scripts/ci/drift_run_detection.py:26 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/drift_run_detection.py`, language: Python 3, lines: 73
- documented invocation: `"Run agent drift detection and set GITHUB_OUTPUT drift_detected." — scripts/ci/drift_run_detection.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/drift_run_detection.py`, abridged stdout: `Running agent drift detection... ... drift_detected=true`, **actual exit code**: 0
- documented exit codes: `"0 - detection ran; drift_detected output set to true or false" — scripts/ci/drift_run_detection.py:16`, `"N>1 - detection script crashed; propagated" — scripts/ci/drift_run_detection.py:17`; actual exit paths: `scripts/ci/drift_run_detection.py:57` (`return EXIT_OK` [0] when rc is 1), `scripts/ci/drift_run_detection.py:60` (`return EXIT_OK` [0] when rc is 0), `scripts/ci/drift_run_detection.py:63` (`return rc` when rc >= 2), `scripts/ci/drift_run_detection.py:72` (`sys.exit(main())`)
- for validators/gates: executes drift detection gate; exits 0 when drift detection completes successfully regardless of whether drift was found, returning non-zero only on script crash
- does the output match what the documentation claims? yes, sets drift_detected output to true or false based on underlying exit code

## Defects — required
none

## Observations
Gracefully translates expected application exit code 1 (drift detected) into GitHub Actions success (0) so subsequent conditional workflow steps can proceed without failing the job early.

## Context cost
1954 bytes, approximately 488 tokens.
