---
package: rjm
name: Round Structure
slug: round-structure
kind: pattern
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

# Round Structure

## Definition — verbatim
> "Each questioning round follows this structure:" — .claude/skills/skillforge/references/regression-questions.md:206

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 204 | defined here | Iterative execution loop applying 2-3 questions per round until termination criteria are satisfied. |

## Consumes
Selected question categories and evolving skill design.

## Produces
Per-round documented insights and verdict (continue to Round N+1 or terminate).

## When applied
Governs every iteration of the regression questioning process in Phase 1.

## Sub-concepts
none

## Part of
regression-questioning-protocol

## Implementation status
clean

## Design notes
The execution framework for each iteration of regression questioning, applying 2–3 questions from diverse categories, integrating insights into the design, and checking whether new insights continue to emerge.
