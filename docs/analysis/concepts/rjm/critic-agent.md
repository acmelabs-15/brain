---
package: rjm
name: critic agent
slug: critic-agent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
  - {path: .agents/architecture/ADR-020-feature-request-review-step.md, sha256: 935688cbbdc1cfa16ddef11f8e27c832b51e558ae3fd9cd23a5f80b260c663c6}
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
  - {path: .agents/architecture/ADR-077-flip-stale-contract-tests.md, sha256: c4b19bb8f1453828b502f31578a375d9fd70f1446abf25e4f094ca50a2efd652}
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# critic agent

## Definition — verbatim
> "You stress-test plans before implementation. Find what breaks first. Deliver a clear verdict with specific, actionable findings. Block approval when risks are not mitigated." — templates/agents/critic.shared.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 24 | used here | Cited as performing implicit quality checks prior to formalized evaluator-optimizer loops. |
| .agents/architecture/ADR-020-feature-request-review-step.md | 131 | used here | Evaluated and rejected as an option for feature evaluation to preserve pre-implementation review scope. |
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 38 | used here | Cited as the agent validating standardized EARS requirements syntax. |
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 107 | used here | Cited as flagging missing inverse contract tests and mirror drift during review. |
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 195 | used here | Cited regarding documentation and prompt updates for advisory-only gate checks. |
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 5 | used here | Designated as the reviewer for the remediation plan critique. |
| .agents/governance/ears-format.md | 320 | used here | Cited as validating requirements using the EARS validation checklist. |
| docs/autonomous-issue-development.md | 40 | used here | Invoked recursively in Phase 4 to review development work until approved. |
| templates/agents/critic.shared.md | 14 | defines | Defined as the constructive reviewer agent role stress-testing plans and artifacts. |

## Consumes
Plans, specifications, requirement definitions, code changes, and review checklists.

## Produces
Structured critiques with scores, specific actionable findings, and approval/revision verdicts.

## When applied
Prior to implementation, during plan review, requirement validation, and recursive development review cycles.

## Sub-concepts
evaluation-rubric, completeness, correctness, clarity, actionability

## Part of
quality-gates-with-evaluator-optimizer-pattern

## Implementation status
clean

## Design notes
An adversarial review agent role providing fresh-context evaluation of plans, requirements, and artifacts before implementation. Operating under reviewer asymmetry without author context, the critic identifies failure modes, checks alignment and testability, and enforces quality gates with formal verdicts.
