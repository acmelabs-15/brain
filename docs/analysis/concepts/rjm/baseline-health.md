---
package: rjm
name: baseline_health
slug: baseline-health
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# baseline_health

## Definition — verbatim
(used, not defined)

> "def baseline_health(actual: int, baseline: int, max_slack: int = MAX_BASELINE_SLACK) -> str | None:" — scripts/ci/count_ratchet.py:407

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/count_ratchet.py | 407 | defined here | Evaluates whether actual violation counts match the recorded baseline within permitted slack boundaries. |

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
A Python validation function comparing actual violation counts against baseline ceilings and allowable slack rather than a lifecycle concept.
