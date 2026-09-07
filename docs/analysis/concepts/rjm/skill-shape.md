---
package: rjm
name: skill shape
slug: skill-shape
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/modularity-guidelines.md, sha256: 5c151e7d32f6e7bfc22aa372e53f9a57af5d71069dbbf201e89eb90522632518}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skill shape

## Definition — verbatim
> "## What the study measured about skill shape" — .claude/skills/skillforge/references/modularity-guidelines.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/modularity-guidelines.md | 12 | defined here | Heading introducing empirical research measurements correlating skill shape to task pass rates. |

## Consumes
Skill file line counts, section structures, and repository skill package counts.

## Produces
Dimensional categorization (compact, standard length, detailed, exhaustive) and optimal skill packaging recommendations.

## When applied
Applied when designing skill architecture and sizing SKILL.md against progressive disclosure assets.

## Sub-concepts
none

## Part of
skillsbench

## Implementation status
defects: doc-drift, other

## Design notes
Skill shape represents the structural sizing and composition profile of an agent skill (number of active skills, document length, and depth of reference extraction). rjm uses empirical findings on skill shape to enforce standard length (<=300 lines in SKILL.md, <=10 top-level sections) and 2-3 focused skills over monolithic or exhaustive documentation.
