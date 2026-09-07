---
package: rjm
name: branch_additions
slug: branch-additions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_colocated_skill_tests.py, sha256: 49ed724b3e8cedbd9917a596e3dd3fdec039097bbdc3ce64c4c058834b9225f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# branch_additions

## Definition — verbatim
(used, not defined)

> "def branch_additions(repo_root: Path, base: str = \"origin/main\") -> list[str]:" — scripts/validation/check_colocated_skill_tests.py:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_colocated_skill_tests.py | 116 | defined here | Helper function returning file paths added on a git branch relative to a base reference. |

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
A Python helper function identifier in `check_colocated_skill_tests.py` querying git branch diff additions, classified as `name-only` per D-023.
