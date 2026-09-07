---
package: rjm
name: ai-spec-validation
slug: ai-spec-validation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/workflow-coalescing.md, sha256: 652beeb96b38bcfc8b9103ece1e6a599327303a9ee9778a60dda87ace3b3048d}
  - {path: .github/scripts/extract_incremental_scope.py, sha256: b4d90659249173f58ce95742155bc4021e9b3cf8436be4cdbce4f8800d4c1c8b}
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ai-spec-validation

## Definition — verbatim
(used, not defined)
> "The ai-spec-validation workflow delegates marker parsing here so YAML stays an" — .github/scripts/extract_incremental_scope.py:4

## Also called — verbatim
"<!-- AI-SPEC-VALIDATION -->" — .github/scripts/generate_spec_report.py:113

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 43 | used here | Listed among monitored AI-powered GitHub Actions workflows subject to run coalescing tracking. |
| .github/scripts/extract_incremental_scope.py | 4 | used here | Cited in module docstring as the workflow delegating title marker parsing for incremental PR scoping. |
| .github/scripts/generate_spec_report.py | 113 | used here | Output report comment tag injected into PR comments to identify automated spec validation summaries. |

## Consumes
PR titles, branch references, and associated specification documents.

## Produces
PR comment reports and gate verdicts verifying spec completeness, traceability, and slice boundaries.

## When applied
Runs on pull request events to ensure implementation changes correspond to accepted specifications.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, orphan

## Design notes
ai-spec-validation is a GitHub Actions workflow and gate that verifies code changes in a PR conform to approved specifications, enforcing requirement traceability and parsing incremental slice scope markers.
