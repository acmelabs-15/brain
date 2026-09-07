---
package: rjm
name: Expert Simulation
slug: expert-simulation
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

# Expert Simulation

## Definition — verbatim
> "Simulate domain experts reviewing the design." — .claude/skills/skillforge/references/regression-questions.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 37 | defined here | Category 2 regression questioning adopting Domain, UX, Architect, Security, Performance, and Maintenance lenses. |

## Consumes
Candidate skill design.

## Produces
Multi-perspective critiques and architectural recommendations.

## When applied
Applied during Phase 1 deep analysis across at least three simulated expert perspectives.

## Sub-concepts
none

## Part of
question-categories

## Implementation status
clean

## Design notes
A questioning technique that simulates six specialized professional personas (Domain Expert, UX Expert, Systems Architect, Security Expert, Performance Expert, Maintenance Engineer) to evaluate designs from diverse angles.
