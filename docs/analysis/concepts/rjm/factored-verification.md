---
package: rjm
name: Factored Verification
slug: factored-verification
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

# Factored Verification

## Definition — verbatim
> "Answer verification questions without attending to the original response; prevents hallucination copying" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 167 | defined here | Step 4 title and prompt guidance directing independent answering within strict epistemic boundaries. |
| .claude/skills/decision-critic/SKILL.md | 29 | used here | Process verification step specifying independent question answering to avoid confirmation bias. |
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 18 | defined here | Technique selection table highlighting factored verification outperforming joint verification by 3-8 points. |

## Consumes
Verification questions generated in Step 3 and strictly bounded factual domain knowledge.

## Produces
Independent factual answers separated from implications, marked with verification statuses (VERIFIED, FAILED, UNCERTAIN).

## When applied
During Step 4 of decision criticism and multi-turn prompt engineering when hallucination copying must be prevented.

## Sub-concepts
epistemic-boundary

## Part of
chain-of-verification

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path

## Design notes
An advanced verification technique that answers verification questions independently without attending to the original generated response, isolating evidence gathering from belief to eliminate confirmation bias and prevent hallucination copying.
