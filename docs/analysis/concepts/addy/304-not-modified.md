---
package: addy
name: 304 Not Modified
slug: 304-not-modified
kind: gate
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# 304 Not Modified

## Definition — verbatim
(used, not defined)
> "HTTP validators; 304 Not Modified is the only signal to serve from cache." — hooks/sdd-cache-pre.sh:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-pre.sh | 5 | used here | Stated as the sole authoritative signal permitting delivery of cached response. |
| hooks/SDD-CACHE.md | 9 | used here | Documented as the required origin response to serve cached content. |

## Consumes
Origin HTTP status response code resulting from conditional revalidation HEAD request.

## Produces
Validation verdict permitting the pre-hook to intercept WebFetch and serve local cached content.

## When applied
Evaluated during pre-tool execution when revalidating a previously stored documentation page.

## Sub-concepts
none

## Part of
sdd-cache-hook

## Implementation status
clean

## Design notes
An authoritative HTTP status response functioning as a strict verification gate in citation caching; unless the upstream server responds with 304, cached content is untrusted and refetched.
