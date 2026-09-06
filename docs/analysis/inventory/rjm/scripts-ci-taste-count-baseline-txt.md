---
package: rjm
path: scripts/ci/taste_count_baseline.txt
type: script
bytes: 4
unit: inv-rjm-208
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/taste_count_baseline.txt, sha256: 1525321b2d02cd10e92bc697adc6bc64a8aab7abb9d97d7e9ea2ea9674d4636d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/taste_count_baseline.txt

## Purpose — required, verbatim
> "575" — scripts/ci/taste_count_baseline.txt:1
(no explicit purpose statement)

## Design intent — required
Stores the frozen upper bound of 575 error-severity taste violations (code size, naming, complexity, and skill size conventions) across git-tracked files in the repository (issue #3779). Read by `taste_count_ratchet.py` and registered in `merge_tree_ratchet_registry.py` to freeze existing taste lint debt and prevent regressions.

## Phase — required
rjm:test

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script scripts/ci/taste_count_ratchet.py — scripts/ci/taste_count_ratchet.py:69
- script scripts/ci/merge_tree_ratchet_registry.py — scripts/ci/merge_tree_ratchet_registry.py:42

## Concepts named — required, verbatim
- `575` — scripts/ci/taste_count_baseline.txt:1 — defined here
- `taste_count_baseline.txt` — scripts/ci/taste_count_ratchet.py:69 — used here

## Structure
- `575` — scripts/ci/taste_count_baseline.txt:1

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/taste_count_baseline.txt`, language: Plain text / baseline data, lines: 2
- documented invocation:
  - "taste_count_baseline.txt" — scripts/ci/taste_count_ratchet.py:69
- **executed:** no — plain text configuration and baseline data file, not an executable script
- actual command run: N/A, abridged stdout: N/A, **actual exit code:** N/A
- documented exit codes vs. actual exit paths:
  - documented: none
  - actual exit paths: none
- for validators/gates: not an executable validator; serves as the baseline data file consumed by `taste_count_ratchet.py`.
- does the output match what the documentation claims? N/A

## Defects — required
none

## Observations
Registered in `merge_tree_ratchet_registry.py:RATCHETS` with `merge_tree_backed=True`. The repository currently measures 571 violations, leaving 4 violations of slack under the 575 baseline.

## Context cost
4 bytes, approximately 2 tokens.
