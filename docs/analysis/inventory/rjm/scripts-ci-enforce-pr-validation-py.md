---
package: rjm
path: scripts/ci/enforce_pr_validation.py
type: script
bytes: 1620
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/enforce_pr_validation.py, sha256: 98055348aecaa5267abc1dc2013bb1698ab930049bacdeebcae3166c0ee0d44d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/enforce_pr_validation.py

## Purpose — required, verbatim
> "Enforce blocking PR validation results." — scripts/ci/enforce_pr_validation.py:2

## Design intent — required
Evaluates the final aggregated PR validation status from environment variable `OVERALL_STATUS`, halting CI execution with exit code 1 if status is `FAIL` or `ERROR`, while ensuring commit count checks remain strictly advisory per ADR-099 and issue #5233.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"OVERALL_STATUS"` — scripts/ci/enforce_pr_validation.py:34

## Outputs — required
- Status confirmation message `"✓ PR validation passed"` — scripts/ci/enforce_pr_validation.py:38 to stdout on success
- Error message `f"::error::PR validation failed: {overall_status}"` — scripts/ci/enforce_pr_validation.py:36 to stderr on failure

## Invokes — required
none

## Invoked by — required
- reference src/copilot-cli/skills/ai-agents-change-control/references/provenance.md — src/copilot-cli/skills/ai-agents-change-control/references/provenance.md:13

## Concepts named — required, verbatim
`PR validation` — scripts/ci/enforce_pr_validation.py:2 — used here
`commit-count gate` — scripts/ci/enforce_pr_validation.py:4 — used here
`commit-limit-bypass` — scripts/ci/enforce_pr_validation.py:4 — used here
`ADR-099` — scripts/ci/enforce_pr_validation.py:17 — used here
`OVERALL_STATUS` — scripts/ci/enforce_pr_validation.py:34 — used here
`LOGIC_ERROR` — scripts/ci/enforce_pr_validation.py:27 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/enforce_pr_validation.py`, language: Python 3, lines: 44
- documented invocation: `"Enforce blocking PR validation results." — scripts/ci/enforce_pr_validation.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/enforce_pr_validation.py`, abridged stdout: `✓ PR validation passed`, **actual exit code**: 0; when run with `OVERALL_STATUS=FAIL`: `OVERALL_STATUS=FAIL python3 scripts/ci/enforce_pr_validation.py`, stderr: `::error::PR validation failed: FAIL`, **actual exit code**: 1
- documented exit codes: none explicitly listed in docstring; actual exit paths: `scripts/ci/enforce_pr_validation.py:33` (`return 2` if argv given), `scripts/ci/enforce_pr_validation.py:37` (`return LOGIC_ERROR` [1] on FAIL/ERROR), `scripts/ci/enforce_pr_validation.py:39` (`return 0` on pass), `scripts/ci/enforce_pr_validation.py:43` (`raise SystemExit(main())`)
- for validators/gates: blocking CI validation gate; exits non-zero (exit 1) on FAIL or ERROR status, and exits 0 on default branch with clean status
- does the output match what the documentation claims? yes, prints pass confirmation or error failure matching overall status

## Defects — required
none

## Observations
Documents the history of making commit count advisory in CI to avoid blocking developers when token permissions are absent.

## Context cost
1620 bytes, approximately 405 tokens.
