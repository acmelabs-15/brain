---
package: rjm
path: scripts/ci/classify_semantic_title_result.py
type: script
bytes: 6309
unit: inv-rjm-200
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/classify_semantic_title_result.py, sha256: b9414829dc1a70004dc8c0803990761701d761ee85c9800cc1ff89e6a57b960d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/classify_semantic_title_result.py

## Purpose — required, verbatim
> "Classify the outcome of the semantic-PR-title-check action (issue #2616)." — scripts/ci/classify_semantic_title_result.py:2

## Design intent — required
Decides whether a semantic PR title check job should pass or fail by distinguishing genuine semantic title errors from transient infrastructure flakes (ADR-006, issue #2616). When GitHub Actions runs `amannn/action-semantic-pull-request`, an infrastructure failure (such as GitHub returning a "Unicorn!" HTML error page) crashes the action without setting an `error_message`. By inspecting both the step `outcome` and the action's `error_message` output, this script treats failures with empty error messages as transient non-blocking flakes (exit 0) while blocking genuine title defects (exit 1).

## Phase — required
none

## Inputs — required
- CLI options: `--outcome` — scripts/ci/classify_semantic_title_result.py:148, `--error-message` — scripts/ci/classify_semantic_title_result.py:150, `--pr-title` — scripts/ci/classify_semantic_title_result.py:154, `--log-file` — scripts/ci/classify_semantic_title_result.py:156

## Outputs — required
- Human-readable classification report rendered to stdout — scripts/ci/classify_semantic_title_result.py:128, 166

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/classify_semantic_title_result.py:7 — used here
- `ADR-035` — scripts/ci/classify_semantic_title_result.py:32 — used here
- `Classification` — scripts/ci/classify_semantic_title_result.py:53 — defined here
- `classify` — scripts/ci/classify_semantic_title_result.py:62 — defined here
- `_read_log` — scripts/ci/classify_semantic_title_result.py:110 — defined here
- `_render` — scripts/ci/classify_semantic_title_result.py:128 — defined here
- `main` — scripts/ci/classify_semantic_title_result.py:143 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/classify_semantic_title_result.py`, language: Python, lines: 172
- documented invocation:
  "Classify semantic-PR-title-check action outcome (issue #2616)." — scripts/ci/classify_semantic_title_result.py:146
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/classify_semantic_title_result.py --help`
  abridged stdout: `usage: classify_semantic_title_result.py [-h] --outcome OUTCOME ...`
  actual exit code: 0
- documented exit codes:
  "0 = pass (valid title, success, or transient infra flake)" — scripts/ci/classify_semantic_title_result.py:33
  "1 = block (genuine semantic-title validation failure)" — scripts/ci/classify_semantic_title_result.py:34
  vs. actual exit paths in code:
  `exit_code=0` — scripts/ci/classify_semantic_title_result.py:78
  `exit_code=1` — scripts/ci/classify_semantic_title_result.py:87
  `exit_code=0` — scripts/ci/classify_semantic_title_result.py:100
  `return result.exit_code` — scripts/ci/classify_semantic_title_result.py:167
  `raise SystemExit(main())` — scripts/ci/classify_semantic_title_result.py:171
- for validators/gates: can it exit non-zero? yes (returns exit code 1 when the action outcome is failure and a non-empty error_message is reported). Does it fail on default branch? No failing execution on valid PR titles.
- does the output match what the documentation claims? yes (implements classification discriminator and renders expected formatted verdict).

## Defects — required
- orphan — scripts/ci/classify_semantic_title_result.py:1 — Not invoked by any in-scope lifecycle script or agent; only referenced in tests and out-of-scope `.github/workflows/semantic-pr-title-check.yml`.

## Observations
- Illustrates defense against cloud CI platform flakes by recognizing that third-party GitHub Actions set their error message before failing when validation fails, whereas crashes before validation leave the message empty.

## Context cost
6309 bytes (~1500 tokens). Uses Python standard library only.
