---
package: rjm
name: _indicator_count
slug: indicator-count
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/parse_hook_bypass_results.py, sha256: f64f6a9f0d591c6c512810bf6cd12f4510cbd9a98000767141afee1346bc3019}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _indicator_count

## Definition — verbatim
(used, not defined)

> "def _indicator_count(data: object) -> int:" — scripts/ci/parse_hook_bypass_results.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/parse_hook_bypass_results.py | 40 | defined here | Internal function returning the number of bypass indicators in parsed audit JSON data. |

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
`_indicator_count` is an internal Python helper function in `parse_hook_bypass_results.py` summing bypass indicators rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
