---
package: rjm
name: Self-Consistency
slug: self-consistency
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Self-Consistency

## Definition — verbatim
> "2. **Self-Consistency** (Wang et al., 2023) - Multiple reasoning paths reveal disagreement" — .claude/skills/decision-critic/SKILL.md:114

## Also called — verbatim
`SC` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 7 | used here | Cited in script docstring as theoretical grounding for sampling alternative reasoning trajectories. |
| .claude/skills/decision-critic/SKILL.md | 114 | used here | Academic grounding section citing Wang et al. for using multiple reasoning paths to expose disagreement. |
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 20 | used here | Technique selection table contrasting Self-Consistency with Multi-Chain Reasoning for evidence aggregation. |

## Consumes
Complex reasoning problems where single-chain inference is prone to idiosyncratic reasoning errors.

## Produces
Multiple diverse reasoning paths and an aggregated consensus answer selected via majority voting or meta-reasoning.

## When applied
Applied during critical reasoning, arithmetic, or decision evaluation tasks where sampling multiple diverse chains increases solution reliability.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path

## Design notes
An aggregation technique that samples multiple independent reasoning chains and identifies the most consistent conclusion, preventing brittle single-point reasoning failures and revealing latent disagreements in complex decision spaces.
