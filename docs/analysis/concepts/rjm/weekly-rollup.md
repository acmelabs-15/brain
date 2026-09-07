---
package: rjm
name: Weekly rollup
slug: weekly-rollup
kind: artifact
package_phase: cross-phase
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

# Weekly rollup

## Definition — verbatim
> "Weekly rollup: the ``report`` subcommand reads the same SoR file and tallies" — scripts/metrics/kill_criteria.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 49 | defined here | Documented as the report subcommand tallying events per kind within the trailing window. |

## Consumes
`.agents/metrics/drift-events.jsonl` telemetry events file.

## Produces
Markdown summary report table with counts, thresholds, and status per kill criterion.

## When applied
Run via the `report` subcommand or scheduled workflow to monitor kill criteria before rollback limits are reached.

## Sub-concepts
none

## Part of
kill-criteria

## Implementation status
clean

## Design notes
Weekly rollup provides periodic visibility into review convergence health by tallying drift events across a 30-day trailing window against defined kill criteria thresholds.
