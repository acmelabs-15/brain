---
package: rjm
name: validate_claims
slug: validate-claims
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/validate_investigation_claims.py, sha256: 1f0feb2769dc14326138f021a99ada12834bbe4fa94539850b90fdc0c55b233a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_claims

## Definition — verbatim
(used, not defined)

> "def validate_claims(changed_files: list[str]) -> list[str]:" — .github/scripts/validate_investigation_claims.py:223

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/validate_investigation_claims.py | 223 | defined here | Function returning changed files that violate the investigation-only allowlist. |

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
`validate_claims` is a Python helper function identifier filtering changed files for allowlist violations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
