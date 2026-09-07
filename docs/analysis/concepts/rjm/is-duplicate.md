---
package: rjm
name: _is_duplicate
slug: is-duplicate
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/artifact_create_issues.py, sha256: fb16852af5a0a38c29c2fbd7d3d1ef2dcd5632c410819b730a2d2ea903c0255f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _is_duplicate

## Definition — verbatim
(used, not defined)

> "Return duplicate status, or None when the lookup fails." — scripts/ci/artifact_create_issues.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/artifact_create_issues.py | 42 | defined here | Helper function checking GitHub issues for existing duplicate titles before creation. |

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
clean

## Design notes
`_is_duplicate` is an internal duplicate check helper function in `scripts/ci/artifact_create_issues.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
