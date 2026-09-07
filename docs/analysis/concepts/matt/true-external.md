---
package: matt
name: true-external
slug: true-external
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# true-external

## Definition — verbatim
> "Third-party services (Stripe, Twilio, etc.) you don't control. The deepened module takes the external dependency as an injected port; tests provide a mock adapter." — skills/engineering/codebase-design/DEEPENING.md:25

## Also called — verbatim
`True external (Mock)` — skills/engineering/codebase-design/DEEPENING.md:23

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 43 | used here | Fourth dependency category in DEEPENING.md prescribing injected ports and mock adapters for 3rd-party APIs. |
| skills/engineering/codebase-design/DEEPENING.md | 23 | defined here | Defines seam placement and test mocking strategies for uncontrolled third-party services. |

## Consumes
Third-party external dependencies (e.g. Stripe, Twilio, external payment/messaging APIs) not controlled by the organization.

## Produces
Injected port interfaces isolating third-party API contracts and enabling deterministic mock adapters during testing.

## When applied
When deepening modules that integrate with third-party software or unowned external services:
> "Third-party services (Stripe, Twilio, etc.) you don't control. The deepened module takes the external dependency as an injected port; tests provide a mock adapter." — skills/engineering/codebase-design/DEEPENING.md:25

## Sub-concepts
port, adapter, mock

## Part of
codebase-design, deepening

## Implementation status
clean

## Design notes
The fourth dependency category in the deepening taxonomy, covering external SaaS providers and third-party APIs (such as Stripe or Twilio) whose behavior and availability cannot be directly controlled. Here, the deepened module defines an injected port representing its interaction with the external system, while tests provide a mock adapter. This isolates vendor-specific payloads and network flakiness to the system boundary.
