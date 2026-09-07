---
package: rjm
name: validate_source_skills
slug: validate-source-skills
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_source_skills

## Definition — verbatim
(used, not defined)

> "def validate_source_skills(source_dir: Path, verbose: bool = False) -> int:" — scripts/validate_skill_installation.py:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_installation.py | 89 | defined here | Function iterating through .claude/skills/ and validating each child skill directory. |

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
`validate_source_skills` is a Python function identifier iterating through repository skill directories to invoke validation checks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
