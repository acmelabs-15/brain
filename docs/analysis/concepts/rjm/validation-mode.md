---
package: rjm
name: Validation mode
slug: validation-mode
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/mom-test.md, sha256: 09980e08320f81700c21cb6346b6ea1b094637ea4566dc81d071508d84d090d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Validation mode

## Definition — verbatim
> "If you already have an idea or prototype, then stay in Validation mode" — .claude/skills/business-strategy/references/mom-test.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/mom-test.md | 19 | defines | Operational interview posture used when an idea or prototype exists, requiring problem probing before testing commitment. |

## Consumes
Existing product prototype, mockups, or concrete solution hypothesis.

## Produces
Verification of problem severity followed by requests for binding commitments (pre-orders, data access, introductions).

## When applied
Applied when a product idea or working prototype already exists and needs empirical market testing without demo bias.

## Sub-concepts
commitment-and-advancement

## Part of
the-mom-test

## Implementation status
clean

## Design notes
Validation mode governs customer conversations once a prototype or specific solution exists. It mandates holding back the demo until the prospect independently articulates the targeted problem, ensuring any subsequent expression of interest is grounded in real need rather than polite reaction to technology.
