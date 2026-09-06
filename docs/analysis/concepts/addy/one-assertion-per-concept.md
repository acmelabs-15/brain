---
package: addy
name: One Assertion Per Concept
slug: one-assertion-per-concept
kind: pattern
package_phase: cross-phase
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

# One Assertion Per Concept

## Definition — verbatim
(used, not defined)

> "### One Assertion Per Concept" — skills/test-driven-development/SKILL.md:266

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 266 | defined here | Pattern recommending that each test focus on verifying a single distinct behavior rather than combining unrelated assertions into one monolithic test. |

## Consumes
Specified behaviors, acceptance criteria, edge conditions.

## Produces
Focused, single-purpose test cases where each failure isolates exactly one broken concept or requirement.

## When applied
When writing individual test cases for validation, transformations, and error handling.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A test design principle asserting that each test should verify a single logical behavior or concept rather than packing multiple assertions into a monolithic test, ensuring clear diagnostic signals when a regression occurs.
