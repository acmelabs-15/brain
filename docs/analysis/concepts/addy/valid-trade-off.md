---
package: addy
name: Valid trade-off
slug: valid-trade-off
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Valid trade-off

## Definition — verbatim
> "3. **Valid trade-off** — issue is real but cost of fixing exceeds cost of accepting. Document the trade-off explicitly so the user sees it." — skills/doubt-driven-development/SKILL.md:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 176 | defined here | Third-precedence classification class where fixing costs exceed accepting costs, requiring explicit documentation |

## Consumes
Adversarial review finding, cost/benefit evaluation against project constraints.

## Produces
Explicitly documented architectural or implementation trade-off surfaced to the user.

## When applied
During Step 4 (RECONCILE) of Doubt-Driven Development when a real issue is identified but fixing it is disproportionately expensive or out of scope.

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
Third-precedence finding class in Doubt-Driven Development that prevents over-engineering by explicitly acknowledging acceptable imperfections. Rather than pretending the issue does not exist, it forces transparency by requiring the trade-off to be documented for the user.
