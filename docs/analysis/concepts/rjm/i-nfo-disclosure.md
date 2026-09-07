---
package: rjm
name: **I**nfo Disclosure
slug: i-nfo-disclosure
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

# **I**nfo Disclosure

## Definition — verbatim
> "| **I**nfo Disclosure | Exposing information | Data stores, data flows | Can sensitive data leak? |" — .claude/skills/threat-modeling/SKILL.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 168 | defined here | STRIDE threat category defined as exposing information, applying to data stores and data flows. |

## Consumes
Sensitive data assets, telemetry streams, error logs, and data transmissions.

## Produces
Data leakage threat scenarios and confidentiality mitigations (encryption at rest/transit, masking, sanitization).

## When applied
Applied during Phase 2 (Threat Identification) across all data stores and data transmission channels.

## Sub-concepts
none

## Part of
stride, threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`**I**nfo Disclosure` is the STRIDE threat category covering unauthorized exposure or leakage of sensitive data, countered by rigorous encryption at rest and in transit, sanitized error handling, and least-privilege data access.
