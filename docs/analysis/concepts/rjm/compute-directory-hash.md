---
package: rjm
name: compute_directory_hash
slug: compute-directory-hash
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

# compute_directory_hash

## Definition — verbatim
(used, not defined)

> "def compute_directory_hash(directory: str) -> str:" — .codeql/scripts/get_codeql_diagnostics.py:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/get_codeql_diagnostics.py | 168 | defined here | Helper function calculating a combined SHA-256 hash across sorted directory files for cache checking. |

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
A Python helper function (`compute_directory_hash`) calculating composite directory hashes for cache checking, classified as `name-only` per D-023.
