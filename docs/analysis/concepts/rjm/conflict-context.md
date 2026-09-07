---
package: rjm
name: conflict_context
slug: conflict-context
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/prepare_conflict_context.py, sha256: b295ad081fbf5c4e50ad56f3ee61caa1437aa66f9c03863f47507511775c5491}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# conflict_context

## Definition — verbatim
(used, not defined)

> "Writes URL-percent-encoded conflict_context to GITHUB_OUTPUT and aborts" — scripts/ci/prepare_conflict_context.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/prepare_conflict_context.py | 6 | defined here | GitHub Actions step output key holding URL-encoded conflict markers and git log context for PR maintenance. |

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
`conflict_context` is a GitHub Actions output variable identifier in `prepare_conflict_context.py` carrying serialized merge conflict details rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
