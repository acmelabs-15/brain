---
package: rjm
name: _MAX_PASS_RATE
slug: max-pass-rate
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

# _MAX_PASS_RATE

## Definition — verbatim
> "_MAX_PASS_RATE = 1.0" — scripts/eval/_optimizer_adapters.py:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_adapters.py | 75 | defined here | Constant defining the maximum pass rate (1.0) representing 100% satisfied assertions. |

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
`_MAX_PASS_RATE` is an internal constant in `_optimizer_adapters.py` representing the maximum fractional pass rate, classified as `name-only` per D-023.
