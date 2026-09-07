---
package: rjm
name: SPARC
slug: sparc
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# SPARC

## Definition — verbatim
(used, not defined)

> "Validate SPARC development phase gates in session logs." — scripts/validate_phase_gates.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_phase_gates.py | 2 | used here | Cites SPARC as the development phase methodology whose gates and progression are validated. |

## Consumes
Session logs and developmentPhase tracking records.

## Produces
Validation verdicts ensuring structured progression through specification, pseudocode, architecture, refinement, and completion phases.

## When applied
Applied during development lifecycle sessions to validate forward progression through defined methodology gates.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
The SPARC development methodology provides the structured framework of five progressive development phases whose session gate transitions are verified by validation tooling.
