---
package: rjm
name: build_registry
slug: build-registry
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# build_registry

## Definition — verbatim
(used, not defined)

> "def build_registry(skills_dir: Path, project_root: Path) -> list[SkillMetadata]:" — scripts/skill_registry.py:219

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_registry.py | 219 | defined here | Iterates through all skill directories to compile a list of SkillMetadata objects. |

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
defects: orphan, doc-drift

## Design notes
build_registry is a Python function identifier aggregating metadata across skills into a registry list rather than an SDLC lifecycle concept, classified as name-only per D-023.
