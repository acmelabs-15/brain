---
package: rjm
name: commit-limit-bypass
slug: commit-limit-bypass
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
  - {path: scripts/ci/enforce_pr_validation.py, sha256: 98055348aecaa5267abc1dc2013bb1698ab930049bacdeebcae3166c0ee0d44d}
  - {path: scripts/validation/pr_commit_count.py, sha256: cb5a32b3515c33d1b879c79b391d4c3df5a688b7ab3d8933c89c30cbaa1eac3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# commit-limit-bypass

## Definition — verbatim
(used, not defined)

> "sanctioned relief was a `commit-limit-bypass` label" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 28 | used here | Former relief label intended for human maintainers to exempt PRs from commit count blocking. |
| scripts/ci/enforce_pr_validation.py | 4 | used here | Cited in docstring describing removal of the commit-limit-bypass label check in CI. |
| scripts/validation/pr_commit_count.py | 13 | used here | Cited in script docstring noting the removal of the bypass label and ceiling block. |

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
defects: orphan

## Design notes
A GitHub PR label identifier formerly used to bypass commit-count ceilings, classified as name-only per D-023.
