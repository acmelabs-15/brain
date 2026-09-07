---
package: rjm
name: REQUIRED_SKILLS_ROOTS
slug: required-skills-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REQUIRED_SKILLS_ROOTS

## Definition — verbatim
(used, not defined)

> "REQUIRED_SKILLS_ROOTS: frozenset[str] = frozenset(" — scripts/validation/check_skill_md_portability.py:290

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 290 | defined here | Configuration frozenset defining plugin roots whose skills trees are required to exist during validation. |

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
`REQUIRED_SKILLS_ROOTS` is a Python configuration constant identifier specifying mandatory skills root directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
