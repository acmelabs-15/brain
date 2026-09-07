---
package: rjm
name: merge-tree ratchet
slug: merge-tree-ratchet
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/merge_tree_ratchet_check.py, sha256: accf975a25438d5accc844379fb857d685029146cca96ef12df3474a7cc26747}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# merge-tree ratchet

## Definition — verbatim
> "Merge-tree ratchet: evaluate all count ratchets on the merged result." — scripts/ci/merge_tree_ratchet_check.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_ratchet_check.py | 2 | defined here | Evaluates all registered count ratchets against a synthetic merge tree to detect integration regressions. |

## Consumes
Target base commit OID, candidate feature branch HEAD commit, registered count ratchets, and baseline violation files.

## Produces
A pass/fail gate verdict (exit 0 on pass, exit 1 on count regression, exit 100 on merge conflict).

## When applied
Executed during pre-PR local checks, pre-push hook execution, and pull request CI validation before merging branches into main.

## Sub-concepts
effective-baseline, stale-branch-hole, synthetic-merge-tree

## Part of
none

## Implementation status
clean

## Design notes
A verification gate that evaluates count ratchets against the synthetic merge-tree result of merging a branch into its base, preventing regressions caused by testing against outdated baseline references.
