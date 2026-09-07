---
package: rjm
name: Workflow Structure
slug: workflow-structure
kind: name-only
package_phase: none
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

# Workflow Structure

## Definition — verbatim
(used, not defined)

> "2. **Workflow Structure**: Required fields (`name`, `on`, `jobs`)" — docs/WORKFLOW-VALIDATION.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/WORKFLOW-VALIDATION.md | 30 | defined here | Second check item in workflow validation verifying mandatory top-level workflow fields. |

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
defects: doc-drift

## Design notes
Workflow Structure is a validation check item heading in WORKFLOW-VALIDATION.md verifying mandatory workflow fields rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
