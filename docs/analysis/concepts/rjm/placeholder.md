---
package: rjm
name: PLACEHOLDER
slug: placeholder
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# PLACEHOLDER

## Definition — verbatim
(used, not defined)

> "PLACEHOLDER = re.compile(r\"\{\{[A-Z][A-Z0-9_]*\}\}\")" — scripts/validation/check_plugin_frontmatter_self_containment.py:398

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 398 | defined here | Regular expression constant matching SkillForge uppercase frontmatter template placeholder tokens. |

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
`PLACEHOLDER` is a regular expression pattern variable in `check_plugin_frontmatter_self_containment.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
