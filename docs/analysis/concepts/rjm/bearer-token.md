---
package: rjm
name: bearer-token
slug: bearer-token
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# bearer-token

## Definition — verbatim
(used, not defined)

> "(\"bearer-token\", re.compile(r\"\bBearer\s+[A-Za-z0-9._\-+/=~]{8,}\", re.IGNORECASE))," — scripts/redact_secrets.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 51 | defined here | Secret redaction rule regex pattern identifying HTTP Bearer authentication token shapes. |

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
`bearer-token` is a secret redaction token pattern matching HTTP Bearer authentication credentials in agent free-text rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
