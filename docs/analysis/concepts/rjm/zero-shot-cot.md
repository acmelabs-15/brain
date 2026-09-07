---
package: rjm
name: Zero-shot-CoT
slug: zero-shot-cot
kind: technique
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

# Zero-shot-CoT

## Definition — verbatim
(used, not defined)

> "Zero-shot-CoT still suffers from three pitfalls: calculation errors, missing-reasoning-step errors, and semantic misunderstanding errors..." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:315

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 315 | used here | Cited as the baseline step-by-step reasoning technique evaluated against Plan-and-Solve prompting. |

## Consumes
Arithmetic and multi-step reasoning queries.

## Produces
Step-by-step reasoning chains initiated without few-shot demonstrations.

## When applied
> "Adding "Let's think step by step" increases accuracy from 17.7% to 78.7% on arithmetic tasks" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:313

## Sub-concepts
none

## Part of
chain-of-thought

## Implementation status
clean

## Design notes
Zero-shot-CoT is the foundational zero-shot reasoning method (Kojima et al., 2022) that appends "Let's think step by step" to a prompt. In rjm, its baseline error distribution is analyzed to motivate structured planning extensions like Plan-and-Solve that address missing-step errors.
