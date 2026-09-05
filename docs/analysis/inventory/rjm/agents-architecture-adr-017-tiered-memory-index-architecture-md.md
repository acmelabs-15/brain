---
package: rjm
path: .agents/architecture/ADR-017-tiered-memory-index-architecture.md
type: agent
bytes: 14780
unit: inv-rjm-9
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-017-tiered-memory-index-architecture.md, sha256: 64a961c19917209b4057c9db9a9ed7ae8798a49d842c7455ba077fddfdacfe99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-017-tiered-memory-index-architecture.md

## Purpose — required, verbatim
> "The Serena memory system stores learned skills and patterns in `.serena/memories/`. As of 2025-12-23:" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:24
(no explicit purpose statement)

## Design intent — required
Addresses the scaling bottleneck of the Serena memory system where growing numbers of learned skill files caused O(n) token consumption and discovery cost during agent memory queries. By establishing a three-tier retrieval hierarchy (Level 0 top index for domain routing, Level 1 domain index with activation keywords in a pure lookup table, Level 2 atomic skill files with lean actionable content), it enables agents to achieve up to 81.6% token reduction for single-skill retrieval without requiring vector embeddings. Without this architecture, memory lookups would either bloat context windows through flat monolithic domain files or incur high discovery overhead across hundreds of unindexed atomic files.

## Phase — required
none

## Inputs — required
- Problem context: `.serena/memories/` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:24
- Issue tracking and PR: `Issue #307 Memory Automation, PR #308` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:18
- Review input: `5-agent review (Critic, Architect, Analyst, Security, Independent-Thinker)` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:17

## Outputs — required
- Architectural decision: `Chosen option: Option 3 - Tiered Index Architecture` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:89
- Top-level routing index specification: `memory-index.md (Level 0) - ~400 tokens, cached` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:98
- Domain index specification: `skills-copilot-index.md (Level 1) - ~100 tokens` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:103
- Atomic skill specification: `copilot-pr-review.md (Level 2) - ~150 tokens` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:110

## Invokes — required
- script Validate-SkillFormat.ps1 — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:213
- script Validate-MemoryIndex.ps1 — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:214
- script Improve-MemoryGraphDensity.ps1 — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:292
- doc PRD-skills-index-registry.md — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:378
- doc 017-tiered-memory-index-critique.md — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:381
- doc 083-adr-017-quantitative-verification.md — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:382

## Invoked by — required
- doc README.md — .agents/architecture/README.md:105

## Concepts named — required, verbatim
- `Serena memory system` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:24 — used here
- `Consolidation` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:32 — used here
- `Atomicity` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:33 — used here
- `Token Efficiency` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:41 — used here
- `Retrieval Precision` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:42 — used here
- `Activation Vocabulary` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:43 — defined here
- `Flat Consolidation` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:51 — used here
- `Pure Atomic Files` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:61 — used here
- `Tiered Index Architecture` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:73 — defined here
- `Zero Retrieval-Value Content Elimination` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:134 — defined here
- `Progressive Refinement` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:145 — defined here
- `Index drift` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:202 — defined here
- `Keyword collision` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:203 — defined here
- `Cold start` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:204 — defined here
- `Pure lookup table format` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:232 — defined here
- `Index entry naming validation` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:258 — defined here
- `Orphan prefix detection` — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:267 — defined here

## Structure
- ## Context and Problem Statement — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:22
- ## Decision Drivers — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:39
- ## Considered Options — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:49
- ## Decision Outcome — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:87
- ## Validation — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:155
- ## Consequences — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:180
- ## Confirmation — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:209
- ## Reversibility Assessment — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:296
- ## Abort Criteria — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:308
- ## Sunset Trigger — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:320
- ## Implementation — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:330
- ## Migration Path — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:366
- ## Related Decisions — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:376
- ## References — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:386
- ## Validation Checklist — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:395

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `internal-contradiction` · .agents/architecture/ADR-017-tiered-memory-index-architecture.md:4,15 · Frontmatter declares `date: 2025-12-28` while body header declares `**Date**: 2025-12-23`.
- `missing-path` · .agents/architecture/ADR-017-tiered-memory-index-architecture.md:380 · Referenced session file `../sessions/2025-12-20-session-51-token-efficiency-debate.md` does not exist on disk.

## Observations
The ADR details an evolution from a flat registry approach (`PRD-skills-index-registry.md`) to a hierarchical tiered structure with pure lookup tables, motivated by the absence of vector embeddings in the Serena memory system. It contains specific design rules forbidding markdown titles, metadata blocks, and prose in domain index files to maximize token density.

## Context cost
14780 bytes (~3700 tokens). If following invoked architecture references (PRD and critique), adds ~15,000 bytes (~3750 tokens).
