---
package: rjm
name: Evaluation Axes
slug: evaluation-axes
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Evaluation Axes

## Definition — verbatim
> "## Evaluation Axes" — .claude/commands/plan.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/plan.md | 27 | defined here | Section heading defining the five qualitative dimensions used by the critic agent to review execution plans. |
| .claude/commands/spec.md | 140 | defined here | Section heading defining the evaluation criteria for vetting specification rigor and testability. |

## Consumes
Draft plan artifacts (`.claude/commands/plan.md`) or draft specification documents (`.claude/commands/spec.md`).

## Produces
Calibrated multi-dimensional critique highlighting missing requirements, unmitigated risks, or ordering flaws.

## When applied
During plan review by the `critic` subagent and during specification review prior to approval.

## Sub-concepts
scope-integrity, estimate-confidence, reversibility

## Part of
plan-command, spec-command

## Implementation status
defects: doc-drift

## Design notes
A structured framework of orthogonal evaluation dimensions used to review plans and specifications before commit. Rather than relying on generic review prompts, Evaluation Axes focus review agents on specific structural risks such as scope explosion, ungrounded estimates, testability, and rollback difficulty.
