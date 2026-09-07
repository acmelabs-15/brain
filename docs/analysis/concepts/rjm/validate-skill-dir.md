---
package: rjm
name: validate_skill_dir
slug: validate-skill-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_skill_dir

## Definition — verbatim
(used, not defined)

> "def validate_skill_dir(skill_dir: Path, verbose: bool = False) -> list[str]:" — scripts/validate_skill_installation.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_installation.py | 59 | defined here | Function validating SKILL.md existence, frontmatter YAML syntax, and required fields in a skill directory. |

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
`validate_skill_dir` is a Python function identifier validating directory-level SKILL.md structure and YAML frontmatter rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
