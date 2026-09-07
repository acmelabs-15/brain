---
package: rjm
name: changesCommitted
slug: changescommitted
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# changesCommitted

## Definition — verbatim
(used, not defined)

> "        \"changesCommitted\"," — scripts/validate_session_json.py:157

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 157 | used here | Specified as a required session-end checklist item in SESSION_END_REQUIRED_ITEMS. |

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
`changesCommitted` is a session-end checklist item identifier in `scripts/validate_session_json.py` verifying that all changes were committed to git before ending the session rather than an independent lifecycle concept.
