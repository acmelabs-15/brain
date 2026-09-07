---
package: rjm
name: database directory and SARIF output file
slug: database-directory-and-sarif-output-file
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

# database directory and SARIF output file

## Definition — verbatim
(used, not defined)

> "Checks that the database directory and SARIF output file were created for the" — scripts/ci/verify_codeql_artifacts.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/verify_codeql_artifacts.py | 4 | used here | Descriptive phrase in script docstring identifying the primary CodeQL artifacts being verified. |

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
A descriptive phrase (`database directory and SARIF output file`) in a CI script docstring describing scan artifacts, classified as `name-only` per D-023.
