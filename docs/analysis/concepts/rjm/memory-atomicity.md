---
package: rjm
name: Memory atomicity
slug: memory-atomicity
kind: gate
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

# Memory atomicity

## Definition — verbatim
> "| Memory atomicity | Each memory <2000 chars, ONE concept | 4 |" — .claude/skills/research-and-incorporate/SKILL.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 131 | defined here | Blocking quality gate enforcing that each memory item is under 2000 characters and captures exactly one concept. |

## Consumes
Memory draft objects for Forgetful vector storage.

## Produces
Gate validation pass confirming size and conceptual focus.

## When applied
Evaluated during Phase 4 memory creation in research-and-incorporate.

## Sub-concepts
atomic, constrained

## Part of
phase-4-memory-integration, research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
A quality gate ensuring that persisted memory items remain discrete, focused on a single concept, and bounded under 2000 characters to prevent knowledge graph degradation.
