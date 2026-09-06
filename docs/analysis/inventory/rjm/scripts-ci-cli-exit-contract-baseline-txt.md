---
package: rjm
path: scripts/ci/cli_exit_contract_baseline.txt
type: script
bytes: 3
unit: inv-rjm-200
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/cli_exit_contract_baseline.txt, sha256: 7ee29791fc17e986b97128845622b077fb45e349fdb80523fac9dba879b4ad60}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/cli_exit_contract_baseline.txt

## Purpose — required, verbatim
> "18" — scripts/ci/cli_exit_contract_baseline.txt:1
(no explicit purpose statement)

## Design intent — required
Persists the repository-wide integer baseline count of covered CLI exit contracts enforced by `scripts/ci/cli_exit_contract_ratchet.py`. This threshold defines the minimum number of extracted CI scripts whose command-line interfaces are proven by test suites to exit non-zero on failure conditions (issue #4068). Storing this ratchet threshold in a tracked text file prevents regressions in CLI error-handling test coverage without requiring manual CI configuration adjustments.

## Phase — required
none

## Inputs — required
none

## Outputs — required
- Integer baseline count (18) read by `cli_exit_contract_ratchet.py` gate — scripts/ci/cli_exit_contract_baseline.txt:1

## Invokes — required
none

## Invoked by — required
- script scripts/ci/cli_exit_contract_ratchet.py — scripts/ci/cli_exit_contract_ratchet.py:76
- script scripts/ci/merge_tree_ratchet_registry.py — scripts/ci/merge_tree_ratchet_registry.py:57

## Concepts named — required, verbatim
none

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/cli_exit_contract_baseline.txt`, language: Plain text, lines: 2
- documented invocation:
  "cli_exit_contract_baseline.txt" — scripts/ci/cli_exit_contract_ratchet.py:76
  (plain text baseline data file; not directly executable as a standalone script)
- executed: yes
- actual command run: `cat sources/rjm/scripts/ci/cli_exit_contract_baseline.txt`
  abridged stdout: `18`
  actual exit code: 0
- documented exit codes: none (plain text data file; not an executable program) vs. actual exit paths in code: none
- for validators/gates: can it exit non-zero? no (plain text data file consumed by `cli_exit_contract_ratchet.py`)
- does the output match what the documentation claims? yes (file contains the baseline count 18).

## Defects — required
none

## Observations
- Classified as type `script` in the repository manifest and unit facts table due to its location under `scripts/ci/`, despite functioning purely as a text data configuration baseline.
- Verified by unit tests in `tests/ci/test_cli_exit_contract_ratchet.py` and tracked in `scripts/ci/merge_tree_ratchet_registry.py`.

## Context cost
3 bytes (~1 token). Single-line text file; loads no dependencies.
