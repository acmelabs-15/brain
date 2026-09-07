---
package: rjm
name: Time Horizon Mismatch
slug: time-horizon-mismatch
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Time Horizon Mismatch

## Definition — verbatim
(used, not defined)

> "- Time Horizon Mismatch: tails compound across time; a 1-in-20-year event is more likely than not over a 20-year horizon." — .claude/skills/decision-critic/references/mental-models-fat-tails.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/mental-models-fat-tails.md | 75 | used here | Cited as a related model highlighting how tail event probabilities compound over extended operational horizons. |

## Consumes
System operational lifetimes and single-period probability estimates.

## Produces
Compounded risk assessments demonstrating increased cumulative failure likelihood over multi-year horizons.

## When applied
Consulted when evaluating long-lived infrastructure decisions or persistent operational risks.

## Sub-concepts
none

## Part of
fat-tails

## Implementation status
defects: missing-path

## Design notes
Time Horizon Mismatch describes the error of treating low single-period probabilities as negligible over extended operational lifespans. It reinforces that rare events inevitably compound into high-probability occurrences over time.
