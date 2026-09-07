---
package: matt
name: merge-base
slug: merge-base
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# merge-base

## Definition — verbatim
(used, not defined)
> "which is measured from the merge-base and excludes staged and working-tree changes." — external/code-review.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review.md | 59 | used here | Explains that the three-dot diff calculates changes relative to the git merge-base commit. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A Git plumbing primitive designating the common ancestor commit used by three-dot diffs (`<fixed-point>...HEAD`), cataloged as `kind: name-only` per D-023 rather than an active development lifecycle concept.
