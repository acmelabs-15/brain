---
package: matt
name: Single source of truth
slug: single-source-of-truth
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Single source of truth

## Definition — verbatim
> "Keep each meaning in a **single source of truth**: one authoritative place, so changing the behaviour is a one-place edit." — skills/productivity/writing-for-agents/SKILL.md:78

## Also called — verbatim
`Single source of truth` — CHANGELOG.md:92

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 92 | defined here | Enumerated as Rule 4 for agent documentation and prompt authoring in the changelog |
| skills/productivity/writing-for-agents/SKILL.md | 78 | defined here | Core pruning rule requiring one authoritative location per meaning to prevent duplication |

## Consumes
Architecture specifications, prompt instructions, project conventions, and domain glossaries

## Produces
Centralized references and linked documentation without duplicated meanings

## When applied
When authoring skills, designing domain models, documenting architecture, or configuring environment conventions

## Sub-concepts
none

## Part of
writing-for-agents, ask-matt

## Implementation status
clean

## Design notes
The single source of truth pattern prevents contradictory instructions, synchronization drift, and unnecessary context consumption by maintaining every fact, prompt constraint, and vocabulary term in exactly one authoritative location, referencing it rather than duplicating it elsewhere.
