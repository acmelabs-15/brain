---
package: rjm
name: Analyze Quality & Testing Impact
slug: analyze-quality-testing-impact
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Analyze Quality & Testing Impact

## Definition — verbatim
(used, not defined)

> "### Analyze Quality & Testing Impact" — templates/agents/qa.shared.md:240

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/qa.shared.md | 240 | defined here | Heading for the five-item checklist guiding QA planning impact analysis. |

## Consumes
Milestone-planner request for feature impact analysis during the planning phase.

## Produces
Impact analysis deliverable saved to `.agents/planning/impact-analysis-qa-[feature].md`.

## When applied
Invoked when milestone-planner requests quality impact analysis during planning.

## Sub-concepts
none

## Part of
qa

## Implementation status
defects: missing-path

## Design notes
A structured five-item planning checklist used by the QA agent to identify test types, coverage targets, difficult scenarios, quality risks, and effort estimates before implementation begins.
