---
package: rjm
name: transform_for_factory
slug: transform-for-factory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# transform_for_factory

## Definition — verbatim
(used, not defined)

> "def transform_for_factory(source: dict[str, Any]) -> dict[str, Any]:" — scripts/sync_mcp_config.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync_mcp_config.py | 58 | defined here | Adapts Claude Code MCP configuration dictionary for Factory IDE format. |

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
defects: doc-drift

## Design notes
`transform_for_factory` is a Python transformation function structuring MCP configuration schemas for Factory rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
