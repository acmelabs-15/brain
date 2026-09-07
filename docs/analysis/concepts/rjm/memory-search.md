---
package: rjm
name: /memory-search
slug: memory-search
kind: technique
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

# /memory-search

## Definition — verbatim
> "Interactive search across all memory tiers. Good for exploratory queries." — docs/search-dont-load.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/search-dont-load.md | 40 | used here | Documented as an interactive slash command alternative for searching across memory tiers. |

## Consumes
User or agent query string.

## Produces
Interactive search results displaying matching memory entries across tiers.

## When applied
> "Good for exploratory queries." — docs/search-dont-load.md:43

## Sub-concepts
none

## Part of
search-don-t-load

## Implementation status
defects: orphan

## Design notes
`/memory-search` is a slash command in rjm providing interactive querying across all memory tiers. It provides agents and human developers an exploratory retrieval interface to discover relevant past learnings before starting work.
