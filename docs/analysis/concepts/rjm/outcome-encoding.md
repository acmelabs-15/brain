---
package: rjm
name: outcome encoding
slug: outcome-encoding
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# outcome encoding

## Definition — verbatim
> "| outcome encoding | Close the loop between action and result in a machine-readable way? | `present` / `partial` / `missing` |" — .claude/skills/world-model-diagnostic/SKILL.md:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 89 | defined here | Evaluation principle assessing whether systems close the feedback loop between actions and real-world results in machine-readable format. |

## Consumes
Action logs, state transitions, outcome measurements, and verification metrics.

## Produces
Principle classification (`present`, `partial`, or `missing`) and closed-loop feedback signals.

## When applied
Evaluated during the world-model diagnostic to determine if automated workflows possess the feedback loops necessary for reinforcement and error correction.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
A critical feedback principle in rjm ensuring that decisions made by automated agents are programmatically linked to downstream business and technical outcomes. Without machine-readable outcome encoding, agents cannot evaluate the efficacy of their actions or detect performance degradation over time.
