---
package: addy
name: Network
slug: network
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Network

## Definition — verbatim
(used, not defined)
> "### 4. Network" — agents/web-performance-auditor.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/web-performance-auditor.md | 101 | defines | Section heading structuring audit checks for HTTP caching headers, HTTP/2 or HTTP/3, redirects, API pagination, and compression. |

## Consumes
Cache-Control headers, HTTP server protocols, API request structures, and transfer encoding configurations.

## Produces
Audit findings regarding transfer efficiency, cache utilization, and API request waterfalls.

## When applied
Applied when auditing network request patterns, asset caching policies, and payload compression.

## Sub-concepts
none

## Part of
web-performance-audit

## Implementation status
clean

## Design notes
Network evaluates transport-level optimization, ensuring assets leverage immutable caching, modern HTTP protocols, and payload compression to minimize network round-trips.
