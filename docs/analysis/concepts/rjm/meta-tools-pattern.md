---
package: rjm
name: Meta-tools pattern
slug: meta-tools-pattern
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Meta-tools pattern

## Definition — verbatim
> "Meta-tools pattern: 3 tools expose 42 underlying operations, preserving context window" — .agents/architecture/ADR-007-memory-first-architecture.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 50 | used here | Highlighted as a key technique in Forgetful MCP to preserve context window capacity. |

## Consumes
Diverse operational parameters and command payloads across multiple memory actions.

## Produces
A consolidated MCP tool surface presenting minimal top-level tools to the LLM.

## When applied
When integrating extensive sub-capabilities without exhausting prompt token budgets with verbose tool schemas.

## Sub-concepts
none

## Part of
forgetful

## Implementation status
out-of-scope

## Design notes
An interface optimization pattern that multiplexes numerous operations behind a small set of generic tool endpoints. By exposing only three tools to handle 42 distinct operations, Forgetful dramatically reduces the token footprint required for MCP tool definitions in the LLM's system prompt.
