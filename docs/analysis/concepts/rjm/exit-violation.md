---
package: rjm
name: EXIT_VIOLATION
slug: exit-violation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# EXIT_VIOLATION

## Definition — verbatim
(used, not defined)

> "EXIT_VIOLATION = 1" — scripts/validation/check_plugin_frontmatter_self_containment.py:351

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 351 | defined here | Process exit code constant returned when frontmatter reference self-containment violations are detected. |

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
`EXIT_VIOLATION` is a Python process exit code constant in `check_plugin_frontmatter_self_containment.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
