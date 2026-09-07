---
package: rjm
name: Inner Ring
slug: inner-ring
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

# Inner Ring

## Definition — verbatim
> "Test the Inner Ring in parallel." — .claude/skills/business-strategy/references/traction.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/traction.md | 45 | defined here | Primary testing tier containing the top 2-3 prioritized channels evaluated through cheap experiments. |

## Consumes
The highest-ranked distribution hypotheses from the Bullseye ranking process.

## Produces
Empirical customer acquisition costs, reachable volume metrics, and candidate winners.

## When applied
In Step 3 of the Bullseye method, running rapid parallel micro-experiments.

## Sub-concepts
none

## Part of
bullseye-method, bullseye-channel-selection

## Implementation status
clean

## Design notes
The Inner Ring isolates the two or three most promising channels for rapid, concurrent micro-testing. In rjm, executing small tests in parallel answers critical questions about cost and customer quality before significant capital is committed to any single channel.
