---
package: rjm
name: filter_agent_paths
slug: filter-agent-paths
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# filter_agent_paths

## Definition — verbatim
(used, not defined)

> "def filter_agent_paths(changed_files: list[str]) -> list[str]:" — scripts/validation/check_agent_skill_discriminator.py:433

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 433 | defined here | Filters a list of changed paths to deduplicated, order-stable agent definitions. |

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
defects: missing-path, other

## Design notes
filter_agent_paths is a Python helper function identifier filtering changed files down to agent definitions, classified as name-only per D-023.
