---
package: rjm
name: SESSION_START_REQUIRED_ITEMS
slug: session-start-required-items
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SESSION_START_REQUIRED_ITEMS

## Definition — verbatim
(used, not defined)

> "SESSION_START_REQUIRED_ITEMS = frozenset(" — scripts/validate_session_json.py:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 134 | defined here | Constant frozenset defining mandatory checklist item keys for session start. |

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
SESSION_START_REQUIRED_ITEMS is a constant frozenset identifier defining mandatory session start items in scripts/validate_session_json.py rather than an SDLC lifecycle concept.
