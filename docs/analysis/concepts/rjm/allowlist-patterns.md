---
package: rjm
name: _ALLOWLIST_PATTERNS
slug: allowlist-patterns
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

# _ALLOWLIST_PATTERNS

## Definition — verbatim
(used, not defined)

> "_ALLOWLIST_PATTERNS = [" — .github/scripts/validate_investigation_claims.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/validate_investigation_claims.py | 58 | defined here | Constant list of regex patterns defining valid paths for investigation-only QA exemptions. |

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
`_ALLOWLIST_PATTERNS` is an internal Python module constant list of path regexes in `validate_investigation_claims.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
