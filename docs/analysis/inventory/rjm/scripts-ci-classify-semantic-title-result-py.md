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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/classify_semantic_title_result.py

## Purpose — required, verbatim
> "Classify the outcome of the semantic-PR-title-check action (issue #2616)." — scripts/ci/classify_semantic_title_result.py:2

## Design intent — required
Decides whether a PR title validation step in CI represents a genuine semantic title defect (blocking with exit 1) or a transient infrastructure flake (such as GitHub serving its 500 "Unicorn!" HTML error page, passing with exit 0), preventing CI failures caused by upstream GitHub API hiccups.

## Phase — required
cross-phase

## Inputs — required
- Required CLI argument `--outcome`: `scripts/ci/classify_semantic_title_result.py:148`
- CLI arguments `--error-message`, `--pr-title`, and optional `--log-file`: `scripts/ci/classify_semantic_title_result.py:149-159`

## Outputs — required
- Formatted PR validation verdict and detail lines printed to stdout: `scripts/ci/classify_semantic_title_result.py:130-140`, `scripts/ci/classify_semantic_title_result.py:166`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ADR-006` — scripts/ci/classify_semantic_title_result.py:7 — used here
`ADR-035` — scripts/ci/classify_semantic_title_result.py:32 — used here
`_UNICORN_MARKER` — scripts/ci/classify_semantic_title_result.py:45 — defined here
`_PASSING_OUTCOMES` — scripts/ci/classify_semantic_title_result.py:49 — defined here
`Classification` — scripts/ci/classify_semantic_title_result.py:53 — defined here
`classify` — scripts/ci/classify_semantic_title_result.py:62 — defined here
`_read_log` — scripts/ci/classify_semantic_title_result.py:110 — defined here
`_render` — scripts/ci/classify_semantic_title_result.py:128 — defined here
`main` — scripts/ci/classify_semantic_title_result.py:143 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/classify_semantic_title_result.py`, language: Python 3, lines: 172
- documented invocation: `"Classify semantic-PR-title-check action outcome (issue #2616)." — scripts/ci/classify_semantic_title_result.py:146`
- **executed:** yes
- actual command run: `python3 scripts/ci/classify_semantic_title_result.py --outcome success --pr-title "feat(ci): add check"`, abridged stdout: `PR title: feat(ci): add check\nResult: PASS\nDetail: PR title check passed (outcome=success).`, **actual exit code**: 0
- documented exit codes: `"0 = pass (valid title, success, or transient infra flake)" — scripts/ci/classify_semantic_title_result.py:33`, `"1 = block (genuine semantic-title validation failure)" — scripts/ci/classify_semantic_title_result.py:34` vs. actual exit paths: `scripts/ci/classify_semantic_title_result.py:78` (exit_code=0 on outcome in _PASSING_OUTCOMES), `scripts/ci/classify_semantic_title_result.py:87` (exit_code=1 on non-empty error_message), `scripts/ci/classify_semantic_title_result.py:100` (exit_code=0 on failure with empty error_message / transient flake), argparse exits 2 on missing `--outcome` at line 160; returned via `return result.exit_code` at line 167 and dispatched via `raise SystemExit(main())` at line 171
- for validators/gates: can exit non-zero (exits 1 on genuine semantic failure where error_message is populated, 2 on invalid args); exits 0 on valid PR title or transient failure
- does the output match what the documentation claims? yes, distinguishes transient flake from semantic failure and renders structured verdict

## Defects — required
none

## Observations
Uses ADR-006 to move decision logic out of workflow YAML into a testable script. Resolves false positives on GitHub's Unicorn error page.

## Context cost
6309 bytes, approximately 1570 tokens.
