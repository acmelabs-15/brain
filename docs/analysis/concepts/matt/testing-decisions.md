---
package: matt
name: Testing Decisions
slug: testing-decisions
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Testing Decisions

## Definition — verbatim
> "A list of testing decisions that were made." — skills/engineering/to-spec/SKILL.md:61

## Also called — verbatim
`testing-decisions` — external/to-spec.md:53

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/to-spec.md | 53 | used here | Recommends leaning on the testing-decisions section alongside implementation-decisions when authoring architectural refactoring specifications. |
| skills/engineering/to-spec/SKILL.md | 59 | defined here | Defines the Testing Decisions section of the spec template, recording external behavior test criteria, tested modules, and prior test art. |

## Consumes
Agreed test seams negotiated with the user prior to specification writing, plus existing testing patterns in the repository.

## Produces
A specification section articulating what makes a good test, target modules for verification, and codebase prior art.

## When applied
Applied during `/to-spec` after negotiating test seams with the user.

## Sub-concepts
none

## Part of
spec, spec-template

## Implementation status
clean

## Design notes
A dedicated section within the specification template that commits the team and downstream implementing agents to testing external behavior rather than internal implementation details, ensuring alignment before code is written.
