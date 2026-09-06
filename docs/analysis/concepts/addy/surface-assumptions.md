---
package: addy
name: Surface Assumptions
slug: surface-assumptions
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Surface Assumptions

## Definition — verbatim
> "Before implementing anything non-trivial, explicitly state your assumptions:" — skills/using-agent-skills/SKILL.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 49 | defined here | First core operating behavior requiring agents to explicitly disclose assumptions before executing non-trivial work. |

## Consumes
Ambiguous requirements, architectural inferences, scope interpretations.

## Produces
Explicit assumption declaration block (`ASSUMPTIONS I'M MAKING:`) presented to the user prior to implementation.

## When applied
Before implementing anything non-trivial or whenever requirements have multiple interpretations.

## Sub-concepts
none

## Part of
core-operating-behaviors, using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
An operational guardrail requiring agents to explicitly enumerate their assumptions about requirements, architecture, and scope before writing code, preventing costly rework caused by silent, unchecked misunderstandings.
