---
package: rjm
name: willingness-to-pay
slug: willingness-to-pay
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/business-strategy/references/monetizing-innovation.md, sha256: 79ad63f1ddd7e541184342dffb6214a1e38eab6391234a384bb43b710602b269}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# willingness-to-pay

## Definition — verbatim
> "If you have not asked customers about willingness-to-pay (WTP) yet, then stop feature work and run WTP interviews first." — .claude/skills/business-strategy/references/monetizing-innovation.md:11

## Also called — verbatim
`WTP` — .claude/skills/business-strategy/references/monetizing-innovation.md:11

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/monetizing-innovation.md | 11 | defines | First decision rule halting development until empirical willingness-to-pay data is captured from target customers. |
| .claude/skills/business-strategy/SKILL.md | 50 | references | Strategy skill trigger directing founders to validate pricing and WTP when customers balk at price or numbers are guessed. |

## Consumes
Target customer interviews, value proposition hypotheses, and product feature ideas.

## Produces
Empirical price boundaries, segment-specific valuation data, and pricing model constraints.

## When applied
Applied when people want the product but balk at the price, or when the team is guessing numbers without customer validation.

## Sub-concepts
wtp, leaders, fillers, killers, pricing-model, price-metric

## Part of
business-strategy

## Implementation status
clean in .claude/skills/business-strategy/references/monetizing-innovation.md; defects: missing-path in .claude/skills/business-strategy/SKILL.md

## Design notes
Willingness-to-pay is the core organizing principle of Monetizing Innovation within rjm. It asserts that price must be treated as a design input rather than an afterthought, requiring teams to halt technical feature development until customers have validated what they are genuinely willing to pay for the outcome.
