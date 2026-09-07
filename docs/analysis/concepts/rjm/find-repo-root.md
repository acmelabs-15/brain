---
package: rjm
name: find_repo_root
slug: find-repo-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_repo_root

## Definition — verbatim
(used, not defined)

> "def find_repo_root() -> Path:" — scripts/test_selection/import_graph.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 42 | defined here | Helper function resolving repository root relative to `scripts/test_selection/import_graph.py`. |
| scripts/validation/check_skill_memory_references.py | 177 | defined here | Internal helper function discovering git repository root by walking directory parents until finding `.git`. |

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
clean · defects: doc-drift

## Design notes
`find_repo_root` is a Python utility function identifier across test selection and validation scripts for locating the root directory of the repository rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
