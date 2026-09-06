---
package: rjm
path: scripts/ci/execute_ai_review_post_script.py
type: script
bytes: 2813
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/execute_ai_review_post_script.py, sha256: b054d9d879990f9f217d6c35988afeffc153a412a657601f420cafb9a8d2102f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/execute_ai_review_post_script.py

## Purpose — required, verbatim
> "Execute the optional ai-review post-analysis script." — scripts/ci/execute_ai_review_post_script.py:1

## Design intent — required
Launches a post-analysis callback script specified by `EXECUTE_SCRIPT` (supporting Python `.py` and PowerShell `.ps1`), translating environment context (`PR_NUMBER`, `AI_VERDICT`, `AI_FINDINGS`) into CLI arguments, and propagating execution status and exit codes for GitHub Actions workflows.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"EXECUTE_SCRIPT"` — scripts/ci/execute_ai_review_post_script.py:64
- Environment variable `"PR_NUMBER"` — scripts/ci/execute_ai_review_post_script.py:65
- Environment variable `"AI_VERDICT"` — scripts/ci/execute_ai_review_post_script.py:66
- Script arguments `"--pr-number"` — scripts/ci/execute_ai_review_post_script.py:36, `"--verdict"` — scripts/ci/execute_ai_review_post_script.py:38, and `"--findings-json"` — scripts/ci/execute_ai_review_post_script.py:40

## Outputs — required
- Status message `"Post-analysis script completed successfully"` — scripts/ci/execute_ai_review_post_script.py:88 on success
- Execution header `f"Executing post-analysis script: {execute_script}"` — scripts/ci/execute_ai_review_post_script.py:68 to stdout

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ai-review` — scripts/ci/execute_ai_review_post_script.py:1 — used here
`post-analysis script` — scripts/ci/execute_ai_review_post_script.py:1 — defined here
`CommandResult` — scripts/ci/execute_ai_review_post_script.py:18 — defined here
`EXECUTE_SCRIPT` — scripts/ci/execute_ai_review_post_script.py:64 — used here
`PR_NUMBER` — scripts/ci/execute_ai_review_post_script.py:65 — used here
`AI_VERDICT` — scripts/ci/execute_ai_review_post_script.py:66 — used here
`EXIT_OK` — scripts/ci/execute_ai_review_post_script.py:12 — defined here
`EXIT_LOGIC` — scripts/ci/execute_ai_review_post_script.py:13 — defined here
`EXIT_CONFIG` — scripts/ci/execute_ai_review_post_script.py:14 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/execute_ai_review_post_script.py`, language: Python 3, lines: 101
- documented invocation: `"Execute the optional ai-review post-analysis script." — scripts/ci/execute_ai_review_post_script.py:1`
- **executed:** yes
- actual command run: `EXECUTE_SCRIPT=scripts/ci/enforce_pr_validation.py python3 scripts/ci/execute_ai_review_post_script.py`, abridged stdout: `Executing post-analysis script: scripts/ci/enforce_pr_validation.py ... Post-analysis script completed successfully`, **actual exit code**: 0; when run without `EXECUTE_SCRIPT`: `python3 scripts/ci/execute_ai_review_post_script.py`, stderr: `::error::Execute script not found: `, **actual exit code**: 1
- documented exit codes: none in docstring; actual exit paths: `scripts/ci/execute_ai_review_post_script.py:75` (`return EXIT_LOGIC` [1] if target script missing), `scripts/ci/execute_ai_review_post_script.py:81` (`return EXIT_LOGIC` [1] on unsupported extension), `scripts/ci/execute_ai_review_post_script.py:86` (`return result.returncode`), `scripts/ci/execute_ai_review_post_script.py:89` (`return EXIT_OK` [0]), `scripts/ci/execute_ai_review_post_script.py:95` (`return EXIT_CONFIG` [2] if argv provided), `scripts/ci/execute_ai_review_post_script.py:100` (`raise SystemExit(main())`)
- for validators/gates: invocation wrapper; passes non-zero return codes from target scripts through to CI environment
- does the output match what the documentation claims? yes, invokes configured script with formatted arguments

## Defects — required
none

## Observations
Provides multi-runtime dispatch supporting both Python and PowerShell scripts as post-review hooks.

## Context cost
2813 bytes, approximately 703 tokens.
