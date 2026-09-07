---
package: rjm
name: Guard and Threshold Calibration
slug: guard-and-threshold-calibration
kind: technique
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

# Guard and Threshold Calibration

## Definition — verbatim
(used, not defined)

> "## Recipe 2: Guard and Threshold Calibration" — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md | 13 | defines | Section heading introducing Recipe 2 worked examples including the PR #1989 rework-warning detector and PR #1887 Phase-6 audit. |

## Consumes
Candidate guard rules, numerical thresholds, and git history from recent repository pull requests.

## Produces
Empirically tuned guard thresholds and calibration tables demonstrating historical firing rates.

## When applied
calibrate this guard or prior to shipping any automated detector, guard, or numeric threshold.

## Sub-concepts
calibration-table, last-5-real-prs

## Part of
empirical-probe-toolkit

## Implementation status
clean

## Design notes
Recipe 2 of the empirical probe toolkit. It governs the empirical tuning of automated guards and thresholds by replaying candidate detectors against the repository's last five merged pull requests to prove they can fire on real historical code rather than purely synthetic fixtures.
