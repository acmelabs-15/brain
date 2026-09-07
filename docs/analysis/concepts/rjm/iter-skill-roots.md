---
package: rjm
name: _iter_skill_roots
slug: iter-skill-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _iter_skill_roots

## Definition — verbatim
(used, not defined)

> "def _iter_skill_roots(repo_root: Path, root: Path) -> list[Path]:" — scripts/validation/check_skill_md_exec_portability.py:207

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 207 | defined here | Iterates skill directory roots containing SKILL.md while validating repository path containment. |

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
defects: other

## Design notes
An internal Python helper function identifier discovering skill roots containing SKILL.md rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
