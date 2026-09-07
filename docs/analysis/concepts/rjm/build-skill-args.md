---
package: rjm
name: _build_skill_args
slug: build-skill-args
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _build_skill_args

## Definition — verbatim
(used, not defined)

> "def _build_skill_args(skill_script: Path, args: argparse.Namespace) -> list[str]:" — scripts/new_validated_pr.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/new_validated_pr.py | 78 | defined here | Defines internal helper translating CLI arguments into argument lists for the target skill script. |

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
An internal Python helper function identifier translating CLI options into skill arguments rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
