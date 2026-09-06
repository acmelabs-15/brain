---
package: addy
name: SSRF
slug: ssrf
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
  - {path: evals/cases/security-and-hardening.json, sha256: a521a14857fe9dd79e11115568655135274bc1e636e43a6be1cd98c025569a0a}
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# SSRF

## Definition — verbatim
(used, not defined)
> "Are server-side fetches of user-supplied URLs allowlisted (SSRF)?" — agents/security-auditor.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 46 | references | Audit checklist question verifying that server-side requests targeting user-supplied URLs are strictly allowlisted to prevent SSRF. |
| evals/cases/security-and-hardening.json | 39 | references | Test case expectation asserting that SSRF protections cover private and reserved IP addresses rather than relying solely on URL scheme checks. |
| references/security-checklist.md | 65 | references | Input validation checklist item mandating that server-side URL fetches are allowlisted and private/reserved IPs are blocked to prevent SSRF. |

## Consumes
Server-side network fetch code that accepts user-provided destinations or webhook endpoints.

## Produces
Defensive controls including domain allowlists, DNS resolution checks, and private/reserved IP blocklists.

## When applied
Applied whenever the application makes outbound HTTP requests to endpoints supplied or influenced by users.

## Sub-concepts
none

## Part of
third-party-integrations

## Implementation status
clean

## Design notes
Server-Side Request Forgery is treated as a critical vulnerability pattern in addy's security model, requiring defense-in-depth measures like private IP range blocking and domain allowlisting to prevent internal network scanning.
