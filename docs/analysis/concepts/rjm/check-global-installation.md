---
package: rjm
name: check_global_installation
slug: check-global-installation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# check_global_installation

## Definition — verbatim
(used, not defined)

> "def check_global_installation(verbose: bool = False) -> int:" — scripts/validate_skill_installation.py:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_installation.py | 125 | defined here | Function inspecting platform global directories to verify installed skills conform to standards. |

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
`check_global_installation` is a Python function identifier verifying globally installed skills on user platforms rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
