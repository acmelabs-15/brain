---
package: rjm
name: GLOBAL_SKILL_PATHS
slug: global-skill-paths
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# GLOBAL_SKILL_PATHS

## Definition — verbatim
(used, not defined)

> "GLOBAL_SKILL_PATHS = {" — scripts/validate_skill_installation.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_installation.py | 37 | defined here | Dictionary mapping agent platform names to global skill installation directories. |

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
`GLOBAL_SKILL_PATHS` is a Python dictionary constant identifier mapping supported platforms to global skill directory paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
