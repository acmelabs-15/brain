---
package: addy
name: Arrange-Act-Assert Pattern
slug: arrange-act-assert-pattern
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

# Arrange-Act-Assert Pattern

## Definition — verbatim
(used, not defined)

> "### Use the Arrange-Act-Assert Pattern" — skills/test-driven-development/SKILL.md:248

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 248 | defined here | Recommends structuring each test function into three distinct phases: Arrange (setup), Act (execution), and Assert (verification). |

## Consumes
Test prerequisites, inputs, target operation, expected outcome.

## Produces
Cleanly structured test methods with distinct setup, execution, and verification phases.

## When applied
When authoring individual automated test functions across unit, integration, and E2E suites.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A canonical test structuring pattern that organizes test bodies into three chronological, visually distinct phases: setting up test scenarios (Arrange), triggering the behavior under test (Act), and verifying the resulting state (Assert).
