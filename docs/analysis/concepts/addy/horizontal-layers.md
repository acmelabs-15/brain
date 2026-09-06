---
package: addy
name: horizontal layers
slug: horizontal-layers
kind: pattern
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/planning-and-task-breakdown.json, sha256: 7747013709f9c76f96436e0229391b80058b7ba4b32cac5419523f3e5a688b10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# horizontal layers

## Definition — verbatim
(used, not defined)
> "Tasks are vertical slices rather than horizontal layers" — evals/cases/planning-and-task-breakdown.json:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/planning-and-task-breakdown.json | 39 | used here | Cited in evaluation expectations as an anti-pattern to avoid when breaking down tasks. |

## Consumes
Multi-tier system architecture (database schema, API routes, user interface).

## Produces
Layer-specific task units (e.g., all database tables first, all APIs second) that cannot be verified independently.

## When applied
Contrasted during task planning to steer developers away from tier-by-tier decomposition toward vertical slices.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
Decomposing work into `horizontal layers` is treated as an anti-pattern in Addy's planning methodology. When work is organized by architectural layer (e.g., writing all database models before any UI), intermediate tasks cannot be end-to-end verified or delivered incrementally. Addy enforces vertical slices over horizontal layers so each task delivers testable, functioning user value.
