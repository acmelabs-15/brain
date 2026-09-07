---
package: rjm
name: --pr-body
slug: pr-body
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# --pr-body

## Definition — verbatim
(used, not defined)

> "\"--pr-body\"," — scripts/validation/check_agent_skill_discriminator.py:604

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 604 | defined here | CLI option accepting PR description body text for override token scanning. |

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
--pr-body is a command-line flag identifier used to pass PR description text for override token checking, classified as name-only per D-023.
