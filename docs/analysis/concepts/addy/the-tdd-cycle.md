---
package: addy
name: The TDD Cycle
slug: the-tdd-cycle
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# The TDD Cycle

## Definition — verbatim
> "## The TDD Cycle" — skills/test-driven-development/SKILL.md:38
> "RED GREEN REFACTOR" — skills/test-driven-development/SKILL.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 38 | defined here | Defines the core Red-Green-Refactor development cycle for test-driven development. |

## Consumes
Logic specifications, bug reproduction targets, or feature requirements.

## Produces
Working implementation verified by automated tests and cleaned up via refactoring.

## When applied
When implementing any logic, fixing any bug, or modifying existing behavior.

## Sub-concepts
refactor

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
The core cyclical engine of test-driven development requiring that a failing test be written first (RED), followed by the minimal code needed to pass (GREEN), followed by clean up and deduplication (REFACTOR) before moving to the next requirement.
