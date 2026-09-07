---
package: rjm
name: McpCliError
slug: mcpclierror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# McpCliError

## Definition — verbatim
> "class McpCliError(Exception):" — scripts/mcp_cli/wrapper.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mcp_cli/__init__.py | 9 | used here | Re-exported in package __all__ public interface. |
| scripts/mcp_cli/wrapper.py | 43 | defined here | Custom exception class raised when an mcporter command execution fails or arguments fail validation. |

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
`McpCliError` is an exception class in `scripts/mcp_cli/wrapper.py` raised on MCP CLI subprocess failures or injection attempts rather than a lifecycle concept, classified as `name-only` per D-023.
