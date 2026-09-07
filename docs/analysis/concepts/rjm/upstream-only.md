---
package: rjm
name: UPSTREAM_ONLY
slug: upstream-only
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# UPSTREAM_ONLY

## Definition — verbatim
(used, not defined)

> "UPSTREAM_ONLY = (" — scripts/validation/check_plugin_frontmatter_self_containment.py:242

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 242 | defined here | Module constant listing regex patterns for repository directories that exist only upstream and are not installed with plugins. |

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
`UPSTREAM_ONLY` is a Python module constant tuple in `check_plugin_frontmatter_self_containment.py` defining upstream-only directory patterns rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
