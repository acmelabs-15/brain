---
package: rjm
name: isolation_required: true
slug: isolation-required-true
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# isolation_required: true

## Definition — verbatim
(used, not defined)

> "isolation_required: true" — scripts/validation/check_agent_skill_discriminator.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 29 | used here | Frontmatter declaration cited as an escape hatch exempting skill-shaped agents from gating. |

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
isolation_required: true is an agent frontmatter configuration property exempting agents from discriminator gating, classified as name-only per D-023.
