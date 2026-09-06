---
package: rjm
path: scripts/ci/sweep_copilot_synthesis.py
type: script
bytes: 2471
unit: inv-rjm-208
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/sweep_copilot_synthesis.py, sha256: 6e2ee8a4efeefcaf6a250ad485ea4cab481fdaf8d9024465b82c936a6a4360d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/sweep_copilot_synthesis.py

## Purpose — required, verbatim
> "Process all issues with the copilot-ready label in a sweep." — scripts/ci/sweep_copilot_synthesis.py:1

## Design intent — required
Automates scheduled or manual batch context synthesis for GitHub issues marked `copilot-ready`. Replacing an inline PowerShell block in `copilot-context-synthesis.yml` per ADR-006, it loops over space-delimited issue numbers, delegates synthesis to `invoke_copilot_assignment.py`, and removes the `copilot-ready` label via `gh issue edit` upon success, intentionally suppressing per-issue failures so that individual errors do not fail the overall CI step or block processing of subsequent issues.

## Phase — required
rjm:spec

## Inputs — required
- Environment variable `ISSUES` containing space-delimited GitHub issue numbers (line 54)

## Outputs — required
- Diagnostic console logs reporting processed and failed issue counts (lines 72, 74)
- GitHub issue modification removing label `copilot-ready` via GitHub CLI (lines 39-48)

## Invokes — required
- script .claude/skills/github/scripts/issue/invoke_copilot_assignment.py — scripts/ci/sweep_copilot_synthesis.py:22
- script gh — scripts/ci/sweep_copilot_synthesis.py:39

## Invoked by — required
- script tests/ci/test_sweep_copilot_synthesis.py — tests/ci/test_sweep_copilot_synthesis.py:1

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/sweep_copilot_synthesis.py:4 — used here
- `ADR-035` — scripts/ci/sweep_copilot_synthesis.py:9 — used here
- `EXIT_SUCCESS` — scripts/ci/sweep_copilot_synthesis.py:20 — defined here
- `_SYNTHESIS_SCRIPT` — scripts/ci/sweep_copilot_synthesis.py:22 — defined here
- `_process_issue` — scripts/ci/sweep_copilot_synthesis.py:25 — defined here
- `main` — scripts/ci/sweep_copilot_synthesis.py:53 — defined here

## Structure
- `def _process_issue` — scripts/ci/sweep_copilot_synthesis.py:25
- `def main` — scripts/ci/sweep_copilot_synthesis.py:53

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/sweep_copilot_synthesis.py`, language: Python, lines: 81
- documented invocation:
  - "Process all issues with the copilot-ready label in a sweep." — scripts/ci/sweep_copilot_synthesis.py:1
  - "sweep_copilot_synthesis.py" — tests/ci/test_sweep_copilot_synthesis.py:1
- **executed:** yes
- actual command run: `python3 scripts/ci/sweep_copilot_synthesis.py`, abridged stdout:
  ```
  No issues to process
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0  - Success (partial failures are logged as warnings, not step failures)" — scripts/ci/sweep_copilot_synthesis.py:10
    - "2  - (reserved; env error never raised since empty ISSUES is valid)" — scripts/ci/sweep_copilot_synthesis.py:11
  - actual exit paths:
    - `return EXIT_SUCCESS` — scripts/ci/sweep_copilot_synthesis.py:57
    - `return EXIT_SUCCESS` — scripts/ci/sweep_copilot_synthesis.py:62
    - `return EXIT_SUCCESS` — scripts/ci/sweep_copilot_synthesis.py:76
    - `sys.exit(main())` — scripts/ci/sweep_copilot_synthesis.py:80
- for validators/gates: not a blocking gate; batch sweep script that always exits 0 so partial failures do not cancel sweep execution.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
Employs deliberate error suppression: failures in `invoke_copilot_assignment.py` are logged as GitHub Actions `::warning::` annotations and the loop proceeds to the next issue.

## Context cost
2471 bytes, approximately 620 tokens.
