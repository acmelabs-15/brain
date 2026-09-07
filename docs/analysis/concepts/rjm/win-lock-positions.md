---
package: rjm
name: _win_lock_positions
slug: win-lock-positions
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/hook_utilities/utilities.py, sha256: c8cf18762a2a055c323142ee77d0eeaeb7f4fe66e8d296787e3e6fdf75661060}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _win_lock_positions

## Definition — verbatim
(used, not defined)

> "_win_lock_positions: dict[int, int] = {}" — scripts/hook_utilities/utilities.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/utilities.py | 63 | defined here | Module dictionary tracking file offsets during Windows file locking. |

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
A private module-level dictionary identifier tracking file offsets for Windows locking restoration rather than a lifecycle concept.
