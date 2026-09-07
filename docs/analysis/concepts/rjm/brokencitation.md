---
package: rjm
name: BrokenCitation
slug: brokencitation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# BrokenCitation

## Definition — verbatim
(used, not defined)

> "class BrokenCitation:" — scripts/validation/check_orchestrator_citations.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_orchestrator_citations.py | 51 | defined here | Frozen dataclass holding the source file and unresolved path for broken orchestrator prose citations. |

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
`BrokenCitation` is a Python dataclass identifier in `check_orchestrator_citations.py` capturing unresolved file path findings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
