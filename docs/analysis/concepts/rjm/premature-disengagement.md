---
package: rjm
name: Premature Disengagement
slug: premature-disengagement
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Premature Disengagement

## Definition — verbatim
> "Abandoning based on internal prediction rather than feedback" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:784

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 784 | defined here | Identified as an agent overthinking failure mode where an agent gives up based on internal prediction rather than feedback. |

## Consumes
Predictive internal evaluations and initial environmental hurdles.

## Produces
Unwarranted task refusal, unnecessary user escalation, or premature termination.

## When applied
> "The research identifies three overthinking failure modes:" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:780

## Sub-concepts
none

## Part of
analysis-paralysis

## Implementation status
clean

## Design notes
Premature Disengagement is an autonomous agent failure mode (Cuadra et al., 2025) where the model predicts that a task will fail or is too difficult and halts work without attempting execution or checking actual runtime feedback. rjm counters this by pairing scope limitation with error normalization, prompting the agent to act on concrete data rather than speculative predictions.
