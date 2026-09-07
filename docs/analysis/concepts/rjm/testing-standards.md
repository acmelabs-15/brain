---
package: rjm
name: Testing Standards
slug: testing-standards
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Testing Standards

## Definition — verbatim
> "### Testing Standards" — scripts/AGENTS.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/AGENTS.md | 108 | defined here | Sets requirements for pytest test suites, isolation, parametrization, and CI validation. |

## Consumes
Script implementations and verification test cases.

## Produces
Automated test suites guaranteeing isolated and repeatable script validation.

## When applied
When authoring automated tests in `tests/` for repository scripts and tools.

## Sub-concepts
none

## Part of
powershell-coding-standards

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
Establishes automated testing rules for repository scripts, mandating pytest suites in `tests/`, test isolation without global state, parameterized test cases, and CI push verification.
