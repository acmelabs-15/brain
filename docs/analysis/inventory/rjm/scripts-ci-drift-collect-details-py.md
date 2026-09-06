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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/drift_collect_details.py

## Purpose — required, verbatim
> "Collect drift details: re-run detection with JSON output, parse results." — scripts/ci/drift_collect_details.py:2

## Design intent — required
Replaces inline shell blocks in the drift detection CI workflow (ADR-006) by orchestrating the re-run of agent drift detection with JSON formatting, validating output non-emptiness, invoking `parse_drift_results.py` to produce markdown details and agent count metrics, and publishing `agents_count` to GitHub Actions step outputs.

## Phase — required
none

## Inputs — required
- Environment variable `RUNNER_TEMP` (directory for intermediate artifacts) — scripts/ci/drift_collect_details.py:15,46
- Environment variable `GITHUB_OUTPUT` — scripts/ci/drift_collect_details.py:36
- Intermediate file `drift-results.json` created by drift detection — scripts/ci/drift_collect_details.py:49,67
- Agent count file `drift-count.txt` — scripts/ci/drift_collect_details.py:74
- Parsing results via `parse_drift_results.py` — scripts/ci/drift_collect_details.py:11

## Outputs — required
- File `drift-results.json` containing agent drift detection JSON output — scripts/ci/drift_collect_details.py:49
- Markdown file `drift-details.md` under `RUNNER_TEMP` — scripts/ci/drift_collect_details.py:73
- File `drift-count.txt` containing total agent count — scripts/ci/drift_collect_details.py:74
- Appends `agents_count` key-value pair to GITHUB_OUTPUT — scripts/ci/drift_collect_details.py:12,94

## Invokes — required
- script detect_agent_drift — scripts/ci/drift_collect_details.py:53
- script parse_drift_results — scripts/ci/drift_collect_details.py:79

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `drift-detection.yml` — scripts/ci/drift_collect_details.py:4 — used here
- `ADR-006` — scripts/ci/drift_collect_details.py:4 — used here
- `ADR-035` — scripts/ci/drift_collect_details.py:17 — used here
- `EXIT_OK` — scripts/ci/drift_collect_details.py:30 — defined here
- `EXIT_ERR` — scripts/ci/drift_collect_details.py:31 — defined here
- `write_github_output` — scripts/ci/drift_collect_details.py:34 — defined here
- `run` — scripts/ci/drift_collect_details.py:44 — defined here
- `main` — scripts/ci/drift_collect_details.py:98 — defined here

## Structure
- Module docstring detailing ADR-006 extraction, environment variables, and ADR-035 exit code contract (lines 2-21)
- Constants `EXIT_OK` and `EXIT_ERR` (lines 30-31)
- GitHub output abstraction `write_github_output` (lines 34-42)
- Workflow orchestrator `run` executing detection and parsing (lines 44-96)
- Entry point `main` and invocation block (lines 98-105)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/drift_collect_details.py`
- **language:** Python 3
- **lines:** 105
- **documented invocation:**
  > "python3 build/scripts/detect_agent_drift.py --output-format json > drift-results.json" — scripts/ci/drift_collect_details.py:7
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/drift_collect_details.py`
- **stdout:**
  ```text
  ::error::drift detection crashed on re-run (exit 2)
  ```
- **actual exit code:** 2
- **documented exit codes:**
  - `> "0 - details collected and agents_count output set" — scripts/ci/drift_collect_details.py:18`
  - `> "1 - empty JSON or parse error" — scripts/ci/drift_collect_details.py:19`
  - `> "N - detection crashed (exit N from detect_agent_drift.py)" — scripts/ci/drift_collect_details.py:20`
- **actual exit paths:**
  - `return rc` — scripts/ci/drift_collect_details.py:64
  - `return EXIT_ERR` — scripts/ci/drift_collect_details.py:70
  - `return result2.returncode` — scripts/ci/drift_collect_details.py:90
  - `return EXIT_OK` — scripts/ci/drift_collect_details.py:95
  - `sys.exit(main())` — scripts/ci/drift_collect_details.py:104
- **for validators/gates:** Not a standalone validator or gate; CI pipeline orchestration script. Exits non-zero (propagating returncode `rc >= 2`) when detection subprocess crashes, returns 1 on empty output, and exits 0 when detection and result parsing succeed.
- **output matches documentation:** yes, creates `drift-results.json`, triggers `parse_drift_results.py`, and sets `agents_count` in `GITHUB_OUTPUT`.

## Defects — required
- orphan — scripts/ci/drift_collect_details.py:4 — not invoked by any in-scope file; replaces inline shell in out-of-scope drift-detection.yml CI workflow

## Observations
Adheres to ADR-006 by removing inline bash logic from workflow YAML files and following ADR-035 exit code conventions where exit 0 indicates clean execution, exit 1 indicates parse failure, and higher codes propagate tool crashes.

## Context cost
2,875 bytes source (~720 tokens).
