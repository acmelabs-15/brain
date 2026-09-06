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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/ruff_count_baseline.txt

## Purpose — required, verbatim
> "0" — scripts/ci/ruff_count_baseline.txt:1
(no explicit purpose statement)

## Design intent — required
Stores the baseline violation count ceiling (currently 0) for the whole-repository ruff ratchet (`scripts/ci/ruff_count_ratchet.py`). The ratchet checks git-tracked Python files and enforces that the total count of lint violations does not exceed this baseline, preventing lint debt from increasing across the codebase while permitting decrease updates.

## Phase — required
none

## Inputs — required
- Read as an integer baseline by `scripts/ci/ruff_count_ratchet.py` — scripts/ci/ruff_count_ratchet.py:60
- Updated by `scripts/ci/ruff_count_ratchet.py` when invoked with `--update` — scripts/ci/ruff_count_ratchet.py:22

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- `script ruff_count_ratchet.py — scripts/ci/ruff_count_ratchet.py:60`

## Concepts named — required, verbatim
- `ruff_count_baseline.txt` — scripts/ci/ruff_count_ratchet.py:7 — used here

## Structure
- 0 — scripts/ci/ruff_count_baseline.txt:1

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/ruff_count_baseline.txt`, language: plain text / baseline data, lines: 2
- documented invocation: none (data file read by `scripts/ci/ruff_count_ratchet.py`)
- executed: no — text baseline data file, not an executable script
- actual command: none
- actual exit code: none
- documented exit codes: none
- for validators/gates: no
- does the output match what the documentation claims: yes, contains the single baseline integer 0

## Defects — required
- `other` · scripts/ci/ruff_count_baseline.txt:1 · Classified in manifest and partition as type script rather than config or doc.

## Observations
The baseline value is 0, indicating that the repository enforces zero whole-tree ruff lint debt across its tracked Python files.

## Context cost
Bytes: 2. Approximate tokens: ~1.
