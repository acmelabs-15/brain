---
package: addy
name: "hardening"
slug: hardening
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# hardening

## Definition — verbatim
(used, not defined)

> "Hardens code against vulnerabilities." — external/security-and-hardening.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/security-and-hardening.md | 5 | used here | Stated as the primary objective of the security skill and tagged as a catalog topic chip. |

## Consumes
Application source code, dependency graphs, API boundaries, and configuration settings.

## Produces
Hardened code resistant to OWASP vulnerabilities, sanitized inputs, parameterized queries, and secure headers.

## When applied
Applied during the Review phase or whenever writing code that interacts with untrusted data or user sessions.

## Sub-concepts
secrets-management, three-tier-boundary-system

## Part of
security-and-hardening

## Implementation status
defects: doc-drift

## Design notes
Hardening is the systematic application of security controls and defensive programming to reduce an application's attack surface and eliminate exploitable vulnerabilities prior to deployment.
