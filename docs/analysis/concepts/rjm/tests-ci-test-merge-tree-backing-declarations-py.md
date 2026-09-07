---
package: rjm
name: tests/ci/test_merge_tree_backing_declarations.py
slug: tests-ci-test-merge-tree-backing-declarations-py
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

# tests/ci/test_merge_tree_backing_declarations.py

## Definition — verbatim
(used, not defined)

> "by ``tests/ci/test_merge_tree_backing_declarations.py``." — scripts/ci/taste_count_ratchet.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/subprocess_encoding_count_ratchet.py | 69 | used here | Cited in docstring documenting the test guarding MERGE_TREE_BACKED declarations against registry state. |
| scripts/ci/taste_count_ratchet.py | 77 | used here | Cited in docstring confirming registry registration is tested by this test file. |
| scripts/ci/type_ignore_count_ratchet.py | 68 | used here | Cited in docstring confirming registry registration is pinned by this test suite. |

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
tests/ci/test_merge_tree_backing_declarations.py is the file path of a test file verifying registry backing declarations rather than an autonomous lifecycle concept.
