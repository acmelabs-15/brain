---
package: rjm
name: Defense in depth
slug: defense-in-depth
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
  - {path: .agents/steering/security-practices.md, sha256: de8c639a9cd6f34b9f787dc4c2b581ca5a1d314e8956cf87d6c0412e430a0d84}
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: .claude/skills/threat-modeling/references/advanced-analysis.md, sha256: 71807836a18c20f53ad723da5a0229d50df04e4b8f1224d74b9f1c4393c936e6}
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

# Defense in depth

## Definition — verbatim
> "Multiple independent protection layers so that if one fails, others continue to provide security. No single layer is relied upon exclusively." — .claude/skills/threat-modeling/references/security-defense-in-depth.md:9

## Also called — verbatim
redundancy in defense, diversity in mechanism — .claude/skills/threat-modeling/references/security-defense-in-depth.md:11

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 112 | used here | Cited in protocol rationale as the justification for dual verification (declaration plus staged file checks). |
| .agents/steering/security-practices.md | 210 | defined here | Section heading establishing layered defensive controls across boundaries, encoding, privilege, and audit logging. |
| .claude/commands/test.md | 125 | defined here | Listed as a foundational testing principle focusing on multi-layered verification of failure modes. |
| .claude/skills/threat-modeling/references/advanced-analysis.md | 45 | used here | Recommended strategy when using Cyber Kill Chain analysis to systematically close detection gaps. |
| .claude/skills/threat-modeling/references/security-defense-in-depth.md | 7 | defined here | Title and canonical reference defining the protection layer model, mechanism diversity, and graceful degradation. |
| .claude/skills/threat-modeling/references/security-least-privilege.md | 141 | used here | Related reference identifying least privilege as one foundational layer within a broader defense-in-depth posture. |
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 101 | used here | Cross-referenced as a pattern providing layered mitigations for OWASP Top 10 vulnerability categories. |
| .claude/skills/threat-modeling/references/security-zero-trust.md | 97 | used here | Cited as a complementary architectural pattern paired with zero-trust context verification. |
| .claude/skills/threat-modeling/SKILL.md | 432 | used here | Listed in threat modeling references as supplementary knowledge for formulating mitigation strategies. |

## Consumes
Threat models, architectural trust boundaries, risk ratings, and security requirements.

## Produces
Multi-layered mitigation architectures, defense matrices, and complementary validation barriers.

## When applied
Applied throughout system design, threat modeling, testing, and protocol enforcement whenever high-consequence failure modes must be prevented.

## Sub-concepts
none

## Part of
security-practices

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path, orphan

## Design notes
Defense in Depth is an overarching architectural pattern in rjm stipulating that critical invariants, security boundaries, and validation requirements must be protected by multiple independent, diverse layers rather than a single check. Applied across code verification (linting, unit testing, mutation testing, CI gates) and protocol enforcement (session declarations backed by git staged-file inspection), it ensures that the failure or evasion of any single layer is safely caught by subsequent controls.
