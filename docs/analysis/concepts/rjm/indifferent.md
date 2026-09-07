---
package: rjm
name: Indifferent
slug: indifferent
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Indifferent

## Definition — verbatim
> "No change either way | Cut these first" — .claude/agents/roadmap.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 50 | defined here | Defined in the KANO model table as features causing no satisfaction change that should be cut first. |

## Consumes
Low-value feature proposals, legacy requests, and ungrounded scope additions.

## Produces
Immediate descope recommendations and backlog elimination decisions.

## When applied
Applied during roadmap triage to rapidly identify and eliminate features that provide no meaningful user satisfaction.

## Sub-concepts
none

## Part of
- kano-model

## Implementation status
clean

## Design notes
Indifferent in rjm's KANO framework marks features whose presence or absence has zero impact on user sentiment. Identifying Indifferent features provides the roadmap agent with immediate cut candidates, protecting engineering bandwidth from wasteful implementation.
