---
package: rjm
name: "Tier 3: Deep"
slug: tier-3-deep
kind: pattern
package_phase: rjm:plan
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

# Tier 3: Deep

## Definition — verbatim
> "### Tier 3: Deep (1-2 weeks)" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 171 | defined here | Heavyweight analysis tier for decisions exceeding $500K with high strategic impact and irreversible commitments. |

## Consumes
High-stakes sourcing proposals (>$500K budget), architectural research, vendor candidate tenders, and POC criteria.

## Produces
Multi-week comprehensive ADR, multi-year TCO sensitivity models, proof-of-concept evaluations, and consensus panel findings.

## When applied
Mandated for irreversible, mission-critical architectural or vendor commitments exceeding $500,000.

## Sub-concepts
none

## Part of
tiered-depth-analysis

## Implementation status
defects: doc-drift

## Design notes
The most rigorous evaluation tier in rjm's buy-vs-build framework. Reserved for decisions that commit significant capital (>$500K) or create virtually irreversible organizational dependencies, Tier 3 mandates formal proof-of-concept trials, multi-stakeholder consensus panels, and exhaustive financial modeling over 1 to 2 weeks.
