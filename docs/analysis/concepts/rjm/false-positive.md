---
package: rjm
name: FALSE_POSITIVE
slug: false-positive
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/incoherence.py, sha256: 8db97228fdf182875839e2f43c3b7c510a26219f51ed1c1e212e01307cc8ae9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FALSE_POSITIVE

## Definition — verbatim
(used, not defined)

> "FALSE_POSITIVE: apparent conflict resolves with context" — scripts/incoherence.py:384

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 384 | defined here | Verdict status classification indicating an apparent inconsistency resolves when reading surrounding source context. |

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
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
An internal verification verdict label within `scripts/incoherence.py` indicating non-contradictory claims rather than an independent lifecycle concept.
