---
package: rjm
name: Memory Interface Decision Matrix
slug: memory-interface-decision-matrix
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory Interface Decision Matrix

## Definition — verbatim
> "Start with cheapest option. Escalate only when cheaper option lacks capability." — CLAUDE.md:33

## Also called — verbatim
> "## Memory Interface Decision Matrix" — CLAUDE.md:24

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CLAUDE.md | 24 | defined here | Section heading introducing the graduated cost escalation matrix for memory retrieval interfaces. |

## Consumes
Retrieval intent, search query complexity, and runtime capability requirements.

## Produces
Deterministic selection of memory query interface (`/memory-search`, `exploring-knowledge-graph`, `search_memory.py`, or `mcp__serena__read_memory`).

## When applied
Applied when navigating memory or historical project context, escalating from low-cost CLI search to direct MCP calls.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Economic decision framework optimizing token overhead and latency by ordering memory retrieval tools from lightest (slash command) to heaviest (direct MCP).
