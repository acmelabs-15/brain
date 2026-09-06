---
package: addy
name: HTTP validators
slug: http-validators
kind: technique
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

# HTTP validators

## Definition — verbatim
(used, not defined)
> "HTTP validators; 304 Not Modified is the only signal to serve from cache." — hooks/sdd-cache-pre.sh:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-pre.sh | 5 | used here | Describes reliance on HTTP standard validators for cache freshness verification. |

## Consumes
HTTP response headers from origin server containing ETag or Last-Modified values.

## Produces
Conditional request parameters (If-None-Match, If-Modified-Since) for lightweight revalidation.

## When applied
Applied during WebFetch caching and retrieval to delegate document freshness decisions to upstream origin servers.

## Sub-concepts
etag, last-modified

## Part of
sdd-cache-hook

## Implementation status
clean

## Design notes
Cache validation technique leveraging standard HTTP headers (ETag, Last-Modified) to delegate freshness verification to origin servers, guaranteeing agents only use verified documentation.
