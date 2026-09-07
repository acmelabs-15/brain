---
package: rjm
name: private-key
slug: private-key
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# private-key

## Definition — verbatim
(used, not defined)

> "\"private-key\"," — scripts/redact_secrets.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 38 | defined here | Secret redaction rule identifier matching PEM-encoded private key blocks. |

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
private-key is a secret redaction token pattern identifier matching private cryptographic keys rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
