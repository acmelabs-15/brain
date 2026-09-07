---
package: rjm
name: _PATH_CITATION
slug: path-citation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _PATH_CITATION

## Definition — verbatim
(used, not defined)

> "_PATH_CITATION: re.Pattern[str] = re.compile(" — scripts/validation/check_orchestrator_citations.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_orchestrator_citations.py | 44 | defined here | Compiled regex matching backtick-wrapped repo-relative file paths ending in source extensions. |

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
`_PATH_CITATION` is a compiled regular expression object in `check_orchestrator_citations.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
