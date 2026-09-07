---
package: rjm
name: REQUIRED_FRONTMATTER_FIELDS
slug: required-frontmatter-fields
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REQUIRED_FRONTMATTER_FIELDS

## Definition — verbatim
(used, not defined)

> "REQUIRED_FRONTMATTER_FIELDS = (" — scripts/validate_skill_installation.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_installation.py | 34 | defined here | Constant tuple defining mandatory YAML frontmatter fields required in SKILL.md files. |
| scripts/validation/validate_design_review.py | 21 | defined here | Constant set defining required YAML frontmatter fields in DESIGN-REVIEW markdown documents. |

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
`REQUIRED_FRONTMATTER_FIELDS` is a configuration constant identifier specifying mandatory YAML frontmatter keys in skills and design reviews rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
