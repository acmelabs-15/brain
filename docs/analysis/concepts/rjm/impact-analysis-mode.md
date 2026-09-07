---
package: rjm
name: Impact Analysis Mode
slug: impact-analysis-mode
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Impact Analysis Mode

## Definition — verbatim
> "When milestone-planner requests impact analysis (during planning phase):" — .claude/agents/architect.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 86 | defined here | Architectural impact analysis procedure assessing feature risks, ADRs, and long-term implications. |
| .claude/agents/devops.md | 82 | defined here | DevOps impact analysis procedure evaluating CI/CD, pipeline changes, and deployment complexity. |
| .claude/agents/implementer.md | 354 | defined here | Implementer impact analysis procedure evaluating code touchpoints, refactoring scope, and technical risk. |
| .claude/agents/qa.md | 246 | defined here | QA impact analysis procedure evaluating test coverage requirements, regression risks, and test complexity. |
| templates/agents/architect.shared.md | 101 | defined here | Shared architect template defining architectural impact assessment deliverables. |
| templates/agents/devops.shared.md | 56 | defined here | Shared devops template defining pipeline and infrastructure impact deliverables. |
| templates/agents/implementer.shared.md | 343 | defined here | Shared implementer template defining code impact and feasibility analysis deliverables. |
| templates/agents/qa.shared.md | 236 | defined here | Shared QA template defining testing impact and test plan deliverables. |

## Consumes
Feature requests, epic definitions, or milestone planning inquiries from the milestone planner.

## Produces
Domain-specific impact analysis documents (`.agents/planning/impact-analysis-[domain]-[feature].md`) assessing risks, complexity, and effort.

## When applied
Triggered during the planning phase whenever milestone-planner solicits specialist reviews before finalizing plans.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path

## Design notes
Impact Analysis Mode is a cross-agent collaborative planning mechanism in rjm. During the planning phase, milestone-planner triggers specialist subagents (architect, devops, implementer, qa) into this mode to produce structured assessments of technical risk, pipeline impact, test requirements, and effort before any implementation task is scheduled.
