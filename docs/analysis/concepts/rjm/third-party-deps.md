---
package: rjm
name: third-party deps
slug: third-party-deps
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# third-party deps

## Definition — verbatim
(used, not defined)

> "Detect bare-python3 documentation pointing to scripts that import third-party deps." — scripts/validation/check_python3_entrypoints.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_python3_entrypoints.py | 2 | used here | Describes external packages imported by Python scripts requiring invocation via uv run rather than bare python3. |

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
defects: orphan

## Design notes
`third-party deps` is an informal descriptive phrase referring to external package dependencies rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
