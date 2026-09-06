---
package: addy
name: Decision Guide
slug: decision-guide
kind: checklist
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

# Decision Guide

## Definition — verbatim
> "### Decision Guide" — skills/test-driven-development/SKILL.md:175
> "Is it pure logic with no side effects?" — skills/test-driven-development/SKILL.md:178
> "→ Unit test (small)" — skills/test-driven-development/SKILL.md:179

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 175 | defined here | Decision rubric guiding developers to the appropriate test size and scope. |

## Consumes
Architectural properties of the component or code logic under test.

## Produces
Clear selection of test level and size (Unit/small, Integration/medium, or E2E/large).

## When applied
When deciding what level of test to write for a specific code change or capability.

## Sub-concepts
unit-test

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A decision heuristic mapping technical properties (pure logic vs boundary crossings vs critical flows) to the appropriate test tier, ensuring tests are scoped to the smallest resource level that provides sufficient verification.
