---
package: rjm
name: jobs-to-be-done
slug: jobs-to-be-done
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/mom-test.md, sha256: 09980e08320f81700c21cb6346b6ea1b094637ea4566dc81d071508d84d090d3}
  - {path: .claude/skills/business-strategy/references/monetizing-innovation.md, sha256: 79ad63f1ddd7e541184342dffb6214a1e38eab6391234a384bb43b710602b269}
  - {path: .claude/skills/business-strategy/references/storybrand.md, sha256: 77d4aad5404196cbf960a0fbf9858eaba544794ebd675fc4130afe2a77f2e038}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# jobs-to-be-done

## Definition — verbatim
(used, not defined)

> "Against a value-proposition or jobs-to-be-done design skill: those frameworks" — .claude/skills/business-strategy/references/mom-test.md:89

## Also called — verbatim
`JTBD` — .claude/skills/business-strategy/references/monetizing-innovation.md:52

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/mom-test.md | 89 | references | Comparative framework analysis cautioning against using value-prop presentation before the job and cost are discovered. |
| .claude/skills/business-strategy/references/monetizing-innovation.md | 52 | references | Comparative framework analysis reconciling customer job discovery with explicit willingness-to-pay validation. |
| .claude/skills/business-strategy/references/storybrand.md | 55 | references | Framework alignment note resolving the relationship between customer job content and narrative storytelling words. |

## Consumes
Customer interview insights, observed workarounds, and user struggle data.

## Produces
Clear definition of the functional, emotional, and social job a customer hires a product to accomplish.

## When applied
Applied when discovering underlying customer motivations and defining value propositions prior to feature development.

## Sub-concepts
jtbd

## Part of
business-strategy

## Implementation status
clean

## Design notes
Jobs-to-be-done frames product development around the progress a customer seeks rather than demographic categories. In rjm's strategy skill, it operates as a content generator for messaging and pricing, discovering the underlying need which StoryBrand phrases and Monetizing Innovation prices.
