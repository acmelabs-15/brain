---
package: rjm
name: friction
slug: friction
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

# friction

## Definition — verbatim
> "What is broken or slow that the team has accepted?" — .claude/skills/work-operating-model/SKILL.md:55

## Also called — verbatim
> "## Layer 5: Friction" — .claude/skills/work-operating-model/references/layer-questions.md:77

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/references/entry-contract.md | 15 | defined here | Required top-level schema key capturing accepted blockers, categories, and impact levels. |
| .claude/skills/work-operating-model/references/layer-questions.md | 77 | defined here | Layer 5 interview protocol identifying accepted bottlenecks, legacy workarounds, and low-value tasks. |
| .claude/skills/work-operating-model/SKILL.md | 55 | defined here | Layer 5 of the 5-layer operating model identifying systemic delays and accepted operational pain points. |

## Consumes
Team accounts of dreaded processes, obsolete workarounds, unvalued time expenditures, and accepted systemic delays.

## Produces
Structured `friction.blockers` entries tagged by category (`tooling`, `process`, `communication`, `other`) and impact level (`low`, `medium`, `high`).

## When applied
Applied during Layer 5 of the 5-layer work-operating-model interview as the final elicitation step before closing.

## Sub-concepts
none

## Part of
5-layer-interview, work-operating-model

## Implementation status
clean

## Design notes
`friction` is Layer 5 of the work-operating-model framework, targeting systemic blockers and normalized inefficiencies that teams have learned to tolerate. By categorizing pain points by category and impact, it supplies downstream agents with an actionable catalog of operational bottlenecks to prioritize during technical planning and workflow refactoring.
