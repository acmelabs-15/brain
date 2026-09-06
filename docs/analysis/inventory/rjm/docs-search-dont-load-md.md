---
package: rjm
path: docs/search-dont-load.md
type: doc
bytes: 2758
unit: inv-rjm-193
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/search-dont-load.md, sha256: 336e01aa25edeeac39b428a68a91fc7b2928cc4855f38298f46850304eb88665}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/search-dont-load.md

## Purpose — required, verbatim
> "Agents search memory indexes before loading full memories. They never bulk-load all memories into context. This keeps token budgets low and retrieval focused." — docs/search-dont-load.md:8-9

## Design intent — required
Defines the "Search, Don't Load" memory-first evidence protocol that requires agents to query the `memory-index` first, selectively load only task-matching memories, and record explicit retrieval evidence before modifying files. Without this pattern, agents either neglect institutional knowledge or dilute context by bulk-loading memories, incurring an observed 30% efficiency penalty.

## Phase — required
cross-phase

## Inputs — required
- "task keywords" — docs/search-dont-load.md:29
- "memory-index" — docs/search-dont-load.md:13
- "task-relevant memories" — docs/search-dont-load.md:63

## Outputs — required
- "Loaded: skills-pr-review-index, ci-observations" — docs/search-dont-load.md:59

## Invokes — required
- doc ADR-007-memory-first-architecture.md — docs/search-dont-load.md:4
- doc AGENTS.md — docs/search-dont-load.md:4
- script search_memory.py — docs/search-dont-load.md:48

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Search, Don't Load` — docs/search-dont-load.md:1 — defined here
- `Memory-First Evidence Protocol` — docs/search-dont-load.md:1 — defined here
- `Retrieval gate` — docs/search-dont-load.md:4 — used here
- `memory-index` — docs/search-dont-load.md:13 — used here
- `init-003-memory-first-monitoring-gate` — docs/search-dont-load.md:19 — used here
- `Serena MCP` — docs/search-dont-load.md:23 — used here
- `/memory-search` — docs/search-dont-load.md:40 — used here
- `Recording Retrieval Evidence` — docs/search-dont-load.md:53 — defined here

## Structure
- # Search, Don't Load: Memory-First Evidence Protocol — docs/search-dont-load.md:1
- ## What This Pattern Means — docs/search-dont-load.md:6
- ## Canonical Tool Calls — docs/search-dont-load.md:21
- ### Primary: Serena MCP (recommended) — docs/search-dont-load.md:23
- ### Alternative: Slash Command — docs/search-dont-load.md:37
- ### CLI: Python Script — docs/search-dont-load.md:45
- ## Recording Retrieval Evidence — docs/search-dont-load.md:53
- ### Good Evidence — docs/search-dont-load.md:66
- ### Bad Evidence — docs/search-dont-load.md:71
- ## When to Use This Pattern — docs/search-dont-load.md:77
- ## References — docs/search-dont-load.md:82

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · docs/search-dont-load.md:1 · Not invoked or referenced by any in-scope lifecycle entry point, command, or skill.

## Observations
Documents the memory-first evidence protocol requiring agents to search indexes before loading memories to preserve context budget and prevent 30% efficiency loss observed in `init-003-memory-first-monitoring-gate`. Includes explicit examples of good and bad evidence recording for pull requests and transcripts.

## Context cost
2758 bytes, approximately 700 tokens.
