---
package: rjm
name: session/update
slug: session-update
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

# session/update

## Definition — verbatim
(used, not defined)

> "if message.get(\"method\") == \"session/update\":" — scripts/eval/_copilot_cli_acp.py:408

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_acp.py | 408 | used here | ACP notification method string checked when processing incoming streaming events from the agent process. |

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
`session/update` is an Agent Client Protocol notification method name identifying streaming updates from the agent during evaluation execution, classified as `kind: name-only` per D-023.
