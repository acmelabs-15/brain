---
package: rjm
name: pytest
slug: pytest
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
  - {path: .agents/guides/python-for-powershell-developers.md, sha256: f2d71106f74fb6e3c542e1154097ec1f81c8b08a58e35d541489901b2b1f7f49}
  - {path: .agents/projects/v0.3.1/PowerShell-migration.md, sha256: 2bf56db90e63bed0596639e3ae4e0b13f71528454721b4561d580a1d387d6e12}
  - {path: .claude/skills/steering-matcher/SKILL.md, sha256: 267193c275adf53f2f2401fd3018a07c37d19c20259acb2c6f40224b68b6dcf0}
  - {path: scripts/test_selection/__init__.py, sha256: 6966c08c6bbac856a1b0bc5721a1127b0ad255953ee70d4d336e86037dc5add6}
  - {path: scripts/validation/check_nested_tests.py, sha256: d24df7b8ede26217d2a8aba6b19c32623aa889ac6195f834c25373bae72b4d06}
  - {path: scripts/validation/check_placeholder_identity.py, sha256: b226e1a01102b85939b491881b102f5b978fd226c21b697a0b89c8ea69506383}
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pytest

## Definition — verbatim
(used, not defined)

> "Run pytest to verify pattern matching:" — .claude/skills/steering-matcher/SKILL.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-042-python-migration-strategy.md | 76 | used here | Evaluated as part of hybrid transition trade-offs causing test fragmentation alongside Pester. |
| .agents/guides/python-for-powershell-developers.md | 391 | used here | Section header comparing Python testing patterns against Pester in PowerShell. |
| .agents/projects/v0.3.1/PowerShell-migration.md | 142 | used here | Noted as providing existing test coverage for migrated Python validation scripts. |
| .claude/skills/steering-matcher/SKILL.md | 84 | used here | Documented test command for validating skill pattern matching logic. |
| scripts/test_selection/__init__.py | 3 | used here | Cited in module docstring describing test mapping from modified source files to test files. |
| scripts/validation/check_nested_tests.py | 5 | used here | Referenced in validator docstring warning against silent collection omission for nested test functions. |
| scripts/validation/check_placeholder_identity.py | 5 | used here | Cited in guard docstring checking placeholder git identity leaks from test fixtures. |
| scripts/validation/git_hook_policy.py | 8410 | defined here | Defined in policy dispatch table mapping the pytest hook command to its handler. |

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
defects: internal-contradiction, missing-path

## Design notes
pytest is an external Python testing framework executable and command identifier rather than an agent lifecycle concept per D-023.
