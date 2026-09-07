---
package: rjm
name: ruleset_params_baseline.json
slug: ruleset-params-baseline-json
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# ruleset_params_baseline.json

## Definition — verbatim
(used, not defined)

> "Compares the values in ruleset_params_baseline.json against the live" — scripts/validation/check_ruleset_params_drift.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ruleset_params_drift.py | 4 | used here | Baseline JSON configuration file recording expected GitHub repository branch ruleset parameters. |

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
defects: exit-code-mismatch, orphan

## Design notes
A JSON configuration file name recording expected repository branch ruleset parameters rather than an agent lifecycle concept.
