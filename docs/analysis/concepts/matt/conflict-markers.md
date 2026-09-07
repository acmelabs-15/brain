---
package: matt
name: conflict markers
slug: conflict-markers
kind: name-only
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# conflict markers

## Definition — verbatim
(used, not defined)

> "Mid-merge or mid-rebase, conflict markers in the tree" — external/resolving-merge-conflicts.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 30 | used here | Describes the file state condition where Git has inserted conflict markers during merge or rebase. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
resolving-merge-conflicts

## Implementation status
defects: orphan (external/resolving-merge-conflicts.md:1), doc-drift (external/resolving-merge-conflicts.md:28), doc-drift (external/resolving-merge-conflicts.md:30)

## Design notes
Standard Git conflict delimiter syntax (`<<<<<<<`, `=======`, `>>>>>>>`) indicating competing branch changes in a file, classified as name-only because it is external version control syntax rather than an agent lifecycle concept.
