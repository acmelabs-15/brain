---
package: rjm
name: _NO_PR_MARKER
slug: no-pr-marker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_common.py, sha256: 9aa4472080646e8ab1a6cfd238f27026ec1875b981ba3b251b0b9e2efe3d0897}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _NO_PR_MARKER

## Definition — verbatim
(used, not defined)

> "_NO_PR_MARKER = " — scripts/validation/checks_common.py:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_common.py | 95 | defined here | Constant string used to detect authoritative no-PR responses in gh stderr. |

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
A module-level constant string in `scripts/validation/checks_common.py` matching GitHub CLI error output, classified as name-only per D-023.
