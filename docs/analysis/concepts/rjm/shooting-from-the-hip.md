---
package: rjm
name: Shooting from the hip
slug: shooting-from-the-hip
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Shooting from the hip

## Definition — verbatim
> "| Shooting from the hip | Skip Orient | Force explicit analysis step |" — .claude/skills/analyze/references/strategy-ooda-loop.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/strategy-ooda-loop.md | 58 | defined here | Strategic anti-pattern of skipping the Orient phase and jumping directly from raw observation to action. |

## Consumes
Unanalyzed observations, hasty problem statements, lack of orientation.

## Produces
Ill-conceived solutions, regressions, wasted effort, fixes addressing superficial symptoms.

## When applied
Identified when an agent or engineer attempts to implement changes without conducting contextual analysis or synthesis.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Shooting from the hip is the complementary anti-pattern to analysis paralysis in rjm's strategic frameworks. It describes jumping directly from initial observation to immediate action without pausing to orient, synthesize context, or evaluate trade-offs. rjm prevents this anti-pattern by enforcing explicit, phased investigation workflows and mandatory planning steps before code edits.
