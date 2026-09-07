---
package: rjm
name: TargetSnapshot
slug: targetsnapshot
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# TargetSnapshot

## Definition — verbatim
(used, not defined)

> "class TargetSnapshot:" — scripts/testing/mutation_workspace.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace.py | 55 | defined here | Dataclass recording the file path and pre-run SHA-256 hash of mutation targets. |

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
TargetSnapshot is a Python dataclass identifier tracking pre-mutation target file hashes rather than a lifecycle concept.
