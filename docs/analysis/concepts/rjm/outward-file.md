---
package: rjm
name: OUTWARD_FILE
slug: outward-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# OUTWARD_FILE

## Definition — verbatim
(used, not defined)

> "OUTWARD_FILE = compile_outward_file(PLUGIN_ROOTS)" — scripts/validation/check_plugin_frontmatter_self_containment.py:343

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 343 | defined here | Compiled regex detecting outward file references pointing to upstream-only directories or bare plugin roots. |

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
`OUTWARD_FILE` is a compiled regular expression object in `check_plugin_frontmatter_self_containment.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
