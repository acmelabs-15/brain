---
package: rjm
name: exploring-knowledge-graph
slug: exploring-knowledge-graph
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
  - {path: .claude/skills/context-gather/SKILL.md, sha256: 73ed9f6423ee4e10ff21aaa759ad92eea62f7f0af0923aef4e19e296bc883904}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: scripts/eval/examples/example-overlap-pairs.json, sha256: 77d2b12aee62aa503e2ce7b72d57abc2568f642f0719a2063254d825fbb0e0cd}
  - {path: scripts/eval/examples/overlap-pairs-issue-1949.json, sha256: 3175aeaacd4bd7bd3c878775c1d384a04b3b06309e3ab313dacecf74e7882644}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# exploring-knowledge-graph

## Definition — verbatim
> "Navigate created knowledge" — .claude/skills/research-and-incorporate/SKILL.md:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 33 | used here | Composed as the third skill in Step 0.5 to perform multi-hop traversal of connected entities. |
| .claude/skills/context-gather/SKILL.md | 4 | used here | Followed by context-gather to search across knowledge tiers before planning. |
| .claude/skills/research-and-incorporate/SKILL.md | 164 | used here | Listed as a related skill for navigating created knowledge graphs. |
| scripts/eval/examples/example-overlap-pairs.json | 5 | used here | Evaluated as an overlapping skill pair alongside curating-memories. |
| scripts/eval/examples/overlap-pairs-issue-1949.json | 5 | used here | Evaluated in overlap testing paired with memory Tier-1 semantic search. |

## Consumes
Entity queries, starting nodes, and knowledge graph structure.

## Produces
Multi-hop graph traversal results, connected entities, and blast-radius adjudications.

## When applied
During prior-art exploration, context gathering, and blast-radius evaluation.

## Sub-concepts
none

## Part of
memory-first-gate, knowledge-graph

## Implementation status
out-of-scope (memory knowledge graph skill excluded per METHOD §1.2)

## Design notes
A multi-hop graph traversal skill that explores connected entities and dependencies across repository knowledge representations to surface implicit blast-radius impacts.
