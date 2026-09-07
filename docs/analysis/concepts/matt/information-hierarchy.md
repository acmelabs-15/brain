---
package: matt
name: Information hierarchy
slug: information-hierarchy
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

# Information hierarchy

## Definition — verbatim
> "The core decision is where each piece sits on the **information hierarchy**, a ladder ranked by how immediately the agent needs the material:" — skills/productivity/writing-for-agents/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 27 | defined here | Defines the ladder from in-file step to in-file reference to disclosed reference behind a pointer. |
| external/writing-for-agents.md | 41 | defined here | Explains the three-tier ranking system structuring agent-facing documents. |
| skills/productivity/writing-for-agents/SKILL.md | 29 | defined here | Details the three tiers (in-file step, in-file reference, disclosed reference) and governing tradeoffs. |

## Consumes
Steps, rules, definitions, and reference material for an agent workflow.

## Produces
A tiered document architecture balancing immediacy against context bloat.

## When applied
When authoring or refactoring skills and guidance documents.

## Sub-concepts
progressive-disclosure, context-pointers

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
A three-tier organizational ladder (in-file steps, in-file reference, disclosed reference) that determines where instructional content should live. It resolves the fundamental tension between burying sequential steps under reference text versus hiding essential rules behind pointers.
