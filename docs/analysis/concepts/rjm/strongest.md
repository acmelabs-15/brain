---
package: rjm
name: _strongest
slug: strongest
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_floor.py, sha256: 880eb845d61bfdbabbe2065af1621f298c96a33719f50ed694a30a69e461f9d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _strongest

## Definition — verbatim
(used, not defined)

> "def _strongest(disk: Sections | None, committed: Sections | None) -> Sections | None:" — scripts/validation/portability_floor.py:157

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_floor.py | 157 | defined here | Helper merging disk and committed baseline readings taking the higher violation count per path. |

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
A private helper function identifier in `portability_floor.py`, classified as name-only per D-023.
