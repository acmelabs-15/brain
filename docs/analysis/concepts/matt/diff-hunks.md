---
package: matt
name: diff hunks
slug: diff-hunks
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

# diff hunks

## Definition — verbatim
(used, not defined)

> "The agent quotes commit messages, PRs or issues at you while resolving, not just diff hunks." — external/resolving-merge-conflicts.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 44 | used here | Contrasted with primary source context in verification criterion ensuring agents resolve by intent. |

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
Standard Git textual diff blocks representing localized differences between file versions, classified as name-only because it is external version control terminology rather than an authored development lifecycle concept.
