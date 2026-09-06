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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/sweep_copilot_synthesis.py

## Purpose — required, verbatim
> "Process all issues with the copilot-ready label in a sweep." — scripts/ci/sweep_copilot_synthesis.py:1

## Design intent — required
Automates the sequential processing of GitHub issues labeled `copilot-ready` in a scheduled batch sweep. Replaces an inline PowerShell block in `copilot-context-synthesis.yml` per ADR-006 (no logic in YAML) and ADR-035. For each issue number passed in `ISSUES`, executes `invoke_copilot_assignment.py` to synthesize context and removes the `copilot-ready` label on success, intentionally suppressing job-level failure so as many issues as possible are processed.

## Phase — required
none

## Inputs — required
- Environment variable `ISSUES` — scripts/ci/sweep_copilot_synthesis.py:4
- Subprocess execution of `invoke_copilot_assignment.py` — scripts/ci/sweep_copilot_synthesis.py:5
- GitHub CLI command `gh` — scripts/ci/sweep_copilot_synthesis.py:39

## Outputs — required
- Diagnostic progress, warning, and summary log messages to stdout — scripts/ci/sweep_copilot_synthesis.py:27
- GitHub label modification removing label `copilot-ready` — scripts/ci/sweep_copilot_synthesis.py:39

## Invokes — required
- script invoke_copilot_assignment.py — scripts/ci/sweep_copilot_synthesis.py:22
- command gh — scripts/ci/sweep_copilot_synthesis.py:39

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `copilot-ready` — scripts/ci/sweep_copilot_synthesis.py:1 — used here
- `copilot-context-synthesis.yml` — scripts/ci/sweep_copilot_synthesis.py:3 — used here
- `ADR-006` — scripts/ci/sweep_copilot_synthesis.py:4 — used here
- `ISSUES` — scripts/ci/sweep_copilot_synthesis.py:4 — used here
- `invoke_copilot_assignment.py` — scripts/ci/sweep_copilot_synthesis.py:5 — used here
- `ADR-035` — scripts/ci/sweep_copilot_synthesis.py:9 — used here
- `EXIT_SUCCESS` — scripts/ci/sweep_copilot_synthesis.py:20 — defined here
- `_SYNTHESIS_SCRIPT` — scripts/ci/sweep_copilot_synthesis.py:22 — defined here
- `_process_issue` — scripts/ci/sweep_copilot_synthesis.py:25 — defined here
- `main` — scripts/ci/sweep_copilot_synthesis.py:53 — defined here

## Structure
none (python script; functions: _process_issue, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/sweep_copilot_synthesis.py`, language: Python 3, lines: 81
- documented invocation:
  "Process all issues with the copilot-ready label in a sweep." — scripts/ci/sweep_copilot_synthesis.py:1
  (CLI command: `python3 scripts/ci/sweep_copilot_synthesis.py`)
- executed: yes
- actual command run: `python3 scripts/ci/sweep_copilot_synthesis.py` (executed from `sources/rjm`)
  abridged stdout: `No issues to process`
  actual exit code: 0
- documented exit codes:
  `0 - Success (partial failures are logged as warnings, not step failures)` — scripts/ci/sweep_copilot_synthesis.py:10
  `2 - (reserved; env error never raised since empty ISSUES is valid)` — scripts/ci/sweep_copilot_synthesis.py:11
  vs. actual exit paths in code:
  `scripts/ci/sweep_copilot_synthesis.py:57` (`return EXIT_SUCCESS`)
  `scripts/ci/sweep_copilot_synthesis.py:62` (`return EXIT_SUCCESS`)
  `scripts/ci/sweep_copilot_synthesis.py:76` (`return EXIT_SUCCESS`)
  `scripts/ci/sweep_copilot_synthesis.py:80` (`sys.exit(main())`)
- for validators/gates: can it exit non-zero? no (always exits 0; partial failures log warnings). does it fail on the source repo's own default branch? no (exits 0 with `No issues to process`).
- does the output match what the documentation claims? yes (suppresses job failure and exits 0)

## Defects — required
- `orphan — scripts/ci/sweep_copilot_synthesis.py:3 — not invoked by any in-scope lifecycle file (replaces PowerShell block in out-of-scope .github/workflows/copilot-context-synthesis.yml)`

## Observations
- Specifically designed to never fail at the workflow job level so that a single malformed or failing issue does not abort processing for subsequent issues in the sweep.
- Tested in repository by `tests/ci/test_sweep_copilot_synthesis.py`.

## Context cost
2,471 bytes (~618 tokens). Standard library only (`os`, `subprocess`, `sys`).
