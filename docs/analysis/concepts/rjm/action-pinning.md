---
package: rjm
name: Action Pinning
slug: action-pinning
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

# Action Pinning

## Definition — verbatim
> "3. **Action Pinning**: All actions use SHA pinning (security requirement)" — docs/WORKFLOW-VALIDATION.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/WORKFLOW-VALIDATION.md | 31 | defined here | Enumerated as the third core check of workflow validation enforcing SHA pinning on external actions. |

## Consumes
GitHub Actions workflow YAML files (.github/workflows/*.yml).

## Produces
Verification that all external action references are pinned to full commit SHAs.

## When applied
Executed during local workflow validation (scripts/validate_workflows.py) and pre-push hooks before commits are pushed.

## Sub-concepts
none

## Part of
workflow-validation

## Implementation status
defects: doc-drift

## Design notes
A security gate ensuring that all external actions referenced in GitHub Actions workflows use full commit SHA pinning rather than mutable branch or tag names, preventing supply chain vulnerabilities from modified upstream action releases.
