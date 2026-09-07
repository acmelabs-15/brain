---
package: rjm
name: probe tiers
slug: probe-tiers
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

# probe tiers

## Definition — verbatim
(used, not defined)

> "actionable. Add probe tiers here if that changes." — scripts/eval/panels/owner-copilot-cli.json:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/panels/owner-copilot-cli.json | 9 | used here | Model panel tier category evaluated to observe degradation relative to reference models. |

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
`probe tiers` refers to non-reference candidate model evaluation tiers in model panel configurations rather than an SDLC lifecycle concept.
