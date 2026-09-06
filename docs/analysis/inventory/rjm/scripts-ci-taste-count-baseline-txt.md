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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/taste_count_baseline.txt

## Purpose — required, verbatim
> "575" — scripts/ci/taste_count_baseline.txt:1
(no explicit purpose statement)

## Design intent — required
Persists the repository-wide integer baseline ceiling (575) of error-severity taste-lint violations across git-tracked files in the repository. Read by `taste_count_ratchet.py` to freeze technical debt and prevent the introduction of new stylistic, naming, or complexity anti-patterns (issue #3779).

## Phase — required
none

## Inputs — required
none

## Outputs — required
- Baseline count integer ("575" — scripts/ci/taste_count_baseline.txt:1) read by the taste count ratchet gate

## Invokes — required
none

## Invoked by — required
- script taste_count_ratchet.py — scripts/ci/taste_count_ratchet.py:13

## Concepts named — required, verbatim
none

## Structure
none (plain text single-value baseline file)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/taste_count_baseline.txt`, language: Plain text, lines: 2
- documented invocation:
  "taste_count_baseline.txt" — scripts/ci/taste_count_ratchet.py:13
  (plain text baseline data file; not directly executable as a standalone script)
- executed: yes
- actual command run: `cat sources/rjm/scripts/ci/taste_count_baseline.txt`
  abridged stdout: `575`
  actual exit code: 0
- documented exit codes: none (plain text data file; not an executable program) vs. actual exit paths in code: none
- for validators/gates: can it exit non-zero? no (plain text data file consumed by `taste_count_ratchet.py`). does it fail on the source repo's own default branch? no
- does the output match what the documentation claims? yes (file contains the baseline count 575)

## Defects — required
none

## Observations
- Classified as type `script` in the manifest and unit facts table due to placement under `scripts/ci/`, despite functioning purely as a text configuration baseline.
- Consumed by `scripts/ci/taste_count_ratchet.py` and registered in `scripts/ci/merge_tree_ratchet_registry.py`.

## Context cost
4 bytes (~1 token). Loads no dependencies.
