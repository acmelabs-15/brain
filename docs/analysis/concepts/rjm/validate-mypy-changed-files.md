---
package: rjm
name: validate_mypy_changed_files
slug: validate-mypy-changed-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_mypy.py, sha256: 50e06e69069b23a7397d2db3b84cf201e0681cf8d32d64b49a278755d2712f0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_mypy_changed_files

## Definition — verbatim
(used, not defined)

> "def validate_mypy_changed_files(repo_root: Path) -> bool:" — scripts/validation/checks_mypy.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_mypy.py | 20 | defined here | Runs incremental mypy static type checking over Python files changed on the branch under ratchet semantics. |

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
defects: script-bug

## Design notes
A Python validation function identifier in `checks_mypy.py` running incremental type checks rather than an agent lifecycle concept.
