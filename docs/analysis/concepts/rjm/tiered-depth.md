---
package: rjm
name: Tiered depth
slug: tiered-depth
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Tiered depth

## Definition — verbatim
> "8. Tiered depth to prevent over-engineering" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 18 | defined here | Explicit requirement in buy-vs-build analysis establishing proportional analytical depth (quick, standard, deep). |

## Consumes
Decision scope, financial magnitude, business criticality, and reversibility.

## Produces
Selection of analysis tier: Quick (under 1 hour), Standard (1-2 days), or Deep (1-2 weeks).

## When applied
Applied at Step 0 of buy-vs-build analysis to match evaluation effort to decision stakes and reversibility.

## Sub-concepts
quick-tier, standard-tier, deep-tier

## Part of
buy-vs-build-framework

## Implementation status
clean

## Design notes
An efficiency pattern in rjm's analytical frameworks that prevents analysis paralysis. By tiering evaluation rigor into Quick, Standard, and Deep levels based on cost, impact, and reversibility, it ensures low-stakes decisions are resolved rapidly while high-stakes, irreversible choices receive exhaustive rigor.
