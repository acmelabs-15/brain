---
package: rjm
path: .agents/security/security-best-practices.md
type: agent
bytes: 9134
unit: inv-rjm-59
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/security/security-best-practices.md, sha256: e4b856de00c773a9a4c61fb9beece08330f59e5739fd5a53f1902a992b0336fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/security/security-best-practices.md

## Purpose — required, verbatim
> "This guide defines security best practices that should be enforced during code review and development. It covers input validation, error handling, logging, cryptography, and testing requirements." — .agents/security/security-best-practices.md:5

## Design intent — required
Serves as the foundational repository-wide security standard for secure coding and code review across 5 core pillars (input validation, error handling, logging, cryptography, and security testing), providing concrete allowlist/denylist rules, required test coverage thresholds, and quick-reference review questions.

## Phase — required
cross-phase

## Inputs — required
- "Validation Strategy" — .agents/security/security-best-practices.md:11
- "Error Handling Strategy" — .agents/security/security-best-practices.md:63
- "Logging Strategy" — .agents/security/security-best-practices.md:121
- "Cryptography Guidelines" — .agents/security/security-best-practices.md:175
- "Security Testing Coverage" — .agents/security/security-best-practices.md:231

## Outputs — required
- "Input Validation Checklist" — .agents/security/security-best-practices.md:46
- "Error Handling Checklist" — .agents/security/security-best-practices.md:105
- "Logging Checklist" — .agents/security/security-best-practices.md:159
- "Cryptography Checklist" — .agents/security/security-best-practices.md:214
- "Security Testing Checklist" — .agents/security/security-best-practices.md:289
- "Security Code Review Questions" — .agents/security/security-best-practices.md:305

## Invokes — required
- doc static-analysis-checklist.md — .agents/security/security-best-practices.md:332
- doc secret-detection-patterns.md — .agents/security/security-best-practices.md:333
- doc code-quality-security.md — .agents/security/security-best-practices.md:334
- doc architecture-security-template.md — .agents/security/security-best-practices.md:335

## Invoked by — required
- doc ADR-037-memory-router-security-review.md — .agents/security/ADR-037-memory-router-security-review.md:611
- doc ADR-037-findings-summary.md — .agents/security/ADR-037-findings-summary.md:273
- doc code-quality-security.md — .agents/security/code-quality-security.md:265
- doc infrastructure-file-patterns.md — .agents/security/infrastructure-file-patterns.md:223
- doc secret-detection-patterns.md — .agents/security/secret-detection-patterns.md:258

## Concepts named — required, verbatim
`Security Best Practices Enforcement Guide` — .agents/security/security-best-practices.md:1 — defined here
`Input Validation` — .agents/security/security-best-practices.md:9 — defined here
`Allowlist Validation` — .agents/security/security-best-practices.md:22 — defined here
`Denylist Validation` — .agents/security/security-best-practices.md:36 — defined here
`Input Validation Checklist` — .agents/security/security-best-practices.md:46 — defined here
`Error Handling` — .agents/security/security-best-practices.md:61 — defined here
`Secure Error Patterns` — .agents/security/security-best-practices.md:74 — defined here
`Error Handling Checklist` — .agents/security/security-best-practices.md:105 — defined here
`Logging` — .agents/security/security-best-practices.md:119 — defined here
`Secure Logging Patterns` — .agents/security/security-best-practices.md:132 — defined here
`Logging Checklist` — .agents/security/security-best-practices.md:159 — defined here
`Cryptography` — .agents/security/security-best-practices.md:173 — defined here
`Secure Cryptography Patterns` — .agents/security/security-best-practices.md:186 — defined here
`Cryptography Checklist` — .agents/security/security-best-practices.md:214 — defined here
`Testing Requirements` — .agents/security/security-best-practices.md:229 — defined here
`Security Testing Checklist` — .agents/security/security-best-practices.md:289 — defined here
`Security Code Review Questions` — .agents/security/security-best-practices.md:305 — defined here
`Red Flags to Watch` — .agents/security/security-best-practices.md:316 — defined here

## Structure
# Security Best Practices Enforcement Guide — .agents/security/security-best-practices.md:1
## Purpose — .agents/security/security-best-practices.md:3
## 1. Input Validation — .agents/security/security-best-practices.md:9
### Validation Strategy — .agents/security/security-best-practices.md:11
### Validation Patterns — .agents/security/security-best-practices.md:20
#### Do: Allowlist Validation — .agents/security/security-best-practices.md:22
#### Don't: Denylist Validation — .agents/security/security-best-practices.md:36
### Input Validation Checklist — .agents/security/security-best-practices.md:46
## 2. Error Handling — .agents/security/security-best-practices.md:61
### Error Handling Strategy — .agents/security/security-best-practices.md:63
### Secure Error Patterns — .agents/security/security-best-practices.md:74
#### Do: Safe Error Responses — .agents/security/security-best-practices.md:76
#### Don't: Verbose Error Responses — .agents/security/security-best-practices.md:91
### Error Handling Checklist — .agents/security/security-best-practices.md:105
## 3. Logging — .agents/security/security-best-practices.md:119
### Logging Strategy — .agents/security/security-best-practices.md:121
### Secure Logging Patterns — .agents/security/security-best-practices.md:132
#### Do: Structured, Safe Logging — .agents/security/security-best-practices.md:134
#### Don't: Dangerous Logging — .agents/security/security-best-practices.md:146
### Logging Checklist — .agents/security/security-best-practices.md:159
## 4. Cryptography — .agents/security/security-best-practices.md:173
### Cryptography Guidelines — .agents/security/security-best-practices.md:174
### Secure Cryptography Patterns — .agents/security/security-best-practices.md:186
#### Do: Use Standard Libraries — .agents/security/security-best-practices.md:188
#### Don't: Roll Your Own Crypto — .agents/security/security-best-practices.md:201
### Cryptography Checklist — .agents/security/security-best-practices.md:214
## 5. Testing Requirements — .agents/security/security-best-practices.md:229
### Security Testing Coverage — .agents/security/security-best-practices.md:231
### Required Security Tests — .agents/security/security-best-practices.md:242
#### Authentication Tests — .agents/security/security-best-practices.md:244
#### Authorization Tests — .agents/security/security-best-practices.md:263
#### Input Validation Tests — .agents/security/security-best-practices.md:279
### Security Testing Checklist — .agents/security/security-best-practices.md:289
## 6. Quick Reference — .agents/security/security-best-practices.md:303
### Security Code Review Questions — .agents/security/security-best-practices.md:305
### Red Flags to Watch — .agents/security/security-best-practices.md:316
## Related Documents — .agents/security/security-best-practices.md:330

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Comprehensive 5-part guide featuring paired "Do" and "Don't" code examples (primarily in C# / .NET using xUnit Pester-style facts) alongside granular verification checklists. Prescribes strict coverage targets (95% for auth/authz/crypto, 90% for input validation and security middleware) and explicitly catalogs cryptography choices (recommending bcrypt/Argon2, AES-256-GCM, TLS 1.3, Ed25519/ECDSA while prohibiting MD5, SHA1, DES, 3DES, RC4, RSA-1024).

## Context cost
9134 bytes, approximately 2284 tokens.
