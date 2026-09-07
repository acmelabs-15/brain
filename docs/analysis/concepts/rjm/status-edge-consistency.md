---
package: rjm
name: status-edge-consistency
slug: status-edge-consistency
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/adr_lifecycle_baseline.json, sha256: cd19b2354ac9855f1658fe2d56233b96ff6dc7f32fcdde0a0dd0e10376fc2f73}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# status-edge-consistency

## Definition — verbatim
(used, not defined)

> "    \"status-edge-consistency\": 0" — scripts/validation/adr_lifecycle_baseline.json:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/adr_lifecycle_baseline.json | 12 | defined here | Per-check ADR lifecycle violation ceiling set to 0 in baseline JSON. |
| scripts/validation/check_adr_lifecycle.py | 74 | defined here | Documented in check listing as requiring status superseded if and only if a superseded-by edge resolves. |

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
`status-edge-consistency` is a check name and baseline configuration key verifying that an ADR has status superseded if and only if a superseded-by edge resolves rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
