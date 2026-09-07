---
package: rjm
name: transform_for_vscode
slug: transform-for-vscode
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# transform_for_vscode

## Definition — verbatim
(used, not defined)

> "def transform_for_vscode(source: dict[str, Any]) -> dict[str, Any]:" — scripts/sync_mcp_config.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync_mcp_config.py | 41 | defined here | Adapts Claude Code MCP server dictionary structure and Serena arguments to VS Code format. |

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
`transform_for_vscode` is a Python transformation function adapting MCP configuration schemas for VS Code rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
