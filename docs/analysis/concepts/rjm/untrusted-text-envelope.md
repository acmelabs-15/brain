---
package: rjm
name: untrusted-text envelope
slug: untrusted-text-envelope
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_cli.py, sha256: 42c92fa1b72b6b37bd4b7864b19b8d9987761bdcf034129d7cf2e7a40f70a16c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# untrusted-text envelope

## Definition — verbatim
(used, not defined)

> "fields inside a fixed untrusted-text envelope." — scripts/eval/_copilot_cli.py:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli.py | 148 | defined here | JSON-structured payload structure ensuring system and fixture prompt text remain distinctly labeled as untrusted input. |

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
`untrusted-text envelope` is an evaluation prompt structuring format that isolates repository prompt text within explicit trust boundaries, classified as `kind: name-only` per D-023.
