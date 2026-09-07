---
package: rjm
name: Failure Handoff
slug: failure-handoff
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

# Failure Handoff

## Definition — verbatim
> "### Failure Handoff (to implementer)" — .claude/agents/qa.md:822

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 822 | defines | Handoff format delivered when quality gates fail, detailing failing tests and required remediation actions. |
| templates/agents/qa.shared.md | 752 | defines | Shared template definition for the BLOCKED failure handoff structure returned to the implementer. |

## Consumes
Pre-PR Validation Report with BLOCKED verdict, failing test logs, and identified defect locations.

## Produces
Actionable remediation instructions routing specific failure root causes back to the implementer.

## When applied
Dispatched when one or more quality gate steps fail.

## Sub-concepts
none

## Part of
qa

## Implementation status
clean

## Design notes
The structured handoff artifact produced when quality gate validation fails, routing actionable feedback back to the implementer. By isolating specific test failures, line references, and remediation expectations, it allows the implementer to fix defects without re-investigating the entire codebase.
