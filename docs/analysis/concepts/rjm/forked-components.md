---
package: rjm
name: FORKED_COMPONENTS
slug: forked-components
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/third-party-license-attribution.md, sha256: 273f0ae5e3a041689084c309b0b3d321d0185b87ab33d74343a115816d56e321}
  - {path: scripts/generate_third_party_notices.py, sha256: e3e00bb9d46ec4f25fdba742a185b1661b21630bb92b4fa3e094114854765e0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FORKED_COMPONENTS

## Definition — verbatim
(used, not defined)

> "FORKED_COMPONENTS: dict[str, dict[str, str]] = {" — scripts/generate_third_party_notices.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/third-party-license-attribution.md | 56 | used here | Cited as the script metadata dictionary matching forked and vendored components. |
| scripts/generate_third_party_notices.py | 50 | defined here | Constant dictionary registry storing license and author metadata for forked components. |

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
FORKED_COMPONENTS is a Python dictionary constant identifier in scripts/generate_third_party_notices.py rather than an operational lifecycle concept.
