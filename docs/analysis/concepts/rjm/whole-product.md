---
package: rjm
name: whole product
slug: whole-product
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/crossing-the-chasm.md, sha256: 0e83c9e9ba5da03e71119e2521b0bb544f1e9f5f3111fc53b7e1736cfaa4d95a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# whole product

## Definition — verbatim
> "Build the whole product. Pragmatists need the complete solution, not the core tech:" — .claude/skills/business-strategy/references/crossing-the-chasm.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/crossing-the-chasm.md | 38 | defined here | The complete end-to-end customer solution (software, integrations, support, services) required to satisfy pragmatic buyers. |

## Consumes
Core technology product, third-party integrations, professional services, documentation, and support infrastructure.

## Produces
A turnkey solution enabling pragmatist buyers to extract full value immediately out of the box.

## When applied
Step 3 of the Chasm framework when packaging an offering for the target beachhead segment.

## Sub-concepts
none

## Part of
crossing-the-chasm

## Implementation status
clean

## Design notes
An artifact and solution design model in rjm. Pragmatic buyers will not assemble disparate tools or build missing integrations; the whole product mandates that everything necessary to achieve the compelling reason to buy is provided out of the box.
