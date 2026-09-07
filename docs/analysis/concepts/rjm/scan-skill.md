---
package: rjm
name: scan_skill
slug: scan-skill
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scan_skill

## Definition — verbatim
(used, not defined)

> "def scan_skill(skill_dir: Path, project_root: Path) -> SkillMetadata:" — scripts/skill_registry.py:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_registry.py | 182 | defined here | Scans a skill directory, parses its frontmatter, checks tests/scripts directories, and extracts metadata. |

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
scan_skill is a Python utility function identifier scanning individual skill directories rather than an SDLC lifecycle concept, classified as name-only per D-023.
