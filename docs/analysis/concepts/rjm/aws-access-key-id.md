---
package: rjm
name: aws-access-key-id
slug: aws-access-key-id
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# aws-access-key-id

## Definition — verbatim
(used, not defined)

> "(\"aws-access-key-id\", re.compile(r\"\b(?:AKIA|ASIA)[0-9A-Z]{16}\b\"))," — scripts/redact_secrets.py:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 48 | defined here | Secret redaction rule regex pattern identifying AWS Access Key ID token shapes. |

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
aws-access-key-id is a secret redaction token pattern identifier matching AWS access credentials rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
