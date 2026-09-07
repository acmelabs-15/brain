---
package: rjm
name: file_matches_allowlist
slug: file-matches-allowlist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/validate_investigation_claims.py, sha256: 1f0feb2769dc14326138f021a99ada12834bbe4fa94539850b90fdc0c55b233a}
  - {path: scripts/validation/test_investigation_eligibility.py, sha256: 50907c3f8f1d5da028be1849dee966d9cd6119d94ef298e4ea9ae21a0c37289f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# file_matches_allowlist

## Definition — verbatim
(used, not defined)

> "def file_matches_allowlist(file_path: str) -> bool:" — .github/scripts/validate_investigation_claims.py:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/validate_investigation_claims.py | 93 | defined here | Function checking whether a file path matches the investigation allowlist. |
| scripts/validation/test_investigation_eligibility.py | 29 | defined here | Imported alias for test_file_matches_allowlist used to test path eligibility. |

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
`file_matches_allowlist` is a Python helper function identifier checking file paths against investigation allowlist patterns rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
