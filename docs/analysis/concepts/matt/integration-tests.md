---
package: matt
name: integration tests
slug: integration-tests
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# integration tests

## Definition — verbatim
(used, not defined)
> "description: Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions "red-green-refactor", or wants integration tests." — skills/engineering/tdd/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/SKILL.md | 3 | used here | Specified in skill description as a primary trigger condition for invoking the tdd skill. |

## Consumes
Public interface definitions, test fixtures, and system boundary adapters.

## Produces
Automated test suites that verify real collaborator interactions through public APIs.

## When applied
When building features or fixing bugs test-first to verify end-to-end component behavior without mocking internal parts.

## Sub-concepts
none

## Part of
tdd

## Implementation status
defects: internal-contradiction (skills/engineering/tdd/SKILL.md:38 description triggers on "red-green-refactor" while line 38 excludes refactoring from the loop)

## Design notes
In Matt's TDD approach, integration tests are the primary testing format rather than fine-grained isolated unit tests with internal mocks. They exercise components through public interfaces across real internal collaborators, ensuring that tests validate user-visible capabilities and remain durable across internal refactorings.
