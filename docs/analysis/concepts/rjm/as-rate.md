---
package: rjm
name: _as_rate
slug: as-rate
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_optimizer_adapters.py, sha256: 41bb89c726d7372ef9bfea77b9eb57e3e2123c801358598ee13bfdab276a20b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _as_rate

## Definition — verbatim
> "def _as_rate(value: object, context: str) -> float:" — scripts/eval/_optimizer_adapters.py:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_adapters.py | 125 | defined here | Helper function coercing pass rates to floats bounded within [0.0, 1.0]. |

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
defects: other

## Design notes
`_as_rate` is an internal validation function in `_optimizer_adapters.py` constraining values to valid pass rate fractions, classified as `name-only` per D-023.
