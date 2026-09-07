---
package: rjm
name: Customer Creation
slug: customer-creation
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/four-steps.md, sha256: 1153c76e5c629d228368c8e4db35c04e933c3fd7e4baf8d71d0b7c93f7e60372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Customer Creation

## Definition — verbatim
> "to Customer Creation (demand generation) and Company Building. This skill ends here." — .claude/skills/business-strategy/references/four-steps.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/four-steps.md | 23 | defined here | Identified as the post-validation phase focused on demand generation once a repeatable sales motion is proven. |

## Consumes
A repeatable, scalable sales motion proven on real strangers during Customer Validation.

## Produces
Large-scale customer demand generation and systematic marketing-driven customer acquisition.

## When applied
"If you have a repeatable, scalable sales motion proven on real strangers: move to Customer Creation (demand generation) and Company Building. This skill ends here." — .claude/skills/business-strategy/references/four-steps.md:22-23

## Sub-concepts
none

## Part of
four-steps-to-the-epiphany, customer-development

## Implementation status
clean

## Design notes
Customer Creation represents the third step of Steve Blank's Customer Development methodology, where marketing spend and demand generation scale after repeatable sales are proven. In this package's business-strategy reference, it marks the explicit boundary where early-stage exploratory validation ends and execution-oriented scaling begins, preventing premature marketing expenditures.
