---
package: addy
name: OWASP Top 10
slug: owasp-top-10
kind: reference
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# OWASP Top 10

## Definition — verbatim
> "These are prevention patterns, not a ranking." — skills/security-and-hardening/SKILL.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 15 | applies | Security vulnerability standard checked by security-auditor subagent |
| commands/ship.toml | 15 | applies | Security vulnerability standard checked by security-auditor subagent |
| external/code-review-and-quality.md | 12 | references | External catalog card mentioning OWASP Top 10 prevention |
| external/performance-optimization.md | 12 | references | External catalog card mentioning OWASP Top 10 prevention |
| external/security-and-hardening.md | 5 | applies | Catalog summary listing OWASP Top 10 prevention as core security practice |
| README.md | 270 | applies | Catalog table highlighting OWASP Top 10 prevention in security-and-hardening |
| skills/security-and-hardening/SKILL.md | 75 | defines | Section heading detailing code prevention patterns for OWASP categories |

## Consumes
Web application source code, query construction logic, authentication flows, and configuration.

## Produces
Defensive coding patterns and mitigations preventing injection, broken auth, SSRF, and security misconfigurations.

## When applied
Referenced and enforced during security hardening, code reviews, and pre-launch security audits.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
The `OWASP Top 10` serves as the foundational vulnerability classification framework in Addy's security toolkit. In `security-and-hardening`, it is operationalized not as an abstract taxonomy, but as actionable code prevention patterns (parameterized queries, token hashing, strict CORS/CSP, rate limiting) directly applied to harden features against the most prevalent security risks.
