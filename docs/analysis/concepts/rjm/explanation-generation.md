---
package: rjm
name: Explanation Generation
slug: explanation-generation
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

# Explanation Generation

## Definition — verbatim
> "82% of explanations rated high-quality" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 23 | defined here | Defined in the technique selection guide as a meta-reasoning pass providing interpretability alongside answers. |

## Consumes
Synthesized multi-chain evidence and intermediate reasoning steps from candidate chains.

## Produces
An interpretable, high-quality reasoning explanation accompanying the final prediction.

## When applied
"Interpretability required alongside answer" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:23

## Sub-concepts
none

## Part of
mcr

## Implementation status
clean

## Design notes
A meta-reasoning technique integrated into Multi-Chain Reasoning that produces detailed, interpretable explanations alongside the final answer. In rjm, it guarantees that complex multi-turn deductions are not opaque verdicts but backed by transparent, human-auditable reasoning chains.
