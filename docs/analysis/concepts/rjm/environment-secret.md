---
package: rjm
name: environment-secret
slug: environment-secret
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# environment-secret

## Definition — verbatim
(used, not defined)

> "reasons.extend([\"environment-secret\"] * count)" — scripts/redact_secrets.py:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 175 | defined here | Redaction reason string recorded when exact environment secret values are sanitized in CI sink redaction. |

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
`environment-secret` is a redaction reason string identifying exact environment variable value matches in CI logs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
