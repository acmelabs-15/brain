---
package: rjm
name: Phase 1: Test Strategy
slug: phase-1-test-strategy
kind: phase
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 1: Test Strategy

## Definition — verbatim
> "### Phase 1: Test Strategy (Before Implementation)" — templates/agents/qa.shared.md:564

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/qa.shared.md | 564 | defined here | First stage of Two-Phase Verification defining test scope, test types, and test cases prior to implementation. |

## Consumes
Feature requirements, PRD, or roadmap items prior to coding.

## Produces
Test strategy document saved to `.agents/qa/NNN-[feature]-test-strategy.md`.

## When applied
Executed before implementation begins to plan testing scope and concrete verification cases.

## Sub-concepts
none

## Part of
qa

## Implementation status
defects: missing-path

## Design notes
The pre-implementation stage in rjm's two-phase QA protocol that establishes scope, test types, happy-path cases, and edge cases before code changes occur, preventing retroactive or biased testing.
