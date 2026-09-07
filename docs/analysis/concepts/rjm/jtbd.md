---
package: rjm
name: JTBD
slug: jtbd
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/monetizing-innovation.md, sha256: 79ad63f1ddd7e541184342dffb6214a1e38eab6391234a384bb43b710602b269}
  - {path: .claude/skills/business-strategy/references/storybrand.md, sha256: 77d4aad5404196cbf960a0fbf9858eaba544794ebd675fc4130afe2a77f2e038}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# JTBD

## Definition — verbatim
(used, not defined)

> "use JTBD to find the valued outcome, then immediately attach the WTP question" — .claude/skills/business-strategy/references/monetizing-innovation.md:52

## Also called — verbatim
`Jobs to Be Done` — .claude/skills/business-strategy/references/storybrand.md:55

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/monetizing-innovation.md | 52 | used here | Reconciles job discovery with explicit price validation by attaching willingness-to-pay queries to discovered job outcomes. |
| .claude/skills/business-strategy/references/storybrand.md | 55 | used here | Resolves interaction between JTBD discovering customer desires and StoryBrand framing customer-facing messaging copy. |

## Consumes
User discovery interviews, workflow observations, and customer frustration data.

## Produces
Identified core job outcome and customer desire to guide messaging and willingness-to-pay inquiries.

## When applied
Applied during customer discovery to identify what progress customers seek before attaching pricing or drafting marketing narratives.

## Sub-concepts
none

## Part of
jobs-to-be-done

## Implementation status
clean

## Design notes
JTBD is the widely used abbreviation for Jobs to Be Done in rjm's strategy references. It is treated as the primary mechanism for uncovering what progress a buyer seeks, serving as the factual anchor that feeds both pricing validation in Monetizing Innovation and narrative messaging in StoryBrand.
