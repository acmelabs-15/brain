---
package: rjm
name: TaskSplit.fingerprint
slug: tasksplit-fingerprint
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TaskSplit.fingerprint

## Definition — verbatim
> "``TaskSplit.fingerprint``" — scripts/eval/_optimizer_core.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 25 | defined here | Documented and implemented as a SHA-256 fingerprint covering split seed, task IDs, and ratios to prevent eval set laundering. |

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
clean

## Design notes
`TaskSplit.fingerprint` is a dataclass attribute and integrity hash mechanism in `_optimizer_core.py` ensuring evaluation set consistency across optimization iterations, classified as `name-only` per D-023.
