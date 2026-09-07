---
package: matt
name: Pruning
slug: pruning
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

# Pruning

## Definition — verbatim
> "**Pruning**: single source of truth, relevance, and the no-op test applied sentence by sentence, against **duplication**, **sediment** and **sprawl**." — docs/productivity/writing-for-agents.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 30 | defined here | Defines pruning as enforcing single source of truth, relevance, and no-op testing against document decay. |
| external/writing-for-agents.md | 44 | defined here | Outlines the pruning discipline required to eliminate duplication, sediment, and sprawl in documentation. |
| skills/productivity/writing-for-agents/SKILL.md | 76 | defined here | Heading and practice of auditing documents sentence by sentence for truth, relevance, and behavioral impact. |

## Consumes
Agent instructions, skills, or documentation carrying accumulated text.

## Produces
Concise, high-density instructional text stripped of redundant or ineffective lines.

## When applied
During authoring passes and regular maintenance of agent-facing documentation.

## Sub-concepts
no-op, duplication, sediment, sprawl

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
The continuous editorial discipline of auditing agent-facing text sentence by sentence. Pruning aggressively removes no-ops, deduplicates repeated concepts, and eliminates stale sediment to ensure every token in the agent's window earns its keep.
