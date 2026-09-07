---
package: rjm
name: Skipping Matrix Visualization
slug: skipping-matrix-visualization
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Skipping Matrix Visualization

## Definition — verbatim
> "<description>Skipping Matrix Visualization (going straight from requirements to patterns)</description>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:447

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 447 | defined here | Defined as a major anti-pattern in SKILL_SPEC where mental shortcuts bypass visual matrix documentation. |
| .claude/skills/cva-analysis/SKILL.md | 330 | defined here | Warned against in SKILL.md anti-patterns table for eliminating team collaboration and review artifacts. |

## Consumes
Mental models of commonalities and variabilities, undocumented assumptions.

## Produces
Opaque design decisions, hidden assumptions, inability for peer review or critique.

## When applied
Identified when developers proceed directly from problem statements to code architectures without creating a markdown table.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Skipping Matrix Visualization is a major CVA anti-pattern wherein an engineer attempts to mentally evaluate commonalities and variabilities and directly selects a pattern without documenting the matrix. This eliminates the collaborative, pedagogical, and verification benefits of CVA, leaving assumptions buried and unverifiable. rjm requires explicit markdown table visualization so teams and critic agents can validate the evidence backing an architectural choice.
