---
package: rjm
name: transform_for_factory
slug: transform-for-factory
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
