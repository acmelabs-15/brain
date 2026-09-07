---
package: rjm
name: MG_BASE_SHA
slug: mg-base-sha
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/determine_placeholder_range.py, sha256: 3273e70607f3dab85cc6f80bca7f4b994fdd75abb46e1457cfa82f31cb36cf97}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MG_BASE_SHA

## Definition — verbatim
(used, not defined)

> "MG_BASE_SHA  - github.event.merge_group.base_sha" — scripts/ci/determine_placeholder_range.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/determine_placeholder_range.py | 11 | used here | Environment variable consumed to resolve the base commit SHA during merge group events. |

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
`MG_BASE_SHA` is an environment variable name passing GitHub Actions merge group base SHA to `determine_placeholder_range.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
