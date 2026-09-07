---
package: rjm
name: mcp_list_tools
slug: mcp-list-tools
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# mcp_list_tools

## Definition — verbatim
> "def mcp_list_tools(" — scripts/mcp_cli/wrapper.py:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mcp_cli/__init__.py | 9 | used here | Re-exported in package __all__ public interface. |
| scripts/mcp_cli/wrapper.py | 158 | defined here | Function listing available tools and descriptions from an MCP server using mcporter. |

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
defects: orphan

## Design notes
`mcp_list_tools` is a Python wrapper function in `scripts/mcp_cli/wrapper.py` querying tool schemas from MCP servers via mcporter rather than a lifecycle concept, classified as `name-only` per D-023.
