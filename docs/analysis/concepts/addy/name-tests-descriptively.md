---
package: addy
name: Name Tests Descriptively
slug: name-tests-descriptively
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

# Name Tests Descriptively

## Definition — verbatim
(used, not defined)

> "### Name Tests Descriptively" — skills/test-driven-development/SKILL.md:282

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 282 | defined here | Convention requiring test descriptions to read like detailed behavioral specifications rather than vague labels. |

## Consumes
Intended system behaviors, error conditions, edge cases.

## Produces
Specification-like test titles that describe exact triggers, behaviors, and expected outcomes.

## When applied
When declaring test suites, blocks, and individual test cases.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A test authoring convention requiring test names to form readable behavioral specifications (e.g. describing preconditions, actions, and expected results) rather than vague identifiers like 'works' or 'handles errors'.
