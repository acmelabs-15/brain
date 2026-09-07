---
package: rjm
name: find_repo_root
slug: find-repo-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/test_selection/import_graph.py, sha256: 67f96c39ec954d4380d904f09f4d6a77168f8f7b443f9a7c5a0742c752752d5b}
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
