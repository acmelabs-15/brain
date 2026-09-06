---
package: addy
name: "Phase 3: Tasks"
slug: phase-3-tasks
kind: phase
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

# Phase 3: Tasks

## Definition — verbatim
> "### Phase 3: Tasks" — skills/spec-driven-development/SKILL.md:180
> "Break the plan into discrete, implementable tasks:" — skills/spec-driven-development/SKILL.md:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 180 | defined here | Third phase of the gated workflow breaking the implementation plan into discrete tasks. |

## Consumes
Validated technical implementation plan (`tasks/plan.md`).

## Produces
Ordered task breakdown list with acceptance criteria and verification commands saved to `tasks/todo.md`.

## When applied
Following human review and approval of the implementation plan during Phase 2.

## Sub-concepts
tasks/todo.md

## Part of
the-gated-workflow

## Implementation status
defects: doc-drift

## Design notes
The task breakdown phase decomposing the implementation plan into discrete, single-session work items with explicit acceptance criteria, verification commands, and file change limits (~5 files).
