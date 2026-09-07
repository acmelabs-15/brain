---
package: rjm
name: _QA_SKIP_CHECKERS
slug: qa-skip-checkers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _QA_SKIP_CHECKERS

## Definition — verbatim
(used, not defined)

> "_QA_SKIP_CHECKERS = {" — scripts/validate_session_json.py:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 167 | defined here | Defined as a mapping dictionary connecting QA skip exemption values to eligibility checker scripts and labels. |

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
`_QA_SKIP_CHECKERS` is a private Python dictionary constant mapping QA skip exemption strings to their validation scripts and labels in `scripts/validate_session_json.py`, classified as name-only per D-023.
