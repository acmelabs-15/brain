---
package: rjm
name: synthetic merge tree
slug: synthetic-merge-tree
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/merge_tree_ratchet_registry.py, sha256: eaa4167914b5f6f546a258a8dec7ed8ed0de02369eabec21885d10bf20dc9f2e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# synthetic merge tree

## Definition — verbatim
(used, not defined)

> "Single ownership registry for ratchets evaluated on a synthetic merge tree." — scripts/ci/merge_tree_ratchet_registry.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_ratchet_registry.py | 1 | used here | Named as the evaluation target structure on which registered count ratchets run. |

## Consumes
Target base commit OID and candidate branch HEAD commit OID.

## Produces
Git tree object representing the simulated merge result.

## When applied
Generated during pre-PR and CI ratchet verification before merging code into main branches.

## Sub-concepts
none

## Part of
merge-tree-ratchet

## Implementation status
clean

## Design notes
A simulated git tree artifact generated without working directory checkouts to test whether merging a branch would introduce policy or threshold regressions.
