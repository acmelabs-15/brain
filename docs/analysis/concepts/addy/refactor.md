---
package: addy
name: REFACTOR
slug: refactor
kind: phase
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

# REFACTOR

## Definition — verbatim
> "RED GREEN REFACTOR" — skills/test-driven-development/SKILL.md:41
> "With tests green, improve the code without changing behavior:" — skills/test-driven-development/SKILL.md:87

## Also called — verbatim
Clean Up — skills/test-driven-development/SKILL.md:85

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 41 | defined here | Third phase of the TDD cycle where passing implementation code is cleaned up. |

## Consumes
Passing tests (GREEN) and functional implementation code.

## Produces
Cleaned up, deduplicated, and optimized code with all existing tests still passing.

## When applied
Step 3 of the TDD cycle, immediately after the minimal implementation passes the test.

## Sub-concepts
none

## Part of
the-tdd-cycle

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
The final step of the TDD loop where code quality, naming, and duplication are improved without changing external behavior, protected against regression by green tests.
