---
package: rjm
name: _scoped_core_bare
slug: scoped-core-bare
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_repo_health.py, sha256: f7f2150b68774a2af74e27eb6a7ee68c4aa28d0e3fef28e6a0a60e59cebf6854}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
