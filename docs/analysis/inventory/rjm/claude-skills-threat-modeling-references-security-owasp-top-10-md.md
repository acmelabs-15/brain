---
package: rjm
path: .claude/skills/threat-modeling/references/security-owasp-top-10.md
type: reference
bytes: 3920
unit: inv-rjm-177
in_scope_via: .claude/skills/threat-modeling/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-owasp-top-10.md, sha256: c84e707337731a44229ec09a5a162f88474a205262ad3a0ef9041b6ae9899533}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/threat-modeling/references/security-owasp-top-10.md

## Purpose — required, verbatim
> "Industry-standard vulnerability categories for web application security. Use as a checklist during Phase 2 (Threat Identification) to ensure coverage." — .claude/skills/threat-modeling/references/security-owasp-top-10.md:9

## Design intent — required
Summarizes the OWASP Top 10 (2021) web application security risk categories to serve as a comprehensive threat checklist during Phase 2 (Threat Identification), providing code-level examples for critical categories (A01 Broken Access Control, A02 Cryptographic Failures, A03 Injection) and a bidirectional mapping between STRIDE categories and OWASP entries.

## Phase — required
rjm:spec

## Inputs — required
Web application architecture, endpoints, database queries, authentication flows, data storage schemes, logging mechanisms.

## Outputs — required
none

## Invokes — required
- reference security-defense-in-depth.md — .claude/skills/threat-modeling/references/security-owasp-top-10.md:101
- reference security-zero-trust.md — .claude/skills/threat-modeling/references/security-owasp-top-10.md:102
- reference security-least-privilege.md — .claude/skills/threat-modeling/references/security-owasp-top-10.md:103

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:434
- reference security-least-privilege.md — .claude/skills/threat-modeling/references/security-least-privilege.md:142
- reference security-zero-trust.md — .claude/skills/threat-modeling/references/security-zero-trust.md:99

## Concepts named — required, verbatim
- `OWASP Top 10 (2021)` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:7 — defined here
- `Broken Access Control` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:15 — defined here
- `Cryptographic Failures` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:16 — defined here
- `Injection` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:17 — defined here
- `Insecure Design` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:18 — defined here
- `Security Misconfiguration` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:19 — defined here
- `Vulnerable Components` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:20 — defined here
- `Authentication Failures` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:21 — defined here
- `Integrity Failures` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:22 — defined here
- `Logging Failures` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:23 — defined here
- `SSRF` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:24 — defined here
- `STRIDE to OWASP Mapping` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:76 — defined here
- `Defense in Depth` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:101 — used here
- `Zero Trust` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:102 — used here
- `Least Privilege` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:103 — used here

## Structure
- `# OWASP Top 10 (2021)` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:7
- `## The 10 Categories` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:11
- `## Quick Reference by Risk Area` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:26
- `## Critical Categories with Code Examples` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:38
- `### A01: Broken Access Control` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:40
- `### A02: Cryptographic Failures` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:55
- `### A03: Injection` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:59
- `## STRIDE to OWASP Mapping` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:76
- `## Relationship to Security Testing` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:89
- `## Related` — .claude/skills/threat-modeling/references/security-owasp-top-10.md:99

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/threat-modeling/references/security-owasp-top-10.md:2 · Frontmatter source wiki/concepts/Design Principles/OWASP Top 10.md does not exist in repository.

## Observations
Provides a table bridging STRIDE threat categories (Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation of Privilege) directly to OWASP Top 10 vulnerabilities (A01 through A09).

## Context cost
3920 bytes, ~980 tokens.
