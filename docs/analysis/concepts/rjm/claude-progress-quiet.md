---
package: rjm
name: CLAUDE_PROGRESS_QUIET
slug: claude-progress-quiet
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# CLAUDE_PROGRESS_QUIET

## Definition — verbatim
(used, not defined)

> "export CLAUDE_PROGRESS_QUIET=1" — scripts/progress/README.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/progress/README.md | 84 | defined here | Documented environment variable for suppressing progress reporting output. |
| scripts/progress/reporter.py | 5 | used here | Inspected via os.environ to determine whether progress output should be suppressed. |

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
`CLAUDE_PROGRESS_QUIET` is an environment variable configuration identifier used to disable progress reporting messages rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
