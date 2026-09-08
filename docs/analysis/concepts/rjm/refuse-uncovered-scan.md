---
package: rjm
name: refuse_uncovered_scan
slug: refuse-uncovered-scan
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# refuse_uncovered_scan

## Definition — verbatim
(used, not defined)

> "def refuse_uncovered_scan(root: Path, scanned_by_root: Mapping[str, int], unit: str) -> bool:" — scripts/validation/portability_common.py:396

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_common.py | 396 | defined here | Function refusing baseline writes when scan roots yield zero files due to partial checkouts or sparse clones. |

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
A Python validation function identifier in `portability_common.py`, classified as name-only per D-023.
