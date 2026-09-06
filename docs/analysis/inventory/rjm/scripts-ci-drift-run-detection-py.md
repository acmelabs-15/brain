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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/drift_run_detection.py

## Purpose — required, verbatim
> "Run agent drift detection and set GITHUB_OUTPUT drift_detected." — scripts/ci/drift_run_detection.py:2

## Design intent — required
Executes the agent drift detection tool (`build/scripts/detect_agent_drift.py`) with text formatting and install-drift validation, parsing its exit status and translating it into a boolean `drift_detected` output variable for GitHub Actions. It replaces brittle inline bash logic in `drift-detection.yml` (ADR-006), ensuring that expected drift (exit 1) allows the workflow step to succeed while propagating unexpected script crashes (exit >= 2).

## Phase — required
none

## Inputs — required
- Environment variable `GITHUB_OUTPUT` — scripts/ci/drift_run_detection.py:31
- Subprocess output and return code from `build/scripts/detect_agent_drift.py` — scripts/ci/drift_run_detection.py:46

## Outputs — required
- Appends `drift_detected="true"` or `drift_detected="false"` to GITHUB_OUTPUT — scripts/ci/drift_run_detection.py:56,59

## Invokes — required
- script detect_agent_drift — scripts/ci/drift_run_detection.py:46

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `drift-detection.yml` — scripts/ci/drift_run_detection.py:4 — used here
- `ADR-006` — scripts/ci/drift_run_detection.py:4 — used here
- `ADR-035` — scripts/ci/drift_run_detection.py:15 — used here
- `EXIT_OK` — scripts/ci/drift_run_detection.py:26 — defined here
- `write_github_output` — scripts/ci/drift_run_detection.py:29 — defined here
- `run` — scripts/ci/drift_run_detection.py:39 — defined here
- `main` — scripts/ci/drift_run_detection.py:66 — defined here

## Structure
- Module docstring describing exit code mappings and ADR-006 / ADR-035 compliance (lines 2-18)
- Constant `EXIT_OK` (line 26)
- Helper function `write_github_output` writing step output or falling back to stdout (lines 29-36)
- Detection runner function `run` (lines 39-64)
- Main entry point `main` and invocation block (lines 66-73)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/drift_run_detection.py`
- **language:** Python 3
- **lines:** 73
- **documented invocation:**
  > "python3 build/scripts/detect_agent_drift.py --output-format text \\" — scripts/ci/drift_run_detection.py:6
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/drift_run_detection.py`
- **stdout:**
  ```text
  Running agent drift detection...
  drift_detected=false
  ```
- **actual exit code:** 2
- **documented exit codes:**
  - `> "0 - detection ran; drift_detected output set to true or false" — scripts/ci/drift_run_detection.py:16`
  - `> "N>1 - detection script crashed; propagated" — scripts/ci/drift_run_detection.py:17`
- **actual exit paths:**
  - `return EXIT_OK` — scripts/ci/drift_run_detection.py:57
  - `return EXIT_OK` — scripts/ci/drift_run_detection.py:60
  - `return rc` — scripts/ci/drift_run_detection.py:63
  - `sys.exit(main())` — scripts/ci/drift_run_detection.py:72
- **for validators/gates:** Wrapper for agent drift validation. When detection tool crashes (exit code >= 2, such as missing build script when run outside repository root), propagates `rc >= 2` and sets `drift_detected=false`. When drift is detected (tool exits 1), writes `drift_detected=true` and exits 0. When no drift is detected (tool exits 0), writes `drift_detected=false` and exits 0.
- **output matches documentation:** yes, sets `drift_detected` in `GITHUB_OUTPUT` according to detected drift status.

## Defects — required
- orphan — scripts/ci/drift_run_detection.py:4 — not invoked by any in-scope file; replaces inline shell in out-of-scope drift-detection.yml CI workflow

## Observations
Treats detection exit 1 (drift detected) as a successful workflow step execution by converting the detection signal into output state rather than a non-zero process failure. This decoupling allows subsequent workflow steps to inspect `drift_detected` and decide whether to file an alert issue or report clean status.

## Context cost
1,954 bytes source (~490 tokens).
