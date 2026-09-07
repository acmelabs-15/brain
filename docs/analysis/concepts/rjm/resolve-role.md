---
package: rjm
name: _resolve_role
slug: resolve-role
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _resolve_role

## Definition — verbatim
(used, not defined)

> "def _resolve_role(metadata: dict[str, Any], path: Path) -> str:" — scripts/openclaw_bridge.py:163

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 163 | defined here | Helper function resolving and validating an agent's role against known roles, falling back to _DEFAULT_ROLE if unspecified or invalid. |

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
defects: doc-drift, orphan

## Design notes
`_resolve_role` is a Python helper function identifier that validates and falls back role declarations in agent definitions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
