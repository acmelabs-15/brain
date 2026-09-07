---
package: rjm
name: exit path
slug: exit-path
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
---

# exit path

## Definition — verbatim
> "The /build command is the implementer's exit path. Layer 2 of the PR #1887" — scripts/validation/check_build_gates.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 4 | defined here | Identifies the /build command as the mandatory route an implementer takes to exit the implementation phase. |

## Consumes
Work completed by an implementer during code construction.

## Produces
Structured execution of required exit gates before exiting the build phase.

## When applied
Followed whenever an implementer finishes modifications under the /build command.

## Sub-concepts
exit-gates

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The exit path defines the required sequence and command structure an implementer must execute to complete build work and pass exit gates before review.
