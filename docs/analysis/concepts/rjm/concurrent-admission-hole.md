---
package: rjm
name: concurrent-admission hole
slug: concurrent-admission-hole
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

# concurrent-admission hole

## Definition — verbatim
(used, not defined)

> "DOES NOT CLOSE the concurrent-admission hole (issue #4345, reserve-band" — scripts/ci/merge_tree_ratchet_check.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_ratchet_check.py | 13 | used here | Cited to distinguish single-branch merge-tree checks from multi-branch concurrent merge races. |

## Consumes
none

## Produces
none

## When applied
Identified when analyzing multi-PR concurrency limits and repository admission controls.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An integration race condition pattern where multiple concurrent pull requests each independently pass verification against the current main ref, but collectively breach violation ceilings when merged in sequence.
