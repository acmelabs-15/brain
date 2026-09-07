---
package: rjm
name: Guard/threshold calibration
slug: guard-threshold-calibration
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Guard/threshold calibration

## Definition — verbatim
> "| You are shipping a detector, guard, or numeric threshold | 2. Guard/threshold calibration | ship your own post-ship telemetry; no shared monitor exists (ADR-084, issue #5154) |" — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 30 | defines | Recipe selector entry specifying calibration procedure for detectors, guards, and numeric thresholds. |

## Consumes
Candidate guard rules, threshold parameters, and historical pull requests.

## Produces
Calibrated numerical thresholds and validation tables demonstrating expected firing rates.

## When applied
When developing or modifying automated code quality guards or numeric lint thresholds.

## Sub-concepts
guard-and-threshold-calibration, calibration-table

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path

## Design notes
The process of tuning detection thresholds against real repository history rather than intuition. It ensures that automated guards and lint checks are calibrated to fire at realistic rates on actual commits without causing false-positive storms or failing to trigger on genuine regressions.
