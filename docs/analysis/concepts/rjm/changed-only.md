---
package: rjm
name: --changed-only
slug: changed-only
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# --changed-only

## Definition — verbatim
(used, not defined)

> "\"--changed-only\" in arguments" — scripts/validation/check_build_gates.py:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 95 | used here | Verified as a required argument in code-qualities-assessment invocation to limit checks to changed files. |

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
defects: missing-path

## Design notes
`--changed-only` is a command-line flag identifier passed to quality assessment tools rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
