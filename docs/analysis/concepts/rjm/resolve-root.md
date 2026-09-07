---
package: rjm
name: _resolve_root
slug: resolve-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _resolve_root

## Definition — verbatim
(used, not defined)

> "def _resolve_root(repo_root: Path | None) -> Path:" — scripts/validation/check_skill_md_exec_portability.py:408

## Also called — verbatim
`def _resolve_root(repo_root: Path | None) -> Path:` — scripts/validation/check_skill_portability.py:263
`def resolve_root(repo_root: Path | None, start: Path, require_repo_marker: bool) -> Path:` — scripts/validation/portability_common.py:100

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 408 | defined here | Resolves and normalizes the target repository root path for execution portability scanning. |
| scripts/validation/check_skill_portability.py | 263 | defined here | Resolves the repository root path requiring repository markers. |
| scripts/validation/portability_common.py | 100 | defined here | Common utility resolving repository root by walking parent directories for `.git` or `pyproject.toml`. |

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
defects: other, doc-drift, orphan

## Design notes
An internal Python utility function identifier locating and validating repository root directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
