---
package: rjm
name: authorization-header
slug: authorization-header
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# authorization-header

## Definition — verbatim
(used, not defined)

> "reasons.extend([\"authorization-header\"] * authorization_count)" — scripts/redact_secrets.py:178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 178 | defined here | Redaction reason string recorded when HTTP Authorization headers are sanitized in CI sink redaction. |

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
`authorization-header` is a redaction reason string identifying sanitized HTTP authorization headers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
