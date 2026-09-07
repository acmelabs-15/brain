---
package: rjm
name: "EXIT CODES (ADR-035):"
slug: exit-codes-adr-035
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/verify_codeql_artifacts.py, sha256: abda124f6dbe8089fa9e0659ed6070f298394457ab3a81a9543008035bec8e46}
  - {path: scripts/error_classification.py, sha256: 3484ef44fd2a97b6598992c1270e09d269abc214304607bf05653a9f763dab85}
  - {path: scripts/validation/validate_agent_catalog.py, sha256: b5d78d816710a2c6fdc598425db8df567139033f76ea7c8fda36eaa10672c49c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT CODES (ADR-035):

## Definition — verbatim
(used, not defined)

> "EXIT CODES (ADR-035):" — scripts/ci/verify_codeql_artifacts.py:8

## Also called — verbatim
"Exit Codes (ADR-035):" — scripts/error_classification.py:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/verify_codeql_artifacts.py | 8 | used here | Section header in docstring introducing standardized process exit code mappings. |
| scripts/error_classification.py | 7 | used here | Section header in module docstring listing exit code categories. |
| scripts/validation/validate_agent_catalog.py | 13 | used here | Section header in docstring documenting exit codes for catalog drift validation. |

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
defects: exit-code-mismatch, missing-path, orphan

## Design notes
A documentation section header (`EXIT CODES (ADR-035):`) used across CI and validation scripts to define process exit codes, classified as `name-only` per D-023.
