---
package: rjm
name: action quota
slug: action-quota
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/100m-leads.md, sha256: 6aa8d4a0fca004120b400df8d0dd485b2f7690526e5de73e18f88309521d4fcf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# action quota

## Definition — verbatim
> "Set a daily or weekly action quota and hit it." — .claude/skills/business-strategy/references/100m-leads.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/100m-leads.md | 28 | defined here | Prescribed operational execution discipline mandating consistent daily or weekly activity volumes before channel evaluation. |

## Consumes
Chosen Core Four acquisition channel and defined outreach or publishing procedures.

## Produces
Consistent operational volume required to generate reliable performance data and pipeline momentum.

## When applied
Applied during the execution phase of any marketing or acquisition channel to prevent under-activity from skewing channel performance assessments.

## Sub-concepts
none

## Part of
100m-leads

## Implementation status
clean

## Design notes
An execution gate and discipline in rjm's business strategy library. An action quota enforces rigorous daily or weekly activity benchmarks, preventing founders from mistakenly concluding that an acquisition channel has failed when the true failure mode is simply insufficient operational volume.
