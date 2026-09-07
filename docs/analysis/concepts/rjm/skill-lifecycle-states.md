---
package: rjm
name: Skill Lifecycle States
slug: skill-lifecycle-states
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Lifecycle States

## Definition — verbatim
> "The system MUST support the following skill lifecycle states:" — .agents/archive/planning/PRD-skills-index-registry.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 143 | defined here | Specified as functional requirement FR-6 defining the Draft, Active, and Deprecated states and transitions. |

## Consumes
Skill creation events, validation results (atomicity score, validation count), and deprecation triggers.

## Produces
Formal state classifications governing whether a skill may be recommended to or executed by agents.

## When applied
Applied during skill authoring, promotion to active usage, and retirement.

## Sub-concepts
draft, active, deprecated

## Part of
skills-index-registry

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The three-state state machine in rjm (`Draft → Active → Deprecated`) governing the validity and operational status of skills. It ensures skills cannot be recommended as active patterns until they satisfy validation criteria including atomicity scores and evidence counts.
