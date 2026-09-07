---
package: rjm
name: --cov-branch
slug: cov-branch
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

# --cov-branch

## Definition — verbatim
(used, not defined)

> "run stays statement-only on purpose: turning on --cov-branch there cost" — scripts/ci/combine_pin_coverage.py:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/combine_pin_coverage.py | 9 | used here | CLI flag enabling branch coverage measurement in targeted pytest-cov pin jobs. |

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
`--cov-branch` is a pytest-cov CLI flag enabling branch coverage instrumentation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
