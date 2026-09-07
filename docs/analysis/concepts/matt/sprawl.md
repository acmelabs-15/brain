---
package: matt
name: sprawl
slug: sprawl
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

# sprawl

## Definition — verbatim
> "**Sprawl** is the failure mode here: a document simply too long, even when every line is live and unique." — skills/productivity/writing-for-agents/SKILL.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 30 | defined here | Identifies sprawl as a core document failure mode counteracted by pruning and hierarchy. |
| external/writing-for-agents.md | 44 | used here | Mentions sprawl as document bloat cured by progressive disclosure and pruning. |
| skills/productivity/writing-for-agents/SKILL.md | 43 | defined here | Defines sprawl as excessive document length that dilutes model attention across excess lines. |

## Consumes
Unbounded accumulation of instructions within a single file.

## Produces
Attenuation of model attention across excess lines.

## When applied
Remedied by progressive disclosure, context pointers, and splitting.

## Sub-concepts
none

## Part of
information-hierarchy, pruning, writing-for-agents

## Implementation status
clean

## Design notes
An informational anti-pattern where a document becomes excessively long despite containing valid, non-redundant text. Sprawl dilutes LLM attention across too many tokens, turning compliance with any single rule into an unreliable probability.
