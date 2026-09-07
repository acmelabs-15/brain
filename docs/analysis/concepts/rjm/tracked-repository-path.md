---
package: rjm
name: tracked_repository_path
slug: tracked-repository-path
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/testing/mutation_workspace_git.py, sha256: 57a9d9dfa073c1d628afccce78bde4137748c564d5f6a1f4d9e0eb4720c708d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tracked_repository_path

## Definition — verbatim
(used, not defined)

> "def tracked_repository_path(path: Path) -> tuple[Path, Path] | None:" — scripts/testing/mutation_workspace_git.py:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 195 | defined here | Function verifying whether a path is tracked by git and returning the repo root and relative path tuple. |

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
tracked_repository_path is a Python function identifier verifying git tracking status of file paths rather than a lifecycle concept.
