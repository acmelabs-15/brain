---
package: rjm
name: mcp_call
slug: mcp-call
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# mcp_call

## Definition — verbatim
> "def mcp_call(" — scripts/mcp_cli/wrapper.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mcp_cli/__init__.py | 9 | used here | Re-exported in package __all__ public interface. |
| scripts/mcp_cli/wrapper.py | 81 | defined here | Main function executing MCP tool calls via mcporter subprocess invocations. |

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
`mcp_call` is a Python wrapper function in `scripts/mcp_cli/wrapper.py` executing MCP tool calls via mcporter subprocesses rather than a lifecycle concept, classified as `name-only` per D-023.
