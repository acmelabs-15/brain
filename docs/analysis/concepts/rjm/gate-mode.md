---
package: rjm
name: --gate-mode
slug: gate-mode
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# --gate-mode

## Definition — verbatim
(used, not defined)

> "and _option_value(arguments, \"--gate-mode\") == \"regression\"" — scripts/validation/check_build_gates.py:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 97 | used here | Verified as a required option configured to regression mode in code-qualities-assessment invocation. |

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
`--gate-mode` is a command-line option parameter identifier controlling gate execution mode rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
