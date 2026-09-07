---
package: rjm
name: _iter_skill_files
slug: iter-skill-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _iter_skill_files

## Definition — verbatim
(used, not defined)

> "def _iter_skill_files(repo_root: Path, skill_root: Path) -> list[Path]:" — scripts/validation/check_skill_md_exec_portability.py:222

## Also called — verbatim
`def iter_skill_files(repo_root: Path) -> list[Path]:` — scripts/validation/check_skill_resolver_anchoring.py:182

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 222 | defined here | Helper function collecting skill files including SKILL.md, references markdown, and script readmes. |
| scripts/validation/check_skill_resolver_anchoring.py | 182 | defined here | Generator function yielding all SKILL.md file paths across configured scan roots. |

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
defects: other, orphan

## Design notes
An internal Python helper function identifier collecting skill markdown and script files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
