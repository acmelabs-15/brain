---
package: rjm
name: ORDERED_KINDS
slug: ordered-kinds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/metrics/kill_criteria.py, sha256: df07f1498c8f0ffe5579934dc3331a3e5de5d023fd502207bfb31cb7ea8dc686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ORDERED_KINDS

## Definition — verbatim
(used, not defined)

> "ORDERED_KINDS: Final[tuple[KillCriterion, ...]] = (" — scripts/metrics/kill_criteria.py:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 80 | defined here | Constant tuple specifying the display order of kill criteria in rollup reports. |

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
ORDERED_KINDS is a constant tuple establishing deterministic report ordering for kill criteria telemetry rather than an independent lifecycle concept.
