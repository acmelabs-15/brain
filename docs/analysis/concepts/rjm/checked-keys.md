---
package: rjm
name: CHECKED_KEYS
slug: checked-keys
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CHECKED_KEYS

## Definition — verbatim
(used, not defined)

> "CHECKED_KEYS = (\"description\", \"name\")" — scripts/validation/check_plugin_frontmatter_self_containment.py:348

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 348 | defined here | Module constant specifying frontmatter keys (description, name) inspected for outward path references. |

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
`CHECKED_KEYS` is a Python module constant tuple in `check_plugin_frontmatter_self_containment.py` specifying evaluated metadata keys rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
