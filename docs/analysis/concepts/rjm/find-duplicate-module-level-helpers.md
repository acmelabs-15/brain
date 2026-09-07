---
package: rjm
name: find_duplicate_module_level_helpers
slug: find-duplicate-module-level-helpers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_duplicate_test_helpers.py, sha256: 8906f18524078aa443be6371e81d6f866fc50df83b93e3be976f4b34b50fc0b5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# find_duplicate_module_level_helpers

## Definition — verbatim
(used, not defined)

> "def find_duplicate_module_level_helpers(repo_root: Path) -> list[tuple[Path, str, int, int]]:" — scripts/validation/check_duplicate_test_helpers.py:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_duplicate_test_helpers.py | 131 | defined here | Parses ASTs of test files to identify repeated module-level function definitions. |

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
find_duplicate_module_level_helpers is a Python AST analysis function identifier scanning for duplicate test helper definitions rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
