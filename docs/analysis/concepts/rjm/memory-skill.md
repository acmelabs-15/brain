---
package: rjm
name: Memory Skill
slug: memory-skill
kind: reference
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/integration-and-design.md, sha256: 37a4ebbbef480bfe271c45cbd567a65f527f81114f9f955e9ec7f8de6b401624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory Skill

## Definition — verbatim
(used, not defined)

> "### With Memory Skill" — .claude/skills/reflect/references/integration-and-design.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/integration-and-design.md | 21 | used here | Section detailing integration between skill observation sidecars and the repository memory retrieval system. |

## Consumes
Query strings and memory recall requests.

## Produces
Recalled observation memories and relevant constraints from sidecar files.

## When applied
Before proposing new memory updates to verify whether an observation is already recorded.

## Sub-concepts
none

## Part of
memory-system

## Implementation status
out-of-scope

## Design notes
External memory retrieval skill enabling agents to query existing sidecar observations and prevent redundant learning proposals, implemented outside the core lifecycle boundary.
