---
package: rjm
name: _run_web_mode
slug: run-web-mode
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _run_web_mode

## Definition — verbatim
(used, not defined)

> "def _run_web_mode(base: str) -> int:" — scripts/new_validated_pr.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/new_validated_pr.py | 63 | defined here | Defines internal helper delegating PR creation to `gh pr create --web` in interactive environments. |

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
An internal Python helper function identifier invoking interactive web-mode PR creation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
