---
package: rjm
name: **S**poofing
slug: s-poofing
kind: pattern
package_phase: rjm:spec
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

# **S**poofing

## Definition — verbatim
> "| **S**poofing | Pretending to be someone else | External entities, data flows | Can an attacker impersonate a user? |" — .claude/skills/threat-modeling/SKILL.md:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 165 | defined here | STRIDE threat category defined as pretending to be someone else, applying to external entities and data flows. |

## Consumes
External entity definitions, authentication tokens, credentials, and data flow interactions.

## Produces
Impersonation threat scenarios and authentication mitigations (MFA, TLS, cryptographic signatures).

## When applied
Applied during Phase 2 (Threat Identification) when analyzing external entities and data flows crossing trust boundaries.

## Sub-concepts
none

## Part of
stride, threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`**S**poofing` is the foundational STRIDE threat category representing identity impersonation, demanding verification mechanisms like digital signatures, token binding, and mutual TLS to guarantee actor authenticity.
