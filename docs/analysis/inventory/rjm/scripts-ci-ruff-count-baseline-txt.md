---
package: rjm
path: scripts/ci/ruff_count_baseline.txt
type: script
bytes: 2
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/ruff_count_baseline.txt, sha256: 9a271f2a916b0b6ee6cecb2426f0b3206ef074578be55d9bc94f6f3fe3ab86aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/ruff_count_baseline.txt

## Purpose — required, verbatim
> "0" — scripts/ci/ruff_count_baseline.txt:1
(no explicit purpose statement)

## Design intent — required
Persists the repository-wide integer baseline count of Ruff linting violations (0) for enforcement by `scripts/ci/ruff_count_ratchet.py`. This threshold defines the non-growing ceiling of linting debt permitted across all git-tracked Python source files. By fixing this count in a tracked text artifact, any introduction of new Ruff violations triggers a CI failure unless an intentional, reviewed baseline adjustment is committed.

## Phase — required
none

## Inputs — required
none (static text file holding a single integer count; updated by `ruff_count_ratchet.py --update` when violations are eliminated)

## Outputs — required
- Integer baseline count (0) read by the ruff count ratchet gate

## Invokes — required
none

## Invoked by — required
- script scripts/ci/ruff_count_ratchet.py — scripts/ci/ruff_count_ratchet.py:60

## Concepts named — required, verbatim
none

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/ruff_count_baseline.txt`, language: Plain text, lines: 2
- documented invocation:
  "ruff_count_baseline.txt" — scripts/ci/ruff_count_ratchet.py:60
- executed: yes
- actual command run: `cat sources/rjm/scripts/ci/ruff_count_baseline.txt`
  abridged stdout: `0`
  actual exit code: 0
- documented exit codes: none (plain text data file; not an executable program) vs. actual exit paths in code: none
- for validators/gates: can it exit non-zero? no (plain text data file consumed by `ruff_count_ratchet.py`)
- does the output match what the documentation claims? yes (file contains the documented baseline count 0)

## Defects — required
none

## Observations
- Classified as type `script` in the repository manifest and unit facts table due to its location under `scripts/ci/`, despite functioning purely as a text data configuration baseline.

## Context cost
2 bytes, 2 lines. Approximate tokens: ~1.
