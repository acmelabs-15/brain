---
package: rjm
name: MARKETPLACE_MANIFESTS
slug: marketplace-manifests
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MARKETPLACE_MANIFESTS

## Definition — verbatim
(used, not defined)

> "MARKETPLACE_MANIFESTS = (\".claude-plugin/marketplace.json\", \".github/plugin/marketplace.json\")" — scripts/validation/check_plugin_frontmatter_self_containment.py:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 153 | defined here | Constant tuple specifying relative paths to Claude and GitHub marketplace plugin manifests. |

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
`MARKETPLACE_MANIFESTS` is a Python module constant tuple in `check_plugin_frontmatter_self_containment.py` specifying manifest file paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
