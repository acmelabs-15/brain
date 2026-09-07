---
package: matt
name: legwork
slug: legwork
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# legwork

## Definition — verbatim
> "Demand drives **legwork** (the digging the agent does within the work, latent in the wording rather than written as its own step), and it is not step-bound:" — skills/productivity/writing-for-agents/SKILL.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 28 | defined here | Explains that the demand of completion criteria drives the agent's internal digging and verification. |
| external/writing-for-agents.md | 42 | defined here | Describes legwork as the thorough exploratory effort prompted by rigorous completion standards. |
| skills/productivity/writing-for-agents/SKILL.md | 50 | defined here | Defines legwork as latent exploratory effort induced by demanding step criteria rather than explicit micro-steps. |

## Consumes
High-demand, exhaustive completion criteria.

## Produces
Thorough, self-directed exploration, verification, and analysis by the agent.

## When applied
During step execution when answering exhaustive criteria (e.g. "every modified model accounted for").

## Sub-concepts
none

## Part of
completion-criteria, writing-for-agents

## Implementation status
clean

## Design notes
The depth of autonomous exploration and verification an agent performs. Rather than scripting every micro-action, Matt's methodology induces legwork by framing completion criteria with uncompromising demand, compelling the model to exhaustively investigate before concluding.
