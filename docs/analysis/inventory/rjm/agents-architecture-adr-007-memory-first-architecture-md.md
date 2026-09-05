---
package: rjm
path: .agents/architecture/ADR-007-memory-first-architecture.md
type: agent
bytes: 15338
unit: inv-rjm-6
deprecated: false
in_scope_via: inv-rjm-6
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-007-memory-first-architecture.md

## Purpose — required, verbatim
> "The ai-agents system evolved organically with memory as an afterthought - agents would execute tasks and optionally store learnings. This led to:" — .agents/architecture/ADR-007-memory-first-architecture.md:31 (no explicit purpose statement)

## Design intent — required
Establishes the foundational "memory-first" architectural principle across the agent system: memory retrieval must precede reasoning in all agent workflows. Resolves the recurring failure modes of repeated discoveries across sessions, lost institutional knowledge, inconsistent agent behaviors, and reliance on exact keyword matching. Establishes a dual memory architecture where Serena (`.serena/memories/*.md`) is git-synchronized, repository-portable, and canonical, while Forgetful MCP serves as a supplementary local-only semantic search and knowledge graph engine. Formalizes Zettelkasten note-taking principles (atomicity, unique stable identifiers, explicit contextual linking, organic emergence) for memory creation, introduces agent sidecars (`{agent}-sidecar-{descriptor}.md`) integrated into a 4-tier memory hierarchy, and defines a strict graceful degradation fallback protocol when semantic search is unavailable.

## Phase — required
cross-phase

## Inputs — required
Organic memory usage patterns and failure modes (.agents/architecture/ADR-007-memory-first-architecture.md:31-36), ruvnet/claude-flow multi-tier memory architecture and HNSW vector search research (.agents/architecture/ADR-007-memory-first-architecture.md:38-43), Forgetful MCP semantic memory with dual graph and meta-tools pattern (.agents/architecture/ADR-007-memory-first-architecture.md:48-55), BMAD Method scale-adaptive framework with agent sidecars (.agents/architecture/ADR-007-memory-first-architecture.md:56-62), Zettelkasten Method note-taking principles (.agents/architecture/ADR-007-memory-first-architecture.md:63-69), A-MEM dynamic agentic memory evolution research (.agents/architecture/ADR-007-memory-first-architecture.md:70-76), and project tracker items Epic #183, Issue #167, and Issue #173 (.agents/architecture/ADR-007-memory-first-architecture.md:248-262, 362-364).

## Outputs — required
The memory-first workflow mandate requiring memory retrieval before analysis (.agents/architecture/ADR-007-memory-first-architecture.md:79-87), Zettelkasten memory creation and organization standards (.agents/architecture/ADR-007-memory-first-architecture.md:88-98), dual memory architecture specification establishing Serena as canonical and Forgetful as supplementary (.agents/architecture/ADR-007-memory-first-architecture.md:99-121), graceful degradation fallback protocol (.agents/architecture/ADR-007-memory-first-architecture.md:122-150), tool migration direction deprecating `cloudmcp-manager` in favor of `mcp__serena__*` (.agents/architecture/ADR-007-memory-first-architecture.md:167-175), memory security and data classification guidelines (.agents/architecture/ADR-007-memory-first-architecture.md:204-230), Forgetful integration pattern (.agents/architecture/ADR-007-memory-first-architecture.md:264-290), and agent sidecar memory specification and naming convention (.agents/architecture/ADR-007-memory-first-architecture.md:291-340).

## Invokes — required
- doc ADR-008 — .agents/architecture/ADR-007-memory-first-architecture.md:355
- doc ADR-017 — .agents/architecture/ADR-007-memory-first-architecture.md:237

## Invoked by — required
- agent README — .agents/architecture/README.md:98
- agent ADR-011 — .agents/architecture/ADR-011-session-state-mcp.md:463
- agent ADR-063 — .agents/architecture/ADR-063-memory-skill-decomposition.md:61
- agent ADR-070 — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:51

## Concepts named — required, verbatim
- `ADR-007` — .agents/architecture/ADR-007-memory-first-architecture.md:2 — defined here
- `Memory-First Architecture` — .agents/architecture/ADR-007-memory-first-architecture.md:12 — defined here
- `Serena memory` — .agents/architecture/ADR-007-memory-first-architecture.md:21 — used here
- `SWE-bench-Lite` — .agents/architecture/ADR-007-memory-first-architecture.md:38 — used here
- `SWE-bench Verified` — .agents/architecture/ADR-007-memory-first-architecture.md:38 — used here
- `HNSW indexing` — .agents/architecture/ADR-007-memory-first-architecture.md:40 — used here
- `AgentDB` — .agents/architecture/ADR-007-memory-first-architecture.md:41 — used here
- `ReasoningBank` — .agents/architecture/ADR-007-memory-first-architecture.md:41 — used here
- `Forgetful MCP` — .agents/architecture/ADR-007-memory-first-architecture.md:48 — used here
- `Meta-tools pattern` — .agents/architecture/ADR-007-memory-first-architecture.md:50 — used here
- `Memory graph` — .agents/architecture/ADR-007-memory-first-architecture.md:51 — used here
- `Entity graph` — .agents/architecture/ADR-007-memory-first-architecture.md:51 — used here
- `Auto-linking` — .agents/architecture/ADR-007-memory-first-architecture.md:52 — used here
- `RRF fusion` — .agents/architecture/ADR-007-memory-first-architecture.md:54 — used here
- `Cross-encoder reranking` — .agents/architecture/ADR-007-memory-first-architecture.md:54 — used here
- `BMAD Method` — .agents/architecture/ADR-007-memory-first-architecture.md:56 — used here
- `Sidecar files` — .agents/architecture/ADR-007-memory-first-architecture.md:58 — used here
- `Critical actions` — .agents/architecture/ADR-007-memory-first-architecture.md:59 — used here
- `Quick Flow` — .agents/architecture/ADR-007-memory-first-architecture.md:60 — used here
- `Enterprise Method` — .agents/architecture/ADR-007-memory-first-architecture.md:60 — used here
- `Party Mode` — .agents/architecture/ADR-007-memory-first-architecture.md:61 — used here
- `Zettelkasten Method` — .agents/architecture/ADR-007-memory-first-architecture.md:63 — used here
- `Atomicity` — .agents/architecture/ADR-007-memory-first-architecture.md:65 — used here
- `Unique identifiers` — .agents/architecture/ADR-007-memory-first-architecture.md:66 — used here
- `Explicit linking` — .agents/architecture/ADR-007-memory-first-architecture.md:67 — used here
- `Emergence` — .agents/architecture/ADR-007-memory-first-architecture.md:68 — used here
- `A-MEM` — .agents/architecture/ADR-007-memory-first-architecture.md:70 — used here
- `SESSION-PROTOCOL` — .agents/architecture/ADR-007-memory-first-architecture.md:83 — used here
- `Dual Memory Architecture` — .agents/architecture/ADR-007-memory-first-architecture.md:99 — defined here
- `Serena` — .agents/architecture/ADR-007-memory-first-architecture.md:101 — used here
- `Forgetful` — .agents/architecture/ADR-007-memory-first-architecture.md:106 — used here
- `Graceful degradation` — .agents/architecture/ADR-007-memory-first-architecture.md:133 — defined here
- `Sidecar memories` — .agents/architecture/ADR-007-memory-first-architecture.md:295 — defined here
- `Tiered Memory` — .agents/architecture/ADR-007-memory-first-architecture.md:317 — used here

## Structure
- # ADR-007: Memory-First Architecture — .agents/architecture/ADR-007-memory-first-architecture.md:12
- ## Status — .agents/architecture/ADR-007-memory-first-architecture.md:14
- ### Current-State Amendment (2026-08-16) — .agents/architecture/ADR-007-memory-first-architecture.md:18
- ## Date — .agents/architecture/ADR-007-memory-first-architecture.md:25
- ## Context — .agents/architecture/ADR-007-memory-first-architecture.md:29
- ### Extended Research (2026-01-01) — .agents/architecture/ADR-007-memory-first-architecture.md:44
- ## Decision — .agents/architecture/ADR-007-memory-first-architecture.md:77
- ### Zettelkasten Principles (Augmented) — .agents/architecture/ADR-007-memory-first-architecture.md:88
- ### Dual Memory Architecture (Augmented) — .agents/architecture/ADR-007-memory-first-architecture.md:99
- ### Fallback Behavior — .agents/architecture/ADR-007-memory-first-architecture.md:122
- ## Rationale — .agents/architecture/ADR-007-memory-first-architecture.md:151
- ### Alternatives Considered — .agents/architecture/ADR-007-memory-first-architecture.md:153
- ### Trade-offs — .agents/architecture/ADR-007-memory-first-architecture.md:161
- ### Tool Selection (Clarification) — .agents/architecture/ADR-007-memory-first-architecture.md:167
- ## Consequences — .agents/architecture/ADR-007-memory-first-architecture.md:177
- ### Positive — .agents/architecture/ADR-007-memory-first-architecture.md:179
- ### Negative — .agents/architecture/ADR-007-memory-first-architecture.md:186
- ### Neutral — .agents/architecture/ADR-007-memory-first-architecture.md:192
- ## Confirmation — .agents/architecture/ADR-007-memory-first-architecture.md:196
- ## Security Considerations — .agents/architecture/ADR-007-memory-first-architecture.md:204
- ### Memory Integrity — .agents/architecture/ADR-007-memory-first-architecture.md:206
- ### Data Classification — .agents/architecture/ADR-007-memory-first-architecture.md:214
- ### Access Control — .agents/architecture/ADR-007-memory-first-architecture.md:222
- ### Storage Security — .agents/architecture/ADR-007-memory-first-architecture.md:226
- ## Implementation Status — .agents/architecture/ADR-007-memory-first-architecture.md:231
- ## Relationship to Issue #167 — .agents/architecture/ADR-007-memory-first-architecture.md:246
- ## Implementation Notes — .agents/architecture/ADR-007-memory-first-architecture.md:258
- ### Forgetful Integration (Augmented) — .agents/architecture/ADR-007-memory-first-architecture.md:264
- ### BMAD-Inspired Enhancements (Future) — .agents/architecture/ADR-007-memory-first-architecture.md:291
- #### Sidecar Naming Convention — .agents/architecture/ADR-007-memory-first-architecture.md:299
- ## Related Decisions — .agents/architecture/ADR-007-memory-first-architecture.md:353
- ## References — .agents/architecture/ADR-007-memory-first-architecture.md:358
- ### Original References — .agents/architecture/ADR-007-memory-first-architecture.md:360
- ### Augmentation References (2026-01-01) — .agents/architecture/ADR-007-memory-first-architecture.md:370

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-007-memory-first-architecture.md:83 References SESSION-PROTOCOL which does not exist as a file in the repository.
- missing-path · .agents/architecture/ADR-007-memory-first-architecture.md:202 References pre-commit hook script `scripts/Validate-SessionJson.ps1` which does not exist in the repository.
- missing-path · .agents/architecture/ADR-007-memory-first-architecture.md:368 References `.serena/memories/claude-flow-research-2025-12-20.md`, which is actually located at `.serena/memories/claude/claude-flow-research-2025-12-20.md`.

## Observations
Establishes the foundational memory-first doctrine (`Memory retrieval MUST precede reasoning in all agent workflows`). Articulates the critical cross-platform distinction between Git-synchronized canonical markdown storage (Serena) and non-portable local SQLite stores (Forgetful). Synthesizes Zettelkasten atomic principles with BMAD-style agent sidecars across four tiers: Master index (Tier 1), Domain index (Tier 2), Agent sidecar (Tier 3), and Atomic memory (Tier 4). Current-State Amendment (2026-08-16) recorded the retirement of mandatory committed session logs, allowing retrieval evidence in transcripts, pull requests, per-issue handoffs, or Serena memory.

## Context cost
15,338 bytes, ~3,800 tokens.
