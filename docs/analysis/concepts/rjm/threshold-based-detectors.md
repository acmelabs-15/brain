---
package: rjm
name: Threshold-based detectors
slug: threshold-based-detectors
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Threshold-based detectors

## Definition — verbatim
> "MUST ship with a calibration table replaying the last ~5 real merged PRs. A detector that cannot fire on real history is not calibrated" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 67 | defined here | Settled Battles List entry requiring empirical calibration tables for all numeric heuristic thresholds. |

## Consumes
Numeric detection heuristics, PR metrics, and historical git commits.

## Produces
Verified calibration tables proving that detection thresholds fire on real repository history.

## When applied
Required whenever authoring or updating static analysis or linting thresholds.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
`Threshold-based detectors` are lint or gate mechanisms that trigger based on quantitative metrics (e.g. file counts, commit limits). Originating from Incident 4 where an uncalibrated threshold was mathematically incapable of firing, rjm mandates that every threshold detector ship with a calibration table replaying recent merged PRs.
