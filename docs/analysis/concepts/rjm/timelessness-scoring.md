---
package: rjm
name: Timelessness Scoring
slug: timelessness-scoring
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/evolution-timelessness.md, sha256: 8df03e8ec69ae99547b2b687ecbc9bd7e8618f1a74e84f3300b4001da7819da8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Timelessness Scoring

## Definition — verbatim
> "## Timelessness Scoring" — .claude/skills/skillforge/references/evolution-timelessness.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-timelessness.md | 14 | defined here | Defines the concise scoring table (1-3 Reject, 4-6 Revise, 7-8 Approve, 9-10 Exemplary) requiring score >= 7. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 42 | used here | Lists Timelessness Scoring as extracted content relocated from SKILL.md to references/evolution-timelessness.md. |

## Consumes
Candidate skill specifications and architecture patterns.

## Produces
Discrete longevity score (1-10) and approval verdict.

## When applied
Applied as an evaluation gate before approving any generated skill.

## Sub-concepts
none

## Part of
evolution-lens

## Implementation status
clean · defects: orphan, internal-contradiction, doc-drift

## Design notes
A concise four-tier scoring metric providing rapid evaluation of whether a skill is transient, moderate, solid, or timeless, mandating a score of 7 or higher for approval.
