---
package: addy
name: Sensitive Data Exposure
slug: sensitive-data-exposure
kind: pattern
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

# Sensitive Data Exposure

## Definition — verbatim
(used, not defined)

> "// Never return sensitive fields in API responses" — skills/security-and-hardening/SKILL.md:178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/security-and-hardening/SKILL.md | 175 | defined here | Documented as an OWASP data security flaw prevented by sanitizing API payloads and managing secrets via environment variables |

## Consumes
Internal database entity records, authentication tokens, API keys, user profiles.

## Produces
Sanitized public data models, stripped response payloads excluding private credentials, and environment variable abstractions for secrets.

## When applied
When designing and serializing API response bodies, database queries, and server configuration files.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
Sensitive data exposure happens when internal records (such as password hashes, reset tokens, or API credentials) leak through public API responses or source code. Addy enforces explicit data sanitization filters on outgoing payloads and requires keeping sensitive secrets confined to runtime environment variables.
