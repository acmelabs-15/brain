---
package: rjm
name: Transfer
slug: transfer
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

# Transfer

## Definition — verbatim
> "| **Transfer** | Someone else can manage risk better | Cyber insurance, third-party service |" — .claude/skills/threat-modeling/SKILL.md:245

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 245 | defined here | Threat mitigation strategy shifting operational risk management to external third-party providers or insurance. |

## Consumes
Security threats outside core organizational competencies, third-party SLA terms, and insurance policies.

## Produces
Outsourced security arrangements and third-party vendor agreements managing specific threat profiles.

## When applied
Applied during Phase 3 (Mitigation Strategy) when third-party services can manage specialized security operational risks more effectively.

## Sub-concepts
none

## Part of
threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Transfer` is a risk management strategy in `rjm` where vulnerability exposure is shifted to specialized third-party services (such as managed auth providers, cloud WAFs, or cyber insurance) rather than maintained in-house.
