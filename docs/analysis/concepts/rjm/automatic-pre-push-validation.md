---
package: rjm
name: Automatic Pre-Push Validation
slug: automatic-pre-push-validation
kind: gate
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

# Automatic Pre-Push Validation

## Definition — verbatim
> "### Automatic Pre-Push Validation" — docs/WORKFLOW-VALIDATION.md:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/WORKFLOW-VALIDATION.md | 93 | defined here | Section heading introducing automated execution of workflow validation within Lefthook pre-push git hooks. |

## Consumes
Staged or changed workflow YAML files prior to git push.

## Produces
Automated blocking or passing pre-push hook verdict for workflow files.

## When applied
Automatically triggered on git push via Lefthook git hook configuration.

## Sub-concepts
workflow-validation

## Part of
workflow-validation

## Implementation status
defects: doc-drift

## Design notes
An automated git hook gate that runs workflow validation checks via Lefthook before any commit can be pushed to remote branches, preventing broken or insecure workflow files from entering CI.
