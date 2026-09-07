---
package: rjm
name: Coverage Thresholds
slug: coverage-thresholds
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Coverage Thresholds

## Definition — verbatim
> "### Coverage Thresholds" — .claude/agents/devops.md:249

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 249 | defined here | Heading defining minimum and target code coverage percentages across line, branch, and method metrics. |

## Consumes
Test execution coverage reports from CI test runs.

## Produces
Automated pass/fail coverage gates (e.g. 70% min line, 60% min branch, 80% min method coverage).

## When applied
Enforced during the test execution stage of the CI pipeline.

## Sub-concepts
none

## Part of
pipeline-metrics

## Implementation status
defects: missing-path

## Design notes
Quantitative test coverage gates in rjm's DevOps pipeline. By enforcing minimum thresholds (70% line, 60% branch, 80% method) and target levels (80% line, 75% branch, 90% method), it prevents untested regressions from merging into protected branches.
