---
package: addy
name: Testing Strategy
slug: testing-strategy
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

# Testing Strategy

## Definition — verbatim
> "What framework, where tests live, coverage expectations, which test levels for which concerns." — skills/spec-driven-development/SKILL.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 108 | defined here | Fifth core area of a specification document defining test frameworks, tiers, and coverage. |

## Consumes
Project test infrastructure, framework tooling, and quality standards.

## Produces
Test framework configurations, file locations, coverage targets, and level mappings in the spec.

## When applied
When drafting the Testing Strategy section during Phase 1: Specify.

## Sub-concepts
none

## Part of
phase-1-specify

## Implementation status
defects: doc-drift

## Design notes
A mandatory specification section outlining the test framework, file placement, coverage expectations, and test levels (unit, integration, E2E) to ensure comprehensive verification is designed before code is written.
