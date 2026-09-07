---
package: rjm
name: MutationRunner
slug: mutationrunner
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# MutationRunner

## Definition — verbatim
(used, not defined)

> "class MutationRunner:" — scripts/testing/mutation_harness.py:197

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 197 | defined here | Class orchestrating the application, subprocess test execution, and safe restoration of code mutations. |

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
MutationRunner is a Python class identifier executing mutation tests within isolated workspaces rather than a lifecycle concept.
