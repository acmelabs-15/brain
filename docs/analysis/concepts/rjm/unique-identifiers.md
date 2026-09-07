---
package: rjm
name: Unique identifiers
slug: unique-identifiers
kind: pattern
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

# Unique identifiers

## Definition — verbatim
> "Unique identifiers**: Stable IDs enable robust cross-referencing" — .agents/architecture/ADR-007-memory-first-architecture.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 66 | used here | Stated as a foundational Zettelkasten principle enabling robust cross-referencing between memory notes. |

## Consumes
Domain concepts, ADR numbers, date stamps, and memory note filenames.

## Produces
Stable, persistent slugs and identifiers that do not change when file contents or metadata are revised.

## When applied
When naming memory markdown files, registering ADRs, and creating cross-references across documentation.

## Sub-concepts
none

## Part of
zettelkasten-method

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A structural convention ensuring every note, memory, or architectural decision possesses an immutable, unambiguous identifier. Stable naming allows autonomous agents to reliably cross-reference related artifacts without risking broken links or semantic collisions during refactoring.
