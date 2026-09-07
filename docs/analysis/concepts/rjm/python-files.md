---
package: rjm
name: python_files
slug: python-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/test_selection/import_graph.py, sha256: 67f96c39ec954d4380d904f09f4d6a77168f8f7b443f9a7c5a0742c752752d5b}
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
