---
package: addy
path: references/security-checklist.md
type: doc
bytes: 11881
unit: inv-addy-35
deprecated: false
aliases: []
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# references/security-checklist.md

## Purpose — required, verbatim
> "Quick reference for web application security. Use alongside the `security-and-hardening` skill." — references/security-checklist.md:3

## Design intent — required
Operational and review checklist codifying defensive security standards and hardening practices for web applications and agent workflows. Supplements the `security-and-hardening` skill with threat modeling guidelines (STRIDE), pre-commit secret leak checks, authentication and session hardening rules, authorization and IDOR prevention checks, boundary input validation, production security headers, restrictive CORS policies, data protection rules, package manager install-script gates (npm, pnpm, Yarn native policies), supply-chain hygiene, AI and LLM security controls, sanitized production error handling, and tabular quick references for both OWASP Top 10 (2021) and OWASP Top 10 for LLMs.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill security-and-hardening — references/security-checklist.md:3

## Invoked by — required
- doc docs/windsurf-setup.md — docs/windsurf-setup.md:48
- doc docs/getting-started.md — docs/getting-started.md:135
- doc README.md — README.md:309
- skill shipping-and-launch — skills/shipping-and-launch/SKILL.md:269
- skill code-review-and-quality — skills/code-review-and-quality/SKILL.md:351
- skill security-and-hardening — skills/security-and-hardening/SKILL.md:451

## Concepts named — required, verbatim
- `STRIDE` — references/security-checklist.md:27 — used here
- `Pre-Commit Checks` — references/security-checklist.md:30 — defined here
- `Authentication` — references/security-checklist.md:36 — defined here
- `Authorization` — references/security-checklist.md:46 — defined here
- `Input Validation` — references/security-checklist.md:54 — defined here
- `Security Headers` — references/security-checklist.md:67 — defined here
- `CORS Configuration` — references/security-checklist.md:79 — defined here
- `Data Protection` — references/security-checklist.md:94 — defined here
- `Dependency Security` — references/security-checklist.md:102 — defined here
- `Install-Script Gate` — references/security-checklist.md:115 — defined here
- `Supply-chain hygiene` — references/security-checklist.md:141 — defined here
- `AI / LLM Security` — references/security-checklist.md:149 — defined here
- `OWASP Top 10` — references/security-checklist.md:175 — used here
- `OWASP Top 10 for LLMs` — references/security-checklist.md:190 — used here
- `security-and-hardening` — references/security-checklist.md:3 — used here

## Structure
- # Security Checklist — references/security-checklist.md:1
- ## Table of Contents — references/security-checklist.md:5
- ## Threat Modeling (Start Here) — references/security-checklist.md:21
- ## Pre-Commit Checks — references/security-checklist.md:30
- ## Authentication — references/security-checklist.md:36
- ## Authorization — references/security-checklist.md:46
- ## Input Validation — references/security-checklist.md:54
- ## Security Headers — references/security-checklist.md:67
- ## CORS Configuration — references/security-checklist.md:79
- ## Data Protection — references/security-checklist.md:94
- ## Dependency Security — references/security-checklist.md:102
- ### Install-Script Gate — references/security-checklist.md:115
- ## AI / LLM Security — references/security-checklist.md:149
- ## Error Handling — references/security-checklist.md:159
- ## OWASP Top 10 Quick Reference — references/security-checklist.md:175
- ## OWASP Top 10 for LLMs Quick Reference — references/security-checklist.md:190

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Install-script gate rule: "Never discover dependency lifecycle scripts by first executing an ordinary install on a client whose defaults have not been verified." — references/security-checklist.md:117
- Supply-chain audit limitation: "advisory audits do not catch newly malicious packages" — references/security-checklist.md:141
- Model output trust boundary: "Model output treated as untrusted" — references/security-checklist.md:153

## Context cost
11881 bytes (~2970 tokens). Reference document loaded alongside security-and-hardening or security-auditor agent.
