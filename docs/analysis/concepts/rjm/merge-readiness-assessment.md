---
package: rjm
name: Merge Readiness Assessment
slug: merge-readiness-assessment
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Merge Readiness Assessment

## Definition — verbatim
(used, not defined)

> "## Merge Readiness Assessment" — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:301

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 301 | defined here | Defined as a 10-criterion scorecard table assessing whether all blocking security, error-handling, and test verification conditions have been met. |

## Consumes
Multi-agent review verdicts, test execution results, security audit reports, and remediation task statuses.

## Produces
A binary readiness verdict (READY / NOT READY) accompanied by a prioritized remediation task list.

## When applied
Conducted at the conclusion of multi-agent review to determine whether a pull request is authorized to merge.

## Sub-concepts
none

## Part of
multi-agent-review

## Implementation status
defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94)

## Design notes
`Merge Readiness Assessment` establishes an explicit, multi-dimensional pre-merge scorecard ensuring that pull requests satisfy mandatory security, testing, idempotency, and error-handling requirements before shipping.
