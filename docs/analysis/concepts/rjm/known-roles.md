---
package: rjm
name: _KNOWN_ROLES
slug: known-roles
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _KNOWN_ROLES

## Definition — verbatim
(used, not defined)

> "_KNOWN_ROLES = frozenset({\"strategic\", \"coordinator\", \"executor\", \"support\"})" — scripts/validation/validate_copilot_agent_frontmatter.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 61 | defined here | Frozenset constant defining known agent roles for OpenClaw export. |
| scripts/validation/validate_copilot_agent_frontmatter.py | 43 | defined here | Frozenset constant defining allowable agent roles enforced by frontmatter validation. |

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
clean in scripts/validation/validate_copilot_agent_frontmatter.py; defects: doc-drift, orphan in scripts/openclaw_bridge.py

## Design notes
A Python constant identifier defining the allowable set of agent role names rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
