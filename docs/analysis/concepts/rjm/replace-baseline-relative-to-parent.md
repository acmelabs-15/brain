---
package: rjm
name: _replace_baseline_relative_to_parent
slug: replace-baseline-relative-to-parent
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_baseline_write.py, sha256: 6fdbc46571c4fccf993f37619487303343ea2b16ac3686423e452c90ca29ff12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _replace_baseline_relative_to_parent

## Definition — verbatim
(used, not defined)

> "def _replace_baseline_relative_to_parent(" — scripts/validation/portability_baseline_write.py:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_baseline_write.py | 80 | defines | Helper function performing directory descriptor traversal and atomic file replacement. |

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
A private Python helper function identifier in `portability_baseline_write.py`, classified as name-only per D-023.
