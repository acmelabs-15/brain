---
package: matt
name: leading words
slug: leading-words
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# leading words

## Definition — verbatim
> "A **leading word** is a compact concept already living in the model's pretraining that the agent thinks with while running the document (_lesson_, _fog of war_, _tracer bullets_)." — skills/productivity/writing-for-agents/SKILL.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 76 | defined here | Directs documentation authors to use the skill's leading words so documentation and execution instructions speak one language. |
| CHANGELOG.md | 78 | defined here | Explains how wait-what relies on a single precise leading word reusing tokens from global CLAUDE.md. |
| docs/productivity/writing-for-agents.md | 29 | defined here | Details how leading words recruit latent pretrained concepts to anchor agent execution and tool invocation. |
| external/writing-for-agents.md | 43 | defined here | Details how leading words recruit latent pretrained concepts to anchor agent execution and tool invocation. |
| skills/productivity/writing-for-agents/SKILL.md | 61 | defined here | Details how leading words recruit latent pretrained concepts to anchor agent execution and tool invocation. |

## Consumes
Latent conceptual knowledge and associative representations embedded in LLM pretraining.

## Produces
High token efficiency and precise behavioral anchoring in prompts, skills, and documentation.

## When applied
When authoring skills, instructions, or documentation to steer model reasoning using established priors.

## Sub-concepts
none

## Part of
writing-for-agents

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
A prompt and documentation technique that recruits rich latent concepts already present in an LLM's pretraining using compact tokens. Anchoring to pretrained terms guides complex multi-step behavior without spending context on verbose explanations.
