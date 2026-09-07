---
package: rjm
name: covered_ids
slug: covered-ids
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# covered_ids

## Definition — verbatim
(used, not defined)

> "def covered_ids(repo_root: Path, kind: str) -> set[str]:" — scripts/validation/check_rule_activation_coverage.py:237

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 237 | defined here | Function discovering covered rule or skill artifact identifiers from scenario files. |

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
A Python function identifier returning the set of artifact identifiers covered by valid evaluation scenarios rather than an agent lifecycle concept.
