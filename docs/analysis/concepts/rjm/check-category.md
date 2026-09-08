---
package: rjm
name: check_category
slug: check-category
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_spec_id_uniqueness.py, sha256: 3423d17958f2be14d7d061d2172e3818165520ca8603b9374b446c32c95b36fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# check_category

## Definition — verbatim
(used, not defined)

> "def check_category(specs_dir: Path, category: str) -> list[str]:" — scripts/validation/check_spec_id_uniqueness.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_spec_id_uniqueness.py | 55 | defined here | Function checking for duplicate spec IDs across files in a single category directory. |

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
defects: doc-drift

## Design notes
A validator helper function identifier in `check_spec_id_uniqueness.py`, classified as name-only per D-023.
