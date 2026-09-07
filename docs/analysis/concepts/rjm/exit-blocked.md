---
package: rjm
name: EXIT_BLOCKED
slug: exit-blocked
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/bulk_cancel_guard.py, sha256: ab3973edd5a813192e5cb59c448bfaaf557c121f33667246bf911e7da8dbcc9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_BLOCKED

## Definition — verbatim
(used, not defined)

> "EXIT_BLOCKED = 1" — scripts/bulk_cancel_guard.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/bulk_cancel_guard.py | 79 | defined here | Constant defining the exit code returned when workflow cancellation is blocked due to unverified recovery events. |

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
defects: doc-drift

## Design notes
EXIT_BLOCKED is an integer constant identifier defining process exit codes for blocked operations rather than an operational lifecycle concept.
