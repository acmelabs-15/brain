---
package: rjm
name: _read_declared_role
slug: read-declared-role
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _read_declared_role

## Definition — verbatim
(used, not defined)

> "def _read_declared_role(metadata: dict[str, Any]) -> object | None:" — scripts/openclaw_bridge.py:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 136 | defined here | Helper function extracting declared role values from either top-level or nested metadata frontmatter structures. |

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
`_read_declared_role` is a Python helper function identifier supporting dual frontmatter schemas for agent roles rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
