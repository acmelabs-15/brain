---
package: rjm
name: sync_config
slug: sync-config
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/sync_mcp_config.py, sha256: 121e1c3cf83183f12974ea194d84fb4bb3e5f5827fcd336a323acd5a6fa494df}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
