---
package: rjm
name: usageMandatoryRead
slug: usagemandatoryread
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# usageMandatoryRead

## Definition — verbatim
(used, not defined)

> "usageMandatoryRead" — scripts/validate_session_json.py:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 141 | used here | Checklist item key in SESSION_START_REQUIRED_ITEMS tracking reading of mandatory usage rules. |

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
defects: missing-path, doc-drift

## Design notes
usageMandatoryRead is a session start checklist key identifier in scripts/validate_session_json.py rather than an SDLC lifecycle concept.
