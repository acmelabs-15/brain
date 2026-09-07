---
package: rjm
name: MCR + Self-Refine
slug: mcr-self-refine
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

# MCR + Self-Refine

## Definition — verbatim
> "Use multi-chain evidence collection, then refine the synthesis:" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:769

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 767 | defined here | Defined as a composite technique combining multi-chain evidence synthesis with iterative refinement. |

## Consumes
Problem prompt, N parallel reasoning chains, meta-reasoning synthesis prompt, and critique feedback.

## Produces
Refined synthesized response integrating cross-chain reasoning evidence.

## When applied
When solving complex multi-step reasoning problems where evidence from multiple distinct reasoning paths must be synthesized and polished.

## Sub-concepts
multi-chain-reasoning, self-refine

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
MCR + Self-Refine combines the evidence aggregation power of Multi-Chain Reasoning (MCR) with the quality polish of Self-Refine. By first extracting and synthesizing complementary insights across multiple chains and then iteratively critiquing that synthesis, it maximizes accuracy on intricate reasoning tasks.
