---
package: rjm
name: _is_ancestor
slug: is-ancestor
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/detect_unlanded_commits.py, sha256: 15fdb7d7a4802f2ef25f9db95d4751ef67ffee7a4738f3305770117ab0398371}
  - {path: scripts/validation/push_ref_staleness.py, sha256: 3fcaf0d51323fffbfb8addbad5c47d5bd9a6532d453c13f4bb289e2ef82987d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _is_ancestor

## Definition — verbatim
(used, not defined)

> "def _is_ancestor(sha: str, base_ref: str, repo: str) -> bool:" — scripts/maintenance/detect_unlanded_commits.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_unlanded_commits.py | 55 | defined here | Helper testing whether a commit SHA is an ancestor of base_ref via git merge-base. |
| scripts/validation/push_ref_staleness.py | 134 | defined here | Helper testing whether an older ref is an ancestor of a newer ref in the local graph. |

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
defects: doc-drift, orphan

## Design notes
_is_ancestor is a private Git merge-base ancestry predicate helper function rather than an SDLC lifecycle concept, classified as name-only per D-023.
