---
package: rjm
path: scripts/ci/type_ignore_count_baseline.txt
type: script
bytes: 3
unit: inv-rjm-209
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/type_ignore_count_baseline.txt, sha256: b1ce0aa6fdf3cf349d773243dab9fbbe09d30619f38b0c1e8977e28c4f0bc495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/type_ignore_count_baseline.txt

## Purpose — required, verbatim
> "44" — scripts/ci/type_ignore_count_baseline.txt:1
(no explicit purpose statement)

## Design intent — required
Persists the repository-wide integer baseline count of `# type: ignore` comments for enforcement by `scripts/ci/type_ignore_count_ratchet.py`. This threshold defines the non-growing ceiling of type-checking suppressions permitted across all git-tracked Python source files. By fixing this count in a tracked text artifact, any introduction of new type ignores triggers a CI failure unless an intentional, reviewed baseline adjustment is committed.

## Phase — required
none

## Inputs — required
none (static text file holding a single integer count; updated by `type_ignore_count_ratchet.py --update` when suppressions are eliminated)

## Outputs — required
- Integer baseline count (44) read by the type-ignore count ratchet gate

## Invokes — required
none

## Invoked by — required
- script scripts/ci/type_ignore_count_ratchet.py — scripts/ci/type_ignore_count_ratchet.py:60

## Concepts named — required, verbatim
none

## Structure
none (plain text single-value baseline file)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/type_ignore_count_baseline.txt`, language: Plain text, lines: 2
- documented invocation:
  "type_ignore_count_baseline.txt" — scripts/ci/type_ignore_count_ratchet.py:60
  (plain text baseline data file; not directly executable as a standalone script)
- executed: yes
- actual command run: `cat sources/rjm/scripts/ci/type_ignore_count_baseline.txt`
  abridged stdout: `44`
  actual exit code: 0
- documented exit codes: none (plain text data file; not an executable program) vs. actual exit paths in code: none
- for validators/gates: can it exit non-zero? no (plain text data file consumed by `type_ignore_count_ratchet.py`)
- does the output match what the documentation claims? yes (file contains the documented baseline count 44)

## Defects — required
none

## Observations
- Classified as type `script` in the repository manifest and unit facts table due to its location under `scripts/ci/`, despite functioning purely as a text data configuration baseline.
- Verified by unit tests in `tests/ci/test_type_ignore_count_ratchet.py` and tracked in `scripts/ci/merge_tree_ratchet_registry.py`.

## Context cost
3 bytes (~1 token). Single-line text file; loads no dependencies.
