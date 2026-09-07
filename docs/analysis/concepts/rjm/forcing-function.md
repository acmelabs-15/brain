---
package: rjm
name: forcing function
slug: forcing-function
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/decision-pre-committed-metrics.md, sha256: 63254480cf2921d4c45857646e7af6cfe4379fb03cef1afe4cd2c8378013b495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# forcing function

## Definition — verbatim
(used, not defined)

> "- Build the consequence into the calendar. Without a forcing function, the" — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/decision-pre-committed-metrics.md | 50 | used here | Used to describe calendar-scheduled checkpoints that prevent evaluation conversations from being deferred. |

## Consumes
Calendar deadlines, review schedules, and pre-committed metric thresholds.

## Produces
Mandatory review triggers that cannot be bypassed or deferred by team inertia.

## When applied
Established at initiative inception to enforce evaluation on a specific calendar date.

## Sub-concepts
none

## Part of
pre-committed-metrics-force-honest-evaluation

## Implementation status
defects: doc-drift

## Design notes
A forcing function is a procedural or structural mechanism that compels an action or decision to occur at a scheduled time. In decision-critic, calendar-bound review dates serve as forcing functions to prevent teams from indefinitely avoiding difficult evaluation conversations.
