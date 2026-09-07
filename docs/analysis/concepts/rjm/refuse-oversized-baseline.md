---
package: rjm
name: refuse_oversized_baseline
slug: refuse-oversized-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_contract_tests.py, sha256: b3471055e8c34baf066d4a98dbd60382fe98aedc0c4f61064ee7b155e0fb04f9}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# refuse_oversized_baseline

## Definition — verbatim
(used, not defined)

> "refuse_oversized_baseline" — scripts/validation/portability_baseline.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 47 | used here | Imported from portability_baseline module for test baseline validation. |
| scripts/validation/check_vendor_portability.py | 89 | used here | Imported from portability_baseline to guard baseline file size during vendor portability checks. |
| scripts/validation/portability_baseline.py | 53 | defined here | Exported in __all__ as public baseline reviewability ceiling check. |

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
A validation guard function in `scripts/validation/portability_baseline.py` preventing oversized baseline diff evasion, classified as `name-only` per D-023.
