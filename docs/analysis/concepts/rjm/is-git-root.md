---
package: rjm
name: _is_git_root
slug: is-git-root
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

# _is_git_root

## Definition — verbatim
(used, not defined)

> "def _is_git_root(repo_root: Path) -> bool:" — scripts/validation/check_duplicate_test_helpers.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_duplicate_test_helpers.py | 47 | defined here | Helper function determining whether a directory is the top level of a git repository via rev-parse. |

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
_is_git_root is an internal Python helper function identifier verifying git repository root paths rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
