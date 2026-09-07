---
package: rjm
name: reserve-band
slug: reserve-band
kind: technique
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

# reserve-band

## Definition — verbatim
(used, not defined)

> "DOES NOT CLOSE the concurrent-admission hole (issue #4345, reserve-band" — scripts/ci/merge_tree_ratchet_check.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_ratchet_check.py | 13 | used here | Referenced as the complementary mechanism (issue #4345) addressing concurrent admission races. |

## Consumes
Baseline violation ceilings and branch headroom statistics.

## Produces
A reserved safety margin below violation ceilings to absorb concurrent merges without breaches.

## When applied
Applied in repository merge gates and admission policies to mitigate concurrent merge race regressions.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A threshold buffering technique that maintains a safety margin below hard ratchet ceilings to prevent concurrent pull requests from breaching baselines upon joint admission.
