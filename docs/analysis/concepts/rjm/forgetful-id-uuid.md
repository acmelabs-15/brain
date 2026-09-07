---
package: rjm
name: _FORGETFUL_ID_UUID
slug: forgetful-id-uuid
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

# _FORGETFUL_ID_UUID

## Definition — verbatim
(used, not defined)

> "_FORGETFUL_ID_UUID = re.compile(" — scripts/review_memory_export_security.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/review_memory_export_security.py | 26 | defined here | Compiled regular expression matching JSON id and user_id fields with UUID values for Forgetful exports. |

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
`_FORGETFUL_ID_UUID` is a compiled regular expression constant in a security review script rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
