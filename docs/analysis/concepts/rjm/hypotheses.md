---
package: rjm
name: hypotheses
slug: hypotheses
kind: artifact
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

# hypotheses

## Definition — verbatim
> "1. **State your hypotheses.** Write down, in one page, your guesses: who the" — .claude/skills/business-strategy/references/four-steps.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/four-steps.md | 34 | defined here | Defined as explicit one-page guesses covering customer identity, problem, current expenditure, and solution advantages. |

## Consumes
Founder assumptions, preliminary market observations, and product concept.

## Produces
One-page documented statement of falsifiable business assumptions to be tested in customer interviews.

## When applied
At the initiation of the Customer Development process prior to conducting customer discovery interviews.

## Sub-concepts
value-hypothesis, growth-hypothesis

## Part of
customer-discovery, four-steps-to-the-epiphany

## Implementation status
clean

## Design notes
Hypotheses are explicit, documented guesses that formalize what must be true for a business model to succeed before any building or customer interviews occur. Documenting them as falsifiable statements prevents cognitive confirmation bias and anchors subsequent customer discovery interviews.
