---
package: rjm
name: MalformedAgentFileError
slug: malformedagentfileerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/agent_registry.py, sha256: 1fc80c4c6f8e47f82c460cad6e02d91f2fe6766ffea24e7c70f9e5f5b7f07e1b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MalformedAgentFileError

## Definition — verbatim
(used, not defined)

> "class MalformedAgentFileError(Exception):" — scripts/validation/agent_registry.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_registry.py | 96 | defined here | Exception class raised when a markdown file in the agent directory is not a usable agent definition. |

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
`MalformedAgentFileError` is a custom Python exception class raised when an agent markdown file fails parsing or schema validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
