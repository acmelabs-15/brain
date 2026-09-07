---
package: rjm
name: _validate_error_message_and_code
slug: validate-error-message-and-code
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_skill_output.py, sha256: b92bfbfc72a709b2762ae3121e5bbe8d7c78374cf6562003156836754af3ca2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _validate_error_message_and_code

## Definition — verbatim
(used, not defined)

> "def _validate_error_message_and_code(error_field: dict) -> list[str]:" — scripts/validate_skill_output.py:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_output.py | 195 | defined here | Validates that Error.Message is a non-empty string and Error.Code is an integer (excluding bool). |

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
defects: doc-drift

## Design notes
`_validate_error_message_and_code` is an internal Python validator function identifier checking Message and Code types in Error objects rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
