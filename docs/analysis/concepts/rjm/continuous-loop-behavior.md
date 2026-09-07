---
package: rjm
name: Continuous Loop Behavior
slug: continuous-loop-behavior
kind: pattern
package_phase: cross-phase
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

# Continuous Loop Behavior

## Definition — verbatim
> "CONTINUOUS LOOP BEHAVIOR" — docs/autonomous-issue-development.md:79
> "After completing all phases for one issue and opening its PR, immediately begin again at Phase 1 to select the next highest priority issue. Continue this loop until you have opened {{TARGET_PR_COUNT}} new pull requests." — docs/autonomous-issue-development.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 79 | defined here | Defines the operational loop requirement where the autonomous development agent cycles through phases 1 to 6 until reaching the target PR count. |

## Consumes
Target PR count parameter `{{TARGET_PR_COUNT}}` and queue of prioritized backlog issues.

## Produces
Consecutive pull requests opened across autonomous issue development cycles until the target count is satisfied.

## When applied
Applied immediately after completing Phase 6 (PR Creation and Review) for an issue in an autonomous development session.

## Sub-concepts
none

## Part of
autonomous-issue-development-prompt

## Implementation status
defects: missing-path

## Design notes
Continuous Loop Behavior establishes the outer iteration loop for unattended autonomous issue development, compelling the agent to continuously discover, implement, and ship backlog issues until reaching a configured pull request target.
