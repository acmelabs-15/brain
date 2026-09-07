---
package: rjm
name: _TARGET_FILES
slug: target-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _TARGET_FILES

## Definition — verbatim
(used, not defined)

> "_TARGET_FILES: tuple[str, ...] = (\".claude/commands/pr-quality/all.md\",)" — scripts/validation/check_orchestrator_citations.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_orchestrator_citations.py | 37 | defined here | Module constant specifying repo-relative paths of orchestrator prose files inspected for valid citations. |

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
`_TARGET_FILES` is a private Python module constant tuple in `check_orchestrator_citations.py` configuring target files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
