---
package: rjm
name: Respond
slug: respond
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

# Respond

## Definition — verbatim
> "Where did agents pivot, retry, escalate, or block?" — .claude/skills/retrospective/references/frameworks.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 21 | defined here | Second step of the 4-Step Debrief capturing agent reactions such as pivots, retries, escalations, and blocks. |

## Consumes
Observed execution facts and event anomalies.

## Produces
Categorized reaction log highlighting workflow interruptions and behavioral friction points.

## When applied
Applied during Step 2 of the 4-Step Debrief in Phase 0 data gathering.

## Sub-concepts
none

## Part of
4-step-debrief

## Implementation status
clean

## Design notes
Respond translates the subjective human debrief step ("what surprised or challenged you?") into observable agent behavior. In agent retrospectives, emotional reactions are replaced with behavioral pivot points: tool retries, plan redirections, escalations, and blocking conditions.
