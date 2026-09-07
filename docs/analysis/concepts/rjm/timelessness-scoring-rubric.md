---
package: rjm
name: Timelessness Scoring Rubric
slug: timelessness-scoring-rubric
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/evolution-scoring.md, sha256: 7e5b7f9e76ce28a7545f65dc038b5e24a9820dd515183e5dbef0a06e8045c4cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Timelessness Scoring Rubric

## Definition — verbatim
> "## Timelessness Scoring Rubric" — .claude/skills/skillforge/references/evolution-scoring.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-scoring.md | 20 | defined here | Defines the 1-10 scoring rubric classifying skills from Ephemeral to Timeless. |

## Consumes
Candidate skill implementation details and dependency profiles.

## Produces
A numerical tier classification (1-2 Ephemeral, 3-4 Short-Lived, 5-6 Moderate, 7-8 Solid, 9-10 Timeless) and approval recommendation.

## When applied
Applied during step-by-step scoring of skills in Phase 2 specification and Phase 4 synthesis.

## Sub-concepts
none

## Part of
evolution-scoring-framework

## Implementation status
defects: doc-drift

## Design notes
A tiered rubric defining objective criteria across five lifespan brackets (from ephemeral weeks/months to timeless 5+ years) to standardize longevity evaluations and eliminate subjective scoring bias.
