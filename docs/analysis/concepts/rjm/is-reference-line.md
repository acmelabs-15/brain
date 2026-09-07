---
package: rjm
name: _is_reference_line
slug: is-reference-line
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_reference_line

## Definition — verbatim
(used, not defined)

> "def _is_reference_line(line: str) -> bool:" — scripts/validation/check_agent_skill_discriminator.py:235

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 235 | defined here | Helper evaluating whether a body line matches tables, headings, or short structured list items. |

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
defects: missing-path, other

## Design notes
_is_reference_line is a Python helper function identifier checking if a line is structured reference material, classified as name-only per D-023.
