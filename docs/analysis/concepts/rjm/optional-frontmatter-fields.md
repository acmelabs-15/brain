---
package: rjm
name: OPTIONAL_FRONTMATTER_FIELDS
slug: optional-frontmatter-fields
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# OPTIONAL_FRONTMATTER_FIELDS

## Definition — verbatim
(used, not defined)

> "OPTIONAL_FRONTMATTER_FIELDS = (" — scripts/validate_skill_installation.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_installation.py | 35 | defined here | Constant tuple enumerating permissible optional frontmatter fields in SKILL.md files. |

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
defects: doc-drift

## Design notes
`OPTIONAL_FRONTMATTER_FIELDS` is a configuration constant identifier listing optional frontmatter keys for skill files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
