---
package: addy
name: ~100-line changes
slug: 100-line-changes
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ~100-line changes

## Definition — verbatim
(used, not defined)

> "Trunk-based development, atomic commits, ~100-line changes, commit-as-save-point." — external/documentation-and-adrs.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/documentation-and-adrs.md | 12 | used here | Cited in related Ship phase skills grid describing git-workflow-and-versioning. |
| external/shipping-and-launch.md | 12 | used here | Cited in related Ship phase skills grid describing git-workflow-and-versioning. |

## Consumes
Planned tasks and decomposed implementation slices.

## Produces
Small, atomic commits and pull requests that can be reviewed in minutes.

## When applied
> "Making any code change (always)." — external/documentation-and-adrs.md:12

## Sub-concepts
none

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, orphan

## Design notes
A change-sizing discipline restricting code changes and commits to approximately 100 lines. This keeps cognitive load low during review, prevents merge conflicts, and ensures that regressions can be cleanly pinpointed and reverted via git bisect.
