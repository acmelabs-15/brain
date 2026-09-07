---
package: rjm
name: QA Review (Recursive)
slug: qa-review-recursive
kind: gate
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# QA Review (Recursive)

## Definition — verbatim
> "- The QA agent evaluates functionality, edge cases, and test coverage" — docs/autonomous-issue-development.md:47

## Also called — verbatim
> "| 4b. QA Review | Test functionality | QA | Approval or feedback |" — docs/autonomous-issue-development.md:147

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 45 | defined here | Sub-phase 4b specifying iterative quality and test review by the QA agent until full approval. |

## Consumes
Implemented code, test suites, edge-case scenarios, and test execution output.

## Produces
QA defect reports, test gap identification, and final QA verification sign-off.

## When applied
Second review stage in Phase 4 of autonomous issue development, executed after Critic approval and before Security review.

## Sub-concepts
none

## Part of
recursive-review-cycles

## Implementation status
defects: missing-path

## Design notes
The second gate in the recursive review cycle where a dedicated QA agent verifies test coverage, exercises edge cases, and confirms functional correctness before security evaluation.
