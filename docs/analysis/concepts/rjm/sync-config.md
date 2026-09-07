---
package: rjm
name: sync_config
slug: sync-config
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# sync_config

## Definition — verbatim
(used, not defined)

> "def sync_config(" — scripts/sync_mcp_config.py:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync_mcp_config.py | 66 | defined here | Coordinates JSON reading, schema transformation, symlink validation, and writing of target MCP configs. |

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
`sync_config` is a Python function identifier managing configuration file synchronization across IDE targets rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
