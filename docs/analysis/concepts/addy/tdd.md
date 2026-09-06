---
package: addy
name: TDD
slug: tdd
kind: technique
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: docs/copilot-setup.md, sha256: c8fb9c61c286ea2fb0358de0fb2e3cd4cab2b5e356dbc455386fe349fae8a469}
  - {path: docs/cursor-setup.md, sha256: 2df2336526a4463202615457f202d470300dd90727b1312df22513962ae4883f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# TDD

## Definition — verbatim
(used, not defined)
> "- Write tests before code (TDD)" — docs/copilot-setup.md:57

## Also called — verbatim
- `test-driven-development` — docs/cursor-setup.md:23

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/copilot-setup.md | 57 | used here | Specified as a foundational testing standard in .github/copilot-instructions.md: write tests before code. |
| docs/cursor-setup.md | 149 | used here | Highlighted as an explicit user prompt phrase ("follow TDD") to keep agents anchored against drift. |

## Consumes
User requirements, task specifications, and expected interface contracts.

## Produces
Failing automated tests demonstrating expected behavior, passing implementation code, and verified refactoring.

## When applied
During the Build phase whenever implementing new functionality or fixing defects.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Test-Driven Development (TDD) establishes an exacting verification discipline that requires writing a failing automated test prior to producing production implementation code. In agent workflows, TDD prevents hallucinated completions, verifies edge conditions upfront, and ensures that code modifications demonstrably fulfill acceptance criteria.
