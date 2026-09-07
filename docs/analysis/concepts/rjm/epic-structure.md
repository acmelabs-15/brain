---
package: rjm
name: Epic Structure
slug: epic-structure
kind: template
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Epic Structure

## Definition — verbatim
> "For each epic, produce:" — .claude/agents/roadmap.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 83 | defined here | Defined as the standard template specifying required fields for every roadmap epic. |
| templates/agents/roadmap.shared.md | 89 | defined here | Defined in the shared roadmap template specifying epic production schema. |

## Consumes
Strategic goals, prioritized feature initiatives, and user requirements.

## Produces
Structured epic artifacts containing problem statements, hypotheses, success metrics, kill criteria, and outcome reviews.

## When applied
Applied whenever the roadmap agent authors or updates an epic specification.

## Sub-concepts
- hypothesis
- outcome-review

## Part of
- roadmap

## Implementation status
defects: doc-drift

## Design notes
Epic Structure defines the mandatory schema for major initiatives in rjm. Requiring every epic to articulate a concrete problem statement, verifiable hypothesis, quantifiable success metrics, explicit kill criteria, and post-delivery outcome review, it prevents fuzzy, unmanaged engineering efforts and anchors initiatives in measurable outcomes.
