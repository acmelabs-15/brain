---
package: addy
name: CORS Configuration
slug: cors-configuration
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CORS Configuration

## Definition — verbatim
(used, not defined)
> "cors({ origin: '*' })  // Allows any origin" — references/security-checklist.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 13 | defines | Defines recommended restrictive Cross-Origin Resource Sharing policy and forbids wildcard production origins. |

## Consumes
API route declarations, allowed origin domain lists, allowed HTTP methods, and header policies.

## Produces
Configured CORS middleware enforcing origin restrictions and protecting authenticated endpoints.

## When applied
When configuring web servers or API route handlers that accept cross-origin browser requests.

## Sub-concepts
none

## Part of
security-checklist, security-and-hardening

## Implementation status
clean

## Design notes
CORS (Cross-Origin Resource Sharing) configuration dictates which external web origins are permitted to read API responses in browser contexts. Addy emphasizes that production applications must configure explicit, restrictive origin allowlists with credential support rather than permissive wildcards (`origin: '*'`), preventing unauthorized third-party sites from exfiltrating authenticated user data.
