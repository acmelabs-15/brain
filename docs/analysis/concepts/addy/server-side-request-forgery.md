---
package: addy
name: Server-Side Request Forgery
slug: server-side-request-forgery
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

# Server-Side Request Forgery

## Definition — verbatim
> "an attacker can aim it at internal services (cloud metadata, `localhost`, private IPs)." — skills/security-and-hardening/SKILL.md:191

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/security-and-hardening/SKILL.md | 189 | defined here | Detailed as an outbound network vulnerability where user-influenced URLs target internal cloud or local services |

## Consumes
User-supplied external URLs, webhooks, link preview generators, server-side fetch calls.

## Produces
Strict URL allowlisting, HTTPS scheme verification, DNS resolution checks rejecting private/reserved IP blocks, and redirect prevention.

## When applied
Whenever server-side code performs outbound network requests to URLs influenced or supplied by users.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
Server-Side Request Forgery (SSRF) occurs when an attacker manipulates outbound server HTTP requests to probe or interact with private internal resources (such as cloud metadata services or localhost interfaces). Addy prescribes strict host allowlists, HTTPS protocol enforcement, and DNS resolution validation to ensure outgoing requests cannot reach private network spaces.
