---
package: rjm
name: Errors
slug: errors
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

# Errors

## Definition — verbatim
(used, not defined)

> "**Errors** must be fixed before committing:" — docs/WORKFLOW-VALIDATION.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/WORKFLOW-VALIDATION.md | 52 | defined here | Heading and definition of blocking validation failures in workflow checks. |

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
Errors is a validation severity status label designating blocking failures that prevent commits rather than an independent SDLC lifecycle concept, classified as kind: name-only per D-023.
