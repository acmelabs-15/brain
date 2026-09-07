---
package: rjm
name: Warnings
slug: warnings
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/WORKFLOW-VALIDATION.md, sha256: 7ee8b92ba397cbd4f1f404cdb0cdbf0a90291cfb3a92467ca47b83305287107d}
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Warnings

## Definition — verbatim
(used, not defined)

> "**Warnings** are informational and don't block commits:" — docs/WORKFLOW-VALIDATION.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/WORKFLOW-VALIDATION.md | 46 | defined here | Heading and definition of non-blocking informational validation messages in workflow checks. |
| scripts/ci/build_pr_validation_report.py | 110 | used here | Section heading in the markdown validation report formatting non-blocking warning items. |

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
defects: doc-drift (WORKFLOW-VALIDATION.md), clean (build_pr_validation_report.py)

## Design notes
Warnings is a validation result severity classification and report section heading rather than an independent SDLC lifecycle concept, classified as kind: name-only per D-023.
