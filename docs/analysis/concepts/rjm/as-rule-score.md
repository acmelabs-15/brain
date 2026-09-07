---
package: rjm
name: _as_rule_score
slug: as-rule-score
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

# _as_rule_score

## Definition — verbatim
> "def _as_rule_score(value: object, context: str) -> int:" — scripts/eval/_optimizer_adapters.py:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_adapters.py | 129 | defined here | Helper function validating integer rule scores bounded within [0, 5]. |

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
`_as_rule_score` is an internal validation function in `_optimizer_adapters.py` ensuring integer rule scores stay within [0, 5], classified as `name-only` per D-023.
