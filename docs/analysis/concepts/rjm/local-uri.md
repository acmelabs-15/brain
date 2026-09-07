---
package: rjm
name: LOCAL_URI
slug: local-uri
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# LOCAL_URI

## Definition — verbatim
(used, not defined)

> "LOCAL_URI = re.compile(" — scripts/validation/check_plugin_frontmatter_self_containment.py:311

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 311 | defined here | Compiled regular expression detecting illegal file:/ URIs in shipped plugin frontmatter. |

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
`LOCAL_URI` is a compiled regular expression constant in `check_plugin_frontmatter_self_containment.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
