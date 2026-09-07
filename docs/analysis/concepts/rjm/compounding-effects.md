---
package: rjm
name: "Compounding Effects"
slug: compounding-effects
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Compounding Effects

## Definition — verbatim
> "### 7. Compounding Effects" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 92 | defined here | Thinking model contrasting compounding internal capability and IP against compounding vendor integration debt. |

## Consumes
Initial investment requirements, ongoing capability trajectory, and long-term asset value.

## Produces
Distinction between one-off expenditure and compounding asset accumulation in business case evaluations.

## When applied
Applied during Phase 1 analysis when weighing in-house capability growth against external software procurement.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift

## Design notes
A mental model in rjm that distinguishes linear costs from exponential compounding leverage. In build-versus-buy analyses, it highlights that building in-house compounds engineering skills, proprietary IP, and platform leverage, whereas buying compounds vendor integration debt and recurring subscription dependency.
