---
package: addy
path: references/security-checklist.md
type: doc
bytes: 11881
unit: inv-addy-4
---

# references/security-checklist.md

## Purpose — required, verbatim
> "Quick reference for web application security. Use alongside the `security-and-hardening` skill." — references/security-checklist.md:3

## Design intent — required
Provides a centralized, actionable security reference manual spanning pre-commit secrets prevention, threat modeling (STRIDE), authentication & session security, authorization (IDOR prevention), input validation & injection defenses, HTTP security headers, CORS policies, data protection, package manager supply chain security & install-script gates (npm, pnpm, Yarn), AI/LLM application security, production error sanitization, and OWASP Top 10 + OWASP LLM Top 10 quick references.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill security-and-hardening — references/security-checklist.md:3

## Invoked by — required
- skills/security-and-hardening/SKILL.md:77, 303, 451
- skills/shipping-and-launch/SKILL.md:269
- skills/code-review-and-quality/SKILL.md:351
- docs/getting-started.md:135
- docs/windsurf-setup.md:48
- README.md:309

## Concepts named — required, verbatim
- `Threat Modeling` — references/security-checklist.md:7, 21 — defined here
- `STRIDE` — references/security-checklist.md:27 — defined here
- `Pre-Commit Checks` — references/security-checklist.md:8, 30 — defined here
- `Authentication` — references/security-checklist.md:9, 36 — defined here
- `Authorization` — references/security-checklist.md:10, 47 — defined here
- `IDOR` — references/security-checklist.md:49 — used here
- `Input Validation` — references/security-checklist.md:11, 54 — defined here
- `SSRF` — references/security-checklist.md:65, 188 — used here
- `Security Headers` — references/security-checklist.md:12, 67 — defined here
- `Content-Security-Policy` — references/security-checklist.md:70 — used here
- `CORS Configuration` — references/security-checklist.md:13, 79 — defined here
- `Data Protection` — references/security-checklist.md:14, 94 — defined here
- `Dependency Security` — references/security-checklist.md:15, 102 — defined here
- `installation boundary` — references/security-checklist.md:104 — defined here
- `Install-Script Gate` — references/security-checklist.md:115 — defined here
- `Supply-chain hygiene` — references/security-checklist.md:141 — defined here
- `AI / LLM Security` — references/security-checklist.md:16, 149 — defined here
- `Prompt Injection` — references/security-checklist.md:154, 196 — used here
- `Error Handling` — references/security-checklist.md:17, 159 — defined here
- `OWASP Top 10` — references/security-checklist.md:18, 175 — defined here
- `OWASP Top 10 for LLMs` — references/security-checklist.md:19, 190 — defined here
- `Excessive Agency` — references/security-checklist.md:201 — defined here
- `System Prompt Leakage` — references/security-checklist.md:202 — defined here
- `Unbounded Consumption` — references/security-checklist.md:205 — defined here

## Structure
- `# Security Checklist` — references/security-checklist.md:1
- `## Table of Contents` — references/security-checklist.md:5
- `## Threat Modeling (Start Here)` — references/security-checklist.md:21
- `## Pre-Commit Checks` — references/security-checklist.md:30
- `## Authentication` — references/security-checklist.md:36
- `## Authorization` — references/security-checklist.md:47
- `## Input Validation` — references/security-checklist.md:54
- `## Security Headers` — references/security-checklist.md:67
- `## CORS Configuration` — references/security-checklist.md:79
- `## Data Protection` — references/security-checklist.md:94
- `## Dependency Security` — references/security-checklist.md:102
- `### Install-Script Gate` — references/security-checklist.md:115
- `## AI / LLM Security` — references/security-checklist.md:149
- `## Error Handling` — references/security-checklist.md:159
- `## OWASP Top 10 Quick Reference` — references/security-checklist.md:175
- `## OWASP Top 10 for LLMs Quick Reference` — references/security-checklist.md:190

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Highly specific package-manager dependency security matrix covering npm 11.18.x / 12.x, pnpm 10.x / 11+, and Yarn 1 / 2-4.13 / 4.14+ install-script policies and immutable install commands (`references/security-checklist.md:106-139`).
- Includes dedicated AI/LLM Security section and OWASP Top 10 for LLMs matrix (`references/security-checklist.md:149-205`).

## Context cost
- File size: 11,881 bytes (~2,970 tokens).
- Transitive cost when invoked: standalone reference document.
