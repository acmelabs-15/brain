---
package: rjm
name: Disconnected knowledge
slug: disconnected-knowledge
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Disconnected knowledge

## Definition — verbatim
> "Orphaned artifacts aren't discoverable" — .claude/skills/research-and-incorporate/SKILL.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 154 | defined here | Tabulated as an anti-pattern warning that orphaned knowledge artifacts are not discoverable unless linked to related concepts. |

## Consumes
Isolated memory entries or orphaned analysis documents lacking semantic links.

## Produces
Mandatory requirement to link new memories to existing concepts in knowledge stores.

## When applied
Applied during Phase 4 (Memory Integration) when incorporating new knowledge into project memory.

## Sub-concepts
none

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
Disconnected knowledge is an anti-pattern warning that knowledge stored in isolation without relational graph links becomes impossible for future agent sessions to discover and utilize.
