---
package: rjm
name: 1 - One or more artifacts missing
slug: 1-one-or-more-artifacts-missing
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/verify_codeql_artifacts.py, sha256: abda124f6dbe8089fa9e0659ed6070f298394457ab3a81a9543008035bec8e46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# 1 - One or more artifacts missing

## Definition — verbatim
(used, not defined)

> "1 - One or more artifacts missing" — scripts/ci/verify_codeql_artifacts.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/verify_codeql_artifacts.py | 10 | defined here | Documented exit code mapping indicating verification failure due to missing database or SARIF outputs. |

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
defects: missing-path, orphan

## Design notes
A docstring exit code description (`1 - One or more artifacts missing`) in `verify_codeql_artifacts.py`, classified as `name-only` per D-023.
