---
package: rjm
name: Tier Model
slug: tier-model
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tier Model

## Definition — verbatim
> "## Tier Model" — .claude/skills/threat-modeling/references/security-zero-trust.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-zero-trust.md | 56 | defined here | Defines three-tier administrative isolation model governing asset and control boundaries. |

## Consumes
Enterprise asset classifications, service roles, administrative credential boundaries.

## Produces
Tier-based isolation boundaries and the invariant preventing access to more privileged tiers.

## When applied
Applied during architectural decomposition to segregate control planes and prevent lateral privilege escalation.

## Sub-concepts
tier-0, tier-1, tier-2

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The Tier Model enforces strict administrative isolation across enterprise assets, establishing the invariant that no entity may access or control a more privileged tier than the one it resides in.
