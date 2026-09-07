---
package: rjm
name: Sunk cost fallacy
slug: sunk-cost-fallacy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Sunk cost fallacy

## Definition — verbatim
(used, not defined)

> "Sunk cost fallacy check. 80% done means the hardest 20% remains." — scripts/eval/eval-agents.py:379

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 379 | used here | Specified in high-level-advisor evaluation criteria for challenging software rewrite completion versus cutting losses. |

## Consumes
Project progress metrics, rewrite status reports, or architectural proposals where significant effort has already been invested.

## Produces
Decision guidance or challenge recommendations prompting teams to consider incremental migration (such as a strangler fig) rather than completing a big-bang rewrite.

## When applied
During architectural and project reviews when evaluating whether to finish an in-progress initiative or cut losses.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A cognitive anti-pattern check in rjm evaluated during high-level advisory interactions to ensure engineering teams do not persist with costly, low-value rewrites solely because substantial work has already been invested.
