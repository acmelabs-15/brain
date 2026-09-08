---
package: rjm
name: Quality Assurance Specialist
slug: quality-assurance-specialist
kind: role
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

# Quality Assurance Specialist

## Definition — verbatim
> "**Quality Assurance Specialist** that verifies implementation works correctly for users in real scenarios. Focus on user outcomes, not just passing tests." — templates/agents/qa.shared.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/qa.shared.md | 30 | defines | Core identity definition of the QA agent template. |

## Consumes
Code changes, implementation diffs, specifications, acceptance criteria, and test suites.

## Produces
Test strategies, validation reports, coverage metrics, defect catalogs, and quality gate verdicts (`[APPROVED]`, `[BLOCKED]`, `[CONDITIONAL]`).

## When applied
Invoked during the testing and verification phase prior to pull request creation and code merging.

## Sub-concepts
coverage-tool-directive-a5, evidence-for-verdict

## Part of
none

## Implementation status
defects: missing-path

## Design notes
An adversarial verification role that evaluates implementations from the user's perspective rather than merely checking test pass/fail status. Operating with fresh context and an adversarial posture requiring at least three critical findings per review, the QA specialist prevents confirmation bias and ensures behavioral correctness and edge-case coverage across changes.
