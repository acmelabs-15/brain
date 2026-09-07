---
package: rjm
name: MutationInterrupted
slug: mutationinterrupted
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# MutationInterrupted

## Definition — verbatim
(used, not defined)

> "class MutationInterrupted(SystemExit):" — scripts/testing/mutation_workspace.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace.py | 50 | defined here | Exception class raised upon SIGINT/SIGTERM to enable structured workspace cleanup before exiting. |

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
MutationInterrupted is a Python exception class identifier used for signal handling during mutation runs rather than a lifecycle concept.
