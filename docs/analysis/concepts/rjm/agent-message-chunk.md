---
package: rjm
name: agent_message_chunk
slug: agent-message-chunk
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

# agent_message_chunk

## Definition — verbatim
(used, not defined)

> "if update_name != \"agent_message_chunk\":" — scripts/eval/_copilot_cli_acp.py:324

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_acp.py | 324 | used here | Session update type string identifying streamed assistant message text tokens in ACP protocol parsing. |

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
`agent_message_chunk` is an Agent Client Protocol update type identifier for streamed assistant response text in evaluation scripts, classified as `kind: name-only` per D-023.
