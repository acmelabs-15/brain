---
package: rjm
name: Search, Don't Load
slug: search-don-t-load
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: docs/search-dont-load.md, sha256: 336e01aa25edeeac39b428a68a91fc7b2928cc4855f38298f46850304eb88665}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Search, Don't Load

## Definition — verbatim
> "Agents search memory indexes before loading full memories. They never bulk-load all memories into context. This keeps token budgets low and retrieval focused." — docs/search-dont-load.md:8-9

## Also called — verbatim
`Memory-First Evidence Protocol` — docs/search-dont-load.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/search-dont-load.md | 1 | defined here | Defined in title heading as the memory-first architectural pattern requiring index searches before memory loading. |

## Consumes
Task keywords and memory index catalogs.

## Produces
Selectively loaded task-relevant memories and recorded retrieval evidence in PRs and session logs.

## When applied
> "Every session start." — docs/search-dont-load.md:79

## Sub-concepts
recording-retrieval-evidence, memory-index

## Part of
retrieval-gate

## Implementation status
defects: orphan

## Design notes
Search, Don't Load is an efficiency and context-budgeting pattern in rjm. By forcing agents to search lightweight memory indexes and load only relevant entries rather than bulk-loading historical files, it keeps prompt token overhead low while maintaining institutional knowledge.
