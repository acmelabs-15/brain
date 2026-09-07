---
package: rjm
name: Workflow Validation
slug: workflow-validation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/WORKFLOW-VALIDATION.md, sha256: 7ee8b92ba397cbd4f1f404cdb0cdbf0a90291cfb3a92467ca47b83305287107d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Workflow Validation

## Definition — verbatim
> "# Workflow Validation Guide" — docs/WORKFLOW-VALIDATION.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/WORKFLOW-VALIDATION.md | 1 | defined here | Document title establishing local validation procedures for GitHub Actions workflows. |

## Consumes
GitHub Actions workflow files under `.github/workflows/`.

## Produces
Local validation reports, exit codes (0, 1, 2), and dry-run execution results.

## When applied
Applied locally before pushing workflow changes, manually or automatically via Lefthook pre-push hooks.

## Sub-concepts
action-pinning, workflow-size, permissions

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Workflow Validation provides a local verification framework for GitHub Actions workflows prior to git push, enforcing architectural constraints (ADR-006 line limits) and security requirements (action SHA pinning and explicit permissions) to prevent CI breakage and vulnerabilities.
