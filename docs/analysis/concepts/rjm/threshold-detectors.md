---
package: rjm
name: Threshold detectors
slug: threshold-detectors
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Threshold detectors

## Definition — verbatim
> "Any threshold-based signal (rework count, thread count, file count) must be replayed against roughly the last 5 real merged PRs and shown to fire correctly before shipping." — .claude/skills/ai-agents-validation-and-qa/SKILL.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 94 | defined here | Defined as requiring threshold-based signals to be calibrated against recent historical PR data before deployment. |

## Consumes
Quantitative heuristics (rework counts, thread counts, changed file numbers) and historical PR telemetry.

## Produces
Calibrated alert thresholds validated to trigger appropriately on realistic repository workloads.

## When applied
When designing or updating automated warning thresholds and guard triggers.

## Sub-concepts
none

## Part of
ai-agents-validation-and-qa

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Automated warning systems relying on quantitative thresholds (e.g. file counts or review thread counts) must be calibrated against recent historical PR data. Without calibration, thresholds may be set higher than any historical occurrence, rendering detectors permanently inert.
