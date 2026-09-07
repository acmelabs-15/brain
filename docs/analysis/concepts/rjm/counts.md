---
package: rjm
name: counts
slug: counts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/adr_lifecycle_baseline.json, sha256: cd19b2354ac9855f1658fe2d56233b96ff6dc7f32fcdde0a0dd0e10376fc2f73}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# counts

## Definition — verbatim
(used, not defined)

> "  \"counts\": {" — scripts/validation/adr_lifecycle_baseline.json:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/adr_lifecycle_baseline.json | 4 | defined here | JSON schema dictionary key mapping ADR lifecycle check names to allowed violation count ceilings. |

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
`counts` is a JSON schema object key mapping ADR lifecycle check names to allowed violation count ceilings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
