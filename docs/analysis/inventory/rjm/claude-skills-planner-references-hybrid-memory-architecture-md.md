---
package: rjm
path: .claude/skills/planner/references/hybrid-memory-architecture.md
type: reference
bytes: 2215
unit: inv-rjm-134
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/references/hybrid-memory-architecture.md, sha256: 79f1a2ca8b8e5d6daf194c5090a360f15831ecebaaea209da88a1204f53c1609}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/references/hybrid-memory-architecture.md

## Purpose — required, verbatim
> "80% of memory queries are structured lookups (entity, key, value), not fuzzy semantic queries. Match query type to storage type." — .claude/skills/planner/references/hybrid-memory-architecture.md:9

## Design intent — required
Defines a tiered, hybrid memory architecture for AI agents during planning. Noting that 80% of memory queries are exact key-value facts rather than fuzzy semantic queries, it pairs query patterns with specific storage engines (SQLite+FTS5 for exact facts, vector search for semantic recall, MEMORY.md for static context). It specifies a hybrid retrieval cascade, five decay tiers with TTLs (Permanent, Stable, Active, Session, Checkpoint), automated decision extraction, and pre-flight checkpoints serving as write-ahead logs.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/hybrid-memory-architecture.md — .claude/skills/planner/SKILL.md:294

## Concepts named — required, verbatim
- `Hybrid Memory Architecture` — .claude/skills/planner/references/hybrid-memory-architecture.md:7 — defined here
- `Storage Selection` — .claude/skills/planner/references/hybrid-memory-architecture.md:11 — defined here
- `MEMORY.md` — .claude/skills/planner/references/hybrid-memory-architecture.md:17 — used here
- `Hybrid Retrieval Cascade` — .claude/skills/planner/references/hybrid-memory-architecture.md:19 — defined here
- `Composite score` — .claude/skills/planner/references/hybrid-memory-architecture.md:29 — defined here
- `Memory Decay Tiers` — .claude/skills/planner/references/hybrid-memory-architecture.md:31 — defined here
- `Decision Extraction` — .claude/skills/planner/references/hybrid-memory-architecture.md:43 — defined here
- `Pre-Flight Checkpoints` — .claude/skills/planner/references/hybrid-memory-architecture.md:52 — defined here

## Structure
# Hybrid Memory Architecture — .claude/skills/planner/references/hybrid-memory-architecture.md:7
## Storage Selection — .claude/skills/planner/references/hybrid-memory-architecture.md:11
## Hybrid Retrieval Cascade — .claude/skills/planner/references/hybrid-memory-architecture.md:19
## Memory Decay Tiers — .claude/skills/planner/references/hybrid-memory-architecture.md:31
## Decision Extraction — .claude/skills/planner/references/hybrid-memory-architecture.md:43
## Pre-Flight Checkpoints — .claude/skills/planner/references/hybrid-memory-architecture.md:52
## Planning Implications — .claude/skills/planner/references/hybrid-memory-architecture.md:56

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/planner/references/hybrid-memory-architecture.md:2 · Frontmatter source `wiki/concepts/AI Productivity/Hybrid Memory Architecture for AI Agents.md` does not exist in the repository.

## Observations
Formulates a weighted composite retrieval ranking formula (`BM25 x 0.6 + freshness x 0.25 + confidence x 0.15`) combining lexical search, vector similarity, and recency. Frames pre-flight checkpoints as a write-ahead log for agent state that survives context window compression.

## Context cost
2215 bytes, approximately 550 tokens.
