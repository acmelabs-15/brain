---
package: rjm
name: _candidate_tokens
slug: candidate-tokens
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

# _candidate_tokens

## Definition — verbatim
(used, not defined)

> "def _candidate_tokens(block: Sequence[str], start: int) -> list[tuple[int, int, str]]:" — scripts/validation/push_lock_resolver.py:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/push_lock_resolver.py | 149 | defined here | Helper function collecting line, column, and token for everything in a block that could name a lock file. |

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
A Python helper function in `push_lock_resolver.py`, classified as name-only per D-023.
