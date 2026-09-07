---
package: rjm
name: verification-based enforcement
slug: verification-based-enforcement
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# verification-based enforcement

## Definition — verbatim
> "This protocol uses verification-based enforcement. Protocol compliance is verified through:" — .agents/analysis/002-project-constraints-consolidation.md:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 180 | used here | Articulates the three-part enforcement model of technical controls, observable checkpoints, and automated validation tooling. |
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 15 | used here | Cited as the founding design intent of SESSION-PROTOCOL.md requiring observable evidence and post-implementation QA. |
| .claude/skills/ai-agents-change-control/SKILL.md | 12 | defined here | Defines the non-negotiable repository rule that changes move only with verified evidence across git, transcript, or memory. |

## Consumes
Automated test suites, drift checkers, linter logs, and validation scripts.

## Produces
Observable evidence logs, audit trails, and verified handoffs.

## When applied
Continuously across all git operations, session transitions, and pull request reviews.

## Sub-concepts
blocking-gate, verification-based-compliance

## Part of
change-control, session-protocol

## Implementation status
clean

## Design notes
Verification-based enforcement is the operational model governing how code and configuration changes move through the rjm repository. It dictates that compliance is never assumed; it is enforced through technical controls that block progress, checkpoints that record tangible evidence, and automated tools that detect drift. Without verification-based enforcement, the repository would succumb to protocol drift, unvalidated changes, and regression loops.
