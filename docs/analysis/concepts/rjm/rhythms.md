---
package: rjm
name: rhythms
slug: rhythms
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/work-operating-model/SKILL.md, sha256: 5aca273423b51a4e91ac1deeba1ccee172dbde1cee2ece7742b4ad383e298273}
  - {path: .claude/skills/work-operating-model/references/entry-contract.md, sha256: 9bfe97c38efab32e56ef728c65d413db8603c60d9e0042d1e4cd6e29871fbab7}
  - {path: .claude/skills/work-operating-model/references/layer-questions.md, sha256: 48d8a3493d9e393d38398fe9b637b3fc84d7ccd2139c88f9a51453ea97a67f48}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# rhythms

## Definition — verbatim
> "When does work happen, and on what cadence?" — .claude/skills/work-operating-model/SKILL.md:51

## Also called — verbatim
> "## Layer 1: Rhythms" — .claude/skills/work-operating-model/references/layer-questions.md:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/references/entry-contract.md | 11 | defined here | Required top-level key in work-operating-model schema capturing cadences and milestones. |
| .claude/skills/work-operating-model/references/layer-questions.md | 7 | defined here | Layer 1 interview protocol investigating recurring meetings, planning cycles, and delivery cadences. |
| .claude/skills/work-operating-model/SKILL.md | 51 | defined here | Layer 1 of the 5-layer operating model mapping temporal work patterns and cadences. |

## Consumes
Team operational narratives, calendar schedules, recurring meeting structures, and release commitments.

## Produces
Structured `rhythms` JSON section containing documented and tacit cadences and milestones.

## When applied
Applied during Layer 1 of the 5-layer operating model interview to capture recurring temporal work patterns.

## Sub-concepts
none

## Part of
5-layer-interview, work-operating-model

## Implementation status
clean

## Design notes
`rhythms` is Layer 1 of the work-operating-model interview framework, designed to surface how time and recurring cycles structure a team's execution. By categorizing cadences into formal/informal and documented/tacit, it reveals whether meetings and planning loops actively serve the team or persist merely as inertia.
