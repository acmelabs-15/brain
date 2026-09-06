---
package: rjm
path: scripts/ci/parse_drift_results.py
type: script
bytes: 7947
unit: inv-rjm-205
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/parse_drift_results.py, sha256: 7e775d8af6a72e3232c10ec44be4478940d8c85900fe7a39472b1b9c80ef228a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/parse_drift_results.py

## Purpose — required, verbatim
> "Parse agent-drift JSON into the markdown body the drift-detection workflow posts." — scripts/ci/parse_drift_results.py:2

## Design intent — required
Converts JSON drift detection results emitted by `build/scripts/detect_agent_drift.py` into a formatted markdown issue body and an integer agent drift count for `.github/workflows/drift-detection.yml`. By encapsulating parsing outside GitHub Actions YAML (complying with ADR-006), it prevents silent failures from snake_case key mismatches (issue #2381) and renders per-agent missing sections when similarity drops without explicit section drift flags (issue #4852).

## Phase — required
cross-phase

## Inputs — required
- `--input`: Path to the drift JSON file emitted by `detect_agent_drift.py --output-format json` — scripts/ci/parse_drift_results.py:181-185
- `--details-out`: Path where markdown drift details are written — scripts/ci/parse_drift_results.py:187-191
- `--count-out`: Path where drift-detected agent count is written — scripts/ci/parse_drift_results.py:193-197

## Outputs — required
- Markdown formatted report written to destination file `--details-out`:
  - "###" — scripts/ci/parse_drift_results.py:104
  - "- **Overall similarity**:" — scripts/ci/parse_drift_results.py:105
- Bare integer count written to destination file via `--count-out` — scripts/ci/parse_drift_results.py:193
- Exit codes adhering to ADR-035 (0 for success, 1 for malformed input, 2 for usage/config error) — scripts/ci/parse_drift_results.py:58-60

## Invokes — required
none

## Invoked by — required
- script scripts/ci/drift_collect_details.py — scripts/ci/drift_collect_details.py:79

## Concepts named — required, verbatim
- `agent-drift` — scripts/ci/parse_drift_results.py:2 — used here
- `ADR-006` — scripts/ci/parse_drift_results.py:7 — used here
- `ADR-035` — scripts/ci/parse_drift_results.py:57 — used here
- `_AGENT_DRIFT_STATUS` — scripts/ci/parse_drift_results.py:70 — defined here
- `_SECTION_DRIFT_STATUS` — scripts/ci/parse_drift_results.py:71 — defined here
- `build_drift_details` — scripts/ci/parse_drift_results.py:140 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/parse_drift_results.py`, language: Python, lines: 216
- documented invocation: "path to write the markdown drift details" — scripts/ci/parse_drift_results.py:190
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/parse_drift_results.py --help`
    stdout: `usage: parse_drift_results.py [-h] --input INPUT --details-out DETAILS_OUT --count-out COUNT_OUT`
    actual exit code: 0
  - Command: with mock JSON input: `python3 sources/rjm/scripts/ci/parse_drift_results.py --input /tmp/in.json --details-out /tmp/details.md --count-out /tmp/count.txt`
    stdout: `` (wrote details markdown and count file)
    actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0  - Success: details and count written" — scripts/ci/parse_drift_results.py:58
    - "1  - Error: malformed input (bad JSON, missing expected key)" — scripts/ci/parse_drift_results.py:59
    - "2  - Error: usage/configuration (file not found, bad argument)" — scripts/ci/parse_drift_results.py:60
  - Actual exit paths in code:
    - `return 0` — scripts/ci/parse_drift_results.py:211
    - `code=1` — scripts/ci/parse_drift_results.py:170, 205, 207
    - `code=2` — scripts/ci/parse_drift_results.py:166
    - `sys.exit(main())` — scripts/ci/parse_drift_results.py:215
- for validators/gates: can it exit non-zero?
  Yes, exits 1 on malformed JSON or missing required fields (lines 170, 205, 207), and 2 on missing input file or bad CLI arguments (line 166).
- does the output match what the documentation claims?
  Yes, parses agent drift JSON into formatted markdown details and writes total count of drifting agents.

## Defects — required
none

## Observations
Validates only the keys required to generate the alert issue body (`agentName`, `overallSimilarity`, `driftingSections`, `missingSections`, `sections`), intentionally ignoring unrendered summary and comparator metadata to prevent brittle coupling.

## Context cost
7947 bytes, 216 lines. Approximate tokens: ~1950.
