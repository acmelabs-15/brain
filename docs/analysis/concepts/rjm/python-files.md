---
package: rjm
name: python_files
slug: python-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# python_files

## Definition — verbatim
(used, not defined)

> "def python_files(repo_root: Path) -> list[Path]:" — scripts/test_selection/import_graph.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 51 | defined here | Function discovering all in-repo Python sources under repository root while excluding cache directories. |
| scripts/validation/check_zero_collection_tests.py | 18 | used here | Configuration key from pyproject.toml specifying test file pattern matching `test_*.py`. |

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
clean · defects: orphan

## Design notes
`python_files` is a Python function identifier in `import_graph.py` and a pyproject.toml pytest configuration key in `check_zero_collection_tests.py` designating Python files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
