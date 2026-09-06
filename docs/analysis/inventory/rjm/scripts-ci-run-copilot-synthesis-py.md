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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/run_copilot_synthesis.py

## Purpose — required, verbatim
> "Run Copilot context synthesis for a single issue." — scripts/ci/run_copilot_synthesis.py:1

## Design intent — required
Replaces an inline PowerShell block in `copilot-context-synthesis.yml` under ADR-006 (no logic in YAML). Validates the issue number passed via the `ISSUE_NUMBER` environment variable, invokes the underlying synthesis script `.claude/skills/github/scripts/issue/invoke_copilot_assignment.py`, and maps its execution result to standard ADR-035 exit codes (0 for success, 1 for synthesis failure, 2 for missing or non-integer configuration).

## Phase — required
none

## Inputs — required
- Environment variable `ISSUE_NUMBER`: Integer issue number to synthesize context for — scripts/ci/run_copilot_synthesis.py:27

## Outputs — required
- GitHub Actions notice annotation on success: `::notice::Synthesized context for issue #` — scripts/ci/run_copilot_synthesis.py:51
- GitHub Actions error annotation on failure: `::error::Failed to synthesize context for issue #` — scripts/ci/run_copilot_synthesis.py:45

## Invokes — required
- script invoke_copilot_assignment.py — scripts/ci/run_copilot_synthesis.py:23

## Invoked by — required
- `.github/workflows/copilot-context-synthesis.yml` (CI workflow, excluded from lifecycle analysis)

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/run_copilot_synthesis.py:4 — used here
- `ADR-035` — scripts/ci/run_copilot_synthesis.py:7 — used here
- `invoke_copilot_assignment.py` — scripts/ci/run_copilot_synthesis.py:4 — used here

## Structure
- module docstring — scripts/ci/run_copilot_synthesis.py:1-11
- main — scripts/ci/run_copilot_synthesis.py:26

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/run_copilot_synthesis.py`, language: Python, lines: 57
- documented invocation: `python scripts/ci/run_copilot_synthesis.py`
- executed: yes
- actual command: `python3 sources/rjm/scripts/ci/run_copilot_synthesis.py`
- stdout: `ERROR: ISSUE_NUMBER not set` (on stderr)
- actual exit code: 2
- documented exit codes:
  > "0  - Success" — scripts/ci/run_copilot_synthesis.py:8
  > "1  - Synthesis failed (logic error or assignment failure)" — scripts/ci/run_copilot_synthesis.py:9
  > "2  - Configuration error (missing or invalid env var)" — scripts/ci/run_copilot_synthesis.py:10
  Actual exit paths in code:
  `return EXIT_CONFIG` — scripts/ci/run_copilot_synthesis.py:30, 36
  `return EXIT_FAILURE` — scripts/ci/run_copilot_synthesis.py:49
  `return EXIT_SUCCESS` — scripts/ci/run_copilot_synthesis.py:52
- for validators/gates: can exit non-zero (exits 1 on synthesis failure, 2 on config error)
- does the output match what the documentation claims: yes, validates ISSUE_NUMBER and returns appropriate status

## Defects — required
- `script-bug` · scripts/ci/run_copilot_synthesis.py:23 · Relative path `_SYNTHESIS_SCRIPT = ".claude/skills/github/scripts/issue/invoke_copilot_assignment.py"` fails if executed from any directory other than repository root.

## Observations
Provides a clean Python isolation boundary replacing inline PowerShell in `copilot-context-synthesis.yml`.

## Context cost
Bytes: 1604 + loads `invoke_copilot_assignment.py` (24823 bytes). Approximate tokens: ~6500.
