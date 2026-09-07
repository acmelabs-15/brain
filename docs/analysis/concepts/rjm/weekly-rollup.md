---
package: rjm
name: Weekly rollup
slug: weekly-rollup
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
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
