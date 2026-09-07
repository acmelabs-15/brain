---
package: rjm
name: hex-secret
slug: hex-secret
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# hex-secret

## Definition — verbatim
(used, not defined)

> "`hex-secret` rule (>= 32 hex chars) matches a 40-char commit SHA or a 64-char" — scripts/redact_secrets.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 15 | defined here | Documented in docstring as a redaction rule matching runs of 32 or more hexadecimal characters. |

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
hex-secret is a secret redaction token pattern identifier matching long hexadecimal runs rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
