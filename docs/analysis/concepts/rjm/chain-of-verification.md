---
package: rjm
name: Chain-of-Verification
slug: chain-of-verification
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Chain-of-Verification

## Definition — verbatim
> "1. **Chain-of-Verification** (Dhuliawala et al., 2023) - Factored verification prevents confirmation bias" — .claude/skills/decision-critic/SKILL.md:113

## Also called — verbatim
`CoVe` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:204

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 6 | used here | Cited in module docstring as an academic foundation for structured decision critique. |
| .claude/skills/decision-critic/SKILL.md | 113 | used here | Academic grounding section citing Dhuliawala et al. for factored verification preventing confirmation bias. |
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 17 | defined here | Technique selection table defining Chain-of-Verification trigger conditions, tradeoffs, and accuracy gains. |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1437 | used here | Embedded verification reference demonstrating CoVe's 17% to 70% accuracy improvement on list-based questions. |

## Consumes
Baseline LLM generation or decomposed decision claims vulnerable to hallucination or confirmation bias.

## Produces
Independent verification questions, factual answers, and a final revised response with verified factual grounding.

## When applied
Applied when factual accuracy is critical and hallucination risk is elevated across single-turn and multi-turn workflows.

## Sub-concepts
factored-verification

## Part of
prompt-engineer

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path

## Design notes
An empirically validated four-step verification methodology (draft, plan verification questions, answer questions independently, synthesize final verified response) that systematically dismantles hallucination and confirmation bias by decoupling verification from initial generation.
