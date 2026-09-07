---
package: matt
name: SKILL-MECHANICS.md
slug: skill-mechanics-md
kind: name-only
package_phase: none
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

# SKILL-MECHANICS.md

## Definition — verbatim
(used, not defined)

> "When the document you're writing is a skill, read [`SKILL-MECHANICS.md`](SKILL-MECHANICS.md) for frontmatter, invocation choice, and router skills." — skills/productivity/writing-for-agents/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 7 | used here | Disclosed reference file holding skill-only mechanics like frontmatter and invocation choice. |
| external/writing-for-agents.md | 27 | used here | Explains that skill-specific mechanics are moved into a linked SKILL-MECHANICS.md file. |
| skills/productivity/writing-for-agents/SKILL.md | 8 | used here | Pointer instructing the agent to consult SKILL-MECHANICS.md when authoring a skill. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A disclosed reference file name containing skill-specific authoring mechanics (frontmatter, router skills, invocation modes), classified as name-only per D-023 because it is a file name rather than an operational lifecycle concept.
