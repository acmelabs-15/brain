---
package: addy
name: commit-as-save-point
slug: commit-as-save-point
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# commit-as-save-point

## Definition — verbatim
(used, not defined)
> "Trunk-based development, atomic commits, change sizing (~100 lines), and the commit-as-save-point pattern - plus branching, conflicts, releases, and semantic versioning." — external/git-workflow-and-versioning.md:5

## Also called — verbatim
> "The Save Point Pattern" — skills/git-workflow-and-versioning/SKILL.md:173

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ci-cd-and-automation.md | 12 | used here | Summarized in git-workflow-and-versioning card description in the related skills grid |
| external/documentation-and-adrs.md | 12 | used here | Listed in the related Ship skills catalog summary for git-workflow-and-versioning |
| external/observability-and-instrumentation.md | 12 | used here | Cited in git-workflow-and-versioning summary on the observability catalog page |
| external/shipping-and-launch.md | 12 | used here | Highlighted as a key git workflow practice in the Ship phase card |

## Consumes
Working directory modifications that pass local test and verification checks.

## Produces
Granular atomic git commits that act as rollback checkpoints during agent execution.

## When applied
Whenever an incremental unit of code is written, compiles, and passes its tests.

## Sub-concepts
none

## Part of
`trunk-based-development`

## Implementation status
clean

## Design notes
The commit-as-save-point pattern treats atomic commits as granular checkpoints during development, ensuring that if an agent or engineer encounters a failing dead-end, they can reset to the last clean save point without losing prior working progress.
