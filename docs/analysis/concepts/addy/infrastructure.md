---
package: addy
name: Infrastructure
slug: infrastructure
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Infrastructure

## Definition — verbatim
(used, not defined)
> "### 4. Infrastructure" — agents/security-auditor.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 34 | defines | Section heading defining the review scope for security headers, CORS restrictions, dependency vulnerability scanning, error masking, and service account least privilege. |

## Consumes
HTTP server configuration, response headers, CORS policies, dependency manifests, and error handling middleware.

## Produces
Infrastructure-level vulnerability findings and actionable hardening recommendations for deployment configurations.

## When applied
Applied when conducting a security audit across server configurations, hosting environments, and application-level network policies.

## Sub-concepts
none

## Part of
security-audit-report

## Implementation status
clean

## Design notes
Infrastructure represents the deployment and hosting review domain in addy's security audits, focusing on system-level perimeter defenses like HTTP security headers, origin policies, and dependency supply-chain security.
