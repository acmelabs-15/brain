---
package: rjm
name: unfenced prose
slug: unfenced-prose
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# unfenced prose

## Definition — verbatim
(used, not defined)

> "Return (start, end) indices for each run of unfenced prose, end exclusive." — scripts/validation/check_push_lock_paths.py:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_paths.py | 129 | used here | Describes runs of Markdown paragraph text outside code fences scanned for push-lock path prescriptions. |

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
clean

## Design notes
`unfenced prose` is a descriptive term for Markdown paragraph text outside code blocks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
