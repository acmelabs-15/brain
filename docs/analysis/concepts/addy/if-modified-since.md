---
package: addy
name: If-Modified-Since
slug: if-modified-since
kind: pattern
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

# If-Modified-Since

## Definition — verbatim
(used, not defined)
> "If-Modified-Since" — hooks/sdd-cache-pre.sh:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-pre.sh | 69 | used here | Conditional request header passed to curl when Last-Modified timestamp is present in cache. |
| hooks/SDD-CACHE.md | 9 | used here | Documented HTTP revalidation header paired with origin Last-Modified timestamp. |

## Consumes
Cached Last-Modified timestamp string associated with target documentation URL.

## Produces
HTTP request header formatted as `If-Modified-Since: <timestamp>`.

## When applied
Sent during conditional HEAD requests when an ETag is unavailable or alongside ETag for timestamp revalidation.

## Sub-concepts
none

## Part of
sdd-cache-hook

## Implementation status
clean

## Design notes
Standard HTTP conditional request header used to verify whether documentation has been modified since a previous fetch, preserving bandwidth while verifying source accuracy.
