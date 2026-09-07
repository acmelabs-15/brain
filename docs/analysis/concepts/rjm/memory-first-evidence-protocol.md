---
package: rjm
name: Memory-First Evidence Protocol
slug: memory-first-evidence-protocol
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

# Memory-First Evidence Protocol

## Definition — verbatim
> "# Search, Don't Load: Memory-First Evidence Protocol" — docs/search-dont-load.md:1

## Also called — verbatim
`Search, Don't Load` — docs/search-dont-load.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/search-dont-load.md | 1 | defined here | Defined in title heading as the formal protocol governing memory search and evidence recording. |

## Consumes
Task keywords and memory index.

## Produces
Verifiable retrieval evidence logging specific memory artifacts loaded prior to reasoning.

## When applied
> "Every session start." — docs/search-dont-load.md:79

## Sub-concepts
recording-retrieval-evidence, memory-index

## Part of
retrieval-gate

## Implementation status
defects: orphan

## Design notes
The Memory-First Evidence Protocol is the governance mechanism in rjm that mandates verifiable proof of memory retrieval before an agent modifies files. Requiring explicit evidence rows prevents agents from bypassing institutional memory.
