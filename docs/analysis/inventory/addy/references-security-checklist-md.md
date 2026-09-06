---
package: addy
path: references/security-checklist.md
type: doc
bytes: 11881
unit: inv-addy-35
aliases: []
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# references/security-checklist.md

## Purpose — required, verbatim
> "Quick reference for web application security. Use alongside the `security-and-hardening` skill." — references/security-checklist.md:3

## Design intent — required
Exhaustive, actionable web application and AI application security reference checklist. It structures security defenses starting with threat modeling (trust boundaries, STRIDE, abuse cases), through developer pre-commit verification (secrets filtering), core application hygiene (bcrypt/argon2 hashing, session cookie flags, IDOR prevention, allowlist input validation, security headers, restrictive CORS, PII data protection), dependency supply-chain defense (installation boundaries, lockfile immutability, install-script gating matrix for npm, pnpm, and Yarn), AI/LLM defense (prompt injection mitigation, output sandboxing, excessive agency bounding), and quick references for OWASP Top 10 (2021) and OWASP Top 10 for LLMs.

## Phase — required
cross-phase

## Inputs — required
Source code, pre-commit git diffs, package manifests (package.json, lockfiles, .yarnrc.yml), API endpoints, CORS policies, HTTP response headers, database queries, and LLM prompt/tooling integration code.

## Outputs — required
none

## Invokes — required
- skill security-and-hardening — references/security-checklist.md:3

## Invoked by — required
- doc README.md — README.md:309
- doc docs/getting-started.md — docs/getting-started.md:135
- doc docs/windsurf-setup.md — docs/windsurf-setup.md:48
- skill skills/security-and-hardening — skills/security-and-hardening/SKILL.md:77
- skill skills/shipping-and-launch — skills/shipping-and-launch/SKILL.md:269
- skill skills/code-review-and-quality — skills/code-review-and-quality/SKILL.md:351

## Concepts named — required, verbatim
- `Security Checklist` — references/security-checklist.md:1 — defined here
- `security-and-hardening` — references/security-checklist.md:3 — used here
- `Threat Modeling` — references/security-checklist.md:7, 21 — defined here
- `Pre-Commit Checks` — references/security-checklist.md:8, 30 — defined here
- `Authentication` — references/security-checklist.md:9, 36 — defined here
- `Authorization` — references/security-checklist.md:10, 46 — defined here
- `Input Validation` — references/security-checklist.md:11, 54 — defined here
- `Security Headers` — references/security-checklist.md:12, 67 — defined here
- `CORS Configuration` — references/security-checklist.md:13, 79 — defined here
- `Data Protection` — references/security-checklist.md:14, 94 — defined here
- `Dependency Security` — references/security-checklist.md:15, 102 — defined here
- `AI / LLM Security` — references/security-checklist.md:16, 149 — defined here
- `Error Handling` — references/security-checklist.md:17, 159 — defined here
- `OWASP Top 10 Quick Reference` — references/security-checklist.md:18, 175 — defined here
- `OWASP Top 10 for LLMs Quick Reference` — references/security-checklist.md:19, 190 — defined here
- `STRIDE` — references/security-checklist.md:27 — used here
- `IDOR` — references/security-checklist.md:49 — used here
- `SSRF` — references/security-checklist.md:65, 188 — used here
- `installation boundary` — references/security-checklist.md:104 — defined here
- `Install-Script Gate` — references/security-checklist.md:115 — defined here
- `Supply-chain hygiene` — references/security-checklist.md:141 — defined here
- `Prompt Injection` — references/security-checklist.md:154, 196 — used here
- `Broken Access Control` — references/security-checklist.md:179 — used here
- `Cryptographic Failures` — references/security-checklist.md:180 — used here
- `Injection` — references/security-checklist.md:181 — used here
- `Insecure Design` — references/security-checklist.md:182 — used here
- `Security Misconfiguration` — references/security-checklist.md:183 — used here
- `Vulnerable Components` — references/security-checklist.md:184 — used here
- `Auth Failures` — references/security-checklist.md:185 — used here
- `Data Integrity Failures` — references/security-checklist.md:186 — used here
- `Logging Failures` — references/security-checklist.md:187 — used here
- `Excessive Agency` — references/security-checklist.md:201 — used here
- `System Prompt Leakage` — references/security-checklist.md:202 — used here

## Structure
- # Security Checklist
- ## Table of Contents
- ## Threat Modeling (Start Here)
- ## Pre-Commit Checks
- ## Authentication
- ## Authorization
- ## Input Validation
- ## Security Headers
- ## CORS Configuration
- ## Data Protection
- ## Dependency Security
- ### Install-Script Gate
- ## AI / LLM Security
- ## Error Handling
- ## OWASP Top 10 Quick Reference
- ## OWASP Top 10 for LLMs Quick Reference

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Directly resolves Phase 1V verification omissions by extracting `Threat Modeling` (lines 7, 21), `IDOR` (line 49), `SSRF` (lines 65, 188), and `installation boundary` (line 104).
- Detailed dependency supply-chain security guidance with a package manager policy matrix covering npm, pnpm, and Yarn, distinguishing between default behaviors, strict enforcement flags (`strict-allow-scripts=true`, `strictDepBuilds: true`, `enableScripts: false`), and granular approvals.
- Dedicated AI/LLM security checklist and OWASP Top 10 for LLMs quick reference (LLM01–LLM10) addressing prompt injection, excessive agency, and sensitive data leakage.

## Context cost
11881 bytes, ~2970 tokens. Essential security reference loaded during code review, pre-commit hardening, and launch audits.
