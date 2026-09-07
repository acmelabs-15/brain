---
package: rjm
name: ADR-006 Compliance
slug: adr-006-compliance
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/guides/python-cicd-patterns.md, sha256: a9beee2064b3eeda17c6b11ab4073aaecf456352c813725770d58f6fbb061ee0}
  - {path: docs/WORKFLOW-VALIDATION.md, sha256: 7ee8b92ba397cbd4f1f404cdb0cdbf0a90291cfb3a92467ca47b83305287107d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR-006 Compliance

## Definition — verbatim
> "ADR-006 Compliance" — .agents/guides/python-cicd-patterns.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/guides/python-cicd-patterns.md | 143 | defined here | Section defining architectural rules separating workflow orchestration from Python logic. |
| docs/WORKFLOW-VALIDATION.md | 115 | defined here | Section describing automated validation checks enforcing thin workflows and testable modules. |

## Consumes
GitHub Actions workflow YAML definitions and Python module implementations.

## Produces
Verification that workflow files contain orchestration only, with complex business logic encapsulated in testable Python modules.

## When applied
During workflow design and CI validation checks to enforce architectural boundaries.

## Sub-concepts
thin-workflows-testable-modules

## Part of
workflow-validation

## Implementation status
defects: doc-drift, missing-path

## Design notes
Architectural compliance gate ensuring GitHub Actions workflow files remain thin declarative orchestrators while all execution logic resides in testable, lintable Python modules. This prevents un-testable inline shell logic in CI workflows.
