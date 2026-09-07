---
package: rjm
name: Semantic
slug: semantic
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

# Semantic

## Definition — verbatim
(used, not defined)

> "system (Tier 1 Semantic, Tier 2 Episodic, Tier 3 Causal, plus the BLOCKING" — .agents/architecture/ADR-063-memory-skill-decomposition.md:31

## Also called — verbatim
Tier 1 Semantic — .agents/architecture/ADR-063-memory-skill-decomposition.md:31

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 31 | used here | Identified as Tier 1 in the four-tier memory system responsible for symbolic repository facts. |

## Consumes
Repository structure, symbol definitions, project metadata, and documentation.

## Produces
Structured semantic facts and symbol indices accessible to agents during development.

## When applied
During repository exploration and code navigation to look up factual system knowledge.

## Sub-concepts
none

## Part of
four-tier-memory

## Implementation status
out-of-scope

## Design notes
Semantic memory represents Tier 1 of rjm's memory hierarchy, focusing on factual and symbolic repository understanding. It provides agents with structured, verifiable knowledge about project layout, interfaces, and symbol relationships, separating static factual recall from temporal session history or causal reasoning.
