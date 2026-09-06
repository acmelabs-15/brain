---
package: addy
name: revalidate
slug: revalidate
kind: technique
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# revalidate

## Definition — verbatim
(used, not defined)
> "pre hook can revalidate on the next fetch." — hooks/sdd-cache-post.sh:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-post.sh | 6 | used here | Describes checking cached resource freshness against origin server validators. |

## Consumes
Cached HTTP response body, stored origin validators (ETag, Last-Modified), and target URL.

## Produces
Authoritative determination of whether cached content matches current origin state (HTTP 304 or 200).

## When applied
Applied prior to retrieving remote documentation during source-driven development.

## Sub-concepts
none

## Part of
source-driven-development

## Implementation status
clean

## Design notes
Cache verification technique that queries the authoritative origin server via lightweight conditional HEAD requests to confirm content validity rather than blindly trusting local disk cache.
