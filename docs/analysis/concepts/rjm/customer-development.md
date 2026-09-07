---
package: rjm
name: Customer Development
slug: customer-development
kind: technique
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

# Customer Development

## Definition — verbatim
> "This skill applies Steve Blank's Customer Development method to" — .claude/skills/business-strategy/references/four-steps.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/four-steps.md | 4 | defined here | Four-step methodology focused on learning and hypothesis testing with buyers before scaling operations. |

## Consumes
Founding business model hypotheses regarding customer problems, pricing, and distribution.

## Produces
Empirical customer discovery evidence, verified problem-solution fit, and repeatable sales processes.

## When applied
Throughout the early search phase of a startup to test assumptions against real market participants before scaling.

## Sub-concepts
customer-discovery, customer-validation

## Part of
four-steps-to-the-epiphany

## Implementation status
clean

## Design notes
A structured business model search framework in rjm formulated by Steve Blank. It pairs product development with parallel customer development, mandating that startups validate customer problems and purchase intent in person before scaling marketing or engineering organizations.
