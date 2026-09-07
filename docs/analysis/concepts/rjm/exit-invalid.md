---
package: rjm
name: EXIT_INVALID
slug: exit-invalid
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/verify_codeql_sarif_structure.py, sha256: bb1ab0941302ba0f029311f469b82725674072a7b4276dfc30a8be4f0c0e61e5}
  - {path: scripts/ci/verify_npm_package_metadata.py, sha256: a512033119983342b4e302a36cee1ec3ca2678492662c59de71861aac4bbd256}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_INVALID

## Definition — verbatim
(used, not defined)

> "EXIT_INVALID = 1" — scripts/ci/verify_codeql_sarif_structure.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/verify_codeql_sarif_structure.py | 23 | defined here | Constant definition setting process exit code to 1 when SARIF files fail validation. |
| scripts/ci/verify_npm_package_metadata.py | 23 | defined here | Constant definition setting process exit code to 1 when package metadata checks fail. |

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
defects: always-failing-gate

## Design notes
A Python constant identifier (`EXIT_INVALID`) representing validation failure exit codes across CI verification scripts, classified as `name-only` per D-023.
