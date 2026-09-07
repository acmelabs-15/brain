---
package: rjm
name: Test Strategy Reasoning Protocol
slug: test-strategy-reasoning-protocol
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Test Strategy Reasoning Protocol

## Definition — verbatim
> "Before designing any test or scoring any coverage report, work through these three questions in order." — .claude/agents/qa.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 71 | defined here | Defines the mandatory three-question reasoning sequence required before creating tests or coverage claims. |
| templates/agents/qa.shared.md | 61 | defined here | Defines the mandatory three-question reasoning sequence required before creating tests or coverage claims. |

## Consumes
Feature specifications, acceptance criteria, implementation diffs, negative case analysis.

## Produces
Rigorous test strategy documentation answering behavior verification, negative cases, and minimal tests.

## When applied
Invoked prior to designing any test, implementing test suites, or producing QA reports.

## Sub-concepts
coverage-tool-directive

## Part of
qa

## Implementation status
defects: missing-path, doc-drift

## Design notes
The Test Strategy Reasoning Protocol mandates structured reflection before authoring tests. By requiring engineers to articulate exact input-to-observable-output relationships, enumerate negative edge cases, and determine the minimal assertion set, it eliminates vacuous or tautological tests that verify code syntax rather than system behavior.
