---
package: rjm
name: sourceDir
slug: sourcedir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# sourceDir

## Definition — verbatim
(used, not defined)

> "source_dir = skills.get(\"sourceDir\", \".claude/skills\")" — scripts/validation/check_copilot_routing_exclusions.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_routing_exclusions.py | 52 | used here | Configuration key in `copilot-cli.yaml` specifying the canonical skills root directory. |

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
A YAML configuration key in `templates/platforms/copilot-cli.yaml` specifying the source directory for canonical skills, classified as name-only per D-023.
