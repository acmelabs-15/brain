---
package: addy
name: git-workflow-and-versioning
slug: git-workflow-and-versioning
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/git-workflow-and-versioning.json, sha256: d89f00dcf6164edc74e721272259db4423c9ea59dd73aecd6202194aeb716a75}
  - {path: external/deprecation-and-migration.md, sha256: a1d9b5a8d3237126b624e386d75e89e29bc5112edd61057bfa2fa97003050a23}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# git-workflow-and-versioning

## Definition — verbatim
> "Trunk-based development, atomic commits, change sizing (~100 lines), the commit-as-save-point pattern" — README.md:277

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/git-workflow-and-versioning.json | 2 | used here | Names the skill evaluated in the test case configuration. |
| external/deprecation-and-migration.md | 12 | used here | Cross-references git workflow skill in related skills navigation. |
| external/documentation-and-adrs.md | 12 | used here | Links to git workflow skill in related skills documentation. |
| external/observability-and-instrumentation.md | 12 | used here | Lists git workflow skill in related skills navigation footer. |
| external/shipping-and-launch.md | 12 | used here | Cites git workflow skill as companion skill in the Ship phase. |
| README.md | 277 | used here | Catalogs the skill in the Ship phase table of the README. |

## Consumes
Working tree modifications, staged changes, feature branch history, and commit diffs.

## Produces
Atomic commits, clear imperative commit messages, clean branch histories, pull requests, and semantic release tags.

## When applied
> "Making any code change (always)" — README.md:277

## Sub-concepts
- trunk-based-development
- atomic-commits
- commit-as-save-point-pattern
- clean-history
- independently-green

## Part of
- addy:Ship

## Implementation status
defects: doc-drift, cross-file-contradiction

## Design notes
Provides version control rules and hygiene to prevent sprawling, unmanageable pull requests. Grounded in trunk-based development and the commit-as-save-point pattern, it ensures every commit represents a single logical change that is independently green, easy to review, and simple to revert or bisect.
