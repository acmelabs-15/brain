---
package: rjm
name: portability_floor
slug: portability-floor
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_contract_tests.py, sha256: b3471055e8c34baf066d4a98dbd60382fe98aedc0c4f61064ee7b155e0fb04f9}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
  - {path: scripts/validation/portability_git.py, sha256: 514b5c5a3541e4888e0b15440c04ec529e190db1a04714049ece5887b20c92b7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# portability_floor

## Definition — verbatim
(used, not defined)

> "Reading the predecessor is its own concern and lives in `portability_floor`." — scripts/validation/portability_baseline.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 38 | used here | Cited in comment regarding absolute package path imports for portability floor module. |
| scripts/validation/check_vendor_portability.py | 80 | used here | Cited in comment explaining import paths for portability floor. |
| scripts/validation/portability_baseline.py | 14 | used here | Cited in docstring explaining separation of predecessor reading concerns into portability_floor. |
| scripts/validation/portability_git.py | 3 | used here | Cited in docstring explaining split between git history blob reading and baseline interpretation. |

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
A validation module identifier in `scripts/validation/portability_floor.py` managing historical baseline evidence retrieval, classified as `name-only` per D-023.
