---
package: addy
name: Unit test
slug: unit-test
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

# Unit test

## Definition — verbatim
> "→ Unit test (small)" — skills/test-driven-development/SKILL.md:179
> "Pure logic, isolated, milliseconds each" — skills/test-driven-development/SKILL.md:157

## Also called — verbatim
Unit Tests — skills/test-driven-development/SKILL.md:156

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 179 | defined here | Recommends unit tests for pure logic with no side effects. |

## Consumes
Pure functions, isolated business logic, algorithms, and domain classes.

## Produces
Fast, isolated automated test cases executing in milliseconds.

## When applied
When implementing pure logic without external boundaries; forms the bulk (~80%) of the test pyramid.

## Sub-concepts
none

## Part of
the-test-pyramid, decision-guide

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
Isolated, millisecond-fast test cases verifying unit-level logic without I/O or network dependencies, forming the foundational 80% base of the test pyramid.
