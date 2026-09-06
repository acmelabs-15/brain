---
package: addy
name: security-and-hardening
slug: security-and-hardening
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/security-and-hardening.json, sha256: a521a14857fe9dd79e11115568655135274bc1e636e43a6be1cd98c025569a0a}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# security-and-hardening

## Definition — verbatim
> "OWASP Top 10 prevention, auth patterns, secrets management, dependency auditing, three-tier boundary system" — README.md:270

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/review.toml | 11 | references | Directs deep security audit to security-and-hardening skill |
| evals/cases/security-and-hardening.json | 2 | applies | Test suite evaluation manifest for security hardening capabilities |
| external/code-review-and-quality.md | 12 | references | External catalog cross-reference to security-and-hardening skill |
| external/performance-optimization.md | 12 | references | External catalog cross-reference to security-and-hardening skill |
| external/security-and-hardening.md | 5 | defines | Web catalog page detailing OWASP, auth, secrets, and boundaries |
| README.md | 270 | applies | Catalog summary table entry for security-and-hardening skill |
| references/definition-of-done.md | 48 | applies | DoD checklist item citing security review via security-and-hardening |
| references/observability-checklist.md | 30 | references | Observability checklist citing security hardening for audit log requirements |
| references/security-checklist.md | 3 | references | Reference checklist citing security-and-hardening skill |
| skills/constraint-driven-development/SKILL.md | 10 | references | Constraint guide citing security-and-hardening for security scan rules |
| skills/observability-and-instrumentation/SKILL.md | 91 | references | Instrumentation skill citing security-and-hardening for sensitive data masking |
| skills/source-driven-development/SKILL.md | 101 | references | Source verification skill citing security-and-hardening for safe fetching |

## Consumes
Code handling untrusted inputs, authentication sessions, secrets, third-party integrations, or persistent storage.

## Produces
Threat models, three-tier input boundary implementations, automated dependency vulnerability fixes, and security audit reports.

## When applied
When handling user input, authentication, data storage, or external integrations, and before shipping production features.

## Sub-concepts
owasp-top-10, security-auditor

## Part of
addy:Review

## Implementation status
defects: doc-drift, orphan

## Design notes
`security-and-hardening` is the dedicated security engineering skill in Addy's lifecycle. It provides systematic defenses against common software vulnerabilities, establishing a three-tier data boundary system (untrusted input, validated data, sanitized output), proactive OWASP Top 10 mitigations, automated dependency vulnerability triaging, and strict secrets management.
