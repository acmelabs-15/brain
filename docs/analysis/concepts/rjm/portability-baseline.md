---
package: rjm
name: portability_baseline
slug: portability-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_contract_tests.py, sha256: b3471055e8c34baf066d4a98dbd60382fe98aedc0c4f61064ee7b155e0fb04f9}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
  - {path: scripts/validation/portability_floor.py, sha256: 880eb845d61bfdbabbe2065af1621f298c96a33719f50ed694a30a69e461f9d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# portability_baseline

## Definition — verbatim
(used, not defined)

> "`portability_baseline` decides whether a replacement baseline may be written." — scripts/validation/portability_floor.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 38 | used here | Cited in comment explaining sys.path setup for importing portability baseline modules. |
| scripts/validation/check_vendor_portability.py | 80 | used here | Cited in comment explaining import requirements for portability floor dependencies. |
| scripts/validation/portability_floor.py | 3 | used here | Cited in module docstring explaining separation of replacement decision logic from predecessor reading. |

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
A validation module identifier in `scripts/validation/portability_baseline.py` managing baseline artifact lifecycles, classified as `name-only` per D-023.
