---
package: rjm
name: Implementation Completeness
slug: implementation-completeness
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Implementation Completeness

## Definition — verbatim
> "Checks all requirements are addressed" — .github/scripts/generate_spec_report.py:185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 185 | used here | Validation check description verifying all specification requirements referenced by a pull request are fully addressed. |

## Consumes
Specification requirements referenced in the pull request and implementation changes across the PR diff.

## Produces
Completeness verdict (`completeness_verdict`: PASS, WARN, or FAIL) indicating whether all referenced specification requirements are addressed.

## When applied
Executed during automated pull request validation to verify full requirement coverage before merging.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, missing-path

## Design notes
Implementation Completeness is an automated quality gate in rjm verifying that every requirement declared in a pull request's referenced specifications has corresponding implementation changes, preventing partial or omitted requirements from slipping into the codebase.
