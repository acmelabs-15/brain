---
package: rjm
name: validate_no_orphaned_build_deferrals
slug: validate-no-orphaned-build-deferrals
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_no_orphaned_build_deferrals.py, sha256: 385823fc11288d84abe811bc70275a1e11eef981f5a217f044244fac5386fba0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_no_orphaned_build_deferrals

## Definition — verbatim
(used, not defined)

> "def validate_no_orphaned_build_deferrals(" — scripts/validation/validate_no_orphaned_build_deferrals.py:245

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_no_orphaned_build_deferrals.py | 245 | defined here | Entry point function validating that no staleness deferrals in build_all.py are orphaned. |

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
A Python validation function identifier in `validate_no_orphaned_build_deferrals.py`, classified as name-only per D-023.
