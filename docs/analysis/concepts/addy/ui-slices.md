---
package: addy
name: UI slices
slug: ui-slices
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/incremental-implementation-pressure/scenario.md, sha256: f211ab173978562ed8b3521aa99fbf4a01e3e0b5bd60547874ba09142284cf15}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# UI slices

## Definition — verbatim
> "UI slices." — evals/fixtures/incremental-implementation-pressure/scenario.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/incremental-implementation-pressure/scenario.md | 9 | used here | Specified as one of the required modular verification increments in an incremental task plan. |

## Consumes
UI designs, component specifications, and adapter contracts.

## Produces
Discrete, testable frontend presentation components and views separated from domain logic.

## When applied
When decomposing full-stack features into isolated presentation and logic increments.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A vertical slicing technique isolating user interface presentation and interaction components into independent delivery units to prevent monolithic coupling with backend adapters.
