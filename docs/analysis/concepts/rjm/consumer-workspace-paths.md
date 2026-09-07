---
package: rjm
name: _CONSUMER_WORKSPACE_PATHS
slug: consumer-workspace-paths
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _CONSUMER_WORKSPACE_PATHS

## Definition — verbatim
(used, not defined)

> "_CONSUMER_WORKSPACE_PATHS: tuple[tuple[str, ...], ...] = (" — scripts/validation/check_skill_md_drift.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 23 | defined here | Defines paths written into consumer workspaces exempt from existence checks in upstream repo. |

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
A path tuple constant in `scripts/validation/check_skill_md_drift.py` defining legitimate consumer workspace directories, classified as `name-only` per D-023.
