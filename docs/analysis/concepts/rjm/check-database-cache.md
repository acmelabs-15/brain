---
package: rjm
name: check_database_cache
slug: check-database-cache
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codeql/scripts/get_codeql_diagnostics.py, sha256: 2372f00b68a7a924f56957e139c6b0c1f1e64fce73a2cc350e49fe85ee4504a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_database_cache

## Definition — verbatim
(used, not defined)

> "def check_database_cache(" — .codeql/scripts/get_codeql_diagnostics.py:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/get_codeql_diagnostics.py | 181 | defined here | Evaluates database cache metadata against git commit SHA, config file hash, and directory hashes. |

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
defects: missing-path (.codeql/scripts/get_codeql_diagnostics.py:81)

## Design notes
A Python function identifier (`check_database_cache`) in `get_codeql_diagnostics.py` verifying cache validity for CodeQL databases, classified as `name-only` per D-023.
