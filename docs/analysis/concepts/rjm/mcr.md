---
package: rjm
name: MCR
slug: mcr
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

# MCR

## Definition — verbatim
(used, not defined)
> "MCR, USC" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:22

## Also called — verbatim
> "Multi-Chain Reasoning" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:20

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 22 | used here | Cited as a compatible stacking technique for Chain Synthesis in the selection guide. |

## Consumes
Multiple reasoning chains generated with intermediate reasoning steps and scattered evidence.

## Produces
Unified multi-chain context, a synthesized final answer, and an explanatory justification.

## When applied
When evidence is distributed across reasoning attempts and a meta-reasoning pass is required.

## Sub-concepts
chain-synthesis, explanation-generation

## Part of
aggregation-and-consistency

## Implementation status
clean

## Design notes
Acronym for Multi-Chain Reasoning, an aggregation technique in multi-turn prompting that uses sampled reasoning chains as sources of factual evidence rather than simple prediction votes. By having a meta-reasoner synthesize intermediate steps, MCR yields higher accuracy on multi-hop questions and produces coherent explanations.
