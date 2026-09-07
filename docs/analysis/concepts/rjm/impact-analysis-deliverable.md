---
package: rjm
name: Impact Analysis Deliverable
slug: impact-analysis-deliverable
kind: artifact
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Impact Analysis Deliverable

## Definition — verbatim
(used, not defined)

> "Save to: `.agents/planning/impact-analysis-security-[feature].md`" — .claude/agents/security.md:562

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 560 | defined here | Planning artifact specification documenting security impacts, attack surface changes, and mitigations. |
| templates/agents/devops.shared.md | 70 | defined here | Planning artifact specification documenting CI/CD, build, and deployment impacts under `.agents/planning/`. |
| templates/agents/qa.shared.md | 250 | defined here | Planning artifact specification documenting testing impacts, risk levels, and coverage changes under `.agents/planning/`. |
| templates/agents/security.shared.md | 528 | defined here | Shared template specification for the security impact analysis deliverable under `.agents/planning/`. |

## Consumes
Proposed feature design and milestone requirements.

## Produces
A markdown deliverable in `.agents/planning/impact-analysis-[role]-[feature].md` detailing direct/indirect impacts, affected areas, and recommendations.

## When applied
Generated during milestone planning by specialized agents (security, devops, qa) before implementation begins.

## Sub-concepts
none

## Part of
milestone-planning

## Implementation status
defects: missing-path

## Design notes
A standardized planning document produced by specialized review agents (security, DevOps, QA) and saved under `.agents/planning/` to systematically communicate domain-specific risks and implementation prerequisites to the orchestrator and milestone planner.
