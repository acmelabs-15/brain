---
package: rjm
name: refuse_undiffable_baseline
slug: refuse-undiffable-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_contract_tests.py, sha256: b3471055e8c34baf066d4a98dbd60382fe98aedc0c4f61064ee7b155e0fb04f9}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
  - {path: scripts/validation/portability_floor.py, sha256: 880eb845d61bfdbabbe2065af1621f298c96a33719f50ed694a30a69e461f9d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# refuse_undiffable_baseline

## Definition — verbatim
(used, not defined)

> "`refuse_undiffable_baseline` guards it separately. Refs #4244." — scripts/validation/portability_floor.py:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 49 | used here | Imported from portability_baseline to ensure test baseline files remain diffable in git. |
| scripts/validation/check_vendor_portability.py | 91 | used here | Imported from portability_baseline to ensure vendor baselines remain diffable. |
| scripts/validation/portability_baseline.py | 55 | defined here | Exported in __all__ as public git diff attribute verification check. |
| scripts/validation/portability_floor.py | 132 | used here | Referenced in docstring explaining protection against unreviewable binary baseline diffs. |

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
A validation guard function in `scripts/validation/portability_baseline.py` verifying diffability of baseline files in git, classified as `name-only` per D-023.
