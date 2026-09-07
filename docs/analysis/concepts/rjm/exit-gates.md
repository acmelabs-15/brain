---
package: rjm
name: exit gates
slug: exit-gates
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
---

# exit gates

## Definition — verbatim
> "Static check that ``.claude/commands/build.md`` wires the required exit gates." — scripts/validation/check_build_gates.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 2 | defined here | Validates that required exit gate skill invocations remain wired in the build command. |

## Consumes
Implementation artifacts produced during the build phase.

## Produces
Verification verdict determining whether the build phase may be exited.

## When applied
Invoked at the end of the /build lifecycle command before handing off to review or PR creation.

## Sub-concepts
none

## Part of
exit-path

## Implementation status
defects: missing-path

## Design notes
Exit gates are mandatory validation skills wired into the conclusion of the build lifecycle phase to enforce quality criteria prior to review handoff.
