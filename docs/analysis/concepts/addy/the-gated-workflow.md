---
package: addy
name: The Gated Workflow
slug: the-gated-workflow
kind: pattern
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# The Gated Workflow

## Definition — verbatim
> "## The Gated Workflow" — skills/spec-driven-development/SKILL.md:22
> "Spec-driven development has four phases, preceded by a scope check (Phase 0) that activates only when one request bundles several independently testable capabilities. Do not advance to the next phase until the current one is validated." — skills/spec-driven-development/SKILL.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 22 | defined here | Defines the phased, human-reviewed lifecycle workflow for spec-driven development. |

## Consumes
Initial feature request, bug report, or architectural change description.

## Produces
Sequence of validated deliverables: capability map, module specification, plan, task list, and code.

## When applied
When starting a new project, feature, or significant change where no specification exists yet.

## Sub-concepts
phase-0-scope-check, phase-1-specify, phase-2-plan, phase-3-tasks, phase-4-implement

## Part of
spec-driven-development

## Implementation status
defects: doc-drift

## Design notes
A sequential, human-gated development pipeline (Scope Check → Specify → Plan → Tasks → Implement) enforcing validation checkpoints between phases so that development never proceeds on unverified requirements.
