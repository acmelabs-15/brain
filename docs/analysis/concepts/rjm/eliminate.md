---
package: rjm
name: Eliminate
slug: eliminate
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/blue-ocean-strategy.md, sha256: 9f5a1527f097649ba4c0e23d32a8df724e8df7a4e5acc0cc7d406de94a1d3740}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Eliminate

## Definition — verbatim
> "Eliminate: which factors the industry takes for granted can you drop entirely?" — .claude/skills/business-strategy/references/blue-ocean-strategy.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/blue-ocean-strategy.md | 27 | defined here | Directs the complete removal of factors that competitors take for granted but offer negligible buyer utility. |
| .claude/skills/threat-modeling/SKILL.md | 246 | defined here | Threat modeling risk response strategy removing vulnerable components or dropping unused features to eliminate risk entirely. |

## Consumes
Industry assumptions, legacy features, or vulnerable system components.

## Produces
Cost elimination, complexity reduction, and total risk neutralization.

## When applied
Applied during Four Actions factor reconstruction in business strategy or threat modeling mitigation when dropping components eliminates vulnerability.

## Sub-concepts
none

## Part of
four-actions, threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
A decisive subtraction technique used across both business strategy and threat modeling in rjm. In strategy, it challenges industry dogmas by discarding factors competitors take for granted that buyers no longer value; in security threat modeling, it neutralizes risk completely by dropping vulnerable or unused components.
