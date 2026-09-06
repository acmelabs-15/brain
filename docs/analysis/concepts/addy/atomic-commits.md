---
package: addy
name: atomic commits
slug: atomic-commits
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/git-workflow-and-versioning.json, sha256: d89f00dcf6164edc74e721272259db4423c9ea59dd73aecd6202194aeb716a75}
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

# atomic commits

## Definition — verbatim
> "Each commit does one logical thing:" — skills/git-workflow-and-versioning/SKILL.md:50

## Also called — verbatim
- "Atomic Commits" — skills/git-workflow-and-versioning/SKILL.md:48

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/git-workflow-and-versioning.json | 6 | used here | Eval trigger prompt requesting splitting a messy working tree into clean atomic commits. |
| external/ci-cd-and-automation.md | 12 | used here | Mentions atomic commits in context of continuous integration workflows. |
| external/documentation-and-adrs.md | 12 | used here | Cites atomic commits in documentation workflow guidance. |
| external/git-workflow-and-versioning.md | 5 | used here | Lists atomic commits as a core principle in the external web documentation summary. |
| external/observability-and-instrumentation.md | 12 | used here | Mentions atomic commits alongside observability practices. |
| external/shipping-and-launch.md | 12 | used here | Cross-references atomic commits in launch preparation guidelines. |
| skills/git-workflow-and-versioning/SKILL.md | 48 | defined here | Section heading introducing atomic commits principle. |

## Consumes
A single logical modification (such as adding an endpoint, creating a form component, or adding tests).

## Produces
A self-contained git commit with an imperative message that leaves the codebase in a compilable and passing state.

## When applied
Whenever committing changes to git, ensuring orthogonal concerns (fixes, refactors, features) are not mixed.

## Sub-concepts
none

## Part of
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
Atomic commits ensure that each git commit represents exactly one coherent, self-contained change. By isolating refactorings, bug fixes, and new features into distinct commits, teams can easily review diffs, revert specific changes safely, and use git bisect effectively.
