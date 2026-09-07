---
package: rjm
name: Retrieval gate
slug: retrieval-gate
kind: gate
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

# Retrieval gate

## Definition — verbatim
(used, not defined)

> "[AGENTS.md](/AGENTS.md) Retrieval gate" — docs/search-dont-load.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/search-dont-load.md | 4 | used here | Cited in header metadata as the session startup gate defined in AGENTS.md. |

## Consumes
Session start trigger and task context.

## Produces
Gate verdict permitting or blocking file modifications based on retrieval evidence.

## When applied
> "Every session start." — docs/search-dont-load.md:79

## Sub-concepts
memory-index, recording-retrieval-evidence

## Part of
none

## Implementation status
defects: orphan

## Design notes
The Retrieval gate is an operational gate enforced at session start in rjm. By requiring agents to search the memory index and load task-relevant memories before modifying any files, it ensures institutional lessons inform all code changes.
