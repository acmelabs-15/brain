---
package: rjm
name: validate_filename_number
slug: validate-filename-number
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_session_json.py, sha256: 180dc59dc0fd7cf7e493f5f73d77fbe557de0867b908018276bc92e4288bdf39}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_filename_number

## Definition — verbatim
(used, not defined)

> "def validate_filename_number(" — scripts/validate_session_json.py:1330

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 1330 | defined here | Defined as a validation function checking that session.number matches the filename number stem. |

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
defects: doc-drift, missing-path

## Design notes
`validate_filename_number` is a Python function identifier in `scripts/validate_session_json.py` enforcing agreement between the session log's internal session.number property and its filename rather than an independent lifecycle concept.
