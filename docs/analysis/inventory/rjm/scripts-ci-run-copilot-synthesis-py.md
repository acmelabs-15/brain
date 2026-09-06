---
package: rjm
path: scripts/ci/run_copilot_synthesis.py
type: script
bytes: 1604
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/run_copilot_synthesis.py, sha256: 459e6460fccb04b0e408532fe0cd7329c2272b3c9b6359ad4fef345cebe13038}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/run_copilot_synthesis.py

## Purpose — required, verbatim
> "Run Copilot context synthesis for a single issue." — scripts/ci/run_copilot_synthesis.py:1

## Design intent — required
Replaces inline PowerShell script execution in `.github/workflows/copilot-context-synthesis.yml` under ADR-006 and ADR-035. Validates the `ISSUE_NUMBER` environment variable, executes `.claude/skills/github/scripts/issue/invoke_copilot_assignment.py` in a managed Python subprocess, and maps the child process exit code to standardized GitHub Actions status output and error annotations.

## Phase — required
cross-phase

## Inputs — required
- Environment variable: `ISSUE_NUMBER` (integer issue number)

## Outputs — required
- GitHub Actions notice or error annotations on stdout/stderr
- Execution of context synthesis via `invoke_copilot_assignment.py`

## Invokes — required
- script invoke_copilot_assignment.py — scripts/ci/run_copilot_synthesis.py:23

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `copilot-context-synthesis.yml` — scripts/ci/run_copilot_synthesis.py:3 — used here
- `ADR-006` — scripts/ci/run_copilot_synthesis.py:4 — used here
- `ADR-035` — scripts/ci/run_copilot_synthesis.py:7 — used here
- `EXIT_SUCCESS` — scripts/ci/run_copilot_synthesis.py:19 — defined here
- `EXIT_FAILURE` — scripts/ci/run_copilot_synthesis.py:20 — defined here
- `EXIT_CONFIG` — scripts/ci/run_copilot_synthesis.py:21 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/run_copilot_synthesis.py`, language: Python, lines: 57
- documented invocation:
  "Run Copilot context synthesis for a single issue." — scripts/ci/run_copilot_synthesis.py:1
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: with empty env: `python3 sources/rjm/scripts/ci/run_copilot_synthesis.py`
    stdout: `ERROR: ISSUE_NUMBER not set` (stderr)
    actual exit code: 2
- documented exit codes vs actual exit paths:
  - Documented:
    - "0  - Success" — scripts/ci/run_copilot_synthesis.py:8
    - "1  - Synthesis failed (logic error or assignment failure)" — scripts/ci/run_copilot_synthesis.py:9
    - "2  - Configuration error (missing or invalid env var)" — scripts/ci/run_copilot_synthesis.py:10
  - Actual exit paths:
    - `return EXIT_CONFIG` on missing or non-integer ISSUE_NUMBER — scripts/ci/run_copilot_synthesis.py:30, 36
    - `return EXIT_FAILURE` on child process failure — scripts/ci/run_copilot_synthesis.py:49
    - `return EXIT_SUCCESS` on success — scripts/ci/run_copilot_synthesis.py:52
    - `sys.exit(main())` — scripts/ci/run_copilot_synthesis.py:56
- for validators/gates: can it exit non-zero?
  Yes, exits 2 on missing/invalid `ISSUE_NUMBER` and 1 on synthesis execution failure.
  Does it fail on the source repo's own default branch?
  When run without `ISSUE_NUMBER`, exits 2.
- does the output match what the documentation claims?
  Yes, executes synthesis script and maps child exit code to ADR-035 statuses.

## Defects — required
- orphan — scripts/ci/run_copilot_synthesis.py:1 — not referenced by any in-scope file (only referenced by out-of-scope .github/workflows/copilot-context-synthesis.yml).

## Observations
Uses a relative path `_SYNTHESIS_SCRIPT = ".claude/skills/github/scripts/issue/invoke_copilot_assignment.py"` (line 23) which requires the working directory to be the repository root.

## Context cost
1604 bytes, 57 lines. Approximate tokens: ~400.
