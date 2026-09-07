---
package: rjm
name: Infrastructure Handoff
slug: infrastructure-handoff
kind: artifact
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

# Infrastructure Handoff

## Definition — verbatim
> "### Infrastructure Handoff (to milestone-planner)" — .claude/agents/qa.md:833

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 833 | defines | Handoff format for environment or infrastructure failures routed to the milestone-planner. |
| templates/agents/qa.shared.md | 763 | defines | Shared template definition for routing environment and infrastructure defects to milestone-planner. |

## Consumes
Diagnostic logs revealing environment misconfigurations, missing dependencies, or test harness failures.

## Produces
Infrastructure defect report routed to milestone-planner rather than code implementer.

## When applied
Triggered when test execution failures stem from environment or tooling issues rather than code defects.

## Sub-concepts
none

## Part of
qa

## Implementation status
clean

## Design notes
A specialized handoff path routing environment, tooling, or CI configuration failures to the milestone-planner rather than blaming the code implementer. It distinguishes environment drift and infrastructure degradation from functional code bugs, avoiding wasted implementation churn.
