---
package: rjm
path: scripts/metrics/check_vendored_install.py
type: script
bytes: 3039
unit: inv-rjm-253
in_scope_via: scripts/metrics/kill_criteria.py
aliases: []
memo_inputs:
  - {path: scripts/metrics/check_vendored_install.py, sha256: 8086464e6162330cf2fd6d5f848b550de245841f06ce4ec0f4000f52c36ccc45}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/metrics/check_vendored_install.py

## Purpose — required, verbatim
> "K3 emission point: detect vendored-install breakage and record it." — scripts/metrics/check_vendored_install.py:2

## Design intent — required
Serves as the automated gate and emission point for REQ-008-09 Kill Criterion 3 (K3: vendored install breakage). Executes the integration test suite for vendored installations (`tests/integration/test_vendored_install.py`) and, upon test failure, emits a redacted K3 telemetry event to `.agents/metrics/drift-events.jsonl` before exiting non-zero. Isolating this check from general pytest execution ensures that local development test failures do not corrupt production kill-criteria metrics.

## Phase — required
cross-phase

## Inputs — required
- Vendored integration test suite located at `tests/integration/test_vendored_install.py` (scripts/metrics/check_vendored_install.py:39)
- Environment execution context with `sys.executable` and `pytest` (scripts/metrics/check_vendored_install.py:47)

## Outputs — required
- Telemetry event of kind `K3` appended to `.agents/metrics/drift-events.jsonl` via `scripts.metrics.kill_criteria.emit_event` upon suite failure (scripts/metrics/check_vendored_install.py:77)
- Console status messages printed to stdout or stderr (scripts/metrics/check_vendored_install.py:70, 84)
- Process exit codes: 0 (suite passed, no K3), 1 (suite failed, K3 emitted), 3 (suite could not run, external failure) (scripts/metrics/check_vendored_install.py:20-22, 67, 71, 83, 88)

## Invokes — required
- script kill_criteria — scripts/metrics/check_vendored_install.py:36
- script redact_secrets — scripts/metrics/check_vendored_install.py:37

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `K3` — scripts/metrics/check_vendored_install.py:2 — defined here
- `REQ-008-09` — scripts/metrics/check_vendored_install.py:4 — used here
- `ADR-035` — scripts/metrics/check_vendored_install.py:19 — used here
- `VENDORED_TEST` — scripts/metrics/check_vendored_install.py:39 — defined here
- `_run_vendored_suite` — scripts/metrics/check_vendored_install.py:44 — defined here
- `main` — scripts/metrics/check_vendored_install.py:58 — defined here

## Structure
- Module docstring and exit code definitions — scripts/metrics/check_vendored_install.py:1
- Path resolution and helper imports — scripts/metrics/check_vendored_install.py:31
- _run_vendored_suite test runner function — scripts/metrics/check_vendored_install.py:44
- main execution logic and K3 telemetry emission — scripts/metrics/check_vendored_install.py:58

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/metrics/check_vendored_install.py`
- **language:** Python (python3)
- **lines:** 93
- **documented invocation:**
  - `none` (executed directly as a CI/pre-release gate script: `python3 scripts/metrics/check_vendored_install.py`)
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/metrics/check_vendored_install.py`
- **abridged stdout:** `none` (printed to stderr: `vendored-install suite FAILED; K3 kill-criteria event emitted.`)
- **actual exit code:** 1
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 = vendored install suite passed (no K3)" — scripts/metrics/check_vendored_install.py:20
    - "1 = vendored install suite failed (K3 emitted)" — scripts/metrics/check_vendored_install.py:21
    - "3 = could not run the suite (external failure; no K3, state unknown)" — scripts/metrics/check_vendored_install.py:22
  - Actual code paths:
    - `return 3` — scripts/metrics/check_vendored_install.py:67 (subprocess exception TimeoutExpired/FileNotFoundError/OSError)
    - `return 0` — scripts/metrics/check_vendored_install.py:71 (result.returncode == 0)
    - `return 1` — scripts/metrics/check_vendored_install.py:83 (emit_event failed with OSError)
    - `return 1` — scripts/metrics/check_vendored_install.py:88 (suite failed, K3 emitted)
    - `sys.exit(main())` — scripts/metrics/check_vendored_install.py:92
  - Result: Documented exit codes match actual exit paths in code.
- **for validators/gates:**
  - Can exit non-zero: yes, exits 1 on test suite failure, exits 3 on test execution error.
  - Verified on default branch: exits 1 when pytest is not installed in the python environment, emitting a K3 event for the test runner error.
- **does the output match what the documentation claims:** yes, triggers the failure path and emits K3 when the test suite returns non-zero.

## Defects — required
- `script-bug`: When `pytest` is not installed, `python3 -m pytest` exits with code 1 rather than raising an OSError, causing `check_vendored_install.py` to classify a missing test runner as a vendored install breakage and emit a false K3 event rather than exiting 3 for "could not run the suite" (scripts/metrics/check_vendored_install.py:61-77).

## Observations
- Passes error summary through `scripts.redact_secrets.redact` before recording it in telemetry detail to prevent secret leakage.
- Sets a 300-second timeout on the test runner subprocess.

## Context cost
3039 bytes, 93 lines, plus `scripts/metrics/kill_criteria.py` (19854 bytes) and `scripts/redact_secrets.py` (6861 bytes). Total ~29754 bytes, ~6800 tokens.
