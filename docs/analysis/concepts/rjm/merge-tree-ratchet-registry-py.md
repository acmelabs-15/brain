---
package: rjm
name: merge_tree_ratchet_registry.py
slug: merge-tree-ratchet-registry-py
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

# merge_tree_ratchet_registry.py

## Definition — verbatim
(used, not defined)

> "This baseline is NOT registered in ``merge_tree_ratchet_registry.py``." — scripts/ci/subprocess_encoding_count_ratchet.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/subprocess_encoding_count_ratchet.py | 53 | used here | Cited in docstring explaining why subprocess encoding count ratchet is omitted from registry. |
| scripts/ci/taste_count_ratchet.py | 72 | used here | Cited in docstring documenting registration in the central merge tree ratchet list. |
| scripts/ci/type_ignore_count_ratchet.py | 63 | used here | Cited in docstring documenting registration in the merge tree ratchet registry. |

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
merge_tree_ratchet_registry.py is the filename of a centralized registry script declaring merge-tree backed ratchet configurations rather than an autonomous lifecycle concept.
