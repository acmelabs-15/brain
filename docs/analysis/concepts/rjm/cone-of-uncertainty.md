---
package: rjm
name: Cone of Uncertainty
slug: cone-of-uncertainty
kind: pattern
package_phase: rjm:implement
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Cone of Uncertainty

## Definition — verbatim
(used, not defined)
> "Estimates become more accurate as you progress:" — .claude/agents/implementer.md:634

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 632 | applies | Section heading and estimation table outlining the narrowing accuracy range from initial concept to mid-implementation. |

## Consumes
Task requirements, architecture plans, and initial project scope.

## Produces
Calibrated estimation ranges adjusted for novelty and implementation phase.

## When applied
Applied when estimating task duration and scheduling milestones across project phases.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
The Cone of Uncertainty establishes that estimation variance is an inherent physical property of software engineering rather than an agent defect. By explicitly modeling estimation variance ranging from 0.25x–4x at initial concept down to 0.9x–1.1x during mid-implementation, rjm prevents false precision in planning and encourages continuous recalibration as technical unknowns are resolved.
