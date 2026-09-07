---
package: rjm
name: tiers
slug: tiers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/panels/owner-copilot-cli.json, sha256: 883f252ebff9ef3be47e45e94785d5f1ce172e2a2fa73ac2bfa3ff2b11ab17f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tiers

## Definition — verbatim
(used, not defined)

> "\"tiers\": [" — scripts/eval/panels/owner-copilot-cli.json:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/panels/owner-copilot-cli.json | 15 | defined here | Top-level JSON key containing the array of model evaluation tier definitions. |

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
`tiers` is a JSON schema configuration key defining the array of model evaluation tiers rather than an SDLC lifecycle concept.
