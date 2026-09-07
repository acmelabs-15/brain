---
package: rjm
name: redact
slug: redact
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# redact

## Definition — verbatim
(used, not defined)

> "def redact(text: str, *, include_hex: bool = True) -> RedactionResult:" — scripts/redact_secrets.py:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 137 | defined here | Core secret redaction function replacing identified secret and PII patterns with placeholder strings. |

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
`redact` is a Python utility function performing regex substitution on sensitive tokens rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
