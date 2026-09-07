---
package: rjm
name: MutationEntry
slug: mutationentry
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# MutationEntry

## Definition — verbatim
(used, not defined)

> "class MutationEntry:" — scripts/testing/mutation_harness.py:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 80 | defined here | Dataclass representing a targeted source code mutation and the test command required to catch it. |

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
MutationEntry is a Python dataclass identifier representing individual mutation cases rather than a lifecycle concept.
