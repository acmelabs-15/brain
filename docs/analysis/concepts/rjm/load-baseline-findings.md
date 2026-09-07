---
package: rjm
name: load_baseline_findings
slug: load-baseline-findings
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_baseline_findings

## Definition — verbatim
(used, not defined)

> "def load_baseline_findings(" — scripts/guard_diff.py:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/guard_diff.py | 159 | defined here | Loads a v2 baseline JSON file and deserializes findings into content-keyed finding tuples. |

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
A Python helper function that deserializes content-keyed findings from a v2 JSON baseline file, classified as name-only per D-023.
