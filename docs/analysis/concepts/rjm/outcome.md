---
package: rjm
name: Outcome
slug: outcome
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Outcome

## Definition — verbatim
> "## Outcome" — templates/agents/roadmap.shared.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/roadmap.shared.md | 96 | defined here | Core section in epic specifications defining measurable changes in user behavior. |

## Consumes
Feature vision, user research, and strategic objectives.

## Produces
Measurable outcome statements embedded in roadmap epics.

## When applied
Required for every epic definition produced by the roadmap agent.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
defects: doc-drift

## Design notes
A mandatory component of the epic specification that frames development in terms of measurable shifts in user behavior rather than software outputs or feature capability checklists.
