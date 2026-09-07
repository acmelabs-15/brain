---
package: rjm
name: _SKIP_DIRS
slug: skip-dirs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py, sha256: b365578728f64561b2606d9bcd84de0cce752e3ec9f72da977d9895beb4ad2e2}
  - {path: scripts/detect_skill_violation.py, sha256: afe11d459bd7604bb9ef80647f0efd016f7e19ac492cf6690322d1b21b457cf7}
  - {path: scripts/validation/check_duplicate_test_helpers.py, sha256: 8906f18524078aa443be6371e81d6f866fc50df83b93e3be976f4b34b50fc0b5}
  - {path: scripts/validation/check_nested_tests.py, sha256: d24df7b8ede26217d2a8aba6b19c32623aa889ac6195f834c25373bae72b4d06}
  - {path: scripts/validation/check_test_tree_writes.py, sha256: 3be035ef1a8fa8f3129bdba85305786b374ca532615d1c04b49aabf1d6806550}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _SKIP_DIRS

## Definition — verbatim
(used, not defined)

> "_SKIP_DIRS = frozenset(" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:866

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 866 | defined here | Frozenset constant specifying directory names (.git, node_modules, .venv, venv, __pycache__) to skip during recursive traversal. |
| scripts/detect_skill_violation.py | 68 | defined here | Constant identifying VCS, virtual environment, and cache directories to prune during repository walks. |
| scripts/validation/check_duplicate_test_helpers.py | 24 | defined here | Constant listing directories to skip when validating test helper uniqueness. |
| scripts/validation/check_nested_tests.py | 28 | defined here | Constant excluding virtual environments, VCS, and cache directories from AST scanning. |
| scripts/validation/check_test_tree_writes.py | 42 | defined here | Constant defining directory exclusion list at module scope. |

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
defects: missing-path, other, script-bug

## Design notes
`_SKIP_DIRS` is a Python frozenset constant identifier used across multiple validation and repair scripts to prune directory traversal rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
