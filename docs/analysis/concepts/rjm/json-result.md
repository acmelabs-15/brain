---
package: rjm
name: JSON_RESULT
slug: json-result
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/codeql_integration_summary.py, sha256: 8d51bec76ad7dc49f84bf6e81441e25192bd22ddd08eb9cea54f29f69bc6c20b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# JSON_RESULT

## Definition — verbatim
(used, not defined)

> "JSON_RESULT), writes a markdown table to $GITHUB_STEP_SUMMARY, and exits 1 if" — scripts/ci/codeql_integration_summary.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/codeql_integration_summary.py | 5 | used here | Environment variable read to determine the execution status of CodeQL JSON output scans. |

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
defects: orphan

## Design notes
`JSON_RESULT` is an environment variable identifier passing test results to summary generation scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
