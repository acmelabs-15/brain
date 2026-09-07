---
package: rjm
name: Active
slug: active
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Active

## Definition — verbatim
> "Skill validated and in use" — .agents/archive/planning/PRD-skills-index-registry.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 148 | defined here | Defined as the validated and operational state for skills in the registry. |
| docs/agent-governance.md | 64 | defined here | Defined as the operational lifecycle state for multi-agent personas following approval and development. |

## Consumes
Validated skill files passing quality gates, or approved agent definitions passing steering committee review.

## Produces
Operational skills and agents actively discoverable, recommended, and invoked across execution workflows.

## When applied
Applied when an entity (skill or agent persona) has satisfied all entry, validation, and governance gates.

## Sub-concepts
none

## Part of
skill-lifecycle-states, agent-lifecycle

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The production lifecycle phase in rjm for fully verified skills and approved agent personas. Active entities are eligible for automated discovery, recommendation by advisors, and execution across pipeline phases.
