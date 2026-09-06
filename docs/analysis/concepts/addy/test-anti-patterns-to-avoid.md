---
package: addy
name: Test Anti-Patterns to Avoid
slug: test-anti-patterns-to-avoid
kind: checklist
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

# Test Anti-Patterns to Avoid

## Definition — verbatim
(used, not defined)

> "## Test Anti-Patterns to Avoid" — skills/test-driven-development/SKILL.md:301

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 301 | defined here | Reference table cataloging six common testing anti-patterns, their negative consequences, and corrective actions. |

## Consumes
Test code, test suite execution patterns, mock usage, snapshot files.

## Produces
Concrete fixes replacing fragile test practices with robust state-based, isolated, deterministic tests.

## When applied
Reviewed during test authoring, code review, and refactoring to eliminate testing antipatterns.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A diagnostic reference checklist enumerating six critical testing anti-patterns (testing implementation details, flaky tests, testing framework code, snapshot abuse, lack of test isolation, and mocking everything) alongside concrete remedies.
