---
package: rjm
name: fired
slug: fired
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

# fired

## Definition — verbatim
(used, not defined)

> "status: ``fired`` when ``count >= threshold``, ``approaching`` when" — scripts/metrics/kill_criteria.py:305

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 305 | defined here | Status state indicating a kill criterion count has reached its threshold, triggering rollback. |

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
fired is a telemetry status state indicating that a kill criterion has fired and mandated a design rollback rather than an independent lifecycle concept.
