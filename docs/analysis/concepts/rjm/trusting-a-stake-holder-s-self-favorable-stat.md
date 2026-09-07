---
package: rjm
name: Trusting a stake-holder's self-favorable stat
slug: trusting-a-stake-holder-s-self-favorable-stat
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Trusting a stake-holder's self-favorable stat

## Definition — verbatim
> "The author benefits from the framing" — .claude/skills/ai-agents-external-claims/SKILL.md:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 102 | defined here | Anti-pattern of accepting vendor or stakeholder performance metrics without neutral cross-validation. |

## Consumes
Self-promotional claims, vendor benchmarks, or stakeholder-authored statistics.

## Produces
Biased architectural evaluations and distorted technology selection decisions.

## When applied
Applied during Phase 3 source stake assessment.

## Sub-concepts
none

## Part of
ai-agents-external-claims

## Implementation status
defects: missing-path

## Design notes
`Trusting a stake-holder's self-favorable stat` occurs when an agent ingests promotional metrics from parties who benefit commercially or politically from the claim. In rjm, such claims must be explicitly flagged and corroborated by neutral third-party measurements.
