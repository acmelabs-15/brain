---
package: rjm
name: four-tier memory
slug: four-tier-memory
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# four-tier memory

## Definition — verbatim
(used, not defined)

> "`.claude/skills/memory/SKILL.md` is the entry point for a four-tier memory" — .agents/architecture/ADR-063-memory-skill-decomposition.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 30 | used here | Referenced as the monolithic memory system architecture composed of semantic, episodic, causal tiers and a blocking gate. |

## Consumes
Agent observations, execution history, structured episodes, and graph entities.

## Produces
Persistent memory storage across multiple abstraction tiers for cross-session knowledge retrieval.

## When applied
Consulted across agent sessions to retrieve prior context, avoid repeated mistakes, and query architectural precedents.

## Sub-concepts
semantic, episodic, causal, memory-first-gate

## Part of
memory-first-architecture

## Implementation status
out-of-scope

## Design notes
Four-tier memory is rjm's persistence architecture spanning semantic (symbolic knowledge), episodic (session history), causal (reasoning graphs), and the Memory-First Gate. Although the underlying memory implementation is excluded from the lifecycle scope, the architecture concept demonstrates rjm's approach to persistent agent learning and context retrieval across development cycles.
