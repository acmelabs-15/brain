---
package: rjm
name: sweep
slug: sweep
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# sweep

## Definition — verbatim
(used, not defined)

> "def sweep(" — scripts/eval/eval-model-panel.py:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-model-panel.py | 145 | defined here | Orchestrator function executing evaluation sweeps across (unit, tier) matrix cells. |

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
A Python orchestrator function (`sweep`) in `eval-model-panel.py` iterating across panel tiers and units, classified as `name-only` per D-023.
