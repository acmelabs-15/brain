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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/subprocess_encoding_count_baseline.txt

## Purpose — required, verbatim
> "238" — scripts/ci/subprocess_encoding_count_baseline.txt:1
(no explicit purpose statement)

## Design intent — required
Persists the repository-wide integer baseline ceiling (238) of subprocess calls using text or encoding parameters without explicit `errors=` parameter handling across git-tracked Python files. Read by `subprocess_encoding_count_ratchet.py` to prevent regression of subprocess decode safety conventions (issue #4261).

## Phase — required
none

## Inputs — required
none

## Outputs — required
- Baseline count integer ("238" — scripts/ci/subprocess_encoding_count_baseline.txt:1) read by the subprocess encoding count ratchet gate

## Invokes — required
none

## Invoked by — required
- script subprocess_encoding_count_ratchet.py — scripts/ci/subprocess_encoding_count_ratchet.py:49

## Concepts named — required, verbatim
none

## Structure
none (plain text single-value baseline file)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/subprocess_encoding_count_baseline.txt`, language: Plain text, lines: 2
- documented invocation:
  "subprocess_encoding_count_baseline.txt" — scripts/ci/subprocess_encoding_count_ratchet.py:49
  (plain text baseline data file; not directly executable as a standalone script)
- executed: yes
- actual command run: `cat sources/rjm/scripts/ci/subprocess_encoding_count_baseline.txt`
  abridged stdout: `238`
  actual exit code: 0
- documented exit codes: none (plain text data file; not an executable program) vs. actual exit paths in code: none
- for validators/gates: can it exit non-zero? no (plain text data file consumed by `subprocess_encoding_count_ratchet.py`). does it fail on the source repo's own default branch? no
- does the output match what the documentation claims? yes (file contains the baseline count 238)

## Defects — required
none

## Observations
- Classified as type `script` in the manifest and unit facts table due to placement under `scripts/ci/`, despite functioning purely as a text configuration baseline.
- Consumed exclusively by `scripts/ci/subprocess_encoding_count_ratchet.py`.

## Context cost
4 bytes (~1 token). Loads no dependencies.
