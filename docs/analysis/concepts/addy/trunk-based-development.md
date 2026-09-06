---
package: addy
name: trunk-based development
slug: trunk-based-development
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# trunk-based development

## Definition — verbatim
> "DORA research consistently shows trunk-based development correlates with high-performing engineering teams." — skills/git-workflow-and-versioning/SKILL.md:20

## Also called — verbatim
> "Trunk-based development" — README.md:277
> "trunk-based development" — external/ci-cd-and-automation.md:12

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ci-cd-and-automation.md | 12 | used here | Listed in related skills summary for git-workflow-and-versioning |
| external/documentation-and-adrs.md | 12 | used here | Referenced in the Ship-phase related skills grid |
| external/git-workflow-and-versioning.md | 5 | used here | Summarized as a core git workflow practice on the skill landing page |
| external/observability-and-instrumentation.md | 12 | used here | Mentioned under related skills card for git-workflow-and-versioning |
| external/shipping-and-launch.md | 12 | used here | Cited in the related Ship skills catalog summary |
| README.md | 277 | used here | Highlighted in the skills table summary for git-workflow-and-versioning |
| skills/git-workflow-and-versioning/SKILL.md | 18 | defined here | Defined as the recommended core branching strategy under Core Principles |

## Consumes
Git repository, short-lived branch workflow, automated test suites.

## Produces
Frequent, small merges into the trunk or main branch with minimal merge conflict overhead.

## When applied
Applied whenever making code changes across the development lifecycle.

## Sub-concepts
`commit-as-save-point`, `change-sizing`

## Part of
none

## Implementation status
clean

## Design notes
Trunk-based development keeps developer and agent work tightly integrated by merging short-lived feature branches frequently back into the main branch, preventing long-lived branch drift, reducing merge conflicts, and enabling continuous delivery.
