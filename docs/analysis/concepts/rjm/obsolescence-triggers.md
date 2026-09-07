---
package: rjm
name: obsolescence_triggers
slug: obsolescence-triggers
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# obsolescence_triggers

## Definition — verbatim
> "    <obsolescence_triggers>" — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:288

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/assets/templates/skill-spec-template.xml | 288 | defined here | XML specification element capturing potential external events that would make the skill obsolete and defensive measures against them. |
| .claude/skills/skillforge/references/specification-template.md | 213 | defined here | Specification template section documenting obsolescence triggers, likelihood ratings, descriptions, and defensive measures. |

## Consumes
Ecosystem trend analysis, platform roadmap assumptions, and dependency stability evaluations.

## Produces
List of identified obsolescence conditions paired with likelihood estimates and defensive design measures.

## When applied
Authored during Phase 2 (Specification) as part of the evolution analysis section.

## Sub-concepts
none

## Part of
temporal-projection

## Implementation status
clean

## Design notes
`obsolescence_triggers` identify explicit technological, platform, or capability developments that would render a skill redundant, ensuring developers intentionally design defensive abstractions or clear decommissioning triggers into the skill.
