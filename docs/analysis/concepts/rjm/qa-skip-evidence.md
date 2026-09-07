---
package: rjm
name: _QA_SKIP_EVIDENCE
slug: qa-skip-evidence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _QA_SKIP_EVIDENCE

## Definition — verbatim
(used, not defined)

> "_QA_SKIP_EVIDENCE = frozenset(_QA_SKIP_CHECKERS)" — scripts/validate_session_json.py:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 174 | defined here | Defined as a frozenset of valid QA skip evidence values derived from _QA_SKIP_CHECKERS. |

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
`_QA_SKIP_EVIDENCE` is a private Python frozenset constant identifier in `scripts/validate_session_json.py` containing permitted QA skip evidence strings rather than an independent lifecycle concept.
