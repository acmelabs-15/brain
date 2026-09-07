---
package: rjm
name: Quality Gate
slug: quality-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quality Gate

## Definition — verbatim
> "| **Quality Gate** | Validation checkpoint (critic review, QA pass, security scan) before proceeding |" — README.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| README.md | 148 | defined here | Key concepts table defines quality gate as a validation checkpoint before proceeding. |

## Consumes
Phase deliverables, code artifacts, test reports, or pull request state.

## Produces
Validation verdicts (PASS, WARN, FAIL) authorizing phase progression or blocking promotion.

## When applied
Enforced between lifecycle stages, before committing code, and prior to PR submission.

## Sub-concepts
phase-1-5-blocking-gate, pre-flight-validation

## Part of
lifecycle

## Implementation status
defects: missing-path, doc-drift

## Design notes
Quality gates in rjm establish mandatory verification checkpoints across the development lifecycle, preventing regressions, unvalidated specifications, security vulnerabilities, or failing tests from advancing down the delivery pipeline.
