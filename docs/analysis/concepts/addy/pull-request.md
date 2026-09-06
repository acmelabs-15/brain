---
package: addy
name: pull request
slug: pull-request
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/git-workflow-and-versioning.json, sha256: d89f00dcf6164edc74e721272259db4423c9ea59dd73aecd6202194aeb716a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# pull request

## Definition — verbatim
(used, not defined)
> "Commit this work and open a pull request" — evals/cases/git-workflow-and-versioning.json:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/git-workflow-and-versioning.json | 18 | used here | Eval trigger prompt requesting committing staged work and opening a pull request. |

## Consumes
A feature branch with clean atomic commits and passing tests.

## Produces
A pull request on a hosting platform containing change descriptions, CI status, and reviewer feedback.

## When applied
When work on a feature branch is complete and ready for code review and merge.

## Sub-concepts
none

## Part of
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
A pull request serves as the collaborative boundary where feature branch changes undergo peer review, CI verification, and pre-merge quality gates before landing in trunk.
