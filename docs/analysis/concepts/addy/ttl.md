---
package: addy
name: TTL
slug: ttl
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# TTL

## Definition — verbatim
(used, not defined)
> "no TTL, no prompt in the key." — hooks/SDD-CACHE.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/SDD-CACHE.md | 55 | used here | Mentioned in mental model section explaining that the cache rejects arbitrary time-to-live intervals. |

## Consumes
none

## Produces
none

## When applied
Evaluated during cache architecture design (explicitly rejected in favor of origin revalidation).

## Sub-concepts
none

## Part of
sdd-cache-hook

## Implementation status
clean

## Design notes
Time-To-Live expiration mechanism, which Addy's SDD cache explicitly rejects ("no TTL") because arbitrary time expiration risks serving stale or invalid documentation; freshness must always be proved via origin revalidation.
