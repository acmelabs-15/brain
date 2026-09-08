---
package: rjm
name: The Cone of Uncertainty
slug: the-cone-of-uncertainty
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# The Cone of Uncertainty

## Definition — verbatim
(used, not defined)

> "Estimates become more accurate as you progress:" — templates/agents/implementer.shared.md:623

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/implementer.shared.md | 621 | used here | Estimation accuracy model defining precision ranges across lifecycle phases from initial concept to implementation. |

## Consumes
Project phase, scope definition, architectural specifications.

## Produces
Calibrated estimate ranges (0.25x-4x at initial concept down to 0.9x-1.1x mid-implementation).

## When applied
Applied when estimating task complexity and duration during planning and execution.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
An estimation principle acknowledging that early estimates inherently possess wide variance (0.25x to 4x) that narrows only as requirements and designs solidify, instructing agents to accept this uncertainty and build it explicitly into task planning.
