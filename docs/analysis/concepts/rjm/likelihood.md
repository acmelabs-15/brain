---
package: rjm
name: Likelihood
slug: likelihood
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Likelihood

## Definition — verbatim
> "Likelihood Scale:" — .claude/skills/threat-modeling/SKILL.md:220

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 220 | defined here | Scale definition quantifying exploit probability across High (3), Medium (2), and Low (1) tiers. |

## Consumes
Threat accessibility, required attacker skill, tool availability, and authentication prerequisites.

## Produces
Integer and ordinal exploit probability score (1-3) feeding the Risk = Likelihood x Impact calculation.

## When applied
Applied when rating individual threat entries in the threat matrix.

## Sub-concepts
none

## Part of
risk-rating, threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Likelihood` is an evaluation dimension in `rjm` threat modeling assessing how easily a vulnerability can be exploited based on prerequisites, attacker sophistication, and required access levels.
