---
package: rjm
name: MCPorter
slug: mcporter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/mcp_cli/__init__.py, sha256: c9d37bc78b96dd6b43741d469e74ab4665b26cec4a8632efdb68856d515d0bf9}
  - {path: scripts/mcp_cli/wrapper.py, sha256: e26e2aaec24230446e7e9c5bfe06ae1888d4272a50de3ca8c93295dd002715e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
