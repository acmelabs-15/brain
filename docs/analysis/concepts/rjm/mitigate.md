---
package: rjm
name: Mitigate
slug: mitigate
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

# Mitigate

## Definition — verbatim
> "| **Mitigate** | Risk can be reduced to acceptable level | Add input validation |" — .claude/skills/threat-modeling/SKILL.md:243

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 243 | defined here | Threat mitigation strategy selected when engineering controls can reduce risk to an acceptable level. |

## Consumes
Identified threats, risk ratings, and technical defensive controls.

## Produces
Actionable technical controls, validation checks, and architectural defenses that reduce residual risk.

## When applied
Applied during Phase 3 (Mitigation Strategy) when designing technical countermeasures for identified security threats.

## Sub-concepts
none

## Part of
threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Mitigate` is the primary active risk response strategy in `rjm`, applied when technical countermeasures (such as encryption, validation, or rate limiting) can reduce exploit likelihood or impact to an acceptable residual level.
