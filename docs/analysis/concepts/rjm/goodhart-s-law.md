---
package: rjm
name: Goodhart's Law
slug: goodhart-s-law
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Goodhart's Law

## Definition — verbatim
> "Goodhart's Law: metric becomes the target, not the goal" — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 45 | used here | Cited as a red flag when decisions aggressively optimize a single proxy metric. |

## Consumes
Metrics-driven proposals, optimization goals, and performance targets.

## Produces
Identification of metric gaming, perverse incentives, and distortion of underlying engineering goals.

## When applied
During Verification and Challenge when evaluating proposals that heavily optimize a single operational metric.

## Sub-concepts
none

## Part of
strategic-thinking-systems-thinking

## Implementation status
defects: missing-path

## Design notes
The systems principle that when a measure becomes a target, it ceases to be a good measure, used in decision critique to flag decisions that over-optimize proxy metrics at the expense of genuine system quality.
