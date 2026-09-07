---
package: rjm
name: Inert
slug: inert
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Inert

## Definition — verbatim
(used, not defined)

> "Growing, Mature, Proficient, Inert, or Harmful from age, intercept count," — .claude/skills/ai-agents-research-frontier/SKILL.md:222

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 222 | used here | Listed as the inactive maturity tier for guards that record zero intercepts over time, flagging them for pruning. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 171 | used here | Cited among the six guard maturity tiers evaluated from telemetry events. |

## Consumes
Telemetry logs demonstrating zero intercepts across extended timeframes despite continuous codebase activity.

## Produces
Pruning recommendations or deprecation flags targeting guards that impose runtime overhead without preventing real failures.

## When applied
When reviewing guard telemetry and identifying detectors whose thresholds are uncalibrated or whose monitored error conditions no longer occur.

## Sub-concepts
none

## Part of
maturity-tier

## Implementation status
not-implemented

## Design notes
Inert represents the dead-code classification in rjm's guard governance framework. An Inert guard incurs execution overhead on every hook or commit without ever intercepting a violation (such as PR #1989 M4's uncalibrated threshold 6 in a repo whose largest PR had 4 edits). Classifying guards as Inert triggers mandatory pruning reviews, preventing the accumulation of useless friction.
