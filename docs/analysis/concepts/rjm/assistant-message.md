---
package: rjm
name: assistant.message
slug: assistant-message
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_cli_transcript.py, sha256: 32388d0fe4cce1e3b87186e6f46034bcb5dd1df806ceef6d70c75fdccc13c39e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# assistant.message

## Definition — verbatim
(used, not defined)

> "if kind != \"assistant.message\" or not matched:" — scripts/eval/_copilot_cli_transcript.py:237

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_transcript.py | 237 | used here | Event kind string identifying assistant message records within Copilot CLI events.jsonl transcripts. |

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
`assistant.message` is an event record type identifier within Copilot CLI transcript logs, classified as `kind: name-only` per D-023.
