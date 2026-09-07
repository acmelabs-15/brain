---
package: rjm
name: _INVESTIGATION_CLAIM_PATTERN
slug: investigation-claim-pattern
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

# _INVESTIGATION_CLAIM_PATTERN

## Definition — verbatim
(used, not defined)

> "_INVESTIGATION_CLAIM_PATTERN = re.compile(r\"SKIPPED:\s*investigation-only\", re.IGNORECASE)" — .github/scripts/validate_investigation_claims.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/validate_investigation_claims.py | 71 | defined here | Compiled regular expression matching SKIPPED: investigation-only claims in session logs. |

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
`_INVESTIGATION_CLAIM_PATTERN` is a Python module-level regex pattern identifier detecting QA skip claims in session logs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
