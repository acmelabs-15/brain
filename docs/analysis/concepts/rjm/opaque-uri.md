---
package: rjm
name: OPAQUE_URI
slug: opaque-uri
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# OPAQUE_URI

## Definition — verbatim
(used, not defined)

> "OPAQUE_URI = re.compile(" — scripts/validation/check_plugin_frontmatter_self_containment.py:297

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 297 | defined here | Compiled regular expression matching opaque non-filesystem URIs (mailto, tel, urn, data) to exclude them from path scanning. |

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
`OPAQUE_URI` is a compiled regular expression constant in `check_plugin_frontmatter_self_containment.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
