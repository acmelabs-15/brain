---
package: rjm
name: _SIZE_LIMIT_BYTES
slug: size-limit-bytes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/measure_npm_pack_size.py, sha256: 552893e4598f8c097aa7fefa2f26e604bdbdf2a1aa099a1f3035793a35835fc8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _SIZE_LIMIT_BYTES

## Definition — verbatim
(used, not defined)

> "_SIZE_LIMIT_BYTES = 52_428_800  # 50 MiB" — scripts/ci/measure_npm_pack_size.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/measure_npm_pack_size.py | 26 | defined here | Constant defining the 50 MiB threshold limit for npm package tarball sizes. |

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
`_SIZE_LIMIT_BYTES` is a Python module constant identifier defining the 50 MiB package pack threshold rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
