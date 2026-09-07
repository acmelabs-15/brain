---
package: rjm
name: notOnMain
slug: notonmain
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# notOnMain

## Definition — verbatim
(used, not defined)

> "        \"notOnMain\"," — scripts/validate_session_json.py:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 145 | used here | Specified as a required session-start checklist item in SESSION_START_REQUIRED_ITEMS preventing direct work on main. |

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
`notOnMain` is a session-start checklist key identifier in `scripts/validate_session_json.py` asserting that the current session is not executing directly on the default main branch rather than an independent lifecycle concept.
