---
package: rjm
name: CreateProcess
slug: createprocess
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/cli_exec.py, sha256: ebbfa4fce2f8e66a1f9246840c6892d29482d39de491357950e4210c76a25b4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CreateProcess

## Definition — verbatim
(used, not defined)

> "``CreateProcess``, which does NOT search ``PATH`` or apply ``PATHEXT`` the way a" — scripts/cli_exec.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/cli_exec.py | 6 | used here | Cited in docstring explaining Windows subprocess launch behavior without automatic PATH resolution. |

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
CreateProcess is a Windows win32 API execution primitive referenced in CLI resolution documentation rather than an operational lifecycle concept.
