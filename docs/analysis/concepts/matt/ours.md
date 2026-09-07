---
package: matt
name: ours
slug: ours
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

# ours

## Definition — verbatim
(used, not defined)

> "Primary sources over <code class=\"ah-code-inline\">ours</code> and <code class=\"ah-code-inline\">theirs</code>" — external/resolving-merge-conflicts.md:31

## Also called — verbatim
`--ours` — external/resolving-merge-conflicts.md:32

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 31 | used here | Section heading warning against mechanical resolution in favor of consulting primary sources. |
| external/resolving-merge-conflicts.md | 32 | used here | Explains the failure mode of resolving conflicts mechanically via the `--ours` flag. |

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
A Git merge strategy option and conflict side identifier referring to the current branch version, classified as name-only because it is external version control syntax rather than an agent lifecycle concept.
