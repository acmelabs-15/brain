---
package: rjm
name: KANO Model
slug: kano-model
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# KANO Model

## Definition — verbatim
> "### KANO Model" — .claude/agents/roadmap.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 41 | defined here | Defined as a framework classifying features by satisfaction-to-investment curve. |
| templates/agents/roadmap.shared.md | 47 | defined here | Defined in the shared roadmap prompt template for feature categorization. |

## Consumes
Candidate features and user expectation profiles.

## Produces
Categorization into Must-Have, Performance, Delighter, and Indifferent tiers.

## When applied
Applied during roadmap planning to prevent over-investing in basic expectations or under-investing in core differentiators.

## Sub-concepts
- must-have
- performance
- delighter
- indifferent

## Part of
- roadmap

## Implementation status
defects: doc-drift

## Design notes
The KANO Model provides a customer satisfaction taxonomy in rjm to qualify feature investment beyond raw RICE scores. By distinguishing non-negotiable baseline requirements from performance attributes and unexpected delighters, it guides the roadmap agent in constructing balanced releases that satisfy mandatory constraints without neglecting strategic differentiators.
