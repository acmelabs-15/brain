---
package: rjm
name: Analyze, Map the Zone
slug: analyze-map-the-zone
kind: phase
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Analyze, Map the Zone

## Definition — verbatim
> "Produce this output for every analysis:" — .claude/agents/negotiation.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 80 | defined here | Step 2 of the RADAR protocol, generating structured assessments of ZOPA, BATNA, and value gaps. |

## Consumes
Extracted offer terms and decoded signals from Step 1.

## Produces
Structured analytical assessment mapping ZOPA overlap, BATNA strengths, information asymmetry, and dollar-quantified value gaps.

## When applied
Executed as Step 2 of the RADAR negotiation protocol.

## Sub-concepts
zopa, batna, information-asymmetry, value-gap

## Part of
radar

## Implementation status
clean

## Design notes
Analyze, Map the Zone is Step 2 of the RADAR protocol where raw terms are translated into objective strategic parameters. In rjm, it forces the quantification of walk-aways, alternatives, and value disparities prior to formulating counter-proposals, anchoring decisions in data rather than intuition.
