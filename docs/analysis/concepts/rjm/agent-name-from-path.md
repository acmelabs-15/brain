---
package: rjm
name: agent_name_from_path
slug: agent-name-from-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# agent_name_from_path

## Definition — verbatim
(used, not defined)

> "def agent_name_from_path(path: str) -> str:" — scripts/validation/check_agent_skill_discriminator.py:367

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 367 | defined here | Extracts canonical agent identifiers from .claude and template path structures. |

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
agent_name_from_path is a Python helper function identifier extracting agent names from file paths, classified as name-only per D-023.
