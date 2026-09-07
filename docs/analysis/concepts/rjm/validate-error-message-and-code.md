---
package: rjm
name: _validate_error_message_and_code
slug: validate-error-message-and-code
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
