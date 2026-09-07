---
package: rjm
name: Founder-context bias
slug: founder-context-bias
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Founder-context bias

## Definition — verbatim
> "Founder-context bias. The source books target early-stage software founders. A" — .claude/skills/business-strategy/SKILL.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 91 | defined here | Documented as an honest limitation warning that source frameworks target software startups and may mis-weight factors for regulated, hardware, or enterprise businesses. |

## Consumes
Business context, domain classification, and industry vertical.

## Produces
Calibrated weighting of framework recommendations based on business model and industry constraints.

## When applied
When applying software-centric strategy frameworks to enterprise, hardware, or heavily regulated domains.

## Sub-concepts
none

## Part of
honest-limitations

## Implementation status
defects: missing-path

## Design notes
A structural bias safeguard in rjm's business strategy library. It alerts users that most referenced literature assumes agile early-stage software conditions, prompting deliberate adjustments when evaluating enterprise, physical goods, or compliance-heavy business models.
