---
package: addy
name: cache HIT
slug: cache-hit
kind: gate
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# cache HIT

## Definition — verbatim
(used, not defined)
> "cache HIT" — hooks/sdd-cache-pre.sh:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-pre.sh | 85 | used here | Debug log statement when cached content is revalidated and prepared for delivery. |

## Consumes
HTTP 304 response from origin server confirming that local cached content remains unchanged.

## Produces
Exit code 2 aborting host WebFetch call, and formatted payload emitted on stderr.

## When applied
Reached when an origin revalidation check succeeds and cached documentation is served directly.

## Sub-concepts
none

## Part of
sdd-cache-hook

## Implementation status
clean

## Design notes
Operational state in the citation cache lifecycle where origin revalidation confirms document immutability, prompting the hook to short-circuit network transfer and return cached documentation directly to the agent.
