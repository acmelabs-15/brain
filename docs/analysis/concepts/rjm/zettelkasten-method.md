---
package: rjm
name: Zettelkasten Method
slug: zettelkasten-method
kind: reference
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Zettelkasten Method

## Definition — verbatim
> "Zettelkasten Method" — .agents/architecture/ADR-007-memory-first-architecture.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 63 | used here | Establishes the foundational principles of atomicity, unique identifiers, explicit linking, and emergence for agent memory. |

## Consumes
none

## Produces
none

## When applied
Applied across all memory capture, curation, and linking activities throughout the repository.

## Sub-concepts
atomicity, unique-identifiers, explicit-linking, emergence

## Part of
memory-first-architecture

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The foundational knowledge management methodology cited by ADR-007 to govern agent memory creation. By structuring learnings according to Zettelkasten tenets—atomic notes, stable identifiers, contextual links, and emergent insight synthesis—it ensures repository knowledge remains modular, searchable, and interconnected over time.
