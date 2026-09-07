---
package: rjm
name: Phase 6 evidence audit
slug: phase-6-evidence-audit
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md, sha256: d14447496609bc6cf62fac8aa2de0adbde4193a369ed82b27ff463c6f9fbd098}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 6 evidence audit

## Definition — verbatim
(used, not defined)

> "The Phase 6 evidence audit then asked the calibration question retroactively: would the as-shipped guards have prevented the PR's own 35 fix commits? Answer: 0 of 35 (`.agents/retrospective/2026-05-05-pr-1887-iteration-paradox.md:199` and the total at line 230)." — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md | 17 | references | Worked example analyzing retroactive calibration of PR #1887 guards against the PR's 35 fix commits. |

## Consumes
Pull request iteration history, review thread counts, fix commits, and proposed guard implementations.

## Produces
Empirical audit verdict evaluating whether shipped guard rules would have prevented their own development churn.

## When applied
Conducted during Phase 6 post-ship evidence evaluations and retrospective milestone audits.

## Sub-concepts
guard-and-threshold-calibration

## Part of
empirical-probe-toolkit

## Implementation status
clean

## Design notes
An audit procedure conducted during Phase 6 verification that evaluates whether guards and automated checks would have successfully detected or prevented the defects and iterations encountered during their own pull request development.
