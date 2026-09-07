---
package: rjm
name: Acceptance Criteria
slug: acceptance-criteria
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
  - {path: .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md, sha256: 5f3f48708d5dcd1bc3c82b12e518ae4e4739403000a0b9d94268cd93089299da}
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
  - {path: .claude/commands/push-pr.md, sha256: 9383f9915870dc023605e1632ffa9176982dd1f47a60894138b4ba6c16f67418}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
  - {path: scripts/external_signals/acceptance_criteria.py, sha256: f11417815ba57aa29786c3c9c962fd0a811cb2ac651b9b466992e482bb8883e8}
  - {path: scripts/quality_gate/spec_external_signal_gate.py, sha256: 510ded18b54df99fd7301f7c667dede1238db6d73fedc9cc195e61b081bd4604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Acceptance Criteria

## Definition — verbatim
> "4. Writes requirements as testable acceptance criteria" — docs/workflow-commands.md:58

## Also called — verbatim
> "## Acceptance Criteria" — .agents/architecture/ADR-091-post-merge-version-bot.md:259
> "acceptance-criteria checkboxes" — scripts/external_signals/acceptance_criteria.py:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 259 | defines | Section heading specifying measurable criteria required for ADR-091 adoption and verification. |
| .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md | 25 | used here | Documents plan structure organizing remediation tasks with explicit acceptance criteria. |
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 23 | used here | Critic evaluation assessing clarity and verification rigor of proposed plan acceptance criteria. |
| .claude/commands/push-pr.md | 42 | used here | Mandates including an Acceptance criteria section with task checkboxes in pull request bodies. |
| docs/workflow-commands.md | 58 | defines | Core lifecycle step of the /spec command formulating requirements into testable acceptance criteria. |
| scripts/external_signals/acceptance_criteria.py | 8 | used here | Command-line script parsing markdown task-list items under Acceptance Criteria headings. |
| scripts/quality_gate/spec_external_signal_gate.py | 7 | used here | Spec gate adapter extracting deterministic acceptance criteria signals for CI validation. |

## Consumes
Problem statements, user stories, architecture requirements, and defect remediation goals.

## Produces
Verifiable condition statements and markdown task-list checkboxes (`- [ ]`) establishing explicit definitions of done.

## When applied
Formulated in `/spec` phase, referenced during `/build` and `/test`, verified via mechanical extraction scripts before merge.

## Sub-concepts
acceptance-criteria-checkboxes

## Part of
spec

## Implementation status
clean

## Design notes
Core lifecycle artifact defining unambiguous, testable verification boundaries for feature delivery and defect remediation. In rjm's workflow, acceptance criteria are authored in `/spec`, structured into PR descriptions, and mechanically verified by `acceptance_criteria.py` and `spec_external_signal_gate.py` to prevent subjective or ungrounded gate approvals.
