---
package: rjm
name: Prompting Inversion
slug: prompting-inversion
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-design-principles.md, sha256: fd7551ca1f0c6ae2760203c6a390b6528ec36dffe80e7f5238facc7c69ee2ce0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Prompting Inversion

## Definition — verbatim
(used, not defined)

> "Prompting Inversion (arXiv 2510.22251, Oct 2025) measured the same constrained prompt across model tiers on GSM8K." — .agents/governance/agent-design-principles.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 25 | used here | Cited as empirical research evidence demonstrating that constrained prompts help mid-tier models but hurt frontier models. |

## Consumes
Benchmark evaluation data on constrained prompting across model tiers.

## Produces
Empirical justification for rjm's constrain-down prompt architecture.

## When applied
Cited during governance debates on prompt engineering and model selection policies.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other

## Design notes
An external empirical research paper cited in rjm governance to justify the asymmetric design of agent instructions, proving that prompting techniques optimized for weaker models degrade frontier model performance.
