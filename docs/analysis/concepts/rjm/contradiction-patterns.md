---
package: rjm
name: CONTRADICTION_PATTERNS
slug: contradiction-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CONTRADICTION_PATTERNS

## Definition — verbatim
(used, not defined)

> "CONTRADICTION_PATTERNS = re.compile(" — scripts/validate_session_json.py:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 177 | defined here | Defined as a compiled regular expression matching evidence tokens that contradict checklist completion. |

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
`CONTRADICTION_PATTERNS` is a Python compiled regular expression constant in `scripts/validate_session_json.py` used to flag conflicting evidence phrases in checklist items rather than an SDLC lifecycle concept.
