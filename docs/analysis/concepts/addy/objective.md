---
package: addy
name: Objective
slug: objective
kind: template
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

# Objective

## Definition — verbatim
> "What are we building and why? Who is the user? What does success look like?" — skills/spec-driven-development/SKILL.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 86 | defined here | First core area of a specification document defining user, goal, and success vision. |

## Consumes
User requirements, problem statements, and business motivation.

## Produces
The introductory section of a specification establishing project goals and target users.

## When applied
When writing the initial section of a specification in Phase 1: Specify.

## Sub-concepts
none

## Part of
phase-1-specify

## Implementation status
defects: doc-drift

## Design notes
The introductory section of a specification defining the purpose, user persona, and business value of a feature, ensuring agents and stakeholders align on what is being built and why before technical details are addressed.
