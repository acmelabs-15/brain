---
package: rjm
name: _WIN_LIST_SEP
slug: win-list-sep
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

# _WIN_LIST_SEP

## Definition — verbatim
(used, not defined)

> "_WIN_LIST_SEP = \";\"" — scripts/cli_exec.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/cli_exec.py | 46 | defined here | Constant defining the semicolon separator used for parsing Windows PATH and PATHEXT lists. |

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
_WIN_LIST_SEP is an internal Python module constant string specifying the Windows path list delimiter rather than an operational lifecycle concept.
