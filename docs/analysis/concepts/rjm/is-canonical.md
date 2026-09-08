---
package: rjm
name: is_canonical
slug: is-canonical
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

# is_canonical

## Definition — verbatim
(used, not defined)

> "def is_canonical(path: str) -> bool:" — scripts/validation/push_lock_resolver.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/push_lock_resolver.py | 42 | defined here | Helper function returning whether a path matches the sanctioned push-lock filename shape. |

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
`is_canonical` is a Python helper function identifier in `push_lock_resolver.py` validating string paths against the canonical lock pattern rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
