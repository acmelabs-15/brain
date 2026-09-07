---
package: rjm
name: VALID_OPERATIONS
slug: valid-operations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py, sha256: 7683c7365a23e18d99753f024c1c4a4ce49c01a2881863be56746d4fc3d11bca}
  - {path: scripts/check_skill_exists.py, sha256: 217d9c08ab8ab052abcfabed7a1f5db5c57d148ed2eb25407955b6d065892f16}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# VALID_OPERATIONS

## Definition — verbatim
(used, not defined)

> "VALID_OPERATIONS = (\"full\", \"quick\", \"validate\")" — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py | 52 | defined here | Constant tuple enumerating supported CodeQL scan operations: full, quick, and validate. |
| scripts/check_skill_exists.py | 31 | defined here | Frozenset constant enumerating valid skill lookup operations: pr, issue, reactions, label, and milestone. |

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
defects: doc-drift, missing-path, orphan

## Design notes
`VALID_OPERATIONS` is a Python code-level constant identifier defining allowable command-line operations across CodeQL scanning and skill verification scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
