---
package: rjm
name: Regression Questioning Protocol
slug: regression-questioning-protocol
kind: technique
package_phase: rjm:Phase 1: Deep Analysis
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Regression Questioning Protocol

## Definition — verbatim
> "The core methodology for exhaustive skill analysis. These questions are applied iteratively until no new insights emerge." — .claude/skills/skillforge/references/regression-questions.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 1 | defined here | Comprehensive protocol specifying 7 inquiry categories and round structures for deep skill analysis. |

## Consumes
Initial skill concept, user requirements, and domain context.

## Produces
Discovered requirements, anti-patterns, temporal projection analysis, and script specifications.

## When applied
Applied during Phase 1 (Deep Analysis) of SkillForge until termination criteria are met.

## Sub-concepts
question-categories, missing-elements, expert-simulation, failure-analysis, meta-questioning, round-structure

## Part of
skillforge

## Implementation status
clean

## Design notes
An iterative inquiry technique designed to prevent premature design convergence by systematically subjecting skill proposals to multi-category questioning across repeated rounds until analytical exhaustion.
