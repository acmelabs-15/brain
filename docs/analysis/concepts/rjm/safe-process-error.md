---
package: rjm
name: _safe_process_error
slug: safe-process-error
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

# _safe_process_error

## Definition — verbatim
(used, not defined)

> "def _safe_process_error(returncode: int, stderr: str) -> RuntimeError:" — scripts/eval/_copilot_cli.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli.py | 77 | defined here | Error formatting function that categorizes process failures without leaking raw stderr into logs or exception traces. |

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
`_safe_process_error` is an evaluation transport helper for redacting sensitive process output on failure, classified as `kind: name-only` per D-023.
