---
package: rjm
name: _ALLOWLIST_DISPLAY
slug: allowlist-display
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/test_investigation_eligibility.py, sha256: 50907c3f8f1d5da028be1849dee966d9cd6119d94ef298e4ea9ae21a0c37289f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _ALLOWLIST_DISPLAY

## Definition — verbatim
(used, not defined)

> "_ALLOWLIST_DISPLAY = get_investigation_allowlist_display()" — scripts/validation/test_investigation_eligibility.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/test_investigation_eligibility.py | 32 | defined here | Constant storing formatted directory display strings for the investigation-only allowlist. |

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
A module-level constant identifier in `test_investigation_eligibility.py` providing formatted allowlist paths, classified as name-only per D-023.
