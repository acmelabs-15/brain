---
package: rjm
name: CI Validation Report Template
slug: ci-validation-report-template
kind: template
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CI Validation Report Template

## Definition — verbatim
> "Save validation results to: `.agents/devops/ci-validation-[date].md`" — .claude/agents/devops.md:425

## Also called — verbatim
> "Local CI Validation Report" — .claude/agents/devops.md:428

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 423 | defined here | Markdown template for recording local CI simulation results, including environment checks, build results, test execution, security scans, and recommendations. |

## Consumes
Test results, build logs, secret scan outputs, and environmental check outcomes.

## Produces
.agents/devops/ci-validation-[date].md reporting local validation status and readiness.

## When applied
Applied upon completing local CI simulation runs prior to opening a PR.

## Sub-concepts
none

## Part of
devops

## Implementation status
defects: missing-path

## Design notes
CI Validation Report Template standardizes evidence capture for local continuous integration checks. It documents test passes/fails, build output cleanliness, and security scan verdicts in a structured format so maintainers and reviewers can verify that CI checks were simulated locally before submission.
