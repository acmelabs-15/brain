---
package: rjm
name: critic pre-mortem
slug: critic-pre-mortem
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# critic pre-mortem

## Definition — verbatim
(used, not defined)

> "WHEN Step 9 (critic pre-mortem) runs" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 124 | used here | Specified in REQ-016-09 requiring Step 9 critic pre-mortem execution of three binary Step 0 validity checks before PRD approval. |

## Consumes
prd

## Produces
drift-check-results

## When applied
> "WHEN Step 9 (critic pre-mortem) runs" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:124

## Sub-concepts
demand-reality-drift, desperate-specificity-drift, narrowest-wedge-drift

## Part of
spec-pipeline

## Implementation status
defects: doc-drift, missing-path

## Design notes
A verification gate in rjm's specification workflow where the critic agent applies prospective hindsight and automated binary drift checks against the final PRD. It ensures that user stories, requirements, and acceptance criteria have not silently drifted from the foundational first-principles answers established in Step 0 before the specification is signed off.
