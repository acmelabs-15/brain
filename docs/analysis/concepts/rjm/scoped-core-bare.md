---
package: rjm
name: _scoped_core_bare
slug: scoped-core-bare
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _scoped_core_bare

## Definition — verbatim
(used, not defined)

> "def _scoped_core_bare(repo_root: Path, budget: GitBudget) -> tuple[tuple[str, str], ...]:" — scripts/validation/check_repo_health.py:209

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 209 | defined here | Function querying Git config with --show-scope --type=bool --get-all for core.bare. |

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
clean

## Design notes
`_scoped_core_bare` is an internal Python helper function querying Git configuration across all scopes to extract `core.bare` values, classified as `kind: name-only` per D-023.
