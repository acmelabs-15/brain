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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/cli_exit_contract_baseline.txt

## Purpose — required, verbatim
> "18" — scripts/ci/cli_exit_contract_baseline.txt:1
(no explicit purpose statement)

## Design intent — required
Stores the numeric ratchet baseline (18) for the CLI exit contract test coverage gate (`scripts/ci/cli_exit_contract_ratchet.py`), ensuring that future changes cannot decrease the number of extracted CI scripts whose CLI exit contracts are proven by tests.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`18` — scripts/ci/cli_exit_contract_baseline.txt:1 — defined here

## Structure
(no headings, single-line integer text)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/cli_exit_contract_baseline.txt`, language: Plain text, lines: 2
- documented invocation: none (plain text configuration file containing integer count; typed as script in manifest mapping)
- **executed:** no — plain text baseline configuration file containing single integer count (`18`), read by `scripts/ci/cli_exit_contract_ratchet.py`
- actual command run: `cat sources/rjm/scripts/ci/cli_exit_contract_baseline.txt`, abridged stdout: `18`, **actual exit code**: 0
- documented exit codes: none; plain text data file with no execution logic
- for validators/gates: not directly executable; serves as ratchet threshold for `cli_exit_contract_ratchet.py`
- does the output match what the documentation claims? yes, holds baseline value 18

## Defects — required
none

## Observations
Tagged with type `script` in the manifest despite being a 3-byte plain text file containing the single integer `18`. Registered in `merge_tree_ratchet_registry.py` under tracked baselines.

## Context cost
3 bytes, approximately 1 token.
