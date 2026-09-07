---
package: rjm
name: bundled format
slug: bundled-format
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# bundled format

## Definition — verbatim
(used, not defined)

> "- Files with ## Skill- headers are flagged as bundled format" — scripts/validate_skill_format.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_format.py | 6 | used here | Specifies that files containing '## Skill-' headers are detected and flagged as bundled format. |

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
defects: script-bug, orphan

## Design notes
`bundled format` is a legacy file organization pattern prohibited by ADR-017 where multiple skills are bundled into a single file rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
