---
package: addy
name: PRD
slug: prd
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/observability-and-instrumentation.json, sha256: 67e03c0bdd5d0ba53d45fbca244737519973cfacabaa2ffde0bc26840321c125}
  - {path: evals/cases/planning-and-task-breakdown.json, sha256: 7747013709f9c76f96436e0229391b80058b7ba4b32cac5419523f3e5a688b10}
  - {path: evals/cases/spec-driven-development.json, sha256: e6e637aad5de3e7dcec37ba6a3ae4ccf5f4394057a5a2266efb3e5f224ca719c}
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# PRD

## Definition — verbatim
> "Writes a PRD covering objectives, commands, structure, code style, testing, and boundaries when requirements are unclear, ambiguous, or only exist as a vague idea." — external/spec-driven-development.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/observability-and-instrumentation.json | 24 | used here | Negative trigger prompt verifying PRD drafting does not route to observability. |
| evals/cases/planning-and-task-breakdown.json | 10 | used here | Positive trigger prompt for decomposing a PRD into an ordered task breakdown. |
| evals/cases/spec-driven-development.json | 10 | used here | Positive trigger prompt for drafting a PRD with objectives and boundaries. |
| external/idea-refine.md | 12 | used here | Referenced in navigation card for spec-driven-development as the produced artifact. |
| external/interview-me.md | 12 | used here | Referenced in navigation card for spec-driven-development as the produced artifact. |
| external/spec-driven-development.md | 5 | used here | Described in web metadata as the primary output of spec-driven development. |
| README.md | 15 | used here | Illustrated in the lifecycle diagram as the Plan/Define transition artifact. |

## Consumes
Clarified intent, user interview results, or raw feature requirements.

## Produces
A structured specification covering objectives, commands, architecture, testing, and explicit non-goals (`spec.md`).

## When applied
Created during the Define phase prior to task decomposition and coding whenever initiating a project, feature, or major architectural change.

## Sub-concepts
none

## Part of
spec-driven-development

## Implementation status
clean

## Design notes
In Addy's lifecycle, the `PRD` (Product Requirements Document) represents the formal written agreement of what will and will not be built before implementation begins. It bridges informal user intent and tactical task planning, explicitly capturing boundaries, technical constraints, and acceptance criteria. Without a PRD, development proceeds from tacit assumptions, leading to scope creep, unverified edge cases, and rework.
