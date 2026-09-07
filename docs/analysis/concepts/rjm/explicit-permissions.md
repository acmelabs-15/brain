---
package: rjm
name: Explicit Permissions
slug: explicit-permissions
kind: pattern
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

# Explicit Permissions

## Definition — verbatim
> "### Explicit Permissions (RECOMMENDED)" — docs/WORKFLOW-VALIDATION.md:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/WORKFLOW-VALIDATION.md | 151 | defined here | Section heading and security recommendation mandating explicit permission declarations in workflow files. |

## Consumes
Workflow specifications and security requirements.

## Produces
Minimized, least-privilege GitHub Actions token permissions declarations.

## When applied
Applied when writing or refactoring GitHub Actions workflow YAML files.

## Sub-concepts
none

## Part of
workflow-validation

## Implementation status
defects: doc-drift

## Design notes
A security pattern where GitHub Actions workflows declare minimal explicit token scopes rather than inheriting default permissive repository tokens, preventing unauthorized repository actions during automated execution.
