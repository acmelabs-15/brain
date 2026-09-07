---
package: rjm
name: Timeouts on Outbound Calls
slug: timeouts-on-outbound-calls
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Timeouts on Outbound Calls

## Definition — verbatim
> "### 1. Timeouts on Outbound Calls" — .claude/skills/review/references/reliability.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 58 | defined here | Focus area checklist verifying process-boundary timeouts and deadline budgets. |

## Consumes
Pull request diffs, network requests, subprocess executions, and external API call sites.

## Produces
Review findings identifying missing, unbounded, or inconsistent connect and read timeouts.

## When applied
Applied during reliability reviews whenever changes touch outbound network or process boundaries.

## Sub-concepts
none

## Part of
reliability

## Implementation status
clean

## Design notes
`Timeouts on Outbound Calls` is an inspection checklist within rjm's reliability review axis ensuring that all external operations set independent connect and read timeouts aligned with overall operation deadlines.
