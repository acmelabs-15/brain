---
package: rjm
name: Mitigation Checklist
slug: mitigation-checklist
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-defense-in-depth.md, sha256: a4cb2852432f3f7a68fbe3bd3a5e80fca548f87c0803c6b05665ca98e72f614d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Mitigation Checklist

## Definition — verbatim
> "For each Critical/High threat, verify:" — .claude/skills/threat-modeling/references/security-defense-in-depth.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-defense-in-depth.md | 57 | defined here | Four-item verification checklist ensuring defense-in-depth criteria for Critical and High threats. |

## Consumes
Threat model mitigations proposed for Critical and High severity threats.

## Produces
Verified mitigation designs satisfying layer count, mechanism diversity, failure independence, and cost placement.

## When applied
During Phase 3 (Mitigation Strategy) of threat modeling when validating mitigation proposals.

## Sub-concepts
none

## Part of
- defense-in-depth

## Implementation status
defects: missing-path

## Design notes
A quality gate checklist in rjm's threat modeling workflow ensuring mitigations for severe threats meet rigorous defense-in-depth criteria, including layer redundancy, mechanism diversity, and failure independence.
