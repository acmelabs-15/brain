---
package: rjm
name: Must-Have
slug: must-have
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

# Must-Have

## Definition — verbatim
> "Angry if absent, neutral if present | Non-negotiable baseline" — .claude/agents/roadmap.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 47 | defined here | Defined in the KANO model table as a non-negotiable baseline feature category. |

## Consumes
Core product assumptions, user basic expectations, and baseline operational requirements.

## Produces
Non-negotiable baseline requirements that must be present in every release.

## When applied
Applied during feature classification to identify mandatory prerequisites whose absence creates user dissatisfaction.

## Sub-concepts
none

## Part of
- kano-model

## Implementation status
clean

## Design notes
In rjm's KANO taxonomy, Must-Have represents table-stakes functionality where presence creates neutrality but absence produces severe customer dissatisfaction. Classifying a feature as Must-Have marks it as non-negotiable baseline scope that cannot be deferred or traded off against optional delighters.
