---
package: rjm
name: email
slug: email
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# email

## Definition — verbatim
(used, not defined)

> "\"email\"," — scripts/redact_secrets.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 56 | defined here | Secret redaction rule regex pattern identifying email address token shapes in free-text. |

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
`email` is a PII token shape regex pattern identifying email addresses in agent free-text rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
