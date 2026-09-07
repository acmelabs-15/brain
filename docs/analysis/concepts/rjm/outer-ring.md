---
package: rjm
name: Outer ring
slug: outer-ring
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

# Outer ring

## Definition — verbatim
> "Outer ring: long shots." — .claude/skills/business-strategy/references/traction.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/traction.md | 43 | defined here | Outermost ranking tier containing long-shot distribution channels that receive no immediate budget. |

## Consumes
Unconstrained brainstorming across all 19 potential traction channels.

## Produces
Cataloged ideas for unlikely channels maintained without wasting current testing resources.

## When applied
Populated during Step 2 of the Bullseye channel ranking process.

## Sub-concepts
none

## Part of
bullseye-method, bullseye-channel-selection

## Implementation status
clean

## Design notes
The Outer Ring contains traction channels classified as speculative or long shots. In rjm, forcing founders to generate at least one plausible idea for every channel prevents prematurely dismissing viable distribution avenues while keeping experimental spend focused on the inner ring.
