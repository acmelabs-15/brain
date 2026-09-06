---
package: addy
name: Always Do
slug: always-do
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Always Do

## Definition — verbatim
(used, not defined)

> "### Always Do (No Exceptions)" — skills/security-and-hardening/SKILL.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/security-and-hardening/SKILL.md | 44 | defined here | Defines the mandatory baseline security rules that must be applied without exception |

## Consumes
External input boundaries, database queries, session handling, cookie definitions, dependency lockfiles.

## Produces
Mandatory input validation, parameterized queries, output encoding, HTTPS enforcement, password hashing, security headers, secure cookies, and dependency audits.

## When applied
Continuously applied as non-negotiable security requirements whenever code crosses external boundaries or handles sensitive data.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
Always Do constitutes the non-negotiable baseline tier of addy's Three-Tier Boundary System. It codifies foundational defensive programming practices—including parameterized SQL, context-aware output encoding, cryptographic password hashing, and security headers—that autonomous agents must enforce without exception to prevent common web application vulnerabilities.
