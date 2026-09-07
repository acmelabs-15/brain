---
package: rjm
name: MCPorter
slug: mcporter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MCPorter

## Definition — verbatim
(used, not defined)

> "Replaces hand-rolled JSON-RPC clients with a single subprocess call to MCPorter," — scripts/mcp_cli/wrapper.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mcp_cli/__init__.py | 1 | used here | Cited in package docstring describing the CLI wrapper using MCPorter. |
| scripts/mcp_cli/wrapper.py | 3 | used here | Cited in module docstring explaining replacement of custom JSON-RPC clients with MCPorter subprocess calls. |

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
`MCPorter` is an external CLI tool and npm package used for managing Model Context Protocol server invocations rather than an autonomous lifecycle concept, classified as `name-only` per D-023.
