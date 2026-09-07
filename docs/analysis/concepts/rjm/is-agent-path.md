---
package: rjm
name: is_agent_path
slug: is-agent-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_agent_path

## Definition — verbatim
(used, not defined)

> "def is_agent_path(path: str) -> bool:" — scripts/validation/check_agent_skill_discriminator.py:376

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 376 | defined here | Validates whether a given path is an active agent definition rather than metadata or reference. |

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
is_agent_path is a Python helper function identifier validating whether a file path is an agent definition, classified as name-only per D-023.
