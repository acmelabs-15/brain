---
package: rjm
name: invoke-on-demand
slug: invoke-on-demand
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# invoke-on-demand

## Definition — verbatim
> "taste-lints, doc-accuracy) were invoke-on-demand and not on the exit path," — scripts/validation/check_build_gates.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 7 | used here | Describes the failure mode where quality skills were discretionary rather than mandatory on the exit path. |

## Consumes
Discretionary agent or user request to execute a skill.

## Produces
Ad-hoc execution and output of a specific skill outside the mandatory phase gates.

## When applied
Used when skills are executed at will rather than required by workflow exit gates.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Invoke-on-demand describes an execution model where verification skills are run at human or agent discretion rather than mandated by phase exit gates.
