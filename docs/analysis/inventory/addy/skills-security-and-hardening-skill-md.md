---
package: addy
path: skills/security-and-hardening/SKILL.md
type: skill
bytes: 24192
unit: inv-addy-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/security-and-hardening/SKILL.md

## Purpose — required, verbatim
> "Hardens code against vulnerabilities. Use when handling user input, authentication, data storage, or external integrations. Use when building any feature that accepts untrusted data, manages user sessions, or interacts with third-party services. Use when personal data or privacy compliance (GDPR, CCPA) is involved." — skills/security-and-hardening/SKILL.md:3

## Design intent — required
Provides security engineering constraints and defensive patterns for web applications and autonomous coding agents. Rather than treating security as an isolated post-build phase or relying on automated package audits alone, it establishes security as a continuous design constraint across every line of code touching untrusted boundaries, data stores, sessions, and AI/LLM components. It introduces a lightweight STRIDE threat-modeling step before implementation, a three-tier boundary governance system ("Always Do", "Ask First", "Never Do"), OWASP Top 10 prevention patterns (injection, authentication, XSS, access control, security misconfiguration, sensitive data exposure, SSRF with DNS rebinding defenses), supply-chain hygiene (immutable installs, dependency script blocking), data privacy lifecycle rules (classification, minimization, retention/deletion for GDPR/CCPA), and OWASP Top 10 for LLMs defenses. Without it, agents introduce critical vulnerabilities through unescaped user inputs, leaked secrets, overly permissive tool agency, SSRF exposure, unvetted npm install scripts, and prompt injection vulnerabilities.

## Phase — required
addy:Review

## Inputs — required
- User input, HTTP requests, form fields, file uploads, webhooks, third-party APIs, message queues, and LLM output crossing trust boundaries — skills/security-and-hardening/SKILL.md:25
- Application architecture and trust boundaries to threat model — skills/security-and-hardening/SKILL.md:25
- Package manager lockfile and native audit reports (`npm audit`, etc.) — skills/security-and-hardening/SKILL.md:53, 274, 303
- Environment configurations (`.env.example`, `.env`, `.env.local`) — skills/security-and-hardening/SKILL.md:335-339
- User consent and data-subject requests (export, correct, delete) — skills/security-and-hardening/SKILL.md:371-372

## Outputs — required
- Input validation schemas (`zod` schemas) — skills/security-and-hardening/SKILL.md:227-234
- Parameterized database queries and ORM models — skills/security-and-hardening/SKILL.md:85-89
- Hardened HTTP security headers (CSP, HSTS, CORS) via helmet — skills/security-and-hardening/SKILL.md:153-173
- Safe SSRF allowlist validator functions (`assertSafeUrl`) — skills/security-and-hardening/SKILL.md:203-215
- Audit triage verdicts (fix immediately, fix soon, track in backlog) — skills/security-and-hardening/SKILL.md:278-290
- `.env.example` templates and `.gitignore` secrets exclusions — skills/security-and-hardening/SKILL.md:336, 340-346
- Security review checklist sign-off — skills/security-and-hardening/SKILL.md:407-448

## Invokes — required
- reference ../../references/security-checklist.md — skills/security-and-hardening/SKILL.md:77
- reference ../../references/security-checklist.md — skills/security-and-hardening/SKILL.md:303
- reference ../../references/security-checklist.md — skills/security-and-hardening/SKILL.md:451
- skill observability-and-instrumentation — skills/security-and-hardening/SKILL.md:369
- skill debugging-and-error-recovery — skills/security-and-hardening/SKILL.md:375

## Invoked by — required
- command review — .claude/commands/review.md:12
- command review — commands/review.toml:11
- command review — .gemini/commands/review.toml:11
- skill code-review-and-quality — skills/code-review-and-quality/SKILL.md:66
- skill code-review-and-quality — skills/code-review-and-quality/SKILL.md:300
- skill source-driven-development — skills/source-driven-development/SKILL.md:101
- skill observability-and-instrumentation — skills/observability-and-instrumentation/SKILL.md:91
- skill constraint-driven-development — skills/constraint-driven-development/SKILL.md:10
- skill constraint-driven-development — skills/constraint-driven-development/SKILL.md:310
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:35
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:185
- reference definition-of-done.md — references/definition-of-done.md:48
- reference observability-checklist.md — references/observability-checklist.md:30
- reference security-checklist.md — references/security-checklist.md:3
- doc README.md — README.md:270
- doc CLAUDE.md — CLAUDE.md:25

## Concepts named — required, verbatim
- `security-and-hardening` — skills/security-and-hardening/SKILL.md:2 — defined here
- `Threat Model` — skills/security-and-hardening/SKILL.md:21 — defined here
- `trust boundaries` — skills/security-and-hardening/SKILL.md:25 — defined here
- `STRIDE` — skills/security-and-hardening/SKILL.md:27 — defined here
- `abuse cases` — skills/security-and-hardening/SKILL.md:38 — defined here
- `Insecure Design` — skills/security-and-hardening/SKILL.md:40 — used here
- `Three-Tier Boundary System` — skills/security-and-hardening/SKILL.md:42 — defined here
- `Always Do` — skills/security-and-hardening/SKILL.md:44 — defined here
- `Ask First` — skills/security-and-hardening/SKILL.md:55 — defined here
- `Never Do` — skills/security-and-hardening/SKILL.md:65 — defined here
- `OWASP Top 10` — skills/security-and-hardening/SKILL.md:75 — used here
- `Injection` — skills/security-and-hardening/SKILL.md:79 — defined here
- `Broken Authentication` — skills/security-and-hardening/SKILL.md:92 — defined here
- `Cross-Site Scripting` — skills/security-and-hardening/SKILL.md:116 — defined here
- `XSS` — skills/security-and-hardening/SKILL.md:116 — defined here
- `Broken Access Control` — skills/security-and-hardening/SKILL.md:130 — defined here
- `Security Misconfiguration` — skills/security-and-hardening/SKILL.md:150 — defined here
- `Sensitive Data Exposure` — skills/security-and-hardening/SKILL.md:175 — defined here
- `Server-Side Request Forgery` — skills/security-and-hardening/SKILL.md:189 — defined here
- `SSRF` — skills/security-and-hardening/SKILL.md:189 — defined here
- `TOCTOU` — skills/security-and-hardening/SKILL.md:220 — defined here
- `Input Validation Patterns` — skills/security-and-hardening/SKILL.md:222 — defined here
- `Schema Validation` — skills/security-and-hardening/SKILL.md:224 — defined here
- `File Upload Safety` — skills/security-and-hardening/SKILL.md:254 — defined here
- `Triaging Dependency Audit Results` — skills/security-and-hardening/SKILL.md:272 — defined here
- `Supply-Chain Hygiene` — skills/security-and-hardening/SKILL.md:299 — defined here
- `Rate Limiting` — skills/security-and-hardening/SKILL.md:312 — defined here
- `Secrets Management` — skills/security-and-hardening/SKILL.md:332 — defined here
- `Data Privacy & Compliance` — skills/security-and-hardening/SKILL.md:356 — defined here
- `PII` — skills/security-and-hardening/SKILL.md:365 — used here
- `data-subject rights` — skills/security-and-hardening/SKILL.md:371 — defined here
- `Securing AI / LLM Features` — skills/security-and-hardening/SKILL.md:377 — defined here
- `OWASP Top 10 for LLM Applications` — skills/security-and-hardening/SKILL.md:379 — used here
- `Improper Output Handling` — skills/security-and-hardening/SKILL.md:381 — used here
- `Prompt Injection` — skills/security-and-hardening/SKILL.md:382 — used here
- `Excessive Agency` — skills/security-and-hardening/SKILL.md:384 — used here
- `Unbounded Consumption` — skills/security-and-hardening/SKILL.md:385 — used here
- `Vector and Embedding Weaknesses` — skills/security-and-hardening/SKILL.md:386 — used here
- `Security Review Checklist` — skills/security-and-hardening/SKILL.md:405 — defined here
- `Common Rationalizations` — skills/security-and-hardening/SKILL.md:453 — used here
- `Red Flags` — skills/security-and-hardening/SKILL.md:469 — used here
- `Verification` — skills/security-and-hardening/SKILL.md:485 — used here

## Structure
- `# Security and Hardening` — skills/security-and-hardening/SKILL.md:6
- `## Overview` — skills/security-and-hardening/SKILL.md:8
- `## When to Use` — skills/security-and-hardening/SKILL.md:12
- `## Process: Threat Model First` — skills/security-and-hardening/SKILL.md:21
- `## The Three-Tier Boundary System` — skills/security-and-hardening/SKILL.md:42
- `### Always Do (No Exceptions)` — skills/security-and-hardening/SKILL.md:44
- `### Ask First (Requires Human Approval)` — skills/security-and-hardening/SKILL.md:55
- `### Never Do` — skills/security-and-hardening/SKILL.md:65
- `## OWASP Top 10 Prevention Patterns` — skills/security-and-hardening/SKILL.md:75
- `### Injection (SQL, NoSQL, OS Command)` — skills/security-and-hardening/SKILL.md:79
- `### Broken Authentication` — skills/security-and-hardening/SKILL.md:92
- `### Cross-Site Scripting (XSS)` — skills/security-and-hardening/SKILL.md:116
- `### Broken Access Control` — skills/security-and-hardening/SKILL.md:130
- `### Security Misconfiguration` — skills/security-and-hardening/SKILL.md:150
- `### Sensitive Data Exposure` — skills/security-and-hardening/SKILL.md:175
- `### Server-Side Request Forgery (SSRF)` — skills/security-and-hardening/SKILL.md:189
- `## Input Validation Patterns` — skills/security-and-hardening/SKILL.md:222
- `### Schema Validation at Boundaries` — skills/security-and-hardening/SKILL.md:224
- `### File Upload Safety` — skills/security-and-hardening/SKILL.md:254
- `## Triaging Dependency Audit Results` — skills/security-and-hardening/SKILL.md:272
- `### Supply-Chain Hygiene` — skills/security-and-hardening/SKILL.md:299
- `## Rate Limiting` — skills/security-and-hardening/SKILL.md:312
- `## Secrets Management` — skills/security-and-hardening/SKILL.md:332
- `## Data Privacy & Compliance` — skills/security-and-hardening/SKILL.md:356
- `## Securing AI / LLM Features` — skills/security-and-hardening/SKILL.md:377
- `## Security Review Checklist` — skills/security-and-hardening/SKILL.md:405
- `## See Also` — skills/security-and-hardening/SKILL.md:449
- `## Common Rationalizations` — skills/security-and-hardening/SKILL.md:453
- `## Red Flags` — skills/security-and-hardening/SKILL.md:469
- `## Verification` — skills/security-and-hardening/SKILL.md:485

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Distinguishes security ("can an attacker read it?") from data privacy ("should we even hold it, and for how long?"), treating personal data as a liability to minimize rather than an asset to hoard (lines 358-359).
- Explicitly addresses modern AI/LLM attack surfaces (OWASP Top 10 for LLMs 2025: prompt injection, improper output handling, excessive agency, unbounded consumption, vector/embedding poison/tenant isolation, lines 377-404).
- Highlights DNS rebinding TOCTOU vulnerability in standard URL checks when mitigating SSRF (line 220).
- Emphasizes supply-chain hygiene: warns against automatic forced remediation (`npm audit fix --force`), mandates blocking install scripts prior to inspection, and requires triaging advisories by reachability rather than severity alone (lines 272-311).

## Context cost
24192 bytes (~6048 tokens). Invocations load `../../references/security-checklist.md` (6771 bytes), `skills/observability-and-instrumentation/SKILL.md` (11053 bytes), and `skills/debugging-and-error-recovery/SKILL.md` (11664 bytes). Total: 53680 bytes (~13420 tokens).
