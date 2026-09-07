---
package: rjm
name: Pre-Merge Checklist
slug: pre-merge-checklist
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/references/autonomous-execution-guardrails.md, sha256: 07862ef3fb6178b60c4d5f54fade0b93ea55718575377bdda6ea8e20ee506f03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-Merge Checklist

## Definition — verbatim
> "## Pre-Merge Checklist" — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/autonomous-execution-guardrails.md | 20 | defined here | Section heading introducing mandatory verification steps required before merging during autonomous execution. |

## Consumes
Per-issue handoffs, session logs, orchestrator coordination, critic validation, QA verification, review comment replies, security reviews, and test suite execution.

## Produces
Verified merge readiness confirmation ensuring no validation steps were bypassed during autonomous execution.

## When applied
"Before ANY merge during autonomous execution" — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:22

## Sub-concepts
won-t-fix-protocol
addressing

## Part of
none

## Implementation status
clean

## Design notes
A mandatory review-phase checklist enforced during autonomous agent execution to prevent completion-optimization pathologies from bypassing orchestrator, critic, QA, and security validation gates.
