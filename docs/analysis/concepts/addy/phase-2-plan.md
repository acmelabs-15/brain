---
package: addy
name: "Phase 2: Plan"
slug: phase-2-plan
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

# Phase 2: Plan

## Definition — verbatim
> "### Phase 2: Plan" — skills/spec-driven-development/SKILL.md:164
> "With the validated spec, generate a technical implementation plan:" — skills/spec-driven-development/SKILL.md:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 164 | defined here | Second phase of the gated workflow generating a technical implementation plan from the validated spec. |

## Consumes
Validated specification document (`SPEC-<module>.md`).

## Produces
Technical implementation plan saved to `tasks/plan.md`.

## When applied
Following human review and approval of the specification during Phase 1.

## Sub-concepts
tasks/plan.md

## Part of
the-gated-workflow

## Implementation status
defects: doc-drift

## Design notes
The technical planning phase that analyzes components, dependencies, risks, mitigation strategies, and verification checkpoints to produce a human-reviewable implementation plan.
