---
package: addy
name: dependency auditing
slug: dependency-auditing
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# dependency auditing

## Definition — verbatim
(used, not defined)
> "Hardens code against vulnerabilities. OWASP Top 10 prevention, auth patterns, secrets management, dependency auditing, and a three-tier boundary system for any feature that accepts untrusted data." — external/security-and-hardening.md:5

## Also called — verbatim
> "Triaging Dependency Audit Results" — skills/security-and-hardening/SKILL.md:272

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review-and-quality.md | 12 | used here | Listed in security-and-hardening card under related Review skills |
| external/performance-optimization.md | 12 | used here | Cited in security-and-hardening summary card |
| external/security-and-hardening.md | 5 | used here | Highlighted on the landing page as a key security hardening practice |

## Consumes
Package manifests, lockfiles (`package-lock.json`, `bun.lockb`), vulnerability databases (CVEs).

## Produces
Audit reports, reachability assessments, dependency upgrade recommendations, patch verifications.

## When applied
When introducing new dependencies, upgrading existing packages, or running pre-merge security reviews.

## Sub-concepts
none

## Part of
`security-and-hardening`

## Implementation status
clean

## Design notes
Dependency auditing provides structured triage for third-party software risks, assessing whether reported CVE advisories represent reachable, exploitable code paths and determining safe remediation paths.
