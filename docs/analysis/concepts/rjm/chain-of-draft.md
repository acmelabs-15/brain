---
package: rjm
name: Chain of Draft
slug: chain-of-draft
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

# Chain of Draft

## Definition — verbatim
> "CoD matches or surpasses CoT in accuracy while using as little as only 7.6% of the tokens, significantly reducing cost and latency across various reasoning tasks." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:366

## Also called — verbatim
> "Chain of Draft (CoD)" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:366

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 364 | defined here | Defined as an efficient reasoning technique encouraging minimal intermediate steps. |

## Consumes
Reasoning task where token generation budget, cost, or execution latency is constrained.

## Produces
Minimal intermediate calculation drafts and final problem solution.

## When applied
When token efficiency is needed without sacrificing multi-step reasoning accuracy.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Chain of Draft (CoD) replaces verbose Chain-of-Thought verbalization with compact intermediate scratchpad steps. By having the model record only essential numbers and operations, it achieves reasoning accuracy parity with CoT while consuming up to 92% fewer tokens.
