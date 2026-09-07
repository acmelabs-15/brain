---
package: rjm
name: scripts/ci/merge_tree_ratchet_check.py
slug: scripts-ci-merge-tree-ratchet-check-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/subprocess_encoding_count_ratchet.py, sha256: f7908eed342041ee0688b4a809507595c39326ac8b2cea3c46a67166e1aca99e}
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
  - {path: scripts/ci/type_ignore_count_ratchet.py, sha256: 2bd382be93600e1610f8c48e5eb6371620f8a846d1f6e271df96e0aea04cee6b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scripts/ci/merge_tree_ratchet_check.py

## Definition — verbatim
(used, not defined)

> "underneath it: ``scripts/ci/merge_tree_ratchet_check.py`` measures the merged" — scripts/ci/subprocess_encoding_count_ratchet.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/subprocess_encoding_count_ratchet.py | 57 | used here | Cited in docstring explaining how merge-tree ratchet verification measures merged state. |
| scripts/ci/taste_count_ratchet.py | 76 | used here | Cited in docstring as the script measuring merged branch results for registered ratchets. |
| scripts/ci/type_ignore_count_ratchet.py | 67 | used here | Cited in docstring as the script evaluating merged tree counts for registered ratchets. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
scripts/ci/merge_tree_ratchet_check.py is the file path of a script that verifies ratchet counts against a simulated merge tree rather than an autonomous lifecycle concept.
