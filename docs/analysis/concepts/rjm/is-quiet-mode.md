---
package: rjm
name: is_quiet_mode
slug: is-quiet-mode
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# is_quiet_mode

## Definition — verbatim
(used, not defined)

> "def is_quiet_mode() -> bool:" — scripts/progress/reporter.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/progress/__init__.py | 21 | used here | Re-exported in module initialization namespace. |
| scripts/progress/README.md | 96 | used here | Documented as helper checking whether progress output should be suppressed. |
| scripts/progress/reporter.py | 23 | defined here | Checks whether CLAUDE_PROGRESS_QUIET environment variable suppresses progress output. |

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
`is_quiet_mode` is a Python predicate function identifier checking whether terminal progress output is suppressed by environment configuration rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
