---
package: rjm
path: .agents/architecture/ADR-007-memory-first-architecture.md
type: agent
bytes: 15338
unit: inv-rjm-6
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-007-memory-first-architecture.md

## Purpose — required, verbatim
> "Memory retrieval MUST precede reasoning in all agent workflows." — .agents/architecture/ADR-007-memory-first-architecture.md:79

## Design intent — required
ADR-007 establishes the architectural foundation that memory retrieval must always precede reasoning and task execution across all agent workflows. It resolves the core failure modes of treating memory as an afterthought—specifically repeated discoveries across sessions, lost retrospective insights, inconsistent behavior across agents, and lack of semantic search. The decision adopts a dual-layer memory system designating Serena (git-synchronized markdown files) as the canonical, cross-platform persistence layer and Forgetful MCP (local SQLite) as a supplementary semantic search engine with graceful degradation, governed by Zettelkasten principles (atomicity, unique identifiers, explicit linking, and emergence) and BMAD-style agent sidecars. Without it, agents suffer from cross-session amnesia and duplicate prior problem-solving effort.

## Phase — required
cross-phase

## Inputs — required
Task prompt, historical learnings, Serena memory files (`.serena/memories/*.md`), master `memory-index.md`, domain indexes (`skills-*-index.md`), agent sidecar memories (`{agent}-sidecar-*.md`), and local Forgetful MCP semantic search embeddings.

## Outputs — required
Retrieved memory context injected before task reasoning, new learnings persisted to Serena markdown files (`.serena/memories/*.md`), atomic note creation via Forgetful tool calls, auto-linked memory graph edges, agent sidecars, and retrieval evidence recorded in session logs, transcripts, or PR descriptions.

## Invokes — required
- doc ADR-008 — .agents/architecture/ADR-007-memory-first-architecture.md:355
- script scripts/Validate-SessionJson.ps1 — .agents/architecture/ADR-007-memory-first-architecture.md:202
- doc .serena/memories/claude-flow-research-2025-12-20.md — .agents/architecture/ADR-007-memory-first-architecture.md:368

## Invoked by — required
- doc ADR-007 — .agents/architecture/README.md:98
- agent ADR-007 — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:107
- agent ADR-007 — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:115
- agent ADR-007 — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:129
- doc ADR-007 — docs/search-dont-load.md:4

## Concepts named — required, verbatim
- `Memory-First Architecture` — .agents/architecture/ADR-007-memory-first-architecture.md:12 — defined here
- `Current-State Amendment` — .agents/architecture/ADR-007-memory-first-architecture.md:18 — defined here
- `Session logs` — .agents/architecture/ADR-007-memory-first-architecture.md:20 — used here
- `Serena memory` — .agents/architecture/ADR-007-memory-first-architecture.md:21 — used here
- `4-tier memory architecture` — .agents/architecture/ADR-007-memory-first-architecture.md:41 — used here
- `AgentDB` — .agents/architecture/ADR-007-memory-first-architecture.md:41 — used here
- `ReasoningBank` — .agents/architecture/ADR-007-memory-first-architecture.md:41 — used here
- `Meta-tools pattern` — .agents/architecture/ADR-007-memory-first-architecture.md:50 — used here
- `Dual graph architecture` — .agents/architecture/ADR-007-memory-first-architecture.md:51 — used here
- `Memory graph` — .agents/architecture/ADR-007-memory-first-architecture.md:51 — used here
- `Entity graph` — .agents/architecture/ADR-007-memory-first-architecture.md:51 — used here
- `Auto-linking` — .agents/architecture/ADR-007-memory-first-architecture.md:52 — used here
- `Multi-stage retrieval` — .agents/architecture/ADR-007-memory-first-architecture.md:54 — used here
- `BMAD Method` — .agents/architecture/ADR-007-memory-first-architecture.md:56 — used here
- `Sidecar files` — .agents/architecture/ADR-007-memory-first-architecture.md:58 — used here
- `Critical actions` — .agents/architecture/ADR-007-memory-first-architecture.md:59 — used here
- `Party Mode` — .agents/architecture/ADR-007-memory-first-architecture.md:61 — used here
- `Zettelkasten Method` — .agents/architecture/ADR-007-memory-first-architecture.md:63 — used here
- `Atomicity` — .agents/architecture/ADR-007-memory-first-architecture.md:65 — used here
- `Unique identifiers` — .agents/architecture/ADR-007-memory-first-architecture.md:66 — used here
- `Explicit linking` — .agents/architecture/ADR-007-memory-first-architecture.md:67 — used here
- `Emergence` — .agents/architecture/ADR-007-memory-first-architecture.md:68 — used here
- `A-MEM` — .agents/architecture/ADR-007-memory-first-architecture.md:70 — used here
- `Memory evolution` — .agents/architecture/ADR-007-memory-first-architecture.md:74 — used here
- `SESSION-PROTOCOL` — .agents/architecture/ADR-007-memory-first-architecture.md:83 — used here
- `Dual Memory Architecture` — .agents/architecture/ADR-007-memory-first-architecture.md:99 — defined here
- `Serena` — .agents/architecture/ADR-007-memory-first-architecture.md:101 — used here
- `Forgetful` — .agents/architecture/ADR-007-memory-first-architecture.md:106 — used here
- `Graceful degradation` — .agents/architecture/ADR-007-memory-first-architecture.md:133 — defined here
- `Pre-commit hook` — .agents/architecture/ADR-007-memory-first-architecture.md:202 — used here
- `Sidecar memories` — .agents/architecture/ADR-007-memory-first-architecture.md:295 — defined here
- `Tiered Memory` — .agents/architecture/ADR-007-memory-first-architecture.md:317 — used here
- `Agent Sidecar Workflow` — .agents/architecture/ADR-007-memory-first-architecture.md:327 — defined here

## Structure
- Frontmatter metadata (id, status, date, decision-makers, supersedes, superseded-by, explainer, implemented) — .agents/architecture/ADR-007-memory-first-architecture.md:1-10
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
- missing-path · .agents/architecture/ADR-007-memory-first-architecture.md:202 · referenced script `scripts/Validate-SessionJson.ps1` does not exist on disk.
- missing-path · .agents/architecture/ADR-007-memory-first-architecture.md:368 · referenced memory file `.serena/memories/claude-flow-research-2025-12-20.md` does not exist in the repository.
- internal-contradiction · .agents/architecture/ADR-007-memory-first-architecture.md:20-23,201-202 · lines 20-23 record that session logs are optional and committed log evidence is retired, while lines 201-202 in the un-amended confirmation section state session logs must evidence memory retrieval and a pre-commit hook validates session log compliance.

## Observations
- Integrates Zettelkasten knowledge management principles (atomicity, unique identifiers, explicit linking, and emergence) into AI agent memory architecture.
- Establishes a clear dual-memory tiering: Serena as the repository-synchronized markdown canonical store that travels across environments, and Forgetful MCP as a supplementary local vector store that degrades gracefully to lexical index search.

## Context cost
15338 bytes, ~3500 tokens.
