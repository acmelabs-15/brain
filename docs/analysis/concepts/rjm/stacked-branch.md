---
package: rjm
name: stacked branch
slug: stacked-branch
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# stacked branch

## Definition — verbatim
(used, not defined)

> "took was to open an entirely new stacked branch and PR (the legitimate" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 77 | used here | Cited as an expensive workaround taken by agent sessions to route around gate verification failures. |

## Consumes
In-progress branch changes and unpushed commits.

## Produces
Successive dependent git branches and PRs dividing large changesets.

## When applied
When decomposing large PRs or routing around commit ceilings.

## Sub-concepts
none

## Part of
git-workflow

## Implementation status
clean

## Design notes
A git workflow technique where multiple sequential branches build upon one another to keep individual changesets small and reviewable, also used historically as a workaround for commit-count blocks.
