---
package: rjm
name: gh metrics
slug: gh-metrics
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/collect_ai_metrics.py, sha256: 58812012ab261d1a99d10734c90fd507b727a64e4c1f1d14c5ddddfa7cefce0f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gh metrics

## Definition — verbatim
(used, not defined)

> "The shell this replaces computed a date window, called ``gh metrics`` twice," — scripts/ci/collect_ai_metrics.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/collect_ai_metrics.py | 7 | used here | Executed via subprocess to collect repository AI metrics for CSV and table reports. |

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
`gh metrics` is an external GitHub CLI extension command rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
