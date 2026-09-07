---
package: rjm
name: Closing Activities
slug: closing-activities
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Closing Activities

## Definition — verbatim
> "Evaluate the retrospective itself. Continuous improvement." — .claude/skills/retrospective/references/frameworks.md:348

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 346 | defined here | Suite of concluding activities evaluating the quality, effectiveness, and return of the retrospective itself. |

## Consumes
The outputs and time spent on preceding retrospective phases.

## Produces
Process evaluation metrics, delta triage items, ROTI assessment, and meta-learning hypotheses.

## When applied
Applied during Phase 5 (Persist and Close) at the conclusion of every retrospective.

## Sub-concepts
roti-assessment

## Part of
retrospective

## Implementation status
clean

## Design notes
Closing Activities applies the principle of continuous improvement recursively to the retrospective process itself. By assessing what worked, triaging actionable change requests, and scoring return on invested time, it ensures that retrospective overhead remains bounded and effective.
