---
package: rjm
name: Zero Trust
slug: zero-trust
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: .claude/skills/threat-modeling/references/security-defense-in-depth.md, sha256: a4cb2852432f3f7a68fbe3bd3a5e80fca548f87c0803c6b05665ca98e72f614d}
  - {path: .claude/skills/threat-modeling/references/security-least-privilege.md, sha256: 41ddbb95e645c889226815fbf68f42dcee6ae7b0adba040ce52bd8465817ed42}
  - {path: .claude/skills/threat-modeling/references/security-owasp-top-10.md, sha256: c84e707337731a44229ec09a5a162f88474a205262ad3a0ef9041b6ae9899533}
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Zero Trust

## Definition — verbatim
> "No actor, system, network, or service is trusted by default. Every access request must be continuously validated." — .claude/skills/threat-modeling/references/security-zero-trust.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-defense-in-depth.md | 77 | used here | Cross-referenced as a complementary architectural model verifying access at every protection layer. |
| .claude/skills/threat-modeling/references/security-least-privilege.md | 140 | used here | Cross-referenced as a complementary verification paradigm operating alongside least privilege. |
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 102 | used here | Cross-referenced as a complementary trust-verification paradigm paired with OWASP vulnerability categories. |
| .claude/skills/threat-modeling/references/security-zero-trust.md | 7 | defined here | Reference document defining the Zero Trust paradigm, core principles, context models, and tier architecture. |
| .claude/skills/threat-modeling/SKILL.md | 433 | used here | Listed in supplementary knowledge references for trust boundary analysis. |

## Consumes
System architecture models, identity configurations, network topologies, and trust boundaries.

## Produces
Continuous verification policies, trust boundary mappings, and context-based access rules.

## When applied
Applied during system decomposition (Phase 1), threat identification (Phase 2), and mitigation design (Phase 3) of threat modeling.

## Sub-concepts
- verify-explicitly
- least-privilege-access
- context-based-decision-making

## Part of
none

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
Zero Trust is an architectural security paradigm in rjm replacing perimeter-based network trust with continuous, identity-driven, context-based validation across all service and component boundaries.
