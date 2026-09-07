---
package: rjm
name: spec front-gate
slug: spec-front-gate
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# spec front-gate

## Definition — verbatim
> "run the spec front-gate (`/spec`) first, then return here." — .claude/skills/research-and-incorporate/SKILL.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 22 | used here | Referenced as the prerequisite command `/spec` that must be run when a consumer exists but lacks a formal spec. |

## Consumes
Feature ideas or project requirements lacking formal specifications.

## Produces
Approved specification document gating downstream lifecycle activities.

## When applied
Triggered before research when a consumer exists but has not formalized a specification.

## Sub-concepts
none

## Part of
front-gate-first, spec

## Implementation status
defects: doc-drift, missing-path

## Design notes
The specification gateway command (`/spec`) that establishes formal problem definitions, requirements, and acceptance criteria before engineering or research activities are permitted to proceed.
