---
package: rjm
name: Workflow Size
slug: workflow-size
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

# Workflow Size

## Definition — verbatim
> "4. **Workflow Size**: Warns if >100 lines (ADR-006: thin orchestration)" — docs/WORKFLOW-VALIDATION.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/WORKFLOW-VALIDATION.md | 32 | defined here | Check item in workflow validation warning when workflow file size exceeds the ADR-006 thin orchestration limit. |

## Consumes
Workflow YAML line counts.

## Produces
Informational warning if a workflow file exceeds 100 lines of code.

## When applied
Run during workflow validation when checking GitHub Actions files against architectural modularity limits.

## Sub-concepts
none

## Part of
workflow-validation

## Implementation status
defects: doc-drift

## Design notes
A structural quality gate enforcing architectural constraint ADR-006 (thin orchestration) by emitting warnings when workflow YAML files exceed 100 lines, encouraging modular extraction into reusable scripts.
