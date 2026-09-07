---
package: rjm
name: envelope schema
slug: envelope-schema
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# envelope schema

## Definition — verbatim
(used, not defined)

> "Validate skill script output against the standard envelope schema (ADR-056, ADR-103)." — scripts/validate_skill_output.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_output.py | 1 | used here | Docstring references standard envelope schema governing structured skill output JSON envelopes. |

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
defects: doc-drift

## Design notes
`envelope schema` is an architectural schema label identifying the ADR-056/ADR-103 JSON contract structure for skill script output rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
