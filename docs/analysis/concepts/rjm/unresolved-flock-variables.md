---
package: rjm
name: _unresolved_flock_variables
slug: unresolved-flock-variables
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/push_lock_resolver.py, sha256: cbcf36abd98c9e7c96218617dea00872bc94ce3216d14c802558074a0d514503}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _unresolved_flock_variables

## Definition — verbatim
(used, not defined)

> "def _unresolved_flock_variables(block: Sequence[str], start: int) -> list[tuple[int, str]]:" — scripts/validation/push_lock_resolver.py:211

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/push_lock_resolver.py | 211 | defined here | Function detecting flock variable invocations that fail to resolve to a concrete lock path. |

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
A Python validation helper function in `push_lock_resolver.py`, classified as name-only per D-023.
