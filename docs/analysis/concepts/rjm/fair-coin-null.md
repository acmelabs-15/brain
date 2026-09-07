---
package: rjm
name: fair-coin null
slug: fair-coin-null
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# fair-coin null

## Definition — verbatim
(used, not defined)

> "whose two-tailed p values under a fair-coin null are 0.008, 0.070, 0.016," — .claude/skills/context-optimizer/references/rule-audit-instrument.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 87 | used here | Null hypothesis statistical model (binomial p = 0.5) against which directional sign counts are benchmarked to compute p-values. |

## Consumes
Non-tied sign counts across evaluation runs.

## Produces
Exact binomial probability distributions for decision threshold validation.

## When applied
Applied in registered decision rules to establish statistical significance benchmarks for prompt modifications.

## Sub-concepts
none

## Part of
- sign-test
- registered-decision-rule

## Implementation status
clean

## Design notes
The `fair-coin null` is the statistical baseline assumption in rjm's sign testing that prompt rule variations have no true directional effect, yielding positive and negative run deltas with equal probability (p = 0.5). It provides the mathematical standard for determining whether observed win counts exceed chance.
