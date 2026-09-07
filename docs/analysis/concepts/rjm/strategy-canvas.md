---
package: rjm
name: strategy canvas
slug: strategy-canvas
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/blue-ocean-strategy.md, sha256: 9f5a1527f097649ba4c0e23d32a8df724e8df7a4e5acc0cc7d406de94a1d3740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# strategy canvas

## Definition — verbatim
> "List the factors the industry competes on (the standard buying criteria) and plot how each rival scores. This is the strategy canvas." — .claude/skills/business-strategy/references/blue-ocean-strategy.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/blue-ocean-strategy.md | 22 | defined here | Diagnostic visual tool mapping industry competitive factors and competitor scores to evaluate market convergence. |

## Consumes
Standard industry buying criteria and rival performance scores across all competitive factors.

## Produces
A visual diagnostic plot of industry value curves revealing competitive crowding or divergent opportunities.

## When applied
Step 1 of the Blue Ocean core framework when mapping the current state of play across industry rivals.

## Sub-concepts
value-curve

## Part of
blue-ocean-strategy

## Implementation status
clean

## Design notes
A diagnostic and benchmarking visual artifact in rjm's strategic toolkit. By plotting what an industry competes on against the performance levels of competitors, it captures the current state of play on a single chart, exposing strategic convergence in red oceans and serving as the baseline for divergence.
