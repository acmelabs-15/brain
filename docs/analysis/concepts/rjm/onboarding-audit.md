---
package: rjm
name: Onboarding Audit
slug: onboarding-audit
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Onboarding Audit

## Definition — verbatim
> "Walk the quickstart or getting-started path." — .claude/skills/dx-review/SKILL.md:68

## Also called — verbatim
`Getting Started / Onboarding Audit` — .claude/skills/dx-review/SKILL.md:66

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 66 | defines | Defined as Step 1 of the audit process for testing setup flows and measuring friction. |

## Consumes
Quickstart guides, tutorial steps, setup scripts, sample repositories, and user approvals for command execution.

## Produces
Step-by-step friction assessments, execution logs, TTHW duration metrics, and the Getting Started dimension score (0-10).

## When applied
Executed as Step 1 of dx-review to evaluate the initial developer onboarding experience.

## Sub-concepts
time-to-hello-world, getting-started-audit, onboarding-friction

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
Step 1 of rjm's dx-review audit procedure that walks a newcomer through quickstart instructions. It logs every action, measures friction and time, and identifies obstacles preventing rapid time-to-value.
