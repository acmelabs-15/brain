---
package: rjm
name: _DEFAULT_ROLE
slug: default-role
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _DEFAULT_ROLE

## Definition — verbatim
(used, not defined)

> "_DEFAULT_ROLE = \"support\"" — scripts/openclaw_bridge.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 68 | defined here | Constant defining the default fallback role assigned to agents lacking a declared role. |

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
`_DEFAULT_ROLE` is an internal constant identifier in `openclaw_bridge.py` defining the fallback role for agent exports rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
