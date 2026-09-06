---
package: addy
name: "Phase 1: Specify"
slug: phase-1-specify
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

# Phase 1: Specify

## Definition — verbatim
> "### Phase 1: Specify" — skills/spec-driven-development/SKILL.md:67
> "Start with a high-level vision. Ask the human clarifying questions until requirements are concrete." — skills/spec-driven-development/SKILL.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 67 | defined here | First core phase of the gated workflow, turning ambiguous vision into concrete specifications. |

## Consumes
High-level feature vision, user stories, surfaced assumptions, and human clarification.

## Produces
A validated specification document covering six core areas and reframed success criteria.

## When applied
At the start of any new feature or module implementation before technical planning.

## Sub-concepts
objective, project-structure, code-style, testing-strategy, success-criteria

## Part of
the-gated-workflow

## Implementation status
defects: doc-drift

## Design notes
The specification authoring phase where agents surface implicit assumptions, resolve ambiguities through clarifying questions, and document requirements across six standardized areas before planning.
