---
package: rjm
name: pr-validation
slug: pr-validation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/workflow-coalescing.md, sha256: 652beeb96b38bcfc8b9103ece1e6a599327303a9ee9778a60dda87ace3b3048d}
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pr-validation

## Definition — verbatim
(used, not defined)
> "<sub>Powered by [PR Validation]" — scripts/ci/build_pr_validation_report.py:118

## Also called — verbatim
"<!-- PR-VALIDATION -->" — scripts/ci/build_pr_validation_report.py:86

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 45 | used here | Monitored CI workflow tracked for execution coalescing and cancellation performance. |
| scripts/ci/build_pr_validation_report.py | 86 | used here | HTML comment identifier marker tagging the generated PR validation report comment. |
| scripts/ci/build_pr_validation_report.py | 118 | used here | Footer signature linking the PR validation summary report to the workflow. |

## Consumes
Automated CI test outputs, lint results, bot identity checks, and security scan verdicts.

## Produces
Aggregated markdown validation report posted directly to pull request discussions.

## When applied
Runs on pull request synchronization and opened events to validate changes before merge.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
pr-validation is the core pull request validation gate and reporting workflow that coordinates automated linting, testing, and compliance checks, posting a standardized diagnostic summary to GitHub PRs.
