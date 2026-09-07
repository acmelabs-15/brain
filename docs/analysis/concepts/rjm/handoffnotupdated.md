---
package: rjm
name: handoffNotUpdated
slug: handoffnotupdated
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# handoffNotUpdated

## Definition — verbatim
(used, not defined)

> "_LEGACY_HANDOFF_FIELD = \"handoffNotUpdated\"" — scripts/validate_session_json.py:254

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 254 | used here | Assigned to _LEGACY_HANDOFF_FIELD to support backward compatibility with older session logs. |

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
`handoffNotUpdated` is a deprecated legacy checklist field identifier in `scripts/validate_session_json.py` replaced by `handoffPreserved` to avoid double-negative semantics rather than an independent lifecycle concept.
