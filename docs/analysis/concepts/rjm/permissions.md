---
package: rjm
name: Permissions
slug: permissions
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

# Permissions

## Definition — verbatim
> "6. **Permissions**: Warns if missing explicit permissions (security best practice)" — docs/WORKFLOW-VALIDATION.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/WORKFLOW-VALIDATION.md | 34 | defined here | Security check item in workflow validation warning if a workflow lacks explicit permissions declarations. |

## Consumes
Workflow YAML permissions blocks.

## Produces
Warnings when top-level or job-level permissions declarations are omitted.

## When applied
Run during workflow validation to verify adherence to least-privilege security practices.

## Sub-concepts
explicit-permissions

## Part of
workflow-validation

## Implementation status
defects: doc-drift

## Design notes
A security validation gate checking that GitHub Actions workflows explicitly specify their required access tokens and scopes, enforcing the principle of least privilege against default read/write permissions.
