---
package: rjm
name: FORM_FACTOR_MIN_COST_SAVINGS_FRACTION
slug: form-factor-min-cost-savings-fraction
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
  - {path: scripts/eval/_report_aggregator.py, sha256: e97ac098816d2320597647fd82035eb4a9f561dfee3e0140fe7e761a6fa5c2d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FORM_FACTOR_MIN_COST_SAVINGS_FRACTION

## Definition — verbatim
> "FORM_FACTOR_MIN_COST_SAVINGS_FRACTION = 0.01" — scripts/eval/_report_aggregator.py:504

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 120 | defined here | Cited as the 1% cost savings guard preventing tiebreak on token sampling noise. |
| scripts/eval/_report_aggregator.py | 504 | defined here | Module constant defining the minimum token cost savings fraction (1%) to prefer skill form. |

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
defects: cross-file-contradiction, internal-contradiction

## Design notes
A configuration constant identifier in the evaluation report aggregator setting a minimum cost delta threshold rather than an operational lifecycle concept.
