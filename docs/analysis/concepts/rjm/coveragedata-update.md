---
package: rjm
name: CoverageData.update
slug: coveragedata-update
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/combine_pin_coverage.py, sha256: 35db4166b2f3bf4fc44975bb286165e1157e42b43a6986bcf7456b166328a5ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CoverageData.update

## Definition — verbatim
(used, not defined)

> "`coverage combine` (coverage.sqldata.CoverageData.update) refuses to mix arc" — scripts/ci/combine_pin_coverage.py:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/combine_pin_coverage.py | 36 | used here | Cited in docstring explaining coverage.py's internal method that refuses to merge branch and statement coverage datasets. |

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
defects: orphan

## Design notes
An internal method from the external coverage.py library referenced in technical documentation regarding dataset merging restrictions rather than an operational lifecycle concept.
