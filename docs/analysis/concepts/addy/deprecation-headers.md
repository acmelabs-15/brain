---
package: addy
name: deprecation headers
slug: deprecation-headers
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/deprecation-and-migration/api-inventory.md, sha256: ac739ed01a61c7dea2e9ce570948cfe5443fce471fe8e3d894bb42c82a7ca6c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# deprecation headers

## Definition — verbatim
(used, not defined)
> "- v1 currently has no response deprecation headers or migration guide." — evals/fixtures/deprecation-and-migration/api-inventory.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/deprecation-and-migration/api-inventory.md | 9 | references | Identifies the absence of response deprecation headers as a gap in legacy API retirement. |

## Consumes
API route definition, deprecation policy, sunset date schedule, and HTTP response handling middleware.

## Produces
Standardized HTTP response headers communicating retirement timelines and migration URLs to consuming clients.

## When applied
During the announcement and migration phases of retiring an HTTP API endpoint.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
Deprecation headers provide an in-band communication mechanism in Addy's deprecation workflow. They inform API consumers directly via machine-readable HTTP response metadata about upcoming endpoint retirements and sunset schedules.
