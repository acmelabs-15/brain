---
package: rjm
path: scripts/ci/subprocess_encoding_count_baseline.txt
type: script
bytes: 4
unit: inv-rjm-208
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/subprocess_encoding_count_baseline.txt, sha256: e4150f95f4c8ee60d27c7e7fbf59f1f3eebe130e1262cb9ea4788a1a20c109e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/subprocess_encoding_count_baseline.txt

## Purpose — required, verbatim
> "238" — scripts/ci/subprocess_encoding_count_baseline.txt:1
(no explicit purpose statement)

## Design intent — required
Stores the frozen ceiling of 238 subprocess calls across the repository that invoke text mode (`text=` or `encoding=`) without supplying `errors=` error-handling parameters (issue #4261). It is consumed by `subprocess_encoding_count_ratchet.py` in CI to ensure that ongoing code changes in the repository do not increase subprocess encoding debt.

## Phase — required
rjm:test

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script scripts/ci/subprocess_encoding_count_ratchet.py — scripts/ci/subprocess_encoding_count_ratchet.py:49

## Concepts named — required, verbatim
- `238` — scripts/ci/subprocess_encoding_count_baseline.txt:1 — defined here
- `subprocess_encoding_count_baseline.txt` — scripts/ci/subprocess_encoding_count_ratchet.py:49 — used here

## Structure
- `238` — scripts/ci/subprocess_encoding_count_baseline.txt:1

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/subprocess_encoding_count_baseline.txt`, language: Plain text / baseline data, lines: 2
- documented invocation:
  - "subprocess_encoding_count_baseline.txt" — scripts/ci/subprocess_encoding_count_ratchet.py:49
- **executed:** no — plain text configuration and baseline data file, not an executable script
- actual command run: N/A, abridged stdout: N/A, **actual exit code:** N/A
- documented exit codes vs. actual exit paths:
  - documented: none
  - actual exit paths: none
- for validators/gates: not an executable validator; serves as the baseline data file consumed by `subprocess_encoding_count_ratchet.py`.
- does the output match what the documentation claims? N/A

## Defects — required
none

## Observations
Records the single integer ceiling 238. Unlike other count ratchets under `scripts/ci/`, this baseline is intentionally not registered in `merge_tree_ratchet_registry.py` and is evaluated only during CI pytest execution.

## Context cost
4 bytes, approximately 2 tokens.
