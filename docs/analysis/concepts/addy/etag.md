---
package: addy
name: ETag
slug: etag
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ETag

## Definition — verbatim
(used, not defined)
> "with the current ETag / Last-Modified captured via a HEAD request so the" — hooks/sdd-cache-post.sh:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-post.sh | 5 | used here | HTTP entity tag validator captured from origin response and persisted to cache. |
| hooks/sdd-cache-pre.sh | 10 | used here | Checked to verify whether a cached entry can be conditionally revalidated. |
| hooks/SDD-CACHE.md | 55 | used here | Documented as an origin-supplied validator used to guarantee cache freshness without TTLs. |

## Consumes
HTTP response headers from origin documentation server.

## Produces
Conditional HTTP request header (If-None-Match) for downstream cache revalidation.

## When applied
Stored during post-fetch caching and inspected during pre-fetch cache validation.

## Sub-concepts
none

## Part of
sdd-cache-hook

## Implementation status
clean

## Design notes
Standard HTTP entity tag header used by the SDD citation cache to delegate freshness verification to upstream servers, ensuring cached documentation is only served when proven identical to origin.
