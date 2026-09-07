---
package: rjm
name: _ProcessStreams
slug: processstreams
kind: name-only
package_phase: none
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

# _ProcessStreams

## Definition — verbatim
(used, not defined)

> "class _ProcessStreams:" — scripts/eval/_copilot_cli_acp.py:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_acp.py | 87 | defined here | Class managing stdout, stderr, and stdin queues for asynchronous child process communication. |

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
_ProcessStreams is an internal Python class identifier managing process I/O queues during ACP execution rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
