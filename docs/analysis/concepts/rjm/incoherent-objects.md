---
package: rjm
name: Incoherent Objects
slug: incoherent-objects
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

# Incoherent Objects

## Definition — verbatim
> "This is the most effective type of invalid demonstration. The paper extracts entity spans (numbers, equations) from valid reasoning and randomly shuffles their positions:" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:498

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 496 | defined here | Defined as an invalid demonstration technique shuffling entity spans while preserving grammatical structure to teach contrastive reasoning. |

## Consumes
Valid reasoning rationales and entity spans (numbers, equations, persons).

## Produces
Contrastive invalid reasoning demonstrations with shuffled bridging entities.

## When applied
> "The incorrect example shows _incoherent objects_: the same calculations appear but in shuffled, nonsensical order." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:513

## Sub-concepts
none

## Part of
contrastive-examples

## Implementation status
clean

## Design notes
Incoherent Objects is a contrastive demonstration technique from Chia et al. (2023) where entity spans (numbers, variables, formulas) within valid reasoning chains are shuffled randomly. Because the prose remains grammatically intact while the logical objects are incoherent, it provides the most effective negative demonstration for training LLMs to follow sound step-by-step reasoning.
