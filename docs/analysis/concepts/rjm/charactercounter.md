---
package: rjm
name: _CharacterCounter
slug: charactercounter
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

# _CharacterCounter

## Definition — verbatim
(used, not defined)

> "class _CharacterCounter:" — scripts/eval/_copilot_cli_acp.py:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_acp.py | 82 | defined here | Thread-safe counter tracking characters captured from process stdout and stderr streams. |

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
_CharacterCounter is an internal Python class identifier tracking captured characters across process streams rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
