---
package: rjm
name: session/new
slug: session-new
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_cli_acp.py, sha256: 19c2dc3b24691c7460044a256c6a26927f8b3a5c2212c34303a731baaaa8c93d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# session/new

## Definition — verbatim
(used, not defined)

> "\"session/new\"," — scripts/eval/_copilot_cli_acp.py:627

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_acp.py | 627 | used here | ACP RPC method name sent to initialize a new evaluation session with working directory and MCP server configuration. |

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
clean

## Design notes
`session/new` is the Agent Client Protocol RPC method name for spawning a new session instance in evaluation harness subprocesses, classified as `kind: name-only` per D-023.
