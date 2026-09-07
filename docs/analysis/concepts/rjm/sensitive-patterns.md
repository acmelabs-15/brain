---
package: rjm
name: SENSITIVE_PATTERNS
slug: sensitive-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SENSITIVE_PATTERNS

## Definition — verbatim
(used, not defined)

> "SENSITIVE_PATTERNS: dict[str, list[str]] = {" — scripts/review_memory_export_security.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/review_memory_export_security.py | 41 | defined here | Dictionary mapping sensitive category names to regex patterns for security scanning. |

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
`SENSITIVE_PATTERNS` is a dictionary constant of detection regexes in a memory export security script rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
