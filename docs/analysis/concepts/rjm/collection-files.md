---
package: rjm
name: Collection Files
slug: collection-files
kind: artifact
package_phase: cross-phase
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

# Collection Files

## Definition — verbatim
> "Collection files (e.g., `skills-analysis.md`, `skills-documentation.md`) MUST be listed in the index with their own entries." — .agents/archive/planning/PRD-skills-index-registry.md:218

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 216 | defined here | Specified as functional requirement FR-9 defining handling of legacy multi-skill collection files in the registry. |

## Consumes
Pre-existing multi-skill markdown files grouping related patterns by domain.

## Produces
Distinct registry entries categorizing collection files separately from atomic skill files.

## When applied
Applied when indexing existing multi-skill files that coexist with atomic skill files.

## Sub-concepts
none

## Part of
skills-index-registry

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A legacy artifact format in rjm where multiple related skills were bundled into a single domain file (e.g. `skills-analysis.md`). The index registry explicitly catalogs them alongside atomic files to avoid retrieval ambiguity during migration.
