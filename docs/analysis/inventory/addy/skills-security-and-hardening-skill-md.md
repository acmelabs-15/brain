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
verified: 2026-09-05 quote-check+coverage
---

# skills/security-and-hardening/SKILL.md

## Purpose — required, verbatim
> "Hardens code against vulnerabilities. Use when handling user input, authentication, data storage, or external integrations. Use when building any feature that accepts untrusted data, manages user sessions, or interacts with third-party services. Use when personal data or privacy compliance (GDPR, CCPA) is involved." — skills/security-and-hardening/SKILL.md:3

## Design intent — required
A comprehensive security and hardening guide for autonomous coding agents developing web applications. Enforces a "threat model first" mindset using STRIDE and trust boundary mapping, establishes a three-tier rule taxonomy (Always Do, Ask First, Never Do), provides defensive implementation patterns across OWASP Top 10 web vulnerabilities and OWASP Top 10 for LLM Applications (2025), and addresses supply-chain security, dependency audit triage, and data privacy lifecycle management (GDPR/CCPA). Without this skill, agents generate insecure boilerplate (concatenated SQL, missing CSRF/CSP headers, unvalidated user input, prompt injection vulnerabilities, committed secrets, or permanent unmanaged PII retention).

## Phase — required
addy:Review

## Inputs — required
- Application source code, route handlers, database queries, and templates
- Threat models, trust boundaries, and asset definitions:
  > "Map the trust boundaries." — skills/security-and-hardening/SKILL.md:25
  > "Name the assets." — skills/security-and-hardening/SKILL.md:26
- Dependency manifests and audit reports:
  > "Run the detected package manager's native audit" — skills/security-and-hardening/SKILL.md:53
- Human approval for sensitive architectural modifications:
  > "Ask First (Requires Human Approval)" — skills/security-and-hardening/SKILL.md:55

## Outputs — required
- Hardened source code across system boundaries:
  > "Validate all external input" — skills/security-and-hardening/SKILL.md:46
- Security review checklists:
  > "## Security Review Checklist" — skills/security-and-hardening/SKILL.md:405
- Triaged dependency audit decisions:
  > "Triaging Dependency Audit Results" — skills/security-and-hardening/SKILL.md:272
- Data classification and privacy deletion paths:
  > "Data Privacy & Compliance" — skills/security-and-hardening/SKILL.md:356

## Invokes — required
- reference ../../references/security-checklist.md — skills/security-and-hardening/SKILL.md:77
- skill observability-and-instrumentation — skills/security-and-hardening/SKILL.md:369
- skill debugging-and-error-recovery — skills/security-and-hardening/SKILL.md:375

## Invoked by — required
- command commands/review.toml — commands/review.toml:11
- skill skills/code-review-and-quality/SKILL.md — skills/code-review-and-quality/SKILL.md:66
- skill skills/source-driven-development/SKILL.md — skills/source-driven-development/SKILL.md:101
- skill skills/observability-and-instrumentation/SKILL.md — skills/observability-and-instrumentation/SKILL.md:91
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:10
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:35
- reference references/definition-of-done.md — references/definition-of-done.md:48
- reference references/security-checklist.md — references/security-checklist.md:3
- doc CLAUDE.md — CLAUDE.md:25
- doc README.md — README.md:270

## Concepts named — required, verbatim
- `STRIDE` — skills/security-and-hardening/SKILL.md:27 — defined here
- `Three-Tier Boundary System` — skills/security-and-hardening/SKILL.md:42 — defined here
- `Always Do` — skills/security-and-hardening/SKILL.md:44 — defined here
- `Ask First` — skills/security-and-hardening/SKILL.md:55 — defined here
- `Never Do` — skills/security-and-hardening/SKILL.md:65 — defined here
- `OWASP Top 10` — skills/security-and-hardening/SKILL.md:75 — used here
- `Injection` — skills/security-and-hardening/SKILL.md:79 — defined here
- `Broken Authentication` — skills/security-and-hardening/SKILL.md:92 — defined here
- `Cross-Site Scripting` — skills/security-and-hardening/SKILL.md:116 — defined here
- `Broken Access Control` — skills/security-and-hardening/SKILL.md:130 — defined here
- `Security Misconfiguration` — skills/security-and-hardening/SKILL.md:150 — defined here
- `Sensitive Data Exposure` — skills/security-and-hardening/SKILL.md:175 — defined here
- `Server-Side Request Forgery` — skills/security-and-hardening/SKILL.md:189 — defined here
- `Supply-Chain Hygiene` — skills/security-and-hardening/SKILL.md:299 — defined here
- `Rate Limiting` — skills/security-and-hardening/SKILL.md:312 — defined here
- `Secrets Management` — skills/security-and-hardening/SKILL.md:332 — defined here
- `Data Privacy & Compliance` — skills/security-and-hardening/SKILL.md:356 — defined here
- `OWASP Top 10 for LLM Applications` — skills/security-and-hardening/SKILL.md:379 — used here
- `Security Review Checklist` — skills/security-and-hardening/SKILL.md:405 — defined here
- `Common Rationalizations` — skills/security-and-hardening/SKILL.md:453 — defined here
- `Red Flags` — skills/security-and-hardening/SKILL.md:469 — defined here

## Structure
- Overview — skills/security-and-hardening/SKILL.md:8
- When to Use — skills/security-and-hardening/SKILL.md:12
- Process: Threat Model First — skills/security-and-hardening/SKILL.md:21
- The Three-Tier Boundary System — skills/security-and-hardening/SKILL.md:42
- OWASP Top 10 Prevention Patterns — skills/security-and-hardening/SKILL.md:75
- Input Validation Patterns — skills/security-and-hardening/SKILL.md:222
- Triaging Dependency Audit Results — skills/security-and-hardening/SKILL.md:272
- Rate Limiting — skills/security-and-hardening/SKILL.md:312
- Secrets Management — skills/security-and-hardening/SKILL.md:332
- Data Privacy & Compliance — skills/security-and-hardening/SKILL.md:356
- Securing AI / LLM Features — skills/security-and-hardening/SKILL.md:377
- Security Review Checklist — skills/security-and-hardening/SKILL.md:405
- See Also — skills/security-and-hardening/SKILL.md:450
- Common Rationalizations — skills/security-and-hardening/SKILL.md:453
- Red Flags — skills/security-and-hardening/SKILL.md:469
- Verification — skills/security-and-hardening/SKILL.md:486

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- TOCTOU vulnerability in standard URL validation: Notes that `fetch` resolves DNS again after validation checks, allowing DNS rebinding attacks with short-TTL records unless DNS pinning or filtering agents (`request-filtering-agent` / `ssrf-req-filter`) are used (skills/security-and-hardening/SKILL.md:220).
- Explicit guidance on LLM boundaries: Integrates the 2025 OWASP Top 10 for LLM Applications, explicitly instructing that model output must be treated as untrusted data rather than executable logic or markup, and forbidding prompt-based permissions (skills/security-and-hardening/SKILL.md:379-403).
- Data privacy as engineering architecture: Frames privacy compliance (GDPR/CCPA) around data minimization, schema erasures, auditable consent gates, and lifecycle TTLs rather than an after-the-fact legal policy (skills/security-and-hardening/SKILL.md:358-373).

## Context cost
24192 bytes, ~5500 tokens. Standalone skill markdown file; loads `references/security-checklist.md` (11881 bytes, ~2700 tokens) on demand for total context cost of ~36073 bytes, ~8200 tokens.
