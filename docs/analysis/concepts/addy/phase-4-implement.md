---
package: addy
name: "Phase 4: Implement"
slug: phase-4-implement
kind: phase
package_phase: addy:Build
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

# Phase 4: Implement

## Definition — verbatim
> "### Phase 4: Implement" — skills/spec-driven-development/SKILL.md:200
> "Execute tasks one at a time following `skills/incremental-implementation/SKILL.md` (`incremental-implementation`) and `skills/test-driven-development/SKILL.md` (`test-driven-development`)." — skills/spec-driven-development/SKILL.md:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 200 | defined here | Final phase of the gated workflow executing tasks incrementally under test coverage. |

## Consumes
Ordered task checklist (`tasks/todo.md`), relevant spec sections, and tests.

## Produces
Implemented, working, and verified source code accompanied by passing test suites.

## When applied
Following human review and approval of the discrete task list during Phase 3.

## Sub-concepts
none

## Part of
the-gated-workflow

## Implementation status
defects: doc-drift

## Design notes
The execution phase where agents implement tasks one by one using incremental implementation and test-driven development, pulling only relevant spec context into the active window.
