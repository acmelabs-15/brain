---
package: rjm
name: MutationResult
slug: mutationresult
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# MutationResult

## Definition — verbatim
(used, not defined)

> "class MutationResult:" — scripts/testing/mutation_harness.py:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 92 | defined here | Dataclass recording the return code and detection status for a single executed mutation entry. |

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
MutationResult is a Python dataclass identifier holding test execution outcomes rather than a lifecycle concept.
