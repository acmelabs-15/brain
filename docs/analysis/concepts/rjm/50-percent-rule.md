---
package: rjm
name: 50 percent rule
slug: 50-percent-rule
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/traction.md, sha256: 2f8e8bcb6eb1f87e80aee296179b4ce681a9ea641bac43930d093f9c0d369f2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# 50 percent rule

## Definition — verbatim
> "Run the 50 percent rule: spend about half your effort on product and half on traction from day one" — .claude/skills/business-strategy/references/traction.md:56-57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/traction.md | 56 | defined here | Core operational heuristic mandating an equal 50/50 split between product engineering and traction. |

## Consumes
Engineering hours, founder attention, and business operational resources.

## Produces
Balanced development cadence ensuring distribution channels are built concurrently with software.

## When applied
Enforced continuously from inception through all product development phases.

## Sub-concepts
none

## Part of
bullseye-channel-selection

## Implementation status
clean

## Design notes
The 50 percent rule requires founders to dedicate equal time and effort to product development and traction acquisition from day one. In rjm, it provides an essential governance guardrail against the common software trap of over-building features while ignoring the distribution engine needed for survival.
