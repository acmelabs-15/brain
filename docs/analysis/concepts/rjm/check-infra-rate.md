---
package: rjm
name: CHECK_INFRA_RATE
slug: check-infra-rate
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/write_metrics_threshold_summary.py, sha256: a8e2cef20436ca451575a9caa02a73a96952d257117003b3d234439646f1ca46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CHECK_INFRA_RATE

## Definition — verbatim
(used, not defined)

> "Reads CHECK_COVERAGE and CHECK_INFRA_RATE from environment variables and" — scripts/ci/write_metrics_threshold_summary.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/write_metrics_threshold_summary.py | 4 | used here | Environment variable parsed to compare infrastructure review rates against the target threshold. |

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
defects: exit-code-mismatch

## Design notes
CHECK_INFRA_RATE is an environment variable identifier supplying infrastructure review percentages to CI summary scripts rather than an operational lifecycle concept.
