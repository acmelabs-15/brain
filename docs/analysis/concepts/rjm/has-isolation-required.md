---
package: rjm
name: has_isolation_required
slug: has-isolation-required
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# has_isolation_required

## Definition — verbatim
(used, not defined)

> "def has_isolation_required(frontmatter: str) -> bool:" — scripts/validation/check_agent_skill_discriminator.py:212

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 212 | defined here | Parses agent frontmatter to detect truthy isolation_required declarations. |

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
has_isolation_required is a Python function identifier evaluating agent frontmatter for isolation declarations, classified as name-only per D-023.
