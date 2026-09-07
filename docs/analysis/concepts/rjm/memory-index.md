---
package: rjm
name: memory-index
slug: memory-index
kind: artifact
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

# memory-index

## Definition — verbatim
(used, not defined)

> "1. **Search** the `memory-index` for keywords matching your task." — docs/search-dont-load.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/search-dont-load.md | 13 | used here | Designated as the primary search index queried for task keywords prior to selective memory loading. |

## Consumes
Institutional memory catalog entries and category keywords.

## Produces
Search results mapping keywords to specific memory filenames.

## When applied
> "1. **Search** the `memory-index` for keywords matching your task." — docs/search-dont-load.md:13

## Sub-concepts
none

## Part of
search-don-t-load

## Implementation status
defects: orphan

## Design notes
`memory-index` is the central directory artifact indexing institutional memories across rjm. It allows agents to perform fast keyword lookups and identify task-relevant files without incurring the high token cost of loading full memories.
