---
package: rjm
name: Tier 2: Standard
slug: tier-2-standard
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

# Tier 2: Standard

## Definition — verbatim
> "### Tier 2: Standard (1-2 days)" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 165 | defined here | Medium-weight analysis tier for decisions between $50K-$500K with moderate strategic impact. |

## Consumes
Candidate options, basic financial data, and stakeholder requirements for mid-tier projects.

## Produces
Execution of all four evaluation phases, basic TCO modeling, a scored decision matrix, and an ADR.

## When applied
Applied when decision budget is between $50K and $500K with moderate strategic impact and semi-reversibility.

## Sub-concepts
none

## Part of
tiered-depth-analysis

## Implementation status
defects: doc-drift

## Design notes
The default baseline tier within rjm's tiered depth analysis. Running over 1 to 2 days, Tier 2 provides structured evaluation across all four buy-vs-build phases, producing a complete decision matrix and architectural decision record without the extensive overhead of multi-week proofs of concept.
