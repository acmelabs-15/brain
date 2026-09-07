---
package: rjm
name: Termination criteria
slug: termination-criteria
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Termination criteria

## Definition — verbatim
> "Score >= 70% OR iterations >= 3" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:49

## Also called — verbatim
> "Termination Criteria" — .claude/skills/skillforge/references/regression-questions.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 49 | defines | Defines the exit conditions (Score >= 70% OR iterations >= 3) for the evaluator-optimizer quality gate loop. |
| .claude/skills/skillforge/references/regression-questions.md | 9 | defines | Defines stopping conditions for the regression questioning protocol during skill analysis. |

## Consumes
Current iteration count, quality rubric scores, and new insight yields.

## Produces
A termination decision to accept output, escalate to a human user, or stop recursive questioning.

## When applied
Evaluated at the conclusion of each refinement cycle within iterative quality gates and analytical questioning.

## Sub-concepts
none

## Part of
evaluator-optimizer-loop

## Implementation status
defects: doc-drift

## Design notes
A deterministic boundary condition that halts iterative refinement when quality thresholds are met or safety resource limits are reached. Prevents infinite generation loops, non-converging edits, and uncontrolled token consumption across automated workflows.
