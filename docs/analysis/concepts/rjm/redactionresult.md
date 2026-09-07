---
package: rjm
name: RedactionResult
slug: redactionresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# RedactionResult

## Definition — verbatim
(used, not defined)

> "class RedactionResult:" — scripts/redact_secrets.py:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 126 | defined here | Frozen dataclass returning redacted text and the tuple of redaction reasons that fired. |

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
`RedactionResult` is a Python dataclass return type encapsulating sanitized text and triggered redaction reasons rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
