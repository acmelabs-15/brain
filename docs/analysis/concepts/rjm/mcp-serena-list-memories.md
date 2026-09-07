---
package: rjm
name: mcp__serena__list_memories
slug: mcp-serena-list-memories
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mcp__serena__list_memories

## Definition — verbatim
(used, not defined)

> "Agents currently discover skills by calling `mcp__serena__list_memories`, which returns 100+ memory names, then calling `mcp__serena__read_memory` multiple times to find relevant skills." — .agents/archive/planning/PRD-skills-index-registry.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 18 | used here | Cited as the MCP tool primitive returning all memory names during linear skill discovery. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
An MCP tool identifier for listing Serena memory items rather than an operational lifecycle concept.
