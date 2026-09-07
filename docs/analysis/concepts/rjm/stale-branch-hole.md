---
package: rjm
name: stale-branch hole
slug: stale-branch-hole
kind: pattern
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

# stale-branch hole

## Definition — verbatim
> "Closes the stale-branch hole: a PR branch can pass every ratchet" — scripts/ci/merge_tree_ratchet_check.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_ratchet_check.py | 4 | defined here | Identifies the failure mode where branches measured against outdated base baselines breach post-merge ceilings. |

## Consumes
none

## Produces
none

## When applied
Identified when evaluating whether pre-merge branch checks sufficiently protect target branch baselines from regression.

## Sub-concepts
none

## Part of
merge-tree-ratchet

## Implementation status
clean

## Design notes
An integration anti-pattern where an isolated pull request branch passes count ratchets against an outdated base ref with looser baselines, but causes main branch failures once merged into newer commits.
