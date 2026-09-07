---
package: rjm
name: emit_checkpoint
slug: emit-checkpoint
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# emit_checkpoint

## Definition — verbatim
(used, not defined)

> "def emit_checkpoint(" — scripts/progress/reporter.py:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/progress/__init__.py | 20 | used here | Re-exported in module initialization namespace. |
| scripts/progress/README.md | 16 | used here | Documented as the utility for emitting intermediate progress indicators during operations exceeding 30 seconds. |
| scripts/progress/reporter.py | 36 | defined here | Utility emitting formatted checkpoint notifications to stderr during long-running tasks. |

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
`emit_checkpoint` is a Python function identifier emitting formatted checkpoint messages to stderr rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
