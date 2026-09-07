---
package: rjm
name: _tracked_test_files
slug: tracked-test-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_duplicate_test_helpers.py, sha256: 8906f18524078aa443be6371e81d6f866fc50df83b93e3be976f4b34b50fc0b5}
  - {path: scripts/validation/check_test_tree_writes.py, sha256: 3be035ef1a8fa8f3129bdba85305786b374ca532615d1c04b49aabf1d6806550}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _tracked_test_files

## Definition — verbatim
(used, not defined)

> "def _tracked_test_files(repo_root: Path) -> list[Path]:" — scripts/validation/check_duplicate_test_helpers.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_duplicate_test_helpers.py | 64 | defined here | Discovers test files to scan using git ls-files or filesystem walking. |
| scripts/validation/check_test_tree_writes.py | 205 | defined here | Discovers tracked test files matching test naming patterns via git ls-files. |

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
defects: other

## Design notes
_tracked_test_files is an internal Python helper function identifier discovering test files rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
