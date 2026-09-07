---
package: rjm
name: Zero-shot-PS
slug: zero-shot-ps
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

# Zero-shot-PS

## Definition — verbatim
(used, not defined)

> "Zero-shot-PS answered 43 incorrectly; Zero-shot-PS+ answered 39 incorrectly." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:317

## Also called — verbatim
`Zero-shot-PS+` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:323

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 322 | used here | Evaluated in the error breakdown table comparing calculation, missing-step, and semantic errors on GSM8K. |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 323 | used here | Evaluated in its enhanced variant (Zero-shot-PS+) demonstrating minimal calculation (5%) and missing-step (7%) errors. |

## Consumes
Two-step planning prompts and problem formulations.

## Produces
Decomposed problem plans followed by step-by-step solutions.

## When applied
> "PS+ prompting achieves the least calculation (5%) and missing-step (7%) errors." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:315

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Zero-shot-PS (Plan-and-Solve) is a prompting strategy by Wang et al. (2023) prompting LLMs to understand the problem and devise a plan before solving it step by step. In rjm, it is evaluated alongside PS+ as an improvement over Zero-shot-CoT for reducing missing reasoning steps.
