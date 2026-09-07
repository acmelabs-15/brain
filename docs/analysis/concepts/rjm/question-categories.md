---
package: rjm
name: Question Categories
slug: question-categories
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

# Question Categories

## Definition — verbatim
> "## Question Categories" — .claude/skills/skillforge/references/regression-questions.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 18 | defined here | Section heading introducing the 7 structured inquiry categories in the regression questioning protocol. |

## Consumes
Regression questioning requirements during deep analysis.

## Produces
Structured classification of inquiry across 7 orthogonal categories.

## When applied
Selected and sampled during each round of regression questioning.

## Sub-concepts
missing-elements, expert-simulation, failure-analysis, meta-questioning, script-and-automation-analysis

## Part of
regression-questioning-protocol

## Implementation status
clean

## Design notes
The seven-part taxonomy of analytical questions (Missing Elements, Expert Simulation, Failure Analysis, Temporal Projection, Completeness Verification, Meta-Questioning, Script/Automation) structuring regression questioning.
