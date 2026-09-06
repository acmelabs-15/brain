---
package: addy
name: Keep Concerns Separate
slug: keep-concerns-separate
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Keep Concerns Separate

## Definition — verbatim
> "### 4. Keep Concerns Separate" — skills/git-workflow-and-versioning/SKILL.md:96
> "Don't combine formatting changes with behavior changes. Don't combine refactors with features." — skills/git-workflow-and-versioning/SKILL.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 96 | defined here | Dictates isolating refactoring, formatting, and behavioral changes into separate commits and PRs. |

## Consumes
Pending code modifications across multiple concerns (formatting, refactoring, new features).

## Produces
Disjoint commits each addressing exactly one type of concern.

## When applied
When staging changes and preparing pull requests.

## Sub-concepts
none

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Separating concerns ensures that formatting and refactoring changes never obscure behavioral modifications, making code reviews transparent and regressions straightforward to isolate and revert.
