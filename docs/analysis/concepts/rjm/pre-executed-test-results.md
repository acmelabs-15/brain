---
package: rjm
name: Pre-executed Test Results
slug: pre-executed-test-results
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-executed Test Results

## Definition — verbatim
> "Test execution results (Pester and pytest) are provided as additional context when available." — .claude/skills/review/references/qa.md:82

## Also called — verbatim
> "## Pre-executed Test Results" — .claude/skills/review/references/qa.md:80

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/qa.md | 80 | defined here | Section governing the evaluation of test suite execution outputs (Pester and pytest) as empirical evidence in QA review verdicts. |

## Consumes
Workflow test runner outputs, pass/fail counts, failure traces, and execution summaries produced prior to review dispatch.

## Produces
Empirical evidence citations incorporated into the QA review verdict and test coverage assessment.

## When applied
Applied during QA review when test suites were run in the CI workflow prior to dispatching review agents.

## Sub-concepts
none

## Part of
qa-review

## Implementation status
clean

## Design notes
An empirical evidence input mechanism in rjm that feeds pre-executed test suite outcomes directly into LLM review context to ground QA verdicts in observed execution rather than static inspection alone.
