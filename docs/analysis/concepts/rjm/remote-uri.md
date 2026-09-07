---
package: rjm
name: REMOTE_URI
slug: remote-uri
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REMOTE_URI

## Definition — verbatim
(used, not defined)

> "REMOTE_URI = re.compile(" — scripts/validation/check_plugin_frontmatter_self_containment.py:284

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 284 | defined here | Compiled regular expression matching network URIs to strip them before inspecting strings for local filesystem paths. |

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
`REMOTE_URI` is a compiled regular expression constant in `check_plugin_frontmatter_self_containment.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
