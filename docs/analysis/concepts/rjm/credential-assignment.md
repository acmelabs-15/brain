---
package: rjm
name: credential-assignment
slug: credential-assignment
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# credential-assignment

## Definition — verbatim
(used, not defined)

> "reasons.extend([\"credential-assignment\"] * assignment_count)" — scripts/redact_secrets.py:400

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 400 | defined here | Redaction reason string recorded when credential key assignments are sanitized in CI sink redaction. |

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
clean

## Design notes
`credential-assignment` is a redaction reason string identifying sanitized credential key assignments in CI output rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
