---
package: addy
name: Third-Party Integrations
slug: third-party-integrations
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

# Third-Party Integrations

## Definition — verbatim
(used, not defined)
> "### 5. Third-Party Integrations" — agents/security-auditor.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 41 | defines | Section heading establishing audit scope for API key security, webhook signature verification, CDN script integrity hashes, OAuth PKCE flows, and SSRF prevention. |

## Consumes
External API clients, webhook receiver handlers, CDN script tags, OAuth implementation logic, and server-side HTTP request handlers.

## Produces
Security findings regarding external boundary trust assumptions and third-party service vulnerabilities.

## When applied
Applied when auditing code that consumes external services, receives external webhooks, or performs outbound HTTP requests.

## Sub-concepts
ssrf

## Part of
security-audit-report

## Implementation status
clean

## Design notes
Third-Party Integrations establishes explicit security audit criteria for external service boundaries, preventing common external integration failures such as unvalidated webhook callbacks and server-side request forgery.
