---
package: rjm
path: scripts/test_result_helpers/helpers.py
type: script
bytes: 1724
unit: inv-rjm-262
in_scope_via: scripts/test_result_helpers/__init__.py
aliases: []
memo_inputs:
  - {path: scripts/test_result_helpers/helpers.py, sha256: 3c14f9ddcc6391bbb74b0bf22b0e6ef4f32213f2861f761032e96e22d08eada2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/test_result_helpers/helpers.py

## Purpose — required, verbatim
> "Helper functions for test result generation in CI workflows." — scripts/test_result_helpers/helpers.py:1

## Design intent — required
Generates valid JUnit XML reports with zero tests, failures, and errors when test steps are skipped, satisfying downstream status checks and reporting tools that require an XML result artifact while preventing XML injection (CWE-91) and path traversal attacks.

## Phase — required
cross-phase

## Inputs — required
- Parameters `output_path`, `test_suite_name` (default: `"Tests (Skipped)"`), and `skip_reason` (default: `"No testable files changed - tests skipped"`): `scripts/test_result_helpers/helpers.py:14-16`

## Outputs — required
- JUnit XML document written to `output_path`: `scripts/test_result_helpers/helpers.py:51`

## Invokes — required
none

## Invoked by — required
- script test_result_helpers — scripts/test_result_helpers/__init__.py:5

## Concepts named — required, verbatim
- `JUnit XML` — scripts/test_result_helpers/helpers.py:3 — used here
- `create_skipped_test_result` — scripts/test_result_helpers/helpers.py:13 — defined here
- `CWE-91` — scripts/test_result_helpers/helpers.py:29 — used here

## Structure
(no headings, flat python module)

## Scripts — required if type is script or the skill ships scripts
For `scripts/test_result_helpers/helpers.py`:
- path, language, lines: `scripts/test_result_helpers/helpers.py`, Python, 53 lines
- documented invocation: none (invoked as Python library function)
- **executed:** yes
- actual command run: `python3 scripts/test_result_helpers/helpers.py`
- actual stdout (abridged): ``
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths: exits 0 implicitly when executed; raises `ValueError` on empty inputs or relative path traversal (`scripts/test_result_helpers/helpers.py:21,24,27,48`)
- for validators/gates: not a validator or gate; utility for generating CI test artifacts
- does the output match what the documentation claims? generates valid empty JUnit XML with escaped skip reasons as documented

## Defects — required
none

## Observations
Replaces `--` sequences in skip reasons with `- -` (`scripts/test_result_helpers/helpers.py:34`) to comply with the XML specification forbidding double hyphens inside comments.

## Context cost
1724 bytes, ~430 tokens.
