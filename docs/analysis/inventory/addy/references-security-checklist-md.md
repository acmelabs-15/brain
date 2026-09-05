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
verified: 2026-09-04 quote-check+coverage
---

# references/security-checklist.md

## Purpose — required, verbatim
> "Quick reference for web application security. Use alongside the `security-and-hardening` skill." — references/security-checklist.md:3

## Design intent — required
Provides an operational security checklist and reference runbook for secure web application development and pre-commit/pre-launch auditing. Bridges foundational application security controls (threat modeling with STRIDE, secret detection, authentication, authorization and IDOR checks, input validation, defensive HTTP response headers, CORS configurations, data masking, and error handling) with deep software supply-chain hygiene (package manager installation boundary detection, immutable/frozen CI installations, and granular native lifecycle install-script policies across npm, pnpm, and Yarn) and modern AI/LLM application security (handling untrusted outputs, prompt injection defenses, scoping tool agency, and the OWASP Top 10 for LLMs).

## Phase — required
cross-phase

## Inputs — required
Application source code, package manifests (`package.json`, `pnpm-lock.yaml`, `yarn.lock`, `package-lock.json`), environment configurations, server route handlers, and AI/LLM integration architectures.

## Outputs — required
none

## Invokes — required
- skill security-and-hardening — references/security-checklist.md:3

## Invoked by — required
- skill skills/security-and-hardening/SKILL.md — skills/security-and-hardening/SKILL.md:77
- skill skills/shipping-and-launch/SKILL.md — skills/shipping-and-launch/SKILL.md:269
- skill skills/code-review-and-quality/SKILL.md — skills/code-review-and-quality/SKILL.md:351
- doc docs/windsurf-setup.md — docs/windsurf-setup.md:48
- doc README.md — README.md:309
- doc docs/getting-started.md — docs/getting-started.md:135
- script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:141

## Concepts named — required, verbatim
- `Threat Modeling` — references/security-checklist.md:7 — defined here
- `STRIDE` — references/security-checklist.md:27 — defined here
- `Pre-Commit Checks` — references/security-checklist.md:30 — defined here
- `Authentication` — references/security-checklist.md:36 — defined here
- `Authorization` — references/security-checklist.md:46 — defined here
- `IDOR` — references/security-checklist.md:49 — defined here
- `Input Validation` — references/security-checklist.md:54 — defined here
- `SSRF` — references/security-checklist.md:65 — defined here
- `Security Headers` — references/security-checklist.md:67 — defined here
- `CORS Configuration` — references/security-checklist.md:79 — defined here
- `Data Protection` — references/security-checklist.md:94 — defined here
- `Dependency Security` — references/security-checklist.md:102 — defined here
- `installation boundary` — references/security-checklist.md:104 — defined here
- `Install-Script Gate` — references/security-checklist.md:115 — defined here
- `Supply-chain hygiene` — references/security-checklist.md:141 — defined here
- `AI / LLM Security` — references/security-checklist.md:149 — defined here
- `Error Handling` — references/security-checklist.md:159 — defined here
- `OWASP Top 10 Quick Reference` — references/security-checklist.md:175 — defined here
- `OWASP Top 10 for LLMs Quick Reference` — references/security-checklist.md:190 — defined here
- `Prompt Injection` — references/security-checklist.md:196 — defined here
- `Excessive Agency` — references/security-checklist.md:201 — defined here

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
Features a detailed dependency supply-chain security matrix (lines 106-138) establishing strict installation boundary resolution, frozen CI install commands (`npm ci`, `pnpm install --frozen-lockfile`, `yarn install --immutable`), and explicit native install-script configuration policies across specific client versions (e.g. npm 11.18.x `strict-allow-scripts=true`, pnpm 10.26+ `strictDepBuilds: true`, Yarn 4.14+ `dependenciesMeta.<package>.built`). Incorporates both OWASP Top 10 (2021) and the OWASP Top 10 for LLMs.

## Context cost
11881 bytes, ~2970 tokens.
