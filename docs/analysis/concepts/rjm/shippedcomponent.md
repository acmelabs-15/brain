---
package: rjm
name: ShippedComponent
slug: shippedcomponent
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/generate_third_party_notices.py, sha256: e3e00bb9d46ec4f25fdba742a185b1661b21630bb92b4fa3e094114854765e0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ShippedComponent

## Definition — verbatim
(used, not defined)

> "class ShippedComponent:" — scripts/generate_third_party_notices.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/generate_third_party_notices.py | 37 | defines | Dataclass representing a third-party component including name, version, license type, author, URL, and license text. |

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
`ShippedComponent` is a Python dataclass representing metadata for a distributed third-party software component rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
