---
package: matt
name: sediment
slug: sediment
kind: pattern
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

# sediment

## Definition — verbatim
> "Without a pruning discipline the default fate is **sediment**: stale layers that settle because adding feels safe and removing feels risky, until you must core down through them to find what is still live." — skills/productivity/writing-for-agents/SKILL.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 30 | defined here | Cites sediment as one of the degenerative document defects prevented by pruning. |
| external/writing-for-agents.md | 44 | used here | Refers to sediment as stale informational buildup in agent instructions. |
| skills/productivity/writing-for-agents/SKILL.md | 80 | defined here | Defines sediment as accumulated stale layers resulting from risk-averse append-only authoring. |

## Consumes
Unmaintained, append-only document updates over time.

## Produces
Stale layers of obsolete instructions that obscure live rules.

## When applied
Target of periodic pruning and relevance auditing.

## Sub-concepts
none

## Part of
pruning, writing-for-agents

## Implementation status
clean

## Design notes
The progressive degradation of documentation caused by an append-only mindset where authors fear removing outdated rules. Over time, sediment forms layers of obsolete instructions that confuse the agent and bury current system behaviors.
