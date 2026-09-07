---
package: rjm
name: load_battery
slug: load-battery
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# load_battery

## Definition — verbatim
(used, not defined)

> "def load_battery(path: Path) -> list[MutationEntry]:" — scripts/testing/mutation_harness.py:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 111 | defined here | Function loading and parsing JSON mutation battery files into structured MutationEntry objects. |

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
load_battery is a Python function identifier that deserializes mutation battery configuration files rather than a lifecycle concept.
