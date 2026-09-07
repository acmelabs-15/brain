---
package: rjm
name: _line_has_sensitive_match
slug: line-has-sensitive-match
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/review_memory_export_security.py, sha256: d8e98211aeb8e9412aa1bc516f5a90b054306e33e2390b486e8c2571a279060f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _line_has_sensitive_match

## Definition — verbatim
(used, not defined)

> "def _line_has_sensitive_match(" — scripts/review_memory_export_security.py:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/review_memory_export_security.py | 95 | defined here | Checks whether an export file line matches sensitive patterns while accounting for Forgetful export exemptions. |

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
`_line_has_sensitive_match` is an internal pattern matching helper function in a security scanner rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
