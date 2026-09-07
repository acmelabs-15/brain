---
package: rjm
name: Linked
slug: linked
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Linked

## Definition — verbatim
> "Connect to related existing memories (auto-linking + manual)" — .claude/skills/research-and-incorporate/references/workflow.md:363

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 363 | defined here | Specified as the fourth constraint under RULE 0, requiring new memories to be connected to related existing knowledge. |

## Consumes
New memory instances and existing memory graph connections.

## Produces
Bidirectional or multi-hop relationships between related memory nodes.

## When applied
Applied during memory integration in Phase 4 of research-and-incorporate.

## Sub-concepts
none

## Part of
forgetful-atomic-memories, phase-4-memory-integration

## Implementation status
defects: doc-drift

## Design notes
A relational constraint on knowledge storage ensuring newly created memories are linked to existing concepts, preventing disconnected orphan entries and enabling multi-hop traversal by agents.
