---
package: rjm
name: CoT
slug: cot
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CoT

## Definition — verbatim
(used, not defined)
> "**Prerequisite**: This guide assumes familiarity with single-turn techniques (CoT, Plan-and-Solve, RE2, etc.). Multi-turn techniques often enhance or extend single-turn methods across message boundaries." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 5 | used here | Cited as a foundational single-turn prerequisite technique that multi-turn methods extend across message boundaries. |

## Consumes
Problem statement or prompt requiring logical or arithmetic reasoning.

## Produces
Step-by-step intermediate reasoning chain preceding a final answer.

## When applied
Applied to complex reasoning tasks benefiting from explicit sequential deduction ("Let's think step by step").

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
Chain-of-Thought (CoT) is the foundational reasoning prompting technique where the model generates intermediate step-by-step logic before producing a final answer. In rjm's prompt engineering guides, it serves as the baseline reasoning strategy that multi-turn patterns (like Multi-Chain Reasoning and Complexity-Weighted Voting) sample, verify, and extend across message boundaries.
