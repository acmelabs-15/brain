---
package: addy
name: Security Misconfiguration
slug: security-misconfiguration
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Security Misconfiguration

## Definition — verbatim
> "// Security headers (use helmet for Express)" — skills/security-and-hardening/SKILL.md:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 183 | references | Listed as OWASP #5 risk prevented via security headers, minimal permissions, and dependency audits. |
| skills/security-and-hardening/SKILL.md | 150 | defines | Section illustrating helmet middleware for security headers, Content Security Policy, and restrictive CORS. |

## Consumes
Web server frameworks, default settings, HTTP response pipelines, and external asset sources.

## Produces
Hardened web server configuration with comprehensive security headers and tight CORS restrictions.

## When applied
When initializing web frameworks, configuring production servers, or setting up API middleware.

## Sub-concepts
security-headers, cors-configuration

## Part of
owasp-top-10-quick-reference, security-and-hardening

## Implementation status
clean

## Design notes
Security Misconfiguration (OWASP A05) stems from default configurations, unhardened middleware, missing HTTP headers, or overly permissive CORS policies. Addy mandates standard defensive middleware (such as Helmet in Express) to inject CSP, HSTS, and frame protection, coupled with explicit domain whitelists for cross-origin access.
