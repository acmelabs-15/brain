---
package: rjm
name: Automatic Generation of Invalid Demonstrations
slug: automatic-generation-of-invalid-demonstrations
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

# Automatic Generation of Invalid Demonstrations

## Definition — verbatim
> "Invalid demonstrations can be generated programmatically rather than hand-crafted." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:533

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 531 | defined here | Defined as an example design technique programmatically extracting and shuffling entity spans to generate contrastive invalid demonstrations. |

## Consumes
Valid few-shot demonstrations and named entity recognition models.

## Produces
Synthesized invalid reasoning demonstrations with shuffled entity positions.

## When applied
> "This enables scaling contrastive examples: take a valid reasoning chain, extract entities, shuffle them to create incoherence, and use the result as the invalid demonstration." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:535

## Sub-concepts
incoherent-objects

## Part of
contrastive-examples

## Implementation status
clean

## Design notes
Automatic Generation of Invalid Demonstrations is an algorithmic approach from Chia et al. (2023) for scaling contrastive few-shot datasets. By programmatically recognizing entities (numbers, formulas, persons) in valid rationales and randomly shuffling their positions, it automates the creation of incoherent negative examples without manual authoring.
