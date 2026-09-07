---
package: rjm
name: Multi-Chain Reasoning
slug: multi-chain-reasoning
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

# Multi-Chain Reasoning

## Definition — verbatim
> "### Multi-Chain Reasoning (MCR)" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:446

## Also called — verbatim
`MCR` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:446

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 20 | defined here | Detailed in the technique selection guide as an aggregation technique that uses multiple reasoning chains as evidence sources for meta-reasoning. |

## Consumes
Multiple generated reasoning chains containing intermediate reasoning steps for a complex query.

## Produces
A unified multi-chain evidence context, synthesized final answer, and comprehensive explanation.

## When applied
Applied to complex multi-hop question answering where distinct factual fragments and evidence are distributed across multiple reasoning attempts.

## Sub-concepts
none

## Part of
prompt-engineer, multi-turn-prompts

## Implementation status
clean

## Design notes
Multi-Chain Reasoning (MCR) transforms multi-sample aggregation from simple vote-counting into an evidence-synthesis process. Instead of discarding intermediate thoughts and taking a majority vote, MCR concatenates the reasoning steps from multiple chains into a single unified context and tasks a meta-reasoner with synthesizing facts across paths, outperforming standard self-consistency on multi-hop queries.
